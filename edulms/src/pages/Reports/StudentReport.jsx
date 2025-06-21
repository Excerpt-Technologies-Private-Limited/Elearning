// import React, { useState, useEffect } from 'react';
// import Header1 from '../../../pages/Header/Header';
// import SideNavBar1 from '../../../pages/SideNavBar/SideNavBar';

// function StudentEnrollmentReport() {
//   const [students, setStudents] = useState([]);
//   const [filteredStudents, setFilteredStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [studentsPerPage] = useState(10);

//   // Filter states
//   const [filters, setFilters] = useState({
//     department: '',
//     semester: '',
//     city: '',
//     country: '',
//     language: '',
//     searchTerm: ''
//   });

//   // Fetch students data
//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch('/api/students'); // Replace with your actual API endpoint
//       const data = await response.json();

//       // Ensure data is an array
//       const studentsArray = Array.isArray(data) ? data : (data.students ? data.students : []);

//       setStudents(studentsArray);
//       setFilteredStudents(studentsArray);
//     } catch (error) {
//       console.error('Error fetching students:', error);
//       setStudents([]);
//       setFilteredStudents([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Apply filters
//   useEffect(() => {
//     // Ensure students is an array before filtering
//     if (!Array.isArray(students)) {
//       setFilteredStudents([]);
//       return;
//     }

//     let filtered = students.filter(student => {
//       return (
//         (filters.department === '' || student.department?.toLowerCase().includes(filters.department.toLowerCase())) &&
//         (filters.semester === '' || student.semester === filters.semester) &&
//         (filters.city === '' || student.city?.toLowerCase().includes(filters.city.toLowerCase())) &&
//         (filters.country === '' || student.country?.toLowerCase().includes(filters.country.toLowerCase())) &&
//         (filters.language === '' || student.language?.toLowerCase().includes(filters.language.toLowerCase())) &&
//         (filters.searchTerm === '' ||
//           student.username?.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
//           student.email?.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
//           student.studentId?.toLowerCase().includes(filters.searchTerm.toLowerCase())
//         )
//       );
//     });
//     setFilteredStudents(filtered);
//     setCurrentPage(1);
//   }, [filters, students]);

//   // Handle filter changes
//   const handleFilterChange = (field, value) => {
//     setFilters(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   // Clear all filters
//   const clearFilters = () => {
//     setFilters({
//       department: '',
//       semester: '',
//       city: '',
//       country: '',
//       language: '',
//       searchTerm: ''
//     });
//   };

//   // Pagination
//   const indexOfLastStudent = currentPage * studentsPerPage;
//   const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;

//   // Ensure filteredStudents is an array before slicing
//   const currentStudents = Array.isArray(filteredStudents)
//     ? filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent)
//     : [];

//   const totalPages = Array.isArray(filteredStudents)
//     ? Math.ceil(filteredStudents.length / studentsPerPage)
//     : 0;

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   // Get unique values for filter dropdowns
//   const getUniqueValues = (field) => {
//     if (!Array.isArray(students)) return [];
//     return [...new Set(students.map(student => student[field]).filter(Boolean))];
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric'
//     });
//   };

//   return (
//     <div>
//       <Header1 />
//       <SideNavBar1 />
//       <div className="main-content">
//         <div className="page-content">
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-12">
//                 <div className="card">
//                   <div className="card-header">
//                     <div className="d-flex justify-content-between align-items-center">
//                       <h4 className="card-title mb-0">
//                         <i className="bx bx-user-check me-2"></i>
//                         Student Enrollment Report
//                       </h4>
//                       <div className="d-flex gap-2">
//                         <span className="badge bg-primary">
//                           Total Students: {Array.isArray(filteredStudents) ? filteredStudents.length : 0}
//                         </span>
//                         <button
//                           className="btn btn-outline-secondary btn-sm"
//                           onClick={clearFilters}
//                         >
//                           <i className="bx bx-refresh me-1"></i>
//                           Clear Filters
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="card-body">
//                     {/* Filters Section */}
//                     <div className="row mb-4 p-3 bg-light rounded">
//                       <div className="col-md-12 mb-3">
//                         <h6 className="text-muted mb-3">
//                           <i className="bx bx-filter-alt me-2"></i>
//                           Filter Students
//                         </h6>
//                       </div>

//                       {/* Search Input */}
//                       <div className="col-md-4 mb-3">
//                         <label className="form-label">Search</label>
//                         <div className="input-group">
//                           <span className="input-group-text">
//                             <i className="bx bx-search"></i>
//                           </span>
//                           <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Search by name, email, or student ID..."
//                             value={filters.searchTerm}
//                             onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
//                           />
//                         </div>
//                       </div>

//                       {/* Department Filter */}
//                       <div className="col-md-2 mb-3">
//                         <label className="form-label">Department</label>
//                         <select
//                           className="form-select"
//                           value={filters.department}
//                           onChange={(e) => handleFilterChange('department', e.target.value)}
//                         >
//                           <option value="">All Departments</option>
//                           {getUniqueValues('department').map(dept => (
//                             <option key={dept} value={dept}>{dept}</option>
//                           ))}
//                         </select>
//                       </div>

//                       {/* Semester Filter */}
//                       <div className="col-md-2 mb-3">
//                         <label className="form-label">Semester</label>
//                         <select
//                           className="form-select"
//                           value={filters.semester}
//                           onChange={(e) => handleFilterChange('semester', e.target.value)}
//                         >
//                           <option value="">All Semesters</option>
//                           {getUniqueValues('semester').map(sem => (
//                             <option key={sem} value={sem}>Semester {sem}</option>
//                           ))}
//                         </select>
//                       </div>

//                       {/* City Filter */}
//                       <div className="col-md-2 mb-3">
//                         <label className="form-label">City</label>
//                         <select
//                           className="form-select"
//                           value={filters.city}
//                           onChange={(e) => handleFilterChange('city', e.target.value)}
//                         >
//                           <option value="">All Cities</option>
//                           {getUniqueValues('city').map(city => (
//                             <option key={city} value={city}>{city}</option>
//                           ))}
//                         </select>
//                       </div>

//                       {/* Language Filter */}
//                       <div className="col-md-2 mb-3">
//                         <label className="form-label">Language</label>
//                         <select
//                           className="form-select"
//                           value={filters.language}
//                           onChange={(e) => handleFilterChange('language', e.target.value)}
//                         >
//                           <option value="">All Languages</option>
//                           {getUniqueValues('language').map(lang => (
//                             <option key={lang} value={lang}>{lang}</option>
//                           ))}
//                         </select>
//                       </div>
//                     </div>

//                     {/* Loading State */}
//                     {loading ? (
//                       <div className="text-center py-5">
//                         <div className="spinner-border text-primary" role="status">
//                           <span className="visually-hidden">Loading...</span>
//                         </div>
//                         <p className="mt-2 text-muted">Loading student data...</p>
//                       </div>
//                     ) : (
//                       <>
//                         {/* Students Table */}
//                         <div className="table-responsive">
//                           <table className="table table-bordered table-hover">
//                             <thead className="table-light">
//                               <tr>
//                                 <th>Student ID</th>
//                                 <th>Name</th>
//                                 <th>Email</th>
//                                 <th>Department</th>
//                                 <th>Semester</th>
//                                 <th>City</th>
//                                 <th>Phone</th>
//                                 <th>Enrollment Date</th>
//                                 <th>Courses</th>
//                                 <th>Status</th>
//                               </tr>
//                             </thead>
//                             <tbody>
//                               {currentStudents.length > 0 ? (
//                                 currentStudents.map((student) => (
//                                   <tr key={student._id}>
//                                     <td>
//                                       <span className="fw-bold text-primary">
//                                         {student.studentId}
//                                       </span>
//                                     </td>
//                                     <td>
//                                       <div className="d-flex align-items-center">
//                                         <div className="avatar-sm me-3">
//                                           {student.profilePhoto ? (
//                                             <img
//                                               src={student.profilePhoto}
//                                               alt={student.username}
//                                               className="avatar-sm rounded-circle"
//                                               style={{width: '35px', height: '35px', objectFit: 'cover'}}
//                                             />
//                                           ) : (
//                                             <div className="avatar-sm bg-primary rounded-circle d-flex align-items-center justify-content-center">
//                                               <span className="text-white fw-bold">
//                                                 {student.username?.charAt(0)?.toUpperCase()}
//                                               </span>
//                                             </div>
//                                           )}
//                                         </div>
//                                         <div>
//                                           <h6 className="mb-0">{student.username}</h6>
//                                           <small className="text-muted">{student.language}</small>
//                                         </div>
//                                       </div>
//                                     </td>
//                                     <td>
//                                       <a href={`mailto:${student.email}`} className="text-decoration-none">
//                                         {student.email}
//                                       </a>
//                                     </td>
//                                     <td>
//                                       <span className="badge bg-info">
//                                         {student.department || 'N/A'}
//                                       </span>
//                                     </td>
//                                     <td>
//                                       <span className="badge bg-success">
//                                         Sem {student.semester}
//                                       </span>
//                                     </td>
//                                     <td>
//                                       <div>
//                                         <div>{student.city}</div>
//                                         <small className="text-muted">{student.state}, {student.country}</small>
//                                       </div>
//                                     </td>
//                                     <td>
//                                       <a href={`tel:${student.phone}`} className="text-decoration-none">
//                                         {student.phone}
//                                       </a>
//                                     </td>
//                                     <td>
//                                       {formatDate(student.createdAt)}
//                                     </td>
//                                     <td>
//                                       <span className="badge bg-warning">
//                                         {student.courseIds?.length || 0} Courses
//                                       </span>
//                                     </td>
//                                     <td>
//                                       <span className="badge bg-success">
//                                         <i className="bx bx-check-circle me-1"></i>
//                                         Active
//                                       </span>
//                                     </td>
//                                   </tr>
//                                 ))
//                               ) : (
//                                 <tr>
//                                   <td colSpan="10" className="text-center py-4">
//                                     <div className="text-muted">
//                                       <i className="bx bx-search-alt-2 display-4"></i>
//                                       <p className="mt-2">No students found matching your criteria</p>
//                                     </div>
//                                   </td>
//                                 </tr>
//                               )}
//                             </tbody>
//                           </table>
//                         </div>

//                         {/* Pagination */}
//                         {totalPages > 1 && (
//                           <div className="row mt-4">
//                             <div className="col-sm-12 col-md-5">
//                               <div className="dataTables_info">
//                                 Showing {indexOfFirstStudent + 1} to {Math.min(indexOfLastStudent, Array.isArray(filteredStudents) ? filteredStudents.length : 0)} of {Array.isArray(filteredStudents) ? filteredStudents.length : 0} entries
//                               </div>
//                             </div>
//                             <div className="col-sm-12 col-md-7">
//                               <div className="dataTables_paginate paging_simple_numbers">
//                                 <ul className="pagination justify-content-end">
//                                   <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//                                     <button
//                                       className="page-link"
//                                       onClick={() => paginate(currentPage - 1)}
//                                       disabled={currentPage === 1}
//                                     >
//                                       Previous
//                                     </button>
//                                   </li>

//                                   {[...Array(totalPages)].map((_, index) => {
//                                     const pageNumber = index + 1;
//                                     if (
//                                       pageNumber === 1 ||
//                                       pageNumber === totalPages ||
//                                       (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
//                                     ) {
//                                       return (
//                                         <li
//                                           key={pageNumber}
//                                           className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}
//                                         >
//                                           <button
//                                             className="page-link"
//                                             onClick={() => paginate(pageNumber)}
//                                           >
//                                             {pageNumber}
//                                           </button>
//                                         </li>
//                                       );
//                                     } else if (
//                                       pageNumber === currentPage - 2 ||
//                                       pageNumber === currentPage + 2
//                                     ) {
//                                       return (
//                                         <li key={pageNumber} className="page-item disabled">
//                                           <span className="page-link">...</span>
//                                         </li>
//                                       );
//                                     }
//                                     return null;
//                                   })}

//                                   <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
//                                     <button
//                                       className="page-link"
//                                       onClick={() => paginate(currentPage + 1)}
//                                       disabled={currentPage === totalPages}
//                                     >
//                                       Next
//                                     </button>
//                                   </li>
//                                 </ul>
//                               </div>
//                             </div>
//                           </div>
//                         )}
//                       </>
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
// }

// export default StudentEnrollmentReport;

// import React, { useState, useEffect } from 'react';
// import Header1 from '../../../pages/Header/Header';
// import SideNavBar1 from '../../../pages/SideNavBar/SideNavBar';

// function StudentEnrollmentReport() {
//   const [students, setStudents] = useState([]);
//   const [filteredStudents, setFilteredStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [studentsPerPage] = useState(10);

//   // Filter states - removed city, country, language
//   const [filters, setFilters] = useState({
//     department: '',
//     semester: '',
//     searchTerm: '',
//     fromDate: '',
//     toDate: ''
//   });

//   // Fetch students data
//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch('/api/students'); // Replace with your actual API endpoint
//       const data = await response.json();

//       // Ensure data is an array
//       const studentsArray = Array.isArray(data) ? data : (data.students ? data.students : []);

//       // Filter students to only include those with studentId
//       const studentsWithId = studentsArray.filter(student =>
//         student.studentId && student.studentId.toString().trim() !== ''
//       );

//       setStudents(studentsWithId);
//       setFilteredStudents(studentsWithId);
//     } catch (error) {
//       console.error('Error fetching students:', error);
//       setStudents([]);
//       setFilteredStudents([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Apply filters
//   useEffect(() => {
//     // Ensure students is an array before filtering
//     if (!Array.isArray(students)) {
//       setFilteredStudents([]);
//       return;
//     }

//     let filtered = students.filter(student => {
//       const studentDate = new Date(student.createdAt);
//       const fromDate = filters.fromDate ? new Date(filters.fromDate) : null;
//       const toDate = filters.toDate ? new Date(filters.toDate) : null;

//       // Set time to start and end of day for proper comparison
//       if (fromDate) {
//         fromDate.setHours(0, 0, 0, 0);
//       }
//       if (toDate) {
//         toDate.setHours(23, 59, 59, 999);
//       }

//       return (
//         (filters.department === '' || student.department?.toLowerCase().includes(filters.department.toLowerCase())) &&
//         (filters.semester === '' || student.semester === filters.semester) &&
//         (filters.searchTerm === '' ||
//           student.username?.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
//           student.email?.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
//           student.studentId?.toLowerCase().includes(filters.searchTerm.toLowerCase())
//         ) &&
//         (!fromDate || studentDate >= fromDate) &&
//         (!toDate || studentDate <= toDate)
//       );
//     });
//     setFilteredStudents(filtered);
//     setCurrentPage(1);
//   }, [filters, students]);

//   // Handle filter changes
//   const handleFilterChange = (field, value) => {
//     setFilters(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   // Clear all filters
//   const clearFilters = () => {
//     setFilters({
//       department: '',
//       semester: '',
//       searchTerm: '',
//       fromDate: '',
//       toDate: ''
//     });
//   };

//   // Pagination
//   const indexOfLastStudent = currentPage * studentsPerPage;
//   const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;

//   // Ensure filteredStudents is an array before slicing
//   const currentStudents = Array.isArray(filteredStudents)
//     ? filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent)
//     : [];

//   const totalPages = Array.isArray(filteredStudents)
//     ? Math.ceil(filteredStudents.length / studentsPerPage)
//     : 0;

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   // Get unique values for filter dropdowns
//   const getUniqueValues = (field) => {
//     if (!Array.isArray(students)) return [];
//     return [...new Set(students.map(student => student[field]).filter(Boolean))];
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric'
//     });
//   };

//   return (
//     <div>
//       <Header1 />
//       <SideNavBar1 />
//       <div className="main-content">
//         <div className="page-content">
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-12">
//                 <div className="card">
//                   <div className="card-header">
//                     <div className="d-flex justify-content-between align-items-center">
//                       <h4 className="card-title mb-0">
//                         <i className="bx bx-user-check me-2"></i>
//                         Student Enrollment Report
//                       </h4>
//                       <div className="d-flex gap-2">
//                         <span className="badge bg-primary">
//                           Total Students: {Array.isArray(filteredStudents) ? filteredStudents.length : 0}
//                         </span>
//                         <button
//                           className="btn btn-outline-secondary btn-sm"
//                           onClick={clearFilters}
//                         >
//                           <i className="bx bx-refresh me-1"></i>
//                           Clear Filters
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="card-body">
//                     {/* Filters Section */}
//                     <div className="row mb-4 p-3 bg-light rounded">
//                       <div className="col-md-12 mb-3">
//                         <h6 className="text-muted mb-3">
//                           <i className="bx bx-filter-alt me-2"></i>
//                           Filter Students
//                         </h6>
//                       </div>

//                       {/* Search Input */}
//                       <div className="col-md-4 mb-3">
//                         <label className="form-label">Search</label>
//                         <div className="input-group">
//                           <span className="input-group-text">
//                             <i className="bx bx-search"></i>
//                           </span>
//                           <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Search by name, email, or student ID..."
//                             value={filters.searchTerm}
//                             onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
//                           />
//                         </div>
//                       </div>

//                       {/* Department Filter */}
//                       <div className="col-md-2 mb-3">
//                         <label className="form-label">Department</label>
//                         <select
//                           className="form-select"
//                           value={filters.department}
//                           onChange={(e) => handleFilterChange('department', e.target.value)}
//                         >
//                           <option value="">All Departments</option>
//                           {getUniqueValues('department').map(dept => (
//                             <option key={dept} value={dept}>{dept}</option>
//                           ))}
//                         </select>
//                       </div>

//                       {/* Semester Filter */}
//                       <div className="col-md-2 mb-3">
//                         <label className="form-label">Semester</label>
//                         <select
//                           className="form-select"
//                           value={filters.semester}
//                           onChange={(e) => handleFilterChange('semester', e.target.value)}
//                         >
//                           <option value="">All Semesters</option>
//                           {getUniqueValues('semester').map(sem => (
//                             <option key={sem} value={sem}>Semester {sem}</option>
//                           ))}
//                         </select>
//                       </div>

//                       {/* From Date Filter */}
//                       <div className="col-md-2 mb-3">
//                         <label className="form-label">From Date</label>
//                         <input
//                           type="date"
//                           className="form-control"
//                           value={filters.fromDate}
//                           onChange={(e) => handleFilterChange('fromDate', e.target.value)}
//                         />
//                       </div>

//                       {/* To Date Filter */}
//                       <div className="col-md-2 mb-3">
//                         <label className="form-label">To Date</label>
//                         <input
//                           type="date"
//                           className="form-control"
//                           value={filters.toDate}
//                           onChange={(e) => handleFilterChange('toDate', e.target.value)}
//                         />
//                       </div>
//                     </div>

//                     {/* Loading State */}
//                     {loading ? (
//                       <div className="text-center py-5">
//                         <div className="spinner-border text-primary" role="status">
//                           <span className="visually-hidden">Loading...</span>
//                         </div>
//                         <p className="mt-2 text-muted">Loading student data...</p>
//                       </div>
//                     ) : (
//                       <>
//                         {/* Students Table */}
//                         <div className="table-responsive">
//                           <table className="table table-bordered table-hover">
//                             <thead className="table-light">
//                               <tr>
//                                 <th>Student ID</th>
//                                 <th>Name</th>
//                                 <th>Email</th>
//                                 <th>Department</th>
//                                 <th>Semester</th>
//                                 <th>City</th>
//                                 <th>Phone</th>
//                                 <th>Enrollment Date</th>
//                                 <th>Courses</th>
//                                 <th>Status</th>
//                               </tr>
//                             </thead>
//                             <tbody>
//                               {currentStudents.length > 0 ? (
//                                 currentStudents.map((student) => (
//                                   <tr key={student._id}>
//                                     <td>
//                                       <span className="fw-bold text-primary">
//                                         {student.studentId}
//                                       </span>
//                                     </td>
//                                     <td>
//                                       <div className="d-flex align-items-center">
//                                         <div className="avatar-sm me-3">
//                                           {student.profilePhoto ? (
//                                             <img
//                                               src={student.profilePhoto}
//                                               alt={student.username}
//                                               className="avatar-sm rounded-circle"
//                                               style={{width: '35px', height: '35px', objectFit: 'cover'}}
//                                             />
//                                           ) : (
//                                             <div className="avatar-sm bg-primary rounded-circle d-flex align-items-center justify-content-center">
//                                               <span className="text-white fw-bold">
//                                                 {student.username?.charAt(0)?.toUpperCase()}
//                                               </span>
//                                             </div>
//                                           )}
//                                         </div>
//                                         <div>
//                                           <h6 className="mb-0">{student.username}</h6>
//                                           <small className="text-muted">{student.language}</small>
//                                         </div>
//                                       </div>
//                                     </td>
//                                     <td>
//                                       <a href={`mailto:${student.email}`} className="text-decoration-none">
//                                         {student.email}
//                                       </a>
//                                     </td>
//                                     <td>
//                                       <span className="badge bg-info">
//                                         {student.department || 'N/A'}
//                                       </span>
//                                     </td>
//                                     <td>
//                                       <span className="badge bg-success">
//                                         Sem {student.semester}
//                                       </span>
//                                     </td>
//                                     <td>
//                                       <div>
//                                         <div>{student.city}</div>
//                                         <small className="text-muted">{student.state}, {student.country}</small>
//                                       </div>
//                                     </td>
//                                     <td>
//                                       <a href={`tel:${student.phone}`} className="text-decoration-none">
//                                         {student.phone}
//                                       </a>
//                                     </td>
//                                     <td>
//                                       {formatDate(student.createdAt)}
//                                     </td>
//                                     <td>
//                                       <span className="badge bg-warning">
//                                         {student.courseIds?.length || 0} Courses
//                                       </span>
//                                     </td>
//                                     <td>
//                                       <span className="badge bg-success">
//                                         <i className="bx bx-check-circle me-1"></i>
//                                         Active
//                                       </span>
//                                     </td>
//                                   </tr>
//                                 ))
//                               ) : (
//                                 <tr>
//                                   <td colSpan="10" className="text-center py-4">
//                                     <div className="text-muted">
//                                       <i className="bx bx-search-alt-2 display-4"></i>
//                                       <p className="mt-2">No students found matching your criteria</p>
//                                     </div>
//                                   </td>
//                                 </tr>
//                               )}
//                             </tbody>
//                           </table>
//                         </div>

//                         {/* Pagination */}
//                         {totalPages > 1 && (
//                           <div className="row mt-4">
//                             <div className="col-sm-12 col-md-5">
//                               <div className="dataTables_info">
//                                 Showing {indexOfFirstStudent + 1} to {Math.min(indexOfLastStudent, Array.isArray(filteredStudents) ? filteredStudents.length : 0)} of {Array.isArray(filteredStudents) ? filteredStudents.length : 0} entries
//                               </div>
//                             </div>
//                             <div className="col-sm-12 col-md-7">
//                               <div className="dataTables_paginate paging_simple_numbers">
//                                 <ul className="pagination justify-content-end">
//                                   <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//                                     <button
//                                       className="page-link"
//                                       onClick={() => paginate(currentPage - 1)}
//                                       disabled={currentPage === 1}
//                                     >
//                                       Previous
//                                     </button>
//                                   </li>

//                                   {[...Array(totalPages)].map((_, index) => {
//                                     const pageNumber = index + 1;
//                                     if (
//                                       pageNumber === 1 ||
//                                       pageNumber === totalPages ||
//                                       (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
//                                     ) {
//                                       return (
//                                         <li
//                                           key={pageNumber}
//                                           className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}
//                                         >
//                                           <button
//                                             className="page-link"
//                                             onClick={() => paginate(pageNumber)}
//                                           >
//                                             {pageNumber}
//                                           </button>
//                                         </li>
//                                       );
//                                     } else if (
//                                       pageNumber === currentPage - 2 ||
//                                       pageNumber === currentPage + 2
//                                     ) {
//                                       return (
//                                         <li key={pageNumber} className="page-item disabled">
//                                           <span className="page-link">...</span>
//                                         </li>
//                                       );
//                                     }
//                                     return null;
//                                   })}

//                                   <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
//                                     <button
//                                       className="page-link"
//                                       onClick={() => paginate(currentPage + 1)}
//                                       disabled={currentPage === totalPages}
//                                     >
//                                       Next
//                                     </button>
//                                   </li>
//                                 </ul>
//                               </div>
//                             </div>
//                           </div>
//                         )}
//                       </>
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
// }

// export default StudentEnrollmentReport;

import React, { useState, useEffect } from "react";
import Header1 from "../Header/Header";
import SideNavBar1 from "../SideNavBar/SideNavBar";

function StudentEnrollmentReport() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage] = useState(10);

  // Filter states - added courseEnrollment filter
  const [filters, setFilters] = useState({
    department: "",
    semester: "",
    searchTerm: "",
    fromDate: "",
    toDate: "",
    courseEnrollment: "", // New filter: '', 'enrolled', 'not-enrolled'
  });

  // Fetch students data
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8080/api/students"); // Replace with your actual API endpoint
      const data = await response.json();

      // Ensure data is an array
      const studentsArray = Array.isArray(data)
        ? data
        : data.students
        ? data.students
        : [];

      // Filter students to only include those with studentId
      const studentsWithId = studentsArray.filter(
        (student) =>
          student.studentId && student.studentId.toString().trim() !== ""
      );

      setStudents(studentsWithId);
      setFilteredStudents(studentsWithId);
    } catch (error) {
      console.error("Error fetching students:", error);
      setStudents([]);
      setFilteredStudents([]);
    } finally {
      setLoading(false);
    }
  };

  // Apply filters
  useEffect(() => {
    // Ensure students is an array before filtering
    if (!Array.isArray(students)) {
      setFilteredStudents([]);
      return;
    }

    let filtered = students.filter((student) => {
      const studentDate = new Date(student.createdAt);
      const fromDate = filters.fromDate ? new Date(filters.fromDate) : null;
      const toDate = filters.toDate ? new Date(filters.toDate) : null;

      // Set time to start and end of day for proper comparison
      if (fromDate) {
        fromDate.setHours(0, 0, 0, 0);
      }
      if (toDate) {
        toDate.setHours(23, 59, 59, 999);
      }

      // Course enrollment filter logic
      const studentCourseCount = student.courseIds?.length || 0;
      const courseEnrollmentMatch =
        filters.courseEnrollment === "" ||
        (filters.courseEnrollment === "enrolled" && studentCourseCount > 0) ||
        (filters.courseEnrollment === "not-enrolled" &&
          studentCourseCount === 0);

      return (
        (filters.department === "" ||
          student.department
            ?.toLowerCase()
            .includes(filters.department.toLowerCase())) &&
        (filters.semester === "" || student.semester === filters.semester) &&
        (filters.searchTerm === "" ||
          student.username
            ?.toLowerCase()
            .includes(filters.searchTerm.toLowerCase()) ||
          student.email
            ?.toLowerCase()
            .includes(filters.searchTerm.toLowerCase()) ||
          student.studentId
            ?.toLowerCase()
            .includes(filters.searchTerm.toLowerCase())) &&
        (!fromDate || studentDate >= fromDate) &&
        (!toDate || studentDate <= toDate) &&
        courseEnrollmentMatch
      );
    });
    setFilteredStudents(filtered);
    setCurrentPage(1);
  }, [filters, students]);

  // Handle filter changes
  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      department: "",
      semester: "",
      searchTerm: "",
      fromDate: "",
      toDate: "",
      courseEnrollment: "",
    });
  };

  // Pagination
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;

  // Ensure filteredStudents is an array before slicing
  const currentStudents = Array.isArray(filteredStudents)
    ? filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent)
    : [];

  const totalPages = Array.isArray(filteredStudents)
    ? Math.ceil(filteredStudents.length / studentsPerPage)
    : 0;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Get unique values for filter dropdowns
  const getUniqueValues = (field) => {
    if (!Array.isArray(students)) return [];
    return [
      ...new Set(students.map((student) => student[field]).filter(Boolean)),
    ];
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Get enrollment statistics
  const getEnrollmentStats = () => {
    if (!Array.isArray(filteredStudents))
      return { enrolled: 0, notEnrolled: 0 };

    const enrolled = filteredStudents.filter(
      (student) => (student.courseIds?.length || 0) > 0
    ).length;
    const notEnrolled = filteredStudents.filter(
      (student) => (student.courseIds?.length || 0) === 0
    ).length;

    return { enrolled, notEnrolled };
  };

  const enrollmentStats = getEnrollmentStats();

  return (
    <>
      <Header1 />
      <SideNavBar1 />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <div className="d-flex justify-content-between align-items-center">
                      <h4 className="card-title mb-0">
                        <i className="bx bx-user-check me-2"></i>
                        Student Enrollment Report
                      </h4>
                      <div className="d-flex flex-wrap gap-2">
                        <span>
                          Total Students:{" "}
                          {Array.isArray(filteredStudents)
                            ? filteredStudents.length
                            : 0}
                        </span>
                        <span>Enrolled: {enrollmentStats.enrolled}</span>
                        <span>Not Enrolled: {enrollmentStats.notEnrolled}</span>
                      </div>
                    </div>
                  </div>

                  <div className="card-body">
                    <div
                      id="datatable_wrapper"
                      className="dataTables_wrapper dt-bootstrap4 no-footer"
                    >
                      {/* Filters Section */}
                      <div className="row mb-4 ">
                        {/* Search Input */}
                        <div className="col-md-2 mb-3">
                          <label className="form-label">Search</label>

                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search by name, email, or student ID..."
                            value={filters.searchTerm}
                            onChange={(e) =>
                              handleFilterChange("searchTerm", e.target.value)
                            }
                          />
                        </div>

                        {/* Department Filter */}
                        <div className="col-md-2 mb-3">
                          <label className="form-label">Department</label>
                          <select
                            className="form-select"
                            value={filters.department}
                            onChange={(e) =>
                              handleFilterChange("department", e.target.value)
                            }
                          >
                            <option value="">All Departments</option>
                            {getUniqueValues("department").map((dept) => (
                              <option key={dept} value={dept}>
                                {dept}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Semester Filter */}
                        <div className="col-md-2 mb-3">
                          <label className="form-label">Semester</label>
                          <select
                            className="form-select"
                            value={filters.semester}
                            onChange={(e) =>
                              handleFilterChange("semester", e.target.value)
                            }
                          >
                            <option value="">All Semesters</option>
                            {getUniqueValues("semester").map((sem) => (
                              <option key={sem} value={sem}>
                                Semester {sem}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Course Enrollment Filter */}
                        <div className="col-md-2 mb-3">
                          <label className="form-label">Course Status</label>
                          <select
                            className="form-select"
                            value={filters.courseEnrollment}
                            onChange={(e) =>
                              handleFilterChange(
                                "courseEnrollment",
                                e.target.value
                              )
                            }
                          >
                            <option value="">All Students</option>
                            <option value="enrolled">
                              Enrolled in Courses
                            </option>
                            <option value="not-enrolled">Not Enrolled</option>
                          </select>
                        </div>

                        {/* From Date Filter */}
                        <div className="col-md-2 mb-3">
                          <label className="form-label">From Date</label>
                          <input
                            type="date"
                            className="form-control"
                            value={filters.fromDate}
                            onChange={(e) =>
                              handleFilterChange("fromDate", e.target.value)
                            }
                          />
                        </div>

                        {/* To Date Filter - moved to next row */}
                        <div className="col-md-2 mb-3">
                          <label className="form-label">To Date</label>
                          <input
                            type="date"
                            className="form-control"
                            value={filters.toDate}
                            onChange={(e) =>
                              handleFilterChange("toDate", e.target.value)
                            }
                          />
                        </div>
                      </div>

                      {/* Loading State */}
                      {loading ? (
                        <div className="text-center py-5">
                          <div
                            className="spinner-border text-primary"
                            role="status"
                          >
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          <p className="mt-2 text-muted">
                            Loading student data...
                          </p>
                        </div>
                      ) : (
                        <>
                          {/* Students Table */}
                          <div className="row">
                            <div className="col-sm-12 table-responsive">
                              <table
                                id="datatable"
                                className="table table-bordered"
                                style={{ width: "100%" }}
                                aria-describedby="datatable_info"
                              >
                                <thead>
                                  <tr>
                                    <th>Student ID</th>
                                    <th>Name</th>
                                    {/* <th>Email</th> */}
                                    <th>Department - Semester</th>
                                    {/* <th>Semester</th> */}
                                    <th>City</th>
                                    <th>Phone</th>
                                    <th>Enrollment Date</th>
                                    <th>Courses</th>
                                    <th>Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {currentStudents.length > 0 ? (
                                    currentStudents.map((student) => {
                                      const courseCount =
                                        student.courseIds?.length || 0;
                                      return (
                                        <tr key={student._id}>
                                          <td>
                                            <span className="fw-bold text-primary">
                                              {student.studentId}
                                            </span>
                                          </td>
                                          <td>
                                            <div className="d-flex align-items-center">
                                              <div className="avatar-sm me-3">
                                                {student.profilePhoto ? (
                                                  <img
                                                    src={student.profilePhoto}
                                                    alt={student.username}
                                                    className="avatar-sm rounded-circle"
                                                    style={{
                                                      width: "35px",
                                                      height: "35px",
                                                      objectFit: "cover",
                                                    }}
                                                  />
                                                ) : (
                                                  <div className="avatar-sm bg-primary rounded-circle d-flex align-items-center justify-content-center">
                                                    <span className="text-white fw-bold">
                                                      {student.username
                                                        ?.charAt(0)
                                                        ?.toUpperCase()}
                                                    </span>
                                                  </div>
                                                )}
                                              </div>
                                              <div>
                                                <h6 className="mb-0">
                                                  {student.username}
                                                </h6>
                                                <small className="text-muted">
                                                  {student.language}<br/>
                                                  {student.email}
                                                </small>
                                              </div>
                                            </div>
                                          </td>
                                          {/* <td>
                                            <a
                                              href={`mailto:${student.email}`}
                                              className="text-decoration-none"
                                            >
                                              {student.email}
                                            </a>
                                          </td> */}
                                          <td>
                                            <span className="badge bg-info fs-6 m-1">
                                              {student.department || "N/A"}
                                            </span>
                                            <span className="badge bg-success fs-6">
                                              Sem {student.semester}
                                            </span>
                                          </td>
                                          {/* <td>
                                            <span className="badge bg-success">
                                              Sem {student.semester}
                                            </span>
                                          </td> */}
                                          <td>
                                            <div>
                                              <div>{student.city}</div>
                                              <small className="text-muted">
                                                {student.state},{" "}
                                                {student.country}
                                              </small>
                                            </div>
                                          </td>
                                          <td>
                                            <a
                                              href={`tel:${student.phone}`}
                                              className="text-decoration-none"
                                            >
                                              {student.phone}
                                            </a>
                                          </td>
                                          <td>
                                            {formatDate(student.createdAt)}
                                          </td>
                                          <td>
                                            <span
                                              className={`badge ${
                                                courseCount > 0
                                                  ? "bg-success"
                                                  : "bg-secondary"
                                              }` }
                                            >
                                              {courseCount > 0
                                                ? `${courseCount} Course${
                                                    courseCount > 1 ? "s" : ""
                                                  }`
                                                : "No Courses"}
                                            </span>
                                          </td>
                                          <td>
                                            <p className="text-success">
                                              Active
                                            </p>
                                          </td>
                                        </tr>
                                      );
                                    })
                                  ) : (
                                    <tr>
                                      <td
                                        colSpan="10"
                                        className="text-center py-4"
                                      >
                                        <div className="text-muted">
                                          <i className="bx bx-search-alt-2 display-4"></i>
                                          <p className="mt-2">
                                            No students found matching your
                                            criteria
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  )}
                                </tbody>
                              </table>
                            </div>
                          </div>

                          {/* Pagination */}
                          {/* {totalPages > 1 && (
                            <div className="row mt-4">
                              <div className="col-sm-12 col-md-5">
                                <div className="dataTables_info">
                                  Showing {indexOfFirstStudent + 1} to{" "}
                                  {Math.min(
                                    indexOfLastStudent,
                                    Array.isArray(filteredStudents)
                                      ? filteredStudents.length
                                      : 0
                                  )}{" "}
                                  of{" "}
                                  {Array.isArray(filteredStudents)
                                    ? filteredStudents.length
                                    : 0}{" "}
                                  entries
                                </div>
                              </div>
                              <div className="col-sm-12 col-md-7">
                                <div className="dataTables_paginate paging_simple_numbers">
                                  <ul className="pagination justify-content-end">
                                    <li
                                      className={`page-item ${
                                        currentPage === 1 ? "disabled" : ""
                                      }`}
                                    >
                                      <button
                                        className="page-link"
                                        onClick={() =>
                                          paginate(currentPage - 1)
                                        }
                                        disabled={currentPage === 1}
                                      >
                                        Previous
                                      </button>
                                    </li>

                                    {[...Array(totalPages)].map((_, index) => {
                                      const pageNumber = index + 1;
                                      if (
                                        pageNumber === 1 ||
                                        pageNumber === totalPages ||
                                        (pageNumber >= currentPage - 1 &&
                                          pageNumber <= currentPage + 1)
                                      ) {
                                        return (
                                          <li
                                            key={pageNumber}
                                            className={`page-item ${
                                              currentPage === pageNumber
                                                ? "active"
                                                : ""
                                            }`}
                                          >
                                            <button
                                              className="page-link"
                                              onClick={() =>
                                                paginate(pageNumber)
                                              }
                                            >
                                              {pageNumber}
                                            </button>
                                          </li>
                                        );
                                      } else if (
                                        pageNumber === currentPage - 2 ||
                                        pageNumber === currentPage + 2
                                      ) {
                                        return (
                                          <li
                                            key={pageNumber}
                                            className="page-item disabled"
                                          >
                                            <span className="page-link">
                                              ...
                                            </span>
                                          </li>
                                        );
                                      }
                                      return null;
                                    })}

                                    <li
                                      className={`page-item ${
                                        currentPage === totalPages
                                          ? "disabled"
                                          : ""
                                      }`}
                                    >
                                      <button
                                        className="page-link"
                                        onClick={() =>
                                          paginate(currentPage + 1)
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
                          )} */}

                          {totalPages > 1 && (
                            <div className="row mt-4">
                              <div className="col-sm-12 col-md-5">
                                <div
                                  className="dataTables_info"
                                  id="datatable_info"
                                  role="status"
                                  aria-live="polite"
                                >
                                  Showing {indexOfFirstStudent + 1} to{" "}
                                  {Math.min(
                                    indexOfLastStudent,
                                    filteredStudents.length
                                  )}{" "}
                                  of {filteredStudents.length} entries
                                </div>
                              </div>
                              <div className="col-sm-12 col-md-7">
                                <div
                                  className="dataTables_paginate paging_simple_numbers"
                                  id="datatable_paginate"
                                >
                                  <ul className="pagination justify-content-end">
                                    {/* Previous button */}
                                    <li
                                      className={`paginate_button page-item previous ${
                                        currentPage === 1 ? "disabled" : ""
                                      }`}
                                    >
                                      <button
                                        className="page-link"
                                        onClick={() =>
                                          paginate(currentPage - 1)
                                        }
                                        disabled={currentPage === 1}
                                        tabIndex="0"
                                        aria-controls="datatable"
                                        data-dt-idx="previous"
                                      >
                                        Previous
                                      </button>
                                    </li>

                                    {/* Page number buttons */}
                                    {[...Array(totalPages)].map((_, index) => {
                                      const pageNumber = index + 1;

                                      if (
                                        pageNumber === 1 ||
                                        pageNumber === totalPages ||
                                        (pageNumber >= currentPage - 1 &&
                                          pageNumber <= currentPage + 1)
                                      ) {
                                        return (
                                          <li
                                            key={pageNumber}
                                            className={`paginate_button page-item ${
                                              currentPage === pageNumber
                                                ? "active"
                                                : ""
                                            }`}
                                          >
                                            <button
                                              className="page-link"
                                              onClick={() =>
                                                paginate(pageNumber)
                                              }
                                              tabIndex="0"
                                              aria-controls="datatable"
                                              data-dt-idx={index}
                                            >
                                              {pageNumber}
                                            </button>
                                          </li>
                                        );
                                      } else if (
                                        pageNumber === currentPage - 2 ||
                                        pageNumber === currentPage + 2
                                      ) {
                                        return (
                                          <li
                                            key={pageNumber}
                                            className="paginate_button page-item disabled"
                                          >
                                            <span className="page-link">
                                              ...
                                            </span>
                                          </li>
                                        );
                                      }
                                      return null;
                                    })}

                                    {/* Next button */}
                                    <li
                                      className={`paginate_button page-item next ${
                                        currentPage === totalPages
                                          ? "disabled"
                                          : ""
                                      }`}
                                    >
                                      <button
                                        className="page-link"
                                        onClick={() =>
                                          paginate(currentPage + 1)
                                        }
                                        disabled={currentPage === totalPages}
                                        tabIndex="0"
                                        aria-controls="datatable"
                                        data-dt-idx="next"
                                      >
                                        Next
                                      </button>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentEnrollmentReport;
