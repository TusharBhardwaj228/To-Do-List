const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, "Name must be provided"],
    trim:true,
  },
  completed:{
    type: Boolean,
    default: false
  }
},{timestamps:true});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;