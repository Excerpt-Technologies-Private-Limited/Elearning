

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CurriculumModal from './CurriculumModal';

const CourseForm = () => {
  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);
  const [editingCourseId, setEditingCourseId] = useState(null);

  const [formData, setFormData] = useState({
    courseName: '',
    categoryIds: [],
    learningObjectives: '',
    description: '',
    requirements: '',
    targetAudience: '',
    duration: '',
    skillLevels: '',
    price: '',
    mode:''
  });

  const [courseImages, setCourseImages] = useState([]);
  const [promoVideo, setPromoVideo] = useState(null);

  useEffect(() => {
    fetchCategories();
    fetchCourses();
  }, []);

  const fetchCategories = async () => {
    const res = await axios.get('/api/categories');
    setCategories(res.data);
  };

  const fetchCourses = async () => {
    const res = await axios.get('/api/courses');
    setCourses(res.data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMultiSelect = (e) => {
    const selected = Array.from(e.target.selectedOptions, option => option.value);
    setFormData({ ...formData, categoryIds: selected });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key in formData) {
      if (Array.isArray(formData[key])) {
        formData[key].forEach(val => data.append(key, val));
      } else {
        data.append(key, formData[key]);
      }
    }
    courseImages.forEach(img => data.append('courseImages', img));
    if (promoVideo) data.append('promoVideo', promoVideo);

    if (editingCourseId) {
      await axios.put(`/api/courses/${editingCourseId}`, data);
    } else {
      await axios.post('/api/courses', data);
    }

    resetForm();
    fetchCourses();
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/courses/${id}`);
    fetchCourses();
  };

  const handleEdit = (course) => {
    setEditingCourseId(course._id);
    setFormData({
      courseName: course.courseName,
      categoryIds: course.categoryIds.map(cat => cat._id),
      learningObjectives: course.learningObjectives,
      description: course.description,
      requirements: course.requirements,
      targetAudience: course.targetAudience,
      duration: course.duration,
      skillLevels: course.skillLevels,
      price: course.price,
      mode: course.mode
    });
    setPromoVideo(null); // Optional: load existing file only if needed
    setCourseImages([]);
  };
  const [selectedCourse, setSelectedCourse] = useState(null);
const [isCurriculumModalOpen, setIsCurriculumModalOpen] = useState(false);

const openCurriculumModal = (course) => {
  setSelectedCourse(course);
  setIsCurriculumModalOpen(true);
};

const closeCurriculumModal = () => {
  setSelectedCourse(null);
  setIsCurriculumModalOpen(false);
};


  const resetForm = () => {
    setEditingCourseId(null);
    setFormData({
      courseName: '',
      categoryIds: [],
      learningObjectives: '',
      description: '',
      requirements: '',
      targetAudience: '',
      duration: '',
      skillLevels: '',
      price: '',
    });
    setCourseImages([]);
    setPromoVideo(null);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">{editingCourseId ? 'Edit Course' : 'Add Course'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="courseName" value={formData.courseName} placeholder="Course Name" className="w-full p-2 border" onChange={handleChange} />

        <select multiple value={formData.categoryIds} onChange={handleMultiSelect} className="w-full p-2 border">
          {categories.map(cat => <option key={cat._id} value={cat._id}>{cat.categoryName}</option>)}
        </select>

<select name="mode" value={formData.mode} onChange={handleChange} className="w-full p-2 border">
          <option value="">Select Mode</option> 
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          
        </select>
        <textarea name="learningObjectives" value={formData.learningObjectives} placeholder="Learning Objectives" className="w-full p-2 border" onChange={handleChange} />
        <textarea name="description" value={formData.description} placeholder="Description" className="w-full p-2 border" onChange={handleChange} />
        <textarea name="requirements" value={formData.requirements} placeholder="Requirements" className="w-full p-2 border" onChange={handleChange} />
        <textarea name="targetAudience" value={formData.targetAudience} placeholder="Target Audience" className="w-full p-2 border" onChange={handleChange} />
        <input name="duration" value={formData.duration} placeholder="Duration" className="w-full p-2 border" onChange={handleChange} />
        <input name="skillLevels" value={formData.skillLevels} placeholder="Skill Levels" className="w-full p-2 border" onChange={handleChange} />
        <input name="price" type="number" value={formData.price} placeholder="Price" className="w-full p-2 border" onChange={handleChange} />

        <input type="file" multiple onChange={(e) => setCourseImages(Array.from(e.target.files))} />
        <input type="file" onChange={(e) => setPromoVideo(e.target.files[0])} />

        <div className="flex gap-4">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2">{editingCourseId ? 'Update' : 'Submit'}</button>
          {editingCourseId && (
            <button type="button" onClick={resetForm} className="bg-gray-400 text-white px-4 py-2">Cancel</button>
          )}
        </div>
      </form>

      <h2 className="text-xl font-bold mt-10">Course List</h2>
      <ul className="mt-4 space-y-2">
        {courses.map(course => (
          <li key={course._id} className="p-4 border rounded flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{course.courseName}</h3>
              <p>Price: ₹{course.price}</p>
              <p>Categories: {course.categoryIds.map(cat => cat.categoryName).join(', ')}</p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => handleEdit(course)} className="text-blue-500">Edit</button>
              <button onClick={() => handleDelete(course._id)} className="text-red-500">Delete</button>
       <button
  onClick={() => openCurriculumModal(course)}
  className="bg-green-600 text-white px-2 py-1 rounded"
>
  Curriculum
</button>


            </div>


          </li>
        ))}
      </ul>
      {isCurriculumModalOpen && (
  <CurriculumModal
    course={selectedCourse} // ⬅️ Pass the whole selected course
    onClose={closeCurriculumModal}
  />
)}


    </div>
    
  );
};

export default CourseForm;

