const express = require('express');
const fs = require('fs');

const path = require('path');
const multer = require('multer');
const studentController = require('../controllers/studentController');
const {getStudentDashboard}=require('../controllers/studentDashboardController')
const router = express.Router();

// Ensure directory exists
const uploadDir = 'uploads/profiles/';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}
// Multer storage setup for profile uploads
const profileStorage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/profiles/'),
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const fileName = Date.now() + '-' + file.originalname.replace(/\s+/g, '');
      cb(null, fileName);
    },
  });
  
  const profileUpload = multer({ storage: profileStorage });
router.get('/', getStudentDashboard);
// Student CRUD routes
router.get('/students', studentController.getAllStudents);
router.get('/students/:studentId', studentController.getStudentById);
router.post('/students', studentController.createStudent);

// Student courses routes
router.patch('/students/:studentId/courses', studentController.updateStudentCourses);
router.get('/students/:studentId/courses', studentController.getStudentWithCourses);
router.delete('/students/:studentId/courses', studentController.removeStudentCourses);
router.delete('/students/:id', studentController.deleteStudent);
router.put('/students/:id', studentController.updateStudent);
// router.put('/students/:id/profile', studentController.updateStudentProfile);
router.put('/students/:id/profile',profileUpload.single("profilePhoto"),studentController.updateStudentProfile);
router.get('/students/:id/profile', studentController.getStudentProfile);
router.post('/course-completion', studentController.updateCourseCompletion);
// Get all students with completed courses (for admin)
router.get('/completed-courses',studentController. getAllCompletedCourses);

// Get specific student's completed courses
router.get('/students/:id/completed-courses',studentController. getStudentCompletedCourses);




module.exports = router;