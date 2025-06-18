import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashBoard1 from "../DashBoard/DashBoard";

const SideNavBar1 = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleDropdown = (menuKey) => {
    setActiveMenu((prev) => (prev === menuKey ? null : menuKey));
  };
  return (
    <div class="vertical-menu mm-active">
      <div data-simplebar="init" class="h-100 mm-show simplebar-scrollable-y">
        <div class="simplebar-wrapper" style={{ margin: "0px" }}>
          <div class="simplebar-height-auto-observer-wrapper">
            <div class="simplebar-height-auto-observer"></div>
          </div>
          <div class="simplebar-mask">
            <div
              class="simplebar-offset"
              style={{ right: "0px", bottom: "0px" }}
            >
              <div
                class="simplebar-content-wrapper"
                tabindex="0"
                role="region"
                aria-label="scrollable content"
                style={{ height: "100%", overflow: "hidden scroll" }}
              >
                <div class="simplebar-content" style={{ padding: "0px" }}>
                  <div id="sidebar-menu" class="mm-active">
                    <ul class="metismenu list-unstyled mm-show" id="side-menu">
                      <li class="menu-title" data-key="t-menu">
                        Menu
                      </li>

                      <li class="mm-active">
                        <Link to="/DashBoard" class="active">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-home"
                          >
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                          </svg>
                          <span data-key="t-dashboard">Dashboard</span>
                        </Link>
                      </li>

                      <li
                        className={`${
                          activeMenu === "studentmanagement" ? "mm-active" : ""
                        }`}
                      >
                        <Link
                          to="javascript: void(0);"
                          class="has-arrow"
                          aria-expanded={activeMenu === "studentmanagement"}
                          onClick={() => toggleDropdown("studentmanagement")}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-grid"
                          >
                            <rect x="3" y="3" width="7" height="7"></rect>
                            <rect x="14" y="3" width="7" height="7"></rect>
                            <rect x="14" y="14" width="7" height="7"></rect>
                            <rect x="3" y="14" width="7" height="7"></rect>
                          </svg>
                          <span data-key="t-apps">Student Management</span>
                        </Link>
                        <ul
                          className={`sub-menu mm-collapse ${
                            activeMenu === "studentmanagement" ? "mm-show" : ""
                          }`}
                          aria-expanded={activeMenu === "studentmanagement"}
                        >
                          <li>
                            <Link to="/EnrollmentList1">
                              <span data-key="t-calendar">
                                Enrollment List
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/ProgressTracking1">
                              <span data-key="t-calendar">
                                Progress Tracking
                              </span>
                            </Link>
                          </li>
                          {/* <li>
                            <Link to="/PermisssionRoles1">
                              <span data-key="t-calendar">
                                Communication Tools
                              </span>
                            </Link>
                          </li> */}

                          <li>
                            <Link to="/StudentEnrollment1">
                              <span data-key="t-chat">Student Enrollment</span>
                            </Link>
                          </li>

                         
                        </ul>
                      </li>

                      <li
                        className={`${
                          activeMenu === "CourseManagement" ? "mm-active" : ""
                        }`}
                      >
                        <Link
                          to="javascript: void(0);"
                          class="has-arrow"
                          aria-expanded={activeMenu === "CourseManagement"}
                          onClick={() => toggleDropdown("CourseManagement")}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-users"
                          >
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                          <span data-key="t-authentication">
                            Course Management
                          </span>
                        </Link>
                        <ul
                          className={`sub-menu mm-collapse ${
                            activeMenu === "CourseManagement" ? "mm-show" : ""
                          }`}
                          aria-expanded={activeMenu === "CourseManagement"}
                        >
                          <li>
                            <Link to="/CourseCreation1" data-key="t-login">
                              Course Creation
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Category1"
                              data-key="t-register"
                            >
                              Category
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/SubCategory1"
                              data-key="t-register"
                            >
                              SubCategory
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li
                        className={`${
                          activeMenu === "Learning  Features" ? "mm-active" : ""
                        }`}
                      >
                        <Link
                          to="javascript: void(0);"
                          class="has-arrow"
                          aria-expanded={activeMenu === "Learning  Features"}
                          onClick={() => toggleDropdown("Learning  Features")}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-file-text"
                          >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                          </svg>
                          <span data-key="t-pages">Learning Features</span>
                        </Link>
                        <ul
                          class="sub-menu mm-collapse"
                          className={`sub-menu mm-collapse ${
                            activeMenu === "Learning  Features" ? "mm-show" : ""
                          }`}
                          aria-expanded={activeMenu === "Learning  Features"}
                        >
                          <li>
                            <Link to="/VideoLesson1" data-key="t-starter-page">
                              Video Lesson
                            </Link>
                          </li>
                          <li>
                            <Link to="/Quiz1" data-key="t-maintenance">
                              Quizez & Exam
                            </Link>
                          </li>
                          <li>
                            <Link to="/Assigngment1" data-key="t-coming-soon">
                              Assigngment Submission
                            </Link>
                          </li>
                          <li>
                            <Link to="/Certification1" data-key="t-timeline">
                              Certifications
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li
                        className={`${
                          activeMenu === "Instructor  Features"
                            ? "mm-active"
                            : ""
                        }`}
                      >
                        <Link
                          to="javascript: void(0);"
                          class="has-arrow"
                          aria-expanded={activeMenu === "Instructor  Features"}
                          onClick={() => toggleDropdown("Instructor  Features")}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-layout"
                          >
                            <rect
                              x="3"
                              y="3"
                              width="18"
                              height="18"
                              rx="2"
                              ry="2"
                            ></rect>
                            <line x1="3" y1="9" x2="21" y2="9"></line>
                            <line x1="9" y1="21" x2="9" y2="9"></line>
                          </svg>
                          <span data-key="t-horizontal">Communication</span>
                        </Link>
                        <ul
                          class="sub-menu mm-collapse"
                          className={`sub-menu mm-collapse ${
                            activeMenu === "Instructor  Features"
                              ? "mm-show"
                              : ""
                          }`}
                          aria-expanded={activeMenu === "Instructor  Features"}
                        >
                          <li>
                            <Link
                              to="/DiscussionForm1"
                              data-key="t-starter-page"
                            >
                              Discussion Forms
                            </Link>
                          </li>
                          <li>
                            <Link to="/LiveClass1" data-key="t-maintenance">
                              Live Class & Webinars
                            </Link>
                          </li>
                          <li>
                            <Link to="/Chat1" data-key="t-coming-soon">
                              Chat
                            </Link>
                          </li>
                          <li>
                            <Link to="/Announcement1" data-key="t-timeline">
                              Announcement & Notification
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li
                        className={`${
                          activeMenu === "reports" ? "mm-active" : ""
                        }`}
                      >
                        <Link
                          to="javascript: void(0);"
                          class="has-arrow"
                          aria-expanded={activeMenu === "reports"}
                          onClick={() => toggleDropdown("reports")}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-grid"
                          >
                            <rect x="3" y="3" width="7" height="7"></rect>
                            <rect x="14" y="3" width="7" height="7"></rect>
                            <rect x="14" y="14" width="7" height="7"></rect>
                            <rect x="3" y="14" width="7" height="7"></rect>
                          </svg>
                          <span data-key="t-apps">Reports</span>
                        </Link>
                        <ul
                          className={`sub-menu mm-collapse ${
                            activeMenu === "reports" ? "mm-show" : ""
                          }`}
                          aria-expanded={activeMenu === "reports"}
                        >
                          <li>
                            <Link to="/studentReports">
                              <span data-key="t-calendar">
                             Students Reports
                              </span>
                            </Link>
                          </li>

                          <li>
                            <Link to="/salesReports">
                              <span data-key="t-chat">Sales Reports</span>
                            </Link>
                          </li>
                         
                          <li>
                            <Link to="/courseReports">
                              <span data-key="t-chat">Course Reports</span>
                            </Link>
                          </li>

                          {/* <li>
                            <Link to="/InstructorManagement1">
                              <span data-key="t-chat">
                                Instructor Management
                              </span>
                            </Link>
                          </li> */}
                        </ul>
                      </li>
                      
                       <li class="menu-title" data-key="t-menu">
                        Student
                      </li>
                       <li >
                        <Link to="/StudentDashboard1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-sliders"
                          >
                            <line x1="4" y1="21" x2="4" y2="14"></line>
                            <line x1="4" y1="10" x2="4" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12" y2="3"></line>
                            <line x1="20" y1="21" x2="20" y2="16"></line>
                            <line x1="20" y1="12" x2="20" y2="3"></line>
                            <line x1="1" y1="14" x2="7" y2="14"></line>
                            <line x1="9" y1="8" x2="15" y2="8"></line>
                            <line x1="17" y1="16" x2="23" y2="16"></line>
                          </svg>
                          <span data-key="t-dashboard">Student DashBoard</span>
                        </Link>
                      </li>
                      <li >
                        <Link to="/StudentCourse1" >
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-briefcase"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                          <span data-key="t-dashboard">Student Course</span>
                        </Link>
                      </li>

                      <li >
                        <Link to="/AssigngmentStudent1" >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                          <span data-key="t-dashboard">Assignmnet & Accesement</span>
                        </Link>
                      </li>

                      <li >
                        <Link to="/Certificate1" >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-gift"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
                          <span data-key="t-dashboard">Certificate or Grade</span>
                        </Link>
                      </li>

                      <li >
                        <Link to="/HelpDesk" >
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
                          <span data-key="t-dashboard">Help Suport</span>
                        </Link>
                      </li>

                       <li >
                        <Link to="/ProfileForm" >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-sliders"
                          >
                            <line x1="4" y1="21" x2="4" y2="14"></line>
                            <line x1="4" y1="10" x2="4" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12" y2="3"></line>
                            <line x1="20" y1="21" x2="20" y2="16"></line>
                            <line x1="20" y1="12" x2="20" y2="3"></line>
                            <line x1="1" y1="14" x2="7" y2="14"></line>
                            <line x1="9" y1="8" x2="15" y2="8"></line>
                            <line x1="17" y1="16" x2="23" y2="16"></line>
                          </svg>
                          <span data-key="t-dashboard">Profile</span>
                        </Link>
                      </li>
                    </ul>

                    <div class="card sidebar-alert border-0 text-center mx-4 mb-0 mt-5">
                      <div class="card-body">
                        <img src="./assets2/images/giftbox.png" alt="" />
                        <div class="mt-4">
                          <h5 class="alertcard-title font-size-16">
                            Unlimited Access
                          </h5>
                          <p class="font-size-13">
                            Upgrade your plan from a Free trial, to select
                            ‘Business Plan’.
                          </p>
                          <Link to="#!" class="btn btn-primary mt-2">
                            Upgrade Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="simplebar-placeholder"
            style={{ width: "249px", height: "995px" }}
          ></div>
        </div>
        <div
          class="simplebar-track simplebar-horizontal"
          style={{ visibility: "hidden" }}
        >
          <div
            class="simplebar-scrollbar"
            style={{ width: "0px", display: "none" }}
          ></div>
        </div>
        <div
          class="simplebar-track simplebar-vertical"
          style={{ visibility: "visible" }}
        >
          <div
            class="simplebar-scrollbar"
            style={{
              height: "57px",
              transform: "translate3d(0px, 0px, 0px)",
              display: "block",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar1;
