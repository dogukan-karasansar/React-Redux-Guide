const router = require("express").Router();
const Image = require("../models/Image.model");
const multer = require("multer");
const { default: mongoose } = require("mongoose");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.get("/:taskId", (req, res) => {
  Image.find({ taskId: req.params.taskId.slice(7) })
    .then((images) => {
      return res.json(images);
    })
    .catch((err) => {
      return res.json(err);
    });
});

router.post("/addImage", upload.single("taskImage"), (req, res) => {
  console.log(req.file);
  const newImage = new Image({
    id: new mongoose.Types.ObjectId(),
    taskId: req.body.taskId,
    name: req.body.name,
    url: req.file.path,
  });
  newImage
    .save()
    .then((image) => {
      return res.json(image);
    })
    .catch((err) => {
      return res.json(err);
    });
});

module.exports = router;
