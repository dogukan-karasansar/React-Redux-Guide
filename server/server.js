const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
var path = require('path');

require("dotenv").config();

const app = express();
const port = process.env.PORT || 6000;

app.use('/uploads', express.static('uploads'));
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, (err) => {
  if (err) throw err;
  console.log("connected to MongoDB");
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const taskRouter = require("./routes/task.js");
const imageRouter = require("./routes/image.js");

app.use(express.json());
app.use("/task", taskRouter);
app.use("/image", imageRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
