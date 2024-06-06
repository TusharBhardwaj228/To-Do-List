const Task = require('../models/task_models.js');
const getAllTasks=async (req, res)=>{
  try{
    const task = await Task.find();
    res.status(201).json({task});
  }catch(error){
    res.status(500).json({error});
  }
  
};

const createTask=async(req, res)=>{
  try{
    const task = await Task.create(req.body); 
    res.status(201).json({task});
  }
  catch(error){
    res.status(500).json({error});
  }  
};

const getOneTask=async(req, res)=>{
  try{
    const {id:taskId} = req.params;
    const task = await Task.findOne({_id:taskId});
    if(!task){
      return res.status(404).json({msg: `no list of this id..`});
    }
    res.status(200).json({task});
  }catch(error){
    res.status(500).json({msg:error});
  }
};

const updateTask=async(req, res)=>{
  try{
    const {id:taskId} = req.params;
    const task = await Task.findOneAndUpdate({_id:taskId}, req.body, {
      new: true,
      runValidators: true
    })
    if(!task){
      return res.status(404).json({msg: `no list of this id..`});
    }
    res.status(200).json({task})
  }catch(error){
    res.status(500).json({msg:error});
  }
};

const deleteTask=async (req, res)=>{
  try{
    const {id:taskId} = req.params;
    const task = await Task.findOneAndDelete({_id:taskId});
    if(!task){
      return res.status(404).json({msg:`id not existed..`});
    }
    res.status(200).json({task});
  }catch(error){
    res.status(500).json({msg:error});
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getOneTask,
  updateTask,
  deleteTask
}