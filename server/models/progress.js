const mongoose = require('mongoose');

const videoProgressSchema = new mongoose.Schema({
  videoId: { type: String, required: true },
  completed: { type: Boolean, default: false }
}, { _id: false });

const courseProgressSchema = new mongoose.Schema({
  scourseId: { type: String, required: true },
  videos: [videoProgressSchema]
}, { _id: false });

const studentProgressSchema = new mongoose.Schema({
  studentId: { type: String, required: true, unique: true, index: true },
  courses: [courseProgressSchema]
}, { timestamps: true });

module.exports = mongoose.model('Progress', studentProgressSchema);