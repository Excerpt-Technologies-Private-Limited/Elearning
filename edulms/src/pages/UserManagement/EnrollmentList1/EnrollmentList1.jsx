import React, { useEffect, useState } from "react";
import axios from "axios";
import SideNavBar1 from "../../SideNavBar/SideNavBar";
import Header1 from "../../Header/Header";

const EnrollmentList1 = () => {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 10;

  const [editingStudent, setEditingStudent] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [formData, setFormData] = useState({ username: "", email: "" });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/students");
      const studentList = Array.isArray(res.data)
        ? res.data
        : res.data.students || [];
      setStudents(studentList);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleDelete = async (studentId) => {
    if (!window.confirm("Are you sure you want to delete this student?"))
      return;

    try {
      await axios.delete(`http://localhost:8080/api/students/${studentId}`);
      setStudents((prev) => prev.filter((s) => s._id !== studentId));
    } catch (error) {
      console.error("Failed to delete:", error.response?.data || error.message);
    }
  };

  const handleEdit = (studentId) => {
    const student = students.find((s) => s._id === studentId);
    setEditingStudent(student);
    setFormData({ username: student.username, email: student.email });
    setShowEditModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put(
        `http://localhost:8080/api/students/${editingStudent._id}`,
        formData
      );

      // Fix: Access the student data from res.data.student
      const updated = res.data.student;

      setStudents((prev) =>
        prev.map((s) => (s._id === updated._id ? updated : s))
      );
      setShowEditModal(false);
      setEditingStudent(null);

      // Optional: Show success message
      console.log("Student updated successfully:", res.data.message);
      alert("Student updated successfully:", res.data.message)
    } catch (error) {
      console.error("Update failed:", error);

      // Optional: Show error message to user
      alert("Failed to update student. Please try again.");
    }
  };

  const indexOfLast = currentPage * studentsPerPage;
  const indexOfFirst = indexOfLast - studentsPerPage;
  const currentStudents = students.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(students.length / studentsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <Header1 />
      <SideNavBar1 />
      <div className="main-content">
        <div class="page-content ">
          <div class="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Enrollment List</h4>
                  </div>

                  <div className="card-body">
                    <div id="datatable_wrapper" className="table-responsive">
                      <div className="row">
                        <div className="col-sm-12">
                          <table
                            id="datatable"
                            className="table table-bordered "
                            style={{ width: "100%" }}
                            aria-describedby="datatable_info"
                          >
                            <thead>
                              <tr>
                                <th>Student ID</th>
                                <th>Student Name</th>
                                <th>Email</th>
                                <th>Course Count</th>
                                <th>Enrollment Date</th>
                                <th>action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {currentStudents.map((student, index) => (
                                <tr key={student._id}>
                                  <td>{indexOfFirst + index + 1}</td>
                                  <td>{student.username}</td>
                                  <td>{student.email}</td>
                                  <td>{student.courseIds?.length || 0}</td>
                                  <td>
                                    {" "}
                                    {new Date(
                                      student.createdAt
                                    ).toLocaleDateString()}
                                  </td>
                                  <td>
                                    <div className="d-flex flex-wrap gap-2">
                                      <button
                                        type="button"
                                        class="btn btn-soft-success waves-effect waves-light"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        data-bs-whatever="@mdo"
                                        onClick={() => handleEdit(student._id)}
                                      >
                                        <i className="bx bx-edit"></i>
                                      </button>
                                      <button
                                        type="button"
                                        class="btn btn-soft-danger waves-effect waves-light"
                                        onClick={() =>
                                          handleDelete(student._id)
                                        }
                                      >
                                        <i className="bx bx-trash"></i>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              ))}

                              {students.length === 0 && (
                                <tr>
                                  <td>No students found.</td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* <div className="row">
                        <div className="col-sm-12 col-md-5">
                          <div
                            className="dataTables_info"
                            id="datatable_info"
                            role="status"
                            aria-live="polite"
                          >
                            Showing 1 to 10 of 57 entries
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-7">
                          <div
                            className="dataTables_paginate paging_simple_numbers"
                            id="datatable_paginate"
                          >
                            <ul className="pagination">
                              <li className="paginate_button page-item previous disabled">
                                <a
                                  aria-controls="datatable"
                                  aria-disabled="true"
                                  role="link"
                                  data-dt-idx="previous"
                                  tabIndex="0"
                                  className="page-link"
                                >
                                  Previous
                                </a>
                              </li>
                              <li className="paginate_button page-item active">
                                <a
                                  href="#"
                                  aria-controls="datatable"
                                  role="link"
                                  aria-current="page"
                                  data-dt-idx="0"
                                  tabIndex="0"
                                  className="page-link"
                                >
                                  1
                                </a>
                              </li>
                              <li className="paginate_button page-item">
                                <a
                                  href="#"
                                  aria-controls="datatable"
                                  role="link"
                                  data-dt-idx="1"
                                  tabIndex="0"
                                  className="page-link"
                                >
                                  2
                                </a>
                              </li>
                              <li className="paginate_button page-item next">
                                <a
                                  href="#"
                                  aria-controls="datatable"
                                  role="link"
                                  data-dt-idx="next"
                                  tabIndex="0"
                                  className="page-link"
                                >
                                  Next
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div> */}

                      <div className="row">
                        <div className="col-sm-12 col-md-5">
                          <div
                            className="dataTables_info"
                            id="datatable_info"
                            role="status"
                            aria-live="polite"
                          >
                            Showing {indexOfFirst + 1} to{" "}
                            {indexOfLast > students.length
                              ? students.length
                              : indexOfLast}{" "}
                            of {students.length} entries
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-7">
                          <div
                            className="dataTables_paginate paging_simple_numbers"
                            id="datatable_paginate"
                          >
                            <ul className="pagination">
                              <li
                                className={`paginate_button page-item previous ${
                                  currentPage === 1 ? "disabled" : ""
                                }`}
                              >
                                <button
                                  className="page-link"
                                  onClick={() =>
                                    handlePageChange(currentPage - 1)
                                  }
                                  disabled={currentPage === 1}
                                >
                                  Previous
                                </button>
                              </li>

                              {Array.from(
                                { length: totalPages },
                                (_, index) => (
                                  <li
                                    key={index + 1}
                                    className={`paginate_button page-item ${
                                      currentPage === index + 1 ? "active" : ""
                                    }`}
                                  >
                                    <button
                                      className="page-link"
                                      onClick={() =>
                                        handlePageChange(index + 1)
                                      }
                                    >
                                      {index + 1}
                                    </button>
                                  </li>
                                )
                              )}

                              <li
                                className={`paginate_button page-item next ${
                                  currentPage === totalPages ? "disabled" : ""
                                }`}
                              >
                                <button
                                  className="page-link"
                                  onClick={() =>
                                    handlePageChange(currentPage + 1)
                                  }
                                  disabled={currentPage === totalPages}
                                >
                                  Next
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Edit Student
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div className="row">
                      <div class="mb-3 col-md-6">
                        <label for="recipient-name" class="col-form-label">
                          Name:
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="username"
                          id="recipient-name"
                          value={formData.username}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div class="mb-3 col-md-6">
                        <label for="recipient-name1" class="col-form-label">
                          Email:
                        </label>
                        <input
                          type="text"
                          name="email"
                          class="form-control"
                          id="recipient-name1"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={handleUpdate}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnrollmentList1;
