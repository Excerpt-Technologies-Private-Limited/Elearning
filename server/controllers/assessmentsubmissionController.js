// const Assessment = require('../models/Assessment');
// const Submission = require('../models/Submission');

// exports.submitAssessment = async (req, res) => {
//   try {
//     const { studentId, assessmentId, answers } = req.body;

//     const assessment = await Assessment.findById(assessmentId);
//     if (!assessment) return res.status(404).json({ message: 'Assessment not found' });

//     let score = 0;

//     const gradedAnswers = answers.map((ans, index) => {
//       const question = assessment.questions[index];
//       if (!question) return ans;

//       const correct = question.answer;
//       const isCorrect = ans.userAnswer?.trim().toLowerCase() === correct?.trim().toLowerCase();

//       if (isCorrect) score++;

//       return {
//         ...ans,
//         correctAnswer: correct,
//         isCorrect,
//       };
//     });

//     const newSubmission = new Submission({
//       studentId,
//       assessmentId,
//       answers: gradedAnswers,
//       score,
//     });

//     await newSubmission.save();

//     res.status(200).json({ message: 'Assessment submitted', score });
//   } catch (err) {
//     console.error('Assessment Submit Error:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

const Assessment = require('../models/Assessment');
const Submission = require('../models/Submission');
const Student = require('../models/Student'); // Make sure this is imported

// ✅ Grade helper function
// function getGrade(percentage) {
//   const p = parseFloat(percentage);
//   if (p >= 90) return 'A+';
//   if (p >= 80) return 'A';
//   if (p >= 70) return 'B';
//   if (p >= 60) return 'C';
//   if (p >= 50) return 'D';
//   return 'F';
// }

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

    // ✅ Calculate percentage and grade
    // const percentage = ((score / assessment.totalMarks) * 100).toFixed(2);
    // const grade = getGrade(percentage);

    // ✅ Save the submission
    const newSubmission = new Submission({
      studentId,
      assessmentId,
      answers: gradedAnswers,
      score,
    });

    await newSubmission.save();

    // ✅ Update or add assessmentResult to Student
    const student = await Student.findById(studentId);

    const existingIndex = student.assessmentResults.findIndex(result =>
      result.assessmentId.toString() === assessmentId
    );

    const resultData = {
      assessmentId,
      courseId: assessment.courseId,
      score,
      totalMarks: assessment.totalMarks,
      // percentage,
      // grade,
      submittedAt: new Date()
    };

    if (existingIndex !== -1) {
      student.assessmentResults[existingIndex] = resultData;
    } else {
      student.assessmentResults.push(resultData);
    }

    await student.save();

    // ✅ Respond to client
    res.status(200).json({
      message: 'Assessment submitted',
      score,
      totalMarks: assessment.totalMarks,
      
    });
  } catch (err) {
    console.error('Assessment Submit Error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
