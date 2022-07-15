const { Schema, default: mongoose } = require("mongoose");

const image = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    taskId: {
      type: String,
      required: true,
      unique: true,
      foreignKey: true,
    },
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 255,
    },
    url: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 1000,
    },
  },
  { timestamps: true }
);

const Image = mongoose.model("Image", image);

module.exports = Image;
