const Task = require("../models/taskModel");
const taskServices = require('../services/taskServices')

const getAllTasks = async (req, res) => {
  const tasks = await Task.findAll();
  let status = tasks.length !== 0 ? 200 : 204;
  res.status(status).json(tasks);
};

const getTask = async (req, res) => {
  const data = await taskServices.getTaskById(req.params.id);
  res.status(data.status).json(data);
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: "Error creating task", err });
  }
};

const updateTask = async (req, res) => {
  try {
    const taskId = parseInt(req.params.id);

    await Task.update(req.body, {
      where: {
        id: taskId,
      },
    });

    const data = await taskServices.getTaskById(taskId);
    res.status(data.status).json(data);
  } catch (err) {
    console.log("Erro na requisicao: " + err.message);
  }
};

const deleteTask = async (req, res) => {
  const data = await taskServices.getTaskById(req.params.id);

  await Task.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.status(data.status).json(data);
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
