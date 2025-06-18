const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


router.post('/register', authController.registerStudent);

router.post('/login', authController.login);
router.post('/send-reset-code', authController.sendResetCode);
router.post('/reset-password', authController.resetPassword);
router.get('/ping', (req, res) => {
    res.send('✅ auth route is working');
  });
  
module.exports = router;


