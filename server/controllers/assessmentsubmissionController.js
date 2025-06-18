const Assessment = require('../models/Assessment');
const Submission = require('../models/Submission');

exports.submitAssessment = async (req, res) => {
  try {
    const { studentId, assessmentId, answers } = req.body;

    const assessment = await Assessment.findById(assessmentId);
    if (!assessment) return res.status(404).json({ message: 'Assessment not found' });

    let score = 0;

    const gradedAnswers = answers.map((ans, index) => {
      const question = assessment.questions[index];
      if (!question) return ans;

      const correct = question.answer;
      const isCorrect = ans.userAnswer?.trim().toLowerCase() === correct?.trim().toLowerCase();

      if (isCorrect) score++;

      return {
        ...ans,
        correctAnswer: correct,
        isCorrect,
      };
    });

    const newSubmission = new Submission({
      studentId,
      assessmentId,
      answers: gradedAnswers,
      score,
    });

    await newSubmission.save();

    res.status(200).json({ message: 'Assessment submitted', score });
  } catch (err) {
    console.error('Assessment Submit Error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

