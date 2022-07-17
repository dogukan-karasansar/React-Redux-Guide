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

router.get("/", (req, res) => {
  Image.find()
    .then((images) => {
      return res.json(images);
    })
    .catch((err) => {
      return res.json(err);
    });
});

router.post("/addImage", upload.single("taskImage"), (req, res) => {
  const newImage = new Image({
    id: new mongoose.Types.ObjectId(),
    taskId: req.body.taskId,
    name: req.body.name,
    url: req.file.path,
  });
  newImage
    .save()
    .then(() => {
      console.log(newImage);
      return res.json(newImage);
    })
    .catch((err) => {
      return res.json(err);
    });
});

module.exports = router;
