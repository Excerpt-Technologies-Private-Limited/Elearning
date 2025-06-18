// import React, { useState, useRef } from "react";
// import { RiMenu4Fill } from "react-icons/ri";
// import { Link } from "react-router-dom";
// import { FiChevronDown } from "react-icons/fi";
// import LoginModal from "../Login/Login";
// import Register from "../Register/Register";

// const Navbar = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [exploreVisible, setExploreVisible] = useState(false);
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const [isRegisterOpen, setIsRegisterOpen] = useState(false);

//   const token = localStorage.getItem("token");


//   const toggleMenu = () => {
//     setIsVisible((prev) => !prev);
//   };

//   const handleDropdown = (dropdownName) => {
//     setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
//   };

//   const handleClose = () => {
//     setIsVisible(false);
//   };

//   const handleExploreToggle = () => {
//     setExploreVisible((prev) => !prev);
//   };
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.location.href = "/";
//   };

//   return (
//     <>
//       <header className="header -type-1 ">
//         <div className="header__container">
//           <div className="row justify-between items-center">
//             <div className="col-auto">
//               <div className="header-left">
//                 <div className="header__logo ">
//                   <Link to="/">
//                     <img
//                       alt="logo"
//                       loading="lazy"
//                       width="140"
//                       height="50"
//                       decoding="async"
//                       data-nimg="1"
//                       src="/assets/img/general/logo2.png"
//                     />
//                   </Link>
//                 </div>
//                 <div className="header__explore text-green-1 ml-60 xl:ml-30 xl:d-none">
//                   <Link
//                     className="d-flex items-center"
//                     data-el-toggle=".js-explore-toggle"
//                     data-el-toggle-active-class="-is-el-visible"
//                     onClick={handleExploreToggle}
//                   >
//                     <RiMenu4Fill />
//                     Explore
//                   </Link>

//                   <div
//                     className={`explore-content py-25 rounded-8 bg-white toggle-element js-explore-toggle ${
//                       exploreVisible ? "-is-el-visible" : ""
//                     }`}
//                   >
//                     <div className="explore__item">
//                       <Link
//                         className="d-flex items-center justify-between text-dark-1"
//                         to="#"
//                       >
//                         Architecture
//                         <div className="icon-chevron-right text-11"></div>
//                       </Link>
//                       <div className="explore__subnav rounded-8">
//                         <Link className="text-dark-1" to="/courses/6">
//                           Web Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses/6">
//                           Graphic Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses/6">
//                           Design Tools
//                         </Link>
//                         <Link className="text-dark-1" to="/courses/6">
//                           User Experience Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses/6">
//                           Game Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses/6">
//                           3D &amp; Animation
//                         </Link>
//                         <Link className="text-dark-1" to="/courses/6">
//                           Fashion Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses/6">
//                           Interior Design
//                         </Link>
//                       </div>
//                     </div>
//                     <div className="explore__item">
//                       <Link
//                         className="d-flex items-center justify-between text-dark-1"
//                         to="#"
//                       >
//                         Business
//                         <div className="icon-chevron-right text-11"></div>
//                       </Link>
//                       <div className="explore__subnav rounded-8">
//                         <Link className="text-dark-1" to="/courses/6}">
//                           Web Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses/6}">
//                           Graphic Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses/6}">
//                           Design Tools
//                         </Link>
//                         <Link className="text-dark-1" to="/courses/6}">
//                           User Experience Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses/6}">
//                           Game Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses/6}">
//                           3D &amp; Animation
//                         </Link>
//                         <Link className="text-dark-1" to="/courses/6}">
//                           Fashion Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses/6}">
//                           Interior Design
//                         </Link>
//                       </div>
//                     </div>
//                     <div className="explore__item">
//                       <Link className="text-dark-1" to="#">
//                         Computer Programming
//                       </Link>
//                     </div>
//                     <div className="explore__item">
//                       <Link className="text-dark-1" to="#">
//                         Data Analysis
//                       </Link>
//                     </div>
//                     <div className="explore__item">
//                       <Link
//                         className="d-flex items-center justify-between text-dark-1"
//                         to="#"
//                       >
//                         Design<div className="icon-chevron-right text-11"></div>
//                       </Link>
//                       <div className="explore__subnav rounded-8">
//                         <Link className="text-dark-1" to="/courses/6">
//                           Web Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses-single-2/3">
//                           Graphic Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses-single-3/3">
//                           Design Tools
//                         </Link>
//                         <Link className="text-dark-1" to="/courses-single-4/3">
//                           User Experience Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses-single-5/3">
//                           Game Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses-single-6/3">
//                           3D &amp; Animation
//                         </Link>
//                         <Link className="text-dark-1" to="/courses/6">
//                           Fashion Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses-single-2/3">
//                           Interior Design
//                         </Link>
//                       </div>
//                     </div>
//                     <div className="explore__item">
//                       <Link className="text-dark-1" to="/courses-single-6/3">
//                         Education
//                       </Link>
//                     </div>
//                     <div className="explore__item">
//                       <Link
//                         className="d-flex items-center justify-between text-dark-1"
//                         to="#"
//                       >
//                         Electronics
//                         <div className="icon-chevron-right text-11"></div>
//                       </Link>
//                       <div className="explore__subnav rounded-8">
//                         <Link className="text-dark-1" to="/courses/6">
//                           Web Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses-single-2/3">
//                           Graphic Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses-single-3/3">
//                           Design Tools
//                         </Link>
//                         <Link className="text-dark-1" to="/courses-single-4/3">
//                           User Experience Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses-single-5/3">
//                           Game Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses-single-6/3">
//                           3D &amp; Animation
//                         </Link>
//                         <Link className="text-dark-1" to="/courses/6">
//                           Fashion Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses-single-2/3">
//                           Interior Design
//                         </Link>
//                       </div>
//                     </div>
//                     <div className="explore__item">
//                       <Link
//                         className="d-flex items-center justify-between text-dark-1"
//                         to="#"
//                       >
//                         Language
//                         <div className="icon-chevron-right text-11"></div>
//                       </Link>
//                       <div className="explore__subnav rounded-8">
//                         <Link className="text-dark-1" to="/courses/6">
//                           Web Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses-single-2/3">
//                           Graphic Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses-single-3/3">
//                           Design Tools
//                         </Link>
//                         <Link className="text-dark-1" to="/courses-single-4/3">
//                           User Experience Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses-single-5/3">
//                           Game Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses-single-6/3">
//                           3D &amp; Animation
//                         </Link>
//                         <Link className="text-dark-1" to="/courses/6">
//                           Fashion Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses-single-2/3">
//                           Interior Design
//                         </Link>
//                       </div>
//                     </div>
//                     <div className="explore__item">
//                       <Link
//                         className="d-flex items-center justify-between text-dark-1"
//                         to="#"
//                       >
//                         Marketing
//                         <div className="icon-chevron-right text-11"></div>
//                       </Link>
//                       <div className="explore__subnav rounded-8">
//                         <Link className="text-dark-1" to="/courses/6">
//                           Web Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses-single-2/3">
//                           Graphic Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses-single-3/3">
//                           Design Tools
//                         </Link>
//                         <Link className="text-dark-1" to="/courses-single-4/3">
//                           User Experience Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses-single-5/3">
//                           Game Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses-single-6/3">
//                           3D &amp; Animation
//                         </Link>
//                         <Link className="text-dark-1" to="/courses/6">
//                           Fashion Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses-single-2/3">
//                           Interior Design
//                         </Link>
//                       </div>
//                     </div>
//                     <div className="explore__item">
//                       <Link className="text-dark-1" to="#">
//                         Music Arts
//                       </Link>
//                     </div>
//                     <div className="explore__item">
//                       <Link className="text-dark-1" to="#">
//                         Social Science
//                       </Link>
//                     </div>
//                     <div className="explore__item">
//                       <Link
//                         className="d-flex items-center justify-between text-dark-1"
//                         to="#"
//                       >
//                         Photography &amp; Video
//                         <div className="icon-chevron-right text-11"></div>
//                       </Link>
//                       <div className="explore__subnav rounded-8">
//                         <Link className="text-dark-1" to="/courses/6">
//                           Web Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses-single-2/3">
//                           Graphic Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses-single-3/3">
//                           Design Tools
//                         </Link>
//                         <Link className="text-dark-1" to="/courses-single-4/3">
//                           User Experience Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses-single-5/3">
//                           Game Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses-single-6/3">
//                           3D &amp; Animation
//                         </Link>
//                         <Link className="text-dark-1" to="/courses/6">
//                           Fashion Design
//                         </Link>
//                         <Link className="text-dark-1" to="/courses-single-2/3">
//                           Interior Design
//                         </Link>
//                       </div>
//                     </div>
//                     <div className="explore__item">
//                       <Link className="text-dark-1" to="/courses/6">
//                         IT &amp; Software
//                       </Link>
//                     </div>
//                     <div className="explore__item">
//                       <Link
//                         className="text-purple-1 underline"
//                         to="/courses-single-2/3"
//                       >
//                         View All Courses
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="header-menu js-mobile-menu-toggle">
//               <div className="header-menu__content">
//                 <div className="mobile-bg js-mobile-bg"></div>
//                 <div className="d-none xl:d-flex items-center px-20 py-20 border-bottom-light">
//                   <Link className="text-dark-1" to="/login">
//                     Log in
//                   </Link>
//                   <Link className="text-dark-1 ml-30" to="/signup">
//                     Sign Up
//                   </Link>
//                 </div>
//                 <div className="menu js-navList">
//                   <ul className="menu__nav text-white -is-active">
//                     <li>
//                       <Link
//                         data-barba="true"
//                         className="inActiveMenuTwo"
//                         to="/"
//                       >
//                         Home
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         data-barba="true"
//                         className="inActiveMenuTwo"
//                         to="/Aboutus"
//                       >
//                         About Us
//                       </Link>
//                     </li>
//                     <li class="menu-item-has-children -has-mega-menu">
//                       <Link data-barba="true" class="" to="#">
//                         Courses <i class="icon-chevron-right text-13 ml-10"></i>
//                       </Link>
//                       <div class="mega xl:d-none">
//                         <div class="mega__menu">
//                           <div class="row x-gap-40">
//                             <div class="col">
//                               <h4 class="text-17 fw-500 mb-20">Course List</h4>
//                               <ul class="mega__list">
//                                 <li class="inActiveMegaMenu">
//                                   <Link data-barba="true" to="/AllCourse">
//                                     Learn Figma - UI/UX Design Essential
//                                     Training
//                                   </Link>
//                                 </li>
//                                 <li class="inActiveMegaMenu">
//                                   <Link data-barba="true" to="/AllCourse">
//                                     Complete Python Bootcamp From Zero to Hero
//                                     in Python
//                                   </Link>
//                                 </li>
//                                 <li class="inActiveMegaMenu">
//                                   <Link data-barba="true" to="/AllCourse">
//                                     Angular - The Complete Guide (2022 Edition)
//                                   </Link>
//                                 </li>
//                                 <li class="inActiveMegaMenu">
//                                   <Link data-barba="true" to="/AllCourse">
//                                     Complete Blender Creator: Learn 3D Modelling
//                                     for Beginners
//                                   </Link>
//                                 </li>
//                                 <li class="inActiveMegaMenu">
//                                   <Link data-barba="true" to="/AllCourse">
//                                     The Ultimate Drawing Course Beginner to
//                                     Advanced
//                                   </Link>
//                                 </li>
//                               </ul>
//                             </div>
//                             <div class="col">
//                               <h4 class="text-17 fw-500 mb-20">
//                                 Programming Languages
//                               </h4>
//                               <ul class="mega__list">
//                                 <li class="inActiveMegaMenu">
//                                   <Link data-barba="true" to="/AllCourse">
//                                     JavaScript
//                                   </Link>
//                                 </li>
//                                 <li class="inActiveMegaMenu">
//                                   <Link data-barba="true" to="/AllCourse">
//                                     Python
//                                   </Link>
//                                 </li>
//                                 <li class="inActiveMegaMenu">
//                                   <Link data-barba="true" to="/AllCourse">
//                                     Java
//                                   </Link>
//                                 </li>
//                                 <li class="inActiveMegaMenu">
//                                   <Link data-barba="true" to="/AllCourse">
//                                     C++
//                                   </Link>
//                                 </li>
//                                 <li class="inActiveMegaMenu">
//                                   <Link data-barba="true" to="/AllCourse">
//                                     PHP
//                                   </Link>
//                                 </li>
//                               </ul>
//                             </div>
//                             <div class="col">
//                               <h4 class="text-17 fw-500 mb-20">
//                                 Others Courses
//                               </h4>
//                               <ul class="mega__list">
//                                 <li class="inActiveMegaMenu">
//                                   <Link data-barba="true" to="/lesson-single-1">
//                                     Data Science
//                                   </Link>
//                                 </li>
//                                 <li class="inActiveMegaMenu">
//                                   <Link data-barba="true" to="/lesson-single-2">
//                                     Machine Learning
//                                   </Link>
//                                 </li>
//                                 <li class="inActiveMegaMenu">
//                                   <Link
//                                     data-barba="true"
//                                     to="/instructors-list-1"
//                                   >
//                                     Cloud Computing
//                                   </Link>
//                                 </li>
//                                 <li class="inActiveMegaMenu">
//                                   <Link
//                                     data-barba="true"
//                                     to="/instructors-list-2"
//                                   >
//                                     Cybersecurity
//                                   </Link>
//                                 </li>
//                                 <li class="inActiveMegaMenu">
//                                   <Link
//                                     data-barba="true"
//                                     to="/instructor-become"
//                                   >
//                                     Communication Skills
//                                   </Link>
//                                 </li>
//                               </ul>
//                             </div>

//                             <div class="col">
//                               <h4 class="text-17 fw-500 mb-20">
//                                 Popular Courses
//                               </h4>
//                               <ul class="mega__list">
//                                 <li class="inActiveMegaMenu">
//                                   <Link data-barba="true" to="#">
//                                     Web Developer
//                                   </Link>
//                                 </li>
//                                 <li class="inActiveMegaMenu">
//                                   <Link data-barba="true" to="#">
//                                     Mobile Developer
//                                   </Link>
//                                 </li>
//                                 <li class="inActiveMegaMenu">
//                                   <Link data-barba="true" to="#">
//                                     Digital Marketing
//                                   </Link>
//                                 </li>
//                                 <li class="inActiveMegaMenu">
//                                   <Link data-barba="true" to="#">
//                                     Development
//                                   </Link>
//                                 </li>
//                                 <li class="inActiveMegaMenu">
//                                   <Link data-barba="true" to="#">
//                                     Finance &amp; Accounting
//                                   </Link>
//                                 </li>
//                                 <li class="inActiveMegaMenu">
//                                   <Link data-barba="true" to="#">
//                                     Design
//                                   </Link>
//                                 </li>
//                                 <li class="inActiveMegaMenu">
//                                   <Link data-barba="true" to="#">
//                                     View All Courses
//                                   </Link>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                           <div class="mega-banner bg-purple-1 ml-40">
//                             <div class="text-24 lh-15 text-white fw-700">
//                               Join more than
//                               <br />
//                               <span class="text-green-1">
//                                 8 million learners
//                               </span>
//                               worldwide
//                             </div>
//                             <Link
//                               class="button -md -green-1 text-dark-1 fw-500 col-12"
//                               to="#"
//                             >
//                               Start Learning For Free
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                     </li>
//                     <li class="menu-item-has-children">
//                       <Link data-barba="true" class="" to="#">
//                         Events <i class="icon-chevron-right text-13 ml-10"></i>
//                       </Link>
//                       <ul class="subnav">
//                         <li class="menu__backButton js-nav-list-back">
//                           <Link to="#">
//                             <i class="icon-chevron-left text-13 mr-10"></i>{" "}
//                             Events
//                           </Link>
//                         </li>
//                         <li class="inActiveMenu">
//                           <Link data-barba="true" to="/">
//                             UpComing Events
//                           </Link>
//                         </li>
//                       </ul>
//                     </li>

//                     <li>
//                       <Link
//                         data-barba="true"
//                         className="inActiveMenuTwo"
//                         to="/blog"
//                       >
//                         Blog
//                       </Link>
//                     </li>

//                     <li>
//                       <Link
//                         data-barba="true"
//                         className="inActiveMenuTwo"
//                         to="/ContactUs"
//                       >
//                         Contact Us
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>

//                 <div className="mobile-footer px-20 py-20 border-top-light js-mobile-footer">
//                   <div className="mobile-footer__number">
//                     <div className="text-17 fw-500 text-dark-1">Call us</div>
//                     <div className="text-17 fw-500 text-purple-1">
//                       800 388 80 90
//                     </div>
//                   </div>
//                   <div className="lh-2 mt-10">
//                     <div>
//                       329 Queensberry Street,
//                       <br /> North Melbourne VIC 3051, Australia.
//                     </div>
//                     <div>hi@educrat.com</div>
//                   </div>
//                   <div className="mobile-socials mt-10">
//                     <Link
//                       className="d-flex items-center justify-center rounded-full size-40"
//                       to="#"
//                     >
//                       <i className="fa fa-facebook"></i>
//                     </Link>
//                     <Link
//                       className="d-flex items-center justify-center rounded-full size-40"
//                       to="#"
//                     >
//                       <i className="fa fa-twitter"></i>
//                     </Link>
//                     <Link
//                       className="d-flex items-center justify-center rounded-full size-40"
//                       to="#"
//                     >
//                       <i className="fa fa-instagram"></i>
//                     </Link>
//                     <Link
//                       className="d-flex items-center justify-center rounded-full size-40"
//                       to="#"
//                     >
//                       <i className="fa fa-linkedin"></i>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//               <div className="header-menu-close">
//                 <div className="size-40 d-flex items-center justify-center rounded-full bg-white">
//                   <div className="icon-close text-dark-1 text-16"></div>
//                 </div>
//               </div>
//               <div className="header-menu-bg"></div>
//             </div>
//             <div
//               className={`header-menu js-mobile-menu-toggle isVisible ?  ${
//                 isVisible ? "-is-el-visible" : ""
//               }`}
//             >
//               <div className="header-menu__content">
//                 <div className="mobile-bg js-mobile-bg"></div>
//                 <div className="d-none xl:d-flex items-center px-20 py-20 border-bottom-light">
//                   {/* <Link className="text-dark-1 inActiveMenu " to="/login">
//                     Log in
//                   </Link>
//                   <Link
//                     className="text-dark-1 ml-30 inActiveMenu "
//                     to="/signup"
//                   >
//                     Sign Up
//                   </Link> */}

//                   <button
//                     onClick={() => setIsLoginOpen(true)}
//                     className="text-dark-1 inActiveMenu "
//                   >
//                     Log in
//                   </button>
//                   <LoginModal
//                     isOpen={isLoginOpen}
//                     onClose={() => setIsLoginOpen(false)}
//                   />

//                   <Register
//                     isOpen={isRegisterOpen}
//                     onClose={() => setIsRegisterOpen(false)}
//                   />
//                 </div>

//                 <div class="mobileMenu text-dark-1">
//                   <div class="submenuOne">
//                     <div class="title">
//                       <span class="inactiveMenu">
//                         <Link to="/">Home</Link>
//                       </span>
//                     </div>
//                   </div>
//                   <div class="submenuOne">
//                     <div class="title">
//                       <span class="inActiveMenu">
//                         <Link to="/">AboutUs</Link>
//                       </span>
//                     </div>
//                   </div>

//                   <div className="submenuOne">
//                     <div
//                       className="title cursor-pointer flex items-center justify-between"
//                       onClick={() => handleDropdown("courses")}
//                     >
//                       <span className="inActiveMenu font-medium text-gray-700">
//                         Courses
//                       </span>
//                       <i className="icon-chevron-right text-sm ml-2" />
//                     </div>

//                     {activeDropdown === "courses" && (
//                       <div className="mt-2 space-y-2">
//                         <div className="toggle active">
//                           <Link
//                             className="link inActiveMenu block text-gray-600"
//                             to="/AllCourse"
//                           >
//                             UI/UX
//                           </Link>
//                         </div>
//                         <div className="toggle active">
//                           <Link
//                             className="link inActiveMenu block text-gray-600"
//                             to="/AllCourse"
//                           >
//                             Python Programming
//                           </Link>
//                         </div>
//                         <div className="toggle active">
//                           <Link
//                             className="link inActiveMenu block text-gray-600"
//                             to="/AllCourse"
//                           >
//                             Java Programming
//                           </Link>
//                         </div>
//                         <div className="toggle active">
//                           <Link
//                             className="link inActiveMenu block text-gray-600"
//                             to="/AllCourse"
//                           >
//                             Data Science
//                           </Link>
//                         </div>
//                         <div className="toggle active">
//                           <Link
//                             className="link inActiveMenu block text-gray-600"
//                             to="/AllCourse"
//                           >
//                             Web Developer
//                           </Link>
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   <div className="submenuOne">
//                     <div
//                       className="title cursor-pointer flex items-center justify-between"
//                       onClick={() => handleDropdown("blogs")}
//                     >
//                       <span className="inActiveMenu font-medium text-gray-700">
//                         Blogs
//                       </span>
//                       <i className="icon-chevron-right text-sm ml-2" />
//                     </div>

//                     {activeDropdown === "blogs" && (
//                       <div className="mt-2">
//                         <div className="toggle active">
//                           <Link
//                             className="link inActiveMenu block text-gray-600"
//                             to="/blog"
//                           >
//                             Blog List 1
//                           </Link>
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   <div className="submenuOne">
//                     <div
//                       className="title cursor-pointer flex items-center justify-between"
//                       onClick={() => handleDropdown("Events")}
//                     >
//                       <span className="inActiveMenu font-medium text-gray-700">
//                         Events
//                       </span>
//                       <i className="icon-chevron-right text-sm ml-2" />
//                     </div>

//                     {activeDropdown === "Events" && (
//                       <div className="mt-2">
//                         <div className="toggle active">
//                           <Link
//                             className="link inActiveMenu block text-gray-600"
//                             to="/"
//                           >
//                             UpComing Events
//                           </Link>
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   <div class="submenuOne">
//                     <div class="title">
//                       <span class="inActiveMenu">
//                         <Link to="/ContactUs">ContactUs</Link>
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mobile-footer px-20 py-20 border-top-light js-mobile-footer">
//                   <div className="mobile-footer__number">
//                     <div className="text-17 fw-500 text-dark-1">Call us</div>
//                     <div className="text-17 fw-500 text-purple-1">
//                       800 388 80 90
//                     </div>
//                   </div>
//                   <div className="lh-2 mt-10">
//                     <div>
//                       329 Queensberry Street,
//                       <br /> North Melbourne VIC 3051, Australia.
//                     </div>
//                     <div>hi@educrat.com</div>
//                   </div>
//                 </div>
//               </div>

//               <div className="header-menu-close" onClick={handleClose}>
//                 <div className="size-40 d-flex items-center justify-center rounded-full bg-white">
//                   <div className="icon-close text-dark-1 text-16"></div>
//                 </div>
//               </div>
//               <div className="header-menu-bg"></div>
//             </div>

//             <div className="col-auto">
//               <div className="header-right d-flex items-center">
//                 <div className="header-right__icons text-white d-flex items-center">
//                   <div className="">
//                     <button
//                       className="d-flex items-center text-white "
//                       data-el-toggle=".js-search-toggle"
//                     >
//                       <i className="text-20 icon icon-search"></i>
//                     </button>
//                     <div className="toggle-element js-search-toggle ">
//                       <div className="header-search pt-90 bg-white shadow-4 ">
//                         <div className="container">
//                           <div className="header-search__field">
//                             <div className="icon icon-search text-dark-1"></div>
//                             <input
//                               required=""
//                               type="text"
//                               className="col-12 text-18 lh-12 text-dark-1 fw-500"
//                               placeholder="What do you want to learn?"
//                             />
//                             <button
//                               className="d-flex items-center justify-center size-40 rounded-full bg-purple-3"
//                               data-el-toggle=".js-search-toggle"
//                             >
//                               <img
//                                 alt="icon"
//                                 loading="lazy"
//                                 width="12"
//                                 height="12"
//                                 decoding="async"
//                                 data-nimg="1"
//                                 src="/assets/img/menus/close.svg"
//                               />
//                             </button>
//                           </div>
//                           <div className="header-search__content mt-30">
//                             <div className="text-17 text-dark-1 fw-500">
//                               Popular Right Now
//                             </div>
//                             <div className="d-flex y-gap-5 flex-column mt-20">
//                               <Link className="text-dark-1" to="/courses/5">
//                                 The Ultimate Drawing Course - Beginner to
//                                 Advanced
//                               </Link>
//                               <Link
//                                 className="text-dark-1"
//                                 to="/courses-single-2/3"
//                               >
//                                 Character Art School: Complete Character Drawing
//                                 Course
//                               </Link>
//                               <Link
//                                 className="text-dark-1"
//                                 to="/courses-single-3/3"
//                               >
//                                 Complete Blender Creator: Learn 3D Modelling for
//                                 Beginners
//                               </Link>
//                               <Link
//                                 className="text-dark-1"
//                                 to="/courses-single-4/3"
//                               >
//                                 User Experience Design Essentials - Adobe XD UI
//                                 UX Design
//                               </Link>
//                               <Link
//                                 className="text-dark-1"
//                                 to="/courses-single-5/3"
//                               >
//                                 Graphic Design Masterclass - Learn GREAT Design
//                               </Link>
//                               <Link
//                                 className="text-dark-1"
//                                 to="/courses-single-6/3"
//                               >
//                                 Adobe Photoshop CC – Essentials Training Course
//                               </Link>
//                             </div>
//                             <div className="mt-30">
//                               <button className="uppercase underline">
//                                 PRESS ENTER TO SEE ALL SEARCH RESULTS
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div
//                         className="header-search__bg"
//                         data-el-toggle=".js-search-toggle"
//                       ></div>
//                     </div>
//                   </div>
//                   <div className="relative ml-30 xl:ml-20">
//                     <Link to="/CourseCart">
//                       <button
//                         className="d-flex items-center text-white"
//                         data-el-toggle=".js-cart-toggle"
//                       >
//                         <i className="text-20 icon icon-basket"></i>
//                         <div className="cartProductCount">0 </div>
//                       </button>
//                     </Link>
//                   </div>
//                   <div className="d-none xl:d-block ml-20">
//                     <button
//                       className="text-white items-center"
//                       onClick={toggleMenu}
//                     >
//                       <i className="text-11 icon icon-mobile-menu"></i>
//                     </button>
//                   </div>
//                 </div>
//                 <div className="header-right__buttons d-flex items-center ml-30 md:d-none">
//                   {/* <Link className="button -underline text-white" to="/login">
//                     Log in
//                   </Link>
//                   <Link
//                     className="button -sm -white text-dark-1 ml-30"
//                     to="/Register"
//                   >
//                     Sign up
//                   </Link> */}
                 
                 
// {token ? (
//                     <Link
//                       className="text-white "
//                       onClick={handleLogout}
//                       to="/"
//                     >
//                       Logout
//                     </Link>
//                   ) : (

//                     <button
//                       onClick={() => setIsLoginOpen(true)}
//                       style={{ color: "white" }}
//                     >
//                       Log in
//                     </button>
//                   )}
//                   <Register
//                     isOpen={isRegisterOpen}
//                     onClose={() => setIsRegisterOpen(false)}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };
// export default Navbar;

import React, { useState, useRef } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import LoginModal from "../Login/Login";
import Register from "../Register/Register";
import { useCart } from "../../context/CartContext";
const Navbar = () => {
  const { cartItems } = useCart();
  const cartlength = cartItems.length;
  const [isVisible, setIsVisible] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [exploreVisible, setExploreVisible] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const token = localStorage.getItem("token");


  const toggleMenu = () => {
    setIsVisible((prev) => !prev);
  };

  const handleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleExploreToggle = () => {
    setExploreVisible((prev) => !prev);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <>
      <header className="header -type-1 ">
        <div className="header__container">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="header-left">
                <div className="header__logo ">
                  <Link to="/">
                    <img
                      alt="logo"
                      loading="lazy"
                      width="140"
                      height="50"
                      decoding="async"
                      data-nimg="1"
                      src="/assets/img/general/logo2.png"
                    />
                  </Link>
                </div>
                <div className="header__explore text-green-1 ml-60 xl:ml-30 xl:d-none">
                  <Link
                    className="d-flex items-center"
                    data-el-toggle=".js-explore-toggle"
                    data-el-toggle-active-class="-is-el-visible"
                    onClick={handleExploreToggle}
                  >
                    <RiMenu4Fill />
                    Explore
                  </Link>

                  <div
                    className={`explore-content py-25 rounded-8 bg-white toggle-element js-explore-toggle ${
                      exploreVisible ? "-is-el-visible" : ""
                    }`}
                  >
                    <div className="explore__item">
                      <Link
                        className="d-flex items-center justify-between text-dark-1"
                        to="#"
                      >
                        Architecture
                        <div className="icon-chevron-right text-11"></div>
                      </Link>
                      <div className="explore__subnav rounded-8">
                        <Link className="text-dark-1" to="/courses/6">
                          Web Design
                        </Link>
                        <Link className="text-dark-1" to="/courses/6">
                          Graphic Design
                        </Link>
                        <Link className="text-dark-1" to="/courses/6">
                          Design Tools
                        </Link>
                        <Link className="text-dark-1" to="/courses/6">
                          User Experience Design
                        </Link>
                        <Link className="text-dark-1" to="/courses/6">
                          Game Design
                        </Link>
                        <Link className="text-dark-1" to="/courses/6">
                          3D &amp; Animation
                        </Link>
                        <Link className="text-dark-1" to="/courses/6">
                          Fashion Design
                        </Link>
                        <Link className="text-dark-1" to="/courses/6">
                          Interior Design
                        </Link>
                      </div>
                    </div>
                    <div className="explore__item">
                      <Link
                        className="d-flex items-center justify-between text-dark-1"
                        to="#"
                      >
                        Business
                        <div className="icon-chevron-right text-11"></div>
                      </Link>
                      <div className="explore__subnav rounded-8">
                        <Link className="text-dark-1" to="/courses/6}">
                          Web Design
                        </Link>
                        <Link className="text-dark-1" to="/courses/6}">
                          Graphic Design
                        </Link>
                        <Link className="text-dark-1" to="/courses/6}">
                          Design Tools
                        </Link>
                        <Link className="text-dark-1" to="/courses/6}">
                          User Experience Design
                        </Link>
                        <Link className="text-dark-1" to="/courses/6}">
                          Game Design
                        </Link>
                        <Link className="text-dark-1" to="/courses/6}">
                          3D &amp; Animation
                        </Link>
                        <Link className="text-dark-1" to="/courses/6}">
                          Fashion Design
                        </Link>
                        <Link className="text-dark-1" to="/courses/6}">
                          Interior Design
                        </Link>
                      </div>
                    </div>
                    <div className="explore__item">
                      <Link className="text-dark-1" to="#">
                        Computer Programming
                      </Link>
                    </div>
                    <div className="explore__item">
                      <Link className="text-dark-1" to="#">
                        Data Analysis
                      </Link>
                    </div>
                    <div className="explore__item">
                      <Link
                        className="d-flex items-center justify-between text-dark-1"
                        to="#"
                      >
                        Design<div className="icon-chevron-right text-11"></div>
                      </Link>
                      <div className="explore__subnav rounded-8">
                        <Link className="text-dark-1" to="/courses/6">
                          Web Design
                        </Link>
                        <Link className="text-dark-1" to="/courses-single-2/3">
                          Graphic Design
                        </Link>
                        <Link className="text-dark-1" to="/courses-single-3/3">
                          Design Tools
                        </Link>
                        <Link className="text-dark-1" to="/courses-single-4/3">
                          User Experience Design
                        </Link>
                        <Link className="text-dark-1" to="/courses-single-5/3">
                          Game Design
                        </Link>
                        <Link className="text-dark-1" to="/courses-single-6/3">
                          3D &amp; Animation
                        </Link>
                        <Link className="text-dark-1" to="/courses/6">
                          Fashion Design
                        </Link>
                        <Link className="text-dark-1" to="/courses-single-2/3">
                          Interior Design
                        </Link>
                      </div>
                    </div>
                    <div className="explore__item">
                      <Link className="text-dark-1" to="/courses-single-6/3">
                        Education
                      </Link>
                    </div>
                    <div className="explore__item">
                      <Link
                        className="d-flex items-center justify-between text-dark-1"
                        to="#"
                      >
                        Electronics
                        <div className="icon-chevron-right text-11"></div>
                      </Link>
                      <div className="explore__subnav rounded-8">
                        <Link className="text-dark-1" to="/courses/6">
                          Web Design
                        </Link>
                        <Link className="text-dark-1" to="/courses-single-2/3">
                          Graphic Design
                        </Link>
                        <Link className="text-dark-1" to="/courses-single-3/3">
                          Design Tools
                        </Link>
                        <Link className="text-dark-1" to="/courses-single-4/3">
                          User Experience Design
                        </Link>
                        <Link className="text-dark-1" to="/courses-single-5/3">
                          Game Design
                        </Link>
                        <Link className="text-dark-1" to="/courses-single-6/3">
                          3D &amp; Animation
                        </Link>
                        <Link className="text-dark-1" to="/courses/6">
                          Fashion Design
                        </Link>
                        <Link className="text-dark-1" to="/courses-single-2/3">
                          Interior Design
                        </Link>
                      </div>
                    </div>
                    <div className="explore__item">
                      <Link
                        className="d-flex items-center justify-between text-dark-1"
                        to="#"
                      >
                        Language
                        <div className="icon-chevron-right text-11"></div>
                      </Link>
                      <div className="explore__subnav rounded-8">
                        <Link className="text-dark-1" to="/courses/6">
                          Web Design
                        </Link>
                        <Link className="text-dark-1" to="/courses-single-2/3">
                          Graphic Design
                        </Link>
                        <Link className="text-dark-1" to="/courses-single-3/3">
                          Design Tools
                        </Link>
                        <Link className="text-dark-1" to="/courses-single-4/3">
                          User Experience Design
                        </Link>
                        <Link className="text-dark-1" to="/courses-single-5/3">
                          Game Design
                        </Link>
                        <Link className="text-dark-1" to="/courses-single-6/3">
                          3D &amp; Animation
                        </Link>
                        <Link className="text-dark-1" to="/courses/6">
                          Fashion Design
                        </Link>
                        <Link className="text-dark-1" to="/courses-single-2/3">
                          Interior Design
                        </Link>
                      </div>
                    </div>
                    <div className="explore__item">
                      <Link
                        className="d-flex items-center justify-between text-dark-1"
                        to="#"
                      >
                        Marketing
                        <div className="icon-chevron-right text-11"></div>
                      </Link>
                      <div className="explore__subnav rounded-8">
                        <Link className="text-dark-1" to="/courses/6">
                          Web Design
                        </Link>
                        <Link className="text-dark-1" to="/courses-single-2/3">
                          Graphic Design
                        </Link>
                        <Link className="text-dark-1" to="/courses-single-3/3">
                          Design Tools
                        </Link>
                        <Link className="text-dark-1" to="/courses-single-4/3">
                          User Experience Design
                        </Link>
                        <Link className="text-dark-1" to="/courses-single-5/3">
                          Game Design
                        </Link>
                        <Link className="text-dark-1" to="/courses-single-6/3">
                          3D &amp; Animation
                        </Link>
                        <Link className="text-dark-1" to="/courses/6">
                          Fashion Design
                        </Link>
                        <Link className="text-dark-1" to="/courses-single-2/3">
                          Interior Design
                        </Link>
                      </div>
                    </div>
                    <div className="explore__item">
                      <Link className="text-dark-1" to="#">
                        Music Arts
                      </Link>
                    </div>
                    <div className="explore__item">
                      <Link className="text-dark-1" to="#">
                        Social Science
                      </Link>
                    </div>
                    <div className="explore__item">
                      <Link
                        className="d-flex items-center justify-between text-dark-1"
                        to="#"
                      >
                        Photography &amp; Video
                        <div className="icon-chevron-right text-11"></div>
                      </Link>
                      <div className="explore__subnav rounded-8">
                        <Link className="text-dark-1" to="/courses/6">
                          Web Design
                        </Link>
                        <Link className="text-dark-1" to="/courses-single-2/3">
                          Graphic Design
                        </Link>
                        <Link className="text-dark-1" to="/courses-single-3/3">
                          Design Tools
                        </Link>
                        <Link className="text-dark-1" to="/courses-single-4/3">
                          User Experience Design
                        </Link>
                        <Link className="text-dark-1" to="/courses-single-5/3">
                          Game Design
                        </Link>
                        <Link className="text-dark-1" to="/courses-single-6/3">
                          3D &amp; Animation
                        </Link>
                        <Link className="text-dark-1" to="/courses/6">
                          Fashion Design
                        </Link>
                        <Link className="text-dark-1" to="/courses-single-2/3">
                          Interior Design
                        </Link>
                      </div>
                    </div>
                    <div className="explore__item">
                      <Link className="text-dark-1" to="/courses/6">
                        IT &amp; Software
                      </Link>
                    </div>
                    <div className="explore__item">
                      <Link
                        className="text-purple-1 underline"
                        to="/courses-single-2/3"
                      >
                        View All Courses
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-menu js-mobile-menu-toggle">
              <div className="header-menu__content">
                <div className="mobile-bg js-mobile-bg"></div>
                <div className="d-none xl:d-flex items-center px-20 py-20 border-bottom-light">
                  <Link className="text-dark-1" to="/login">
                    Log in
                  </Link>
                  <Link className="text-dark-1 ml-30" to="/signup">
                    Sign Up
                  </Link>
                </div>
                <div className="menu js-navList">
                  <ul className="menu__nav text-white -is-active">
                    <li>
                      <Link
                        data-barba="true"
                        className="inActiveMenuTwo"
                        to="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        data-barba="true"
                        className="inActiveMenuTwo"
                        to="/Aboutus"
                      >
                        About Us
                      </Link>
                    </li>
                    <li class="menu-item-has-children -has-mega-menu">
                      <Link data-barba="true" class="" to="#">
                        Courses <i class="icon-chevron-right text-13 ml-10"></i>
                      </Link>
                      <div class="mega xl:d-none">
                        <div class="mega__menu">
                          <div class="row x-gap-40">
                            <div class="col">
                              <h4 class="text-17 fw-500 mb-20">Course List</h4>
                              <ul class="mega__list">
                                <li class="inActiveMegaMenu">
                                  <Link data-barba="true" to="/AllCourse">
                                    Learn Figma - UI/UX Design Essential
                                    Training
                                  </Link>
                                </li>
                                <li class="inActiveMegaMenu">
                                  <Link data-barba="true" to="/AllCourse">
                                    Complete Python Bootcamp From Zero to Hero
                                    in Python
                                  </Link>
                                </li>
                                <li class="inActiveMegaMenu">
                                  <Link data-barba="true" to="/AllCourse">
                                    Angular - The Complete Guide (2022 Edition)
                                  </Link>
                                </li>
                                <li class="inActiveMegaMenu">
                                  <Link data-barba="true" to="/AllCourse">
                                    Complete Blender Creator: Learn 3D Modelling
                                    for Beginners
                                  </Link>
                                </li>
                                <li class="inActiveMegaMenu">
                                  <Link data-barba="true" to="/AllCourse">
                                    The Ultimate Drawing Course Beginner to
                                    Advanced
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div class="col">
                              <h4 class="text-17 fw-500 mb-20">
                                Programming Languages
                              </h4>
                              <ul class="mega__list">
                                <li class="inActiveMegaMenu">
                                  <Link data-barba="true" to="/AllCourse">
                                    JavaScript
                                  </Link>
                                </li>
                                <li class="inActiveMegaMenu">
                                  <Link data-barba="true" to="/AllCourse">
                                    Python
                                  </Link>
                                </li>
                                <li class="inActiveMegaMenu">
                                  <Link data-barba="true" to="/AllCourse">
                                    Java
                                  </Link>
                                </li>
                                <li class="inActiveMegaMenu">
                                  <Link data-barba="true" to="/AllCourse">
                                    C++
                                  </Link>
                                </li>
                                <li class="inActiveMegaMenu">
                                  <Link data-barba="true" to="/AllCourse">
                                    PHP
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div class="col">
                              <h4 class="text-17 fw-500 mb-20">
                                Others Courses
                              </h4>
                              <ul class="mega__list">
                                <li class="inActiveMegaMenu">
                                  <Link data-barba="true" to="/lesson-single-1">
                                    Data Science
                                  </Link>
                                </li>
                                <li class="inActiveMegaMenu">
                                  <Link data-barba="true" to="/lesson-single-2">
                                    Machine Learning
                                  </Link>
                                </li>
                                <li class="inActiveMegaMenu">
                                  <Link
                                    data-barba="true"
                                    to="/instructors-list-1"
                                  >
                                    Cloud Computing
                                  </Link>
                                </li>
                                <li class="inActiveMegaMenu">
                                  <Link
                                    data-barba="true"
                                    to="/instructors-list-2"
                                  >
                                    Cybersecurity
                                  </Link>
                                </li>
                                <li class="inActiveMegaMenu">
                                  <Link
                                    data-barba="true"
                                    to="/instructor-become"
                                  >
                                    Communication Skills
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div class="col">
                              <h4 class="text-17 fw-500 mb-20">
                                Popular Courses
                              </h4>
                              <ul class="mega__list">
                                <li class="inActiveMegaMenu">
                                  <Link data-barba="true" to="#">
                                    Web Developer
                                  </Link>
                                </li>
                                <li class="inActiveMegaMenu">
                                  <Link data-barba="true" to="#">
                                    Mobile Developer
                                  </Link>
                                </li>
                                <li class="inActiveMegaMenu">
                                  <Link data-barba="true" to="#">
                                    Digital Marketing
                                  </Link>
                                </li>
                                <li class="inActiveMegaMenu">
                                  <Link data-barba="true" to="#">
                                    Development
                                  </Link>
                                </li>
                                <li class="inActiveMegaMenu">
                                  <Link data-barba="true" to="#">
                                    Finance &amp; Accounting
                                  </Link>
                                </li>
                                <li class="inActiveMegaMenu">
                                  <Link data-barba="true" to="#">
                                    Design
                                  </Link>
                                </li>
                                <li class="inActiveMegaMenu">
                                  <Link data-barba="true" to="#">
                                    View All Courses
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div class="mega-banner bg-purple-1 ml-40">
                            <div class="text-24 lh-15 text-white fw-700">
                              Join more than
                              <br />
                              <span class="text-green-1">
                                8 million learners
                              </span>
                              worldwide
                            </div>
                            <Link
                              class="button -md -green-1 text-dark-1 fw-500 col-12"
                              to="#"
                            >
                              Start Learning For Free
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="menu-item-has-children">
                      <Link data-barba="true" class="" to="#">
                        Events <i class="icon-chevron-right text-13 ml-10"></i>
                      </Link>
                      <ul class="subnav">
                        <li class="menu__backButton js-nav-list-back">
                          <Link to="#">
                            <i class="icon-chevron-left text-13 mr-10"></i>{" "}
                            Events
                          </Link>
                        </li>
                        <li class="inActiveMenu">
                          <Link data-barba="true" to="/">
                            UpComing Events
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link
                        data-barba="true"
                        className="inActiveMenuTwo"
                        to="/blog"
                      >
                        Blog
                      </Link>
                    </li>

                    <li>
                      <Link
                        data-barba="true"
                        className="inActiveMenuTwo"
                        to="/ContactUs"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="mobile-footer px-20 py-20 border-top-light js-mobile-footer">
                  <div className="mobile-footer__number">
                    <div className="text-17 fw-500 text-dark-1">Call us</div>
                    <div className="text-17 fw-500 text-purple-1">
                      800 388 80 90
                    </div>
                  </div>
                  <div className="lh-2 mt-10">
                    <div>
                      329 Queensberry Street,
                      <br /> North Melbourne VIC 3051, Australia.
                    </div>
                    <div>hi@educrat.com</div>
                  </div>
                  <div className="mobile-socials mt-10">
                    <Link
                      className="d-flex items-center justify-center rounded-full size-40"
                      to="#"
                    >
                      <i className="fa fa-facebook"></i>
                    </Link>
                    <Link
                      className="d-flex items-center justify-center rounded-full size-40"
                      to="#"
                    >
                      <i className="fa fa-twitter"></i>
                    </Link>
                    <Link
                      className="d-flex items-center justify-center rounded-full size-40"
                      to="#"
                    >
                      <i className="fa fa-instagram"></i>
                    </Link>
                    <Link
                      className="d-flex items-center justify-center rounded-full size-40"
                      to="#"
                    >
                      <i className="fa fa-linkedin"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="header-menu-close">
                <div className="size-40 d-flex items-center justify-center rounded-full bg-white">
                  <div className="icon-close text-dark-1 text-16"></div>
                </div>
              </div>
              <div className="header-menu-bg"></div>
            </div>
            <div
              className={`header-menu js-mobile-menu-toggle isVisible ?  ${
                isVisible ? "-is-el-visible" : ""
              }`}
            >
              <div className="header-menu__content">
                <div className="mobile-bg js-mobile-bg"></div>
                <div className="d-none xl:d-flex items-center px-20 py-20 border-bottom-light">
                  {/* <Link className="text-dark-1 inActiveMenu " to="/login">
                    Log in
                  </Link>
                  <Link
                    className="text-dark-1 ml-30 inActiveMenu "
                    to="/signup"
                  >
                    Sign Up
                  </Link> */}

                  <button
                    onClick={() => setIsLoginOpen(true)}
                    className="text-dark-1 inActiveMenu "
                  >
                    Log in
                  </button>
                  <LoginModal
                    isOpen={isLoginOpen}
                    onClose={() => setIsLoginOpen(false)}
                  />

                  <Register
                    isOpen={isRegisterOpen}
                    onClose={() => setIsRegisterOpen(false)}
                  />
                </div>

                <div class="mobileMenu text-dark-1">
                  <div class="submenuOne">
                    <div class="title">
                      <span class="inactiveMenu">
                        <Link to="/">Home</Link>
                      </span>
                    </div>
                  </div>
                  <div class="submenuOne">
                    <div class="title">
                      <span class="inActiveMenu">
                        <Link to="/">AboutUs</Link>
                      </span>
                    </div>
                  </div>

                  <div className="submenuOne">
                    <div
                      className="title cursor-pointer flex items-center justify-between"
                      onClick={() => handleDropdown("courses")}
                    >
                      <span className="inActiveMenu font-medium text-gray-700">
                        Courses
                      </span>
                      <i className="icon-chevron-right text-sm ml-2" />
                    </div>

                    {activeDropdown === "courses" && (
                      <div className="mt-2 space-y-2">
                        <div className="toggle active">
                          <Link
                            className="link inActiveMenu block text-gray-600"
                            to="/AllCourse"
                          >
                            UI/UX
                          </Link>
                        </div>
                        <div className="toggle active">
                          <Link
                            className="link inActiveMenu block text-gray-600"
                            to="/AllCourse"
                          >
                            Python Programming
                          </Link>
                        </div>
                        <div className="toggle active">
                          <Link
                            className="link inActiveMenu block text-gray-600"
                            to="/AllCourse"
                          >
                            Java Programming
                          </Link>
                        </div>
                        <div className="toggle active">
                          <Link
                            className="link inActiveMenu block text-gray-600"
                            to="/AllCourse"
                          >
                            Data Science
                          </Link>
                        </div>
                        <div className="toggle active">
                          <Link
                            className="link inActiveMenu block text-gray-600"
                            to="/AllCourse"
                          >
                            Web Developer
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="submenuOne">
                    <div
                      className="title cursor-pointer flex items-center justify-between"
                      onClick={() => handleDropdown("blogs")}
                    >
                      <span className="inActiveMenu font-medium text-gray-700">
                        Blogs
                      </span>
                      <i className="icon-chevron-right text-sm ml-2" />
                    </div>

                    {activeDropdown === "blogs" && (
                      <div className="mt-2">
                        <div className="toggle active">
                          <Link
                            className="link inActiveMenu block text-gray-600"
                            to="/blog"
                          >
                            Blog List 1
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="submenuOne">
                    <div
                      className="title cursor-pointer flex items-center justify-between"
                      onClick={() => handleDropdown("Events")}
                    >
                      <span className="inActiveMenu font-medium text-gray-700">
                        Events
                      </span>
                      <i className="icon-chevron-right text-sm ml-2" />
                    </div>

                    {activeDropdown === "Events" && (
                      <div className="mt-2">
                        <div className="toggle active">
                          <Link
                            className="link inActiveMenu block text-gray-600"
                            to="/"
                          >
                            UpComing Events
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>

                  <div class="submenuOne">
                    <div class="title">
                      <span class="inActiveMenu">
                        <Link to="/ContactUs">ContactUs</Link>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mobile-footer px-20 py-20 border-top-light js-mobile-footer">
                  <div className="mobile-footer__number">
                    <div className="text-17 fw-500 text-dark-1">Call us</div>
                    <div className="text-17 fw-500 text-purple-1">
                      800 388 80 90
                    </div>
                  </div>
                  <div className="lh-2 mt-10">
                    <div>
                      329 Queensberry Street,
                      <br /> North Melbourne VIC 3051, Australia.
                    </div>
                    <div>hi@educrat.com</div>
                  </div>
                </div>
              </div>

              <div className="header-menu-close" onClick={handleClose}>
                <div className="size-40 d-flex items-center justify-center rounded-full bg-white">
                  <div className="icon-close text-dark-1 text-16"></div>
                </div>
              </div>
              <div className="header-menu-bg"></div>
            </div>

            <div className="col-auto">
              <div className="header-right d-flex items-center">
                <div className="header-right__icons text-white d-flex items-center">
                  <div className="">
                    <button
                      className="d-flex items-center text-white "
                      data-el-toggle=".js-search-toggle"
                    >
                      <i className="text-20 icon icon-search"></i>
                    </button>
                    <div className="toggle-element js-search-toggle ">
                      <div className="header-search pt-90 bg-white shadow-4 ">
                        <div className="container">
                          <div className="header-search__field">
                            <div className="icon icon-search text-dark-1"></div>
                            <input
                              required=""
                              type="text"
                              className="col-12 text-18 lh-12 text-dark-1 fw-500"
                              placeholder="What do you want to learn?"
                            />
                            <button
                              className="d-flex items-center justify-center size-40 rounded-full bg-purple-3"
                              data-el-toggle=".js-search-toggle"
                            >
                              <img
                                alt="icon"
                                loading="lazy"
                                width="12"
                                height="12"
                                decoding="async"
                                data-nimg="1"
                                src="/assets/img/menus/close.svg"
                              />
                            </button>
                          </div>
                          <div className="header-search__content mt-30">
                            <div className="text-17 text-dark-1 fw-500">
                              Popular Right Now
                            </div>
                            <div className="d-flex y-gap-5 flex-column mt-20">
                              <Link className="text-dark-1" to="/courses/5">
                                The Ultimate Drawing Course - Beginner to
                                Advanced
                              </Link>
                              <Link
                                className="text-dark-1"
                                to="/courses-single-2/3"
                              >
                                Character Art School: Complete Character Drawing
                                Course
                              </Link>
                              <Link
                                className="text-dark-1"
                                to="/courses-single-3/3"
                              >
                                Complete Blender Creator: Learn 3D Modelling for
                                Beginners
                              </Link>
                              <Link
                                className="text-dark-1"
                                to="/courses-single-4/3"
                              >
                                User Experience Design Essentials - Adobe XD UI
                                UX Design
                              </Link>
                              <Link
                                className="text-dark-1"
                                to="/courses-single-5/3"
                              >
                                Graphic Design Masterclass - Learn GREAT Design
                              </Link>
                              <Link
                                className="text-dark-1"
                                to="/courses-single-6/3"
                              >
                                Adobe Photoshop CC – Essentials Training Course
                              </Link>
                            </div>
                            <div className="mt-30">
                              <button className="uppercase underline">
                                PRESS ENTER TO SEE ALL SEARCH RESULTS
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="header-search__bg"
                        data-el-toggle=".js-search-toggle"
                      ></div>
                    </div>
                  </div>
                  <div className="relative ml-30 xl:ml-20">
                    <Link to="/CourseCart">
                      <button
                        className="d-flex items-center text-white"
                        data-el-toggle=".js-cart-toggle"
                      >
                        <i className="text-20 icon icon-basket"></i>
                        {cartlength > 0 && (
                          <div className="cartProductCount">{cartlength} </div>)}
                      </button>
                    </Link>
                  </div>
                  <div className="d-none xl:d-block ml-20">
                    <button
                      className="text-white items-center"
                      onClick={toggleMenu}
                    >
                      <i className="text-11 icon icon-mobile-menu"></i>
                    </button>
                  </div>
                </div>
                <div className="header-right__buttons d-flex items-center ml-30 md:d-none">
                  {/* <Link className="button -underline text-white" to="/login">
                    Log in
                  </Link>
                  <Link
                    className="button -sm -white text-dark-1 ml-30"
                    to="/Register"
                  >
                    Sign up
                  </Link> */}
                  {token ? (
                    <Link
                      className="text-white "
                      onClick={handleLogout}
                      to="/"
                    >
                      Logout
                    </Link>
                  ) : (

                    <button
                      onClick={() => setIsLoginOpen(true)}
                      style={{ color: "white" }}
                    >
                      Log in
                    </button>
                  )}
                  <LoginModal
                    isOpen={isLoginOpen}
                    onClose={() => setIsLoginOpen(false)}
                  />

                  <Register
                    isOpen={isRegisterOpen}
                    onClose={() => setIsRegisterOpen(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Navbar;

