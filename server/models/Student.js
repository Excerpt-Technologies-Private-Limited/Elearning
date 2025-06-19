// const mongoose = require('mongoose');

// const studentSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   username: { type: String, required: true },
//   password: { type: String, required: true },
//   resetCode: { type: String },
//   resetCodeExpiry: { type: Date },
//   courseIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
// }, {
//   timestamps: true  // This adds createdAt and updatedAt fields
// });

// module.exports = mongoose.model('Student', studentSchema);

const mongoose = require('mongoose');

const assessmentResultSchema = new mongoose.Schema({
  assessmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Assessment', required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  score: Number,
  totalMarks: Number,
  percentage: String,
  grade: String,
  submittedAt: { type: Date, default: Date.now }
}, { _id: false });
const courseProgressSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  completed: { type: Boolean, default: false },
  completedAt: { type: Date } // Optional: track when the course was completed
}, { _id: false });


const studentSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  resetCode: { type: String },
  resetCodeExpiry: { type: Date },

  // NEW FIELDS
  phone: String,
  profilePhoto: String, // URL or filename if uploaded
  address: String,
  city: String,
  state: String,
  postalCode: String,
  country: String,
  department: String,
  reference:String,
  language: String,
  notifications: {
    email: Boolean,
    sms: Boolean,
    inApp: Boolean
  },
  timezone: String,
  role: { type: String, default: 'student' },
  studentId: { type: String, unique: true, sparse: true }, // Reg ID
  semester: String,
  courseIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  interests: String,
  qualifications: String,
  instructorSubjects: [String],
  experience: String,
  certificates: String, // File path or URL
  bio: String,
   courseProgress: [courseProgressSchema],
   assessmentResults: [assessmentResultSchema]
}, {
  timestamps: true
});
module.exports = mongoose.model('Student', studentSchema);