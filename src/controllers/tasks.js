

const getAllTasks = (req,res) => {
    res.send("get all tasks");
    // next();
}

const getTask = (req,res) => {
    res.json({
        "message": "update task",
        "task_id": req.params.id
    });
    // next();
}

const createTask = (req,res) => {
    res.json(req.body);
    // next();
}

const updateTask = (req,res) => {
    res.send("update single task");
    // next();
}

const deleteTask = (req,res) => {
    res.send("delete task");
    // next();
}


module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}