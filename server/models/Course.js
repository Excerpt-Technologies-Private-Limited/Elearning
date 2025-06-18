const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseId: Number,
  courseName: String,
  categoryIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  learningObjectives: String,
  description: String,
  requirements: String,
  targetAudience: String,
  duration: String,
  skillLevels: String,
  price: String,
  courseImages: [String],
  promoVideo: String,
  mode:String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Course', courseSchema);
