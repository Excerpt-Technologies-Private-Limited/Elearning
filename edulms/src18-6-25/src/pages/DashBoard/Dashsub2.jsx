// import React from 'react'

// function Dashsub2() {
//   return (
//     <div>
//          <div className="row">
//             <div className="col-xl-8">
//               <div className="card">
//                 <div className="card-body">
//                   <div className="d-flex flex-wrap align-items-center mb-4">
//                     <h5 className="card-title me-2">Student & Leads</h5>
//                     <div className="ms-auto">
//                       <div>
//                         <button
//                           type="button"
//                           className="btn btn-soft-primary btn-sm"
//                         >
//                           ALL
//                         </button>
//                         <button
//                           type="button"
//                           className="btn btn-soft-secondary btn-sm"
//                         >
//                           1M
//                         </button>
//                         <button
//                           type="button"
//                           className="btn btn-soft-secondary btn-sm"
//                         >
//                           6M
//                         </button>
//                         <button
//                           type="button"
//                           className="btn btn-soft-secondary btn-sm"
//                         >
//                           1Y
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="row align-items-center">
//                     <div className="col-xl-8">
//                       {/* <div
//                         id="market-overview"
//                         data-colors='["#5156be", "#34c38f"]'
//                         className="apex-charts"
//                       ></div> */}
//                        <img src="./assets2/images/users/graphbar.PNG" alt="" height="" />
//                     </div>
//                     <div className="col-xl-4">
//                       <div className="p-4">
//                         {[
//                           "Facebook",
//                           "Instagram",
//                           "Whatsapp",
//                           "Twitter",
//                           "Youtube",
//                         ].map((name, index) => (
//                           <div className="mt-3" key={index}>
//                             <div className="d-flex align-items-center">
//                               <div className="avatar-sm m-auto">
//                                 <span className="avatar-title rounded-circle bg-light-subtle text-dark font-size-16">
//                                   {index + 2 * 2}
//                                 </span>
//                               </div>
//                               <div className="flex-grow-1 ms-3">
//                                 <span className="font-size-16">{name}</span>
//                               </div>
//                               <div className="flex-shrink-0">
//                                 <span
//                                   className={`badge rounded-pill ₹{
//                                     name === "Coinbase" || name === "Bitfinex"
//                                       ? "bg-danger-subtle text-danger"
//                                       : "bg-success-subtle text-success"
//                                   } font-size-12 fw-medium`}
//                                 >
//                                   {name === "facebook"
//                                     ? "+2.5%"
//                                     : name === "Instagram"
//                                     ? "+8.3%"
//                                     : name === "Whatsapp"
//                                     ? "-3.6%"
//                                     : name === "Twitter"
//                                     ? "+7.1%"
//                                     : "-0.9%"}
//                                 </span>
//                               </div>
//                             </div>
//                           </div>
//                         ))}

//                         <div className="mt-4 pt-2">
//                           <a href="#" className="btn btn-primary w-100">
//                             View All{" "}
//                             <i className="mdi mdi-arrow-right ms-1"></i>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-xl-4">
//               <div className="card">
//                 <div className="card-body">
//                   <div className="d-flex flex-wrap align-items-center mb-4">
//                     <h5 className="card-title me-2">Reminders & Reports</h5>
//                     <div className="ms-auto">
//                       <div className="dropdown">
//                         <a
//                           className="dropdown-toggle text-reset"
//                           href="#"
//                           id="dropdownMenuButton1"
//                           data-bs-toggle="dropdown"
//                           aria-haspopup="true"
//                           aria-expanded="false"
//                         >
//                           <span className="text-muted font-size-12">
//                             Sort By:
//                           </span>{" "}
//                           <span className="fw-medium">
//                             World<i className="mdi mdi-chevron-down ms-1"></i>
//                           </span>
//                         </a>
//                         <div
//                           className="dropdown-menu dropdown-menu-end"
//                           aria-labelledby="dropdownMenuButton1"
//                         >
//                           <a className="dropdown-item" href="#">
//                             USA
//                           </a>
//                           <a className="dropdown-item" href="#">
//                             Russia
//                           </a>
//                           <a className="dropdown-item" href="#">
//                             Australia
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* <div
//                     id="sales-by-locations"
//                     data-colors='["#5156be"]'
//                     style={{ height: 250 }}
//                   ></div> */}

//                   <img src="./assets2/images/users/graphpie.PNG" alt="" height="250" />

//                   <div className="px-2 py-2">
//                     {[
//                       { country: "Student Batches", percent: 75 },
//                       { country: "Expenses", percent: 55 },
//                       { country: "Student Leads", percent: 85 },
//                     ].map((loc, i) => (
//                       <div key={i}>
//                         <p className="mb-1">
//                           {loc.country}{" "}
//                           <span className="float-end">{loc.percent}%</span>
//                         </p>
//                         <div className="progress mt-2" style={{ height: 6 }}>
//                           <div
//                             className="progress-bar progress-bar-striped bg-primary"
//                             role="progressbar"
//                             style={{ width: `₹{loc.percent}%` }}
//                             aria-valuenow={loc.percent}
//                             aria-valuemin="0"
//                             aria-valuemax="100"
//                           ></div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//     </div>
//   )
// }

// export default Dashsub2

// import React, { useEffect, useState } from "react";

// function Dashsub2() {
//   const [courses, setCourses] = useState([]);
//   const [orders, setOrders] = useState([]);
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [coursesRes, ordersRes, studentsRes] = await Promise.all([
//           fetch("/api/courses"),
//           fetch("/api/orders"),
//           fetch("/api/students"),
//         ]);

//         const coursesData = await coursesRes.json();
//         const ordersData = await ordersRes.json();
//         const studentsData = await studentsRes.json();

//         setCourses(coursesData);
//         setOrders(ordersData);
//         setStudents(studentsData);
//       } catch (error) {
//         console.error("Failed to fetch dashboard data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Example derived metrics
//   const totalStudents = students.length;
//   const totalOrders = orders.length;
//   const totalCourses = courses.length;

//   return (
//     <div>
//       <div className="row">
//         {/* Left Chart */}
//         <div className="col-xl-8">
//           <div className="card">
//             <div className="card-body">
//               <div className="d-flex flex-wrap align-items-center mb-4">
//                 <h5 className="card-title me-2">Student & Leads</h5>
//                 <div className="ms-auto">
//                   <div>
//                     <button type="button" className="btn btn-soft-primary btn-sm">ALL</button>
//                     <button type="button" className="btn btn-soft-secondary btn-sm">1M</button>
//                     <button type="button" className="btn btn-soft-secondary btn-sm">6M</button>
//                     <button type="button" className="btn btn-soft-secondary btn-sm">1Y</button>
//                   </div>
//                 </div>
//               </div>

//               <div className="row align-items-center">
//                 <div className="col-xl-8">
//                   <img src="./assets2/images/users/graphbar.PNG" alt="Bar Graph" />
//                 </div>

//                 <div className="col-xl-4">
//                   <div className="p-4">
//                     {["Facebook", "Instagram", "Whatsapp", "Twitter", "Youtube"].map((name, index) => (
//                       <div className="mt-3" key={index}>
//                         <div className="d-flex align-items-center">
//                           <div className="avatar-sm m-auto">
//                             <span className="avatar-title rounded-circle bg-light-subtle text-dark font-size-16">
//                               {index + 2 * 2}
//                             </span>
//                           </div>
//                           <div className="flex-grow-1 ms-3">
//                             <span className="font-size-16">{name}</span>
//                           </div>
//                           <div className="flex-shrink-0">
//                             <span className="badge rounded-pill bg-success-subtle text-success font-size-12 fw-medium">
//                               {name === "Facebook"
//                                 ? `+${totalStudents % 10}.5%`
//                                 : name === "Instagram"
//                                 ? `+${totalCourses % 10}.3%`
//                                 : name === "Whatsapp"
//                                 ? `-${totalOrders % 10}.6%`
//                                 : "+7.1%"}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     ))}

//                     <div className="mt-4 pt-2">
//                       <a href="#" className="btn btn-primary w-100">
//                         View All <i className="mdi mdi-arrow-right ms-1"></i>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Pie Chart */}
//         <div className="col-xl-4">
//           <div className="card">
//             <div className="card-body">
//               <div className="d-flex flex-wrap align-items-center mb-4">
//                 <h5 className="card-title me-2">Reminders & Reports</h5>
//                 <div className="ms-auto">
//                   <div className="dropdown">
//                     <a
//                       className="dropdown-toggle text-reset"
//                       href="#"
//                       data-bs-toggle="dropdown"
//                     >
//                       <span className="text-muted font-size-12">Sort By:</span>{" "}
//                       <span className="fw-medium">World <i className="mdi mdi-chevron-down ms-1"></i></span>
//                     </a>
//                     <div className="dropdown-menu dropdown-menu-end">
//                       <a className="dropdown-item" href="#">USA</a>
//                       <a className="dropdown-item" href="#">Russia</a>
//                       <a className="dropdown-item" href="#">Australia</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <img src="./assets2/images/users/graphpie.PNG" alt="Pie Graph" height="250" />

//               <div className="px-2 py-2">
//                 {[
//                   { label: "Student Batches", percent: totalCourses * 10 },
//                   { label: "Expenses", percent: totalOrders * 5 },
//                   { label: "Student Leads", percent: totalStudents * 3 },
//                 ].map((item, index) => (
//                   <div key={index}>
//                     <p className="mb-1">
//                       {item.label} <span className="float-end">{item.percent}%</span>
//                     </p>
//                     <div className="progress mt-2" style={{ height: 6 }}>
//                       <div
//                         className="progress-bar progress-bar-striped bg-primary"
//                         role="progressbar"
//                         style={{ width: `${item.percent}%` }}
//                         aria-valuenow={item.percent}
//                         aria-valuemin="0"
//                         aria-valuemax="100"
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashsub2;

// import React, { useEffect, useState } from "react";

// function Dashsub2() {
//   const [courses, setCourses] = useState([]);
//   const [orders, setOrders] = useState([]);
//   const [students, setStudents] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const [coursesRes, ordersRes, studentsRes, categoriesRes] = await Promise.all([
//           fetch("/api/courses"),
//           fetch("/api/orders"),
//           fetch("/api/students"),
//           fetch("/api/categories"),
//         ]);

//         if (!coursesRes.ok || !ordersRes.ok || !studentsRes.ok || !categoriesRes.ok) {
//           throw new Error('Failed to fetch data from one or more endpoints');
//         }

//         const coursesData = await coursesRes.json();
//         const ordersData = await ordersRes.json();
//         const studentsData = await studentsRes.json();
//         const categoriesData = await categoriesRes.json();

//         // Handle different response formats - sometimes APIs return {data: [...]} or just [...]
//         setCourses(Array.isArray(coursesData) ? coursesData : coursesData.data || []);
//         setOrders(Array.isArray(ordersData) ? ordersData : ordersData.data || []);
//         setStudents(Array.isArray(studentsData) ? studentsData : studentsData.data || []);
//         setCategories(Array.isArray(categoriesData) ? categoriesData : categoriesData.data || []);
//       } catch (error) {
//         console.error("Failed to fetch dashboard data:", error);
//         console.log("Error details:", error);
//         setError(error.message);
//         // Set empty arrays as fallback
//         setCourses([]);
//         setOrders([]);
//         setStudents([]);
//         setCategories([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Dynamic metrics calculations with safety checks
//   const totalStudents = Array.isArray(students) ? students.length : 0;
//   const totalOrders = Array.isArray(orders) ? orders.length : 0;
//   const totalCourses = Array.isArray(courses) ? courses.length : 0;
//   const totalCategories = Array.isArray(categories) ? categories.length : 0;

//   // Calculate course distribution by category
//   const coursesByCategory = Array.isArray(categories) ? categories.map(category => {
//     const coursesInCategory = Array.isArray(courses) ? courses.filter(course => 
//       course.categoryIds && course.categoryIds.includes(category._id)
//     ).length : 0;
//     return {
//       categoryName: category.categoryName,
//       courseCount: coursesInCategory,
//       percentage: totalCourses > 0 ? ((coursesInCategory / totalCourses) * 100).toFixed(1) : 0
//     };
//   }).slice(0, 5) : []; // Top 5 categories

//   // Calculate course distribution by mode
//   const courseModeDistribution = Array.isArray(courses) ? courses.reduce((acc, course) => {
//     const mode = course.mode || 'Unknown';
//     acc[mode] = (acc[mode] || 0) + 1;
//     return acc;
//   }, {}) : {};

//   // Student enrollment trends (simplified)
//   const recentStudents = Array.isArray(students) ? students.filter(student => {
//     const createdAt = new Date(student.createdAt);
//     const thirtyDaysAgo = new Date();
//     thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
//     return createdAt >= thirtyDaysAgo;
//   }).length : 0;

//   // Calculate growth percentages
//   const studentGrowth = totalStudents > 0 ? ((recentStudents / totalStudents) * 100).toFixed(1) : 0;
//   const courseGrowth = totalCourses > 0 ? ((totalCourses / Math.max(totalCategories, 1)) * 10).toFixed(1) : 0;
//   const orderGrowth = totalOrders > 0 ? ((totalOrders / Math.max(totalStudents, 1)) * 100).toFixed(1) : 0;

//   // Social media metrics (placeholder - replace with actual data if available)
//   const socialMetrics = [
//     { name: "Facebook", growth: `+${(totalStudents % 10 + 2)}.5%` },
//     { name: "Instagram", growth: `+${(totalCourses % 10 + 1)}.3%` },
//     { name: "Whatsapp", growth: totalOrders > totalStudents ? `-${(totalOrders % 10 + 1)}.6%` : `+${(totalOrders % 10 + 1)}.6%` },
//     { name: "Twitter", growth: "+7.1%" },
//     { name: "Youtube", growth: `+${(totalCategories % 10 + 3)}.2%` }
//   ];

//   if (loading) {
//     return (
//       <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
//         <div className="spinner-border text-primary" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         <strong>Error:</strong> {error}
//       </div>
//     );
//   }

//   return (
//     <div>
     

//       <div className="row">
//         {/* Left Chart */}
//         <div className="col-xl-8">
//           <div className="card">
//             <div className="card-body">
//               <div className="d-flex flex-wrap align-items-center mb-4">
//                 <h5 className="card-title me-2">Student & Leads Analytics</h5>
//                 <div className="ms-auto">
//                   <div>
//                     <button type="button" className="btn btn-soft-primary btn-sm">ALL</button>
//                     <button type="button" className="btn btn-soft-secondary btn-sm">1M</button>
//                     <button type="button" className="btn btn-soft-secondary btn-sm">6M</button>
//                     <button type="button" className="btn btn-soft-secondary btn-sm">1Y</button>
//                   </div>
//                 </div>
//               </div>

//               <div className="row align-items-center">
//                 <div className="col-xl-8">
//                   <img src="./assets2/images/users/graphbar.PNG" alt="Bar Graph" />
//                   <div className="mt-3">
//                     <div className="row text-center">
//                       <div className="col-4">
//                         <p className="text-muted mb-1">Recent Students (30 days)</p>
//                         <h5 className="mb-0">{recentStudents}</h5>
//                       </div>
//                       <div className="col-4">
//                         <p className="text-muted mb-1">Avg Students/Course</p>
//                         <h5 className="mb-0">{totalCourses > 0 ? Math.round(totalStudents / totalCourses) : 0}</h5>
//                       </div>
//                       <div className="col-4">
//                         <p className="text-muted mb-1">Enrollment Rate</p>
//                         <h5 className="mb-0">{studentGrowth}%</h5>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="col-xl-4">
//                   <div className="p-4">
//                     <h6 className="mb-3">Social Media Performance</h6>
//                     {socialMetrics.map((metric, index) => (
//                       <div className="mt-3" key={index}>
//                         <div className="d-flex align-items-center">
//                           <div className="avatar-sm m-auto">
//                             <span className="avatar-title rounded-circle bg-light-subtle text-dark font-size-16">
//                               {index + 1}
//                             </span>
//                           </div>
//                           <div className="flex-grow-1 ms-3">
//                             <span className="font-size-16">{metric.name}</span>
//                           </div>
//                           <div className="flex-shrink-0">
//                             <span className={`badge rounded-pill ${metric.growth.startsWith('+') ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'} font-size-12 fw-medium`}>
//                               {metric.growth}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     ))}

//                     <div className="mt-4 pt-2">
//                       <a href="#" className="btn btn-primary w-100">
//                         View All <i className="mdi mdi-arrow-right ms-1"></i>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Pie Chart */}
//         <div className="col-xl-4">
//           <div className="card">
//             <div className="card-body">
//               <div className="d-flex flex-wrap align-items-center mb-4">
//                 <h5 className="card-title me-2">Course Distribution</h5>
//                 <div className="ms-auto">
//                   <div className="dropdown">
//                     <a
//                       className="dropdown-toggle text-reset"
//                       href="#"
//                       data-bs-toggle="dropdown"
//                     >
//                       <span className="text-muted font-size-12">Sort By:</span>{" "}
//                       <span className="fw-medium">Category <i className="mdi mdi-chevron-down ms-1"></i></span>
//                     </a>
//                     <div className="dropdown-menu dropdown-menu-end">
//                       <a className="dropdown-item" href="#">Category</a>
//                       <a className="dropdown-item" href="#">Mode</a>
//                       <a className="dropdown-item" href="#">Price</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <img src="./assets2/images/users/graphpie.PNG" alt="Pie Graph" height="250" />

//               <div className="px-2 py-2">
//                 <h6 className="mb-3">Top Course Categories</h6>
//                 {coursesByCategory.length > 0 ? coursesByCategory.map((category, index) => (
//                   <div key={index} className="mb-3">
//                     <p className="mb-1">
//                       {category.categoryName} 
//                       <span className="float-end">{category.courseCount} courses ({category.percentage}%)</span>
//                     </p>
//                     <div className="progress mt-2" style={{ height: 6 }}>
//                       <div
//                         className="progress-bar progress-bar-striped bg-primary"
//                         role="progressbar"
//                         style={{ width: `${Math.min(category.percentage, 100)}%` }}
//                         aria-valuenow={category.percentage}
//                         aria-valuemin="0"
//                         aria-valuemax="100"
//                       ></div>
//                     </div>
//                   </div>
//                 )) : (
//                   <div className="text-center text-muted">
//                     <p>No category data available</p>
//                   </div>
//                 )}

//                 {/* Course Mode Distribution */}
//                 <div className="mt-4">
//                   <h6 className="mb-3">Course Modes</h6>
//                   {Object.entries(courseModeDistribution).map(([mode, count], index) => (
//                     <div key={index} className="mb-2">
//                       <div className="d-flex justify-content-between">
//                         <span className="font-size-14">{mode}</span>
//                         <span className="font-size-14 fw-medium">{count} courses</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashsub2;

import React, { useEffect, useState } from "react";

function Dashsub2() {
  const [courses, setCourses] = useState([]);
  const [orders, setOrders] = useState([]);
  const [students, setStudents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [coursesRes, ordersRes, studentsRes, categoriesRes] = await Promise.all([
          fetch("http://localhost:8080/api/courses"),
          fetch("http://localhost:8080/api/orders"),
          fetch("http://localhost:8080/api/students"),
          fetch("http://localhost:8080/api/categories"),
        ]);

        if (!coursesRes.ok || !ordersRes.ok || !studentsRes.ok || !categoriesRes.ok) {
          throw new Error('Failed to fetch data from one or more endpoints');
        }

        const coursesData = await coursesRes.json();
        const ordersData = await ordersRes.json();
        const studentsData = await studentsRes.json();
        const categoriesData = await categoriesRes.json();

        // Handle different response formats - sometimes APIs return {data: [...]} or just [...]
        setCourses(Array.isArray(coursesData) ? coursesData : coursesData.data || []);
        setOrders(Array.isArray(ordersData) ? ordersData : ordersData.data || []);
        setStudents(Array.isArray(studentsData) ? studentsData : studentsData.data || []);
        setCategories(Array.isArray(categoriesData) ? categoriesData : categoriesData.data || []);
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
        console.log("Error details:", error);
        setError(error.message);
        // Set empty arrays as fallback
        setCourses([]);
        setOrders([]);
        setStudents([]);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Dynamic metrics calculations with safety checks
  const totalStudents = Array.isArray(students) ? students.length : 0;
  const totalOrders = Array.isArray(orders) ? orders.length : 0;
  const totalCourses = Array.isArray(courses) ? courses.length : 0;
  const totalCategories = Array.isArray(categories) ? categories.length : 0;

  // Calculate course distribution by category
  const coursesByCategory = Array.isArray(categories) ? categories.map(category => {
    const coursesInCategory = Array.isArray(courses) ? courses.filter(course => 
      course.categoryIds && course.categoryIds.includes(category._id)
    ).length : 0;
    return {
      categoryName: category.categoryName,
      courseCount: coursesInCategory,
      percentage: totalCourses > 0 ? ((coursesInCategory / totalCourses) * 100).toFixed(1) : 0
    };
  }).slice(0, 5) : []; // Top 5 categories

  // Calculate course distribution by mode
  const courseModeDistribution = Array.isArray(courses) ? courses.reduce((acc, course) => {
    const mode = course.mode || 'Unknown';
    acc[mode] = (acc[mode] || 0) + 1;
    return acc;
  }, {}) : {};

  // Student enrollment trends (simplified)
  const recentStudents = Array.isArray(students) ? students.filter(student => {
    const createdAt = new Date(student.createdAt);
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return createdAt >= thirtyDaysAgo;
  }).length : 0;

  // Calculate growth percentages
  const studentGrowth = totalStudents > 0 ? ((recentStudents / totalStudents) * 100).toFixed(1) : 0;
  const courseGrowth = totalCourses > 0 ? ((totalCourses / Math.max(totalCategories, 1)) * 10).toFixed(1) : 0;
  const orderGrowth = totalOrders > 0 ? ((totalOrders / Math.max(totalStudents, 1)) * 100).toFixed(1) : 0;

  // Social media metrics (placeholder - replace with actual data if available)
  const socialMetrics = [
    { name: "Facebook", growth: `+${(totalStudents % 10 + 2)}.5%` },
    { name: "Instagram", growth: `+${(totalCourses % 10 + 1)}.3%` },
    { name: "Whatsapp", growth: totalOrders > totalStudents ? `-${(totalOrders % 10 + 1)}.6%` : `+${(totalOrders % 10 + 1)}.6%` },
    { name: "Twitter", growth: "+7.1%" },
    { name: "Youtube", growth: `+${(totalCategories % 10 + 3)}.2%` }
  ];

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        <strong>Error:</strong> {error}
      </div>
    );
  }

  return (
    <div>


      <div className="row">
        {/* Left Chart */}
        <div className="col-xl-8">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-wrap align-items-center mb-4">
                <h5 className="card-title me-2">Student & Leads Analytics</h5>
                <div className="ms-auto">
                  <div>
                    <button type="button" className="btn btSales Breakdownn-soft-primary btn-sm">ALL</button>
                    <button type="button" className="btn btn-soft-secondary btn-sm">1M</button>
                    <button type="button" className="btn btn-soft-secondary btn-sm">6M</button>
                    <button type="button" className="btn btn-soft-secondary btn-sm">1Y</button>
                  </div>
                </div>
              </div>

              <div className="row align-items-center">
                <div className="col-xl-8">
                  <img src="./assets2/images/users/graphbar.PNG" alt="Bar Graph" />
                  <div className="mt-3">
                    {/* <div className="row text-center">
                      <div className="col-4">
                        <p className="text-muted mb-1">Recent Students (30 days)</p>
                        <h5 className="mb-0">{recentStudents}</h5>
                      </div>
                      <div className="col-4">
                        <p className="text-muted mb-1">Avg Students/Course</p>
                        <h5 className="mb-0">{totalCourses > 0 ? Math.round(totalStudents / totalCourses) : 0}</h5>
                      </div>
                      <div className="col-4">
                        <p className="text-muted mb-1">Enrollment Rate</p>
                        <h5 className="mb-0">{studentGrowth}%</h5>
                      </div>
                    </div> */}
                  </div>
                </div>

                <div className="col-xl-4">
                  <div className="p-4">
                    <h6 className="mb-3">Social Media Performance</h6>
                    {socialMetrics.map((metric, index) => (
                      <div className="mt-3" key={index}>
                        <div className="d-flex align-items-center">
                          <div className="avatar-sm m-auto">
                            <span className="avatar-title rounded-circle bg-light-subtle text-dark font-size-16">
                              {index + 1}
                            </span>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <span className="font-size-16">{metric.name}</span>
                          </div>
                          <div className="flex-shrink-0">
                            <span className={`badge rounded-pill ${metric.growth.startsWith('+') ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'} font-size-12 fw-medium`}>
                              {metric.growth}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="mt-4 pt-2">
                      <a href="#" className="btn btn-primary w-100">
                        View All <i className="mdi mdi-arrow-right ms-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Pie Chart */}
        <div className="col-xl-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-wrap align-items-center mb-4">
                <h5 className="card-title me-2">Course Distribution</h5>
                <div className="ms-auto">
                  <div className="dropdown">
                    <a
                      className="dropdown-toggle text-reset"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      <span className="text-muted font-size-12">Sort By:</span>{" "}
                      <span className="fw-medium">Category <i className="mdi mdi-chevron-down ms-1"></i></span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="#">Category</a>
                      <a className="dropdown-item" href="#">Mode</a>
                      <a className="dropdown-item" href="#">Price</a>
                    </div>
                  </div>
                </div>
              </div>

              <img src="./assets2/images/users/graphpie.PNG" alt="Pie Graph" height="250" />

              <div className="px-2 py-2">
                <h6 className="mb-3">Student Batches by Category</h6>
                {coursesByCategory.length > 0 ? coursesByCategory.map((category, index) => (
                  <div key={index} className="mb-3">
                    <p className="mb-1">
                      {category.categoryName} 
                      <span className="float-end">{category.percentage}%</span>
                    </p>
                    <div className="progress mt-2" style={{ height: 6 }}>
                      <div
                        className="progress-bar progress-bar-striped bg-primary"
                        role="progressbar"
                        style={{ width: `${category.percentage}%` }}
                        aria-valuenow={category.percentage}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                )) : (
                  <div className="text-center text-muted">
                    <p>No category data available</p>
                  </div>
                )}

                <div className="mt-4">
                  <div className="mb-3">
                    <p className="mb-1">
                      Total Expenses
                      <span className="float-end">{totalOrders > 0 ? (totalOrders * 5) : 0}%</span>
                    </p>
                    <div className="progress mt-2" style={{ height: 6 }}>
                      <div
                        className="progress-bar progress-bar-striped bg-warning"
                        role="progressbar"
                        style={{ width: `${totalOrders > 0 ? Math.min(totalOrders * 5, 100) : 0}%` }}
                        aria-valuenow={totalOrders * 5}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashsub2;


// import React, { useEffect, useState } from "react";
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

// function Dashsub2() {
//   const [courses, setCourses] = useState([]);
//   const [orders, setOrders] = useState([]);
//   const [students, setStudents] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const [coursesRes, ordersRes, studentsRes, categoriesRes] = await Promise.all([
//           fetch("/api/courses"),
//           fetch("/api/orders"),
//           fetch("/api/students"),
//           fetch("/api/categories"),
//         ]);

//         if (!coursesRes.ok || !ordersRes.ok || !studentsRes.ok || !categoriesRes.ok) {
//           throw new Error('Failed to fetch data from one or more endpoints');
//         }

//         const coursesData = await coursesRes.json();
//         const ordersData = await ordersRes.json();
//         const studentsData = await studentsRes.json();
//         const categoriesData = await categoriesRes.json();

//         // Handle different response formats
//         setCourses(Array.isArray(coursesData) ? coursesData : coursesData.data || []);
//         setOrders(Array.isArray(ordersData) ? ordersData : ordersData.data || []);
//         setStudents(Array.isArray(studentsData) ? studentsData : studentsData.data || []);
//         setCategories(Array.isArray(categoriesData) ? categoriesData : categoriesData.data || []);
//       } catch (error) {
//         console.error("Failed to fetch dashboard data:", error);
//         setError(error.message);
//         // Set empty arrays as fallback
//         setCourses([]);
//         setOrders([]);
//         setStudents([]);
//         setCategories([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Calculate metrics
//   const totalStudents = Array.isArray(students) ? students.length : 0;
//   const totalOrders = Array.isArray(orders) ? orders.length : 0;
//   const totalCourses = Array.isArray(courses) ? courses.length : 0;
//   const totalCategories = Array.isArray(categories) ? categories.length : 0;

//   // Prepare student enrollment data by month
//   const getStudentEnrollmentData = () => {
//     if (!Array.isArray(students)) return [];
    
//     const monthlyData = {};
//     const currentDate = new Date();
    
//     // Initialize last 6 months
//     for (let i = 5; i >= 0; i--) {
//       const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
//       const monthKey = date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
//       monthlyData[monthKey] = { month: monthKey, students: 0, leads: 0 };
//     }
    
//     // Count students by month
//     students.forEach(student => {
//       const createdDate = new Date(student.createdAt);
//       const monthKey = createdDate.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
//       if (monthlyData[monthKey]) {
//         monthlyData[monthKey].students += 1;
//         // Assuming students with certain references are leads
//         if (student.reference && student.reference !== '') {
//           monthlyData[monthKey].leads += 1;
//         }
//       }
//     });
    
//     return Object.values(monthlyData);
//   };

//   // Calculate course distribution by category
//   const getCourseDistributionData = () => {
//     if (!Array.isArray(categories) || !Array.isArray(courses)) return [];
    
//     const categoryData = categories.map(category => {
//       const coursesInCategory = courses.filter(course => 
//         course.categoryIds && course.categoryIds.includes(category._id)
//       ).length;
      
//       return {
//         name: category.categoryName || 'Unknown',
//         value: coursesInCategory,
//         percentage: totalCourses > 0 ? ((coursesInCategory / totalCourses) * 100).toFixed(1) : 0
//       };
//     }).filter(item => item.value > 0);
    
//     return categoryData.slice(0, 5); // Top 5 categories
//   };

//   // Recent students calculation
//   const recentStudents = Array.isArray(students) ? students.filter(student => {
//     const createdAt = new Date(student.createdAt);
//     const thirtyDaysAgo = new Date();
//     thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
//     return createdAt >= thirtyDaysAgo;
//   }).length : 0;

//   // Calculate growth percentages
//   const studentGrowth = totalStudents > 0 ? ((recentStudents / totalStudents) * 100).toFixed(1) : 0;

//   // Social media metrics based on student references - specific platforms only
//   const getSocialMetrics = () => {
//     if (!Array.isArray(students)) return [];
    
//     const referenceCount = {
//       'Twitter': 0,
//       'Whatsapp': 0,
//       'Instagram': 0,
//       'Facebook': 0
//     };
    
//     // Count students by reference
//     students.forEach(student => {
//       if (student.reference && student.reference.trim() !== '') {
//         const ref = student.reference.trim();
//         if (referenceCount.hasOwnProperty(ref)) {
//           referenceCount[ref] += 1;
//         }
//       }
//     });
    
//     // Convert to array format for display
//     const socialPlatforms = ['Twitter', 'Whatsapp', 'Instagram', 'Facebook'];
//     return socialPlatforms.map((platform) => {
//       const count = referenceCount[platform];
//       const percentage = totalStudents > 0 ? (count / totalStudents * 100).toFixed(1) : 0;
//       const growth = count > 0 ? `+${percentage}%` : '0.0%';
//       return { 
//         name: platform, 
//         growth, 
//         count,
//         percentage: parseFloat(percentage)
//       };
//     });
//   };

//   const studentEnrollmentData = getStudentEnrollmentData();
//   const courseDistributionData = getCourseDistributionData();
//   const socialMetrics = getSocialMetrics();

//   // Colors for pie chart
//   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

//   if (loading) {
//     return (
//       <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
//         <div className="spinner-border text-primary" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         <strong>Error:</strong> {error}
//       </div>
//     );
//   }

//   return (
//     <div>
//       <div className="row">
//         {/* Left Chart */}
//         <div className="col-xl-8">
//           <div className="card">
//             <div className="card-body">
//               <div className="d-flex flex-wrap align-items-center mb-4">
//                 <h5 className="card-title me-2">Student & Leads Analytics</h5>
//                 <div className="ms-auto">
//                   <div>
//                     <button type="button" className="btn btn-soft-primary btn-sm">ALL</button>
//                     <button type="button" className="btn btn-soft-secondary btn-sm">1M</button>
//                     <button type="button" className="btn btn-soft-secondary btn-sm">6M</button>
//                     <button type="button" className="btn btn-soft-secondary btn-sm">1Y</button>
//                   </div>
//                 </div>
//               </div>

//               <div className="row align-items-center">
//                 <div className="col-xl-8">
//                   {/* Dynamic Bar Chart styled like PNG */}
//                   <div style={{ height: '300px', width: '100%', backgroundColor: '#f8f9fa', borderRadius: '8px', padding: '20px' }}>
//                     <ResponsiveContainer width="100%" height="100%">
//                       <BarChart 
//                         data={studentEnrollmentData}
//                         margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
//                       >
//                         <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
//                         <XAxis 
//                           dataKey="month" 
//                           axisLine={false}
//                           tickLine={false}
//                           tick={{ fill: '#666', fontSize: 12 }}
//                         />
//                         <YAxis 
//                           axisLine={false}
//                           tickLine={false}
//                           tick={{ fill: '#666', fontSize: 12 }}
//                         />
//                         <Tooltip 
//                           contentStyle={{ 
//                             backgroundColor: '#fff', 
//                             border: '1px solid #ddd', 
//                             borderRadius: '4px',
//                             boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
//                           }}
//                         />
//                         <Bar 
//                           dataKey="students" 
//                           fill="#4285f4" 
//                           name="Students"
//                           radius={[2, 2, 0, 0]}
//                           maxBarSize={40}
//                         />
//                         <Bar 
//                           dataKey="leads" 
//                           fill="#34a853" 
//                           name="Leads"
//                           radius={[2, 2, 0, 0]}
//                           maxBarSize={40}
//                         />
//                       </BarChart>
//                     </ResponsiveContainer>
//                   </div>
                  
//                   <div className="mt-3">
//                     <div className="row text-center">
//                       <div className="col-4">
//                         <p className="text-muted mb-1">Recent Students (30 days)</p>
//                         <h5 className="mb-0">{recentStudents}</h5>
//                       </div>
//                       <div className="col-4">
//                         <p className="text-muted mb-1">Avg Students/Course</p>
//                         <h5 className="mb-0">{totalCourses > 0 ? Math.round(totalStudents / totalCourses) : 0}</h5>
//                       </div>
//                       <div className="col-4">
//                         <p className="text-muted mb-1">Enrollment Rate</p>
//                         <h5 className="mb-0">{studentGrowth}%</h5>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="col-xl-4">
//                   <div className="p-4">
//                     <h6 className="mb-3">Social Media Performance</h6>
//                     <div className="mb-3">
//                       <small className="text-muted">Debug Info:</small>
//                       <div className="small text-info">
//                         Total Students: {totalStudents}<br/>
//                         Students with References: {students.filter(s => s.reference && s.reference.trim() !== '').length}
//                       </div>
//                     </div>
//                     {socialMetrics.map((metric, index) => (
//                       <div className="mt-3" key={index}>
//                         <div className="d-flex align-items-center">
//                           <div className="avatar-sm m-auto">
//                             <span className="avatar-title rounded-circle bg-light-subtle text-dark font-size-16">
//                               {metric.count}
//                             </span>
//                           </div>
//                           <div className="flex-grow-1 ms-3">
//                             <span className="font-size-16">{metric.name}</span>
//                             <div className="text-muted small">{metric.count} students</div>
//                           </div>
//                           <div className="flex-shrink-0">
//                             <span className={`badge rounded-pill ${metric.count > 0 ? 'bg-success-subtle text-success' : 'bg-secondary-subtle text-secondary'} font-size-12 fw-medium`}>
//                               {metric.growth}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     ))}

//                     <div className="mt-4 pt-2">
//                       <a href="#" className="btn btn-primary w-100">
//                         View All <i className="mdi mdi-arrow-right ms-1"></i>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Pie Chart */}
//         <div className="col-xl-4">
//           <div className="card">
//             <div className="card-body">
//               <div className="d-flex flex-wrap align-items-center mb-4">
//                 <h5 className="card-title me-2">Course Distribution</h5>
//                 <div className="ms-auto">
//                   <div className="dropdown">
//                     <a
//                       className="dropdown-toggle text-reset"
//                       href="#"
//                       data-bs-toggle="dropdown"
//                     >
//                       <span className="text-muted font-size-12">Sort By:</span>{" "}
//                       <span className="fw-medium">Category <i className="mdi mdi-chevron-down ms-1"></i></span>
//                     </a>
//                     <div className="dropdown-menu dropdown-menu-end">
//                       <a className="dropdown-item" href="#">Category</a>
//                       <a className="dropdown-item" href="#">Mode</a>
//                       <a className="dropdown-item" href="#">Price</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Dynamic Pie Chart styled like PNG */}
//               <div style={{ height: '250px', width: '100%', backgroundColor: '#f8f9fa', borderRadius: '8px', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                 <ResponsiveContainer width="100%" height="100%">
//                   <PieChart>
//                     <Pie
//                       data={courseDistributionData}
//                       cx="50%"
//                       cy="50%"
//                       innerRadius={0}
//                       outerRadius={80}
//                       paddingAngle={2}
//                       dataKey="value"
//                     >
//                       {courseDistributionData.map((entry, index) => (
//                         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                       ))}
//                     </Pie>
//                     <Tooltip 
//                       formatter={(value, name) => [`${value} courses`, name]}
//                       contentStyle={{ 
//                         backgroundColor: '#fff', 
//                         border: '1px solid #ddd', 
//                         borderRadius: '4px',
//                         boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
//                       }}
//                     />
//                   </PieChart>
//                 </ResponsiveContainer>
//               </div>

//               <div className="px-2 py-2">
//                 <h6 className="mb-3">Course Distribution by Category</h6>
//                 {courseDistributionData.length > 0 ? courseDistributionData.map((category, index) => (
//                   <div key={index} className="mb-3">
//                     <p className="mb-1">
//                       {category.name} ({category.value} courses)
//                       <span className="float-end">{category.percentage}%</span>
//                     </p>
//                     <div className="progress mt-2" style={{ height: 6 }}>
//                       <div
//                         className="progress-bar progress-bar-striped"
//                         role="progressbar"
//                         style={{ 
//                           width: `${category.percentage}%`, 
//                           backgroundColor: COLORS[index % COLORS.length] 
//                         }}
//                         aria-valuenow={category.percentage}
//                         aria-valuemin="0"
//                         aria-valuemax="100"
//                       ></div>
//                     </div>
//                   </div>
//                 )) : (
//                   <div className="text-center text-muted">
//                     <p>No category data available</p>
//                   </div>
//                 )}

//                 <div className="mt-4">
//                   <div className="mb-3">
//                     <p className="mb-1">
//                       Total Orders
//                       <span className="float-end">{totalOrders}</span>
//                     </p>
//                     <div className="progress mt-2" style={{ height: 6 }}>
//                       <div
//                         className="progress-bar progress-bar-striped bg-warning"
//                         role="progressbar"
//                         style={{ width: `${totalOrders > 0 ? Math.min((totalOrders / totalStudents) * 100, 100) : 0}%` }}
//                         aria-valuenow={totalOrders}
//                         aria-valuemin="0"
//                         aria-valuemax="100"
//                       ></div>
//                     </div>
//                   </div>

//                   <div className="mb-3">
//                     <p className="mb-1">
//                       Active Students
//                       <span className="float-end">{totalStudents}</span>
//                     </p>
//                     <div className="progress mt-2" style={{ height: 6 }}>
//                       <div
//                         className="progress-bar progress-bar-striped bg-success"
//                         role="progressbar"
//                         style={{ width: `${totalStudents > 0 ? Math.min((totalStudents / (totalStudents + 50)) * 100, 100) : 0}%` }}
//                         aria-valuenow={totalStudents}
//                         aria-valuemin="0"
//                         aria-valuemax="100"
//                       ></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashsub2;

