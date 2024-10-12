const Task = require("../models/taskModel");

const getAllTasks = async (req, res) => {
  const tasks = await Task.findAll();
  let status = tasks.length !== 0 ? 200 : 204;
  res.status(status).json(tasks);
};

const getTask = async (req, res) => {
  const task = await Task.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!task) return res.status(404).json({ message: "Task not found" });
  let status = task !== null ? 200 : 404;
  res.status(status).json(task);
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: "Error creating task", err });
  }
};

const updateTask = async (req, res) => {
  const taskId = parseInt(req.params.id);

  await Task.update(req.body, {
    where: {
      id: taskId,
    },
  });
  res.status(200).send();
};

const deleteTask = async (req, res) => {
  const deletedTask = await Task.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json(deletedTask);
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
