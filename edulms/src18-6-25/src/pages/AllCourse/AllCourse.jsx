// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import RecommendationSideBar from "./RecommendationSideBar";
// import MobileRecommendationSideBar from "./MobileRecommendationSideBar";
// import axios from "axios";

// const AllCourse = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [courseData, setcourseData] = useState([])
//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };
//   useEffect(() => {
//     fetchCourses();
//   }, [])

//   const fetchCourses = async () => {
//     const res = await axios.get('/api/courses');
//     setcourseData(res.data);
//   };

//   const handleToggle = () => {
//     setIsDropdownOpen((prev) => !prev);
//   };
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentCourses = courseData.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(courseData.length / itemsPerPage);

//   const goToPage = (pageNumber) => {
//     if (pageNumber >= 1 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     }
//   };
//   return (
//     <div>
//       <section class="breadcrumbs  ">
//         <div class="container">
//           <div class="row">
//             <div class="col-auto">
//               <div class="breadcrumbs__content">
//                 <div class="breadcrumbs__item  ">
//                   <a href="/">Home</a>
//                 </div>
//                 <div class="breadcrumbs__item  ">
//                   <a href="/courses-list-3">All courses</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section class="page-header -type-1">
//         <div class="container">
//           <div class="page-header__content">
//             <div class="row">
//               <div class="col-auto">
//                 <div>
//                   <h1 class="page-header__title">What to Learn Next</h1>
//                 </div>
//                 <div>
//                   <p class="page-header__text">Recommended For you</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section class="layout-pb-lg">
//         <div class="container">
//           <div class="row y-gap-50">
//             <RecommendationSideBar />

//             <div class="col-xl-9 col-lg-8">
//               <div class="accordion js-accordion">
//                 <div class="accordion__item  ">
//                   <div class="row y-gap-20 items-center justify-between pb-30">
//                     <div class="col-auto">
//                       <div class="text-14 lh-12">
//                         Showing
//                         <span class="text-dark-1 fw-500">0</span>
//                         total results
//                       </div>
//                     </div>
//                     <div class="col-auto">
//                       <div class="row x-gap-20 y-gap-20">
//                         <div class="col-auto">
//                           <div class="d-flex items-center">
//                             <div class="text-14 lh-12 fw-500 text-dark-1 mr-20">
//                               Sort by:
//                             </div>
//                             <div
//                               id="dd41button"
//                               className={`dropdown js-dropdown js-category-active ${isDropdownOpen ? "-is-dd-active" : ""}`}
//                             >
//                               <div
//                                 class="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
//                                 onClick={handleToggle}
//                               >
//                                 <span class="js-dropdown-title">Default</span>
//                                 <i class="icon text-9 ml-40 icon-chevron-down"></i>
//                               </div>
//                               <div
//                                 id="dd41content"
//                                 className={`toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle ${isDropdownOpen ? "-is-el-visible" : ""}`}
//                               >
//                                 <div class="text-14 y-gap-15 js-dropdown-list">
//                                   <div>
//                                     <span class="d-block js-dropdown-link cursor activeMenu ">
//                                       Default
//                                     </span>
//                                   </div>
//                                   <div>
//                                     <span class="d-block js-dropdown-link cursor  ">
//                                       Rating (asc)
//                                     </span>
//                                   </div>
//                                   <div>
//                                     <span class="d-block js-dropdown-link cursor  ">
//                                       Rating (dsc)
//                                     </span>
//                                   </div>
//                                   <div>
//                                     <span class="d-block js-dropdown-link cursor  ">
//                                       Price (asc)
//                                     </span>
//                                   </div>
//                                   <div>
//                                     <span class="d-block js-dropdown-link cursor  ">
//                                       Price (dsc)
//                                     </span>
//                                   </div>
//                                   <div>
//                                     <span class="d-block js-dropdown-link cursor  ">
//                                       Duration (asc)
//                                     </span>
//                                   </div>
//                                   <div>
//                                     <span class="d-block js-dropdown-link cursor  ">
//                                       Duration (dsc)
//                                     </span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div class="col-auto d-none lg:d-block">
//                           <div class="accordion__button w-unset">
//                             <button class="button h-50 px-30 -light-7 text-purple-1" onClick={toggleAccordion}>
//                               <i class="icon-filter mr-10"></i>Filter
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <MobileRecommendationSideBar isOpen={isOpen} />

//                 </div>
//               </div>

//               <div class="row y-gap-30 side-content__wrap">

//                 {currentCourses?.map((course) => (
//                   <div class="side-content col-xl-4 col-lg-6 col-md-4 col-sm-6">
//                     <div class="coursesCard -type-1 ">
//                       <div class="relative">
//                         <div class="coursesCard__image overflow-hidden rounded-8">
//                           <img
//                             alt="image"
//                             loading="lazy"
//                             width="530"
//                             height="370"
//                             decoding="async"
//                             data-nimg="1"
//                             class="w-1/1"
//                             src={`/${course.courseImages[0]}`}
//                             style={{ color: "transparent" }}
//                           />
//                           <div class="coursesCard__image_overlay rounded-8"></div>
//                         </div>

//                         <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
//                       </div>
//                       <div class="h-100 pt-15">
//                         <div class="d-flex items-center">
//                           <div class="text-14 lh-1 text-yellow-1 mr-10">4.3</div>
//                           <div class="d-flex x-gap-5 items-center">
//                             <div class="icon-star text-9 text-yellow-1 "></div>
//                             <div class="icon-star text-9 text-yellow-1 "></div>
//                             <div class="icon-star text-9 text-yellow-1 "></div>
//                             <div class="icon-star text-9 text-yellow-1 "></div>
//                           </div>
//                           <div class="text-13 lh-1 ml-10">(1991)</div>
//                         </div>
//                         <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
//                           <Link class="linkCustom" to='/CourseDetails' state={{ courseId: course._id }}>
//                             {course.courseName}
//                           </Link>
//                         </div>
//                         <div class="d-flex x-gap-10 items-center pt-10">
//                           <div class="d-flex items-center">
//                             <div class="mr-8">
//                               <img
//                                 alt="icon"
//                                 loading="lazy"
//                                 width="16"
//                                 height="17"
//                                 decoding="async"
//                                 data-nimg="1"
//                                 src="https://educrat-nextjs.vercel.app/assets/img/coursesCards/icons/1.svg"
//                                 style={{ color: "transparent" }}
//                               />
//                             </div>
//                             <div class="text-14 lh-1">6 lesson</div>
//                           </div>
//                           <div class="d-flex items-center">
//                             <div class="mr-8">
//                               <img
//                                 alt="icon"
//                                 loading="lazy"
//                                 width="16"
//                                 height="17"
//                                 decoding="async"
//                                 data-nimg="1"
//                                 src="https://educrat-nextjs.vercel.app/assets/img/coursesCards/icons/2.svg"
//                                 style={{ color: "transparent" }}
//                               />
//                             </div>
//                             <div class="text-14 lh-1">22h 0m</div>
//                           </div>
//                           <div class="d-flex items-center">
//                             <div class="mr-8">
//                               <img
//                                 alt="icon"
//                                 loading="lazy"
//                                 width="16"
//                                 height="17"
//                                 decoding="async"
//                                 data-nimg="1"
//                                 src="https://educrat-nextjs.vercel.app/assets/img/coursesCards/icons/3.svg"
//                                 style={{ color: "transparent" }}
//                               />
//                             </div>
//                             <div class="text-14 lh-1">Beginner</div>
//                           </div>
//                         </div>
//                         <div class="coursesCard-footer">
//                           <div class="coursesCard-footer__author">
//                             <img
//                               alt="image"
//                               loading="lazy"
//                               width="30"
//                               height="30"
//                               decoding="async"
//                               data-nimg="1"
//                               src="https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fgeneral%2Favatar-1.png&w=64&q=75"
//                               style={{ color: "transparent" }}
//                             />
//                             <div>Jane Cooper</div>
//                           </div>
//                           <div class="coursesCard-footer__price">
//                             <div>₹199</div>
//                             <div>{course.price}</div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div class="side-content__item">
//                       <div class="px-30 pt-20 pb-30 bg-white rounded-8 border-light shadow-2">
//                         <div class="text-18 lh-16 text-dark-1">
//                           {course.courseName}
//                         </div>
//                         <div class="row x-gap-10 y-gap-10 items-center pt-15">
//                           <div class="col-auto">
//                             <div class="d-flex items-center">
//                               <img
//                                 alt="icon"
//                                 loading="lazy"
//                                 width="16"
//                                 height="17"
//                                 decoding="async"
//                                 data-nimg="1"
//                                 class="mr-8"
//                                 src="https://educrat-nextjs.vercel.app/assets/img/coursesCards/icons/1.svg"
//                                 style={{ color: "transparent" }}
//                               />
//                               <div class="text-14 lh-1">6 lesson</div>
//                             </div>
//                           </div>
//                           <div class="col-auto">
//                             <div class="d-flex items-center">
//                               <img
//                                 alt="icon"
//                                 loading="lazy"
//                                 width="16"
//                                 height="17"
//                                 decoding="async"
//                                 data-nimg="1"
//                                 class="mr-8"
//                                 src="https://educrat-nextjs.vercel.app/assets/img/coursesCards/icons/2.svg"
//                                 style={{ color: "transparent" }}
//                               />
//                               <div class="text-14 lh-1">22h 0m</div>
//                             </div>
//                           </div>
//                           <div class="col-auto">
//                             <div class="d-flex items-center">
//                               <img
//                                 alt="icon"
//                                 loading="lazy"
//                                 width="16"
//                                 height="17"
//                                 decoding="async"
//                                 data-nimg="1"
//                                 class="mr-8"
//                                 src="https://educrat-nextjs.vercel.app/assets/img/coursesCards/icons/3.svg"
//                                 style={{ color: "transparent" }}
//                               />
//                               <div class="text-14 lh-1">Beginner</div>
//                             </div>
//                           </div>
//                         </div>
//                         <div class="d-inline-block px-15 py-5 bg-green-1 text-dark-1 rounded-200 text-11 fw-500 uppercase mt-20">
//                           BEST SELLER
//                         </div>
//                         <p class="text-dark-1 mt-15">
//                           {course.description}
//                         </p>
//                         <div class="row x-gap-20 y-gap-15 items-center pt-30">
//                           <div class="col">
//                             <button
//                               class="button -md h-60 -purple-1 text-white col-12 py-54"
//                               style={{ padding: "0px 54px" }}
//                             >
//                               Add To Cart
//                             </button>
//                           </div>
//                           <div class="col-auto">
//                             <div class="d-flex items-center justify-center size-60 rounded-full border-light">
//                               <div class="icon-bookmark text-20 text-purple-1"></div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}

//               </div>

//               <div class="row justify-center pt-90 lg:pt-50">
//                 <div class="col-auto">
//                   <div class="pagination -buttons">
//                     <button class="pagination__button -prev " onClick={() => goToPage(currentPage - 1)}>
//                       <i class="icon icon-chevron-left"></i>
//                     </button>

//                     {Array.from({ length: totalPages }, (_, index) => (

//                       <div class="pagination__count">
//                         <button class={`${currentPage === index + 1} "-count-is-active":""`} onClick={() => goToPage(index + 1)}>
//                           {index + 1}
//                         </button>
//                       </div>
//                     ))}
//                     <button class="pagination__button -next" onClick={() => goToPage(currentPage + 1)}>
//                       <i class="icon icon-chevron-right"></i>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AllCourse;
////kavana code////

/////07 nayana code////
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import RecommendationSideBar from "./RecommendationSideBar";
// import MobileRecommendationSideBar from "./MobileRecommendationSideBar";
// import axios from "axios";

// const AllCourse = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [courseData, setcourseData] = useState([])
//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };
//   useEffect(() => {
//     fetchCourses();
//   }, [])

//   const fetchCourses = async () => {
//     const res = await axios.get('/api/courses');
//     setcourseData(res.data);
//   };

//   const handleToggle = () => {
//     setIsDropdownOpen((prev) => !prev);
//   };
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentCourses = courseData.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(courseData.length / itemsPerPage);

//   const goToPage = (pageNumber) => {
//     if (pageNumber >= 1 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     }
//   };
//   return (
//     <div>
//       <section class="breadcrumbs  ">
//         <div class="container">
//           <div class="row">
//             <div class="col-auto">
//               <div class="breadcrumbs__content">
//                 <div class="breadcrumbs__item  ">
//                   <a href="/">Home</a>
//                 </div>
//                 <div class="breadcrumbs__item  ">
//                   <a href="/courses-list-3">All courses</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section class="page-header -type-1">
//         <div class="container">
//           <div class="page-header__content">
//             <div class="row">
//               <div class="col-auto">
//                 <div>
//                   <h1 class="page-header__title">What to Learn Next</h1>
//                 </div>
//                 <div>
//                   <p class="page-header__text">Recommended For you</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section class="layout-pb-lg">
//         <div class="container">
//           <div class="row y-gap-50">
//             <RecommendationSideBar />

//             <div class="col-xl-9 col-lg-8">
//               <div class="accordion js-accordion">
//                 <div class="accordion__item  ">
//                   <div class="row y-gap-20 items-center justify-between pb-30">
//                     <div class="col-auto">
//                       <div class="text-14 lh-12">
//                         Showing
//                         <span class="text-dark-1 fw-500">0</span>
//                         total results
//                       </div>
//                     </div>
//                     <div class="col-auto">
//                       <div class="row x-gap-20 y-gap-20">
//                         <div class="col-auto">
//                           <div class="d-flex items-center">
//                             <div class="text-14 lh-12 fw-500 text-dark-1 mr-20">
//                               Sort by:
//                             </div>
//                             <div
//                               id="dd41button"
//                               className={`dropdown js-dropdown js-category-active ${isDropdownOpen ? "-is-dd-active" : ""}`}
//                             >
//                               <div
//                                 class="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
//                                 onClick={handleToggle}
//                               >
//                                 <span class="js-dropdown-title">Default</span>
//                                 <i class="icon text-9 ml-40 icon-chevron-down"></i>
//                               </div>
//                               <div
//                                 id="dd41content"
//                                 className={`toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle ${isDropdownOpen ? "-is-el-visible" : ""}`}
//                               >
//                                 <div class="text-14 y-gap-15 js-dropdown-list">
//                                   <div>
//                                     <span class="d-block js-dropdown-link cursor activeMenu ">
//                                       Default
//                                     </span>
//                                   </div>

//                                   <div>
//                                     <span class="d-block js-dropdown-link cursor  ">
//                                       Price (asc)
//                                     </span>
//                                   </div>
//                                   <div>
//                                     <span class="d-block js-dropdown-link cursor  ">
//                                       Price (dsc)
//                                     </span>
//                                   </div>

//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div class="col-auto d-none lg:d-block">
//                           <div class="accordion__button w-unset">
//                             <button class="button h-50 px-30 -light-7 text-purple-1" onClick={toggleAccordion}>
//                               <i class="icon-filter mr-10"></i>Filter
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <MobileRecommendationSideBar isOpen={isOpen} />

//                 </div>
//               </div>

//               <div class="row y-gap-30 side-content__wrap">

//                 {currentCourses?.map((course) => (
//                   <div class="side-content col-xl-4 col-lg-6 col-md-4 col-sm-6">
//                     <div class="coursesCard -type-1 ">
//                       <div class="relative">
//                         <div class="coursesCard__image overflow-hidden rounded-8">
//                           <img
//                             alt="image"
//                             loading="lazy"
//                             width="530"
//                             height="370"
//                             decoding="async"
//                             data-nimg="1"
//                             class="w-1/1"
//                             src={`/${course.courseImages[0]}`}
//                             style={{ color: "transparent" }}
//                           />
//                           <div class="coursesCard__image_overlay rounded-8"></div>
//                         </div>

//                         <div class="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
//                       </div>
//                       <div class="h-100 pt-15">
//                         <div class="d-flex items-center">
//                           <div class="text-14 lh-1 text-yellow-1 mr-10">4.3</div>
//                           <div class="d-flex x-gap-5 items-center">
//                             <div class="icon-star text-9 text-yellow-1 "></div>
//                             <div class="icon-star text-9 text-yellow-1 "></div>
//                             <div class="icon-star text-9 text-yellow-1 "></div>
//                             <div class="icon-star text-9 text-yellow-1 "></div>
//                           </div>
//                           <div class="text-13 lh-1 ml-10">(1991)</div>
//                         </div>
//                         <div class="text-17 lh-15 fw-500 text-dark-1 mt-10">
//                           <Link class="linkCustom" to='/CourseDetails' state={{ courseId: course._id }}>
//                             {course.courseName}
//                           </Link>
//                         </div>
//                         <div class="d-flex x-gap-10 items-center pt-10">
//                           <div class="d-flex items-center">
//                             <div class="mr-8">
//                               <img
//                                 alt="icon"
//                                 loading="lazy"
//                                 width="16"
//                                 height="17"
//                                 decoding="async"
//                                 data-nimg="1"
//                                 src="https://educrat-nextjs.vercel.app/assets/img/coursesCards/icons/1.svg"
//                                 style={{ color: "transparent" }}
//                               />
//                             </div>
//                             <div class="text-14 lh-1">6 lesson</div>
//                           </div>
//                           <div class="d-flex items-center">
//                             <div class="mr-8">
//                               <img
//                                 alt="icon"
//                                 loading="lazy"
//                                 width="16"
//                                 height="17"
//                                 decoding="async"
//                                 data-nimg="1"
//                                 src="https://educrat-nextjs.vercel.app/assets/img/coursesCards/icons/2.svg"
//                                 style={{ color: "transparent" }}
//                               />
//                             </div>
//                             <div class="text-14 lh-1">22h 0m</div>
//                           </div>
//                           <div class="d-flex items-center">
//                             <div class="mr-8">
//                               <img
//                                 alt="icon"
//                                 loading="lazy"
//                                 width="16"
//                                 height="17"
//                                 decoding="async"
//                                 data-nimg="1"
//                                 src="https://educrat-nextjs.vercel.app/assets/img/coursesCards/icons/3.svg"
//                                 style={{ color: "transparent" }}
//                               />
//                             </div>
//                             <div class="text-14 lh-1">Beginner</div>
//                           </div>
//                         </div>
//                         <div class="coursesCard-footer">
//                           <div class="coursesCard-footer__author">
//                             <img
//                               alt="image"
//                               loading="lazy"
//                               width="30"
//                               height="30"
//                               decoding="async"
//                               data-nimg="1"
//                               src="https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fgeneral%2Favatar-1.png&w=64&q=75"
//                               style={{ color: "transparent" }}
//                             />
//                             <div>Jane Cooper</div>
//                           </div>
//                           <div class="coursesCard-footer__price">
//                             <div>₹199</div>
//                             <div>{course.price}</div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     {/* <div class="side-content__item">
//                       <div class="px-30 pt-20 pb-30 bg-white rounded-8 border-light shadow-2">
//                         <div class="text-18 lh-16 text-dark-1">
//                           {course.courseName}
//                         </div>
//                         <div class="row x-gap-10 y-gap-10 items-center pt-15">
//                           <div class="col-auto">
//                             <div class="d-flex items-center">
//                               <img
//                                 alt="icon"
//                                 loading="lazy"
//                                 width="16"
//                                 height="17"
//                                 decoding="async"
//                                 data-nimg="1"
//                                 class="mr-8"
//                                 src="https://educrat-nextjs.vercel.app/assets/img/coursesCards/icons/1.svg"
//                                 style={{ color: "transparent" }}
//                               />
//                               <div class="text-14 lh-1">6 lesson</div>
//                             </div>
//                           </div>
//                           <div class="col-auto">
//                             <div class="d-flex items-center">
//                               <img
//                                 alt="icon"
//                                 loading="lazy"
//                                 width="16"
//                                 height="17"
//                                 decoding="async"
//                                 data-nimg="1"
//                                 class="mr-8"
//                                 src="https://educrat-nextjs.vercel.app/assets/img/coursesCards/icons/2.svg"
//                                 style={{ color: "transparent" }}
//                               />
//                               <div class="text-14 lh-1">22h 0m</div>
//                             </div>
//                           </div>
//                           <div class="col-auto">
//                             <div class="d-flex items-center">
//                               <img
//                                 alt="icon"
//                                 loading="lazy"
//                                 width="16"
//                                 height="17"
//                                 decoding="async"
//                                 data-nimg="1"
//                                 class="mr-8"
//                                 src="https://educrat-nextjs.vercel.app/assets/img/coursesCards/icons/3.svg"
//                                 style={{ color: "transparent" }}
//                               />
//                               <div class="text-14 lh-1">Beginner</div>
//                             </div>
//                           </div>
//                         </div>
//                         <div class="d-inline-block px-15 py-5 bg-green-1 text-dark-1 rounded-200 text-11 fw-500 uppercase mt-20">
//                           BEST SELLER
//                         </div>
//                         <p class="text-dark-1 mt-15">
//                           {course.description}
//                         </p>
//                         <div class="row x-gap-20 y-gap-15 items-center pt-30">
//                           <div class="col">
//                             <button
//                               class="button -md h-60 -purple-1 text-white col-12 py-54"
//                               style={{ padding: "0px 54px" }}
//                             >
//                               Add To Cart
//                             </button>
//                           </div>
//                           <div class="col-auto">
//                             <div class="d-flex items-center justify-center size-60 rounded-full border-light">
//                               <div class="icon-bookmark text-20 text-purple-1"></div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div> */}
//                   </div>
//                 ))}

//               </div>

//               <div class="row justify-center pt-90 lg:pt-50">
//                 <div class="col-auto">
//                   <div class="pagination -buttons">
//                     <button class="pagination__button -prev " onClick={() => goToPage(currentPage - 1)}>
//                       <i class="icon icon-chevron-left"></i>
//                     </button>

//                     {Array.from({ length: totalPages }, (_, index) => (

//                       <div class="pagination__count">
//                         <button class={`${currentPage === index + 1} "-count-is-active":""`} onClick={() => goToPage(index + 1)}>
//                           {index + 1}
//                         </button>
//                       </div>
//                     ))}
//                     <button class="pagination__button -next" onClick={() => goToPage(currentPage + 1)}>
//                       <i class="icon icon-chevron-right"></i>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AllCourse;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import RecommendationSideBar from "./RecommendationSideBar";
// import MobileRecommendationSideBar from "./MobileRecommendationSideBar";
// import axios from "axios";

// const AllCourse = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [courseData, setCourseData] = useState([]);
//   const [filteredCourses, setFilteredCourses] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategories, setSelectedCategories] = useState(['all']);
//   const [selectedPrice, setSelectedPrice] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortBy, setSortBy] = useState('default');

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     fetchCourses();
//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     applyFilters();
//   }, [courseData, selectedCategories, selectedPrice, searchTerm, sortBy]);

//   const fetchCourses = async () => {
//     try {
//       const res = await axios.get('/api/courses');
//       setCourseData(res.data);
//     } catch (error) {
//       console.error('Error fetching courses:', error);
//     }
//   };

//   const fetchCategories = async () => {
//     try {
//       const res = await axios.get('/api/categories');
//       setCategories(res.data);
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//     }
//   };

//   const applyFilters = () => {
//     let filtered = [...courseData];

//     // Filter by search term
//     if (searchTerm) {
//       filtered = filtered.filter(course =>
//         course.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         course.description?.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     // Filter by categories
//     if (!selectedCategories.includes('all') && selectedCategories.length > 0) {
//       filtered = filtered.filter(course =>
//         selectedCategories.some(categoryId =>
//           course.categories?.includes(categoryId) || course.category === categoryId
//         )
//       );
//     }

//     // Filter by price
//     if (selectedPrice !== 'all') {
//       if (selectedPrice === 'free') {
//         filtered = filtered.filter(course => course.price === 0);
//       } else if (selectedPrice === 'paid') {
//         filtered = filtered.filter(course => course.price > 0);
//       }
//     }

//     // Sort courses
//     if (sortBy === 'price_asc') {
//       filtered.sort((a, b) => a.price - b.price);
//     } else if (sortBy === 'price_desc') {
//       filtered.sort((a, b) => b.price - a.price);
//     }

//     setFilteredCourses(filtered);
//   };

//   const handleCategoryChange = (categoryId) => {
//     if (categoryId === 'all') {
//       setSelectedCategories(['all']);
//     } else {
//       setSelectedCategories(prev => {
//         const newSelection = prev.filter(id => id !== 'all');
//         if (newSelection.includes(categoryId)) {
//           const filtered = newSelection.filter(id => id !== categoryId);
//           return filtered.length === 0 ? ['all'] : filtered;
//         } else {
//           return [...newSelection, categoryId];
//         }
//       });
//     }
//   };

//   const handlePriceChange = (priceType) => {
//     setSelectedPrice(priceType);
//   };

//   const handleSortChange = (sortType) => {
//     setSortBy(sortType);
//     setIsDropdownOpen(false);
//   };

//   const handleToggle = () => {
//     setIsDropdownOpen((prev) => !prev);
//   };

//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentCourses = filteredCourses.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);

//   const goToPage = (pageNumber) => {
//     if (pageNumber >= 1 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     }
//   };

//   return (
//     <div>
//       <section className="breadcrumbs">
//         <div className="container">
//           <div className="row">
//             <div className="col-auto">
//               <div className="breadcrumbs__content">
//                 <div className="breadcrumbs__item">
//                   <a href="/">Home</a>
//                 </div>
//                 <div className="breadcrumbs__item">
//                   <a href="/courses-list-3">All courses</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="page-header -type-1">
//         <div className="container">
//           <div className="page-header__content">
//             <div className="row">
//               <div className="col-auto">
//                 <div>
//                   <h1 className="page-header__title">What to Learn Next</h1>
//                 </div>
//                 <div>
//                   <p className="page-header__text">Recommended For you</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="layout-pb-lg">
//         <div className="container">
//           {/* Search Bar */}
//           <div className="row mb-30">
//             <div className="col-12">
//               <div className="search-bar">
//                 <input
//                   type="text"
//                   placeholder="Search courses..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="form-control"
//                   style={{
//                     padding: '12px 20px',
//                     borderRadius: '8px',
//                     border: '1px solid #ddd',
//                     fontSize: '14px'
//                   }}
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="row y-gap-50">
//             <RecommendationSideBar
//               categories={categories}
//               selectedCategories={selectedCategories}
//               selectedPrice={selectedPrice}
//               onCategoryChange={handleCategoryChange}
//               onPriceChange={handlePriceChange}
//             />

//             <div className="col-xl-9 col-lg-8">
//               <div className="accordion js-accordion">
//                 <div className="accordion__item">
//                   <div className="row y-gap-20 items-center justify-between pb-30">
//                     <div className="col-auto">
//                       <div className="text-14 lh-12">
//                         Showing
//                         <span className="text-dark-1 fw-500"> {filteredCourses.length} </span>
//                         total results
//                       </div>
//                     </div>
//                     <div className="col-auto">
//                       <div className="row x-gap-20 y-gap-20">
//                         <div className="col-auto">
//                           <div className="d-flex items-center">
//                             <div className="text-14 lh-12 fw-500 text-dark-1 mr-20">
//                               Sort by:
//                             </div>
//                             <div
//                               id="dd41button"
//                               className={`dropdown js-dropdown js-category-active ${isDropdownOpen ? "-is-dd-active" : ""}`}
//                             >
//                               <div
//                                 className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
//                                 onClick={handleToggle}
//                               >
//                                 <span className="js-dropdown-title">
//                                   {sortBy === 'default' ? 'Default' :
//                                    sortBy === 'price_asc' ? 'Price (Low to High)' :
//                                    sortBy === 'price_desc' ? 'Price (High to Low)' : 'Default'}
//                                 </span>
//                                 <i className="icon text-9 ml-40 icon-chevron-down"></i>
//                               </div>
//                               <div
//                                 id="dd41content"
//                                 className={`toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle ${isDropdownOpen ? "-is-el-visible" : ""}`}
//                               >
//                                 <div className="text-14 y-gap-15 js-dropdown-list">
//                                   <div>
//                                     <span
//                                       className={`d-block js-dropdown-link cursor ${sortBy === 'default' ? 'activeMenu' : ''}`}
//                                       onClick={() => handleSortChange('default')}
//                                     >
//                                       Default
//                                     </span>
//                                   </div>
//                                   <div>
//                                     <span
//                                       className={`d-block js-dropdown-link cursor ${sortBy === 'price_asc' ? 'activeMenu' : ''}`}
//                                       onClick={() => handleSortChange('price_asc')}
//                                     >
//                                       Price (Low to High)
//                                     </span>
//                                   </div>
//                                   <div>
//                                     <span
//                                       className={`d-block js-dropdown-link cursor ${sortBy === 'price_desc' ? 'activeMenu' : ''}`}
//                                       onClick={() => handleSortChange('price_desc')}
//                                     >
//                                       Price (High to Low)
//                                     </span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="col-auto d-none lg:d-block">
//                           <div className="accordion__button w-unset">
//                             <button className="button h-50 px-30 -light-7 text-purple-1" onClick={toggleAccordion}>
//                               <i className="icon-filter mr-10"></i>Filter
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <MobileRecommendationSideBar
//                     isOpen={isOpen}
//                     categories={categories}
//                     selectedCategories={selectedCategories}
//                     selectedPrice={selectedPrice}
//                     onCategoryChange={handleCategoryChange}
//                     onPriceChange={handlePriceChange}
//                   />
//                 </div>
//               </div>

//               <div className="row y-gap-30 side-content__wrap">
//                 {currentCourses?.map((course) => (
//                   <div key={course._id} className="side-content col-xl-4 col-lg-6 col-md-4 col-sm-6">
//                     <div className="coursesCard -type-1">
//                       <div className="relative">
//                         <div className="coursesCard__image overflow-hidden rounded-8">
//                           <img
//                             alt="image"
//                             loading="lazy"
//                             width="530"
//                             height="370"
//                             decoding="async"
//                             data-nimg="1"
//                             className="w-1/1"
//                             src={`/${course.courseImages?.[0]}`}
//                             style={{ color: "transparent" }}
//                           />
//                           <div className="coursesCard__image_overlay rounded-8"></div>
//                         </div>
//                         <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
//                       </div>
//                       <div className="h-100 pt-15">
//                         <div className="d-flex items-center">
//                           <div className="text-14 lh-1 text-yellow-1 mr-10">4.3</div>
//                           <div className="d-flex x-gap-5 items-center">
//                             <div className="icon-star text-9 text-yellow-1"></div>
//                             <div className="icon-star text-9 text-yellow-1"></div>
//                             <div className="icon-star text-9 text-yellow-1"></div>
//                             <div className="icon-star text-9 text-yellow-1"></div>
//                           </div>
//                           <div className="text-13 lh-1 ml-10">(1991)</div>
//                         </div>
//                         <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
//                           <Link className="linkCustom" to='/CourseDetails' state={{ courseId: course._id }}>
//                             {course.courseName}
//                           </Link>
//                         </div>
//                         <div className="d-flex x-gap-10 items-center pt-10">
//                           <div className="d-flex items-center">
//                             <div className="mr-8">
//                               <img
//                                 alt="icon"
//                                 loading="lazy"
//                                 width="16"
//                                 height="17"
//                                 decoding="async"
//                                 data-nimg="1"
//                                 src="https://educrat-nextjs.vercel.app/assets/img/coursesCards/icons/1.svg"
//                                 style={{ color: "transparent" }}
//                               />
//                             </div>
//                             <div className="text-14 lh-1">6 lesson</div>
//                           </div>
//                           <div className="d-flex items-center">
//                             <div className="mr-8">
//                               <img
//                                 alt="icon"
//                                 loading="lazy"
//                                 width="16"
//                                 height="17"
//                                 decoding="async"
//                                 data-nimg="1"
//                                 src="https://educrat-nextjs.vercel.app/assets/img/coursesCards/icons/2.svg"
//                                 style={{ color: "transparent" }}
//                               />
//                             </div>
//                             <div className="text-14 lh-1">22h 0m</div>
//                           </div>
//                           <div className="d-flex items-center">
//                             <div className="mr-8">
//                               <img
//                                 alt="icon"
//                                 loading="lazy"
//                                 width="16"
//                                 height="17"
//                                 decoding="async"
//                                 data-nimg="1"
//                                 src="https://educrat-nextjs.vercel.app/assets/img/coursesCards/icons/3.svg"
//                                 style={{ color: "transparent" }}
//                               />
//                             </div>
//                             <div className="text-14 lh-1">Beginner</div>
//                           </div>
//                         </div>
//                         <div className="coursesCard-footer">
//                           <div className="coursesCard-footer__author">
//                             <img
//                               alt="image"
//                               loading="lazy"
//                               width="30"
//                               height="30"
//                               decoding="async"
//                               data-nimg="1"
//                               src="https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fgeneral%2Favatar-1.png&w=64&q=75"
//                               style={{ color: "transparent" }}
//                             />
//                             <div>Jane Cooper</div>
//                           </div>
//                           <div className="coursesCard-footer__price">
//                             <div>₹{course.price === 0 ? 'Free' : course.price}</div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {totalPages > 1 && (
//                 <div className="row justify-center pt-90 lg:pt-50">
//                   <div className="col-auto">
//                     <div className="pagination -buttons">
//                       <button
//                         className="pagination__button -prev"
//                         onClick={() => goToPage(currentPage - 1)}
//                         disabled={currentPage === 1}
//                       >
//                         <i className="icon icon-chevron-left"></i>
//                       </button>

//                       {Array.from({ length: totalPages }, (_, index) => (
//                         <div key={index + 1} className="pagination__count">
//                           <button
//                             className={`${currentPage === index + 1 ? "-count-is-active" : ""}`}
//                             onClick={() => goToPage(index + 1)}
//                           >
//                             {index + 1}
//                           </button>
//                         </div>
//                       ))}

//                       <button
//                         className="pagination__button -next"
//                         onClick={() => goToPage(currentPage + 1)}
//                         disabled={currentPage === totalPages}
//                       >
//                         <i className="icon icon-chevron-right"></i>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AllCourse;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RecommendationSideBar from "./RecommendationSideBar";
import MobileRecommendationSideBar from "./MobileRecommendationSideBar";
import axios from "axios";

const AllCourse = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [courseData, setCourseData] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(["all"]);
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetchCourses();
    fetchCategories();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [courseData, selectedCategories, selectedPrice, searchTerm, sortBy]);

  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/courses");
      console.log("res", res.data);
      setCourseData(res.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/categories");
      setCategories(res.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const applyFilters = () => {
    let filtered = [...courseData];

    // Filter by search term
    if (searchTerm.trim()) {
      filtered = filtered.filter(
        (course) =>
          course.courseName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    console.log("filtered", selectedCategories);

    // Filter by categories
    if (!selectedCategories.includes("all") && selectedCategories.length > 0) {
      filtered = filtered.filter((course) => {
        console.log("ddsfsdfcsdf",course.categoryIds)
        // course.categoryIds is an array (could be empty or undefined)
        if (
          !Array.isArray(course.categoryIds) ||
          course.categoryIds.length === 0
        ) {
          return false; // exclude if no categories
        }

        // Convert course categoryIds to strings for safe comparison
        const courseCategoryIdStrs = course.categoryIds.map((id) =>
          id._id.toString()
        );
        console.log("saasd", courseCategoryIdStrs);
        // Check if any category in course matches any selected category
        return selectedCategories.some((selectedCatId) =>
          courseCategoryIdStrs.includes(selectedCatId)
        );
      });
    }

    // Filter by price
    if (selectedPrice !== "all") {
      if (selectedPrice === "free") {
        filtered = filtered.filter(
          (course) =>
            course.price === 0 || course.price === "0" || !course.price
        );
      } else if (selectedPrice === "paid") {
        filtered = filtered.filter(
          (course) => course.price > 0 && course.price !== "0"
        );
      }
    }

    // Sort courses
    if (sortBy === "price_asc") {
      filtered.sort((a, b) => {
        const priceA = parseFloat(a.price) || 0;
        const priceB = parseFloat(b.price) || 0;
        return priceA - priceB;
      });
    } else if (sortBy === "price_desc") {
      filtered.sort((a, b) => {
        const priceA = parseFloat(a.price) || 0;
        const priceB = parseFloat(b.price) || 0;
        return priceB - priceA;
      });
    } else if (sortBy === "name_asc") {
      filtered.sort((a, b) =>
        (a.courseName || "").localeCompare(b.courseName || "")
      );
    } else if (sortBy === "name_desc") {
      filtered.sort((a, b) =>
        (b.courseName || "").localeCompare(a.courseName || "")
      );
    }

    setFilteredCourses(filtered);
  };

  const handleCategoryChange = (newCategories) => {
    setSelectedCategories(newCategories);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handlePriceChange = (priceType) => {
    setSelectedPrice(priceType);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleSortChange = (sortType) => {
    setSortBy(sortType);
    setIsDropdownOpen(false);
    setCurrentPage(1); // Reset to first page when sort changes
  };

  const handleToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div>
      <section className="breadcrumbs">
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <div className="breadcrumbs__content">
                <div className="breadcrumbs__item">
                  <a href="/">Home</a>
                </div>
                <div className="breadcrumbs__item">
                  <a href="/courses-list-3">All courses</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__title">What to Learn Next</h1>
                </div>
                <div>
                  <p className="page-header__text">Recommended For you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pb-lg">
        <div className="container">
          {/* Search Bar */}
          <div className="row mb-30">
            <div className="col-12">
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1); // Reset to first page when searching
                  }}
                  className="form-control"
                  style={{
                    padding: "12px 20px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    fontSize: "14px",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="row y-gap-50">
            <RecommendationSideBar
              categories={categories}
              selectedCategories={selectedCategories}
              selectedPrice={selectedPrice}
              onCategoryChange={handleCategoryChange}
              onPriceChange={handlePriceChange}
            />

            <div className="col-xl-9 col-lg-8">
              <div className="accordion js-accordion">
                <div className="accordion__item">
                  <div className="row y-gap-20 items-center justify-between pb-30">
                    <div className="col-auto">
                      <div className="text-14 lh-12">
                        Showing
                        <span className="text-dark-1 fw-500">
                          {" "}
                          {filteredCourses.length}{" "}
                        </span>
                        total results
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="row x-gap-20 y-gap-20">
                        <div className="col-auto">
                          <div className="d-flex items-center">
                            <div className="text-14 lh-12 fw-500 text-dark-1 mr-20">
                              Sort by:
                            </div>
                            <div
                              id="dd41button"
                              className={`dropdown js-dropdown js-category-active ${
                                isDropdownOpen ? "-is-dd-active" : ""
                              }`}
                            >
                              <div
                                className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                                onClick={handleToggle}
                              >
                                <span className="js-dropdown-title">
                                  {sortBy === "default"
                                    ? "Default"
                                    : sortBy === "price_asc"
                                    ? "Price (Low to High)"
                                    : sortBy === "price_desc"
                                    ? "Price (High to Low)"
                                    : sortBy === "name_asc"
                                    ? "Name (A-Z)"
                                    : sortBy === "name_desc"
                                    ? "Name (Z-A)"
                                    : "Default"}
                                </span>
                                <i className="icon text-9 ml-40 icon-chevron-down"></i>
                              </div>
                              <div
                                id="dd41content"
                                className={`toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle ${
                                  isDropdownOpen ? "-is-el-visible" : ""
                                }`}
                              >
                                <div className="text-14 y-gap-15 js-dropdown-list">
                                  <div>
                                    <span
                                      className={`d-block js-dropdown-link cursor ${
                                        sortBy === "default" ? "activeMenu" : ""
                                      }`}
                                      onClick={() =>
                                        handleSortChange("default")
                                      }
                                    >
                                      Default
                                    </span>
                                  </div>
                                  <div>
                                    <span
                                      className={`d-block js-dropdown-link cursor ${
                                        sortBy === "price_asc"
                                          ? "activeMenu"
                                          : ""
                                      }`}
                                      onClick={() =>
                                        handleSortChange("price_asc")
                                      }
                                    >
                                      Price (Low to High)
                                    </span>
                                  </div>
                                  <div>
                                    <span
                                      className={`d-block js-dropdown-link cursor ${
                                        sortBy === "price_desc"
                                          ? "activeMenu"
                                          : ""
                                      }`}
                                      onClick={() =>
                                        handleSortChange("price_desc")
                                      }
                                    >
                                      Price (High to Low)
                                    </span>
                                  </div>
                                  <div>
                                    <span
                                      className={`d-block js-dropdown-link cursor ${
                                        sortBy === "name_asc"
                                          ? "activeMenu"
                                          : ""
                                      }`}
                                      onClick={() =>
                                        handleSortChange("name_asc")
                                      }
                                    >
                                      Name (A-Z)
                                    </span>
                                  </div>
                                  <div>
                                    <span
                                      className={`d-block js-dropdown-link cursor ${
                                        sortBy === "name_desc"
                                          ? "activeMenu"
                                          : ""
                                      }`}
                                      onClick={() =>
                                        handleSortChange("name_desc")
                                      }
                                    >
                                      Name (Z-A)
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto d-none lg:d-block">
                          <div className="accordion__button w-unset">
                            <button
                              className="button h-50 px-30 -light-7 text-purple-1"
                              onClick={toggleAccordion}
                            >
                              <i className="icon-filter mr-10"></i>Filter
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <MobileRecommendationSideBar
                    isOpen={isOpen}
                    categories={categories}
                    selectedCategories={selectedCategories}
                    selectedPrice={selectedPrice}
                    onCategoryChange={handleCategoryChange}
                    onPriceChange={handlePriceChange}
                  />
                </div>
              </div>

              {/* No results message */}
              {filteredCourses.length === 0 && (
                <div className="row">
                  <div className="col-12">
                    <div className="text-center py-50">
                      <h4>No courses found</h4>
                      <p>Try adjusting your filters or search terms</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="row y-gap-30 side-content__wrap">
                {currentCourses?.map((course) => (
                  <div
                    key={course._id}
                    className="side-content col-xl-4 col-lg-6 col-md-4 col-sm-6"
                  >
                    <div className="coursesCard -type-1">
                      <Link
                        className="linkCustom"
                        to="/CourseDetails"
                        state={{ courseId: course._id }}
                      >
                        <div className="relative">
                          <div className="coursesCard__image overflow-hidden rounded-8">
                            <img
                              alt="image"
                              loading="lazy"
                              width="530"
                              height="370"
                              decoding="async"
                              data-nimg="1"
                              className="w-1/1"
                              src={
                                course.courseImages?.[0]
                                  ? `/${course.courseImages[0]}`
                                  : "/placeholder-course-image.jpg"
                              }
                              style={{ color: "transparent" }}
                              onError={(e) => {
                                e.target.src = "/placeholder-course-image.jpg";
                              }}
                            />
                            <div className="coursesCard__image_overlay rounded-8"></div>
                          </div>

                          <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
                        </div>
                      </Link>
                      <div className="h-100 pt-15">
                        <div className="d-flex items-center">
                          <div className="text-14 lh-1 text-yellow-1 mr-10">
                            4.3
                          </div>
                          <div className="d-flex x-gap-5 items-center">
                            <div className="icon-star text-9 text-yellow-1"></div>
                            <div className="icon-star text-9 text-yellow-1"></div>
                            <div className="icon-star text-9 text-yellow-1"></div>
                            <div className="icon-star text-9 text-yellow-1"></div>
                          </div>
                          <div className="text-13 lh-1 ml-10">(1991)</div>
                        </div>
                        <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                          <Link
                            className="linkCustom"
                            to="/CourseDetails"
                            state={{ courseId: course._id }}
                          >
                            {course.courseName || "Course Name"}
                          </Link>
                        </div>
                        <div className="d-flex x-gap-10 items-center pt-10">
                          <div className="d-flex items-center">
                            <div className="mr-8">
                              <img
                                alt="icon"
                                loading="lazy"
                                width="16"
                                height="17"
                                decoding="async"
                                data-nimg="1"
                                src="https://educrat-nextjs.vercel.app/assets/img/coursesCards/icons/1.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                            <div className="text-14 lh-1">
                              {course.lessons || 6} lesson
                              {course.lessons !== 1 ? "s" : ""}
                            </div>
                          </div>
                          <div className="d-flex items-center">
                            <div className="mr-8">
                              <img
                                alt="icon"
                                loading="lazy"
                                width="16"
                                height="17"
                                decoding="async"
                                data-nimg="1"
                                src="https://educrat-nextjs.vercel.app/assets/img/coursesCards/icons/2.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                            <div className="text-14 lh-1">
                              {course.duration || "22h 0m"}
                            </div>
                          </div>
                          <div className="d-flex items-center">
                            <div className="mr-8">
                              <img
                                alt="icon"
                                loading="lazy"
                                width="16"
                                height="17"
                                decoding="async"
                                data-nimg="1"
                                src="https://educrat-nextjs.vercel.app/assets/img/coursesCards/icons/3.svg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                            <div className="text-14 lh-1">
                              {course.level || "Beginner"}
                            </div>
                          </div>
                        </div>
                        <div className="coursesCard-footer">
                          <div className="coursesCard-footer__author">
                            <img
                              alt="image"
                              loading="lazy"
                              width="30"
                              height="30"
                              decoding="async"
                              data-nimg="1"
                              src={
                                course.instructorImage ||
                                "https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fgeneral%2Favatar-1.png&w=64&q=75"
                              }
                              style={{ color: "transparent" }}
                            />
                            <div>{course.instructorName || "Jane Cooper"}</div>
                          </div>
                          <div className="">
                            <div>
                              ₹
                              {course.price === 0 ||
                              course.price === "0" ||
                              !course.price
                                ? "Free"
                                : course.price}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="row justify-center pt-90 lg:pt-50">
                  <div className="col-auto">
                    <div className="pagination -buttons">
                      <button
                        className="pagination__button -prev"
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        <i className="icon icon-chevron-left"></i>
                      </button>

                      {Array.from(
                        { length: Math.min(totalPages, 5) },
                        (_, index) => {
                          let pageNumber;
                          if (totalPages <= 5) {
                            pageNumber = index + 1;
                          } else if (currentPage <= 3) {
                            pageNumber = index + 1;
                          } else if (currentPage >= totalPages - 2) {
                            pageNumber = totalPages - 4 + index;
                          } else {
                            pageNumber = currentPage - 2 + index;
                          }

                          return (
                            <div key={pageNumber} className="pagination__count">
                              <button
                                className={`${
                                  currentPage === pageNumber
                                    ? "-count-is-active"
                                    : ""
                                }`}
                                onClick={() => goToPage(pageNumber)}
                              >
                                {pageNumber}
                              </button>
                            </div>
                          );
                        }
                      )}

                      <button
                        className="pagination__button -next"
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      >
                        <i className="icon icon-chevron-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllCourse;
