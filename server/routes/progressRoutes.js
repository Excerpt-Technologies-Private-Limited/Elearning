const express = require('express');
const router = express.Router();
const Progress = require('../models/progress'); // Your DB model

// Save/update progress for a video
// router.post('/', async (req, res) => {
//   const { studentId, scourseId, videoId, completed } = req.body;
//   console.log("Received progress update:", req.body);
//   try {
//     await Progress.findOneAndUpdate(
//   { studentId },
//   { [`courses.${scourseId}.${videoId}.completed`]: completed },
//   { upsert: true, new: true }
// );
//     res.json({ success: true });
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });


// router.post('/', async (req, res) => {
//   const { studentId, scourseId, videoId, completed } = req.body;
//   console.log("Received progress update:", req.body);
//   try {
//     const update = {
//       [`courses.${scourseId}.${videoId}.completed`]: completed
//     };
//     const progress = await Progress.findOneAndUpdate(
//       { studentId },
//       { $set: update },
//       { upsert: true, new: true }
//     );
//     res.json({ success: true, progress });
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

router.post('/', async (req, res) => {
  const { studentId, scourseId, videoId, completed } = req.body;
console.log("asd",studentId, scourseId, videoId, completed);
let completed1 = completed.completed ; // Ensure completed is a boolean
  try {
    // Find the student's progress doc
    let doc = await Progress.findOne({ studentId });

    if (!doc) {
      // New student: create new document
      doc = new Progress({
        studentId,
        courses: [{
          scourseId,
          videos: [{ videoId, completed:completed1 }]
        }]
      });
    } else {
      // Find course
      let course = doc.courses.find(c => c.scourseId === scourseId);
      if (!course) {
        // Add new course
        doc.courses.push({
          scourseId,
          videos: [{ videoId, completed:completed1 }]
        });
      } else {
        // Find video
        let video = course.videos.find(v => v.videoId === videoId);
        if (!video) {
          course.videos.push({ videoId, completed:completed1 });
        } else {
          video.completed = completed1;
        }
      }
    }

    await doc.save();
    res.json({ success: true, progress: doc });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
// Get all progress for a course/student
router.get('/', async (req, res) => {
  const { studentId, scourseId } = req.query;
  try {
    const progress = await Progress.find({ studentId, scourseId });
    res.json({ progress });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;