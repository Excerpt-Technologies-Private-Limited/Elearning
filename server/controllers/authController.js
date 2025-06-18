// const Student = require('../models/Student');
// const Faculty = require('../models/Faculty');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// exports.registerStudent = async (req, res) => {
//   const { email, username, password } = req.body;
//   console.log(req.body);
//   console.log("auth routes triggered");
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const student = new Student({ email, username, password: hashedPassword });
//     await student.save();
//     res.status(201).json({ message: 'Student registered successfully' });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// exports.login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     let user = await Student.findOne({ email });
//     let role = 'student';
    
//     if (!user) {
//       user = await Faculty.findOne({ email });
//       role = 'faculty';
//     }

//     if (!user) return res.status(400).json({ error: 'User not found' });

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) return res.status(400).json({ error: 'Invalid credentials' });
  
   

// const JWT_SECRET = 'your_jwt_secret_key'; // ← Use any secret key you want
// const token = jwt.sign({ id: user._id, role }, JWT_SECRET, { expiresIn: '1d' });
//     res.json({ token, role, username: user.username });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

///crt working code
// const Student = require('../models/Student');
// const Faculty = require('../models/Faculty');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// exports.registerStudent = async (req, res) => {
//   const { email, username, password } = req.body;
//   console.log(req.body);
//   console.log("auth routes triggered");

//   try {
//     const existingStudent = await Student.findOne({ email });
//     if (existingStudent) {
//       return res.status(400).json({ error: 'Email already registered' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const student = new Student({ email, username, password: hashedPassword });
//     await student.save();
//     res.status(201).json({ message: 'Student registered successfully' });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// exports.login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     let user = await Student.findOne({ email });
//     let role = 'student';
    
//     if (!user) {
//       user = await Faculty.findOne({ email });
//       role = 'faculty';
//     }

//     if (!user) return res.status(400).json({ error: 'User not found' });

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) return res.status(400).json({ error: 'Invalid credentials' });

//     const JWT_SECRET = 'your_jwt_secret_key';
//     const token = jwt.sign({ id: user._id, role }, JWT_SECRET, { expiresIn: '1d' });

//     res.json({ token, role, username: user.username });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

const nodemailer = require('nodemailer'); // <-- Add this
const Student = require('../models/Student');
const Faculty = require('../models/Faculty');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Directly define transporter here
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'sree.excerpt@gmail.com',
      pass: 'pzbn idce nlso wate'
  },
});

// Register Student
exports.registerStudent = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const student = new Student({ email, username, password: hashedPassword });
    await student.save();

    res.status(201).json({ message: 'Student registered successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Login (Student or Faculty)
// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     let user = await Student.findOne({ email });
//     let role = 'student';

//     if (!user) {
//       user = await Faculty.findOne({ email });
//       role = 'faculty';
//     }

//     if (!user) return res.status(400).json({ error: 'User not found' });

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) return res.status(400).json({ error: 'Invalid credentials' });

//     const JWT_SECRET = 'your_jwt_secret_key'; // use .env in production
//     const token = jwt.sign({ id: user._id, role }, JWT_SECRET, { expiresIn: '1d' });

//     res.json({ token, role, username: user.username });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await Student.findOne({ email });
    let role = 'student';

    if (!user) {
      user = await Faculty.findOne({ email });
      role = 'faculty';
    }

    if (!user) return res.status(400).json({ error: 'User not found' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ error: 'Invalid credentials' });

    const JWT_SECRET = 'your_jwt_secret_key'; // Move to .env for security
    const token = jwt.sign({ id: user._id, role }, JWT_SECRET, { expiresIn: '1d' });

    res.json({
      token,
      role,
      username: user.username,
      userId: user._id,   // ✅ Now frontend can use this
      user,               // (Optional) for frontend if you want more info
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Send Reset Code
exports.sendResetCode = async (req, res) => {
  try {
    const { email } = req.body;
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiry = new Date(Date.now() + 5 * 60 * 1000); // 5 mins

    let user = await Faculty.findOne({ email });
    let userType = 'faculty';

    if (!user) {
      user = await Student.findOne({ email });
      userType = 'student';
    }

    if (!user) return res.status(404).json({ message: 'User not found' });

    user.resetCode = code;
    user.resetCodeExpiry = expiry;
    await user.save();

    await transporter.sendMail({
      to: email,
      subject: 'Password Reset Code',
      html: `<p>Your reset code is <b>${code}</b>. It will expire in 5 minutes.</p>`,
    });

    res.json({ message: `Code sent to ${email}`, userType });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending reset code' });
  }
};

// Reset Password
exports.resetPassword = async (req, res) => {
  try {
    const { email, code, password } = req.body;

    let user = await Faculty.findOne({ email });
    if (!user) {
      user = await Student.findOne({ email });
    }

    if (!user) return res.status(404).json({ message: 'User not found' });

    if (user.resetCode !== code || new Date() > user.resetCodeExpiry) {
      return res.status(400).json({ message: 'Invalid or expired code' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.resetCode = undefined;
    user.resetCodeExpiry = undefined;

    await user.save();

    res.json({ message: 'Password reset successful!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error resetting password' });
  }
};



