const express = require("express");
const app = express();

const mongoose = require("mongoose");
const todoController = require("./controllers/todoController");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://orrfarber:morag123@cluster0.xcslswx.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected successfuly"))
  .catch((err) => {
    console.log("connection to database unsuccessfully");
    console.log(err);
  });

app.post("/add", todoController.add);
app.post("/delete", todoController.delete);
app.get("/list", todoController.list);
app.put("/edit", todoController.edit);
app.patch("/mark", todoController.mark);

app.listen(8001, () => console.log("listening on port 8001"));
