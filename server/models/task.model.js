const { Schema, default: mongoose } = require("mongoose");

const taskSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 255,
    },
    author: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 255,
    },
    description: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 255,
    },
    status: {
      type: Boolean,
      default: false,
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "low",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
