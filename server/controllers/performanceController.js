const Submission = require('../models/Submission');
const Student = require('../models/Student');
const Assessment = require('../models/Assessment');

exports.getStudentPerformance = async (req, res) => {
  try {
    const { studentId } = req.query;
    if (!studentId) return res.status(400).json({ message: 'studentId is required' });

    const submissions = await Submission.find({ studentId })
      .populate('studentId', 'username')        // Only fetch username
      .populate('assessmentId', 'name');        // Only fetch assessment name

    const performance = submissions.map((sub) => ({
      studentName: sub.studentId.username,
      testName: sub.assessmentId.name,
      attendedAt: sub.createdAt,
      score: sub.score,
    }));

    res.status(200).json(performance);
  } catch (err) {
    console.error('Performance Fetch Error:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
