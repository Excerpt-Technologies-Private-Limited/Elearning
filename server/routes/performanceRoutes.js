const express = require('express');
const router = express.Router();
const { getStudentPerformance } = require('../controllers/performanceController');

router.get('/performance', getStudentPerformance);

module.exports = router;
