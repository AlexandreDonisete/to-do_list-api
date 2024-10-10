const Task = require('../models/taskModel')

const getAllTasks = async(req, res) => {
    const tasks = await Task.findAll(); 
    res.status(200).json(tasks);
}

const getTask = async(req, res) => {
  const task = await Task.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(201).json(task);
}

const createTask = async (req, res) => {
    console.log(req.body)
    const task = await Task.create(req.body);
    res.status(201).json(task);
}

const updateTask = async (req, res)=>{
    const taskId = parseInt(req.params.id);
    
   await Task.update(
    req.body,
    {
      where: {
        id: taskId,
      },
    },
   );
   res.status(200).send();
}

const deleteTask = async (req,res)=>{
    const task = await Task.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(201).json(task);
}

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask }