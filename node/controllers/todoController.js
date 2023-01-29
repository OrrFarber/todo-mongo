const Todo = require("../models/Todo");

exports.add = (req, res) => {
  const newTodo = new Todo(req.body);
  newTodo.save((error, todo) => {
    if (error) {
      res.status(501).json(error);
    } else {
      res.status(200).json({ message: "todo created", todo });
    }
  });
};

exports.delete = (req, res) => {
  Todo.findByIdAndDelete(req.body._id)
    .then((todo) => {
      console.log(req.body._id);
      if (!todo) {
        res.status(500).json({ message: "todo doesn't exist" });
      } else {
        res.status(200).json({ message: "todo deleted" });
      }
    })
    .catch((err) => console.log(err));
};

exports.list = (req, res) => {
  Todo.find()
    .then((list) => {
      if (!list) {
        res.status(500).json({ message: "no list" });
      } else {
        console.log(list);
        res.status(200).json({ message: "list found", list: list });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};
exports.mark = (req, res) => {};

exports.edit = (req, res) => {
  const { _id, title, description, date, complete } = req.body;
  try {
    Todo.updateOne(
      {
        _id,
      },
      {
        title,
        description,
        date,
        complete,
      }
    ).then((res) => {
      if (res.modifiCount > 0) {
        res.status(200).json({ res });
      } else {
        res.status(500).json({ message: "todo updated" });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

// exports.edit = (req, res) => {
//   Todo.findByIdAndUpdate(req.body.id, req.body.fields)
//     .then((todo) => {
//       if (!todo) {
//         res.status(500).json({ message: "todo doesn't exist" });
//       } else {
//         res.status(200).json({ message: "todo updated" });
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({ message: err });
//     });
// };

//   Todo.findOne(
//     {
//       title: req.body.title,
//     },
//     (error, todo) => {
//       if (todo == null) {
//         res.status(500).send({ message: "todo not found" });
//       } else if (todo.title === req.body.title) {
//         res.status(401).send({ message: " password  is wrong" });
//       } else if (
//         user.email === req.body.email &&
//         user.password === req.body.password
//       ) {
//         res.status(200).send({ message: "user found " + user });
//       }
//     }
//   );
// };
