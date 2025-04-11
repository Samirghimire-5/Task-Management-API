const Task = require("../models/taskModel")

const getTasks = async(req, res) => {
  const data = await Task.find();
  res.json(data)
}

const createTask = async (req, res) => {
  try {
    const response = await Task.create(req.body)

    res.json({message: "Task created"})
  } catch (Error) {
    res.json({error: Error})
  }

}

module.exports = {getTasks, createTask}