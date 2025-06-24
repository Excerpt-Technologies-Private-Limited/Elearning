const express = require('express');
const Razorpay = require("razorpay");
const cors = require('cors');
const categoryRoutes = require('./routes/categoryRoutes');
const connectDB = require('./config/db');
const subcategoryRoutes = require('./routes/subcategoryRoutes');
const courseRoutes = require('./routes/courseRoutes');
const curriculumRoutes = require('./routes/curriculumRoutes');
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes'); 
const studentRoutes = require('./routes/studentRoutes');// Uncomment if you have order routes
const assessmentRoutes = require('./routes/assessmentRoutes');
const assessmentSubmissionRoutes = require('./routes/assessmentsubmissionRoutes');  
const performanceRoutes = require('./routes/performanceRoutes');
const videosRoutes = require('./routes/videosRoutes');
const history = require('connect-history-api-fallback');
const path = require('path');
const crypto = require('crypto');

const app = express();
app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: "rzp_test_qUmhUFElBiSNIs",
  key_secret: "wsBV1ts8yJPld9JktATIdOiS",
});

app.use(express.urlencoded({ extended: true }));

// File upload middleware should go before file-handling routes
app.use('/uploads', express.static('uploads'));

connectDB();
// Define routes
app.post("/api/create-order", async (req, res) => {
  const { amount } = req.body;
  console.log("Amount received:", amount);
  const options = {
    amount: amount, // Amount in paise
    currency: "INR",
    receipt: "receipt#1",
  };

  try {
    const order = await razorpay.orders.create(options);
    console.log("Order created:", order);
    res.json(  order );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});
app.use('/api/categories', categoryRoutes);
app.use('/api/subcategories', subcategoryRoutes);
app.use('/api/orders', orderRoutes); 
app.use('/api/courses', courseRoutes);

app.use('/api/curriculum', curriculumRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/', studentRoutes);
app.use('/videos', videosRoutes);
app.use('/api/dashboard',  studentRoutes);
app.use('/api',assessmentSubmissionRoutes); 
app.use('/api', performanceRoutes);
app.use('/api/assessments', assessmentRoutes);
app.use(history());
app.use(express.static(path.join(__dirname, 'dist')));

// Route all other requests to serve 'index.html' for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(process.env.Port || 8080, () => {
  console.log('Server running on port 8080');
});
