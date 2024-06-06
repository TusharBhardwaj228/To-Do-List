const {  getAllTasks,
  createTask,
  getOneTask,
  updateTask,
  deleteTask} = require('../controller/tasks.js');

const express = require('express');
const router = express.Router();

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getOneTask).patch(updateTask).delete(deleteTask);

module.exports = router;


