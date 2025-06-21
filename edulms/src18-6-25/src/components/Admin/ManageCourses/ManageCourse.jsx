import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactApexChart from "react-apexcharts";
import CurriculumModal from '../CurriculumModal'
import AdminSideNavaBar from "../AdminSideNavaBar/AdminSideNavaBar";

const ManageCourse = () => {
  const [isCurriculum, setCurriculum] = useState("");

 const Curriculum = (courseName) => {
    setCurriculum((prev) => (prev === courseName ? '' : courseName));
  };

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
    const res = await axios.get('http://localhost:8080/api/categories');
    setCategories(res.data);
  };

  const fetchCourses = async () => {
    const res = await axios.get('http://localhost:8080/api/courses');
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
      await axios.put(`http://localhost:8080/api/courses/${editingCourseId}`, data);
    } else {
      await axios.post('http://localhost:8080/api/courses', data);
    }

    resetForm();
    fetchCourses();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/api/courses/${id}`);
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
    <div className="dashboard__main">
      <AdminSideNavaBar />
      <div className="dashboard__content bg-light-4">
        <div class="row pb-50 mb-10">
          <div class="col-auto">
            <h1 class="text-30 lh-12 fw-700">Course Management</h1>
          </div>
        </div>
        <div class="row y-gap-60">
          <div class="col-12">
            <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div class="d-flex items-center py-20 px-30 border-bottom-light">
                <h2 class="text-17 lh-1 fw-500">Course Information</h2>
              </div>

              <div class="py-30 px-30">
              

                <form className="contact-form row y-gap-30" onSubmit={handleSubmit}>
      <div className="col-3">
        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Course Name*</label>
        <input
          name="courseName"
          placeholder="Course Name"
          type="text"
          value={formData.courseName}
          onChange={handleChange}
        />
      </div>

      <div className="col-3">
        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Duration*</label>
        <input
          name="duration"
          placeholder="Duration"
          type="text"
          value={formData.duration}
          onChange={handleChange}
        />
      </div>

      <div className="col-3">
        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Skill Levels*</label>
        <input
          name="skillLevels"
          placeholder="Skill Levels"
          type="text"
          value={formData.skillLevels}
          onChange={handleChange}
        />
      </div>

      <div className="col-3">
        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Price*</label>
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
      </div>

      <div className="col-6">
        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Category Id*</label>
        <select multiple value={formData.categoryIds} onChange={handleMultiSelect}>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.categoryName}
            </option>
          ))}
        </select>
      </div>

      <div className="col-6">
        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Select Mode*</label>
        <select value={formData.mode} onChange={handleChange} name="mode">
          <option value="">Select Mode</option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>
      </div>

      <div className="col-6">
        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Learning Objectives*</label>
        <textarea
          name="learningObjectives"
          placeholder="Learning Objectives"
          rows="3"
          value={formData.learningObjectives}
          onChange={handleChange}
        />
      </div>

      <div className="col-6">
        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Course Description*</label>
        <textarea
          name="description"
          placeholder="Description"
          rows="3"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div className="col-6">
        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Requirements*</label>
        <textarea
          name="requirements"
          placeholder="Requirements"
          rows="3"
          value={formData.requirements}
          onChange={handleChange}
        />
      </div>

      <div className="col-6">
        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Target Audience*</label>
        <textarea
          name="targetAudience"
          placeholder="Target Audience"
          rows="3"
          value={formData.targetAudience}
          onChange={handleChange}
        />
      </div>

      <div className="col-md-6">
        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Course Images Upload*</label>
        <button className="button -sm -purple-1 text-white" type="button">
          <label htmlFor="imageUpload1" style={{ cursor: "pointer" }}>
            Upload Files
          </label>
          <input
            id="imageUpload1"
            accept="image/*"
            type="file"
            multiple
            required={!editingCourseId}
            onChange={(e) => setCourseImages(Array.from(e.target.files))}
            style={{ display: "none" }}
          />
        </button>
      </div>

      <div className="col-md-6">
        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Course Videos Upload*</label>
        <button className="button -sm -purple-1 text-white" type="button">
          <label htmlFor="videoUpload" style={{ cursor: "pointer" }}>
            Upload Video
          </label>
          <input
            id="videoUpload"
            type="file"
            accept="image/*"
            required={!editingCourseId}
            onChange={(e) => setPromoVideo(e.target.files[0])}
            style={{ display: "none" }}
          />
        </button>
      </div>

      <div className="row y-gap-20 justify-between pt-15">
        <div className="col-auto">
          {editingCourseId && (
            <button
              className="button -md -outline-purple-1 text-purple-1"
              type="button"
              onClick={resetForm}
            >
              Reset
            </button>
          )}
        </div>

        <div className="col-auto">
          <button className="button -md -purple-1 text-white" type="submit">
            {editingCourseId ? "Update" : "Submit"}
          </button>
        </div>
      </div>
    </form>
                
              </div>
            </div>
          </div>



          <div class="col-12">
            <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div class="d-flex items-center py-20 px-30 border-bottom-light">
                <h2 class="text-17 lh-1 fw-500">Curriculum</h2>
              </div>
              <div class="py-30 px-30">
                <div class="row   ">
                  <div class="col-12">
                    <h4 class="text-16 lh-1 fw-500">
                      Course List
                    </h4>
                  </div>
                  <div class="col-12">
                    <div class="accordion -block-2 text-left js-accordion">
                      {courses.map(course => (<div key={course._id}
                        class={`accordion__item -dark-bg-dark-1 mt-10 ${
                          isCurriculum === course.courseName ? "is-active" : ""
                        }`}
                      >
                        <div class="accordion__button py-20 px-30 bg-light-4">
                          <div class="d-flex flex-column">
                            
                            <span class="text-16 lh-14 fw-500 text-dark-1">
                              CourseName: {course.courseName}
                            </span>
                            <span class="text-16 lh-14 fw-500 text-dark-1">
                              Price: ₹{course.price}
                            </span>
                            <span class="text-16 lh-14 fw-500 text-dark-1">
                              Categories: {course.categoryIds.map(cat => cat.categoryName).join(', ')}
                            </span>
                          </div>
                          <div class="d-flex x-gap-10 items-center">
                            <a href="#" class="icon icon-edit mr-5" onClick={() => handleEdit(course)}></a>
                            <button class="icon icon-bin" onClick={() => handleDelete(course._id)}></button>
                            <div
                              class="accordion__icon mr-0"
                              onClick={() => Curriculum(course.courseName)}
                            >
                              <div class="d-flex items-center justify-center icon icon-chevron-down"></div>
                              <div class="d-flex items-center justify-center icon icon-chevron-up"></div>
                            </div>
                          </div>
                        </div>
                        {isCurriculum === course.courseName && (
                          <div
                            class="accordion__content"
                            style={{ maxHeight: "100px",overflow:"auto" }}
                          >
                            <div class="accordion__content__inner px-30 py-30">
                              <div class="d-flex x-gap-10 y-gap-10 flex-wrap" >
                                <div>
                                  <button
                                    class="button -sm py-15 -purple-3 text-purple-1 fw-500"
                                    onClick={() => openCurriculumModal(course)}
                                  >
                                    Add Article +
                                  </button>
                                </div>
                                
                              </div>

                              
                            </div>
                          </div>
                        )}
                      </div>))}

                     
                    </div>
                  </div>
                </div>

                <div class="row y-gap-20 justify-between pt-30">
                  <div class="col-auto sm:w-1/1">
                    <button class="button -md -outline-purple-1 text-purple-1 sm:w-1/1">
                      Prev
                    </button>
                  </div>
                  <div class="col-auto sm:w-1/1">
                    <button class="button -md -purple-1 text-white sm:w-1/1">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div className="d-flex items-center py-20 px-30 border-bottom-light">
                <h2 className="text-17 lh-1 fw-500">Add Curriculum</h2>
              </div>

              <div className="py-30 px-30">
               {isCurriculumModalOpen && (
  <CurriculumModal
    course={selectedCourse} // ⬅️ Pass the whole selected course
    onClose={closeCurriculumModal}
    
  />
)}

               
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCourse;
