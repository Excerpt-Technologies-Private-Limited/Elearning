import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import CurriculumModal from "../../../components/Admin/CurriculumModal";
import SideNavBar1 from "../../SideNavBar/SideNavBar";
import Header1 from "../../Header/Header";

const CourseCreation1 = () => {
  const [isCurriculum, setCurriculum] = useState("");

  const Curriculum = (courseName) => {
    setCurriculum((prev) => (prev === courseName ? "" : courseName));
  };

  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);
  const [editingCourseId, setEditingCourseId] = useState(null);

  const [formData, setFormData] = useState({
    courseName: "",
    categoryIds: [],
    learningObjectives: "",
    description: "",
    requirements: "",
    targetAudience: "",
    duration: "",
    skillLevels: "",
    price: "",
    mode: "",
  });

  const [courseImages, setCourseImages] = useState([]);
  const [promoVideo, setPromoVideo] = useState(null);

  useEffect(() => {
    fetchCategories();
    fetchCourses();
  }, []);

  const fetchCategories = async () => {
    const res = await axios.get("http://localhost:8080/api/categories");
    setCategories(res.data);
  };

  const fetchCourses = async () => {
    const res = await axios.get("http://localhost:8080/api/courses");
    setCourses(res.data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMultiSelect = (e) => {
    const selected = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setFormData({ ...formData, categoryIds: selected });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key in formData) {
      if (Array.isArray(formData[key])) {
        formData[key].forEach((val) => data.append(key, val));
      } else {
        data.append(key, formData[key]);
      }
    }
    courseImages.forEach((img) => data.append("courseImages", img));
    if (promoVideo) data.append("promoVideo", promoVideo);

    if (editingCourseId) {
      await axios.put(
        `http://localhost:8080/api/courses/${editingCourseId}`,
        data
      );
      alert("edit course successfully update")
    } else {
      await axios.post("http://localhost:8080/api/courses", data);
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
      categoryIds: course.categoryIds.map((cat) => cat._id),
      learningObjectives: course.learningObjectives,
      description: course.description,
      requirements: course.requirements,
      targetAudience: course.targetAudience,
      duration: course.duration,
      skillLevels: course.skillLevels,
      price: course.price,
      mode: course.mode,
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
      courseName: "",
      categoryIds: [],
      learningObjectives: "",
      description: "",
      requirements: "",
      targetAudience: "",
      duration: "",
      skillLevels: "",
      price: "",
    });
    setCourseImages([]);
    setPromoVideo(null);
  };

  return (
    <>
      <Header1 />
      <SideNavBar1 />
      <div className="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 class="mb-sm-0 font-size-18">Course Creation</h4>

                  <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                      <li class="breadcrumb-item">
                        <a href="javascript: void(0);">Dashboard</a>
                      </li>
                      <li class="breadcrumb-item active">Course Creation</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-12">
                <div class="card">
                  <div class="card-header">
                    <h4 class="card-title">Create Course - Form</h4>
                    <p class="card-title-desc">
                      Use this form to create a new course by entering details
                      such as the course title, description, instructor,
                      duration, start date, and category.
                    </p>
                  </div>
                  <div class="card-body">
                    <form class="needs-validation" onSubmit={handleSubmit}>
                      <div class="row">
                        <div class="col-md-3">
                          <div class="mb-3">
                            <label class="form-label" for="courseName">
                              Course Name
                            </label>
                            <input
                              class="form-control"
                              id="courseName"
                              name="courseName"
                              placeholder="Course Name"
                              type="text"
                              value={formData.courseName}
                              onChange={handleChange}
                            />
                            <div class="valid-feedback">Looks good!</div>
                          </div>
                        </div>

                        <div class="col-md-3">
                          <div class="mb-3">
                            <label class="form-label" for="courseDuration">
                              Duration
                            </label>
                            <input
                              class="form-control"
                              id="courseDuration"
                              name="duration"
                              placeholder="Duration"
                              type="text"
                              value={formData.duration}
                              onChange={handleChange}
                            />
                            <div class="valid-feedback">Looks good!</div>
                          </div>
                        </div>

                        <div class="col-md-3">
                          <div class="mb-3">
                            <label class="form-label" for="courseImage">
                              Course Image Upload*
                            </label>
                            <input
                              type="file"
                              accept="image/*"
                              class="form-control"
                              id="courseImage"
                              multiple
                              required={!editingCourseId}
                              onChange={(e) =>
                                setCourseImages(Array.from(e.target.files))
                              }
                            />
                            <div class="valid-feedback">Looks good!</div>
                          </div>
                        </div>

                        <div class="col-md-3">
                          <div class="mb-3">
                            <label class="form-label" for="courseVideo">
                              Course Video Upload*
                            </label>
                            <input
                              type="file"
                              accept="image/*"
                              class="form-control"
                              id="courseVideo"
                              required={!editingCourseId}
                              onChange={(e) => setPromoVideo(e.target.files[0])}
                            />
                            <div class="valid-feedback">Looks good!</div>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-3">
                          <div class="mb-3">
                            <label class="form-label" for="skillLevel">
                              Skill Level*
                            </label>
                            <input
                              class="form-control"
                              id="skillLevel"
                              name="skillLevels"
                              placeholder="Skill Levels"
                              type="text"
                              value={formData.skillLevels}
                              onChange={handleChange}
                            />
                            <div class="invalid-feedback">
                              Please provide a skill level.
                            </div>
                          </div>
                        </div>

                        <div class="col-md-3">
                          <div class="mb-3">
                            <label class="form-label" for="price">
                              Price*
                            </label>
                            <input
                              class="form-control"
                              id="price"
                              name="price"
                              type="number"
                              placeholder="Price"
                              value={formData.price}
                              onChange={handleChange}
                            />
                            <div class="invalid-feedback">
                              Please provide a price.
                            </div>
                          </div>
                        </div>

                        <div class="col-md-3">
                          <div class="mb-3">
                            <label class="form-label" for="categoryId">
                              Category ID
                            </label>

                            {/* <select
                              multiple
                              value={formData.categoryIds}
                              onChange={handleMultiSelect}
                              className="form-select"
                              id="categoryId"
                            >
                              {categories.map((cat) => (
                                <option key={cat._id} value={cat._id}>
                                  {cat.categoryName}
                                </option>
                              ))}
                            </select> */}
                            <Select
                              id="categoryId"
                              isMulti
                              name="categoryIds"
                              options={categories.map((cat) => ({
                                value: cat._id,
                                label: cat.categoryName,
                              }))}
                              value={categories
                                .filter((cat) =>
                                  formData.categoryIds.includes(cat._id)
                                )
                                .map((cat) => ({
                                  value: cat._id,
                                  label: cat.categoryName,
                                }))}
                              onChange={(selectedOptions) => {
                                const selectedIds = selectedOptions.map(
                                  (opt) => opt.value
                                );
                                setFormData((prev) => ({
                                  ...prev,
                                  categoryIds: selectedIds,
                                }));
                              }}
                              styles={{
                                control: (base) => ({
                                  ...base,
                                  backgroundColor: "#f8f9fa",
                                  borderColor: "#ced4da",
                                  minHeight: "38px",
                                }),
                                multiValue: (base) => ({
                                  ...base,
                                  backgroundColor: "#e2e6ea",
                                }),
                              }}
                              classNamePrefix="select"
                            />

                            <div class="invalid-feedback">
                              Please provide a category ID.
                            </div>
                          </div>
                        </div>

                        <div class="col-md-3">
                          <div class="mb-3">
                            <label class="form-label" for="mode">
                              Select Mode
                            </label>
                            <select
                              value={formData.mode}
                              onChange={handleChange}
                              name="mode"
                              id="mode"
                              className="form-select"
                            >
                              <option value="">Select Mode</option>
                              <option value="Online">Online</option>
                              <option value="Offline">Offline</option>
                            </select>
                            <div class="invalid-feedback">
                              Please provide a valid mode.
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-6 mb-3">
                          <label for="objectives" class="col-form-label">
                            Learning Objectives:
                          </label>
                          <textarea
                            class="form-control"
                            name="learningObjectives"
                            placeholder="Learning Objectives"
                            rows="3"
                            value={formData.learningObjectives}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                        <div class="col-lg-6 mb-3">
                          <label for="description" class="col-form-label">
                            Course Description:
                          </label>
                          <textarea
                            class="form-control"
                            id="description"
                            name="description"
                            placeholder="Description"
                            rows="3"
                            value={formData.description}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-6 mb-3">
                          <label for="requirements" class="col-form-label">
                            Requirements:
                          </label>
                          <textarea
                            class="form-control"
                            id="requirements"
                            name="requirements"
                            placeholder="Requirements"
                            rows="3"
                            value={formData.requirements}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                        <div class="col-lg-6 mb-3">
                          <label for="audience" class="col-form-label">
                            Target Audience:
                          </label>
                          <textarea
                            class="form-control"
                            id="audience"
                            name="targetAudience"
                            placeholder="Target Audience"
                            rows="3"
                            value={formData.targetAudience}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>

                      <button class="btn btn-primary mt-2" type="submit">
                        Submit Form
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Curriculum / Course List</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-bordered border-success mb-0">
                        <thead>
                          <tr>
                            <th>S.no</th>
                            <th>Course name</th>
                            <th>Price</th>
                            <th>Categories</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {courses.map((course, index) => (
                            <tr key={course._id}>
                              <th scope="row">{index + 1}</th>
                              <td>{course.courseName}</td>
                              <td>₹{course.price}</td>
                              <td>
                                {course.categoryIds
                                  .map((cat) => cat.categoryName)
                                  .join(", ")}
                              </td>
                              <td>
                                <div className="d-flex flex-wrap gap-2">
                                  {/* Edit Button (Modal Trigger) */}
                                  <button
                                    type="button"
                                    className="btn btn-soft-success waves-effect waves-light"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() => handleEdit(course)}
                                  >
                                    <i className="bx bx-edit"></i>
                                  </button>

                                  {/* Delete Button */}
                                  <button
                                    type="button"
                                    className="btn btn-soft-danger waves-effect waves-light"
                                    onClick={() => handleDelete(course._id)}
                                  >
                                    <i className="bx bx-trash"></i>
                                  </button>

                                  {/* Curriculum/Add Article Button (Modal Trigger) */}
                                  <button
                                    type="button"
                                    className="btn btn-soft-warning waves-effect waves-light"
                                    data-bs-toggle="modal"
                                    data-bs-target=".bs-example-modal-xl"
                                    onClick={() => openCurriculumModal(course)}
                                  >
                                    <i className="bx bx-plus-circle"></i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Course
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form
                className="needs-validation"
                noValidate
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Course Name</label>
                    <input
                      type="text"
                      name="courseName"
                      className="form-control"
                      value={formData.courseName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Duration</label>
                    <input
                      type="text"
                      name="duration"
                      className="form-control"
                      value={formData.duration}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Course Image Upload*</label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={(e) => setCourseImages([...e.target.files])}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Course Video Upload*</label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={(e) => setPromoVideo(e.target.files[0])}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Skill Levels*</label>
                    <input
                      type="text"
                      name="skillLevels"
                      className="form-control"
                      value={formData.skillLevels}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Price*</label>
                    <input
                      type="text"
                      name="price"
                      className="form-control"
                      value={formData.price}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Category ID</label>
                    <select
                      multiple
                      name="categoryIds"
                      className="form-control"
                      value={formData.categoryIds}
                      onChange={handleMultiSelect}
                      required
                    >
                      {categories.map((cat) => (
                        <option key={cat._id} value={cat._id}>
                          {cat.categoryName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Select Mode</label>
                    <input
                      type="text"
                      name="mode"
                      className="form-control"
                      value={formData.mode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 mb-3">
                    <label className="form-label">Learning Objectives</label>
                    <textarea
                      name="learningObjectives"
                      className="form-control"
                      rows="3"
                      value={formData.learningObjectives}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label className="form-label">Course Description</label>
                    <textarea
                      name="description"
                      className="form-control"
                      rows="3"
                      value={formData.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 mb-3">
                    <label className="form-label">Requirements</label>
                    <textarea
                      name="requirements"
                      className="form-control"
                      rows="3"
                      value={formData.requirements}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label className="form-label">Target Audience</label>
                    <textarea
                      name="targetAudience"
                      className="form-control"
                      rows="3"
                      value={formData.targetAudience}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                <div className="text-end">
                  <button type="submit" className="btn btn-success">
                    <i className="bx bx-check me-1"></i> Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade bs-example-modal-xl"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myExtraLargeModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-xl-12">
                  {/* <div class="card">
                    <div class="card-header align-items-center d-flex">
                      <h4 class="card-title mb-0 flex-grow-1">
                        Curriculum Management - solid
                      </h4>
                      <div class="flex-shrink-0">
                        <ul
                          class="nav justify-content-end nav-tabs-custom rounded card-header-tabs"
                          role="tablist"
                        >
                          <li class="nav-item">
                            <a
                              class="nav-link active"
                              data-bs-toggle="tab"
                              href="#home2"
                              role="tab"
                            >
                              <span class="d-block d-sm-none">
                                <i class="fas fa-home"></i>
                              </span>
                              <span class="d-none d-sm-block">
                                View Modules(7)
                              </span>
                            </a>
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              data-bs-toggle="tab"
                              href="#profile2"
                              role="tab"
                            >
                              <span class="d-block d-sm-none">
                                <i class="far fa-user"></i>
                              </span>
                              <span class="d-none d-sm-block">
                                Add New Modules
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="card-body">
                      <div class="tab-content text-muted">
                        <div class="tab-pane active" id="home2" role="tabpanel">
                          <div class="table-responsive">
                            <table class="table table-bordered border-success mb-0">
                              <tbody>
                                <tr>
                                  <th scope="row">1</th>
                                  <td>React js</td>
                                  <td>300</td>
                                  <td>hsajjsa</td>
                                  <td>
                                    <div className="d-flex flex-wrap gap-2">
                                      <button
                                        type="button"
                                        class="btn btn-soft-success waves-effect waves-light"
                                      >
                                        <i className="bx bx-edit"></i>
                                      </button>
                                      <button
                                        type="button"
                                        class="btn btn-soft-danger waves-effect waves-light"
                                      >
                                        <i className="bx bx-trash"></i>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div class="tab-pane" id="profile2" role="tabpanel">
                          <form className="needs-validation" noValidate>
                            <div className="row">
                              <div className="col-md-6 mb-3">
                                <label
                                  htmlFor="preRecorded"
                                  className="form-label"
                                >
                                  Pre-recorded
                                </label>
                                <select
                                  className="form-control"
                                  id="preRecorded"
                                  required
                                >
                                  <option value="">-- Select --</option>
                                  <option value="yes">Pre-recorded</option>
                                  <option value="no">Live</option>
                                </select>
                              </div>

                              <div className="col-md-6 mb-3">
                                <label
                                  htmlFor="moduleName"
                                  className="form-label"
                                >
                                  Module Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="moduleName"
                                  placeholder="Enter module name"
                                  required
                                />
                              </div>

                              <div className="col-md-6 mb-3">
                                <label htmlFor="title" className="form-label">
                                  Title*
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="title"
                                  placeholder="Enter title"
                                  required
                                />
                              </div>

                              <div className="col-md-6 mb-3">
                                <label
                                  htmlFor="videoUpload"
                                  className="form-label"
                                >
                                  Video*
                                </label>
                                <input
                                  type="file"
                                  className="form-control"
                                  id="videoUpload"
                                  required
                                />
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-12 mb-3">
                                <label
                                  htmlFor="description"
                                  className="form-label"
                                >
                                  Description*
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="description"
                                  placeholder="Enter description"
                                  required
                                />
                              </div>
                            </div>

                            <div className="text-end">
                              <button type="submit" className="btn btn-success">
                                <i className="bx bx-check me-1"></i> Submit
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <CurriculumModal
                    course={selectedCourse} // ⬅️ Pass the whole selected course
                    onClose={closeCurriculumModal}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCreation1;
