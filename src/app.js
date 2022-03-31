// console.log('Task Manager App')
var express = require("express");
var app = express();
// var bodyParser = require("body-parser");
const tasks = require("./routes/tasks");


//middleware
// app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());


//routes
app.get("/hello", (req,res) => {
    res.send("Task Manager Saying Hello!");
});

app.use("/api/v1/tasks",tasks);






const port = 3000; 

app.listen(port, console.log(`listening on port ${port}...`))

module.exports = app;
