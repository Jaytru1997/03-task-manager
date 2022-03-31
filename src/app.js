require("dotenv").config();
var express = require("express");
var app = express();
var connectDB = require("./db/connect");
const tasks = require("./routes/tasks");
const notFound = require("./middleware/notFound");

//middleware
app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);

app.use(notFound);



//connect database
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  })
  } catch (err) {
    console.log(err);
  }
};

start();


module.exports = app;
