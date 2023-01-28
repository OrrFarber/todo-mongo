const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  date: {
    type: String,
  },
  complete: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
