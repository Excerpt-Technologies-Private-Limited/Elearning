const express = require('express');
const router = express.Router();
const videosController = require('../controllers/videosController');

// Existing: GET /videos/:course/:module
router.get('/:course/:module', videosController.getCourseModuleVideos);

// New: GET /videos/:course
router.get('/:course', videosController.getCourseContent);

module.exports = router;