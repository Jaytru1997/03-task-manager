const Task = require("../modules/task");
const asyncWrapper = require("../middleware/async");

const getAllTasks = asyncWrapper(async (req,res) => {
    const tasks = await Task.find({});
    res.status(200).json({tasks});
});

const getTask = asyncWrapper(async (req,res) => {
    const { id:taskID } = req.params;
    const task = await Task.findOne({_id:taskID}).exec();
    res.status(200).json({ task });
    if(!task){
        return res.status(400).json( {error: 'No task with id: ${taskID}'});
    }
});

//Create operation
const createTask = asyncWrapper(async (req,res) => {
    const task = await Task.create(req.body);
    res.status(201).json(task);
});


//update task in database
const updateTask = asyncWrapper(async (req,res) => {
    const { id:taskID } = req.params;
    const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
        new:true,
        runValidators:true,
        // overwrite:true use this in put method to overwrite the old data
    }).exec();
    if(!task){
        return res.status(404).json( {error: 'No task with id: ${taskID}'});
    }
    res.status(200).json({task});
});


//delete task from database
const deleteTask = asyncWrapper(async (req,res) => {
    const { id:taskID } = req.params;
    const task = await Task.findOneAndDelete({_id:taskID}).exec();
    if(!task){
        return res.status(404).json( {error: 'No task with id: ${taskID}'});
    }
    res.status(200).json({status: "success", task: null});
});


module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}