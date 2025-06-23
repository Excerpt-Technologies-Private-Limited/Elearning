// import React from "react";
// import AdminSideNavaBar from "../AdminSideNavaBar/AdminSideNavaBar";

// const EnrollmentList = () => {
//   return (
//      <div className="dashboard__main">
//       <AdminSideNavaBar />
//       <div className="dashboard__content bg-light-4">
//         <div class="row pb-50 mb-10">
//           <div class="col-auto">
//             <h1 class="text-30 lh-12 fw-700">EnrollmentList</h1>
//           </div>
//         </div>
//         <div class="row y-gap-60">
//           <div class="col-12">
//             <div class="overflow-hidden rounded-8 shadow-4">
//               <div class="overflow-x-auto">
//                 <table class="table -dashboard -courses bordered-light-4">
//                   <thead>
//                     <tr>
//                       <th>Student ID</th>
//                       <th>Student Name</th>
//                       <th>Phone</th>
//                       <th>Email</th>
//                       <th>Course</th>
//                       <th>Enrollment Date</th>
//                       <th>Status</th>
//                       <th>Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {/* Add your table rows here */}
//                     <tr>
//                       <td>1</td>
//                       <td>karthik</td>
//                       <td>998087663</td>
//                       <td>Enrolled@gmail.com</td>
//                       <td>React</td>
//                       <td>2023-10-01</td>
//                       <td>Active</td>
//                       <td><button className="button -purple-1 text-white p-2"><i className="icon-bin text-16"></i></button></td>
//                     </tr>
//                      <tr>
//                       <td>1</td>
//                       <td>karthik</td>
//                       <td>998087663</td>
//                       <td>Enrolled@gmail.com</td>
//                       <td>React</td>
//                       <td>2023-10-01</td>
//                       <td>Active</td>
//                       <td><button className="button -purple-1 text-white p-2"><i className="icon-bin text-16"></i></button></td>
//                     </tr>
                   
                    
                    
                    
                   
//                     {/* Repeat for more courses */}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EnrollmentList;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import AdminSideNavaBar from "../AdminSideNavaBar/AdminSideNavaBar";

// const EnrollmentList = () => {
//   const [students, setStudents] = useState([]);

//   // Fetch student data
//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = async () => {
//     try {
//       const res = await axios.get("/api/students");
//       console.log("API response:", res.data);
      
//       // Adjust based on actual response shape
//       const studentList = Array.isArray(res.data) ? res.data : res.data.students || [];
//       setStudents(studentList);
//     } catch (error) {
//       console.error("Error fetching students:", error);
//     }
//   };

//   const handleDelete = async (studentId) => {
//     try {
//       await axios.delete(`/api/students/${studentId}/courses`);
//       setStudents(students.filter((s) => s._id !== studentId));
//     } catch (error) {
//       console.error("Failed to delete:", error);
//     }
//   };

//   const handleEdit = (studentId) => {
//     // Navigate or open a modal to edit courses
//     console.log("Edit student:", studentId);
//   };

//   const handleImport = () => {
//     // Implement import logic
//     console.log("Importing...");
//   };

//   return (
//     <div className="dashboard__main">
//       <AdminSideNavaBar />
//       <div className="dashboard__content bg-light-4">
//         <div className="row pb-50 mb-10">
//           <div className="col-auto">
//             <h1 className="text-30 lh-12 fw-700">Enrollment List</h1>
//           </div>
//           <div className="col-auto">
//             <button onClick={handleImport} className="button -green-1 text-white">
//               Import
//             </button>
//           </div>
//         </div>

//         <div className="row y-gap-60">
//           <div className="col-12">
//             <div className="overflow-hidden rounded-8 shadow-4">
//               <div className="overflow-x-auto">
//                 <table className="table -dashboard -courses bordered-light-4">
//                   <thead>
//                     <tr>
//                       <th>Student ID</th>
//                       <th>Student Name</th>
//                       <th>Email</th>
//                       <th>Course Count</th>
//                       <th>Enrollment Date</th>
//                       <th>Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {students.map((student, index) => (
//                       <tr key={student._id}>
//                         <td>{index + 1}</td>
//                         <td>{student.username}</td>
//                         <td>{student.email}</td>
//                         <td>{student.courseIds.length}</td>
//                         <td>{new Date(student.createdAt).toLocaleDateString()}</td>
//                         <td className="d-flex gap-2">
//                           <button
//                             className="button -purple-1 text-white p-2"
//                             onClick={() => handleEdit(student._id)}
//                           >
//                             <i className="icon-edit text-16"></i>
//                           </button>
//                           <button
//                             className="button -red-1 text-white p-2"
//                             onClick={() => handleDelete(student._id)}
//                           >
//                             <i className="icon-bin text-16"></i>
//                           </button>
//                         </td>
//                       </tr>
//                     ))}

//                     {students.length === 0 && (
//                       <tr>
//                         <td colSpan="6" className="text-center">No students found.</td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EnrollmentList;

// crt working code
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import AdminSideNavaBar from "../AdminSideNavaBar/AdminSideNavaBar";

// const EnrollmentList = () => {
//   const [students, setStudents] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const studentsPerPage = 10;

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = async () => {
//     try {
//       const res = await axios.get("/api/students");
//       console.log("API response:", res.data);

//       const studentList = Array.isArray(res.data)
//         ? res.data
//         : res.data.students || [];

//       setStudents(studentList);
//     } catch (error) {
//       console.error("Error fetching students:", error);
//     }
//   };

//   const handleDelete = async (studentId) => {
//     if (!window.confirm("Are you sure you want to delete this student?")) return;
  
//     try {
//       await axios.delete(`/api/students/${studentId}`);
//       setStudents((prev) => prev.filter((s) => s._id !== studentId));
//     } catch (error) {
//       console.error("Failed to delete:", error.response?.data || error.message);
//     }
//   };
  

//   const handleEdit = (studentId) => {
//     console.log("Edit student:", studentId);
//     // Implement navigation or modal to edit student courses here
//   };

//   const handleImport = () => {
//     console.log("Importing...");
//     // Implement import logic here
//   };

//   // Pagination logic
//   const indexOfLast = currentPage * studentsPerPage;
//   const indexOfFirst = indexOfLast - studentsPerPage;
//   const currentStudents = students.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.ceil(students.length / studentsPerPage);

//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   return (
//     <div className="dashboard__main">
//       <AdminSideNavaBar />
//       <div className="dashboard__content bg-light-4">
//         <div className="row pb-50 mb-10">
//           <div className="col-auto">
//             <h1 className="text-30 lh-12 fw-700">Enrollment List</h1>
//           </div>
//           {/* <div className="col-auto">
//             <button
//               onClick={handleImport}
//               className="button -green-1 text-white"
//             >
//               Import
//             </button>
//           </div> */}
//         </div>

//         <div className="row y-gap-60">
//           <div className="col-12">
//             <div className="overflow-hidden rounded-8 shadow-4">
//               {/* Scrollable table container */}
//               <div
//                 style={{ maxHeight: "500px", overflowY: "auto" }}
//                 className="overflow-x-auto"
//               >
//                 <table className="table -dashboard -courses bordered-light-4">
//                   <thead>
//                     <tr>
//                       <th>Student ID</th>
//                       <th>Student Name</th>
//                       <th>Email</th>
//                       <th>Course Count</th>
//                       <th>Enrollment Date</th>
//                       <th>Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {currentStudents.map((student, index) => (
//                       <tr key={student._id}>
//                         <td>{indexOfFirst + index + 1}</td>
//                         <td>{student.username}</td>
//                         <td>{student.email}</td>
//                         <td>{student.courseIds?.length || 0}</td>
//                         <td>
//                           {new Date(student.createdAt).toLocaleDateString()}
//                         </td>
//                         <td className="d-flex gap-2">
//                           <button
//                             className="button -purple-1 text-white p-2"
//                             onClick={() => handleEdit(student._id)}
//                           >
//                             <i className="icon-edit text-16"></i>
//                           </button>
//                           <button
//                             className="button -red-1 text-white p-2"
//                             onClick={() => handleDelete(student._id)}
//                           >
//                             <i className="icon-bin text-16"></i>
//                           </button>
//                         </td>
//                       </tr>
//                     ))}

//                     {students.length === 0 && (
//                       <tr>
//                         <td colSpan="6" className="text-center">
//                           No students found.
//                         </td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//               </div>

//               {/* Pagination Controls */}
//               <div className="d-flex justify-content-between align-items-center mt-3 px-3">
//                 <button
//                   onClick={() => handlePageChange(currentPage - 1)}
//                   disabled={currentPage === 1}
//                   className="button -outline-blue-1"
//                 >
//                   Previous
//                 </button>

//                 <span>
//                   Page {currentPage} of {totalPages || 1}
//                 </span>

//                 <button
//                   onClick={() => handlePageChange(currentPage + 1)}
//                   disabled={currentPage === totalPages || totalPages === 0}
//                   className="button -outline-blue-1"
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EnrollmentList;


import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminSideNavaBar from "../AdminSideNavaBar/AdminSideNavaBar";
// import "./EnrollmentList.css"; // Optional for modal styling

const EnrollmentList = () => {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 10;

  const [editingStudent, setEditingStudent] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [formData, setFormData] = useState({ username: "", email: "" });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await axios.get("/api/students");
      const studentList = Array.isArray(res.data)
        ? res.data
        : res.data.students || [];
      setStudents(studentList);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleDelete = async (studentId) => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;

    try {
      await axios.delete(`/api/students/${studentId}`);
      setStudents((prev) => prev.filter((s) => s._id !== studentId));
    } catch (error) {
      console.error("Failed to delete:", error.response?.data || error.message);
    }
  };

  const handleEdit = (studentId) => {
    const student = students.find((s) => s._id === studentId);
    setEditingStudent(student);
    setFormData({ username: student.username, email: student.email });
    setShowEditModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put(
        `/api/students/${editingStudent._id}`,
        formData
      );
      
      // Fix: Access the student data from res.data.student
      const updated = res.data.student;
  
      setStudents((prev) =>
        prev.map((s) => (s._id === updated._id ? updated : s))
      );
      setShowEditModal(false);
      setEditingStudent(null);
      
      // Optional: Show success message
      console.log('Student updated successfully:', res.data.message);
    } catch (error) {
      console.error("Update failed:", error);
      
      // Optional: Show error message to user
      alert('Failed to update student. Please try again.');
    }
  };

  const indexOfLast = currentPage * studentsPerPage;
  const indexOfFirst = indexOfLast - studentsPerPage;
  const currentStudents = students.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(students.length / studentsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="dashboard__main">
      <AdminSideNavaBar />
      <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">Enrollment List</h1>
          </div>
        </div>

        <div className="row y-gap-60">
          <div className="col-12">
            <div className="overflow-hidden rounded-8 shadow-4">
              <div style={{ maxHeight: "500px", overflowY: "auto" }} className="overflow-x-auto">
                <table className="table -dashboard -courses bordered-light-4">
                  <thead>
                    <tr>
                      <th>Student ID</th>
                      <th>Student Name</th>
                      <th>Email</th>
                      <th>Course Count</th>
                      <th>Enrollment Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentStudents.map((student, index) => (
                      <tr key={student._id}>
                        <td>{indexOfFirst + index + 1}</td>
                        <td>{student.username}</td>
                        <td>{student.email}</td>
                        <td>{student.courseIds?.length || 0}</td>
                        <td>
                          {new Date(student.createdAt).toLocaleDateString()}
                        </td>
                        <td className="d-flex gap-2">
                          <button
                            className="button -purple-1 text-white p-2"
                            onClick={() => handleEdit(student._id)}
                          >
                            <i className="icon-edit text-16"></i>
                          </button>
                          <button
                            className="button -red-1 text-white p-2"
                            onClick={() => handleDelete(student._id)}
                          >
                            <i className="icon-bin text-16"></i>
                          </button>
                        </td>
                      </tr>
                    ))}

                    {students.length === 0 && (
                      <tr>
                        <td colSpan="6" className="text-center">
                          No students found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-3 px-3">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="button -outline-blue-1"
                >
                  Previous
                </button>

                <span>
                  Page {currentPage} of {totalPages || 1}
                </span>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages || totalPages === 0}
                  className="button -outline-blue-1"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showEditModal && (
        <div className="" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className="" style={{ backgroundColor: "white", padding: "20px", borderRadius: "8px", width: "400px" }}>
            <h3>Edit Student</h3>
            <div className="form-group">
              <label>Name:</label>
              <input
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="modal-actions mt-3">
              <button onClick={handleUpdate} className="button -green-1 text-white">
                Save
              </button>
              <button onClick={() => setShowEditModal(false)} className="button -outline-blue-1">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnrollmentList;
