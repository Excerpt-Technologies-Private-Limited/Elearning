const express = require('express');
const router = express.Router();
const videosController = require('../controllers/videosController');

// Existing: GET /videos/:course/:module
router.get('/course/refresh-token', videosController.refreshToken);

// More specific routes first to avoid conflicts
router.get('/:course/:module', videosController.getCourseModuleVideos);
router.get('/:course', videosController.getCourseContent);


module.exports = router;