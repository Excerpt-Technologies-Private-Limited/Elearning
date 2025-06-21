import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import DashBoard from "../DashBoard/DashBoard";
import { HiDotsHorizontal } from "react-icons/hi";

const AdminSideNavaBar = () => {
  const [isSideBar, setIsSideBar] = useState(false);
  const [isLiveClassOpen, setIsLiveClassOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const SideBar = () => {
    setIsSideBar((prev) => !prev);
  };

  const toggleLiveClassMenu = (dropdownName) => {
    // setIsLiveClassOpen((prev) => !prev);
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  return (
    <>
      <header className="header -dashboard -dark-bg-dark-1 js-header">
        <div className="header__container py-20 px-30">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="d-flex items-center">
                <div className="header__explore text-dark-1">
                  <button
                    className="d-flex items-center js-dashboard-home-9-sidebar-toggle"
                    onClick={SideBar}
                  >
                    <i className="icon -dark-text-white icon-explore"></i>
                  </button>
                </div>
                <div className="header__logo ml-30 md:ml-20">
                  <Link data-barba="true" to="/">
                    <img
                      alt="logo"
                      loading="lazy"
                      width="140"
                      height="50"
                      decoding="async"
                      data-nimg="1"
                      className="-light-d-none"
                      src="/assets/img/general/logo.svg"
                      style={{ color: "transparent" }}
                    />
                    <img
                      alt="logo"
                      loading="lazy"
                      width="140"
                      height="50"
                      decoding="async"
                      data-nimg="1"
                      className="-dark-d-none"
                      src="/assets/img/general/logo-dark.svg"
                      style={{ color: "transparent" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <div
          id="dashboardOpenClose"
          className={`dashboard -home-9 js-dashboard-home-9 ${
            isSideBar ? "-is-sidebar-hidden" : ""
          }`}
        >
          <div className="dashboard__sidebar scroll-bar-1">
            <div className="sidebar -dashboard">
              <div className="sidebar__item -is-active">
                <Link
                  className="d-flex items-center text-17 lh-1 fw-500"
                  to="/dashboard"
                >
                  <i className="text-20 icon-discovery mr-15"></i>Dashboard
                </Link>
              </div>

              <div className={`sidebar__item ${openDropdown === "CourseManagement" ? "-is-active" : ""}`}>
                <div
                  className="d-flex items-center text-17 lh-1 fw-500 cursor-pointer"
                  onClick={() => toggleLiveClassMenu("CourseManagement")}
                >
                  <div className="d-flex items-center">
                    <i className="text-20 icon-access mr-15"></i> Course
                  Management
                  </div>
                  <i
                    className={`text-15 ${
                      openDropdown === "CourseManagement"
                        ? "icon-chevron-up"
                        : "icon-chevron-down"
                    } ml-10`}
                  ></i>
                </div>
              </div>

              <div
                className={`sidebar__submenu ${
                  openDropdown === "CourseManagement" ? "d-block" : "d-none"
                }`}
              >
                <Link
                  to="/ManageCourses"
                  className="sidebar__submenu-link pl-40 py-10 d-block text-15"
                >
                  <HiDotsHorizontal /> Course Form
                </Link>
                <Link
                  to="/category"
                  className="sidebar__submenu-link pl-40 py-10 d-block text-15"
                >
                  <HiDotsHorizontal /> Category
                </Link>
                <Link
                  to="/subcategory"
                  className="sidebar__submenu-link pl-40 py-10 d-block text-15"
                >
                  <HiDotsHorizontal /> Sub Category
                </Link>
                
              </div>

              <div className={`sidebar__item ${openDropdown === "studentmanagement" ? "-is-active" : ""}`}>
                <div
                  className="d-flex items-center text-17 lh-1 fw-500 cursor-pointer"
                  onClick={() => toggleLiveClassMenu("studentmanagement")}
                >
                  <div className="d-flex items-center">
                    <i className="text-20 icon-access mr-15"></i> Student
                    Management
                  </div>
                  <i
                    className={`text-15 ${
                      openDropdown === "studentmanagement"
                        ? "icon-chevron-up"
                        : "icon-chevron-down"
                    } ml-10`}
                  ></i>
                </div>
              </div>

              <div
                className={`sidebar__submenu ${
                  openDropdown === "studentmanagement" ? "d-block" : "d-none"
                }`}
              >
                <Link
                  to="/EnrollmentList"
                  className="sidebar__submenu-link pl-40 py-10 d-block text-15"
                >
                  <HiDotsHorizontal /> Enrollment List
                </Link>
                <Link
                  to="/ProgressTracking"
                  className="sidebar__submenu-link pl-40 py-10 d-block text-15"
                >
                  <HiDotsHorizontal /> Progress Tracking
                </Link>
                <Link
                  to="/CommunicationTools"
                  className="sidebar__submenu-link pl-40 py-10 d-block text-15"
                >
                  <HiDotsHorizontal /> Communication Tools
                </Link>
                <Link
                  to="/ManageCertificates"
                  className="sidebar__submenu-link pl-40 py-10 d-block text-15"
                >
                  <HiDotsHorizontal /> Manage Certificates
                </Link>
              </div>


              <div className={`sidebar__item ${openDropdown === "masterofliveclass" ? "-is-active" : ""}`}>
                <div
                  className="d-flex items-center justify-between text-17 lh-1 fw-500 cursor-pointer"
                  onClick={() => toggleLiveClassMenu("masterofliveclass")}
                >
                  <div className="d-flex items-center">
                    <i className="text-20 icon-person-2 mr-15"></i> Management of
                    Live Class
                  </div>
                  <i
                    className={`text-15 ${
                      openDropdown === "masterofliveclass"
                        ? "icon-chevron-up"
                        : "icon-chevron-down"
                    } ml-10`}
                  ></i>
                </div>
              </div>

              <div
                className={`sidebar__submenu ${
                  openDropdown === "masterofliveclass" ? "d-block" : "d-none"
                }`}
              >
                <Link
                  to="/CourseScheduling"
                  className="sidebar__submenu-link pl-40 py-10 d-block text-15"
                >
                  <HiDotsHorizontal /> Course Scheduling
                </Link>
                <Link
                  to="/CourseEnrollmentManager"
                  className="sidebar__submenu-link pl-40 py-10 d-block text-15"
                >
                  <HiDotsHorizontal /> Enrollment Window Management
                </Link>
                <Link
                  to="/LiveSesssionScheduler"
                  className="sidebar__submenu-link pl-40 py-10 d-block text-15"
                >
                  <HiDotsHorizontal /> Live Session Scheduler
                </Link>
                <Link
                  to="/InstructorAdminstrations"
                  className="sidebar__submenu-link pl-40 py-10 d-block text-15"
                >
                  <HiDotsHorizontal /> Instructor Administration
                </Link>
              </div>


               <div className={`sidebar__item ${openDropdown === "PaymentManagement" ? "-is-active" : ""}`}>
                <div
                  className="d-flex items-center justify-between text-17 lh-1 fw-500 cursor-pointer"
                  onClick={() => toggleLiveClassMenu("PaymentManagement")}
                >
                  <div className="d-flex items-center">
                    <i className="text-20 icon-person-2 mr-15"></i> Payment Management
                  </div>
                  <i
                    className={`text-15 ${
                      openDropdown === "PaymentManagement"
                        ? "icon-chevron-up"
                        : "icon-chevron-down"
                    } ml-10`}
                  ></i>
                </div>
              </div>

              <div
                className={`sidebar__submenu ${
                  openDropdown === "PaymentManagement" ? "d-block" : "d-none"
                }`}
              >
                <Link
                  to="/ViewTransationHistory"
                  className="sidebar__submenu-link pl-40 py-10 d-block text-15"
                >
                  <HiDotsHorizontal /> View transaction history
                </Link>
                <Link
                  to="/RefundManagement"
                  className="sidebar__submenu-link pl-40 py-10 d-block text-15"
                >
                  <HiDotsHorizontal /> Refund management
                </Link>
                <Link
                  to="/CouponManagement"
                  className="sidebar__submenu-link pl-40 py-10 d-block text-15"
                >
                  <HiDotsHorizontal /> Coupon management
                </Link>
                
              </div>


              <div className="sidebar__item">
                <Link
                  className="d-flex items-center text-17 lh-1 fw-500"
                  to="/"
                >
                  <i className="text-20 icon-power mr-15"></i>Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSideNavaBar;
