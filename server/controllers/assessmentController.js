const Assessment = require('../models/Assessment');

// @desc    Create new assessment
// @route   POST /api/assessments
exports.createAssessment = async (req, res) => {
  try {
    const { courseId, name, questions } = req.body;
console.log('Create Assessment Request:', req.body);
    if (!courseId || !name || !questions || !Array.isArray(questions)) {
      return res.status(400).json({ error: 'Invalid assessment data' });
    }

    const newAssessment = new Assessment({
      courseId,
      name,
      questions,
    });

    await newAssessment.save();
    res.status(201).json({ message: 'Assessment created successfully', assessment: newAssessment });
  } catch (error) {
    console.error('Create Assessment Error:', error);
    res.status(500).json({ error: 'Server error while creating assessment' });
  }
};
