// import React, { useState, useEffect } from "react";
// import Dashsub from "./Dashsub";

// const DashBoard1 = () => {
//   const [dashboardData, setDashboardData] = useState({
//     totalStudents: 0,
//     totalCourses: 0,
//     completedCourses: 0,
//     totalLeads: 0,
//     loading: true,
//     error: null
//   });

//   const [trends, setTrends] = useState({
//     studentsChange: 0,
//     coursesChange: 0,
//     leadsChange: 0,
//     completedChange: 0
//   });

//   // Fetch dashboard data from APIs
//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         setDashboardData(prev => ({ ...prev, loading: true, error: null }));

//         // Fetch students data
//         const studentsResponse = await fetch('/api/students');
//         const studentsData = await studentsResponse.json();

//         // Fetch courses data
//         const coursesResponse = await fetch('/api/courses');
//         const coursesData = await coursesResponse.json();

//         // Debug: Log the API responses
//         console.log('Students API Response:', studentsData);
//         console.log('Courses API Response:', coursesData);

//         // Calculate metrics - handle different response formats
//         let totalStudents = 0;
//         let totalCourses = 0;

//         // Handle students count
//         if (Array.isArray(studentsData)) {
//           totalStudents = studentsData.length;
//         } else if (studentsData && typeof studentsData === 'object') {
//           totalStudents = studentsData.total || studentsData.count || studentsData.length || 0;
//           // If studentsData has a 'data' property that contains the array
//           if (studentsData.data && Array.isArray(studentsData.data)) {
//             totalStudents = studentsData.data.length;
//           }
//         }

//         // Handle courses count
//         if (Array.isArray(coursesData)) {
//           totalCourses = coursesData.length;
//         } else if (coursesData && typeof coursesData === 'object') {
//           totalCourses = coursesData.total || coursesData.count || coursesData.length || 0;
//           // If coursesData has a 'data' property that contains the array
//           if (coursesData.data && Array.isArray(coursesData.data)) {
//             totalCourses = coursesData.data.length;
//           }
//         }
        
//         // Calculate completed courses - handle different response formats
//         let completedCourses = 0;
//         if (Array.isArray(coursesData)) {
//           completedCourses = coursesData.filter(course => 
//             course.status === 'completed' || 
//             course.completed === true ||
//             course.isCompleted === true
//           ).length;
//         } else if (coursesData && coursesData.data && Array.isArray(coursesData.data)) {
//           completedCourses = coursesData.data.filter(course => 
//             course.status === 'completed' || 
//             course.completed === true ||
//             course.isCompleted === true
//           ).length;
//         } else if (coursesData && typeof coursesData === 'object') {
//           completedCourses = coursesData.completed || coursesData.completedCount || 0;
//         }

//         // Calculate leads - handle different response formats
//         let totalLeads = 0;
//         if (Array.isArray(studentsData)) {
//           totalLeads = studentsData.filter(student => {
//             const isRecent = student.createdAt && 
//               new Date() - new Date(student.createdAt) < 30 * 24 * 60 * 60 * 1000;
//             return student.status === 'lead' || student.isLead === true || isRecent;
//           }).length;
//         } else if (studentsData && studentsData.data && Array.isArray(studentsData.data)) {
//           totalLeads = studentsData.data.filter(student => {
//             const isRecent = student.createdAt && 
//               new Date() - new Date(student.createdAt) < 30 * 24 * 60 * 60 * 1000;
//             return student.status === 'lead' || student.isLead === true || isRecent;
//           }).length;
//         } else if (studentsData && typeof studentsData === 'object') {
//           totalLeads = studentsData.leads || studentsData.leadsCount || Math.floor(totalStudents * 0.3); // Default fallback
//         }

//         console.log('Calculated Values:', {
//           totalStudents,
//           totalCourses,
//           completedCourses,
//           totalLeads
//         });

//         // Calculate trends (you might want to fetch historical data for accurate trends)
//         const studentsChange = calculateTrend(totalStudents, 1400); // Compare with previous value
//         const coursesChange = calculateTrend(totalCourses, 1125);
//         const leadsChange = calculateTrend(totalLeads, 300);
//         const completedChange = calculateTrend(completedCourses, 234);

//         setDashboardData({
//           totalStudents,
//           totalCourses,
//           completedCourses,
//           totalLeads,
//           loading: false,
//           error: null
//         });

//         setTrends({
//           studentsChange,
//           coursesChange,
//           leadsChange,
//           completedChange
//         });

//       } catch (error) {
//         console.error('Error fetching dashboard data:', error);
//         console.error('Error details:', {
//           message: error.message,
//           stack: error.stack
//         });
//         setDashboardData(prev => ({
//           ...prev,
//           loading: false,
//           error: `Failed to load dashboard data: ${error.message}`
//         }));
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   // Helper function to calculate percentage change
//   const calculateTrend = (current, previous) => {
//     if (previous === 0) return 0;
//     return ((current - previous) / previous * 100).toFixed(1);
//   };

//   // Helper function to format trend display
//   const formatTrend = (change, suffix = '') => {
//     const isPositive = parseFloat(change) >= 0;
//     const badgeClass = isPositive ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger';
//     const sign = isPositive ? '+' : '';
//     return (
//       <span className={`badge ${badgeClass}`}>
//         {sign}{change}% {suffix}
//       </span>
//     );
//   };

//   if (dashboardData.loading) {
//     return (
//       <div className="main-content">
//         <div className="page-content">
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-12">
//                 <div className="text-center">
//                   <div className="spinner-border" role="status">
//                     <span className="visually-hidden">Loading...</span>
//                   </div>
//                   <p className="mt-2">Loading dashboard data...</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (dashboardData.error) {
//     return (
//       <div className="main-content">
//         <div className="page-content">
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-12">
//                 <div className="alert alert-danger" role="alert">
//                   <h4 className="alert-heading">Error!</h4>
//                   <p>{dashboardData.error}</p>
//                   <button 
//                     className="btn btn-outline-danger"
//                     onClick={() => window.location.reload()}
//                   >
//                     Retry
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="main-content">
//       <div className="page-content">
//         <div className="container-fluid">
//           {/* Page Title */}
//           <div className="row">
//             <div className="col-12">
//               <div className="page-title-box d-sm-flex align-items-center justify-content-between">
//                 <h4 className="mb-sm-0 font-size-18">Dashboard</h4>
//                 <div className="page-title-right">
//                   <ol className="breadcrumb m-0">
//                     <li className="breadcrumb-item">
//                       <a href="javascript: void(0);">Dashboard</a>
//                     </li>
//                     <li className="breadcrumb-item active">Dashboard</li>
//                   </ol>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="row">
//             {/* Card 1 - Total Students */}
//             <div className="col-xl-3 col-md-6">
//               <div className="card card-h-100">
//                 <div className="card-body">
//                   <div className="row align-items-center">
//                     <div className="col-6">
//                       <span className="text-muted mb-3 lh-1 d-block text-truncate">
//                         Total Students
//                       </span>
//                       <h4 className="mb-3">
//                         {dashboardData.totalStudents.toLocaleString()}
//                       </h4>
//                     </div>
//                     <div className="col-6">
//                       <img src="./assets2/images/users/graph.PNG" alt="Students Graph" height="40" />
//                     </div>
//                   </div>
//                   <div className="text-nowrap">
//                     {formatTrend(trends.studentsChange, 'change')}
//                     <span className="ms-1 text-muted font-size-13">
//                       Since last week
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Card 2 - Total Leads */}
//             <div className="col-xl-3 col-md-6">
//               <div className="card card-h-100">
//                 <div className="card-body">
//                   <div className="row align-items-center">
//                     <div className="col-6">
//                       <span className="text-muted mb-3 lh-1 d-block text-truncate">
//                         Total Leads
//                       </span>
//                       <h4 className="mb-3">
//                         {dashboardData.totalLeads.toLocaleString()}
//                       </h4>
//                     </div>
//                     <div className="col-6">
//                       <img src="./assets2/images/users/graph.PNG" alt="Leads Graph" height="40" />
//                     </div>
//                   </div>
//                   <div className="text-nowrap">
//                     {formatTrend(trends.leadsChange, 'change')}
//                     <span className="ms-1 text-muted font-size-13">
//                       Since last week
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Card 3 - Total Courses */}
//             <div className="col-xl-3 col-md-6">
//               <div className="card card-h-100">
//                 <div className="card-body">
//                   <div className="row align-items-center">
//                     <div className="col-6">
//                       <span className="text-muted mb-3 lh-1 d-block text-truncate">
//                         Total Courses
//                       </span>
//                       <h4 className="mb-3">
//                         {dashboardData.totalCourses.toLocaleString()}
//                       </h4>
//                     </div>
//                     <div className="col-6">
//                       <img src="./assets2/images/users/graph.PNG" alt="Courses Graph" height="40" />
//                     </div>
//                   </div>
//                   <div className="text-nowrap">
//                     {formatTrend(trends.coursesChange, 'change')}
//                     <span className="ms-1 text-muted font-size-13">
//                       Since last week
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Card 4 - Completed Courses */}
//             <div className="col-xl-3 col-md-6">
//               <div className="card card-h-100">
//                 <div className="card-body">
//                   <div className="row align-items-center">
//                     <div className="col-6">
//                       <span className="text-muted mb-3 lh-1 d-block text-truncate">
//                         Completed Courses
//                       </span>
//                       <h4 className="mb-3">
//                         {dashboardData.completedCourses.toLocaleString()}
//                       </h4>
//                     </div>
//                     <div className="col-6">
//                       <img src="./assets2/images/users/graph.PNG" alt="Completed Graph" height="40" />
//                     </div>
//                   </div>
//                   <div className="text-nowrap">
//                     {formatTrend(trends.completedChange, 'completion')}
//                     <span className="ms-1 text-muted font-size-13">
//                       Since last week
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Refresh Button */}
//           <div className="row mb-3">
//             <div className="col-12">
//               <button 
//                 className="btn btn-primary btn-sm"
//                 onClick={() => window.location.reload()}
//               >
//                 <i className="mdi mdi-refresh me-1"></i>
//                 Refresh Data
//               </button>
//             </div>
//           </div>

//           <Dashsub />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashBoard1;

// import React, { useState, useEffect } from "react";
// import { 
//   Users, 
//   ShoppingCart, 
//   BookOpen, 
//   CheckCircle, 
//   TrendingUp, 
//   TrendingDown,
//   RefreshCw,
//   AlertCircle,
//   BarChart3
// } from "lucide-react";
// import Dashsub from "./Dashsub";

// const DashBoard1 = () => {
//   const [dashboardData, setDashboardData] = useState({
//     students: {
//       total: 0,
//       weeklyChange: 0,
//       isIncrease: true
//     },
//     orders: {
//       total: 0,
//       weeklyChange: 0,
//       isIncrease: true
//     },
//     courses: {
//       total: 0,
//       weeklyChange: 0,
//       isIncrease: true
//     },
//     completedCourses: {
//       total: 0,
//       completionRate: 0,
//       isIncrease: true
//     }
//   });

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [lastUpdated, setLastUpdated] = useState(null);

//   const API_BASE_URL = '/api';

//   // Mock data for development/testing when APIs are not available
//   const getMockData = () => ({
//     students: Array.from({ length: 150 }, (_, i) => ({
//       id: i + 1,
//       name: `Student ${i + 1}`,
//       createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString()
//     })),
//     orders: Array.from({ length: 89 }, (_, i) => ({
//       id: i + 1,
//       studentId: Math.floor(Math.random() * 150) + 1,
//       status: Math.random() > 0.3 ? 'completed' : 'pending',
//       courseCompleted: Math.random() > 0.4,
//       createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString()
//     })),
//     courses: Array.from({ length: 25 }, (_, i) => ({
//       id: i + 1,
//       title: `Course ${i + 1}`,
//       createdAt: new Date(Date.now() - Math.random() * 60 * 24 * 60 * 60 * 1000).toISOString()
//     }))
//   });

//   // Fetch data with fallback to mock data
//   const fetchDashboardData = async (useMockData = false) => {
//     try {
//       setLoading(true);
//       setError(null);
      
//       let studentsData, ordersData, coursesData;

//       if (useMockData) {
//         // Use mock data
//         const mockData = getMockData();
//         studentsData = mockData.students;
//         ordersData = mockData.orders;
//         coursesData = mockData.courses;
//       } else {
//         // Try to fetch from API
//         const [studentsResponse, ordersResponse, coursesResponse] = await Promise.all([
//           fetch(`${API_BASE_URL}/students`),
//           // fetch(`${API_BASE_URL}/orders`),
//           fetch(`${API_BASE_URL}/courses`)
//         ]);

//         if (!studentsResponse.ok || !ordersResponse.ok || !coursesResponse.ok) {
//           throw new Error(`API Error: Students(${studentsResponse.status}), Orders(${ordersResponse.status}), Courses(${coursesResponse.status})`);
//         }

//         studentsData = await studentsResponse.json();
//         ordersData = await ordersResponse.json();
//         coursesData = await coursesResponse.json();
//       }

//       // Calculate statistics
//       const currentDate = new Date();
//       const oneWeekAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);

//       // Students statistics
//       const totalStudents = studentsData.length;
//       const newStudentsThisWeek = studentsData.filter(student => 
//         new Date(student.createdAt) >= oneWeekAgo
//       ).length;
//       const studentsLastWeek = totalStudents - newStudentsThisWeek;
//       const studentWeeklyChange = studentsLastWeek > 0 
//         ? ((newStudentsThisWeek / studentsLastWeek) * 100).toFixed(1)
//         : newStudentsThisWeek > 0 ? 100 : 0;

//       // Orders statistics
//       const totalOrders = ordersData.length;
//       const newOrdersThisWeek = ordersData.filter(order => 
//         new Date(order.createdAt) >= oneWeekAgo
//       ).length;
//       const ordersLastWeek = totalOrders - newOrdersThisWeek;
//       const orderWeeklyChange = ordersLastWeek > 0 
//         ? ((newOrdersThisWeek / ordersLastWeek) * 100).toFixed(1)
//         : newOrdersThisWeek > 0 ? 100 : 0;

//       // Courses statistics
//       const totalCourses = coursesData.length;
//       const newCoursesThisWeek = coursesData.filter(course => 
//         new Date(course.createdAt) >= oneWeekAgo
//       ).length;
//       const coursesLastWeek = totalCourses - newCoursesThisWeek;
//       const courseWeeklyChange = coursesLastWeek > 0 
//         ? ((newCoursesThisWeek / coursesLastWeek) * 100).toFixed(1)
//         : newCoursesThisWeek > 0 ? 100 : 0;

//       // Completed courses statistics
//       const completedCourses = ordersData.filter(order => 
//         order.status === 'completed' || order.courseCompleted === true
//       ).length;
//       const completionRate = totalOrders > 0 
//         ? ((completedCourses / totalOrders) * 100).toFixed(1)
//         : 0;

//       setDashboardData({
//         students: {
//           total: totalStudents,
//           weeklyChange: studentWeeklyChange,
//           isIncrease: newStudentsThisWeek >= studentsLastWeek
//         },
//         orders: {
//           total: totalOrders,
//           weeklyChange: orderWeeklyChange,
//           isIncrease: newOrdersThisWeek >= ordersLastWeek
//         },
//         courses: {
//           total: totalCourses,
//           weeklyChange: courseWeeklyChange,
//           isIncrease: newCoursesThisWeek >= coursesLastWeek
//         },
//         completedCourses: {
//           total: completedCourses,
//           completionRate: parseFloat(completionRate),
//           isIncrease: completionRate > 50
//         }
//       });

//       setLastUpdated(new Date());

//     } catch (err) {
//       console.error('Error fetching dashboard data:', err);
//       setError(err.message);
      
//       // If API fails, try mock data
//       if (!useMockData) {
//         console.log('API failed, falling back to mock data...');
//         await fetchDashboardData(true);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDashboardData();

//     // Refresh data every 5 minutes
//     const interval = setInterval(() => fetchDashboardData(), 5 * 60 * 1000);
    
//     return () => clearInterval(interval);
//   }, []);

//   const handleRetry = () => {
//     fetchDashboardData();
//   };

//   const StatCard = ({ title, value, change, isIncrease, icon: Icon, color, subtitle }) => (
//     <div className="col-xl-3 col-md-6 mb-4">
//       <div className="card border-0 shadow-sm h-100">
//         <div className="card-body">
//           <div className="d-flex align-items-center">
//             <div className="flex-shrink-0">
//               <div className={`avatar-sm rounded-circle bg-${color} d-flex align-items-center justify-content-center`}>
//                 <Icon className={`text-white`} size={24} />
//               </div>
//             </div>
//             <div className="flex-grow-1 ms-3">
//               <div className="d-flex justify-content-between align-items-start">
//                 <div>
//                   <p className="text-muted mb-2 text-truncate">{title}</p>
//                   <h4 className="mb-0">{value.toLocaleString()}</h4>
//                 </div>
//                 <div className="text-end">
//                   <BarChart3 className="text-muted" size={32} opacity={0.3} />
//                 </div>
//               </div>
//               <div className="d-flex align-items-center mt-2">
//                 {isIncrease ? (
//                   <TrendingUp className="text-success me-1" size={16} />
//                 ) : (
//                   <TrendingDown className="text-danger me-1" size={16} />
//                 )}
//                 <span className={`badge ${isIncrease ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'} me-2`}>
//                   {isIncrease ? '+' : '-'}{change}%
//                 </span>
//                 <small className="text-muted">{subtitle}</small>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   if (loading) {
//     return (
//       <div className="main-content">
//         <div className="page-content">
//           <div className="container-fluid">
//             <div className="row justify-content-center">
//               <div className="col-md-6 text-center">
//                 <div className="d-flex align-items-center justify-content-center mb-3">
//                   <RefreshCw className="text-primary me-2 animate-spin" size={24} />
//                   <h5 className="mb-0">Loading Dashboard</h5>
//                 </div>
//                 <p className="text-muted">Fetching your dashboard data...</p>
//                 <div className="progress" style={{ height: '4px' }}>
//                   <div className="progress-bar progress-bar-striped progress-bar-animated" 
//                        role="progressbar" style={{ width: '100%' }}></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error && !dashboardData.students.total) {
//     return (
//       <div className="main-content">
//         <div className="page-content">
//           <div className="container-fluid">
//             <div className="row justify-content-center">
//               <div className="col-md-8">
//                 <div className="card border-0 shadow-sm">
//                   <div className="card-body text-center p-5">
//                     <AlertCircle className="text-danger mb-3" size={48} />
//                     <h4 className="text-danger mb-3">Dashboard Error</h4>
//                     <p className="text-muted mb-4">{error}</p>
//                     <div className="d-flex gap-2 justify-content-center">
//                       <button 
//                         className="btn btn-primary d-flex align-items-center"
//                         onClick={handleRetry}
//                       >
//                         <RefreshCw size={16} className="me-2" />
//                         Retry Connection
//                       </button>
//                       <button 
//                         className="btn btn-outline-secondary d-flex align-items-center"
//                         onClick={() => fetchDashboardData(true)}
//                       >
//                         Load Demo Data
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="main-content">
//       <div className="page-content">
//         <div className="container-fluid">
//           {/* Page Header */}
//           <div className="row mb-4">
//             <div className="col-12">
//               <div className="d-flex justify-content-between align-items-center">
//                 <div>
//                   <h4 className="mb-1 fw-bold">Dashboard Overview</h4>
//                   <p className="text-muted mb-0">
//                     Welcome back! Here's what's happening with your platform.
//                   </p>
//                 </div>
//                 <div className="d-flex align-items-center gap-2">
//                   {lastUpdated && (
//                     <small className="text-muted">
//                       Last updated: {lastUpdated.toLocaleTimeString()}
//                     </small>
//                   )}
//                   <button 
//                     className="btn btn-outline-primary btn-sm d-flex align-items-center"
//                     onClick={handleRetry}
//                     disabled={loading}
//                   >
//                     <RefreshCw size={14} className="me-1" />
//                     Refresh
//                   </button>
//                 </div>
//               </div>
//               {error && (
//                 <div className="alert alert-warning alert-dismissible mt-3" role="alert">
//                   <AlertCircle size={16} className="me-2" />
//                   API connection issue. Showing available data.
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Stats Cards */}
//           <div className="row">
//             <StatCard
//               title="Total Students"
//               value={dashboardData.students.total}
//               change={dashboardData.students.weeklyChange}
//               isIncrease={dashboardData.students.isIncrease}
//               icon={Users}
//               color="primary"
//               subtitle="Since last week"
//             />
            
//             <StatCard
//               title="Total Orders"
//               value={dashboardData.orders.total}
//               change={dashboardData.orders.weeklyChange}
//               isIncrease={dashboardData.orders.isIncrease}
//               icon={ShoppingCart}
//               color="success"
//               subtitle="Since last week"
//             />
            
//             <StatCard
//               title="Available Courses"
//               value={dashboardData.courses.total}
//               change={dashboardData.courses.weeklyChange}
//               isIncrease={dashboardData.courses.isIncrease}
//               icon={BookOpen}
//               color="info"
//               subtitle="Since last week"
//             />
            
//             <StatCard
//               title="Completed Courses"
//               value={dashboardData.completedCourses.total}
//               change={dashboardData.completedCourses.completionRate}
//               isIncrease={dashboardData.completedCourses.isIncrease}
//               icon={CheckCircle}
//               color="warning"
//               subtitle="Completion rate"
//             />
//           </div>

//           <Dashsub />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashBoard1;


import React, { useState, useEffect } from "react";
import Dashsub from "./Dashsub";

const DashBoard1 = () => {
  const [dashboardData, setDashboardData] = useState({
    totalStudents: 0,
    totalCourses: 0,
    completedCourses: 0,
    totalOrders: 0,
    loading: true,
    error: null
  });

  const [trends, setTrends] = useState({
    studentsChange: 0,
    coursesChange: 0,
    ordersChange: 0,
    completedChange: 0
  });

  // Fetch dashboard data from APIs
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setDashboardData(prev => ({ ...prev, loading: true, error: null }));

        // Fetch students data
        const studentsResponse = await fetch('http://localhost:8080/api/students');
        const studentsData = await studentsResponse.json();

        // Fetch courses data
        const coursesResponse = await fetch('http://localhost:8080/api/courses');
        const coursesData = await coursesResponse.json();

        // Fetch orders data
        const ordersResponse = await fetch('http://localhost:8080/api/orders');
        const ordersData = await ordersResponse.json();

        // Debug: Log the API responses
        console.log('Students API Response:', studentsData);
        console.log('Courses API Response:', coursesData);
        console.log('Orders API Response:', ordersData);

        // Calculate metrics - handle different response formats
        let totalStudents = 0;
        let totalCourses = 0;

        // Handle students count
        if (Array.isArray(studentsData)) {
          totalStudents = studentsData.length;
        } else if (studentsData && typeof studentsData === 'object') {
          totalStudents = studentsData.total || studentsData.count || studentsData.length || 0;
          // If studentsData has a 'data' property that contains the array
          if (studentsData.data && Array.isArray(studentsData.data)) {
            totalStudents = studentsData.data.length;
          }
        }

        // Handle courses count
        if (Array.isArray(coursesData)) {
          totalCourses = coursesData.length;
        } else if (coursesData && typeof coursesData === 'object') {
          totalCourses = coursesData.total || coursesData.count || coursesData.length || 0;
          // If coursesData has a 'data' property that contains the array
          if (coursesData.data && Array.isArray(coursesData.data)) {
            totalCourses = coursesData.data.length;
          }
        }

        // Handle orders count
        let totalOrders = 0;
        if (Array.isArray(ordersData)) {
          totalOrders = ordersData.length;
        } else if (ordersData && typeof ordersData === 'object') {
          totalOrders = ordersData.total || ordersData.count || ordersData.length || 0;
          // If ordersData has a 'data' property that contains the array
          if (ordersData.data && Array.isArray(ordersData.data)) {
            totalOrders = ordersData.data.length;
          }
        }
        
        // Calculate completed courses - handle different response formats
        let completedCourses = 0;
        if (Array.isArray(coursesData)) {
          completedCourses = coursesData.filter(course => 
            course.status === 'completed' || 
            course.completed === true ||
            course.isCompleted === true
          ).length;
        } else if (coursesData && coursesData.data && Array.isArray(coursesData.data)) {
          completedCourses = coursesData.data.filter(course => 
            course.status === 'completed' || 
            course.completed === true ||
            course.isCompleted === true
          ).length;
        } else if (coursesData && typeof coursesData === 'object') {
          completedCourses = coursesData.completed || coursesData.completedCount || 0;
        }

        // Calculate leads - handle different response formats
        let totalLeads = 0;
        if (Array.isArray(studentsData)) {
          totalLeads = studentsData.filter(student => {
            const isRecent = student.createdAt && 
              new Date() - new Date(student.createdAt) < 30 * 24 * 60 * 60 * 1000;
            return student.status === 'lead' || student.isLead === true || isRecent;
          }).length;
        } else if (studentsData && studentsData.data && Array.isArray(studentsData.data)) {
          totalLeads = studentsData.data.filter(student => {
            const isRecent = student.createdAt && 
              new Date() - new Date(student.createdAt) < 30 * 24 * 60 * 60 * 1000;
            return student.status === 'lead' || student.isLead === true || isRecent;
          }).length;
        } else if (studentsData && typeof studentsData === 'object') {
          totalLeads = studentsData.leads || studentsData.leadsCount || Math.floor(totalStudents * 0.3); // Default fallback
        }

        console.log('Calculated Values:', {
          totalStudents,
          totalCourses,
          completedCourses,
          totalLeads
        });

        console.log('Calculated Values:', {
          totalStudents,
          totalCourses,
          completedCourses,
          totalOrders
        });

        // Calculate trends (you might want to fetch historical data for accurate trends)
        const studentsChange = calculateTrend(totalStudents, 1400); // Compare with previous value
        const coursesChange = calculateTrend(totalCourses, 1125);
        const ordersChange = calculateTrend(totalOrders, 300);
        const completedChange = calculateTrend(completedCourses, 234);

        setDashboardData({
          totalStudents,
          totalCourses,
          completedCourses,
          totalOrders,
          loading: false,
          error: null
        });

        setTrends({
          studentsChange,
          coursesChange,
          ordersChange,
          completedChange
        });

      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        console.error('Error details:', {
          message: error.message,
          stack: error.stack
        });
        setDashboardData(prev => ({
          ...prev,
          loading: false,
          error: `Failed to load dashboard data: ${error.message}`
        }));
      }
    };

    fetchDashboardData();
  }, []);

  // Helper function to calculate percentage change
  const calculateTrend = (current, previous) => {
    if (previous === 0) return 0;
    return ((current - previous) / previous * 100).toFixed(1);
  };

  // Helper function to format trend display
  const formatTrend = (change, suffix = '') => {
    const isPositive = parseFloat(change) >= 0;
    const badgeClass = isPositive ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger';
    const sign = isPositive ? '+' : '';
    return (
      <span className={`badge ${badgeClass}`}>
        {sign}{change}% {suffix}
      </span>
    );
  };

  if (dashboardData.loading) {
    return (
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="text-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <p className="mt-2">Loading dashboard data...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (dashboardData.error) {
    return (
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="alert alert-danger" role="alert">
                  <h4 className="alert-heading">Error!</h4>
                  <p>{dashboardData.error}</p>
                  <button 
                    className="btn btn-outline-danger"
                    onClick={() => window.location.reload()}
                  >
                    Retry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          {/* Page Title */}
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0 font-size-18">Dashboard</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <a href="javascript: void(0);">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Card 1 - Total Students */}
            <div className="col-xl-3 col-md-6">
              <div className="card card-h-100">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <span className="text-muted mb-3 lh-1 d-block text-truncate">
                        Total Students
                      </span>
                      <h4 className="mb-3">
                        {dashboardData.totalStudents.toLocaleString()}
                      </h4>
                    </div>
                    <div className="col-6">
                      <img src="./assets2/images/users/graph.PNG" alt="Students Graph" height="40" />
                    </div>
                  </div>
                  <div className="text-nowrap">
                    {formatTrend(trends.studentsChange, 'change')}
                    <span className="ms-1 text-muted font-size-13">
                      Since last week
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Total Orders */}
            <div className="col-xl-3 col-md-6">
              <div className="card card-h-100">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <span className="text-muted mb-3 lh-1 d-block text-truncate">
                        Total Sales
                      </span>
                      <h4 className="mb-3">
                        {dashboardData.totalOrders.toLocaleString()}
                      </h4>
                    </div>
                    <div className="col-6">
                      <img src="./assets2/images/users/graph.PNG" alt="Orders Graph" height="40" />
                    </div>
                  </div>
                  <div className="text-nowrap">
                    {formatTrend(trends.ordersChange, 'change')}
                    <span className="ms-1 text-muted font-size-13">
                      Since last week
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Total Courses */}
            <div className="col-xl-3 col-md-6">
              <div className="card card-h-100">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <span className="text-muted mb-3 lh-1 d-block text-truncate">
                        Total Courses
                      </span>
                      <h4 className="mb-3">
                        {dashboardData.totalCourses.toLocaleString()}
                      </h4>
                    </div>
                    <div className="col-6">
                      <img src="./assets2/images/users/graph.PNG" alt="Courses Graph" height="40" />
                    </div>
                  </div>
                  <div className="text-nowrap">
                    {formatTrend(trends.coursesChange, 'change')}
                    <span className="ms-1 text-muted font-size-13">
                      Since last week
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Completed Courses */}
            <div className="col-xl-3 col-md-6">
              <div className="card card-h-100">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <span className="text-muted mb-3 lh-1 d-block text-truncate">
                        Completed Courses
                      </span>
                      <h4 className="mb-3">
                        {dashboardData.completedCourses.toLocaleString()}
                      </h4>
                    </div>
                    <div className="col-6">
                      <img src="./assets2/images/users/graph.PNG" alt="Completed Graph" height="40" />
                    </div>
                  </div>
                  <div className="text-nowrap">
                    {formatTrend(trends.completedChange, 'completion')}
                    <span className="ms-1 text-muted font-size-13">
                      Since last week
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Refresh Button */}
          <div className="row mb-3">
            <div className="col-12">
              <button 
                className="btn btn-primary btn-sm"
                onClick={() => window.location.reload()}
              >
                <i className="mdi mdi-refresh me-1"></i>
                Refresh Data
              </button>
            </div>
          </div>

          <Dashsub />
        </div>
      </div>
    </div>
  );
};

export default DashBoard1;