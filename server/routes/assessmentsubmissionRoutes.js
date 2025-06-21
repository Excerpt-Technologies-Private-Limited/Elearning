const express = require('express');
const router = express.Router();
const { submitAssessment } = require('../controllers/assessmentsubmissionController');

router.post('/submit-assessment', submitAssessment);

module.exports = router;
