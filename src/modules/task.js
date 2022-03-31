const mongoose = require("mongoose");


//validations using schema
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Please provide a name for the task'],
        trim: true, //trim input to remove extra spaces
        maxlength: [20, 'Task name cannot be more than 20 characters'],
        minlength: [1, 'Task name cannot be less than 3 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
});


module.exports = mongoose.model("Task", TaskSchema);