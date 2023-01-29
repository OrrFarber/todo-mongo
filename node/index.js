const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const todoController = require("./controllers/todoController");
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(process.env.URL_MONGO)
  .then(() => console.log("connected successfuly"))
  .catch((err) => {
    console.log("connection to database unsuccessfully");
    console.log(err);
  });

app.post("/add", todoController.add);
app.post("/delete", todoController.delete);
app.get("/list", todoController.list);
app.post("/edit", todoController.edit);
app.patch("/mark", todoController.mark);

app.listen(8001, () => console.log("listening on port 8001"));
