const express = require('express');
const router = express.Router();
const { createAssessment } = require('../controllers/assessmentController');

// POST: Create new assessment
router.post('/', createAssessment);

module.exports = router;
