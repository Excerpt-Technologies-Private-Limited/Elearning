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
}, {
  timestamps: true
});
module.exports = mongoose.model('Student', studentSchema);