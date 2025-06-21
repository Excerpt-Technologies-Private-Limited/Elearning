const Student = require('../models/Student');
const Assessment = require('../models/Assessment');
const Submission = require('../models/Submission');
// exports.getStudentDashboard = async (req, res) => {
//   try {
//     const { userId } = req.query;

//     console.log('Dashboard Fetch Request:', req.query);
//     if (!userId) {
//       return res.status(400).json({ message: 'User ID is required' });
//     }

//     const student = await Student.findById(userId).populate('courseIds');

//     if (!student) {
//       return res.status(404).json({ message: 'Student not found' });
//     }

//     const courseIds = student.courseIds.map(course => course._id);

//     const assessments = await Assessment.find({ courseId: { $in: courseIds } })
//       .populate('courseId');

//     res.status(200).json({
//       student,
//       enrolledCourses: student.courseIds,
//       assessments
//     });
//   } catch (err) {
//     console.error('Dashboard Fetch Error:', err);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };



exports.getStudentDashboard = async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    const student = await Student.findById(userId).populate('courseIds');
    if (!student) return res.status(404).json({ message: 'Student not found' });

    const courseIds = student.courseIds.map(course => course._id);
    const assessments = await Assessment.find({ courseId: { $in: courseIds } }).populate('courseId');

    // Fetch all submissions for this student
    const submissions = await Submission.find({ studentId: userId });

    // Create a map: { assessmentId: submission }
    const submissionMap = {};
    submissions.forEach(sub => {
      submissionMap[sub.assessmentId.toString()] = {
        submitted: true,
        score: sub.score,
      };
    });

    // Return everything
    res.status(200).json({
      student,
      enrolledCourses: student.courseIds,
      assessments,
      submissionMap, // new map for frontend logic
    });
  } catch (err) {
    console.error('Dashboard Fetch Error:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

