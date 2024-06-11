const Task = require('../models/task_models.js');
const asyncWrapper = require('../middleware/async.js');
const {createCustomError} = require('../middleware/customerror.js');

const getAllTasks=asyncWrapper(async (req, res)=>{
  const task = await Task.find();
  res.status(201).json(task);  
});

const createTask=asyncWrapper(async(req, res)=>{
  const task = await Task.create(req.body); 
  res.status(201).json({task});  
});

const getOneTask=asyncWrapper(async(req, res, next)=>{
  const {id:taskId} = req.params;
  const task = await Task.findOne({_id:taskId});
  if(!task){
    return next(createCustomError('no task of this id..',400))
  }
  res.status(200).json({task});
});

const updateTask=asyncWrapper(async(req, res)=>{
  const {id:taskId} = req.params;
  const task = await Task.findOneAndUpdate({_id:taskId}, req.body, {
    new: true,
    runValidators: true
  })
  if(!task){
    return next(createCustomError('no task of this id..',400))
  }
  res.status(200).json({task}) 
});

const deleteTask=asyncWrapper(async (req, res)=>{
  const {id:taskId} = req.params;
  const task = await Task.findOneAndDelete({_id:taskId});
  if(!task){
    return next(createCustomError('no task of this id..',400))
  }
  res.status(200).json({task});
});

module.exports = {
  getAllTasks,
  createTask,
  getOneTask,
  updateTask,
  deleteTask
}