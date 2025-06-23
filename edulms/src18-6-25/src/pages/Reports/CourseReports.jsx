// import React, { useState, useEffect } from 'react';
// import Header1 from '../../../pages/Header/Header';
// import SideNavBar1 from '../../../pages/SideNavBar/SideNavBar';

// function CourseReport() {
//   const [courses, setCourses] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [filteredCourses, setFilteredCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [coursesPerPage] = useState(10);
  
//   // Filter states
//   const [filters, setFilters] = useState({
//     category: '',
//     priceRange: '',
//     searchTerm: '',
//     fromDate: '',
//     toDate: '',
//     skillLevel: '',
//     hasPromoVideo: '' // '', 'yes', 'no'
//   });

//   // Fetch all data
//   useEffect(() => {
//     fetchAllData();
//   }, []);

//   const fetchAllData = async () => {
//     try {
//       setLoading(true);
      
//       // Fetch courses and categories in parallel
//       const [coursesResponse, categoriesResponse] = await Promise.all([
//         fetch('/api/courses'),
//         fetch('/api/categories')
//       ]);

//       const coursesData = await coursesResponse.json();
//       const categoriesData = await categoriesResponse.json();
      
//       // Ensure data is in array format
//       const coursesArray = Array.isArray(coursesData) ? coursesData : (coursesData.courses ? coursesData.courses : []);
//       const categoriesArray = Array.isArray(categoriesData) ? categoriesData : (categoriesData.categories ? categoriesData.categories : []);
      
//       // Filter courses to only include those with courseId
//       const validCourses = coursesArray.filter(course => 
//         course.courseId && course.courseId.toString().trim() !== ''
//       );
      
//       setCourses(validCourses);
//       setCategories(categoriesArray);
//       setFilteredCourses(validCourses);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setCourses([]);
//       setCategories([]);
//       setFilteredCourses([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Helper function to get category name by ID
//   const getCategoryName = (categoryId) => {
//     const category = categories.find(cat => cat._id === categoryId || cat._id.$oid === categoryId);
//     return category ? category.categoryName : 'Unknown';
//   };

//   // Helper function to get multiple category names
//   const getCategoryNames = (categoryIds) => {
//     if (!categoryIds || !Array.isArray(categoryIds)) return 'No Category';
//     return categoryIds.map(id => getCategoryName(typeof id === 'object' ? id.$oid : id)).join(', ');
//   };

//   // Apply filters
//   useEffect(() => {
//     if (!Array.isArray(courses)) {
//       setFilteredCourses([]);
//       return;
//     }

//     let filtered = courses.filter(course => {
//       const courseDate = new Date(course.createdAt || Date.now());
//       const fromDate = filters.fromDate ? new Date(filters.fromDate) : null;
//       const toDate = filters.toDate ? new Date(filters.toDate) : null;
      
//       // Set time to start and end of day for proper comparison
//       if (fromDate) {
//         fromDate.setHours(0, 0, 0, 0);
//       }
//       if (toDate) {
//         toDate.setHours(23, 59, 59, 999);
//       }

//       // Price range filter
//       const coursePrice = parseFloat(course.price) || 0;
//       const priceRangeMatch = 
//         filters.priceRange === '' || 
//         (filters.priceRange === '0-100' && coursePrice >= 0 && coursePrice <= 100) ||
//         (filters.priceRange === '101-500' && coursePrice >= 101 && coursePrice <= 500) ||
//         (filters.priceRange === '501-1000' && coursePrice >= 501 && coursePrice <= 1000) ||
//         (filters.priceRange === '1000+' && coursePrice > 1000);

//       // Category filter
//       const categoryMatch = filters.category === '' || 
//         (course.categoryIds && course.categoryIds.some(catId => {
//           const id = typeof catId === 'object' ? catId.$oid : catId;
//           return id === filters.category;
//         }));

//       // Promo video filter
//       const promoVideoMatch = 
//         filters.hasPromoVideo === '' ||
//         (filters.hasPromoVideo === 'yes' && course.promoVideo) ||
//         (filters.hasPromoVideo === 'no' && !course.promoVideo);
      
//       return (
//         categoryMatch &&
//         (filters.skillLevel === '' || course.skillLevels?.toLowerCase().includes(filters.skillLevel.toLowerCase())) &&
//         (filters.searchTerm === '' || 
//           course.courseName?.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
//           course.description?.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
//           course.courseId?.toString().includes(filters.searchTerm)
//         ) &&
//         (!fromDate || courseDate >= fromDate) &&
//         (!toDate || courseDate <= toDate) &&
//         priceRangeMatch &&
//         promoVideoMatch
//       );
//     });
//     setFilteredCourses(filtered);
//     setCurrentPage(1);
//   }, [filters, courses, categories]);

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
//       category: '',
//       priceRange: '',
//       searchTerm: '',
//       fromDate: '',
//       toDate: '',
//       skillLevel: '',
//       hasPromoVideo: ''
//     });
//   };

//   // Pagination
//   const indexOfLastCourse = currentPage * coursesPerPage;
//   const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  
//   const currentCourses = Array.isArray(filteredCourses) 
//     ? filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse)
//     : [];
  
//   const totalPages = Array.isArray(filteredCourses) 
//     ? Math.ceil(filteredCourses.length / coursesPerPage)
//     : 0;

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   // Get unique values for filter dropdowns
//   const getUniqueSkillLevels = () => {
//     if (!Array.isArray(courses)) return [];
//     return [...new Set(courses.map(course => course.skillLevels).filter(Boolean))];
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return 'N/A';
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric'
//     });
//   };

//   // Get course statistics
//   const getCourseStats = () => {
//     if (!Array.isArray(filteredCourses)) return { 
//       total: 0, 
//       withVideo: 0, 
//       withoutVideo: 0, 
//       avgPrice: 0,
//       totalRevenue: 0 
//     };
    
//     const withVideo = filteredCourses.filter(course => course.promoVideo).length;
//     const withoutVideo = filteredCourses.filter(course => !course.promoVideo).length;
//     const prices = filteredCourses.map(course => parseFloat(course.price) || 0);
//     const avgPrice = prices.length > 0 ? prices.reduce((a, b) => a + b, 0) / prices.length : 0;
//     const totalRevenue = prices.reduce((a, b) => a + b, 0);
    
//     return { 
//       total: filteredCourses.length, 
//       withVideo, 
//       withoutVideo, 
//       avgPrice: avgPrice.toFixed(2),
//       totalRevenue: totalRevenue.toFixed(2)
//     };
//   };

//   const courseStats = getCourseStats();

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
//                         <i className="bx bx-book-content me-2"></i>
//                         Course Management Report
//                       </h4>
//                       <div className="d-flex gap-2 flex-wrap">
//                         <span className="badge bg-primary">
//                           Total Courses: {courseStats.total}
//                         </span>
//                         <span className="badge bg-success">
//                           With Promo Video: {courseStats.withVideo}
//                         </span>
//                         <span className="badge bg-warning">
//                           Without Video: {courseStats.withoutVideo}
//                         </span>
//                         <span className="badge bg-info">
//                           Avg Price: ₹{courseStats.avgPrice}
//                         </span>
//                         <span className="badge bg-secondary">
//                           Total Value: ₹{courseStats.totalRevenue}
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
//                           Filter Courses
//                         </h6>
//                       </div>
                      
//                       {/* Search Input */}
//                       <div className="col-md-3 mb-3">
//                         <label className="form-label">Search</label>
//                         <div className="input-group">
//                           <span className="input-group-text">
//                             <i className="bx bx-search"></i>
//                           </span>
//                           <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Search by name, description, or ID..."
//                             value={filters.searchTerm}
//                             onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
//                           />
//                         </div>
//                       </div>

//                       {/* Category Filter */}
//                       <div className="col-md-2 mb-3">
//                         <label className="form-label">Category</label>
//                         <select
//                           className="form-select"
//                           value={filters.category}
//                           onChange={(e) => handleFilterChange('category', e.target.value)}
//                         >
//                           <option value="">All Categories</option>
//                           {categories.map(category => (
//                             <option key={category._id || category._id?.$oid} value={category._id || category._id?.$oid}>
//                               {category.categoryName}
//                             </option>
//                           ))}
//                         </select>
//                       </div>

//                       {/* Price Range Filter */}
//                       <div className="col-md-2 mb-3">
//                         <label className="form-label">Price Range</label>
//                         <select
//                           className="form-select"
//                           value={filters.priceRange}
//                           onChange={(e) => handleFilterChange('priceRange', e.target.value)}
//                         >
//                           <option value="">All Prices</option>
//                           <option value="0-100">₹0 - ₹100</option>
//                           <option value="101-500">₹101 - ₹500</option>
//                           <option value="501-1000">₹501 - ₹1000</option>
//                           <option value="1000+">₹1000+</option>
//                         </select>
//                       </div>

//                       {/* Skill Level Filter */}
//                       <div className="col-md-2 mb-3">
//                         <label className="form-label">Skill Level</label>
//                         <select
//                           className="form-select"
//                           value={filters.skillLevel}
//                           onChange={(e) => handleFilterChange('skillLevel', e.target.value)}
//                         >
//                           <option value="">All Levels</option>
//                           {getUniqueSkillLevels().map(level => (
//                             <option key={level} value={level}>{level}</option>
//                           ))}
//                         </select>
//                       </div>

//                       {/* Promo Video Filter */}
//                       <div className="col-md-2 mb-3">
//                         <label className="form-label">Promo Video</label>
//                         <select
//                           className="form-select"
//                           value={filters.hasPromoVideo}
//                           onChange={(e) => handleFilterChange('hasPromoVideo', e.target.value)}
//                         >
//                           <option value="">All Courses</option>
//                           <option value="yes">With Promo Video</option>
//                           <option value="no">Without Promo Video</option>
//                         </select>
//                       </div>

//                       {/* From Date Filter */}
//                       <div className="col-md-1 mb-3">
//                         <label className="form-label">From Date</label>
//                         <input
//                           type="date"
//                           className="form-control"
//                           value={filters.fromDate}
//                           onChange={(e) => handleFilterChange('fromDate', e.target.value)}
//                         />
//                       </div>

//                       {/* To Date Filter */}
//                       <div className="col-md-1 mb-3">
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
//                         <p className="mt-2 text-muted">Loading course data...</p>
//                       </div>
//                     ) : (
//                       <>
//                         {/* Courses Table */}
//                         <div className="table-responsive">
//                           <table className="table table-bordered table-hover">
//                             <thead className="table-light">
//                               <tr>
//                                 <th>Course ID</th>
//                                 <th>Course Name</th>
//                                 <th>Category</th>
//                                 <th>Price</th>
//                                 <th>Skill Level</th>
//                                 <th>Duration</th>
//                                 <th>Target Audience</th>
//                                 <th>Promo Video</th>
//                                 <th>Images</th>
//                                 <th>Created Date</th>
//                                 {/* <th>Actions</th> */}
//                               </tr>
//                             </thead>
//                             <tbody>
//                               {currentCourses.length > 0 ? (
//                                 currentCourses.map((course) => (
//                                   <tr key={course._id}>
//                                     <td>
//                                       <span className="fw-bold text-primary">
//                                         {course.courseId}
//                                       </span>
//                                     </td>
//                                     <td>
//                                       <div>
//                                         <h6 className="mb-1">{course.courseName}</h6>
//                                         <small className="text-muted" title={course.description}>
//                                           {course.description?.length > 50 
//                                             ? `${course.description.substring(0, 50)}...` 
//                                             : course.description || 'No description'}
//                                         </small>
//                                       </div>
//                                     </td>
//                                     <td>
//                                       <span className="badge bg-info">
//                                         {getCategoryNames(course.categoryIds)}
//                                       </span>
//                                     </td>
//                                     <td>
//                                       <span className="fw-bold text-success">
//                                         ₹{course.price || '0'}
//                                       </span>
//                                     </td>
//                                     <td>
//                                       <span className="badge bg-primary">
//                                         {course.skillLevels || 'Not specified'}
//                                       </span>
//                                     </td>
//                                     <td>
//                                       {course.duration || 'Not specified'}
//                                     </td>
//                                     <td>
//                                       <small className="text-muted">
//                                         {course.targetAudience?.length > 30 
//                                           ? `${course.targetAudience.substring(0, 30)}...` 
//                                           : course.targetAudience || 'General'}
//                                       </small>
//                                     </td>
//                                     <td>
//                                       {course.promoVideo ? (
//                                         <span className="badge bg-success">
//                                           <i className="bx bx-video me-1"></i>
//                                           Available
//                                         </span>
//                                       ) : (
//                                         <span className="badge bg-secondary">
//                                           <i className="bx bx-video-off me-1"></i>
//                                           Not Available
//                                         </span>
//                                       )}
//                                     </td>
//                                     <td>
//                                       <span className="badge bg-info">
//                                         {course.courseImages?.length || 0} Image{(course.courseImages?.length || 0) !== 1 ? 's' : ''}
//                                       </span>
//                                     </td>
//                                     <td>
//                                       {formatDate(course.createdAt)}
//                                     </td>
                                    
//                                   </tr>
//                                 ))
//                               ) : (
//                                 <tr>
//                                   <td colSpan="11" className="text-center py-4">
//                                     <div className="text-muted">
//                                       <i className="bx bx-search-alt-2 display-4"></i>
//                                       <p className="mt-2">No courses found matching your criteria</p>
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
//                                 Showing {indexOfFirstCourse + 1} to {Math.min(indexOfLastCourse, Array.isArray(filteredCourses) ? filteredCourses.length : 0)} of {Array.isArray(filteredCourses) ? filteredCourses.length : 0} entries
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

// export default CourseReport;


import React, { useState, useEffect } from 'react';
import Header1 from '../Header/Header';
import SideNavBar1 from '../SideNavBar/SideNavBar';

function CourseReport() {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(10);
  
  // Filter states
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    searchTerm: '',
    fromDate: '',
    toDate: '',
    skillLevel: '',
    hasPromoVideo: '' // '', 'yes', 'no'
  });

  // Fetch all data
  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      
      // Fetch courses and categories in parallel
      const [coursesResponse, categoriesResponse] = await Promise.all([
        fetch('http://localhost:8080/api/courses'),
        fetch('http://localhost:8080/api/categories')
      ]);

      const coursesData = await coursesResponse.json();
      const categoriesData = await categoriesResponse.json();
      
      // Ensure data is in array format
      const coursesArray = Array.isArray(coursesData) ? coursesData : (coursesData.courses ? coursesData.courses : []);
      const categoriesArray = Array.isArray(categoriesData) ? categoriesData : (categoriesData.categories ? categoriesData.categories : []);
      
      // Filter courses to only include those with courseId
      const validCourses = coursesArray.filter(course => 
        course.courseId && course.courseId.toString().trim() !== ''
      );
      
      setCourses(validCourses);
      setCategories(categoriesArray);
      setFilteredCourses(validCourses);
    } catch (error) {
      console.error('Error fetching data:', error);
      setCourses([]);
      setCategories([]);
      setFilteredCourses([]);
    } finally {
      setLoading(false);
    }
  };

  // Helper function to get category name by ID
  const getCategoryName = (categoryId) => {
    // Handle different ID formats - extract the actual ID string
    let searchId = categoryId;
    if (typeof categoryId === 'object' && categoryId.$oid) {
      searchId = categoryId.$oid;
    }
    
    // Find category by matching the _id.$oid with the searchId
    const category = categories.find(cat => {
      const catId = cat._id && cat._id.$oid ? cat._id.$oid : cat._id;
      return catId === searchId;
    });
    
    return category ? category.categoryName : 'Unknown Category';
  };

  // Helper function to get multiple category names
  const getCategoryNames = (categoryIds) => {
    if (!categoryIds || !Array.isArray(categoryIds) || categoryIds.length === 0) {
      return 'No Category';
    }
    
    const categoryNames = categoryIds.map(categoryId => {
      return getCategoryName(categoryId);
    }).filter(name => name !== 'Unknown Category');
    
    return categoryNames.length > 0 ? categoryNames.join(', ') : 'No Category';
  };

  // Apply filters
  useEffect(() => {
    if (!Array.isArray(courses)) {
      setFilteredCourses([]);
      return;
    }

    let filtered = courses.filter(course => {
      const courseDate = new Date(course.createdAt || Date.now());
      const fromDate = filters.fromDate ? new Date(filters.fromDate) : null;
      const toDate = filters.toDate ? new Date(filters.toDate) : null;
      
      // Set time to start and end of day for proper comparison
      if (fromDate) {
        fromDate.setHours(0, 0, 0, 0);
      }
      if (toDate) {
        toDate.setHours(23, 59, 59, 999);
      }

      // Price range filter
      const coursePrice = parseFloat(course.price) || 0;
      const priceRangeMatch = 
        filters.priceRange === '' || 
        (filters.priceRange === '0-100' && coursePrice >= 0 && coursePrice <= 100) ||
        (filters.priceRange === '101-500' && coursePrice >= 101 && coursePrice <= 500) ||
        (filters.priceRange === '501-1000' && coursePrice >= 501 && coursePrice <= 1000) ||
        (filters.priceRange === '1000+' && coursePrice > 1000);

      // Category filter
      const categoryMatch = filters.category === '' || 
        (course.categoryIds && course.categoryIds.some(catId => {
          const searchId = typeof catId === 'object' && catId.$oid ? catId.$oid : catId;
          return searchId === filters.category;
        }));

      // Promo video filter
      const promoVideoMatch = 
        filters.hasPromoVideo === '' ||
        (filters.hasPromoVideo === 'yes' && course.promoVideo) ||
        (filters.hasPromoVideo === 'no' && !course.promoVideo);
      
      return (
        categoryMatch &&
        (filters.skillLevel === '' || course.skillLevels?.toLowerCase().includes(filters.skillLevel.toLowerCase())) &&
        (filters.searchTerm === '' || 
          course.courseName?.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
          course.description?.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
          course.courseId?.toString().includes(filters.searchTerm)
        ) &&
        (!fromDate || courseDate >= fromDate) &&
        (!toDate || courseDate <= toDate) &&
        priceRangeMatch &&
        promoVideoMatch
      );
    });
    setFilteredCourses(filtered);
    setCurrentPage(1);
  }, [filters, courses, categories]);

  // Handle filter changes
  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      category: '',
      priceRange: '',
      searchTerm: '',
      fromDate: '',
      toDate: '',
      skillLevel: '',
      hasPromoVideo: ''
    });
  };

  // Pagination
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  
  const currentCourses = Array.isArray(filteredCourses) 
    ? filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse)
    : [];
  
  const totalPages = Array.isArray(filteredCourses) 
    ? Math.ceil(filteredCourses.length / coursesPerPage)
    : 0;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Get unique values for filter dropdowns
  const getUniqueSkillLevels = () => {
    if (!Array.isArray(courses)) return [];
    return [...new Set(courses.map(course => course.skillLevels).filter(Boolean))];
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Get course statistics
  const getCourseStats = () => {
    if (!Array.isArray(filteredCourses)) return { 
      total: 0, 
      withVideo: 0, 
      withoutVideo: 0, 
      avgPrice: 0,
      totalRevenue: 0 
    };
    
    const withVideo = filteredCourses.filter(course => course.promoVideo).length;
    const withoutVideo = filteredCourses.filter(course => !course.promoVideo).length;
    const prices = filteredCourses.map(course => parseFloat(course.price) || 0);
    const avgPrice = prices.length > 0 ? prices.reduce((a, b) => a + b, 0) / prices.length : 0;
    const totalRevenue = prices.reduce((a, b) => a + b, 0);
    
    return { 
      total: filteredCourses.length, 
      withVideo, 
      withoutVideo, 
      avgPrice: avgPrice.toFixed(2),
      totalRevenue: totalRevenue.toFixed(2)
    };
  };

  const courseStats = getCourseStats();

  return (
    <div>
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
                        <i className="bx bx-book-content me-2"></i>
                        Course Management Report
                      </h4>
                      <div className="d-flex gap-2 flex-wrap">
                        <span>
                          Total Courses: {courseStats.total}
                        </span>
                        <span >
                          With Promo Video: {courseStats.withVideo}
                        </span>
                        <span >
                          Without Video: {courseStats.withoutVideo}
                        </span>
                        <span >
                          Avg Price: ₹ {courseStats.avgPrice}
                        </span>
                        <span >
                          Total Value: ₹ {courseStats.totalRevenue}
                        </span>
                        {/* <button 
                          className="btn btn-outline-secondary btn-sm"
                          onClick={clearFilters}
                        >
                          <i className="bx bx-refresh me-1"></i>
                          Clear Filters
                        </button> */}
                      </div>
                    </div>
                  </div>

                  <div className="card-body">
                    {/* Filters Section */}
                    <div className="row mb-4 p-3 rounded">
                     
                      {/* Search Input */}
                      <div className="col-md-2 mb-3">
                        <label className="form-label">Search</label>
                        <div className="input-group">
                         
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search by name, description, or ID..."
                            value={filters.searchTerm}
                            onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
                          />
                        </div>
                      </div>

                      {/* Category Filter */}
                      <div className="col-md-2 mb-3">
                        <label className="form-label">Category</label>
                        <select
                          className="form-select"
                          value={filters.category}
                          onChange={(e) => handleFilterChange('category', e.target.value)}
                        >
                          <option value="">All Categories</option>
                          {categories.map(category => {
                            const categoryId = category._id && category._id.$oid ? category._id.$oid : category._id;
                            return (
                              <option key={categoryId} value={categoryId}>
                                {category.categoryName}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      {/* Price Range Filter */}
                      <div className="col-md-2 mb-3">
                        <label className="form-label">Price Range</label>
                        <select
                          className="form-select"
                          value={filters.priceRange}
                          onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                        >
                          <option value="">All Prices</option>
                          <option value="0-100">₹0 - ₹100</option>
                          <option value="101-500">₹101 - ₹500</option>
                          <option value="501-1000">₹501 - ₹1000</option>
                          <option value="1000+">₹1000+</option>
                        </select>
                      </div>

                      {/* Skill Level Filter */}
                      <div className="col-md-2 mb-3">
                        <label className="form-label">Skill Level</label>
                        <select
                          className="form-select"
                          value={filters.skillLevel}
                          onChange={(e) => handleFilterChange('skillLevel', e.target.value)}
                        >
                          <option value="">All Levels</option>
                          {getUniqueSkillLevels().map(level => (
                            <option key={level} value={level}>{level}</option>
                          ))}
                        </select>
                      </div>

                      {/* Promo Video Filter */}
                      {/* <div className="col-md-2 mb-3">
                        <label className="form-label">Promo Video</label>
                        <select
                          className="form-select"
                          value={filters.hasPromoVideo}
                          onChange={(e) => handleFilterChange('hasPromoVideo', e.target.value)}
                        >
                          <option value="">All Courses</option>
                          <option value="yes">With Promo Video</option>
                          <option value="no">Without Promo Video</option>
                        </select>
                      </div> */}

                      {/* From Date Filter */}
                      <div className="col-md-2 mb-3">
                        <label className="form-label">From Date</label>
                        <input
                          type="date"
                          className="form-control"
                          value={filters.fromDate}
                          onChange={(e) => handleFilterChange('fromDate', e.target.value)}
                        />
                      </div>

                      {/* To Date Filter */}
                      <div className="col-md-2 mb-3">
                        <label className="form-label">To Date</label>
                        <input
                          type="date"
                          className="form-control"
                          value={filters.toDate}
                          onChange={(e) => handleFilterChange('toDate', e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Loading State */}
                    {loading ? (
                      <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="mt-2 text-muted">Loading course data...</p>
                      </div>
                    ) : (
                      <>
                        {/* Courses Table */}
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead className="table-light">
                              <tr>
                                <th>Course ID</th>
                                <th>Course Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Skill Level</th>
                                <th>Duration</th>
                                <th>Target Audience</th>
                                <th>Promo Video</th>
                                <th>Images</th>
                                <th>Created Date</th>
                                {/* <th>Actions</th> */}
                              </tr>
                            </thead>
                            <tbody>
                              {currentCourses.length > 0 ? (
                                currentCourses.map((course) => (
                                  <tr key={course._id}>
                                    <td>
                                      <span className="fw-bold text-primary">
                                        {course.courseId}
                                      </span>
                                    </td>
                                    <td>
                                      <div>
                                        <h6 className="mb-1">{course.courseName}</h6>
                                        <small className="text-muted" title={course.description}>
                                          {course.description?.length > 50 
                                            ? `${course.description.substring(0, 50)}...` 
                                            : course.description || 'No description'}
                                        </small>
                                      </div>
                                    </td>
                                    <td>
                                      {course.categoryIds && course.categoryIds.length > 0 ? (
                                        <div>
                                          {course.categoryIds.map((categoryId, index) => {
                                            const categoryName = getCategoryName(categoryId);
                                            return (
                                              <span key={index} className="badge bg-info me-1 mb-1">
                                                {categoryName}
                                              </span>
                                            );
                                          })}
                                        </div>
                                      ) : (
                                        <span className="badge bg-secondary">No Category</span>
                                      )}
                                    </td>
                                    <td>
                                      <span className="fw-bold text-success">
                                        ₹{course.price || '0'}
                                      </span>
                                    </td>
                                    <td>
                                      <span className="badge bg-primary">
                                        {course.skillLevels || 'Not specified'}
                                      </span>
                                    </td>
                                    <td>
                                      {course.duration || 'Not specified'}
                                    </td>
                                    <td>
                                      <small className="text-muted">
                                        {course.targetAudience?.length > 30 
                                          ? `${course.targetAudience.substring(0, 30)}...` 
                                          : course.targetAudience || 'General'}
                                      </small>
                                    </td>
                                    <td>
                                      {course.promoVideo ? (
                                        <span className="badge bg-success">
                                          <i className="bx bx-video me-1"></i>
                                          Available
                                        </span>
                                      ) : (
                                        <span className="badge bg-secondary">
                                          <i className="bx bx-video-off me-1"></i>
                                          Not Available
                                        </span>
                                      )}
                                    </td>
                                    <td>
                                      <span className="badge bg-info">
                                        {course.courseImages?.length || 0} Image{(course.courseImages?.length || 0) !== 1 ? 's' : ''}
                                      </span>
                                    </td>
                                    <td>
                                      {formatDate(course.createdAt)}
                                    </td>
                                    {/* <td>
                                      <div className="d-flex gap-1">
                                        <button className="btn btn-sm btn-outline-primary" title="View Details">
                                          <i className="bx bx-eye"></i>
                                        </button>
                                        <button className="btn btn-sm btn-outline-success" title="Edit Course">
                                          <i className="bx bx-edit"></i>
                                        </button>
                                        <button className="btn btn-sm btn-outline-danger" title="Delete Course">
                                          <i className="bx bx-trash"></i>
                                        </button>
                                      </div>
                                    </td> */}
                                  </tr>
                                ))
                              ) : (
                                <tr>
                                  <td colSpan="11" className="text-center py-4">
                                    <div className="text-muted">
                                      <i className="bx bx-search-alt-2 display-4"></i>
                                      <p className="mt-2">No courses found matching your criteria</p>
                                    </div>
                                  </td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                          <div className="row mt-4">
                            <div className="col-sm-12 col-md-5">
                              <div className="dataTables_info">
                                Showing {indexOfFirstCourse + 1} to {Math.min(indexOfLastCourse, Array.isArray(filteredCourses) ? filteredCourses.length : 0)} of {Array.isArray(filteredCourses) ? filteredCourses.length : 0} entries
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-7">
                              <div className="dataTables_paginate paging_simple_numbers">
                                <ul className="pagination justify-content-end">
                                  <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                    <button
                                      className="page-link"
                                      onClick={() => paginate(currentPage - 1)}
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
                                      (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                                    ) {
                                      return (
                                        <li
                                          key={pageNumber}
                                          className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}
                                        >
                                          <button
                                            className="page-link"
                                            onClick={() => paginate(pageNumber)}
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
                                        <li key={pageNumber} className="page-item disabled">
                                          <span className="page-link">...</span>
                                        </li>
                                      );
                                    }
                                    return null;
                                  })}
                                  
                                  <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                    <button
                                      className="page-link"
                                      onClick={() => paginate(currentPage + 1)}
                                      disabled={currentPage === totalPages}
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
  );
}

export default CourseReport;