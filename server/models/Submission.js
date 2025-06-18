const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  questionText: String,
  type: String,
  userAnswer: String,
  correctAnswer: String,
  isCorrect: Boolean,
});

const submissionSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  assessmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Assessment', required: true },
  answers: [answerSchema],
  score: Number,
}, { timestamps: true });

module.exports = mongoose.model('Submission', submissionSchema);
