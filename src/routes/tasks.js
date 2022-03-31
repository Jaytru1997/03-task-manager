var express = require("express");
var router = express.Router();

const {getAllTasks,getTask,createTask,updateTask,deleteTask} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(createTask)

router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;