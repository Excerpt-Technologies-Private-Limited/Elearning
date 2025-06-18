const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  resetCode: { type: String },
  resetCodeExpiry: { type: Date },
});

module.exports = mongoose.model('Faculty', facultySchema);