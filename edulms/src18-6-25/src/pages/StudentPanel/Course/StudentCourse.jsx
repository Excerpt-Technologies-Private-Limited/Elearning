import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header1 from "../../Header/Header";
import SideNavBar1 from "../../SideNavBar/SideNavBar";

const StudentCourse1 = () => {
    const [student, setStudent] = useState(null);
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();
    const studentId = localStorage.getItem("studentId");
  
    useEffect(() => {
      const fetchStudentDataAndCourses = async () => {
        try {
          const res = await axios.get(
            `http://localhost:8080/api/students/${studentId}/profile`
          );
          setStudent(res.data.student);
          if (
            res.data.student.courseIds &&
            res.data.student.courseIds.length > 0
          ) {
            const coursePromises = res.data.student.courseIds.map((cid) =>
              axios.get(`http://localhost:8080/api/courses/${cid}`)
            );
            const coursesRes = await Promise.all(coursePromises);
            setCourses(coursesRes.map((r) => r.data));
          } else {
            setCourses([]);
          }
        } catch (error) {
          setStudent(null);
          setCourses([]);
        }
      };
  
      fetchStudentDataAndCourses();
    }, [studentId]);
  
    const tasks = [
      { name: "Complete first module", status: "Completed" },
      { name: "Attend live session", status: "Pending" },
      { name: "Submit assignment", status: "In Progress" },
    ];
  return (
    <>
      <Header1 />
      <SideNavBar1 />
      <div className="main-content">
       <div className="page-content">
          <div className="container-fluid mt-4 px-4">
            {/* Page Title */}

            <div className="mb-4">
              <h3 className="fw-bold">Student Course</h3>
              <p className="text-muted">
                Welcome back! Here’s a quick overview of your activity.
              </p>
            </div>

            {/* Overview Cards */}
            <div className="row mb-4">

              {/* Statistics Cards */}
          
                  <div className="col-md-4">
                    <div className="card card-h-100">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-6">
                            <span className="text-muted mb-3 lh-1 d-block text-truncate">
                              Enrolled Courses
                            </span>
                            <h4 className="mb-3">{courses.length}</h4>
                          </div>
                          <div className="col-6">
                            <div class="avatar-md m-auto">
                              <span class="avatar-title rounded-circle bg-primary text-white font-size-24">
                                <i class="mdi mdi-ethereum"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-nowrap">
                          <span className="ms-1 text-muted font-size-13">
                            Learn Here and Grow Here
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card card-h-100">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-6">
                            <span className="text-muted mb-3 lh-1 d-block text-truncate">
                              Tasks Completed
                            </span>
                            <h4 className="mb-3">
                              {
                                tasks.filter((t) => t.status === "Completed")
                                  .length
                              }
                            </h4>
                          </div>
                          <div className="col-6">
                            <div class="avatar-md m-auto mb-2">
                              <span class="avatar-title rounded-circle bg-primary text-white font-size-24">
                                <i class="mdi mdi-check-circle-outline"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-nowrap">
                          <span className="ms-1 text-muted font-size-13">
                            Good at completed Task
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card card-h-100">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-6">
                            <span className="text-muted mb-3 lh-1 d-block text-truncate">
                              Pending Tasks
                            </span>
                            <h4 className="mb-3">
                              {
                                tasks.filter(
                                  (t) =>
                                    t.status === "Pending" ||
                                    t.status === "In Progress"
                                ).length
                              }
                            </h4>
                          </div>
                          <div className="col-6">
                            <div class="avatar-md m-auto mb-2">
                              <span class="avatar-title rounded-circle bg-primary text-white font-size-24">
                                <i class="mdi mdi-timer-sand"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-nowrap">
                          <span className="ms-1 text-muted font-size-13">
                            I will help you do it
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
             
            
             <div className="mb-4">
              <h4 className="fw-bold mb-3">Your Enrolled Courses</h4>
              <div className="row">
                {courses.length === 0 ? (
                  <div className="col-12 text-center py-5">
                    <h5 style={{ color: "#7f8c8d", fontWeight: "500" }}>
                      No courses assigned yet
                    </h5>
                    <p style={{ color: "#95a5a6", margin: "0" }}>
                      Courses will appear here once you're enrolled
                    </p>
                  </div>
                ) : (
                  courses.map((course, index) => (
                    <div className="col-xl-4 mb-4" key={index}>
                      <div className="card p-1 h-100">
                        <div className="p-3">
                          <div className="d-flex align-items-start">
                            <div className="flex-grow-1 overflow-hidden">
                              <h5 className="font-size-15 text-truncate">
                                <a href="#" className="text-body">
                                  {course.courseName ||
                                    "Beautiful Day with Friends"}
                                </a>
                              </h5>
                              <p className="font-size-13 text-muted mb-0">
                                {course.createdAt
                                  ? new Date(
                                      course.createdAt
                                    ).toLocaleDateString()
                                  : "10 Apr, 2020"}
                              </p>
                            </div>
                            <div className="flex-shrink-0 ms-2">
                              <div className="dropdown">
                                <a
                                  className="btn btn-link text-muted font-size-16 p-1 py-0 dropdown-toggle shadow-none"
                                  href="#"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="bx bx-dots-horizontal-rounded"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Action
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Another action
                                    </a>
                                  </li>
                                  <li>
                                    <a className="dropdown-item" href="#">
                                      Something else here
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="position-relative">
                          <img
                            src={`/${course.courseImages?.[0]}`}
                            alt={course.courseName}
                            className="img-thumbnail"
                          />
                        </div>

                        <div className="p-3">
                          <ul className="list-inline">
                            <li className="list-inline-item me-3">
                              <a href="#" className="text-muted">
                                <i className="bx bx-purchase-tag-alt align-middle text-muted me-1"></i>
                                {course.courseName}
                              </a>
                            </li>
                            <li className="list-inline-item me-3">
                              <a href="#" className="text-muted">
                                <i className="bx bx-comment-dots align-middle text-muted me-1"></i>
                                Duration: {course.duration} weeks
                              </a>
                            </li>
                          </ul>
                          <p className="text-muted">
                            Level: {course.skillLevels}
                          </p>
                          <p className="text-muted">₹ {course.price}</p>

                          <div>
                           <div>
                            <Link to="/Mycoursedetails" className="text-primary" state={{ scourseId: course._id, courseName: course.courseName }}>
                              View Course{" "}
                              <i className="mdi mdi-arrow-right"></i>
                            </Link>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default StudentCourse1;
