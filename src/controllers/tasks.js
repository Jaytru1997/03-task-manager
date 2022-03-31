var Task = require("../modules/task");

const getAllTasks = async (req,res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({tasks});
    } catch (err) {
        res.status(500).json({
            error: err
        });
    }
};

const getTask = async (req,res) => {
    try {
        const { id:taskID } = req.params;
        const task = await Task.findOne({_id:taskID}).exec();
        res.status(200).json({ task });
        if(!task){
            return res.status(400).json( {error: 'No task with id: ${taskID}'});
        }
    } catch (err) {
        res.status(500).json({
            error: err
        });
    }
};

//Create operation
const createTask = async (req,res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (err) {
        res.status(500).json({
            error: err
        });
    }
};


//update task in database
const updateTask = async (req,res) => {
    try {
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
    } catch (err) {
        res.status(500).json({
            error: err
        });
    }
};


//delete task from database
const deleteTask = async (req,res) => {
    try {
        const { id:taskID } = req.params;
        const task = await Task.findOneAndDelete({_id:taskID}).exec();
        if(!task){
            return res.status(404).json( {error: 'No task with id: ${taskID}'});
        }
        res.status(200).json({status: "success", task: null});
    } catch (err) {
        res.status(500).json({
            error: err
        });
    }
};


module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}