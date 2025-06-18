
const express = require('express');
const router = express.Router();
const multer = require('multer');



const curriculumController = require('../controllers/curriculumController');

// Get curriculum for a specific course
router.get('/:coursecode', curriculumController.getCurriculum);

// Get next available module ID for a course
router.get('/:coursecode/next-module-id', curriculumController.getNextModuleId);

// Add or update curriculum modules
router.post('/', curriculumController.addCurriculum);

// Update a specific module
router.put('/:coursecode/module/:moduleId', curriculumController.updateModule);

// Delete a specific module
router.delete('/:coursecode/module/:moduleId', curriculumController.deleteModule);

// Get video link (optional - for Dropbox shared links)
router.get('/video/:videoPath', curriculumController.getVideoLink);

module.exports = router;
