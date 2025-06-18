const Course = require('../models/Course');
const Counter = require('../models/Counter');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

exports.createCourse = async (req, res) => {
  try {
    // Auto-increment courseId
    const counter = await Counter.findOneAndUpdate(
      { id: 'courseId' },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );

    // Handle file uploads
    const imagePaths = req.files['courseImages']?.map(file => 'uploads/' + file.filename) || [];
    const promoVideoPath = req.files['promoVideo']?.[0] ? 'uploads/' + req.files['promoVideo'][0].filename : '';

    // Convert comma-separated string to ObjectId array
    const rawCategoryIds = req.body.categoryIds; // e.g., "id1,id2"
 let categoryIds = [];

if (Array.isArray(req.body.categoryIds)) {
  categoryIds = req.body.categoryIds.map(id => new mongoose.Types.ObjectId(id));
} else if (typeof req.body.categoryIds === 'string') {
  categoryIds = req.body.categoryIds.split(',').map(id => new mongoose.Types.ObjectId(id.trim()));
} else {
  throw new Error('Invalid categoryIds format');
}


    // Create course
    const course = new Course({
      courseId: counter.seq,
      courseName: req.body.courseName,
      categoryIds: categoryIds,
      learningObjectives: req.body.learningObjectives,
      description: req.body.description,
      requirements: req.body.requirements,
      targetAudience: req.body.targetAudience,
      duration: req.body.duration,
      skillLevels: req.body.skillLevels,
      price: req.body.price,
      courseImages: imagePaths,
      promoVideo: promoVideoPath,
      mode: req.body.mode,
      createdAt: new Date(),
    });

    await course.save();
    res.status(201).json(course);
  } catch (error) {
    console.error('Error creating course:', error);
    res.status(500).json({ message: 'Failed to create course', error });
  }
};

exports.getCourses = async (req, res) => {
  const courses = await Course.find().populate('categoryIds', 'categoryName');
  res.json(courses);
};

exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate('categoryIds', 'categoryName');
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching course', err });
  }
}

exports.updateCourse = async (req, res) => {
  try {
    const updateData = {
      ...req.body,
    };

    if (req.files['courseImages']) {
      updateData.courseImages = req.files['courseImages'].map(file => 'uploads/' + file.filename);
    }

    if (req.files['promoVideo']) {
      updateData.promoVideo = 'uploads/' + req.files['promoVideo'][0].filename;
    }

    const course = await Course.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update course', err });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: 'Course deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Delete failed', err });
  }
};
