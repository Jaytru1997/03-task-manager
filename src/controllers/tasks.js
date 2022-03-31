const Task = require("../models/tasks");

const getAllTasks = (req,res) => {
    res.send("Get all tasks");
}

const getTask = (req,res) => {
    res.send("Get single task");
}

const createTask = async (req,res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json(task);
    } catch (err) {
        res.status(500).json(err);
    }
}

const updateTask = (req,res) => {
    res.send("Update task");
}

const deleteTask = (req,res) => {
    res.send("Delete task");
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}