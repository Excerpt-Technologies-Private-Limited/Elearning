// import React, { useState, useEffect } from 'react';
// import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import { useNavigate } from 'react-router-dom';

// const DynamicDashboard = () => {
//   const [courses, setCourses] = useState([]);
//   const [orders, setOrders] = useState([]);
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const navigate = useNavigate();
//   // Fetch data from APIs
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
        
//         const [coursesRes, ordersRes, studentsRes] = await Promise.all([
//           fetch('/api/courses'),
//           fetch('/api/orders'),
//           fetch('/api/students')
//         ]);

//         if (!coursesRes.ok || !ordersRes.ok || !studentsRes.ok) {
//           throw new Error('Failed to fetch data');
//         }

//         const coursesData = await coursesRes.json();
//         const ordersData = await ordersRes.json();
//         const studentsData = await studentsRes.json();

//         // Ensure all data is in array format
//         setCourses(Array.isArray(coursesData) ? coursesData : []);
//         setOrders(Array.isArray(ordersData) ? ordersData : []);
        
//         // Handle students data - could be object or array
//         if (Array.isArray(studentsData)) {
//           setStudents(studentsData);
//         } else if (studentsData && typeof studentsData === 'object') {
//           if (studentsData.students && Array.isArray(studentsData.students)) {
//             setStudents(studentsData.students);
//           } else if (studentsData.data && Array.isArray(studentsData.data)) {
//             setStudents(studentsData.data);
//           } else {
//             setStudents([studentsData]);
//           }
//         } else {
//           setStudents([]);
//         }
//       } catch (err) {
//         setError(err.message);
//         // Fallback to demo data if API fails
//         setCourses([
//           { _id: '1', courseName: 'React Basics', price: '2000', duration: '3', mode: 'Online' },
//           { _id: '2', courseName: 'Node.js Guide', price: '2500', duration: '4', mode: 'Online' },
//           { _id: '3', courseName: 'MongoDB Intro', price: '1800', duration: '2', mode: 'Online' }
//         ]);
//         setOrders([
//           { _id: '1', amount: 24234, status: 'paid', createdAt: new Date().toISOString() },
//           { _id: '2', amount: 18000, status: 'paid', createdAt: new Date().toISOString() }
//         ]);
//         setStudents([
//           { _id: '1', username: 'John Doe', email: 'john@example.com', role: 'student' },
//           { _id: '2', username: 'Jane Smith', email: 'jane@example.com', role: 'student' }
//         ]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Auto-rotate carousel
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % Math.max(courses.length, 3));
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [courses.length]);

//   // Calculate metrics
//   const totalRevenue = Array.isArray(orders) ? orders.reduce((sum, order) => sum + (order.amount || 0), 0) : 0;
//   const courseRevenue = Math.floor(totalRevenue * 0.55);
//   const consultationRevenue = Math.floor(totalRevenue * 0.30);
//   const affiliateRevenue = Math.floor(totalRevenue * 0.15);
//   const totalIncome = Math.floor(totalRevenue / 100);
//   const totalExpenses = Math.floor(totalIncome * 0.35);

//   // Chart data
//   const pieData = [
//     { name: 'Course Sales', value: courseRevenue, color: '#28a745' },
//     { name: 'Consultations', value: consultationRevenue, color: '#007bff' },
//     { name: 'Affiliate Income', value: affiliateRevenue, color: '#17a2b8' }
//   ];

//   const barData = [
//     { name: 'Income', value: totalIncome, color: '#28a745' },
//     { name: 'Expenses', value: totalExpenses, color: '#dc3545' }
//   ];

//   if (loading) {
//     return (
//       <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
//         <div className="text-center">
//           <div className="spinner-border text-primary mb-3" role="status">
//             <span className="visually-hidden">Loading...</span>
//           </div>
//           <p className="text-muted">Loading dashboard data...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <style jsx>{`
//         .card-h-100 {
//           height: 100%;
//         }
//         .widget-carousel .carousel-item {
//           padding: 1.5rem;
//         }
//         .widget-box-1-icon {
//           font-size: 2.5rem;
//           margin-bottom: 1rem;
//         }
//         .carousel-indicators-rounded button {
//           width: 12px;
//           height: 12px;
//           border-radius: 50%;
//           margin: 0 4px;
//         }
//         .btn-soft-primary {
//           background-color: rgba(13, 110, 253, 0.1);
//           border-color: transparent;
//           color: #0d6efd;
//         }
//         .btn-soft-secondary {
//           background-color: rgba(108, 117, 125, 0.1);
//           border-color: transparent;
//           color: #6c757d;
//         }
//         .text-success { color: #28a745 !important; }
//         .text-primary { color: #007bff !important; }
//         .text-info { color: #17a2b8 !important; }
//         .mdi {
//           font-family: 'Material Design Icons';
//         }
//         .mdi-circle:before { content: "●"; }
//         .mdi-arrow-right:before { content: "→"; }
//         .mdi-react:before { content: "⚛"; }
//         .mdi-nodejs:before { content: "⬢"; }
//         .mdi-database:before { content: "🗄"; }
//         .avatar-title {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           width: 100%;
//           height: 100%;
//         }
//         .bg-light-subtle {
//           background-color: rgba(248, 249, 250, 0.5) !important;
//         }
//       `}</style>

//       {error && (
//         <div className="alert alert-warning mb-4">
//           <strong>⚠️ API Connection Issue:</strong> Using demo data - {error}
//         </div>
//       )}

//       <div className="row">
//         <div className="col-xl-5">
//           {/* Earnings Card */}
//           <div className="card card-h-100">
//             <div className="card-body">
//               <div className="d-flex flex-wrap align-items-center mb-4">
//                 <h5 className="card-title me-2">Earnings for June 2025</h5>
//                 <div className="ms-auto">
//                   <div>
//                     <button type="button" className="btn btn-soft-secondary btn-sm me-1">ALL</button>
//                     <button type="button" className="btn btn-soft-primary btn-sm me-1">1M</button>
//                     <button type="button" className="btn btn-soft-secondary btn-sm me-1">6M</button>
//                     <button type="button" className="btn btn-soft-secondary btn-sm">1Y</button>
//                   </div>
//                 </div>
//               </div>

//               <div className="row align-items-center">
//                 <div className="col-sm">
//                   <div style={{ width: '100%', height: '250px' }}>
//                     <ResponsiveContainer width="100%" height="100%">
//                       <PieChart>
//                         <Pie
//                           data={pieData}
//                           cx="50%"
//                           cy="50%"
//                           innerRadius={40}
//                           outerRadius={80}
//                           paddingAngle={5}
//                           dataKey="value"
//                         >
//                           {pieData.map((entry, index) => (
//                             <Cell key={`cell-${index}`} fill={entry.color} />
//                           ))}
//                         </Pie>
//                         <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
//                       </PieChart>
//                     </ResponsiveContainer>
//                   </div>
//                 </div>
//                 <div className="col-sm align-self-center">
//                   <div className="mt-4 mt-sm-0">
//                     <div>
//                       <p className="mb-2">
//                         <i className="mdi mdi-circle align-middle font-size-10 me-2 text-success"></i>
//                         Course Sales
//                       </p>
//                       <h6>₹{courseRevenue.toLocaleString()}</h6>
//                     </div>

//                     <div className="mt-4 pt-2">
//                       <p className="mb-2">
//                         <i className="mdi mdi-circle align-middle font-size-10 me-2 text-primary"></i>
//                         Consultations
//                       </p>
//                       <h6>₹{consultationRevenue.toLocaleString()}</h6>
//                     </div>

//                     <div className="mt-4 pt-2">
//                       <p className="mb-2">
//                         <i className="mdi mdi-circle align-middle font-size-10 me-2 text-info"></i>
//                         Affiliate Income
//                       </p>
//                       <h6>₹{affiliateRevenue.toLocaleString()}</h6>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="col-xl-7">
//           <div className="row">
//             <div className="col-xl-8">
//               {/* Income and Expenses Card */}
//               <div className="card card-h-100">
//                 <div className="card-body">
//                   <div className="d-flex flex-wrap align-items-center mb-4">
//                     <h5 className="card-title me-2">Income and Expenses for 2025</h5>
//                     <div className="ms-auto">
//                       <select className="form-select form-select-sm" defaultValue="JUN">
//                         <option value="JUN">June</option>
//                         <option value="MAY">May</option>
//                         <option value="APR">April</option>
//                         <option value="MAR">March</option>
//                         <option value="FEB">February</option>
//                         <option value="JAN">January</option>
//                       </select>
//                     </div>
//                   </div>

//                   <div className="row align-items-center">
//                     <div className="col-sm">
//                       <div style={{ width: '100%', height: '200px' }}>
//                         <ResponsiveContainer width="100%" height="100%">
//                           <BarChart data={barData}>
//                             <CartesianGrid strokeDasharray="3 3" />
//                             <XAxis dataKey="name" />
//                             <YAxis />
//                             <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
//                             <Bar dataKey="value" fill={(entry) => entry.color} />
//                           </BarChart>
//                         </ResponsiveContainer>
//                       </div>
//                     </div>
//                     <div className="col-sm align-self-center">
//                       <div className="mt-4 mt-sm-0">
//                         <div className="row g-0">
//                           <div className="col-6">
//                             <div>
//                               <p className="mb-2 text-muted text-uppercase font-size-11">Income</p>
//                               <h5 className="fw-medium">₹ {totalIncome.toLocaleString()}</h5>
//                             </div>
//                           </div>
//                           <div className="col-6">
//                             <div>
//                               <p className="mb-2 text-muted text-uppercase font-size-11">Expenses</p>
//                               <h5 className="fw-medium">-₹ {totalExpenses.toLocaleString()}</h5>
//                             </div>
//                           </div>
//                         </div>

//                         <div className="mt-2">
//                           <button className="btn btn-primary btn-sm">
//                             View more <i className="mdi mdi-arrow-right ms-1"></i>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-xl-4">
//               {/* Course Carousel */}
//               <div className="card bg-primary text-white shadow-primary card-h-100">
//                 <div className="card-body p-0">
//                   <div className="carousel slide text-center widget-carousel">
//                     <div className="carousel-inner">
//                       {Array.isArray(courses) && courses.length > 0 ? courses.map((course, index) => (
//                         <div 
//                           key={course._id} 
//                           className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
//                         >
//                           <div className="text-center p-4">
//                             <i className="mdi mdi-react widget-box-1-icon"></i>
//                             <div className="avatar-md m-auto">
//                               <span className="avatar-title rounded-circle bg-light-subtle text-white font-size-24">
//                                 <i className="mdi mdi-react"></i>
//                               </span>
//                             </div>
//                             <h4 className="mt-3 lh-base fw-normal text-white">
//                               <b>{course.courseName}</b>
//                             </h4>
//                             <p className="text-white-50 font-size-13">
//                               {course.description || `Learn ${course.courseName} with comprehensive coverage of all topics. Duration: ${course.duration} weeks.`}
//                             </p>
//                             <p className="text-white-50 small mb-3">
//                               <strong>Price: ₹{course.price}</strong> • {course.mode} • {course.duration} weeks
//                             </p>
//                             <button
//       type="button"
//       className="btn btn-light btn-sm"
//       onClick={() => navigate('/AllCourse')}
//     >
//       View details <i className="mdi mdi-arrow-right ms-1"></i>
//     </button>
//                           </div>
//                         </div>
//                       )) : (
//                         <div className="carousel-item active">
//                           <div className="text-center p-4">
//                             <i className="mdi mdi-database widget-box-1-icon"></i>
//                             <div className="avatar-md m-auto">
//                               <span className="avatar-title rounded-circle bg-light-subtle text-white font-size-24">
//                                 <i className="mdi mdi-database"></i>
//                               </span>
//                             </div>
//                             <h4 className="mt-3 lh-base fw-normal text-white">
//                               <b>No Courses</b> Available
//                             </h4>
//                             <p className="text-white-50 font-size-13">
//                               Start creating courses to see them displayed here.
//                             </p>
//                             <button type="button" className="btn btn-light btn-sm">
//                               Add Course <i className="mdi mdi-arrow-right ms-1"></i>
//                             </button>
//                           </div>
//                         </div>
//                       )}
//                     </div>

//                     {Array.isArray(courses) && courses.length > 1 && (
//                       <div className="carousel-indicators carousel-indicators-rounded">
//                         {courses.map((_, index) => (
//                           <button
//                             key={index}
//                             type="button"
//                             className={index === currentSlide ? 'active' : ''}
//                             onClick={() => setCurrentSlide(index)}
//                           ></button>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

     
//     </div>
//   );
// };

// export default DynamicDashboard;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Dashsub1() {
//   const [student, setStudent] = useState(null);
//   const [orders, setOrders] = useState([]);
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Use userId from localStorage
//   const currentUserId = localStorage.getItem('userId');

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         // 1. Get all students, find current user
//         const studentsRes = await axios.get('/api/students');
//         const user = studentsRes.data.find(s => s._id.$oid === currentUserId);

//         setStudent(user);

//         // 2. Get all orders for this user
//         const ordersRes = await axios.get('/api/orders');
//         const userOrders = ordersRes.data.filter(
//           order => order.userId.$oid === currentUserId
//         );
//         setOrders(userOrders);

//         // 3. Fetch all courses, then filter to those enrolled
//         // NOTE: You may need to update this endpoint if it's not correct
//         const coursesRes = await axios.get('/api/studentsrouter.get/');
//         // Only courses matching user's courseIds
//         const courseList = coursesRes.data.filter(course =>
//           user.courseIds.some(cid => cid.$oid === course._id.$oid)
//         );
//         setCourses(courseList);
//       } catch (err) {
//         console.error('Load failed', err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     if (currentUserId) {
//       fetchData();
//     } else {
//       setLoading(false);
//     }
//   }, [currentUserId]);

//   // Earnings calculation example (sum paid order amounts)
//   const totalEarnings = orders.reduce(
//     (sum, o) => (o.status === 'paid' ? sum + o.amount : sum),
//     0
//   );

//   // Pie data for product types
//   const productTypes = {};
//   orders.forEach(order => {
//     order.products.forEach(product => {
//       productTypes[product.title] = (productTypes[product.title] || 0) + product.price;
//     });
//   });

//   if (loading) return <div>Loading...</div>;
//   if (!student) return <div>No student found. Please log in.</div>;

//   return (
//     <div className="container py-4">
//       <div className="row g-4">

//         {/* Profile Card */}
//         <div className="col-xl-3">
//           <div className="card text-center">
//             <img
//               src={
//                 student.profilePhoto
//                   ? `/${student.profilePhoto.replaceAll("\\", "/")}`
//                   : "https://via.placeholder.com/150"
//               }
//               alt="Profile"
//               className="card-img-top"
//               style={{ height: 150, objectFit: "cover" }}
//             />
//             <div className="card-body">
//               <h5 className="card-title">{student.username}</h5>
//               <p className="card-text">{student.email}</p>
//               <p className="text-muted">{student.department}, Semester {student.semester}</p>
//               <p className="mb-1">
//                 <i className="mdi mdi-map-marker"></i>
//                 {student.city}, {student.state}
//               </p>
//               <p className="mb-0"><b>Student ID:</b> {student.studentId}</p>
//             </div>
//           </div>
//         </div>

//         {/* Earnings and Orders */}
//         <div className="col-xl-5">
//           <div className="card h-100">
//             <div className="card-body">
//               <h5 className="card-title mb-3">Earnings (Paid Orders)</h5>
//               <h2 className="mb-3 text-primary">₹{totalEarnings.toLocaleString()}</h2>
//               <div className="mb-2">
//                 <b>Order Count:</b> {orders.length}
//               </div>
//               <div>
//                 <b>Breakdown:</b>
//                 <ul>
//                   {Object.entries(productTypes).map(([type, amount]) => (
//                     <li key={type}>{type}: ₹{amount.toLocaleString()}</li>
//                   ))}
//                 </ul>
//               </div>
//               <hr />
//               <div>
//                 <b>Recent Orders</b>
//                 <ul className="list-group list-group-flush">
//                   {orders.slice(0, 3).map(order => (
//                     <li key={order._id.$oid} className="list-group-item">
//                       #{order.orderId} — ₹{order.amount} — {new Date(order.createdAt.$date).toLocaleDateString()}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Courses Carousel */}
//         <div className="col-xl-4">
//           <div className="card h-100">
//             <div className="card-body">
//               <h5 className="card-title mb-3">My Courses</h5>
//               {courses.length === 0 && <div>No courses enrolled.</div>}
//               <div className="d-flex flex-nowrap overflow-auto" style={{ gap: 16 }}>
//                 {courses.map(course => (
//                   <div key={course._id.$oid} className="card" style={{ minWidth: 200 }}>
//                     <img
//                       src={
//                         course.courseImages && course.courseImages[0]
//                           ? `/${course.courseImages[0]}`
//                           : "https://via.placeholder.com/200x100"
//                       }
//                       alt={course.courseName}
//                       style={{ width: "100%", height: 100, objectFit: "cover" }}
//                     />
//                     <div className="card-body p-2">
//                       <h6 className="card-title mb-1">{course.courseName}</h6>
//                       <span className="badge bg-secondary mb-1">{course.mode}</span>
//                       <p className="card-text" style={{ fontSize: 12 }}>
//                         {course.description}
//                       </p>
//                       <div className="text-muted" style={{ fontSize: 11 }}>
//                         Price: ₹{course.price}
//                       </div>
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

// export default Dashsub1;



// import React, { useState, useEffect } from 'react';
// import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const DynamicDashboard = () => {
//   const [courses, setCourses] = useState([]);
//   const [orders, setOrders] = useState([]);
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Fetch data from APIs
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
        
//         const [coursesRes, ordersRes, studentsRes] = await Promise.all([
//           fetch('/api/courses'),
//           fetch('/api/orders'),
//           fetch('/api/students')
//         ]);

//         if (!coursesRes.ok || !ordersRes.ok || !studentsRes.ok) {
//           throw new Error('Failed to fetch data');
//         }

//         const coursesData = await coursesRes.json();
//         const ordersData = await ordersRes.json();
//         const studentsData = await studentsRes.json();

//         // Ensure all data is in array format
//         setCourses(Array.isArray(coursesData) ? coursesData : []);
//         setOrders(Array.isArray(ordersData) ? ordersData : []);
        
//         // Handle students data - could be object or array
//         if (Array.isArray(studentsData)) {
//           setStudents(studentsData);
//         } else if (studentsData && typeof studentsData === 'object') {
//           if (studentsData.students && Array.isArray(studentsData.students)) {
//             setStudents(studentsData.students);
//           } else if (studentsData.data && Array.isArray(studentsData.data)) {
//             setStudents(studentsData.data);
//           } else {
//             setStudents([studentsData]);
//           }
//         } else {
//           setStudents([]);
//         }
//       } catch (err) {
//         setError(err.message);
//         // Fallback to demo data if API fails
//         setCourses([
//           { _id: '1', courseName: 'React Basics', price: '2000', duration: '3', mode: 'Online' },
//           { _id: '2', courseName: 'Node.js Guide', price: '2500', duration: '4', mode: 'Online' },
//           { _id: '3', courseName: 'MongoDB Intro', price: '1800', duration: '2', mode: 'Online' }
//         ]);
//         setOrders([
//           { _id: '1', amount: 24234, status: 'paid', createdAt: new Date().toISOString() },
//           { _id: '2', amount: 18000, status: 'paid', createdAt: new Date().toISOString() },
//           { _id: '3', amount: 15000, status: 'paid', createdAt: new Date().toISOString() }
//         ]);
//         setStudents([
//           { _id: '1', username: 'John Doe', email: 'john@example.com', role: 'student' },
//           { _id: '2', username: 'Jane Smith', email: 'jane@example.com', role: 'student' },
//           { _id: '3', username: 'Mike Johnson', email: 'mike@example.com', role: 'student' }
//         ]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Auto-rotate carousel
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % Math.max(courses.length, 3));
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [courses.length]);

//   // Calculate real metrics from API data
//   const totalSalesAmount = Array.isArray(orders) ? 
//     orders.filter(order => order.status === 'paid')
//           .reduce((sum, order) => sum + (order.amount || 0), 0) : 0;
  
//   const totalStudents = Array.isArray(students) ? students.length : 0;
//   const paidStudents = Array.isArray(students) ? 
//     students.filter(student => student.role === 'student').length : 0;

//   // Break down sales by categories (you can modify these percentages based on your business logic)
//   const courseRevenue = Math.floor(totalSalesAmount * 0.70); // 70% from courses
//   const consultationRevenue = Math.floor(totalSalesAmount * 0.20); // 20% from consultations
//   const affiliateRevenue = Math.floor(totalSalesAmount * 0.10); // 10% from affiliate

//   // Calculate income and expenses
//   const totalIncome = totalSalesAmount;
//   const totalExpenses = Math.floor(totalIncome * 0.40); // Assuming 40% expenses
//   const netProfit = totalIncome - totalExpenses;

//   // Chart data for Earnings (Pie Chart)
//   const pieData = [
//     { name: 'totalSalesAmount', value: totalSalesAmount, color: '#28a745' },
//     { name: 'Consultations', value:  paidStudents, color: '#007bff' },
//     { name: 'Affiliate Income', value: affiliateRevenue, color: '#17a2b8' }
//   ];

//   // Chart data for Income/Expenses (Bar Chart)
//   const barData = [
//     { name: 'Total Income', value: Math.floor(totalIncome / 1000), color: '#28a745' },
//     { name: 'Total Expenses', value: Math.floor(totalExpenses / 1000), color: '#dc3545' },
//     { name: 'Net Profit', value: Math.floor(netProfit / 1000), color: '#ffc107' }
//   ];

//   if (loading) {
//     return (
//       <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
//         <div className="text-center">
//           <div className="spinner-border text-primary mb-3" role="status">
//             <span className="visually-hidden">Loading...</span>
//           </div>
//           <p className="text-muted">Loading dashboard data...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <style jsx>{`
//         .card-h-100 {
//           height: 100%;
//         }
//         .widget-carousel .carousel-item {
//           padding: 1.5rem;
//         }
//         .widget-box-1-icon {
//           font-size: 2.5rem;
//           margin-bottom: 1rem;
//         }
//         .carousel-indicators-rounded button {
//           width: 12px;
//           height: 12px;
//           border-radius: 50%;
//           margin: 0 4px;
//         }
//         .btn-soft-primary {
//           background-color: rgba(13, 110, 253, 0.1);
//           border-color: transparent;
//           color: #0d6efd;
//         }
//         .btn-soft-secondary {
//           background-color: rgba(108, 117, 125, 0.1);
//           border-color: transparent;
//           color: #6c757d;
//         }
//         .text-success { color: #28a745 !important; }
//         .text-primary { color: #007bff !important; }
//         .text-info { color: #17a2b8 !important; }
//         .text-warning { color: #ffc107 !important; }
//         .mdi {
//           font-family: 'Material Design Icons';
//         }
//         .mdi-circle:before { content: "●"; }
//         .mdi-arrow-right:before { content: "→"; }
//         .mdi-react:before { content: "⚛"; }
//         .mdi-nodejs:before { content: "⬢"; }
//         .mdi-database:before { content: "🗄"; }
//         .mdi-account:before { content: "👤"; }
//         .mdi-currency-inr:before { content: "₹"; }
//         .avatar-title {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           width: 100%;
//           height: 100%;
//         }
//         .bg-light-subtle {
//           background-color: rgba(248, 249, 250, 0.5) !important;
//         }
//         .stats-card {
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           border-radius: 12px;
//           color: white;
//         }
//       `}</style>

//       {error && (
//         <div className="alert alert-warning mb-4">
//           <strong>⚠️ API Connection Issue:</strong> Using demo data - {error}
//         </div>
//       )}

    

//       <div className="row">
//         <div className="col-xl-5">
//           {/* Sales Breakdown Card */}
//           <div className="card card-h-100">
//             <div className="card-body">
//               <div className="d-flex flex-wrap align-items-center mb-4">
//                 <h5 className="card-title me-2">Sales Breakdown - June 2025</h5>
//                 <div className="ms-auto">
//                   <div>
//                     <button type="button" className="btn btn-soft-secondary btn-sm me-1">ALL</button>
//                     <button type="button" className="btn btn-soft-primary btn-sm me-1">1M</button>
//                     <button type="button" className="btn btn-soft-secondary btn-sm me-1">6M</button>
//                     <button type="button" className="btn btn-soft-secondary btn-sm">1Y</button>
//                   </div>
//                 </div>
//               </div>

//               {/* <div className="text-center mb-3">
//                 <h3 className="text-primary">₹{totalSalesAmount.toLocaleString()}</h3>
//                 <p className="text-muted">Total Sales from {orders.length} Orders</p>
//               </div> */}

//               <div className="row align-items-center">
//                 <div className="col-sm">
//                   <div style={{ width: '100%', height: '250px' }}>
//                     <ResponsiveContainer width="100%" height="100%">
//                       <PieChart>
//                         <Pie
//                           data={pieData}
//                           cx="50%"
//                           cy="50%"
//                           innerRadius={40}
//                           outerRadius={80}
//                           paddingAngle={5}
//                           dataKey="value"
//                         >
//                           {pieData.map((entry, index) => (
//                             <Cell key={`cell-${index}`} fill={entry.color} />
//                           ))}
//                         </Pie>
//                         <Tooltip formatter={(value) => `₹${totalSalesAmount.toLocaleString()}`} />
//                       </PieChart>
//                     </ResponsiveContainer>
//                   </div>
//                 </div>
//                 <div className="col-sm align-self-center">
//                   <div className="mt-4 mt-sm-0">
//                     <div>
//                       <p className="mb-2">
//                         <i className="mdi mdi-circle align-middle font-size-10 me-2 text-success"></i>
//                         Total Expense
//                       </p>
//                       <h6>₹{totalSalesAmount.toLocaleString()}</h6>
//                     </div>

//                     <div className="mt-4 pt-2">
//                       <p className="mb-2">
//                         <i className="mdi mdi-circle align-middle font-size-10 me-2 text-primary"></i>
//                         Course Sales 
//                       </p>
//                       <h6>{orders.length.toLocaleString()}</h6>
//                     </div>

//                     <div className="mt-4 pt-2">
//                       <p className="mb-2">
//                         <i className="mdi mdi-circle align-middle font-size-10 me-2 text-info"></i>
//                         Paid Students
//                       </p>
//                       <h6>{paidStudents.toLocaleString()}</h6>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="col-xl-7">
//           <div className="row">
//             <div className="col-xl-8">
//               {/* Income and Expenses Card */}
//               <div className="card card-h-100">
//                 <div className="card-body">
//                   <div className="d-flex flex-wrap align-items-center mb-4">
//                     <h5 className="card-title me-2">Financial Overview - 2025</h5>
//                     <div className="ms-auto">
//                       <select className="form-select form-select-sm" defaultValue="JUN">
//                         <option value="JUN">June</option>
//                         <option value="MAY">May</option>
//                         <option value="APR">April</option>
//                         <option value="MAR">March</option>
//                         <option value="FEB">February</option>
//                         <option value="JAN">January</option>
//                       </select>
//                     </div>
//                   </div>

//                   <div className="row align-items-center">
//                     <div className="col-sm">
//                       <div style={{ width: '100%', height: '200px' }}>
//                         <ResponsiveContainer width="100%" height="100%">
//                           <BarChart data={barData}>
//                             <CartesianGrid strokeDasharray="3 3" />
//                             <XAxis dataKey="name" />
//                             <YAxis />
//                             <Tooltip 
//                               formatter={(value) => `₹${(value * 1000).toLocaleString()}`}
//                               labelFormatter={(label) => `${label} (in thousands)`}
//                             />
//                             <Bar dataKey="value">
//                               {barData.map((entry, index) => (
//                                 <Cell key={`cell-${index}`} fill={entry.color} />
//                               ))}
//                             </Bar>
//                           </BarChart>
//                         </ResponsiveContainer>
//                       </div>
//                     </div>
//                     <div className="col-sm align-self-center">
//                       <div className="mt-4 mt-sm-0">
//                         <div className="row g-0">
//                           <div className="col-12 mb-3">
//                             <div>
//                               <p className="mb-2 text-muted text-uppercase font-size-11">Total Income</p>
//                               <h5 className="fw-medium text-success">₹{totalIncome.toLocaleString()}</h5>
//                             </div>
//                           </div>
//                           <div className="col-12 mb-3">
//                             <div>
//                               <p className="mb-2 text-muted text-uppercase font-size-11">Total Expenses</p>
//                               <h5 className="fw-medium text-danger">₹{totalExpenses.toLocaleString()}</h5>
//                             </div>
//                           </div>
//                           <div className="col-12 mb-3">
//                             <div>
//                               <p className="mb-2 text-muted text-uppercase font-size-11">Net Profit</p>
//                               <h5 className="fw-medium text-warning">₹{netProfit.toLocaleString()}</h5>
//                             </div>
//                           </div>
//                         </div>

//                         <div className="mt-2">
//                           <button className="btn btn-primary btn-sm">
//                             View Details <i className="mdi mdi-arrow-right ms-1"></i>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-xl-4">
//               {/* Course Carousel */}
//               <div className="card bg-primary text-white shadow-primary card-h-100">
//                 <div className="card-body p-0">
//                   <div className="carousel slide text-center widget-carousel">
//                     <div className="carousel-inner">
//                       {Array.isArray(courses) && courses.length > 0 ? courses.map((course, index) => (
//                         <div 
//                           key={course._id} 
//                           className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
//                         >
//                           <div className="text-center p-4">
//                             <i className="mdi mdi-react widget-box-1-icon"></i>
//                             <div className="avatar-md m-auto">
//                               <span className="avatar-title rounded-circle bg-light-subtle text-white font-size-24">
//                                 <i className="mdi mdi-react"></i>
//                               </span>
//                             </div>
//                             <h4 className="mt-3 lh-base fw-normal text-white">
//                               <b>{course.courseName}</b>
//                             </h4>
//                             <p className="text-white-50 font-size-13">
//                               {course.description || `Learn ${course.courseName} with comprehensive coverage of all topics. Duration: ${course.duration} weeks.`}
//                             </p>
//                             <p className="text-white-50 small mb-3">
//                               <strong>Price: ₹{course.price}</strong> • {course.mode} • {course.duration} weeks
//                             </p>
//                             <button
//                               type="button"
//                               className="btn btn-light btn-sm"
//                               onClick={() => alert('Navigate to All Courses')}
//                             >
//                               View details <i className="mdi mdi-arrow-right ms-1"></i>
//                             </button>
//                           </div>
//                         </div>
//                       )) : (
//                         <div className="carousel-item active">
//                           <div className="text-center p-4">
//                             <i className="mdi mdi-database widget-box-1-icon"></i>
//                             <div className="avatar-md m-auto">
//                               <span className="avatar-title rounded-circle bg-light-subtle text-white font-size-24">
//                                 <i className="mdi mdi-database"></i>
//                               </span>
//                             </div>
//                             <h4 className="mt-3 lh-base fw-normal text-white">
//                               <b>No Courses</b> Available
//                             </h4>
//                             <p className="text-white-50 font-size-13">
//                               Start creating courses to see them displayed here.
//                             </p>
//                             <button type="button" className="btn btn-light btn-sm">
//                               Add Course <i className="mdi mdi-arrow-right ms-1"></i>
//                             </button>
//                           </div>
//                         </div>
//                       )}
//                     </div>

//                     {Array.isArray(courses) && courses.length > 1 && (
//                       <div className="carousel-indicators carousel-indicators-rounded">
//                         {courses.map((_, index) => (
//                           <button
//                             key={index}
//                             type="button"
//                             className={index === currentSlide ? 'active' : ''}
//                             onClick={() => setCurrentSlide(index)}
//                           ></button>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DynamicDashboard;


// import React, { useState, useEffect } from 'react';
// import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const DynamicDashboard = () => {
//   const [courses, setCourses] = useState([]);
//   const [orders, setOrders] = useState([]);
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentSlide, setCurrentSlide] = useState(0);
  
//   // Filter states
//   const [selectedMonth, setSelectedMonth] = useState('JUN');
//   const [selectedYear, setSelectedYear] = useState('2025');
//   const [selectedMonth2, setSelectedMonth2] = useState('JUN');
//   const [selectedYear2, setSelectedYear2] = useState('2025');

//   // Fetch data from APIs
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
        
//         const [coursesRes, ordersRes, studentsRes] = await Promise.all([
//           fetch('/api/courses'),
//           fetch('/api/orders'),
//           fetch('/api/students')
//         ]);

//         if (!coursesRes.ok || !ordersRes.ok || !studentsRes.ok) {
//           throw new Error('Failed to fetch data');
//         }

//         const coursesData = await coursesRes.json();
//         const ordersData = await ordersRes.json();
//         const studentsData = await studentsRes.json();

//         // Ensure all data is in array format
//         setCourses(Array.isArray(coursesData) ? coursesData : []);
//         setOrders(Array.isArray(ordersData) ? ordersData : []);
        
//         // Handle students data - could be object or array
//         if (Array.isArray(studentsData)) {
//           setStudents(studentsData);
//         } else if (studentsData && typeof studentsData === 'object') {
//           if (studentsData.students && Array.isArray(studentsData.students)) {
//             setStudents(studentsData.students);
//           } else if (studentsData.data && Array.isArray(studentsData.data)) {
//             setStudents(studentsData.data);
//           } else {
//             setStudents([studentsData]);
//           }
//         } else {
//           setStudents([]);
//         }
//       } catch (err) {
//         setError(err.message);
//         // Fallback to demo data if API fails
//         setCourses([
//           { _id: '1', courseName: 'React Basics', price: '2000', duration: '3', mode: 'Online' },
//           { _id: '2', courseName: 'Node.js Guide', price: '2500', duration: '4', mode: 'Online' },
//           { _id: '3', courseName: 'MongoDB Intro', price: '1800', duration: '2', mode: 'Online' }
//         ]);
//         setOrders([
//           { _id: '1', amount: 24234, status: 'paid', createdAt: '2025-06-15T10:30:00Z' },
//           { _id: '2', amount: 18000, status: 'paid', createdAt: '2025-05-20T14:15:00Z' },
//           { _id: '3', amount: 15000, status: 'paid', createdAt: '2025-04-10T09:45:00Z' },
//           { _id: '4', amount: 22000, status: 'paid', createdAt: '2024-12-05T16:20:00Z' },
//           { _id: '5', amount: 19500, status: 'paid', createdAt: '2024-08-12T11:30:00Z' }
//         ]);
//         setStudents([
//           { _id: '1', username: 'John Doe', email: 'john@example.com', role: 'student' },
//           { _id: '2', username: 'Jane Smith', email: 'jane@example.com', role: 'student' },
//           { _id: '3', username: 'Mike Johnson', email: 'mike@example.com', role: 'student' }
//         ]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Auto-rotate carousel
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % Math.max(courses.length, 3));
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [courses.length]);

//   // Filter orders based on selected month and year for Sales Breakdown
//   const getSalesFilteredOrders = () => {
//     if (!Array.isArray(orders)) return [];
    
//     const monthMap = {
//       'JAN': 0, 'FEB': 1, 'MAR': 2, 'APR': 3, 'MAY': 4, 'JUN': 5,
//       'JUL': 6, 'AUG': 7, 'SEP': 8, 'OCT': 9, 'NOV': 10, 'DEC': 11
//     };
    
//     const targetMonth = monthMap[selectedMonth];
//     const targetYear = parseInt(selectedYear);
    
//     return orders.filter(order => {
//       if (!order.createdAt) return false;
      
//       const orderDate = new Date(order.createdAt);
//       return orderDate.getMonth() === targetMonth && orderDate.getFullYear() === targetYear;
//     });
//   };

//   // Filter orders by selected month and year for Financial Overview
//   const getMonthFilteredOrders = () => {
//     if (!Array.isArray(orders)) return [];
    
//     const monthMap = {
//       'JAN': 0, 'FEB': 1, 'MAR': 2, 'APR': 3, 'MAY': 4, 'JUN': 5,
//       'JUL': 6, 'AUG': 7, 'SEP': 8, 'OCT': 9, 'NOV': 10, 'DEC': 11
//     };
    
//     const targetMonth = monthMap[selectedMonth2];
//     const targetYear = parseInt(selectedYear2);
    
//     return orders.filter(order => {
//       if (!order.createdAt) return false;
      
//       const orderDate = new Date(order.createdAt);
//       return orderDate.getMonth() === targetMonth && orderDate.getFullYear() === targetYear;
//     });
//   };

//   // Calculate metrics from filtered data
//   const salesFilteredOrders = getSalesFilteredOrders();
//   const monthFilteredOrders = getMonthFilteredOrders();
  
//   const totalSalesAmount = salesFilteredOrders
//     .filter(order => order.status === 'paid')
//     .reduce((sum, order) => sum + (order.amount || 0), 0);
  
//   const monthTotalSales = monthFilteredOrders
//     .filter(order => order.status === 'paid')
//     .reduce((sum, order) => sum + (order.amount || 0), 0);
    
//   const totalStudents = Array.isArray(students) ? students.length : 0;
//   const paidStudents = Array.isArray(students) ? 
//     students.filter(student => student.role === 'student').length : 0;

//   // Break down sales by categories
//   const courseRevenue = Math.floor(totalSalesAmount * 0.70);
//   const consultationRevenue = Math.floor(totalSalesAmount * 0.20);
//   const affiliateRevenue = Math.floor(totalSalesAmount * 0.10);

//   // Calculate income and expenses for monthly view
//   const monthTotalIncome = monthTotalSales;
//   const monthTotalExpenses = Math.floor(monthTotalIncome * 0.40);
//   const monthNetProfit = monthTotalIncome - monthTotalExpenses;

//   // Chart data for Earnings (Pie Chart) - uses month/year filter
//   const pieData = [
//     { name: 'Course Sales', value: courseRevenue, color: '#28a745' },
//     { name: 'Total Students', value: monthTotalSales, color: '#007bff' },
//     { name: 'Total Paid Student', value:paidStudents, color: '#17a2b8' }
//   ];

//   // Chart data for Income/Expenses (Bar Chart) - uses month filter
//   const barData = [
//     { name: 'Total Income', value: Math.floor(monthTotalIncome / 1000), color: '#28a745' },
//     { name: 'Total Expenses', value: Math.floor(monthTotalExpenses / 1000), color: '#dc3545' },
//     { name: 'Net Profit', value: Math.floor(monthNetProfit / 1000), color: '#ffc107' }
//   ];

//   // Get current period display text - no longer needed

//   if (loading) {
//     return (
//       <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
//         <div className="text-center">
//           <div className="spinner-border text-primary mb-3" role="status">
//             <span className="visually-hidden">Loading...</span>
//           </div>
//           <p className="text-muted">Loading dashboard data...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <style jsx>{`
//         .card-h-100 {
//           height: 100%;
//         }
//         .widget-carousel .carousel-item {
//           padding: 1.5rem;
//         }
//         .widget-box-1-icon {
//           font-size: 2.5rem;
//           margin-bottom: 1rem;
//         }
//         .carousel-indicators-rounded button {
//           width: 12px;
//           height: 12px;
//           border-radius: 50%;
//           margin: 0 4px;
//         }
//         .btn-soft-primary {
//           background-color: rgba(13, 110, 253, 0.1);
//           border-color: transparent;
//           color: #0d6efd;
//         }
//         .btn-soft-secondary {
//           background-color: rgba(108, 117, 125, 0.1);
//           border-color: transparent;
//           color: #6c757d;
//         }
//         .text-success { color: #28a745 !important; }
//         .text-primary { color: #007bff !important; }
//         .text-info { color: #17a2b8 !important; }
//         .text-warning { color: #ffc107 !important; }
//         .mdi {
//           font-family: 'Material Design Icons';
//         }
//         .mdi-circle:before { content: "●"; }
//         .mdi-arrow-right:before { content: "→"; }
//         .mdi-react:before { content: "⚛"; }
//         .mdi-nodejs:before { content: "⬢"; }
//         .mdi-database:before { content: "🗄"; }
//         .mdi-account:before { content: "👤"; }
//         .mdi-currency-inr:before { content: "₹"; }
//         .avatar-title {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           width: 100%;
//           height: 100%;
//         }
//         .bg-light-subtle {
//           background-color: rgba(248, 249, 250, 0.5) !important;
//         }
//         .stats-card {
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           border-radius: 12px;
//           color: white;
//         }
//       `}</style>

//       {error && (
//         <div className="alert alert-warning mb-4">
//           <strong>⚠️ API Connection Issue:</strong> Using demo data - {error}
//         </div>
//       )}

//       <div className="row">
//         <div className="col-xl-5">
//           {/* Sales Breakdown Card */}
//           <div className="card card-h-100">
//             <div className="card-body">
//               <div className="d-flex flex-wrap align-items-center mb-4">
//                 <h5 className="card-title me-2">Sales Breakdown - {selectedMonth} {selectedYear}</h5>
//                 <div className="ms-auto d-flex gap-2">
//                   <select 
//                     className="form-select form-select-sm" 
//                     value={selectedMonth}
//                     onChange={(e) => setSelectedMonth(e.target.value)}
//                   >
//                     <option value="JAN">January</option>
//                     <option value="FEB">February</option>
//                     <option value="MAR">March</option>
//                     <option value="APR">April</option>
//                     <option value="MAY">May</option>
//                     <option value="JUN">June</option>
//                     <option value="JUL">July</option>
//                     <option value="AUG">August</option>
//                     <option value="SEP">September</option>
//                     <option value="OCT">October</option>
//                     <option value="NOV">November</option>
//                     <option value="DEC">December</option>
//                   </select>
//                   <select 
//                     className="form-select form-select-sm" 
//                     value={selectedYear}
//                     onChange={(e) => setSelectedYear(e.target.value)}
//                   >
//                     <option value="2025">2025</option>
//                     <option value="2024">2024</option>
//                     <option value="2023">2023</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="row align-items-center">
//                 <div className="col-sm">
//                   <div style={{ width: '100%', height: '250px' }}>
//                     <ResponsiveContainer width="100%" height="100%">
//                       <PieChart>
//                         <Pie
//                           data={pieData}
//                           cx="50%"
//                           cy="50%"
//                           innerRadius={40}
//                           outerRadius={80}
//                           paddingAngle={5}
//                           dataKey="value"
//                         >
//                           {pieData.map((entry, index) => (
//                             <Cell key={`cell-${index}`} fill={entry.color} />
//                           ))}
//                         </Pie>
//                         <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
//                       </PieChart>
//                     </ResponsiveContainer>
//                   </div>
//                 </div>
//                 <div className="col-sm align-self-center">
//                   <div className="mt-4 mt-sm-0">
//                     <div>
//                       <p className="mb-2">
//                         <i className="mdi mdi-circle align-middle font-size-10 me-2 text-success"></i>
//                         Total Sales ({selectedMonth} {selectedYear})
//                       </p>
//                       <h6>₹{totalSalesAmount.toLocaleString()}</h6>
//                     </div>

//                     <div className="mt-4 pt-2">
//                       <p className="mb-2">
//                         <i className="mdi mdi-circle align-middle font-size-10 me-2 text-primary"></i>
//                         Orders This Month
//                       </p>
//                       <h6>{salesFilteredOrders.length.toLocaleString()}</h6>
//                     </div>

//                     <div className="mt-4 pt-2">
//                       <p className="mb-2">
//                         <i className="mdi mdi-circle align-middle font-size-10 me-2 text-info"></i>
//                         Total Students
//                       </p>
//                       <h6>{totalStudents.toLocaleString()}</h6>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="col-xl-7">
//           <div className="row">
//             <div className="col-xl-8">
//               {/* Income and Expenses Card */}
//               <div className="card card-h-100">
//                 <div className="card-body">
//                   <div className="d-flex flex-wrap align-items-center mb-4">
//                     <h5 className="card-title me-2">Financial Overview - {selectedMonth2} {selectedYear2}</h5>
//                     <div className="ms-auto d-flex gap-2">
//                       <select 
//                         className="form-select form-select-sm" 
//                         value={selectedMonth2}
//                         onChange={(e) => setSelectedMonth2(e.target.value)}
//                       >
//                         <option value="JAN">January</option>
//                         <option value="FEB">February</option>
//                         <option value="MAR">March</option>
//                         <option value="APR">April</option>
//                         <option value="MAY">May</option>
//                         <option value="JUN">June</option>
//                         <option value="JUL">July</option>
//                         <option value="AUG">August</option>
//                         <option value="SEP">September</option>
//                         <option value="OCT">October</option>
//                         <option value="NOV">November</option>
//                         <option value="DEC">December</option>
//                       </select>
//                       <select 
//                         className="form-select form-select-sm" 
//                         value={selectedYear2}
//                         onChange={(e) => setSelectedYear2(e.target.value)}
//                       >
//                         <option value="2025">2025</option>
//                         <option value="2024">2024</option>
//                         <option value="2023">2023</option>
//                       </select>
//                     </div>
//                   </div>

//                   <div className="row align-items-center">
//                     <div className="col-sm">
//                       <div style={{ width: '100%', height: '200px' }}>
//                         <ResponsiveContainer width="100%" height="100%">
//                           <BarChart data={barData}>
//                             <CartesianGrid strokeDasharray="3 3" />
//                             <XAxis dataKey="name" />
//                             <YAxis />
//                             <Tooltip 
//                               formatter={(value) => `₹${(value * 1000).toLocaleString()}`}
//                               labelFormatter={(label) => `${label} (in thousands)`}
//                             />
//                             <Bar dataKey="value">
//                               {barData.map((entry, index) => (
//                                 <Cell key={`cell-${index}`} fill={entry.color} />
//                               ))}
//                             </Bar>
//                           </BarChart>
//                         </ResponsiveContainer>
//                       </div>
//                     </div>
//                     <div className="col-sm align-self-center">
//                       <div className="mt-4 mt-sm-0">
//                         <div className="row g-0">
//                           <div className="col-12 mb-3">
//                             <div>
//                               <p className="mb-2 text-muted text-uppercase font-size-11">Monthly Income</p>
//                               <h5 className="fw-medium text-success">₹{monthTotalIncome.toLocaleString()}</h5>
//                             </div>
//                           </div>
//                           <div className="col-12 mb-3">
//                             <div>
//                               <p className="mb-2 text-muted text-uppercase font-size-11">Monthly Expenses</p>
//                               <h5 className="fw-medium text-danger">₹{monthTotalExpenses.toLocaleString()}</h5>
//                             </div>
//                           </div>
//                           <div className="col-12 mb-3">
//                             <div>
//                               <p className="mb-2 text-muted text-uppercase font-size-11">Monthly Profit</p>
//                               <h5 className="fw-medium text-warning">₹{monthNetProfit.toLocaleString()}</h5>
//                             </div>
//                           </div>
//                           <div className="col-12 mb-3">
//                             <div>
//                               <p className="mb-2 text-muted text-uppercase font-size-11">Orders This Month</p>
//                               <h5 className="fw-medium text-info">{monthFilteredOrders.length}</h5>
//                             </div>
//                           </div>
//                         </div>

//                         <div className="mt-2">
//                           <button className="btn btn-primary btn-sm">
//                             View Details <i className="mdi mdi-arrow-right ms-1"></i>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-xl-4">
//               {/* Course Carousel */}
//               <div className="card bg-primary text-white shadow-primary card-h-100">
//                 <div className="card-body p-0">
//                   <div className="carousel slide text-center widget-carousel">
//                     <div className="carousel-inner">
//                       {Array.isArray(courses) && courses.length > 0 ? courses.map((course, index) => (
//                         <div 
//                           key={course._id} 
//                           className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
//                         >
//                           <div className="text-center p-4">
//                             <i className="mdi mdi-react widget-box-1-icon"></i>
//                             <div className="avatar-md m-auto">
//                               <span className="avatar-title rounded-circle bg-light-subtle text-white font-size-24">
//                                 <i className="mdi mdi-react"></i>
//                               </span>
//                             </div>
//                             <h4 className="mt-3 lh-base fw-normal text-white">
//                               <b>{course.courseName}</b>
//                             </h4>
//                             <p className="text-white-50 font-size-13">
//                               {course.description || `Learn ${course.courseName} with comprehensive coverage of all topics. Duration: ${course.duration} weeks.`}
//                             </p>
//                             <p className="text-white-50 small mb-3">
//                               <strong>Price: ₹{course.price}</strong> • {course.mode} • {course.duration} weeks
//                             </p>
//                             <button
//                               type="button"
//                               className="btn btn-light btn-sm"
//                               onClick={() => alert('Navigate to All Courses')}
//                             >
//                               View details <i className="mdi mdi-arrow-right ms-1"></i>
//                             </button>
//                           </div>
//                         </div>
//                       )) : (
//                         <div className="carousel-item active">
//                           <div className="text-center p-4">
//                             <i className="mdi mdi-database widget-box-1-icon"></i>
//                             <div className="avatar-md m-auto">
//                               <span className="avatar-title rounded-circle bg-light-subtle text-white font-size-24">
//                                 <i className="mdi mdi-database"></i>
//                               </span>
//                             </div>
//                             <h4 className="mt-3 lh-base fw-normal text-white">
//                               <b>No Courses</b> Available
//                             </h4>
//                             <p className="text-white-50 font-size-13">
//                               Start creating courses to see them displayed here.
//                             </p>
//                             <button type="button" className="btn btn-light btn-sm">
//                               Add Course <i className="mdi mdi-arrow-right ms-1"></i>
//                             </button>
//                           </div>
//                         </div>
//                       )}
//                     </div>

//                     {Array.isArray(courses) && courses.length > 1 && (
//                       <div className="carousel-indicators carousel-indicators-rounded">
//                         {courses.map((_, index) => (
//                           <button
//                             key={index}
//                             type="button"
//                             className={index === currentSlide ? 'active' : ''}
//                             onClick={() => setCurrentSlide(index)}
//                           ></button>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DynamicDashboard;

import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';
const DynamicDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [orders, setOrders] = useState([]);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  
  // Filter states
  const [selectedMonth, setSelectedMonth] = useState('JUN');
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedMonth2, setSelectedMonth2] = useState('JUN');
  const [selectedYear2, setSelectedYear2] = useState('2025');

  // Fetch data from APIs
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        const [coursesRes, ordersRes, studentsRes] = await Promise.all([
          fetch('http://localhost:8080/api/courses'),
          fetch('http://localhost:8080/api/orders'),
          fetch('http://localhost:8080/api/students')
        ]);

        if (!coursesRes.ok || !ordersRes.ok || !studentsRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const coursesData = await coursesRes.json();
        const ordersData = await ordersRes.json();
        const studentsData = await studentsRes.json();

        // Ensure all data is in array format
        setCourses(Array.isArray(coursesData) ? coursesData : []);
        setOrders(Array.isArray(ordersData) ? ordersData : []);
        
        // Handle students data - could be object or array
        if (Array.isArray(studentsData)) {
          setStudents(studentsData);
        } else if (studentsData && typeof studentsData === 'object') {
          if (studentsData.students && Array.isArray(studentsData.students)) {
            setStudents(studentsData.students);
          } else if (studentsData.data && Array.isArray(studentsData.data)) {
            setStudents(studentsData.data);
          } else {
            setStudents([studentsData]);
          }
        } else {
          setStudents([]);
        }
      } catch (err) {
        setError(err.message);
        // Fallback to demo data if API fails
        setCourses([
          { _id: '1', courseName: 'React Basics', price: '2000', duration: '3', mode: 'Online' },
          { _id: '2', courseName: 'Node.js Guide', price: '2500', duration: '4', mode: 'Online' },
          { _id: '3', courseName: 'MongoDB Intro', price: '1800', duration: '2', mode: 'Online' }
        ]);
        setOrders([
          { _id: '1', amount: 24234, status: 'paid', createdAt: '2025-06-15T10:30:00Z' },
          { _id: '2', amount: 18000, status: 'paid', createdAt: '2025-05-20T14:15:00Z' },
          { _id: '3', amount: 15000, status: 'paid', createdAt: '2025-04-10T09:45:00Z' },
          { _id: '4', amount: 22000, status: 'paid', createdAt: '2024-12-05T16:20:00Z' },
          { _id: '5', amount: 19500, status: 'paid', createdAt: '2024-08-12T11:30:00Z' }
        ]);
        setStudents([
          { _id: '1', username: 'John Doe', email: 'john@example.com', role: 'student' },
          { _id: '2', username: 'Jane Smith', email: 'jane@example.com', role: 'student' },
          { _id: '3', username: 'Mike Johnson', email: 'mike@example.com', role: 'student' }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.max(courses.length, 3));
    }, 4000);
    return () => clearInterval(interval);
  }, [courses.length]);

  // Filter orders based on selected month and year for Sales Breakdown
  const getSalesFilteredOrders = () => {
    if (!Array.isArray(orders)) return [];
    
    const monthMap = {
      'JAN': 0, 'FEB': 1, 'MAR': 2, 'APR': 3, 'MAY': 4, 'JUN': 5,
      'JUL': 6, 'AUG': 7, 'SEP': 8, 'OCT': 9, 'NOV': 10, 'DEC': 11
    };
    
    const targetMonth = monthMap[selectedMonth];
    const targetYear = parseInt(selectedYear);
    
    return orders.filter(order => {
      if (!order.createdAt) return false;
      
      const orderDate = new Date(order.createdAt);
      return orderDate.getMonth() === targetMonth && orderDate.getFullYear() === targetYear;
    });
  };

  // Filter orders by selected month and year for Financial Overview
  const getMonthFilteredOrders = () => {
    if (!Array.isArray(orders)) return [];
    
    const monthMap = {
      'JAN': 0, 'FEB': 1, 'MAR': 2, 'APR': 3, 'MAY': 4, 'JUN': 5,
      'JUL': 6, 'AUG': 7, 'SEP': 8, 'OCT': 9, 'NOV': 10, 'DEC': 11
    };
    
    const targetMonth = monthMap[selectedMonth2];
    const targetYear = parseInt(selectedYear2);
    
    return orders.filter(order => {
      if (!order.createdAt) return false;
      
      const orderDate = new Date(order.createdAt);
      return orderDate.getMonth() === targetMonth && orderDate.getFullYear() === targetYear;
    });
  };

  // Calculate metrics from filtered data
  const salesFilteredOrders = getSalesFilteredOrders();
  const monthFilteredOrders = getMonthFilteredOrders();
  
  const totalSalesAmount = salesFilteredOrders
    .filter(order => order.status === 'paid')
    .reduce((sum, order) => sum + (order.amount || 0), 0);
  
  const monthTotalSales = monthFilteredOrders
    .filter(order => order.status === 'paid')
    .reduce((sum, order) => sum + (order.amount || 0), 0);
    
  const totalStudents = Array.isArray(students) ? students.length : 0;
  const paidStudents = Array.isArray(students) ? 
    students.filter(student => student.role === 'student').length : 0;

  // Break down sales by categories
  const courseRevenue = Math.floor(totalSalesAmount * 0.70);
  const consultationRevenue = Math.floor(totalSalesAmount * 0.20);
  const affiliateRevenue = Math.floor(totalSalesAmount * 0.10);

  // Calculate income and expenses for monthly view
  const monthTotalIncome = monthTotalSales;
  const monthTotalExpenses = Math.floor(monthTotalIncome * 0.40);
  const monthNetProfit = monthTotalIncome - monthTotalExpenses;

  // Fixed Chart data for Pie Chart - now showing the same metrics as displayed beside
  const pieData = [
    { name: 'Total Sales', value: totalSalesAmount, color: '#28a745' },
    { name: 'Orders Count', value: salesFilteredOrders.length * 1000, color: '#007bff' }, // Multiplied to make it visible
    { name: 'Students Count', value: totalStudents * 1000, color: '#17a2b8' } // Multiplied to make it visible
  ];

  // Chart data for Income/Expenses (Bar Chart) - uses month filter
  const barData = [
    { name: 'Total Income', value: Math.floor(monthTotalIncome / 1000), color: '#28a745' },
    { name: 'Total Expenses', value: Math.floor(monthTotalExpenses / 1000), color: '#dc3545' },
    { name: 'Net Profit', value: Math.floor(monthNetProfit / 1000), color: '#ffc107' }
  ];

  // Custom tooltip for pie chart to show actual values
  const renderPieTooltip = (active, payload) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      let displayValue = data.value;
      
      // Show actual count for Orders and Students
      if (data.name === 'Orders Count') {
        displayValue = Math.floor(data.value / 1000);
        return (
          <div className="bg-white p-2 border border-gray-300 rounded shadow">
            <p className="mb-0">{`${data.name}: ${displayValue}`}</p>
          </div>
        );
      } else if (data.name === 'Students Count') {
        displayValue = Math.floor(data.value / 1000);
        return (
          <div className="bg-white p-2 border border-gray-300 rounded shadow">
            <p className="mb-0">{`${data.name}: ${displayValue}`}</p>
          </div>
        );
      } else {
        return (
          <div className="bg-white p-2 border border-gray-300 rounded shadow">
            <p className="mb-0">{`${data.name}: ₹${displayValue.toLocaleString()}`}</p>
          </div>
        );
      }
    }
    return null;
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="text-muted">Loading dashboard data...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <style jsx>{`
        .card-h-100 {
          height: 100%;
        }
        .widget-carousel .carousel-item {
          padding: 1.5rem;
        }
        .widget-box-1-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .carousel-indicators-rounded button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          margin: 0 4px;
        }
        .btn-soft-primary {
          background-color: rgba(13, 110, 253, 0.1);
          border-color: transparent;
          color: #0d6efd;
        }
        .btn-soft-secondary {
          background-color: rgba(108, 117, 125, 0.1);
          border-color: transparent;
          color: #6c757d;
        }
        .text-success { color: #28a745 !important; }
        .text-primary { color: #007bff !important; }
        .text-info { color: #17a2b8 !important; }
        .text-warning { color: #ffc107 !important; }
        .mdi {
          font-family: 'Material Design Icons';
        }
        .mdi-circle:before { content: "●"; }
        .mdi-arrow-right:before { content: "→"; }
        .mdi-react:before { content: "⚛"; }
        .mdi-nodejs:before { content: "⬢"; }
        .mdi-database:before { content: "🗄"; }
        .mdi-account:before { content: "👤"; }
        .mdi-currency-inr:before { content: "₹"; }
        .avatar-title {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }
        .bg-light-subtle {
          background-color: rgba(248, 249, 250, 0.5) !important;
        }
        .stats-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 12px;
          color: white;
        }
      `}</style>

      {error && (
        <div className="alert alert-warning mb-4">
          <strong>⚠️ API Connection Issue:</strong> Using demo data - {error}
        </div>
      )}

      <div className="row">
        <div className="col-xl-5">
          {/* Sales Breakdown Card */}
          <div className="card card-h-100">
            <div className="card-body">
              <div className="d-flex flex-wrap align-items-center mb-4">
                <h5 className="card-title me-2">Sales Breakdown - {selectedMonth} {selectedYear}</h5>
                <div className="ms-auto d-flex gap-2">
                  <select 
                    className="form-select form-select-sm" 
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                  >
                    <option value="JAN">January</option>
                    <option value="FEB">February</option>
                    <option value="MAR">March</option>
                    <option value="APR">April</option>
                    <option value="MAY">May</option>
                    <option value="JUN">June</option>
                    <option value="JUL">July</option>
                    <option value="AUG">August</option>
                    <option value="SEP">September</option>
                    <option value="OCT">October</option>
                    <option value="NOV">November</option>
                    <option value="DEC">December</option>
                  </select>
                  <select 
                    className="form-select form-select-sm" 
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                  >
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                  </select>
                </div>
              </div>

              <div className="row align-items-center">
                <div className="col-sm">
                  <div style={{ width: '100%', height: '250px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip content={({ active, payload }) => renderPieTooltip(active, payload)} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="col-sm align-self-center">
                  <div className="mt-4 mt-sm-0">
                    <div>
                      <p className="mb-2">
                        <i className="mdi mdi-circle align-middle font-size-10 me-2 text-success"></i>
                        Total Sales ({selectedMonth} {selectedYear})
                      </p>
                      <h6>₹{totalSalesAmount.toLocaleString()}</h6>
                    </div>

                    <div className="mt-4 pt-2">
                      <p className="mb-2">
                        <i className="mdi mdi-circle align-middle font-size-10 me-2 text-primary"></i>
                        Orders This Month
                      </p>
                      <h6>{salesFilteredOrders.length.toLocaleString()}</h6>
                    </div>

                    <div className="mt-4 pt-2">
                      <p className="mb-2">
                        <i className="mdi mdi-circle align-middle font-size-10 me-2 text-info"></i>
                        Total Students
                      </p>
                      <h6>{totalStudents.toLocaleString()}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-7">
          <div className="row">
            <div className="col-xl-8">
              {/* Income and Expenses Card */}
              <div className="card card-h-100">
                <div className="card-body">
                  <div className="d-flex flex-wrap align-items-center mb-4">
                    <h5 className="card-title me-2">Financial Overview - {selectedMonth2} {selectedYear2}</h5>
                    <div className="ms-auto d-flex gap-2">
                      <select 
                        className="form-select form-select-sm" 
                        value={selectedMonth2}
                        onChange={(e) => setSelectedMonth2(e.target.value)}
                      >
                        <option value="JAN">January</option>
                        <option value="FEB">February</option>
                        <option value="MAR">March</option>
                        <option value="APR">April</option>
                        <option value="MAY">May</option>
                        <option value="JUN">June</option>
                        <option value="JUL">July</option>
                        <option value="AUG">August</option>
                        <option value="SEP">September</option>
                        <option value="OCT">October</option>
                        <option value="NOV">November</option>
                        <option value="DEC">December</option>
                      </select>
                      <select 
                        className="form-select form-select-sm" 
                        value={selectedYear2}
                        onChange={(e) => setSelectedYear2(e.target.value)}
                      >
                         <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                      </select>
                    </div>
                  </div>

                  <div className="row align-items-center">
                    <div className="col-sm">
                      <div style={{ width: '100%', height: '200px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={barData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip 
                              formatter={(value) => `₹${(value * 1000).toLocaleString()}`}
                              labelFormatter={(label) => `${label} (in thousands)`}
                            />
                            <Bar dataKey="value">
                              {barData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    <div className="col-sm align-self-center">
                      <div className="mt-4 mt-sm-0">
                        <div className="row g-0">
                          <div className="col-12 mb-3">
                            <div>
                              <p className="mb-2 text-muted text-uppercase font-size-11">Monthly Income</p>
                              <h5 className="fw-medium text-success">₹{monthTotalIncome.toLocaleString()}</h5>
                            </div>
                          </div>
                          <div className="col-12 mb-3">
                            <div>
                              <p className="mb-2 text-muted text-uppercase font-size-11">Monthly Expenses</p>
                              <h5 className="fw-medium text-danger">₹{monthTotalExpenses.toLocaleString()}</h5>
                            </div>
                          </div>
                          <div className="col-12 mb-3">
                            <div>
                              <p className="mb-2 text-muted text-uppercase font-size-11">Monthly Profit</p>
                              <h5 className="fw-medium text-warning">₹{monthNetProfit.toLocaleString()}</h5>
                            </div>
                          </div>
                          <div className="col-12 mb-3">
                            <div>
                              <p className="mb-2 text-muted text-uppercase font-size-11">Orders This Month</p>
                              <h5 className="fw-medium text-info">{monthFilteredOrders.length}</h5>
                            </div>
                          </div>
                        </div>

                        {/* <div className="mt-2">
                          <button className="btn btn-primary btn-sm">
                            View Details <i className="mdi mdi-arrow-right ms-1"></i>
                          </button>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4">
              {/* Course Carousel */}
              <div className="card bg-primary text-white shadow-primary card-h-100">
                <div className="card-body p-0">
                  <div className="carousel slide text-center widget-carousel">
                    <div className="carousel-inner">
                      {Array.isArray(courses) && courses.length > 0 ? courses.map((course, index) => (
                        <div 
                          key={course._id} 
                          className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
                        >
                          <div className="text-center p-4">
                            <i className="mdi mdi-react widget-box-1-icon"></i>
                            <div className="avatar-md m-auto">
                              <span className="avatar-title rounded-circle bg-light-subtle text-white font-size-24">
                                <i className="mdi mdi-react"></i>
                              </span>
                            </div>
                            <h4 className="mt-3 lh-base fw-normal text-white">
                              <b>{course.courseName}</b>
                            </h4>
                            <p className="text-white-50 font-size-13">
                              {course.description || `Learn ${course.courseName} with comprehensive coverage of all topics. Duration: ${course.duration} weeks.`}
                            </p>
                            <p className="text-white-50 small mb-3">
                              <strong>Price: ₹{course.price}</strong> • {course.mode} • {course.duration} weeks
                            </p>
                            <button
      type="button"
      className="btn btn-light btn-sm"
      onClick={() => navigate('/AllCourse')}
    >
      View details <i className="mdi mdi-arrow-right ms-1"></i>
    </button>
                          </div>
                        </div>
                      )) : (
                        <div className="carousel-item active">
                          <div className="text-center p-4">
                            <i className="mdi mdi-database widget-box-1-icon"></i>
                            <div className="avatar-md m-auto">
                              <span className="avatar-title rounded-circle bg-light-subtle text-white font-size-24">
                                <i className="mdi mdi-database"></i>
                              </span>
                            </div>
                            <h4 className="mt-3 lh-base fw-normal text-white">
                              <b>No Courses</b> Available
                            </h4>
                            <p className="text-white-50 font-size-13">
                              Start creating courses to see them displayed here.
                            </p>
                            <button type="button" className="btn btn-light btn-sm">
                              Add Course <i className="mdi mdi-arrow-right ms-1"></i>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    {Array.isArray(courses) && courses.length > 1 && (
                      <div className="carousel-indicators carousel-indicators-rounded">
                        {courses.map((_, index) => (
                          <button
                            key={index}
                            type="button"
                            className={index === currentSlide ? 'active' : ''}
                            onClick={() => setCurrentSlide(index)}
                          ></button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicDashboard;