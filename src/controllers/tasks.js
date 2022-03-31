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
    // res.send("get all tasks");
    // next();
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

const updateTask = (req,res) => {
    res.send("update single task");
    // next();
};

const deleteTask = (req,res) => {
    res.send("delete task");
    // next();
};


module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}