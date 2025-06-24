const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['mcq', 'short', 'long'],
    required: true,
  },
  questionText: { type: String, required: true },
  options: [String],
  answer: { type: String, required: true },
});

const assessmentSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  questions: [questionSchema],
}, { timestamps: true });

module.exports = mongoose.model('Assessment', assessmentSchema);
