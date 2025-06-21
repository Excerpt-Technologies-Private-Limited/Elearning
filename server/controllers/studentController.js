const Student = require('../models/Student');

class StudentController {
  // Update student courses
  async updateStudentCourses(req, res) {
    try {
      const { studentId } = req.params;
      const { courseIds } = req.body;

      // Validate input
      if (!courseIds || !Array.isArray(courseIds)) {
        return res.status(400).json({ 
          message: 'courseIds must be provided as an array' 
        });
      }

      // Update student's courseIds array, avoiding duplicates
      const updatedStudent = await Student.findByIdAndUpdate(
        studentId,
        { 
          $addToSet: { courseIds: { $each: courseIds } } // $addToSet prevents duplicates
        },
        { new: true, runValidators: true }
      );

      if (!updatedStudent) {
        return res.status(404).json({ message: 'Student not found' });
      }

      res.status(200).json({ 
        success: true,
        message: 'Student courses updated successfully', 
        student: {
          _id: updatedStudent._id,
          email: updatedStudent.email,
          username: updatedStudent.username,
          courseIds: updatedStudent.courseIds
        }
      });
    } catch (error) {
      console.error('Error updating student courses:', error);
      
      // Handle different types of errors
      if (error.name === 'CastError') {
        return res.status(400).json({ 
          message: 'Invalid student ID or course ID format' 
        });
      }
      
      res.status(500).json({ 
        message: 'Failed to update student courses',
        error: error.message 
      });
    }
  }

  // Get student with courses
  async getStudentWithCourses(req, res) {
    try {
      const { studentId } = req.params;
      
      const student = await Student.findById(studentId)
        .populate('courseIds') // This will populate course details
        .select('-password -resetCode'); // Exclude sensitive fields

      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }

      res.status(200).json({ 
        success: true,
        student: student 
      });
    } catch (error) {
      console.error('Error fetching student courses:', error);
      res.status(500).json({ 
        message: 'Failed to fetch student courses',
        error: error.message 
      });
    }
  }

  // Get all students
  async getAllStudents(req, res) {
    try {
      const students = await Student.find()
        .populate('courseIds')
        .select('-password -resetCode');

      res.status(200).json({
        success: true,
        count: students.length,
        students: students
      });
    } catch (error) {
      console.error('Error fetching students:', error);
      res.status(500).json({
        message: 'Failed to fetch students',
        error: error.message
      });
    }
  }
 // Delete a student by ID
async deleteStudent(req, res) {
  try {
    const studentId = req.params.id;

    const deletedStudent = await Student.findByIdAndDelete(studentId);

    if (!deletedStudent) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Student deleted successfully',
      student: deletedStudent
    });
  } catch (error) {
    console.error('Error deleting student:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete student',
      error: error.message
    });
  }
}
// Add this method to your controller
async updateStudent(req, res) {
  try {
    const studentId = req.params.id;
    const { username, email } = req.body;

    const updatedStudent = await Student.findByIdAndUpdate(
      studentId,
      { username, email },
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ 
        success: false, 
        message: 'Student not found' 
      });
    }

    res.status(200).json({
      success: true,
      message: 'Student updated successfully',
      student: updatedStudent
    });
  } catch (error) {
    console.error('Error updating student:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update student',
      error: error.message
    });
  }
}

// Don't forget to add the route in your routes file:
// router.put('/students/:id', updateStudent);

  // Get student by ID
  async getStudentById(req, res) {
    try {
      const { studentId } = req.params;
      
      const student = await Student.findById(studentId)
        .select('-password -resetCode');

      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }

      res.status(200).json({
        success: true,
        student: student
      });
    } catch (error) {
      console.error('Error fetching student:', error);
      res.status(500).json({
        message: 'Failed to fetch student',
        error: error.message
      });
    }
  }

  // Create new student
  async createStudent(req, res) {
    try {
      const { email, username, password } = req.body;

      // Validate required fields
      if (!email || !username || !password) {
        return res.status(400).json({
          message: 'Email, username, and password are required'
        });
      }

      const newStudent = new Student({
        email,
        username,
        password,
        courseIds: []
      });

      const savedStudent = await newStudent.save();

      res.status(201).json({
        success: true,
        message: 'Student created successfully',
        student: {
          _id: savedStudent._id,
          email: savedStudent.email,
          username: savedStudent.username,
          courseIds: savedStudent.courseIds
        }
      });
    } catch (error) {
      console.error('Error creating student:', error);
      
      if (error.code === 11000) {
        return res.status(400).json({
          message: 'Email already exists'
        });
      }

      res.status(500).json({
        message: 'Failed to create student',
        error: error.message
      });
    }
  }
  // Remove courses from student
  async removeStudentCourses(req, res) {
    try {
      const { studentId } = req.params;
      const { courseIds } = req.body;

      // Validate input
      if (!courseIds || !Array.isArray(courseIds)) {
        return res.status(400).json({ 
          message: 'courseIds must be provided as an array' 
        });
      }

      // Remove courses from student's courseIds array
      const updatedStudent = await Student.findByIdAndUpdate(
        studentId,
        { 
          $pullAll: { courseIds: courseIds } // Remove specified course IDs
        },
        { new: true, runValidators: true }
      );

      if (!updatedStudent) {
        return res.status(404).json({ message: 'Student not found' });
      }

      res.status(200).json({ 
        success: true,
        message: 'Student courses removed successfully', 
        student: {
          _id: updatedStudent._id,
          email: updatedStudent.email,
          username: updatedStudent.username,
          courseIds: updatedStudent.courseIds
        }
      });
    } catch (error) {
      console.error('Error removing student courses:', error);
      
      if (error.name === 'CastError') {
        return res.status(400).json({ 
          message: 'Invalid student ID or course ID format' 
        });
      }
      
      res.status(500).json({ 
        message: 'Failed to remove student courses',
        error: error.message 
      });
    }
  }

//   // Update full student profile + generate studentId if not set
// async updateStudentProfile(req, res) {
//   try {
//     const studentId = req.params.id;
//     const profileData = req.body;

//     // If studentId not yet set, generate one
//     if (!profileData.studentId) {
//       profileData.studentId = `STU${Date.now().toString().slice(-6)}`;
//     }

//     const updatedStudent = await Student.findByIdAndUpdate(
//       studentId,
//       profileData,
//       { new: true, runValidators: true }
//     );

//     if (!updatedStudent) {
//       return res.status(404).json({ message: "Student not found" });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Student profile updated",
//       student: updatedStudent,
//     });
//   } catch (error) {
//     console.error("Error updating profile:", error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to update profile",
//       error: error.message,
//     });
//   }
// }
async updateStudentProfile(req, res) {
  try {
    const studentId = req.params.id;
    const profileData = req.body;

    // Add file path if photo is uploaded
    if (req.file) {
      profileData.profilePhoto = req.file.path; // or store just filename if you prefer
    }

    // Generate studentId if not present
    if (!profileData.studentId) {
      profileData.studentId = `STU${Date.now().toString().slice(-6)}`;
    }

    const updatedStudent = await Student.findByIdAndUpdate(
      studentId,
      profileData,
      { new: true, runValidators: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({
      success: true,
      message: "Student profile updated",
      student: updatedStudent,
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update profile",
      error: error.message,
    });
  }
}


async getStudentProfile(req, res) {
  try {
    const studentId = req.params.id;

    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({
      success: true,
      student,
    });
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch profile",
      error: error.message,
    });
  }
};

// Get all students with completed courses
async getAllCompletedCourses(req, res) {
  try {
    const students = await Student.find({
      'courseProgress.completed': true
    }).populate('courseProgress.courseId');
    
    const data = [];
    students.forEach(student => {
      student.courseProgress.forEach(cp => {
        if (cp.completed) {
          data.push({
            _id: student._id, // Fixed: was *id
            name: student.username,
            username: student.username,
            email: student.email,
            studentId: student.studentId,
            courseId: cp.courseId?._id,
            courseName: cp.courseId?.courseName,
            batchCode: cp.batchCode,
            grade: cp.grade,
            completionDate: cp.completedAt,
          });
        }
      });
    });
    res.json(data);
  } catch (err) {
    console.error('Error in getAllCompletedCourses:', err);
    res.status(500).json({ error: err.message });
  }
}

// Get a specific student's completed courses
async getStudentCompletedCourses(req, res) {
  try {
    const student = await Student.findById(req.params.id).populate('courseProgress.courseId');
    if (!student) return res.status(404).json({ error: 'Student not found' });
    
    const completed = student.courseProgress.filter(cp => cp.completed).map(cp => ({
      _id: student._id, // Fixed: was *id
      name: student.username,
      username: student.username,
      email: student.email,
      courseId: cp.courseId?._id,
      studentId: student.studentId,
      courseName: cp.courseId?.courseName,
      batchCode: cp.batchCode,
      grade: cp.grade,
      completionDate: cp.completedAt,
    }));
    res.json(completed);
  } catch (err) {
    console.error('Error in getStudentCompletedCourses:', err);
    res.status(500).json({ error: err.message });
  }
}

async updateCourseCompletion (req, res) {
  const { studentId, scourseId, completed } = req.body;
  console.log("Received data:", req.body); 
  const courseId = scourseId || req.body.scourseId; // Use scourseId if provided, otherwise fall back to courseId
  if (!studentId || !courseId || typeof completed !== 'boolean') {
    return res.status(400).json({ message: 'studentId, courseId, and completed are required.' });
  }
  try {
    // Try to update if courseId exists in courseProgress
    const updated = await Student.findOneAndUpdate(
      { _id: studentId, "courseProgress.courseId": courseId },
      {
        $set: {
          "courseProgress.$.completed": completed,
          "courseProgress.$.completedAt": completed ? new Date() : null
        }
      },
      { new: true }
    );
    // If no such entry, push a new one
    if (!updated) {
      await Student.findByIdAndUpdate(
        studentId,
        {
          $push: {
            courseProgress: {
              courseId,
              completed,
              completedAt: completed ? new Date() : null
            }
          }
        }
      );
    }
    res.json({ message: 'Course completion updated successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating course progress', error: err.message });
  }
}

}

module.exports = new StudentController();