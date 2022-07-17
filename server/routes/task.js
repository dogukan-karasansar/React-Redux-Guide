const router = require("express").Router();
const Task = require("../models/task.model");
const { default: mongoose } = require("mongoose");

router.get("/", (req, res) => {
  Task.find()
    .then((tasks) => {
      return res.json(tasks);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/completed", (req, res) => {
  Task.findOneAndUpdate({ id: req.body.id }, { status: true }).then((task) => {
    res.json(task);
  }).catch((err) => {});
});

router.post("/addTask", (req, res) => {
  const newTask = new Task({
    id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    author: req.body.author,
    description: req.body.description,
    status: req.body.status,
    priority: req.body.priority,
  });
  newTask
    .save()
    .then(() => {
      return res.json(newTask);
    })
    .catch((err) => {
      return res.json(err);
    });
});

module.exports = router;
