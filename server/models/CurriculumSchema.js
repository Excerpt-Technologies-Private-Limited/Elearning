const mongoose = require("mongoose");

const ModuleSchema = new mongoose.Schema({
  moduleId: {
    type: String,

  },
  courseMode: {
    type: String,
    enum: ["Pre-recorded", "Live"],
    required: true,
  },
  moduleName: {
    type: String,
    required: true,
  },
  title: String,
  videos: [String], // filenames or paths
  description: String,
});

const CurriculumSchema = new mongoose.Schema({
  coursecode: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  modules: [ModuleSchema],
});

module.exports = mongoose.model("Curriculum", CurriculumSchema);
