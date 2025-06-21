// const Order = require('../models/order'); // Assuming you have an order model defined
// exports.createOrder = async (req, res) => {
//   console.log('Received order creation request:', req.body);
//   try {
//     // 1️⃣ pull out the parts we expect
//     const {
//       orderId, amount, currency,
//       items = [],            // will remap → products
//       paymentId, signature,
//       paymentMethod,
//       shipping = {},
//       notes = '',
//       userId,
//     } = req.body;

//     // 2️⃣ convert the incoming `items` array to the schema’s `products` array
//     const products = items.map(it => ({
//       courseId: it.courseId,               // stays Mixed/Number
//       title: it.courseName,
//       price: Number(it.price || 0)      // cast "234234" → 234234
//     }));

//     // 3️⃣ build the document we want to store
//     const orderDoc = new Order({
//       orderId,
//       amount,
//       currency,
//       products,
//       paymentId,
//       signature,
//       paymentMethod,
//       shipping,
//       notes,
//       status: 'paid',        // or leave default 'pending'
//       userId
//     });

//     // 4️⃣ save
//     await orderDoc.save();

//     res.status(201).json(orderDoc);
//   } catch (err) {
//     console.error('Error creating order:', err);
//     res.status(500).json({ message: 'Failed to create order', error: err.message });
//   }
// };

// exports.getAllOrders = async (req, res) => {
//   try {
//     const orders = await Order.find();
//     res.status(200).json(orders);
//   } catch (error) {
//     console.error('Error fetching orders:', error);
//     res.status(500).json({ message: 'Failed to fetch orders', error });
//   }
// };


const Order = require('../models/order');
const Student = require('../models/Student');
const nodemailer = require('nodemailer');

exports.createOrder = async (req, res) => {
  console.log('Received order creation request:', req.body);
  try {
    const {
      orderId, amount, currency,
      items = [],
      paymentId, signature,
      paymentMethod,
      shipping = {},
      notes = '',
      userId,
    } = req.body;

    const products = items.map(it => ({
      courseId: it.courseId,
      title: it.courseName,
      price: Number(it.price || 0)
    }));

    const orderDoc = new Order({
      orderId,
      amount,
      currency,
      products,
      paymentId,
      signature,
      paymentMethod,
      shipping,
      notes,
      status: 'paid',
      userId
    });

    await orderDoc.save();

    // 🔔 Email logic here
    const student = await Student.findById(userId);
    if (student) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'sree.excerpt@gmail.com',       // 🔁 Replace with your Gmail
          pass: 'pzbn idce nlso wate'   // 🔁 Use Gmail App Password
        }
      });
const mailOptions = {
    from: '"Nipuna Technologies" <your-email@gmail.com>',
    to: student.email,
    subject: '🎉 Course Enrollment Confirmation & Invoice - Nipuna Technologies',
    html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
            <!-- Header -->
            <div style="background-color: #2c3e50; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
                <h1 style="margin: 0; font-size: 24px;">🎉 Enrollment Confirmed!</h1>
                <p style="margin: 5px 0 0 0; font-size: 14px;">Nipuna Technologies - Learning Management System</p>
            </div>
            
            <!-- Main Content -->
            <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <h2 style="color: #2c3e50; margin-top: 0;">Hello ${student.username}</h2>
                <p style="color: #555; font-size: 16px; line-height: 1.6;">
                    Congratulations! Your course enrollment has been successfully processed. We're excited to have you join our learning community at Nipuna Technologies.
                </p>
                
                <!-- Invoice Section -->
                <div style="margin: 30px 0;">
                    <h3 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px;">📋 ENROLLMENT INVOICE</h3>
                    
                    <!-- Order Details -->
                    <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background-color: #f8f9fa;">
                        <tr>
                            <td style="padding: 12px; border: 1px solid #dee2e6; background-color: #e9ecef; font-weight: bold;">Order ID:</td>
                            <td style="padding: 12px; border: 1px solid #dee2e6;">${orderId}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid #dee2e6; background-color: #e9ecef; font-weight: bold;">Payment ID:</td>
                            <td style="padding: 12px; border: 1px solid #dee2e6;">${paymentId}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid #dee2e6; background-color: #e9ecef; font-weight: bold;">Payment Method:</td>
                            <td style="padding: 12px; border: 1px solid #dee2e6;">${paymentMethod}</td>
                        </tr>
                     
                        <tr>
                            <td style="padding: 12px; border: 1px solid #dee2e6; background-color: #e9ecef; font-weight: bold;">Status:</td>
                            <td style="padding: 12px; border: 1px solid #dee2e6;"><span style="background-color: #28a745; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">✅ PAID</span></td>
                        </tr>
                    </table>
                    
                    <!-- Course Details -->
                    <h4 style="color: #2c3e50; margin: 25px 0 15px 0;">📚 Enrolled Courses:</h4>
                    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                        <thead>
                            <tr style="background-color: #3498db; color: white;">
                                <th style="padding: 12px; border: 1px solid #dee2e6; text-align: left;">Course</th>
                                <th style="padding: 12px; border: 1px solid #dee2e6; text-align: center;">Course ID</th>
                                <th style="padding: 12px; border: 1px solid #dee2e6; text-align: right;">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${products.map(course => `
                                <tr>
                                    <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">${course.title}</td>
                                    <td style="padding: 12px; border: 1px solid #dee2e6; text-align: center;">${course.courseId}</td>
                                    <td style="padding: 12px; border: 1px solid #dee2e6; text-align: right;">₹${course.price}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                        <tfoot>
                            <tr style="background-color: #f8f9fa; font-weight: bold; font-size: 16px;">
                                <td colspan="2" style="padding: 15px; border: 1px solid #dee2e6; text-align: right;">Total Amount Paid:</td>
                                <td style="padding: 15px; border: 1px solid #dee2e6; text-align: right; color: #28a745;">₹${amount}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                
                <!-- Billing Information -->
                <div style="margin: 30px 0;">
                    <h4 style="color: #2c3e50; margin-bottom: 15px;">🏠 Billing Information:</h4>
                    <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #3498db;">
                        <p style="margin: 5px 0;"><strong>Name:</strong> ${shipping.firstName} ${shipping.lastName}</p>
                        <p style="margin: 5px 0;"><strong>Email:</strong> ${shipping.email}</p>
                        <p style="margin: 5px 0;"><strong>Phone:</strong> ${shipping.phone}</p>
                        <p style="margin: 5px 0;"><strong>Address:</strong> ${shipping.address}, ${shipping.city}, ${shipping.state} - ${shipping.pincode}</p>
                        <p style="margin: 5px 0;"><strong>Country:</strong> ${shipping.country}</p>
                    </div>
                </div>
                
                <!-- Next Steps -->
                <div style="background-color: #e8f5e8; padding: 20px; border-radius: 5px; border-left: 4px solid #28a745; margin: 25px 0;">
                    <h4 style="color: #2c3e50; margin-top: 0;">🚀 What's Next?</h4>
                    <ul style="color: #555; line-height: 1.6; margin: 10px 0;">
                        <li>Access your course materials in your student dashboard</li>
                        <li>Join our community forum to connect with other learners</li>
                        <li>Check your course schedule and upcoming assignments</li>
                        <li>Download course resources and materials</li>
                    </ul>
                </div>
                
                <!-- Support Information -->
                <div style="text-align: center; margin: 30px 0; padding: 20px; background-color: #f8f9fa; border-radius: 5px;">
                    <p style="margin: 0; color: #666;">
                        Need help? Contact our support team at <a href="mailto:support@nipunatechnologies.com" style="color: #3498db;">support@nipunatechnologies.com</a>
                    </p>
                    <p style="margin: 10px 0 0 0; color: #666; font-size: 14px;">
                        Happy Learning! 🌟<br>
                        <strong>Team Nipuna Technologies</strong>
                    </p>
                </div>
            </div>
            
            <!-- Footer -->
            <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
                <p>© 2025 Nipuna Technologies. All rights reserved.</p>
                <p>This is an automated email. Please do not reply to this email.</p>
            </div>
        </div>
    `
};

      await transporter.sendMail(mailOptions);
      console.log(`📧 Email sent to ${student.email}`);
    } else {
      console.warn('⚠️ Student not found. Email skipped.');
    }

    res.status(201).json(orderDoc);
  } catch (err) {
    console.error('❌ Error creating order:', err);
    res.status(500).json({ message: 'Failed to create order', error: err.message });
  }
};


exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Failed to fetch orders', error });
  }
};