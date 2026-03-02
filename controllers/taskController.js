const { Task, User } = require("../models");

exports.createTask = async (req, res) => {
  try {
    const { title, description, dueDate, userId } = req.body;

    if (!title)
      return res.status(400).json({ message: "Title is required" });

    const user = await User.findByPk(userId);
    if (!user)
      return res.status(404).json({ message: "User does not exist" });

    const task = await Task.create({
      title,
      description,
      dueDate,
      userId,
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllTasks = async (req, res) => {
  const tasks = await Task.findAll({
    include: User,
  });

  res.status(200).json(tasks);
};

exports.getTaskById = async (req, res) => {
  const task = await Task.findByPk(req.params.id);

  if (!task)
    return res.status(404).json({ message: "Task not found" });

  res.status(200).json(task);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findByPk(req.params.id);

  if (!task)
    return res.status(404).json({ message: "Task not found" });

  const { title, description, status, dueDate } = req.body;

  await task.update({ title, description, status, dueDate });

  res.status(200).json(task);
};

exports.deleteTask = async (req, res) => {
  const task = await Task.findByPk(req.params.id);

  if (!task)
    return res.status(404).json({ message: "Task not found" });

  await task.destroy();
  res.status(200).json({ message: "Task deleted successfully" });
};