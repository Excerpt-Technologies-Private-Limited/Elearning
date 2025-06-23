// import react from "react";
// import Header1 from "../../Header/Header";
// import SideNavBar1 from "../../SideNavBar/SideNavBar";

// export default function Certification1() {
//     return (
//       <><Header1 />
//       <SideNavBar1 />
//       <div  className="main-content">
//         <div class="page-content">
//       <div class="container-fluid">
//         <div className="row">
//           <div className="col-12">
//             <div className="card">
//               <div className="card-header">
//                 <h4 className="card-title">
//                   Student Certification List 
//                 </h4>
//               </div>

//               <div className="card-body">
//                 <div
//                   id="datatable_wrapper"
//                   className="dataTables_wrapper dt-bootstrap4 no-footer"
//                 >
//                   <div className="row">
//                     <div className="col-sm-12 col-md-6">
//                       <button
//                         type="button"
//                         class="btn btn-primary"
//                         data-bs-toggle="modal"
//                         data-bs-target="#exampleModal"
//                         data-bs-whatever="@mdo"
//                       >
//                         Add Certification  +
//                       </button>
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
//                             <th>Course Id</th>
                            
//                             <th>Course Name</th>
//                             <th>Student Name</th>
                         
//                             <th>status</th>
                            
//                             <th>Action</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           <tr>
//                             <td>#101</td>
                          
//                             <td>Math</td>
//                             <td>Raju</td>
                            
//                             <td><button className="btn btn-soft-primary">completed</button></td>
//                             <td>
//                               <div className="d-flex flex-wrap gap-2">
//                                 <button
//                                   type="button"
//                                   class="btn btn-soft-success waves-effect waves-light"
//                                 >
//                                   <i className='bx bx-edit'></i>
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
//                          <tr>
//                             <td>#101</td>
//                             <td>Batch 1</td>
//                             <td>Math</td>
//                             <td>Raju</td>
                            
//                             <td><button className="btn btn-soft-primary">completed</button></td>
//                             <td>
//                               <div className="d-flex flex-wrap gap-2">
//                                 <button
//                                   type="button"
//                                   class="btn btn-soft-success waves-effect waves-light"
//                                 >
//                                   <i className='bx bx-edit'></i>
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

//                           <tr>
//                             <td>#101</td>
//                             <td>Batch 1</td>
//                             <td>Math</td>
//                             <td>Raju</td>
                            
//                             <td><button className="btn btn-soft-primary">completed</button></td>
//                             <td>
//                               <div className="d-flex flex-wrap gap-2">
//                                 <button
//                                   type="button"
//                                   class="btn btn-soft-success waves-effect waves-light"
//                                 >
//                                   <i className='bx bx-edit'></i>
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

//                           <tr>
//                             <td>#101</td>
//                             <td>Batch 1</td>
//                             <td>Math</td>
//                             <td>Raju</td>
                            
//                             <td><button className="btn btn-soft-primary">completed</button></td>
//                             <td>
//                               <div className="d-flex flex-wrap gap-2">
//                                 <button
//                                   type="button"
//                                   class="btn btn-soft-success waves-effect waves-light"
//                                 >
//                                   <i className='bx bx-edit'></i>
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
//                 Add Student Enrollement
//               </h5>
//               <button
//                 type="button"
//                 class="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div class="modal-body">
//               <form>
//                 <div className="row">
//                   <div class="mb-3 col-md-6">
//                     <label for="recipient-name" class="col-form-label">
//                       Course Id:
//                     </label>
//                     <input
//                       type="text"
//                       class="form-control"
//                       id="recipient-name"
//                     />
//                   </div>
//                   <div class="mb-3 col-md-6">
//                     <label for="recipient-name" class="col-form-label">
//                       Course Name:
//                     </label>
//                     <input
//                       type="text"
//                       class="form-control"
//                       id="recipient-name"
//                     />
//                   </div>
//                   <div class="mb-3 col-md-6">
//                     <label for="recipient-name" class="col-form-label">
//                       Instructor:
//                     </label>
//                     <input
//                       type="text"
//                       class="form-control"
//                       id="recipient-name"
//                     />
//                   </div>

//                   <div class="mb-3 col-md-6">
//                     <label for="recipient-name" class="col-form-label">
//                       Topic:
//                     </label>
//                     <input
//                       type="text"
//                       class="form-control"
//                       id="recipient-name"
//                     />
//                   </div>

//                   <div class="mb-3">
//                     <label for="message-text" class="col-form-label">
//                       upload Assignment:
//                     </label>
//                     <input
//                       type="file"
//                       class="form-control"
//                       id="recipient-name"
//                     />
//                   </div>
//                 </div>
//               </form>
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

//     </>
//     );
// }

import React, { useState, useEffect } from 'react';
import Header1 from "../../Header/Header";
import SideNavBar1 from "../../SideNavBar/SideNavBar";
import { FiDownload } from "react-icons/fi";
import { IoMdEye } from "react-icons/io";

const Certificate1 = ({ isAdmin = true }) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    loadStudentsData();
  }, []);

  const loadStudentsData = async () => {
    setLoading(true);
    try {
      // Always fetch all completed courses for admin
      const response = await fetch('http://localhost:8080/api/completed-courses');
      
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

    } catch (error) {
      console.error('Error downloading certificate:', error);
      alert('Error downloading certificate');
    }
  };

  // Generate certificate from student data
  const generateCertificateFromStudentData = (studentData) => {
    const certificateHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Certificate - ${studentData.name || 'Student'}</title>
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
            margin-bottom: 10px;
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
            <p>with an outstanding grade of</p>
            <div class="grade">${studentData.grade || 90}%</div>
            
            <div class="details">
              <p><strong>Student ID:</strong> ${studentData.studentId || 'N/A'}</p>
              <p><strong>Email:</strong> ${studentData.email || 'N/A'}</p>
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
    link.download = `Certificate_${(studentData.name || 'Student').replace(/\s+/g, '_')}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    // Show success message
    alert(`Certificate downloaded successfully for ${studentData.name || 'Student'}!`);
  };

  // Filter students based on search
  const filteredStudents = students.filter(student =>
    (student.name?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
    (student.email?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
    (student.batchCode?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
    (student.username?.toLowerCase() || '').includes(searchTerm.toLowerCase())
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
                      All Student Certificates (Admin View)
                    </h4>
                    <div className="mt-2">
                      <small className="text-muted">
                        Manage certificates for all students
                      </small>
                    </div>
                  </div>

                  <div className="card-body">
                    <div className="dataTables_wrapper dt-bootstrap4 no-footer">
                      <div className="row">
                        <div className="col-sm-12 col-md-6">
                        
                          <span >
                             Total Certified Students : {students.length}
                          </span>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <div className="dataTables_filter">
                            <label>
                              Search:
                              <input
                                type="search"
                                className="form-control form-control-sm"
                                placeholder="Search by name, email, username, or batch..."
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
                            <table className="table">
                              <thead>
                                <tr>
                                  <th>Student Name</th>
                                  <th>Email</th>
                                  <th>Student ID</th>
                                  <th>Course</th>
                                  <th>Grade</th>
                                  <th>Completion Date</th>
                                  <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                {loading ? (
                                  <tr>
                                    <td colSpan="7" className="text-center py-4">
                                      <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                      </div>
                                      <p className="mt-2 mb-0">Loading all students data...</p>
                                    </td>
                                  </tr>
                                ) : currentItems.length > 0 ? (
                                  currentItems.map((student, index) => (
                                    <tr key={student._id || index}>
                                      <td>
                                        <div className="d-flex align-items-center">
                                          <div className="avatar-sm me-2">
                                            <span className="avatar-title bg-primary rounded-circle">
                                              {student.username ? student.username.charAt(0).toUpperCase() : 'N'}
                                            </span>
                                          </div>
                                          <strong>{student.username || student.name || 'N/A'}</strong>
                                        </div>
                                      </td>
                                      <td>{student.email || 'N/A'}</td>
                                      <td>{student.studentId || 'N/A'}</td>
                                      <td>
                                        <small className="text-muted">{student.courseName || 'N/A'}</small>
                                      </td>
                                      <td>
                                        <span className={`badge fs-6 ${
                                          (student.grade || 0) >= 95 ? 'bg-success' : 
                                          (student.grade || 0) >= 85 ? 'bg-warning' : 
                                          'bg-secondary'
                                        }`}>
                                          {student.grade || 90}%
                                        </span>
                                      </td>
                                      <td>{formatDate(student.completionDate)}</td>
                                      <td>
                                        <div className="btn-group" role="group">
                                          <button
                                            type="button"
                                            className="btn btn-soft-primary"
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
                                            className="btn  btn-soft-success"
                                            onClick={() => downloadCertificate(student)}
                                            title="Download Certificate"
                                            disabled={!student._id}
                                          >
                                            <FiDownload size={16} />
                                          </button>
                                        </div>
                                      </td>
                                    </tr>
                                  ))
                                ) : (
                                  <tr>
                                    <td colSpan="7" className="text-center py-4">
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
                      <div className="text-center p-4 border border-3 border-warning rounded" 
                           style={{
                             background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                             borderStyle: 'double'
                           }}>
                        <h1 className="display-4 text-primary mb-4">
                          🏆 CERTIFICATE OF COMPLETION 🏆
                        </h1>
                        
                        <p className="fs-5 text-muted mb-3">This is proudly presented to</p>
                        
                        <h2 className="text-danger mb-4" style={{letterSpacing: '2px', textTransform: 'uppercase'}}>
                          {selectedStudent.username || selectedStudent.name || 'N/A'}
                        </h2>
                        
                        <p className="fs-6 mb-3">for successfully completing the</p>
                        
                        <h3 className="text-info mb-4">{selectedStudent.courseName || 'Web Development Program'}</h3>
                        
                        <p className="fs-6 mb-2">with an outstanding grade of</p>
                        
                        <h2 className="text-success mb-4">{selectedStudent.grade || 90}%</h2>
                        
                        <div className="row mt-4">
                          <div className="col-md-6">
                            <div className="card border-0 bg-light">
                              <div className="card-body">
                                <h6 className="card-title">Student Details</h6>
                                <p className="mb-1"><strong>ID:</strong> {selectedStudent.studentId || 'N/A'}</p>
                                <p className="mb-1"><strong>Email:</strong> {selectedStudent.email || 'N/A'}</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="card border-0 bg-light">
                              <div className="card-body">
                                <h6 className="card-title">Certificate Details</h6>
                                <p className="mb-1"><strong>Completion:</strong> {formatDate(selectedStudent.completionDate)}</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-success">Certified</span></p>
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