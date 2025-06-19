// import React from 'react'
// import Header1 from "../../Header/Header";
// import SideNavBar1 from "../../SideNavBar/SideNavBar";

// const Certificate1 = () => {
//   return (
//     <div>
//         <Header1 />
//     <SideNavBar1 />
//     <div  className="main-content">
//     <div class="page-content ">
//       <div class="container-fluid">
//         <div className="row">
//           <div className="col-12">
//             <div className="card">
//               <div className="card-header">
//                 <h4 className="card-title">
//                   Certificate (who Completed The Course and Get Certificate)
//                 </h4>
//               </div>

//               <div className="card-body">
//                 <div
//                   id="datatable_wrapper"
//                   className="dataTables_wrapper dt-bootstrap4 no-footer"
//                 >
//                   <div className="row">
//                     <div className="col-sm-12 col-md-6">
//                       {/* <button
//                         type="button"
//                         class="btn btn-primary"
//                         data-bs-toggle="modal"
//                         data-bs-target="#exampleModal"
//                         data-bs-whatever="@mdo"
//                       >
//                         Add Role & Permission +
//                       </button> */}
//                     </div>
//                     <div className="col-sm-12 col-md-6">
//                       <div id="datatable_filter" className="dataTables_filter">
//                         <label>
//                           Search:
//                           <input
//                             type="search"
//                             className="form-control form-control-sm"
//                             placeholder=""
//                             aria-controls="datatable"
//                           />
//                         </label>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="row">
//                     <div className="col-sm-12">
//                       <table
//                         id="datatable"
//                         className="table table-bordered dt-responsive nowrap w-100 dataTable no-footer dtr-inline"
//                         style={{ width: "100%" }}
//                         aria-describedby="datatable_info"
//                       >
//                         <thead>
//                           <tr>
                      
//                             <th>Student Name</th>
//                             <th>Grade</th>
//                             <th>Action</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
                         
//                             <td>Raju</td>
//                             <td>98.8</td>
//                             <td>
//                               <div className="d-flex flex-wrap gap-2">
//                                 <button
//                                   type="button"
//                                   class="btn btn-soft-success waves-effect waves-light"
//                                   data-bs-toggle="modal"
//                         data-bs-target="#exampleModal"
//                         data-bs-whatever="@mdo"
//                                 >
//                                   <i class="fas fa-eye"></i>
//                                 </button>
//                                 <button
//                                   type="button"
//                                   class="btn btn-soft-danger waves-effect waves-light"
//                                 >
//                                   <i className='bx bx-trash'></i>
//                                 </button>
//                               </div>
//                             </td>
//                           </tr>
                          
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>

//                   <div className="row">
//                     <div className="col-sm-12 col-md-5">
//                       <div
//                         className="dataTables_info"
//                         id="datatable_info"
//                         role="status"
//                         aria-live="polite"
//                       >
//                         Showing 1 to 10 of 57 entries
//                       </div>
//                     </div>
//                     <div className="col-sm-12 col-md-7">
//                       <div
//                         className="dataTables_paginate paging_simple_numbers"
//                         id="datatable_paginate"
//                       >
//                         <ul className="pagination">
//                           <li className="paginate_button page-item previous disabled">
//                             <a
//                               aria-controls="datatable"
//                               aria-disabled="true"
//                               role="link"
//                               data-dt-idx="previous"
//                               tabIndex="0"
//                               className="page-link"
//                             >
//                               Previous
//                             </a>
//                           </li>
//                           <li className="paginate_button page-item active">
//                             <a
//                               href="#"
//                               aria-controls="datatable"
//                               role="link"
//                               aria-current="page"
//                               data-dt-idx="0"
//                               tabIndex="0"
//                               className="page-link"
//                             >
//                               1
//                             </a>
//                           </li>
//                           <li className="paginate_button page-item">
//                             <a
//                               href="#"
//                               aria-controls="datatable"
//                               role="link"
//                               data-dt-idx="1"
//                               tabIndex="0"
//                               className="page-link"
//                             >
//                               2
//                             </a>
//                           </li>
//                           <li className="paginate_button page-item next">
//                             <a
//                               href="#"
//                               aria-controls="datatable"
//                               role="link"
//                               data-dt-idx="next"
//                               tabIndex="0"
//                               className="page-link"
//                             >
//                               Next
//                             </a>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div
//         class="modal fade"
//         id="exampleModal"
//         tabindex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div class="modal-dialog">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h5 class="modal-title" id="exampleModalLabel">
//                 View Certificate
//               </h5>
//               <button
//                 type="button"
//                 class="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div class="modal-body">
//              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNqrRcg1A-b_p_IxeqFMjAG-diET3tIDx6Gw&s" alt="Certificate" className='img-fluid' />
//               <p className='mt-3'>This is to certify that <strong>Raju</strong> has successfully completed the course with a grade of <strong>98.8%</strong>.</p>
//               <p className='mt-2'>Batch Code: <strong>2022-E4</strong></p>
//               <p className='mt-2'>Date of Issue: <strong>01/01/2023</strong></p>
//             </div>
//             <div class="modal-footer">
//               <button
//                 type="button"
//                 class="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Close
//               </button>
//               <button type="button" class="btn btn-primary">
//                 Send message
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//     </div>
//   )
// }

// export default Certificate1;


// import React, { useState, useEffect } from 'react';
// import Header1 from "../../Header/Header";
// import SideNavBar1 from "../../SideNavBar/SideNavBar";

// const Certificate1 = () => {
//   const [certificates, setCertificates] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCertificate, setSelectedCertificate] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(10);

//   // Fetch certificates data
//   useEffect(() => {
//     fetchCertificates();
//   }, []);

//   const fetchCertificates = async () => {
//     try {
//       setLoading(true);
//       // Replace with your actual API endpoint
//       const response = await fetch('/api/students/certificates', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('token')}` // Add auth if needed
//         }
//       });
      
//       if (response.ok) {
//         const data = await response.json();
//         setCertificates(data.certificates || []);
//       } else {
//         console.error('Failed to fetch certificates');
//         // Fallback data for development
//         setCertificates([
//           {
//             id: 1,
//             studentName: 'Raju',
//             grade: 98.8,
//             batchCode: '2022-E4',
//             dateOfIssue: '01/01/2023',
//             courseTitle: 'Advanced Web Development',
//             certificateUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNqrRcg1A-b_p_IxeqFMjAG-diET3tIDx6Gw&s'
//           },
//           {
//             id: 2,
//             studentName: 'Priya',
//             grade: 95.5,
//             batchCode: '2022-E3',
//             dateOfIssue: '15/12/2022',
//             courseTitle: 'React Development',
//             certificateUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNqrRcg1A-b_p_IxeqFMjAG-diET3tIDx6Gw&s'
//           }
//         ]);
//       }
//     } catch (error) {
//       console.error('Error fetching certificates:', error);
//       // Fallback data
//       setCertificates([
//         {
//           id: 1,
//           studentName: 'Raju',
//           grade: 98.8,
//           batchCode: '2022-E4',
//           dateOfIssue: '01/01/2023',
//           courseTitle: 'Advanced Web Development',
//           certificateUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNqrRcg1A-b_p_IxeqFMjAG-diET3tIDx6Gw&s'
//         }
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Download certificate function
//   const downloadCertificate = async (certificate) => {
//     try {
//       // Method 1: If you have a direct certificate PDF/image URL
//       if (certificate.certificateUrl) {
//         const link = document.createElement('a');
//         link.href = certificate.certificateUrl;
//         link.download = `Certificate_${certificate.studentName}_${certificate.batchCode}.pdf`;
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//         return;
//       }

//       // Method 2: If you need to call an API to generate/get certificate
//       const response = await fetch(`/api/certificates/download/${certificate.id}`, {
//         method: 'GET',
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         }
//       });

//       if (response.ok) {
//         const blob = await response.blob();
//         const url = window.URL.createObjectURL(blob);
//         const link = document.createElement('a');
//         link.href = url;
//         link.download = `Certificate_${certificate.studentName}_${certificate.batchCode}.pdf`;
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//         window.URL.revokeObjectURL(url);
//       } else {
//         alert('Failed to download certificate');
//       }
//     } catch (error) {
//       console.error('Error downloading certificate:', error);
//       alert('Error downloading certificate');
//     }
//   };

//   // Generate certificate (if needed)
//   const generateCertificate = async (certificateId) => {
//     try {
//       const response = await fetch(`/api/certificates/generate/${certificateId}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         }
//       });

//       if (response.ok) {
//         const blob = await response.blob();
//         const url = window.URL.createObjectURL(blob);
//         const link = document.createElement('a');
//         link.href = url;
//         link.download = `Certificate_${certificateId}.pdf`;
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//         window.URL.revokeObjectURL(url);
//       }
//     } catch (error) {
//       console.error('Error generating certificate:', error);
//     }
//   };

//   // Filter certificates based on search
//   const filteredCertificates = certificates.filter(cert =>
//     cert.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     cert.batchCode.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Pagination
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredCertificates.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(filteredCertificates.length / itemsPerPage);

//   const handleViewCertificate = (certificate) => {
//     setSelectedCertificate(certificate);
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
//                     <h4 className="card-title">
//                       Certificate (Students Who Completed The Course and Got Certificate)
//                     </h4>
//                   </div>

//                   <div className="card-body">
//                     <div className="dataTables_wrapper dt-bootstrap4 no-footer">
//                       <div className="row">
//                         <div className="col-sm-12 col-md-6">
//                           <button
//                             type="button"
//                             className="btn btn-success"
//                             onClick={fetchCertificates}
//                             disabled={loading}
//                           >
//                             {loading ? 'Loading...' : 'Refresh Certificates'}
//                           </button>
//                         </div>
//                         <div className="col-sm-12 col-md-6">
//                           <div className="dataTables_filter">
//                             <label>
//                               Search:
//                               <input
//                                 type="search"
//                                 className="form-control form-control-sm"
//                                 placeholder="Search by name or batch..."
//                                 value={searchTerm}
//                                 onChange={(e) => setSearchTerm(e.target.value)}
//                               />
//                             </label>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="row">
//                         <div className="col-sm-12">
//                           <table className="table table-bordered dt-responsive nowrap w-100 dataTable no-footer">
//                             <thead>
//                               <tr>
//                                 <th>Student Name</th>
//                                 <th>Grade</th>
//                                 <th>Batch Code</th>
//                                 <th>Date of Issue</th>
//                                 <th>Action</th>
//                               </tr>
//                             </thead>
//                             <tbody>
//                               {loading ? (
//                                 <tr>
//                                   <td colSpan="5" className="text-center">Loading...</td>
//                                 </tr>
//                               ) : currentItems.length > 0 ? (
//                                 currentItems.map((certificate) => (
//                                   <tr key={certificate.id}>
//                                     <td>{certificate.studentName}</td>
//                                     <td>{certificate.grade}%</td>
//                                     <td>{certificate.batchCode}</td>
//                                     <td>{certificate.dateOfIssue}</td>
//                                     <td>
//                                       <div className="d-flex flex-wrap gap-2">
//                                         <button
//                                           type="button"
//                                           className="btn btn-soft-success waves-effect waves-light"
//                                           data-bs-toggle="modal"
//                                           data-bs-target="#certificateModal"
//                                           onClick={() => handleViewCertificate(certificate)}
//                                           title="View Certificate"
//                                         >
//                                           <i className="fas fa-eye"></i>
//                                         </button>
//                                         <button
//                                           type="button"
//                                           className="btn btn-soft-primary waves-effect waves-light"
//                                           onClick={() => downloadCertificate(certificate)}
//                                           title="Download Certificate"
//                                         >
//                                           <i className="fas fa-download"></i>
//                                         </button>
//                                         <button
//                                           type="button"
//                                           className="btn btn-soft-danger waves-effect waves-light"
//                                           title="Delete Certificate"
//                                         >
//                                           <i className="bx bx-trash"></i>
//                                         </button>
//                                       </div>
//                                     </td>
//                                   </tr>
//                                 ))
//                               ) : (
//                                 <tr>
//                                   <td colSpan="5" className="text-center">No certificates found</td>
//                                 </tr>
//                               )}
//                             </tbody>
//                           </table>
//                         </div>
//                       </div>

//                       <div className="row">
//                         <div className="col-sm-12 col-md-5">
//                           <div className="dataTables_info">
//                             Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredCertificates.length)} of {filteredCertificates.length} entries
//                           </div>
//                         </div>
//                         <div className="col-sm-12 col-md-7">
//                           <div className="dataTables_paginate">
//                             <ul className="pagination">
//                               <li className={`paginate_button page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//                                 <button
//                                   className="page-link"
//                                   onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//                                   disabled={currentPage === 1}
//                                 >
//                                   Previous
//                                 </button>
//                               </li>
//                               {[...Array(totalPages)].map((_, index) => (
//                                 <li key={index + 1} className={`paginate_button page-item ${currentPage === index + 1 ? 'active' : ''}`}>
//                                   <button
//                                     className="page-link"
//                                     onClick={() => setCurrentPage(index + 1)}
//                                   >
//                                     {index + 1}
//                                   </button>
//                                 </li>
//                               ))}
//                               <li className={`paginate_button page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
//                                 <button
//                                   className="page-link"
//                                   onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//                                   disabled={currentPage === totalPages}
//                                 >
//                                   Next
//                                 </button>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Certificate View Modal */}
//           <div
//             className="modal fade"
//             id="certificateModal"
//             tabIndex="-1"
//             aria-labelledby="certificateModalLabel"
//             aria-hidden="true"
//           >
//             <div className="modal-dialog modal-lg">
//               <div className="modal-content">
//                 <div className="modal-header">
//                   <h5 className="modal-title" id="certificateModalLabel">
//                     View Certificate
//                   </h5>
//                   <button
//                     type="button"
//                     className="btn-close"
//                     data-bs-dismiss="modal"
//                     aria-label="Close"
//                   ></button>
//                 </div>
//                 <div className="modal-body">
//                   {selectedCertificate && (
//                     <>
//                       <img 
//                         src={selectedCertificate.certificateUrl || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNqrRcg1A-b_p_IxeqFMjAG-diET3tIDx6Gw&s"} 
//                         alt="Certificate" 
//                         className="img-fluid mb-3" 
//                       />
//                       <div className="certificate-details">
//                         <p className="mt-3">
//                           This is to certify that <strong>{selectedCertificate.studentName}</strong> has successfully completed the course 
//                           <strong> {selectedCertificate.courseTitle || 'Advanced Web Development'}</strong> with a grade of <strong>{selectedCertificate.grade}%</strong>.
//                         </p>
//                         <p className="mt-2">Batch Code: <strong>{selectedCertificate.batchCode}</strong></p>
//                         <p className="mt-2">Date of Issue: <strong>{selectedCertificate.dateOfIssue}</strong></p>
//                       </div>
//                     </>
//                   )}
//                 </div>
//                 <div className="modal-footer">
//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                     data-bs-dismiss="modal"
//                   >
//                     Close
//                   </button>
//                   <button 
//                     type="button" 
//                     className="btn btn-primary"
//                     onClick={() => selectedCertificate && downloadCertificate(selectedCertificate)}
//                   >
//                     <i className="fas fa-download me-2"></i>
//                     Download Certificate
//                   </button>
//                   <button type="button" className="btn btn-info">
//                     <i className="fas fa-paper-plane me-2"></i>
//                     Send Message
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Certificate1;

// import React, { useState, useEffect } from 'react';
// import Header1 from "../../Header/Header";
// import SideNavBar1 from "../../SideNavBar/SideNavBar";

// const Certificate1 = () => {
//   const [students, setStudents] = useState([]);
//   const [currentStudent, setCurrentStudent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(10);

//   // Get current logged-in student ID
//   const studentId = localStorage.getItem("studentId");

//   // Fetch all students data
//   useEffect(() => {
//     fetchAllStudents();
//     if (studentId) {
//       fetchCurrentStudent();
//     }
//   }, [studentId]);

//   const fetchAllStudents = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch('http://localhost:8080/api/students', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('token')}` // Add if you use auth tokens
//         }
//       });
      
//       if (response.ok) {
//         const data = await response.json();
//         // Filter only students who have completed courses and have certificates
//         const studentsWithCertificates = data.filter(student => 
//           student.courseCompleted === true && 
//           student.grade && 
//           student.grade >= 70 // Minimum passing grade
//         );
//         setStudents(studentsWithCertificates);
//       } else {
//         console.error('Failed to fetch students');
//       }
//     } catch (error) {
//       console.error('Error fetching students:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchCurrentStudent = async () => {
//     try {
//       const response = await fetch(`http://localhost:8080/api/students/${studentId}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         }
//       });
      
//       if (response.ok) {
//         const studentData = await response.json();
//         setCurrentStudent(studentData);
//       } else {
//         console.error('Failed to fetch current student data');
//       }
//     } catch (error) {
//       console.error('Error fetching current student:', error);
//     }
//   };

//   const fetchStudentById = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:8080/api/students/${studentId}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         }
//       });
      
//       if (response.ok) {
//         const studentData = await response.json();
//         return studentData;
//       } else {
//         console.error('Failed to fetch student data');
//         return null;
//       }
//     } catch (error) {
//       console.error('Error fetching student:', error);
//       return null;
//     }
//   };

//   // Download certificate function
//   const downloadCertificate = async (student) => {
//     try {
//       // Get full student data first
//       const fullStudentData = await fetchStudentById(student._id || student.id);
      
//       if (!fullStudentData) {
//         alert('Unable to fetch student data');
//         return;
//       }

//       // Method 1: If student has direct certificate URL
//       if (fullStudentData.certificateUrl) {
//         const link = document.createElement('a');
//         link.href = fullStudentData.certificateUrl;
//         link.download = `Certificate_${fullStudentData.name}_${fullStudentData.batchCode || 'Default'}.pdf`;
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//         return;
//       }

//       // Method 2: Generate certificate from student data
//       generateCertificateFromStudentData(fullStudentData);

//     } catch (error) {
//       console.error('Error downloading certificate:', error);
//       alert('Error downloading certificate');
//     }
//   };

//   // Generate certificate from student data
//   const generateCertificateFromStudentData = (studentData) => {
//     // Create a simple certificate HTML for download
//     const certificateHTML = `
//       <!DOCTYPE html>
//       <html>
//       <head>
//         <title>Certificate - ${studentData.name}</title>
//         <style>
//           body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
//           .certificate { border: 5px solid #gold; padding: 40px; margin: 20px; }
//           .title { font-size: 36px; color: #333; margin-bottom: 20px; }
//           .content { font-size: 18px; line-height: 1.6; }
//           .name { font-size: 24px; font-weight: bold; color: #0066cc; }
//           .grade { font-size: 20px; font-weight: bold; color: #009900; }
//         </style>
//       </head>
//       <body>
//         <div class="certificate">
//           <h1 class="title">CERTIFICATE OF COMPLETION</h1>
//           <div class="content">
//             <p>This is to certify that</p>
//             <p class="name">${studentData.name}</p>
//             <p>has successfully completed the course</p>
//             <p><strong>${studentData.courseName || 'Web Development Course'}</strong></p>
//             <p>with a grade of</p>
//             <p class="grade">${studentData.grade}%</p>
//             <p>Batch: <strong>${studentData.batchCode || 'N/A'}</strong></p>
//             <p>Date: <strong>${new Date().toLocaleDateString()}</strong></p>
//           </div>
//         </div>
//       </body>
//       </html>
//     `;

//     // Create and download HTML certificate
//     const blob = new Blob([certificateHTML], { type: 'text/html' });
//     const url = window.URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = `Certificate_${studentData.name.replace(/\s+/g, '_')}.html`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     window.URL.revokeObjectURL(url);
//   };

//   // Filter students based on search
//   const filteredStudents = students.filter(student =>
//     student.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     student.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     student.batchCode?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Pagination
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredStudents.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);

//   const handleViewCertificate = async (student) => {
//     const fullStudentData = await fetchStudentById(student._id || student.id);
//     setSelectedStudent(fullStudentData || student);
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return 'N/A';
//     return new Date(dateString).toLocaleDateString();
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
//                     <h4 className="card-title">
//                       Certificates - Students Who Completed The Course
//                     </h4>
//                     {currentStudent && (
//                       <div className="mt-2">
//                         <small className="text-muted">
//                           Logged in as: <strong>{currentStudent.name}</strong>
//                         </small>
//                       </div>
//                     )}
//                   </div>

//                   <div className="card-body">
//                     <div className="dataTables_wrapper dt-bootstrap4 no-footer">
//                       <div className="row">
//                         <div className="col-sm-12 col-md-6">
//                           <button
//                             type="button"
//                             className="btn btn-success"
//                             onClick={fetchAllStudents}
//                             disabled={loading}
//                           >
//                             {loading ? 'Loading...' : 'Refresh Data'}
//                           </button>
//                         </div>
//                         <div className="col-sm-12 col-md-6">
//                           <div className="dataTables_filter">
//                             <label>
//                               Search:
//                               <input
//                                 type="search"
//                                 className="form-control form-control-sm"
//                                 placeholder="Search by name, email, or batch..."
//                                 value={searchTerm}
//                                 onChange={(e) => setSearchTerm(e.target.value)}
//                               />
//                             </label>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="row">
//                         <div className="col-sm-12">
//                           <table className="table table-bordered dt-responsive nowrap w-100 dataTable no-footer">
//                             <thead>
//                               <tr>
//                                 <th>Student Name</th>
//                                 <th>Email</th>
//                                 <th>Grade</th>
//                                 <th>Batch Code</th>
//                                 <th>Completion Date</th>
//                                 <th>Action</th>
//                               </tr>
//                             </thead>
//                             <tbody>
//                               {loading ? (
//                                 <tr>
//                                   <td colSpan="6" className="text-center">Loading students...</td>
//                                 </tr>
//                               ) : currentItems.length > 0 ? (
//                                 currentItems.map((student) => (
//                                   <tr key={student._id || student.id}>
//                                     <td>{student.name || 'N/A'}</td>
//                                     <td>{student.email || 'N/A'}</td>
//                                     <td>
//                                       <span className={`badge ${student.grade >= 90 ? 'bg-success' : student.grade >= 75 ? 'bg-warning' : 'bg-secondary'}`}>
//                                         {student.grade || 'N/A'}%
//                                       </span>
//                                     </td>
//                                     <td>{student.batchCode || 'N/A'}</td>
//                                     <td>{formatDate(student.completionDate) || formatDate(student.updatedAt)}</td>
//                                     <td>
//                                       <div className="d-flex flex-wrap gap-2">
//                                         <button
//                                           type="button"
//                                           className="btn btn-soft-success waves-effect waves-light"
//                                           data-bs-toggle="modal"
//                                           data-bs-target="#certificateModal"
//                                           onClick={() => handleViewCertificate(student)}
//                                           title="View Certificate"
//                                         >
//                                           <i className="fas fa-eye"></i>
//                                         </button>
//                                         <button
//                                           type="button"
//                                           className="btn btn-soft-primary waves-effect waves-light"
//                                           onClick={() => downloadCertificate(student)}
//                                           title="Download Certificate"
//                                         >
//                                           <i className="fas fa-download"></i>
//                                         </button>
//                                       </div>
//                                     </td>
//                                   </tr>
//                                 ))
//                               ) : (
//                                 <tr>
//                                   <td colSpan="6" className="text-center">
//                                     {searchTerm ? 'No students found matching your search' : 'No certified students found'}
//                                   </td>
//                                 </tr>
//                               )}
//                             </tbody>
//                           </table>
//                         </div>
//                       </div>

//                       {totalPages > 1 && (
//                         <div className="row">
//                           <div className="col-sm-12 col-md-5">
//                             <div className="dataTables_info">
//                               Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredStudents.length)} of {filteredStudents.length} entries
//                             </div>
//                           </div>
//                           <div className="col-sm-12 col-md-7">
//                             <div className="dataTables_paginate">
//                               <ul className="pagination">
//                                 <li className={`paginate_button page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//                                   <button
//                                     className="page-link"
//                                     onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//                                     disabled={currentPage === 1}
//                                   >
//                                     Previous
//                                   </button>
//                                 </li>
//                                 {[...Array(totalPages)].map((_, index) => (
//                                   <li key={index + 1} className={`paginate_button page-item ${currentPage === index + 1 ? 'active' : ''}`}>
//                                     <button
//                                       className="page-link"
//                                       onClick={() => setCurrentPage(index + 1)}
//                                     >
//                                       {index + 1}
//                                     </button>
//                                   </li>
//                                 ))}
//                                 <li className={`paginate_button page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
//                                   <button
//                                     className="page-link"
//                                     onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//                                     disabled={currentPage === totalPages}
//                                   >
//                                     Next
//                                   </button>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Certificate View Modal */}
//           <div
//             className="modal fade"
//             id="certificateModal"
//             tabIndex="-1"
//             aria-labelledby="certificateModalLabel"
//             aria-hidden="true"
//           >
//             <div className="modal-dialog modal-lg">
//               <div className="modal-content">
//                 <div className="modal-header">
//                   <h5 className="modal-title" id="certificateModalLabel">
//                     Certificate Preview
//                   </h5>
//                   <button
//                     type="button"
//                     className="btn-close"
//                     data-bs-dismiss="modal"
//                     aria-label="Close"
//                   ></button>
//                 </div>
//                 <div className="modal-body">
//                   {selectedStudent && (
//                     <div className="certificate-preview text-center">
//                       <div className="border border-3 border-warning p-4 mb-3" style={{borderStyle: 'double'}}>
//                         <h2 className="text-primary mb-4">🏆 CERTIFICATE OF COMPLETION 🏆</h2>
                        
//                         <div className="certificate-content">
//                           <p className="fs-5 mb-3">This is to certify that</p>
//                           <h3 className="text-success mb-3">{selectedStudent.name}</h3>
//                           <p className="fs-6 mb-3">has successfully completed the course</p>
//                           <h4 className="text-info mb-3">{selectedStudent.courseName || 'Web Development Program'}</h4>
//                           <p className="fs-6 mb-2">with an outstanding grade of</p>
//                           <h3 className="text-warning mb-4">{selectedStudent.grade}%</h3>
                          
//                           <div className="row">
//                             <div className="col-md-6">
//                               <p><strong>Student ID:</strong> {selectedStudent._id || selectedStudent.id}</p>
//                               <p><strong>Email:</strong> {selectedStudent.email}</p>
//                             </div>
//                             <div className="col-md-6">
//                               <p><strong>Batch Code:</strong> {selectedStudent.batchCode || 'N/A'}</p>
//                               <p><strong>Date:</strong> {formatDate(selectedStudent.completionDate) || new Date().toLocaleDateString()}</p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//                 <div className="modal-footer">
//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                     data-bs-dismiss="modal"
//                   >
//                     Close
//                   </button>
//                   <button 
//                     type="button" 
//                     className="btn btn-primary"
//                     onClick={() => selectedStudent && downloadCertificate(selectedStudent)}
//                   >
//                     <i className="fas fa-download me-2"></i>
//                     Download Certificate
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Certificate1;

///nayana
// import React, { useState, useEffect } from 'react';
// import Header1 from "../../Header/Header";
// import SideNavBar1 from "../../SideNavBar/SideNavBar";
// import { FiDownload } from "react-icons/fi";
// import { IoMdEye } from "react-icons/io";

// const Certificate1 = ({ isAdmin }) => {
//   const [students, setStudents] = useState([]);
//   const [currentStudent, setCurrentStudent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(10);

//   // Get current logged-in student ID
//   const studentId = localStorage.getItem("studentId");

//   useEffect(() => {
//     loadStudentsData();
//     if (studentId && !isAdmin) {
//       loadCurrentStudent();
//     }
//     // eslint-disable-next-line
//   }, [studentId, isAdmin]);

//   const loadStudentsData = async () => {
//     setLoading(true);
//     try {
//       const url = isAdmin 
//         ? 'http://localhost:8080/api/completed-courses'
//         : `http://localhost:8080/api/students/${studentId}/completed-courses`;
      
//       const response = await fetch(url);
      
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
      
//       const data = await response.json();
      
//       // Ensure data is always an array
//       setStudents(Array.isArray(data) ? data : []);
//     } catch (error) {
//       console.error('Error loading students data:', error);
//       setStudents([]);
//     }
//     setLoading(false);
//   };

//   const loadCurrentStudent = async () => {
//     try {
//       const response = await fetch(`http://localhost:8080/api/students/${studentId}/completed-courses`);
      
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
      
//       const data = await response.json();
//       setCurrentStudent(Array.isArray(data) && data.length > 0 ? data[0] : null);
//     } catch (error) {
//       console.error('Error loading current student:', error);
//       setCurrentStudent(null);
//     }
//   };

//   const fetchStudentById = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:8080/api/students/${id}/completed-courses`);
      
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
      
//       const data = await response.json();
//       return Array.isArray(data) && data.length > 0 ? data[0] : null;
//     } catch (error) {
//       console.error('Error fetching student by ID:', error);
//       return null;
//     }
//   };

//   // Download certificate function
//   const downloadCertificate = async (student) => {
//     try {
//       const fullStudentData = await fetchStudentById(student._id);
      
//       if (!fullStudentData) {
//         alert('Unable to fetch student data');
//         return;
//       }

//       // Generate certificate HTML
//       generateCertificateFromStudentData(fullStudentData);

//     } catch (error) {
//       console.error('Error downloading certificate:', error);
//       alert('Error downloading certificate');
//     }
//   };

//   // Generate certificate from student data
//   const generateCertificateFromStudentData = (studentData) => {
//     const certificateHTML = `
//       <!DOCTYPE html>
//       <html>
//       <head>
//         <title>Certificate - ${studentData.name || 'Student'}</title>
//         <style>
//           body { 
//             font-family: 'Times New Roman', serif; 
//             text-align: center; 
//             padding: 50px; 
//             background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
//             margin: 0;
//           }
//           .certificate { 
//             border: 8px solid #d4af37; 
//             padding: 60px 40px; 
//             margin: 20px auto; 
//             background: white;
//             box-shadow: 0 0 20px rgba(0,0,0,0.1);
//             max-width: 800px;
//             position: relative;
//           }
//           .certificate::before {
//             content: '';
//             position: absolute;
//             top: 20px;
//             left: 20px;
//             right: 20px;
//             bottom: 20px;
//             border: 2px solid #d4af37;
//           }
//           .title { 
//             font-size: 48px; 
//             color: #2c3e50; 
//             margin-bottom: 30px; 
//             font-weight: bold;
//             text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
//           }
//           .subtitle {
//             font-size: 24px;
//             color: #7f8c8d;
//             margin-bottom: 40px;
//           }
//           .content { 
//             font-size: 20px; 
//             line-height: 1.8; 
//             color: #2c3e50;
//           }
//           .name { 
//             font-size: 36px; 
//             font-weight: bold; 
//             color: #e74c3c; 
//             margin: 20px 0;
//             text-transform: uppercase;
//             letter-spacing: 2px;
//           }
//           .course {
//             font-size: 24px;
//             color: #3498db;
//             font-weight: bold;
//             margin: 20px 0;
//           }
//           .grade { 
//             font-size: 28px; 
//             font-weight: bold; 
//             color: #27ae60; 
//             margin: 20px 0;
//           }
//           .details {
//             margin-top: 40px;
//             font-size: 16px;
//             color: #7f8c8d;
//           }
//          .signature-section {
//             margin-top: 60px;
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//             gap: 40px;
//           }
//           .signature {
//             text-align: center;
//             flex: 1;
//             position: relative;
//             padding: 20px;
//             background: #fafafa;
//             border-radius: 10px;
//             border: 1px solid #e8e8e8;
//             transition: all 0.3s ease;
//           }
//           .signature:hover {
//             transform: translateY(-2px);
//             box-shadow: 0 5px 15px rgba(0,0,0,0.1);
//           }
//           .signature-name {
//             font-family: 'Brush Script MT', cursive;
//             font-size: 24px;
//             color: #2c3e50;
//             margin-bottom: 15px;
//             font-weight: bold;
//             text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
//           }
//           .signature-line {
//             width: 200px;
//             height: 3px;
//             background: linear-gradient(90deg, #3498db, #2c3e50);
//             margin: 0 auto 15px auto;
//             border-radius: 2px;
//             position: relative;
//           }
//           .signature-line::before {
//             content: '';
//             position: absolute;
//             top: -2px;
//             left: -2px;
//             right: -2px;
//             bottom: -2px;
//             background: linear-gradient(90deg, #3498db, #2c3e50);
//             border-radius: 4px;
//             z-index: -1;
//             opacity: 0.3;
//           }
//           .signature-title {
//             font-size: 16px;
//             font-weight: bold;
//             color: #34495e;
//             margin: 0;
//             text-transform: uppercase;
//             letter-spacing: 1px;
//           }
//           .signature-department {
//             font-size: 12px;
//             color: #7f8c8d;
//             margin-top: 5px;
//             font-style: italic;
//           } margin-bottom: 10px;
//           }
//           .date-section {
//             text-align: center;
//             margin-top: 40px;
//             font-size: 18px;
//             color: #2c3e50;
//           }
//         </style>
//       </head>
//       <body>
//         <div class="certificate">
//           <h1 class="title">🏆 CERTIFICATE OF COMPLETION 🏆</h1>
//           <p class="subtitle">This is proudly presented to</p>
          
//           <div class="content">
//             <div class="name">${studentData.username || 'Student'}</div>
//             <p>for successfully completing the</p>
//             <div class="course">${studentData.courseName || 'Web Development Course'}</div>
//             <p>with an outstanding grade of</p>
//             <div class="grade">${studentData.grade || 90}%</div>
            
//             <div class="details">
//               <p><strong>Student ID:</strong> ${studentData.studentId || 'N/A'}</p>
             
//               <p><strong>Email:</strong> ${studentData.email || 'N/A'}</p>
//             </div>
            
//             <div class="date-section">
//               <p><strong>Date of Completion:</strong> ${studentData.completionDate ? new Date(studentData.completionDate).toLocaleDateString() : 'N/A'}</p>
//               <p><strong>Certificate Generated:</strong> ${new Date().toLocaleDateString()}</p>
//             </div>
            
//            <div class="signature-section">
//               <div class="signature">
//                 <div class="signature-name">Dr. Michael Harrison</div>                 
//                 <div class="signature-line"></div>                 
//                 <p class="signature-title">Director</p>
//                 <p class="signature-department">Academic Affairs Department</p>               
//               </div>               
//               <div class="signature">
//                 <div class="signature-name">Prof. Jennifer Clarke</div>                 
//                 <div class="signature-line"></div>                 
//                 <p class="signature-title">Course Instructor</p>
//                 <p class="signature-department">Department of Education</p>               
//               </div>
//             </div>
//           </div>
//         </div>
//       </body>
//       </html>
//     `;

//     // Create and download certificate
//     const blob = new Blob([certificateHTML], { type: 'text/html' });
//     const url = window.URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = `Certificate_${(studentData.name || 'Student').replace(/\s+/g, '_')}`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     window.URL.revokeObjectURL(url);

//     // Show success message
//     alert(`Certificate downloaded successfully for ${studentData.name || 'Student'}!`);
//   };

//   // Filter students based on search
//   const filteredStudents = students.filter(student =>
//     (student.name?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
//     (student.email?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
//     (student.batchCode?.toLowerCase() || '').includes(searchTerm.toLowerCase())
//   );

//   // Pagination
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredStudents.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);

//   const handleViewCertificate = async (student) => {
//     const fullStudentData = await fetchStudentById(student._id);
//     setSelectedStudent(fullStudentData || student);
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return 'N/A';
//     return new Date(dateString).toLocaleDateString();
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
//                     <h4 className="card-title">
//                       Certificates 
//                     </h4>
//                     {currentStudent && (
//                       <div className="mt-2">
//                         <small className="text-muted">
//                           Logged in as: <strong>{currentStudent.name}</strong> 
                        
//                         </small>
//                       </div>
//                     )}
//                   </div>

//                   <div className="card-body">
//                     <div className="dataTables_wrapper dt-bootstrap4 no-footer">
//                       <div className="row">
//                         <div className="col-sm-12 col-md-6">
//                           <button
//                             type="button"
//                             className="btn btn-success me-2"
//                             onClick={loadStudentsData}
//                             disabled={loading}
//                           >
//                             {loading ? (
//                               <>
//                                 <span className="spinner-border spinner-border-sm me-2" role="status"></span>
//                                 Loading...
//                               </>
//                             ) : (
//                               <>
//                                 <i className="fas fa-sync-alt me-2"></i>
//                                 Refresh Data
//                               </>
//                             )}
//                           </button>
//                           <span className="badge bg-info">
//                             {students.length} Certified Students
//                           </span>
//                         </div>
//                         <div className="col-sm-12 col-md-6">
//                           <div className="dataTables_filter">
//                             <label>
//                               Search:
//                               <input
//                                 type="search"
//                                 className="form-control form-control-sm"
//                                 placeholder="Search by name, email, or batch..."
//                                 value={searchTerm}
//                                 onChange={(e) => setSearchTerm(e.target.value)}
//                               />
//                             </label>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="row">
//                         <div className="col-sm-12">
//                           <div className="table-responsive">
//                             <table className="table table-bordered table-striped table-hover">
//                               <thead className="">
//                                 <tr>
//                                   <th>Student Name</th>
//                                   <th>Email</th>
//                                   <th>studentId</th>
//                                   <th>Course</th>
//                                   <th>Grade</th>
//                                   {/* <th>Batch Code</th> */}
//                                   <th>Completion Date</th>
//                                   <th>Actions</th>
//                                 </tr>
//                               </thead>
//                               <tbody>
//                                 {loading ? (
//                                   <tr>
//                                     <td colSpan="7" className="text-center py-4">
//                                       <div className="spinner-border text-primary" role="status">
//                                         <span className="visually-hidden">Loading...</span>
//                                       </div>
//                                       <p className="mt-2 mb-0">Loading students data...</p>
//                                     </td>
//                                   </tr>
//                                 ) : currentItems.length > 0 ? (
//                                   currentItems.map((student, index) => (
//                                     <tr key={student._id || index}>
//                                       <td>
//                                         <div className="d-flex align-items-center">
//                                           <div className="avatar-sm me-2">
//                                             <span className="avatar-title bg-primary rounded-circle">
//                                               {student.username ? student.username.charAt(0).toUpperCase() : 'N'}
//                                             </span>
//                                           </div>
//                                           <strong>{student.username || 'N/A'}</strong>
//                                         </div>
//                                       </td>
//                                       <td>{student.email || 'N/A'}</td>
//                                       <td>{student.studentId || 'N/A'}</td>
//                                       <td>
//                                         <small className="text-muted">{student.courseName || 'N/A'}</small>
//                                       </td>
//                                       <td>
//                                         <span className={`badge fs-6 ${
//                                           (student.grade || 0) >= 95 ? 'bg-success' : 
//                                           (student.grade || 0) >= 85 ? 'bg-warning' : 
//                                           'bg-secondary'
//                                         }`}>
//                                           {student.grade || 90}%
//                                         </span>
//                                       </td>
//                                       {/* <td>
//                                         <code>{student.batchCode || 'N/A'}</code>
//                                       </td> */}
//                                       <td>{formatDate(student.completionDate)}</td>
//                                       <td>
//                                       <div className="btn-group" role="group">
//   <button
//     type="button"
//     className="btn btn-sm btn-outline-primary"
//     data-bs-toggle="modal"
//     data-bs-target="#certificateModal"
//     onClick={() => handleViewCertificate(student)}
//     title="View Certificate"
//     disabled={!student._id}
//   >
//     <IoMdEye  size={16}/>
//   </button>
//   <button
//     type="button"
//     className="btn btn-sm btn-outline-success"
//     onClick={() => downloadCertificate(student)}
//     title="Download Certificate"
//     disabled={!student._id}
//   >
//     <FiDownload size={16} />
//   </button>
// </div>

//                                       </td>
//                                     </tr>
//                                   ))
//                                 ) : (
//                                   <tr>
//                                     <td colSpan="7" className="text-center py-4">
//                                       <div className="text-muted">
//                                         <i className="fas fa-graduation-cap fa-3x mb-3"></i>
//                                         <p className="mb-0">
//                                           {searchTerm ? 
//                                             `No students found matching "${searchTerm}"` : 
//                                             'No certified students found'
//                                           }
//                                         </p>
//                                       </div>
//                                     </td>
//                                   </tr>
//                                 )}
//                               </tbody>
//                             </table>
//                           </div>
//                         </div>
//                       </div>

//                       {totalPages > 1 && (
//                         <div className="row">
//                           <div className="col-sm-12 col-md-5">
//                             <div className="dataTables_info">
//                               Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredStudents.length)} of {filteredStudents.length} entries
//                             </div>
//                           </div>
//                           <div className="col-sm-12 col-md-7">
//                             <div className="dataTables_paginate">
//                               <ul className="pagination justify-content-end">
//                                 <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//                                   <button
//                                     className="page-link"
//                                     onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//                                     disabled={currentPage === 1}
//                                   >
//                                     Previous
//                                   </button>
//                                 </li>
//                                 {[...Array(totalPages)].map((_, index) => (
//                                   <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
//                                     <button
//                                       className="page-link"
//                                       onClick={() => setCurrentPage(index + 1)}
//                                     >
//                                       {index + 1}
//                                     </button>
//                                   </li>
//                                 ))}
//                                 <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
//                                   <button
//                                     className="page-link"
//                                     onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//                                     disabled={currentPage === totalPages}
//                                   >
//                                     Next
//                                   </button>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Certificate View Modal */}
//           <div
//             className="modal fade"
//             id="certificateModal"
//             tabIndex="-1"
//             aria-labelledby="certificateModalLabel"
//             aria-hidden="true"
//           >
//             <div className="modal-dialog modal-xl">
//               <div className="modal-content">
//                 <div className="modal-header">
//                   <h5 className="modal-title" id="certificateModalLabel">
//                     <i className="fas fa-certificate text-warning me-2"></i>
//                     Certificate Preview
//                   </h5>
//                   <button
//                     type="button"
//                     className="btn-close"
//                     data-bs-dismiss="modal"
//                     aria-label="Close"
//                   ></button>
//                 </div>
//                 <div className="modal-body">
//                   {selectedStudent && (
//                     <div className="certificate-preview">
//                       <div className="text-center p-4 border border-3 border-warning rounded" 
//                            style={{
//                              background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
//                              borderStyle: 'double'
//                            }}>
//                         <h1 className="display-4 text-primary mb-4">
//                           🏆 CERTIFICATE OF COMPLETION 🏆
//                         </h1>
                        
//                         <p className="fs-5 text-muted mb-3">This is proudly presented to</p>
                        
//                         <h2 className="text-danger mb-4" style={{letterSpacing: '2px', textTransform: 'uppercase'}}>
//                           {selectedStudent.username || 'N/A'}
//                         </h2>
                        
//                         <p className="fs-6 mb-3">for successfully completing the</p>
                        
//                         <h3 className="text-info mb-4">{selectedStudent.courseName || 'Web Development Program'}</h3>
                        
//                         <p className="fs-6 mb-2">with an outstanding grade of</p>
                        
//                         <h2 className="text-success mb-4">{selectedStudent.grade}90%</h2>
                        
//                         <div className="row mt-4">
//                           <div className="col-md-6">
//                             <div className="card border-0 bg-light">
//                               <div className="card-body">
//                                 <h6 className="card-title">Student Details</h6>
//                                 <p className="mb-1"><strong>ID:</strong> {selectedStudent.studentId}</p>
//                                 <p className="mb-1"><strong>Email:</strong> {selectedStudent.email}</p>
//                                 {/* <p className="mb-0"><strong>Batch:</strong> {selectedStudent.batchCode}</p> */}
//                               </div>
//                             </div>
//                           </div>
//                           <div className="col-md-6">
//                             <div className="card border-0 bg-light">
//                               <div className="card-body">
//                                 <h6 className="card-title">Certificate Details</h6>
//                                 <p className="mb-1"><strong>Completion:</strong> {formatDate(selectedStudent.completionDate)}</p>
//                                 {/* <p className="mb-1"><strong>Generated:</strong> {new Date().toLocaleDateString()}</p> */}
//                                 <p className="mb-0"><strong>Status:</strong> <span className="badge bg-success">Certified</span></p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//                 <div className="modal-footer">
//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                     data-bs-dismiss="modal"
//                   >
//                     <i className="fas fa-times me-2"></i>Close
//                   </button>
//                   <button 
//                     type="button" 
//                     className="btn btn-success"
//                     onClick={() => selectedStudent && downloadCertificate(selectedStudent)}
//                   >
//                     <i className="fas fa-download me-2"></i>
//                     Download Certificate
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Certificate1;


import React, { useState, useEffect } from 'react';
import Header1 from "../../Header/Header";
import SideNavBar1 from "../../SideNavBar/SideNavBar";
import { FiDownload } from "react-icons/fi";
import { IoMdEye } from "react-icons/io";

const Certificate1 = ({ isAdmin }) => {
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Get current logged-in student ID
  const studentId = localStorage.getItem("studentId");
   

  
  const calculateOverallScoreAndGrade = (assessments) => {
    if (!assessments || assessments.length === 0) {
      return { totalScore: 0, totalMarks: 0, percentage: 0, grade: 'N/A' };
    }
    console.log('Assessment Results:', assessments);
  
    // ✅ Use reduce to calculate scores
    const totalScore = assessments.reduce((sum, result) => sum + (result.score || 0), 0);
    const totalMarks = assessments.reduce((sum, result) => sum + (result.totalMarks || 0), 0);
  
    // ✅ Calculate percentage
    const percentage = totalMarks > 0 ? (totalScore / totalMarks) * 100 : 0;
  console.log('Total Score:', totalScore);
    console.log('Total Marks:', totalMarks);  
    // ✅ Determine grade
    let grade = 'F';
    if (percentage >= 95) grade = 'A+';
    else if (percentage >= 90) grade = 'A';
    else if (percentage >= 85) grade = 'B+';
    else if (percentage >= 80) grade = 'B';
    else if (percentage >= 75) grade = 'C+';
    else if (percentage >= 70) grade = 'C';
    else if (percentage >= 65) grade = 'D+';
    else if (percentage >= 60) grade = 'D';
  
    return {
      totalScore,
      totalMarks,
      percentage: Math.round(percentage * 100) / 100, // rounded to 2 decimals
      grade
    };
  };
  
  

  useEffect(() => {
    loadStudentsData();
    if (studentId && !isAdmin) {
      loadCurrentStudent();
    }
    // eslint-disable-next-line
  }, [studentId, isAdmin]);

  const loadStudentsData = async () => {
    setLoading(true);
    try {
      const url = isAdmin 
        ? 'http://localhost:8080/api/completed-courses'
        : `http://localhost:8080/api/students/${studentId}/completed-courses`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Ensure data is always an array
      setStudents(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error loading students data:', error);
      setStudents([]);
    }
    setLoading(false);
  };

  const loadCurrentStudent = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/students/${studentId}/completed-courses`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setCurrentStudent(Array.isArray(data) && data.length > 0 ? data[0] : null);
    } catch (error) {
      console.error('Error loading current student:', error);
      setCurrentStudent(null);
    }
  };

  const fetchStudentById = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/students/${id}/completed-courses`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return Array.isArray(data) && data.length > 0 ? data[0] : null;
    } catch (error) {
      console.error('Error fetching student by ID:', error);
      return null;
    }
  };

  // Download certificate function
  const downloadCertificate = async (student) => {
    try {
      const fullStudentData = await fetchStudentById(student._id);
      
      if (!fullStudentData) {
        alert('Unable to fetch student data');
        return;
      }

      // Generate certificate HTML
      generateCertificateFromStudentData(fullStudentData);
      console.log("Full Student Data:", fullStudentData);

    } catch (error) {
      console.error('Error downloading certificate:', error);
      alert('Error downloading certificate');
    }
  };

  
  // Generate certificate from student data
  const generateCertificateFromStudentData = (studentData) => {
    // Calculate overall score and grade
    const overallResult = calculateOverallScoreAndGrade(studentData.assessments);
    console.log("stduentData:", studentData.assessments);
    console.log('Overall Result:', overallResult);
    
    const certificateHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Certificate - ${studentData.username || 'Student'}</title>
        <style>
          body { 
            font-family: 'Times New Roman', serif; 
            text-align: center; 
            padding: 50px; 
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            margin: 0;
          }
          .certificate { 
            border: 8px solid #d4af37; 
            padding: 60px 40px; 
            margin: 20px auto; 
            background: white;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
            max-width: 800px;
            position: relative;
          }
          .certificate::before {
            content: '';
            position: absolute;
            top: 20px;
            left: 20px;
            right: 20px;
            bottom: 20px;
            border: 2px solid #d4af37;
          }
          .title { 
            font-size: 48px; 
            color: #2c3e50; 
            margin-bottom: 30px; 
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
          }
          .subtitle {
            font-size: 24px;
            color: #7f8c8d;
            margin-bottom: 40px;
          }
          .content { 
            font-size: 20px; 
            line-height: 1.8; 
            color: #2c3e50;
          }
          .name { 
            font-size: 36px; 
            font-weight: bold; 
            color: #e74c3c; 
            margin: 20px 0;
            text-transform: uppercase;
            letter-spacing: 2px;
          }
          .course {
            font-size: 24px;
            color: #3498db;
            font-weight: bold;
            margin: 20px 0;
          }
          .grade { 
            font-size: 28px; 
            font-weight: bold; 
            color: #27ae60; 
            margin: 20px 0;
          }
          .score-details {
            background: #f8f9fa;
            border-radius: 10px;
            padding: 20px;
            margin: 30px 0;
            border-left: 5px solid #3498db;
          }
          .score-item {
            display: inline-block;
            margin: 0 15px;
            padding: 10px 15px;
            background: white;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          }
          .details {
            margin-top: 40px;
            font-size: 16px;
            color: #7f8c8d;
          }
         .signature-section {
            margin-top: 60px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 40px;
          }
          .signature {
            text-align: center;
            flex: 1;
            position: relative;
            padding: 20px;
            background: #fafafa;
            border-radius: 10px;
            border: 1px solid #e8e8e8;
            transition: all 0.3s ease;
          }
          .signature:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          }
          .signature-name {
            font-family: 'Brush Script MT', cursive;
            font-size: 24px;
            color: #2c3e50;
            margin-bottom: 15px;
            font-weight: bold;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
          }
          .signature-line {
            width: 200px;
            height: 3px;
            background: linear-gradient(90deg, #3498db, #2c3e50);
            margin: 0 auto 15px auto;
            border-radius: 2px;
            position: relative;
          }
          .signature-line::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(90deg, #3498db, #2c3e50);
            border-radius: 4px;
            z-index: -1;
            opacity: 0.3;
          }
          .signature-title {
            font-size: 16px;
            font-weight: bold;
            color: #34495e;
            margin: 0;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .signature-department {
            font-size: 12px;
            color: #7f8c8d;
            margin-top: 5px;
            font-style: italic;
          }
          .date-section {
            text-align: center;
            margin-top: 40px;
            font-size: 18px;
            color: #2c3e50;
          }
        </style>
      </head>
      <body>
        <div class="certificate">
          <h1 class="title">🏆 CERTIFICATE OF COMPLETION 🏆</h1>
          <p class="subtitle">This is proudly presented to</p>
          
          <div class="content">
            <div class="name">${studentData.username || 'Student'}</div>
            <p>for successfully completing the</p>
            <div class="course">${studentData.courseName || 'Web Development Course'}</div>
            <p>with an outstanding performance</p>
            
            <div class="score-details">
              <h3 style="margin-bottom: 20px; color: #2c3e50;">Academic Performance</h3>
              <div class="score-item">
                <strong>Total Score:</strong> ${overallResult.totalScore}/${overallResult.totalMarks}
              </div>
              <div class="score-item">
                <strong>Percentage:</strong> ${overallResult.percentage}%
              </div>
              <div class="score-item">
                <strong>Grade:</strong> ${overallResult.grade}
              </div>
            </div>
            
            <div class="details">
              <p><strong>Student ID:</strong> ${studentData.studentId || 'N/A'}</p>
              <p><strong>Email:</strong> ${studentData.email || 'N/A'}</p>
              <p><strong>Total Assessments:</strong> ${studentData.assessments ? studentData.assessments.length : 0}</p>
            </div>
            
            <div class="date-section">
              <p><strong>Date of Completion:</strong> ${studentData.completionDate ? new Date(studentData.completionDate).toLocaleDateString() : 'N/A'}</p>
              <p><strong>Certificate Generated:</strong> ${new Date().toLocaleDateString()}</p>
            </div>
            
           <div class="signature-section">
              <div class="signature">
                <div class="signature-name">Dr. Michael Harrison</div>                 
                <div class="signature-line"></div>                 
                <p class="signature-title">Director</p>
                <p class="signature-department">Academic Affairs Department</p>               
              </div>               
              <div class="signature">
                <div class="signature-name">Prof. Jennifer Clarke</div>                 
                <div class="signature-line"></div>                 
                <p class="signature-title">Course Instructor</p>
                <p class="signature-department">Department of Education</p>               
              </div>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // Create and download certificate
    const blob = new Blob([certificateHTML], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Certificate_${(studentData.username || 'Student').replace(/\s+/g, '_')}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    // Show success message
    alert(`Certificate downloaded successfully for ${studentData.username || 'Student'}!`);
  };

  // Filter students based on search
  const filteredStudents = students.filter(student =>
    (student.username?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
    (student.email?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
    (student.batchCode?.toLowerCase() || '').includes(searchTerm.toLowerCase())
  );

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredStudents.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);

  const handleViewCertificate = async (student) => {
    const fullStudentData = await fetchStudentById(student._id);
    setSelectedStudent(fullStudentData || student);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString();
  };

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
                    <h4 className="card-title">
                      Certificates 
                    </h4>
                    {currentStudent && (
                      <div className="mt-2">
                        <small className="text-muted">
                          Logged in as: <strong>{currentStudent.username}</strong> 
                        </small>
                      </div>
                    )}
                  </div>

                  <div className="card-body">
                    <div className="dataTables_wrapper dt-bootstrap4 no-footer">
                      <div className="row">
                        <div className="col-sm-12 col-md-6">
                          <button
                            type="button"
                            className="btn btn-success me-2"
                            onClick={loadStudentsData}
                            disabled={loading}
                          >
                            {loading ? (
                              <>
                                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                Loading...
                              </>
                            ) : (
                              <>
                                <i className="fas fa-sync-alt me-2"></i>
                                Refresh Data
                              </>
                            )}
                          </button>
                          <span className="badge bg-info">
                            {students.length} Certified Students
                          </span>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <div className="dataTables_filter">
                            <label>
                              Search:
                              <input
                                type="search"
                                className="form-control form-control-sm"
                                placeholder="Search by name, email, or batch..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                              />
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-12">
                          <div className="table-responsive">
                            <table className="table table-bordered table-striped table-hover">
                              <thead className="">
                                <tr>
                                  <th>Student Name</th>
                                  <th>Email</th>
                                  <th>Student ID</th>
                                  <th>Course</th>
                                  {/* <th>Overall Score</th> */}
                                  <th>Grade</th>
                                  <th>Completion Date</th>
                                  <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                {loading ? (
                                  <tr>
                                    <td colSpan="8" className="text-center py-4">
                                      <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                      </div>
                                      <p className="mt-2 mb-0">Loading students data...</p>
                                    </td>
                                  </tr>
                                ) : currentItems.length > 0 ? (
                                  currentItems.map((student, index) => {
                                    const overallResult = calculateOverallScoreAndGrade(student.assessments);
                                    return (
                                      <tr key={student._id || index}>
                                        <td>
                                          <div className="d-flex align-items-center">
                                            <div className="avatar-sm me-2">
                                              <span className="avatar-title bg-primary rounded-circle">
                                                {student.username ? student.username.charAt(0).toUpperCase() : 'N'}
                                              </span>
                                            </div>
                                            <strong>{student.username || 'N/A'}</strong>
                                          </div>
                                        </td>
                                        <td>{student.email || 'N/A'}</td>
                                        <td>{student.studentId || 'N/A'}</td>
                                        <td>
                                          <small className="text-muted">{student.courseName || 'N/A'}</small>
                                        </td>
                                        {/* <td>
                                          <small>{overallResult.totalScore}/{overallResult.totalMarks} ({overallResult.percentage}%)</small>
                                        </td> */}
                                        <td>
                                          <span className={`badge fs-6 ${
                                            overallResult.percentage >= 95 ? 'bg-success' : 
                                            overallResult.percentage >= 85 ? 'bg-warning' : 
                                            overallResult.percentage >= 70 ? 'bg-info' :
                                            'bg-secondary'
                                          }`}>
                                            {overallResult.grade}
                                          </span>
                                        </td>
                                        <td>{formatDate(student.completionDate)}</td>
                                        <td>
                                          <div className="btn-group" role="group">
                                            <button
                                              type="button"
                                              className="btn btn-sm btn-outline-primary"
                                              data-bs-toggle="modal"
                                              data-bs-target="#certificateModal"
                                              onClick={() => handleViewCertificate(student)}
                                              title="View Certificate"
                                              disabled={!student._id}
                                            >
                                              <IoMdEye size={16}/>
                                            </button>
                                            <button
                                              type="button"
                                              className="btn btn-sm btn-outline-success"
                                              onClick={() => downloadCertificate(student)}
                                              title="Download Certificate"
                                              disabled={!student._id}
                                            >
                                              <FiDownload size={16} />
                                            </button>
                                          </div>
                                        </td>
                                      </tr>
                                    );
                                  })
                                ) : (
                                  <tr>
                                    <td colSpan="8" className="text-center py-4">
                                      <div className="text-muted">
                                        <i className="fas fa-graduation-cap fa-3x mb-3"></i>
                                        <p className="mb-0">
                                          {searchTerm ? 
                                            `No students found matching "${searchTerm}"` : 
                                            'No certified students found'
                                          }
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      {totalPages > 1 && (
                        <div className="row">
                          <div className="col-sm-12 col-md-5">
                            <div className="dataTables_info">
                              Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredStudents.length)} of {filteredStudents.length} entries
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-7">
                            <div className="dataTables_paginate">
                              <ul className="pagination justify-content-end">
                                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                  <button
                                    className="page-link"
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                  >
                                    Previous
                                  </button>
                                </li>
                                {[...Array(totalPages)].map((_, index) => (
                                  <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                    <button
                                      className="page-link"
                                      onClick={() => setCurrentPage(index + 1)}
                                    >
                                      {index + 1}
                                    </button>
                                  </li>
                                ))}
                                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                  <button
                                    className="page-link"
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certificate View Modal */}
          <div
            className="modal fade"
            id="certificateModal"
            tabIndex="-1"
            aria-labelledby="certificateModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="certificateModalLabel">
                    <i className="fas fa-certificate text-warning me-2"></i>
                    Certificate Preview
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
  {selectedStudent && (
    <div className="certificate-preview">
      <div
        className="text-center p-5 border border-4 rounded shadow"
        style={{
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          borderColor: '#ffc107',
          borderStyle: 'double',
          fontFamily: "'Georgia', serif"
        }}
      >
        <h1 className="display-5 text-primary fw-bold mb-4">
          🏆 CERTIFICATE OF COMPLETION 🏆
        </h1>

        <p className="fs-5 text-muted mb-2">This is proudly presented to</p>

        <h2
          className="text-danger mb-3 text-uppercase"
          style={{ letterSpacing: '2px' }}
        >
          {selectedStudent.username || 'N/A'}
        </h2>

        <p className="fs-6 mb-2">for successfully completing the course</p>

        <h3 className="text-info mb-4">
          {selectedStudent.courseName || 'Web Development Program'}
        </h3>

        {(() => {
          const modalResult = calculateOverallScoreAndGrade(selectedStudent.assessments);
          return (
            <div className="mb-4">
            <p className="fs-6 text-secondary">with an outstanding performance</p>
            <div className="card mx-auto shadow-sm border-0 bg-light" style={{ maxWidth: '400px' }}>
              <div className="card-body">
                <h5 className="card-title text-success">Academic Summary</h5>
                <div className="text-center">
                  <strong>Percentage:</strong><br />
                  <span className="text-success fs-5">{modalResult.percentage}%</span>
                </div>
              </div>
            </div>
          </div>
          );
        })()}

        <div className="row mt-4">
          <div className="col-md-6 mb-3">
            <div className="card border-0 bg-light shadow-sm">
              <div className="card-body text-start">
                <h6 className="card-title">🎓 Student Details</h6>
                <p className="mb-1"><strong>ID:</strong> {selectedStudent.studentId}</p>
                <p className="mb-1"><strong>Email:</strong> {selectedStudent.email}</p>
                <p className="mb-0">
                  <strong>Assessments:</strong>{' '}
                  {selectedStudent.assessments ? selectedStudent.assessments.length : 0}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="card border-0 bg-light shadow-sm">
              <div className="card-body text-start">
                <h6 className="card-title">📜 Certificate Details</h6>
                <p className="mb-1">
                  <strong>Completion:</strong>{' '}
                  {formatDate(selectedStudent.completionDate)}
                </p>
                <p className="mb-1">
                  <strong>Generated:</strong> {new Date().toLocaleDateString()}
                </p>
                <p className="mb-0">
                  <strong>Status:</strong>{' '}
                  <span className="badge bg-success">Certified</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
</div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    <i className="fas fa-times me-2"></i>Close
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-success"
                    onClick={() => selectedStudent && downloadCertificate(selectedStudent)}
                  >
                    <i className="fas fa-download me-2"></i>
                    Download Certificate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate1;