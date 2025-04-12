const Task = require("../models/taskModel");
const taskUpdateValidation = require("../validations/taskUpdateValidation");
const taskValidation = require("../validations/taskValidation");

const getTasks = async (req, res) => {
  try {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    
    const sortBy = req.query.sortBy || "createdAt";
    const order = req.query.order === "desc" ? -1 : 1;    // 1 means ascending (oldest first)
    const status = req.query.status || null;

    const filter = {};
    if (status) {
      filter.status = status;
    }

    // if pagination  requested
    if (page && limit) {
      const skip = (page - 1) * limit;
      const tasks = await Task.find(filter)
        .sort({ [sortBy]: order }) //  Sort (e.g. createdAt: -1)   [sortBy]: it becomes a key of object
        .skip(skip)
        .limit(limit);

      const total = await Task.countDocuments(filter);

      return res.status(200).json({
        page,
        totalPages: Math.ceil(total / limit),
        totalTasks: total,
        tasks,
      });
    }

    // If no pagination, return all data
    const allTasks = await Task.find(filter).sort({ [sortBy]: order });
    return res.status(200).json(allTasks);

  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to fetch tasks", details: error });
  }
};

const getTaskById = async (req, res) => {
  try {
    const data = await Task.findById({ _id: req.params.id });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(404).json({ error: "Failed to fetch task", error });
  }
};

const createTask = async (req, res) => {
  const { error } = taskValidation.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const response = await Task.create(req.body);

    return res.status(201).json({ message: "Task created" });
  } catch (error) {
    return res.status(400).json({ error: "Failed to create task", error });
  }
};

const updateTask = async (req, res) => {
  const { error } = taskUpdateValidation.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const data = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!data) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.status(200).json({ message: "Successfully updated task", data });
  } catch (error) {
    return res.status(404).json({ error: "Failed to Update task", error });
  }
};

const updateStatus = async (req, res) => {
  const { error } = taskUpdateValidation.validate({ status: req.body.status });
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const data = await Task.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!data) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res
      .status(200)
      .json({ message: "Successfully updated status", data });
  } catch (error) {
    return res.status(404).json({ error: "Failed to Update status", error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const data = await Task.findByIdAndDelete({ _id: req.params.id });
    return res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    return res.status(404).json({ error: "Failed to delete task", error });
  }
};

module.exports = {
  getTasks,
  createTask,
  getTaskById,
  deleteTask,
  updateTask,
  updateStatus,
};
