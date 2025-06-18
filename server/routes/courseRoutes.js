const express = require('express');
const router = express.Router();
const multer = require('multer');
const courseController = require('../controllers/courseController');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

router.post(
  '/',
  upload.fields([
    { name: 'courseImages', maxCount: 5 },
    { name: 'promoVideo', maxCount: 1 },
  ]),
  courseController.createCourse
);

router.get('/', courseController.getCourses);
router.get('/:id', courseController.getCourseById);
router.put('/:id', upload.fields([
  { name: 'courseImages', maxCount: 5 },
  { name: 'promoVideo', maxCount: 1 },
]), courseController.updateCourse);
router.delete('/:id', courseController.deleteCourse);

module.exports = router;
