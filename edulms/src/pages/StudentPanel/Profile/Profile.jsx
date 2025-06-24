// import React from "react";
// import Header1 from "../../Header/Header";
// import SideNavBar1 from "../../SideNavBar/SideNavBar";

// const Profile = () => {
//   return (
//     <div>
//       <Header1 />
//       <SideNavBar1 />
//       <div className="main-content">
//         <div className="page-content ">
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-12">
//                 <div class="page-title-box d-sm-flex align-items-center justify-content-between">
//                   <h4 class="mb-sm-0 font-size-18">Profile</h4>

//                   <div class="page-title-right">
//                     <ol class="breadcrumb m-0">
//                       <li class="breadcrumb-item">
//                         <a href="javascript: void(0);">Contacts</a>
//                       </li>
//                       <li class="breadcrumb-item active">Profile</li>
//                     </ol>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div class="row">
//               <div class="col-xl-9 col-lg-8">
//                 <div class="card">
//                   <div class="card-body">
//                     <div class="row">
//                       <div class="col-sm order-2 order-sm-1">
//                         <div class="d-flex align-items-start mt-3 mt-sm-0">
//                           <div class="flex-shrink-0">
//                             <div class="avatar-xl me-3">
//                               <img
//                                 src="https://themesbrand.com/minia/layouts-lts/assets/images/users/avatar-2.jpg"
//                                 alt=""
//                                 class="img-fluid rounded-circle d-block"
//                               />
//                             </div>
//                           </div>
//                           <div class="flex-grow-1">
//                             <div>
//                               <h5 class="font-size-16 mb-1">Phyllis Gatlin</h5>
//                               <p class="text-muted font-size-13">
//                                 Full Stack Developer
//                               </p>

//                               <div class="d-flex flex-wrap align-items-start gap-2 gap-lg-3 text-muted font-size-13">
//                                 <div>
//                                   <i class="mdi mdi-circle-medium me-1 text-success align-middle"></i>
//                                   Development
//                                 </div>
//                                 <div>
//                                   <i class="mdi mdi-circle-medium me-1 text-success align-middle"></i>
//                                   phyllisgatlin@minia.com
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div class="col-sm-auto order-1 order-sm-2">
//                         <div class="d-flex align-items-start justify-content-end gap-2">
//                           <div>
//                             <button type="button" class="btn btn-soft-light">
//                               <i class="me-1"></i> Message
//                             </button>
//                           </div>
//                           <div>
//                             <div class="dropdown">
//                               <button
//                                 class="btn btn-link font-size-16 shadow-none text-muted dropdown-toggle"
//                                 type="button"
//                                 data-bs-toggle="dropdown"
//                                 aria-expanded="false"
//                               >
//                                 <i class="bx bx-dots-horizontal-rounded"></i>
//                               </button>
//                               <ul class="dropdown-menu dropdown-menu-end">
//                                 <li>
//                                   <a
//                                     class="dropdown-item"
//                                     href="#"
//                                     data-bs-toggle="modal"
//                                     data-bs-target="#exampleModal"
//                                     data-bs-whatever="@mdo"
//                                   >
//                                     Edit
//                                   </a>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <ul
//                       class="nav nav-tabs-custom card-header-tabs border-top mt-4"
//                       id="pills-tab"
//                       role="tablist"
//                     >
//                       <li class="nav-item">
//                         <a
//                           class="nav-link px-3 active"
//                           data-bs-toggle="tab"
//                           href="#overview"
//                           role="tab"
//                         >
//                           Overview
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div class="tab-content">
//                   <div class="tab-pane active" id="overview" role="tabpanel">
//                     <div class="card">
//                       <div class="card-header">
//                         <h5 class="card-title mb-0">About</h5>
//                       </div>
//                       <div class="card-body">
//                         <div>
//                           <div class="pb-3">
//                             <div class="row">
//                               <div class="col-xl-2">
//                                 <div>
//                                   <h5 class="font-size-15">Bio :</h5>
//                                 </div>
//                               </div>
//                               <div class="col-xl">
//                                 <div class="text-muted">
//                                   <p class="mb-2">
//                                     Hi I'm Phyllis Gatlin, Lorem Ipsum is simply
//                                     dummy text of the printing and typesetting
//                                     industry. Lorem Ipsum has been the
//                                     industry's standard dummy text ever since
//                                     the 1500s, when an unknown printer took a
//                                     galley of type and scrambled it to make a
//                                     type specimen book. It has survived not only
//                                     five centuries, but also the leap into
//                                     electronic typesetting, remaining
//                                     essentially unchanged. It was popularised in
//                                     the 1960s with the release of Letraset
//                                     sheets containing Lorem Ipsum passages
//                                   </p>
//                                   <p class="mb-0">
//                                     It is a long established fact that a reader
//                                     will be distracted by the readable content
//                                     of a page when looking at it has a
//                                     more-or-less normal distribution of letters
//                                   </p>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>

//                           <div class="py-3">
//                             <div class="row">
//                               <div class="col-xl-2">
//                                 <div>
//                                   <h5 class="font-size-15">Experience :</h5>
//                                 </div>
//                               </div>
//                               <div class="col-xl">
//                                 <div class="text-muted">
//                                   <p>
//                                     If several languages coalesce, the grammar
//                                     of the resulting language is more simple and
//                                     regular than that of the individual
//                                     languages. The new common language will be
//                                     more simple and regular than the existing
//                                     European languages. It will be as simple as
//                                     Occidental; in fact, it will be Occidental.
//                                     To an English person, it will seem like
//                                     simplified English, as a skeptical Cambridge
//                                     friend of mine told me what Occidental is.
//                                     The European languages are members of the
//                                     same family. Their separate existence is a
//                                     myth. For science, music, sport, etc
//                                   </p>

//                                   <ul class="list-unstyled mb-0">
//                                     <li class="py-1">
//                                       <i class="mdi mdi-circle-medium me-1 text-success align-middle"></i>
//                                       Donec vitae sapien ut libero venenatis
//                                       faucibus
//                                     </li>
//                                     <li class="py-1">
//                                       <i class="mdi mdi-circle-medium me-1 text-success align-middle"></i>
//                                       Quisque rutrum aenean imperdiet
//                                     </li>
//                                     <li class="py-1">
//                                       <i class="mdi mdi-circle-medium me-1 text-success align-middle"></i>
//                                       Integer ante a consectetuer eget
//                                     </li>
//                                     <li class="py-1">
//                                       <i class="mdi mdi-circle-medium me-1 text-success align-middle"></i>
//                                       Phasellus nec sem in justo pellentesque
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div class="col-xl-3 col-lg-4">
//                 <div class="card">
//                   <div class="card-body">
//                     <h5 class="card-title mb-3">Skills</h5>

//                     <div class="d-flex flex-wrap gap-2 font-size-16">
//                       <a href="#" class="badge bg-primary-subtle text-primary">
//                         Photoshop
//                       </a>
//                       <a href="#" class="badge bg-primary-subtle text-primary">
//                         illustrator
//                       </a>
//                       <a href="#" class="badge bg-primary-subtle text-primary">
//                         HTML
//                       </a>
//                       <a href="#" class="badge bg-primary-subtle text-primary">
//                         CSS
//                       </a>
//                       <a href="#" class="badge bg-primary-subtle text-primary">
//                         Javascript
//                       </a>
//                       <a href="#" class="badge bg-primary-subtle text-primary">
//                         Php
//                       </a>
//                       <a href="#" class="badge bg-primary-subtle text-primary">
//                         Python
//                       </a>
//                     </div>
//                   </div>
//                 </div>

//                 <div class="card">
//                   <div class="card-body">
//                     <h5 class="card-title mb-3">Portfolio</h5>

//                     <div>
//                       <ul class="list-unstyled mb-0">
//                         <li>
//                           <a href="#" class="py-2 d-block text-muted">
//                             <i class="mdi mdi-web text-primary me-1"></i>{" "}
//                             Website
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" class="py-2 d-block text-muted">
//                             <i class="mdi mdi-note-text-outline text-primary me-1"></i>{" "}
//                             Blog
//                           </a>
//                         </li>
//                       </ul>
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
//                 your Profile
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
//                   <div class="mb-3 col-md-4">
//                     <label for="recipient-name" class="col-form-label">
//                       Name:
//                     </label>
//                     <input
//                       type="text"
//                       class="form-control"
//                       id="recipient-name"
//                     />
//                   </div>
//                   <div class="mb-3 col-md-4">
//                     <label for="recipient-name" class="col-form-label">
//                       Experince
//                     </label>
//                     <input
//                       type="text"
//                       class="form-control"
//                       id="recipient-name"
//                     />
//                   </div>
//                   <div className="mb-3 col-md-4">
//                     <label htmlFor="role" className="col-form-label">
//                       Role:
//                     </label>
//                     <select className="form-control" id="role">
//                       <option value="">Select Role</option>
//                       <option value="admin">Full stack</option>
//                       <option value="teacher">Mern stack</option>
//                       <option value="student">Soild Work</option>
//                       <option value="parent">AI generator</option>
//                     </select>
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
//   );
// };

// export default Profile;



// import React from "react";
// import Header1 from "../../Header/Header";
// import SideNavBar1 from "../../SideNavBar/SideNavBar";

// const Profile = () => {
//   return (
//     <div>
//       <Header1 />
//       <SideNavBar1 />
//       <div className="main-content">
//         <div className="page-content ">
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-12">
//                 <div class="page-title-box d-sm-flex align-items-center justify-content-between">
//                   <h4 class="mb-sm-0 font-size-18">Profile</h4>

//                   <div class="page-title-right">
//                     <ol class="breadcrumb m-0">
//                       <li class="breadcrumb-item">
//                         <a href="javascript: void(0);">Contacts</a>
//                       </li>
//                       <li class="breadcrumb-item active">Profile</li>
//                     </ol>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div class="row">
//               <div class="col-xl-9 col-lg-8">
//                 <div class="card">
//                   <div class="card-body">
//                     <div class="row">
//                       <div class="col-sm order-2 order-sm-1">
//                         <div class="d-flex align-items-start mt-3 mt-sm-0">
//                           <div class="flex-shrink-0">
//                             <div class="avatar-xl me-3">
//                               <img
//                                 src="https://themesbrand.com/minia/layouts-lts/assets/images/users/avatar-2.jpg"
//                                 alt=""
//                                 class="img-fluid rounded-circle d-block"
//                               />
//                             </div>
//                           </div>
//                           <div class="flex-grow-1">
//                             <div>
//                               <h5 class="font-size-16 mb-1">Phyllis Gatlin</h5>
//                               <p class="text-muted font-size-13">
//                                 Full Stack Developer
//                               </p>

//                               <div class="d-flex flex-wrap align-items-start gap-2 gap-lg-3 text-muted font-size-13">
//                                 <div>
//                                   <i class="mdi mdi-circle-medium me-1 text-success align-middle"></i>
//                                   Development
//                                 </div>
//                                 <div>
//                                   <i class="mdi mdi-circle-medium me-1 text-success align-middle"></i>
//                                   phyllisgatlin@minia.com
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div class="col-sm-auto order-1 order-sm-2">
//                         <div class="d-flex align-items-start justify-content-end gap-2">
//                           <div>
//                             <button type="button" class="btn btn-soft-light">
//                               <i class="me-1"></i> Message
//                             </button>
//                           </div>
//                           <div>
//                             <div class="dropdown">
//                               <button
//                                 class="btn btn-link font-size-16 shadow-none text-muted dropdown-toggle"
//                                 type="button"
//                                 data-bs-toggle="dropdown"
//                                 aria-expanded="false"
//                               >
//                                 <i class="bx bx-dots-horizontal-rounded"></i>
//                               </button>
//                               <ul class="dropdown-menu dropdown-menu-end">
//                                 <li>
//                                   <a
//                                     class="dropdown-item"
//                                     href="#"
//                                     data-bs-toggle="modal"
//                                     data-bs-target="#exampleModal"
//                                     data-bs-whatever="@mdo"
//                                   >
//                                     Edit
//                                   </a>
//                                 </li>
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <ul
//                       class="nav nav-tabs-custom card-header-tabs border-top mt-4"
//                       id="pills-tab"
//                       role="tablist"
//                     >
//                       <li class="nav-item">
//                         <a
//                           class="nav-link px-3 active"
//                           data-bs-toggle="tab"
//                           href="#overview"
//                           role="tab"
//                         >
//                           Overview
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div class="tab-content">
//                   <div class="tab-pane active" id="overview" role="tabpanel">
//                     <div class="card">
//                       <div class="card-header">
//                         <h5 class="card-title mb-0">About</h5>
//                       </div>
//                       <div class="card-body">
//                         <div>
//                           <div class="pb-3">
//                             <div class="row">
//                               <div class="col-xl-2">
//                                 <div>
//                                   <h5 class="font-size-15">Bio :</h5>
//                                 </div>
//                               </div>
//                               <div class="col-xl">
                             
//                               </div>
//                             </div>
//                           </div>

//                           <div class="py-3">
//                             <div class="row">
//                               <div class="col-xl-2">
//                                 <div>
//                                   <h5 class="font-size-15">Experience :</h5>
//                                 </div>
//                               </div>
//                               <div class="col-xl">
//                                 <div class="text-muted">
                               

//                                   <ul class="list-unstyled mb-0">
//                                     <li class="py-1">
//                                       <i class="mdi mdi-circle-medium me-1 text-success align-middle"></i>
//                                       Donec vitae sapien ut libero venenatis
//                                       faucibus
//                                     </li>
//                                     <li class="py-1">
//                                       <i class="mdi mdi-circle-medium me-1 text-success align-middle"></i>
//                                       Quisque rutrum aenean imperdiet
//                                     </li>
//                                     <li class="py-1">
//                                       <i class="mdi mdi-circle-medium me-1 text-success align-middle"></i>
//                                       Integer ante a consectetuer eget
//                                     </li>
//                                     <li class="py-1">
//                                       <i class="mdi mdi-circle-medium me-1 text-success align-middle"></i>
//                                       Phasellus nec sem in justo pellentesque
//                                     </li>
//                                   </ul>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div class="col-xl-3 col-lg-4">
//                 <div class="card">
//                   <div class="card-body">
//                     <h5 class="card-title mb-3">Skills</h5>

//                     <div class="d-flex flex-wrap gap-2 font-size-16">
//                       <a href="#" class="badge bg-primary-subtle text-primary">
//                         Photoshop
//                       </a>
//                       <a href="#" class="badge bg-primary-subtle text-primary">
//                         illustrator
//                       </a>
//                       <a href="#" class="badge bg-primary-subtle text-primary">
//                         HTML
//                       </a>
//                       <a href="#" class="badge bg-primary-subtle text-primary">
//                         CSS
//                       </a>
//                       <a href="#" class="badge bg-primary-subtle text-primary">
//                         Javascript
//                       </a>
//                       <a href="#" class="badge bg-primary-subtle text-primary">
//                         Php
//                       </a>
//                       <a href="#" class="badge bg-primary-subtle text-primary">
//                         Python
//                       </a>
//                     </div>
//                   </div>
//                 </div>

//                 <div class="card">
//                   <div class="card-body">
//                     <h5 class="card-title mb-3">Portfolio</h5>

//                     <div>
//                       <ul class="list-unstyled mb-0">
//                         <li>
//                           <a href="#" class="py-2 d-block text-muted">
//                             <i class="mdi mdi-web text-primary me-1"></i>{" "}
//                             Website
//                           </a>
//                         </li>
//                         <li>
//                           <a href="#" class="py-2 d-block text-muted">
//                             <i class="mdi mdi-note-text-outline text-primary me-1"></i>{" "}
//                             Blog
//                           </a>
//                         </li>
//                       </ul>
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
//                 your Profile
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
//                   <div class="mb-3 col-md-4">
//                     <label for="recipient-name" class="col-form-label">
//                       Name:
//                     </label>
//                     <input
//                       type="text"
//                       class="form-control"
//                       id="recipient-name"
//                     />
//                   </div>
//                   <div class="mb-3 col-md-4">
//                     <label for="recipient-name" class="col-form-label">
//                       Experince
//                     </label>
//                     <input
//                       type="text"
//                       class="form-control"
//                       id="recipient-name"
//                     />
//                   </div>
//                   <div className="mb-3 col-md-4">
//                     <label htmlFor="role" className="col-form-label">
//                       Role:
//                     </label>
//                     <select className="form-control" id="role">
//                       <option value="">Select Role</option>
//                       <option value="admin">Full stack</option>
//                       <option value="teacher">Mern stack</option>
//                       <option value="student">Soild Work</option>
//                       <option value="parent">AI generator</option>
//                     </select>
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
//   );
// };

// export default Profile;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Header1 from "../../Header/Header";
// import SideNavBar1 from "../../SideNavBar/SideNavBar";

// const Profile = () => {
//   const [student, setStudent] = useState({});
//   const [formData, setFormData] = useState({
//     name: "",
//     experience: "",
//     role: "",
//   });

//   const studentId = localStorage.getItem("studentId"); // Or get from context/auth

//   useEffect(() => {
//     fetchStudentProfile();
//   }, []);

//   const fetchStudentProfile = async () => {
//     try {
//       const response = await axios.get(
//         `/api/students/${studentId}/profile`
//       );
//       setStudent(response.data.student);
//       setFormData({
//         name: response.data.student.name || "",
//         experience: response.data.student.experience || "",
//         role: response.data.student.role || "",
//       });
//     } catch (error) {
//       console.error("Error fetching student:", error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setFormData({ ...formData, [id]: value });
//   };

//   const handleUpdateProfile = async () => {
//     try {
//       await axios.put(
//         `/api/students/${studentId}/profile`,
//         formData
//       );
//       alert("Profile updated successfully!");
//       fetchStudentProfile();
//     } catch (error) {
//       console.error("Failed to update profile", error);
//     }
//   };

//   return (
//     <div>
//       <Header1 />
//       <SideNavBar1 />
//       <div className="main-content">
//         <div className="page-content">
//           <div className="container-fluid">
//             {/* Profile Header */}
//             <div className="row">
//               <div className="col-12">
//                 <div className="page-title-box d-sm-flex align-items-center justify-content-between">
//                   <h4 className="mb-sm-0 font-size-18">Profile</h4>
//                   <div className="page-title-right">
//                     <ol className="breadcrumb m-0">
//                       <li className="breadcrumb-item">Contacts</li>
//                       <li className="breadcrumb-item active">Profile</li>
//                     </ol>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Profile Info */}
//             <div className="row">
//               <div className="col-xl-9 col-lg-8">
//                 <div className="card">
//                   <div className="card-body">
//                     <div className="d-flex align-items-start">
//                       <img
//                         src="https://themesbrand.com/minia/layouts-lts/assets/images/users/avatar-2.jpg"
//                         alt=""
//                         className="img-fluid rounded-circle me-3"
//                         width="100"
//                       />
//                       <div>
//                         <h5>{student.name}</h5>
//                         <p className="text-muted">{student.role}</p>
//                         <p className="text-muted">{student.email}</p>
//                       </div>
//                     </div>

//                     <button
//                       className="btn btn-outline-primary mt-3"
//                       data-bs-toggle="modal"
//                       data-bs-target="#exampleModal"
//                     >
//                       Edit Profile
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Modal */}
//             <div
//               className="modal fade"
//               id="exampleModal"
//               tabIndex="-1"
//               aria-labelledby="exampleModalLabel"
//               aria-hidden="true"
//             >
//               <div className="modal-dialog">
//                 <div className="modal-content">
//                   <div className="modal-header">
//                     <h5 className="modal-title">Edit Profile</h5>
//                     <button
//                       type="button"
//                       className="btn-close"
//                       data-bs-dismiss="modal"
//                       aria-label="Close"
//                     ></button>
//                   </div>
//                   <div className="modal-body">
//                     <form>
//                       <div className="mb-3">
//                         <label htmlFor="name" className="form-label">
//                           Name:
//                         </label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="name"
//                           value={formData.name}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                       <div className="mb-3">
//                         <label htmlFor="experience" className="form-label">
//                           Experience:
//                         </label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="experience"
//                           value={formData.experience}
//                           onChange={handleInputChange}
//                         />
//                       </div>
//                       <div className="mb-3">
//                         <label htmlFor="role" className="form-label">
//                           Role:
//                         </label>
//                         <select
//                           className="form-select"
//                           id="role"
//                           value={formData.role}
//                           onChange={handleInputChange}
//                         >
//                           <option value="">Select Role</option>
//                           <option value="Full stack">Full stack</option>
//                           <option value="Mern stack">MERN Stack</option>
//                           <option value="Solid Work">Solid Work</option>
//                           <option value="AI Generator">AI Generator</option>
//                         </select>
//                       </div>
//                     </form>
//                   </div>
//                   <div className="modal-footer">
//                     <button
//                       type="button"
//                       className="btn btn-secondary"
//                       data-bs-dismiss="modal"
//                     >
//                       Close
//                     </button>
//                     <button
//                       type="button"
//                       className="btn btn-primary"
//                       onClick={handleUpdateProfile}
//                     >
//                       Save Changes
//                     </button>
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

// export default Profile;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Header1 from "../../Header/Header";
// import SideNavBar1 from "../../SideNavBar/SideNavBar";

// const Profile = () => {
//   const [student, setStudent] = useState(null);

//   const studentId = localStorage.getItem("studentId");

//   useEffect(() => {
//     const fetchStudentProfile = async () => {
//       try {
//         const response = await axios.get(
//           `/api/students/${studentId}/profile`
//         );
//         setStudent(response.data.student);
//       } catch (error) {
//         setStudent(null);
//       }
//     };
//     fetchStudentProfile();
//   }, [studentId]);

//   // Helper for displaying fallback if data is missing
//   const show = (val, fallback = "-") => val && val !== "" ? val : fallback;

//   return (
//     <div>
//       <Header1 />
//       <SideNavBar1 />
//       <div className="main-content" style={{ minHeight: "100vh", background: "#f8f9fa" }}>
//         <div className="page-content">
//           <div className="container-fluid">

//             {/* Profile Header */}
//             <div className="row mb-4">
//               <div className="col-12">
//                 <div className="page-title-box d-flex align-items-center justify-content-between">
//                   <h4 className="mb-0 font-size-22 fw-bold">Student Profile</h4>
//                   <div className="page-title-right">
//                     <ol className="breadcrumb m-0">
//                       <li className="breadcrumb-item text-secondary">Contacts</li>
//                       <li className="breadcrumb-item active">Profile</li>
//                     </ol>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Profile Card */}
//             <div className="row justify-content-center">
//               <div className="col-xl-7 col-lg-8">
//                 <div className="card shadow-sm border-0">
//                   <div className="card-body py-4">
//                     <div className="d-flex align-items-center gap-4">
//                       <img
//                         src={student?.profilePhoto || "https://ui-avatars.com/api/?name=" + encodeURIComponent(student?.username || "User")}
//                         alt="Profile"
//                         className="img-fluid rounded-circle border"
//                         width="110"
//                         height="110"
//                         style={{ objectFit: "cover", background: "#eaeaea" }}
//                       />
//                       <div>
//                         <h3 className="fw-semibold mb-1">{show(student?.username)}</h3>
//                         <div className="text-muted mb-2">
//                           <span className="badge bg-primary">{show(student?.role, "Student")}</span>
//                         </div>
//                         <div className="mb-2">
//                           <i className="bi bi-envelope me-2"></i>
//                           {show(student?.email)}
//                         </div>
//                         <div>
//                           <strong>Student ID:</strong> {show(student?.studentId)}
//                         </div>
//                         <div>
//                           <strong>Department:</strong> {show(student?.department)}
//                         </div>
//                         <div>
//                           <strong>Semester:</strong> {show(student?.semester)}
//                         </div>
//                       </div>
//                     </div>

//                     <hr className="my-4" />

//                     <div className="row">
//                       <div className="col-md-6 mb-3">
//                         <strong>Phone:</strong>
//                         <div>{show(student?.phone)}</div>
//                       </div>
//                       <div className="col-md-6 mb-3">
//                         <strong>Address:</strong>
//                         <div>
//                           {show(student?.address)}, {show(student?.city)}, {show(student?.state)}, {show(student?.country)}
//                         </div>
//                         <div>Postal Code: {show(student?.postalCode)}</div>
//                       </div>
//                       <div className="col-md-6 mb-3">
//                         <strong>Experience:</strong>
//                         <div>{show(student?.experience)}</div>
//                       </div>
//                       <div className="col-md-6 mb-3">
//                         <strong>Qualifications:</strong>
//                         <div>{show(student?.qualifications)}</div>
//                       </div>
//                       <div className="col-md-6 mb-3">
//                         <strong>Interests:</strong>
//                         <div>{show(student?.interests)}</div>
//                       </div>
//                       <div className="col-md-6 mb-3">
//                         <strong>Language:</strong>
//                         <div>{show(student?.language)}</div>
//                       </div>
//                       <div className="col-md-6 mb-3">
//                         <strong>Bio:</strong>
//                         <div>{show(student?.bio)}</div>
//                       </div>
//                       <div className="col-md-6 mb-3">
//                         <strong>Timezone:</strong>
//                         <div>{show(student?.timezone)}</div>
//                       </div>
//                       <div className="col-md-6 mb-3">
//                         <strong>Notifications:</strong>
//                         <div>
//                           Email: {student?.notifications?.email ? "On" : "Off"}<br />
//                           SMS: {student?.notifications?.sms ? "On" : "Off"}<br />
//                           In-App: {student?.notifications?.inApp ? "On" : "Off"}
//                         </div>
//                       </div>
//                     </div>
//                     {/* You can add more fields as needed */}
//                   </div>
//                 </div>
//                 {!student && (
//                   <div className="alert alert-warning mt-4">
//                     Profile data not found or failed to load.
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Header1 from "../../Header/Header";
// import SideNavBar1 from "../../SideNavBar/SideNavBar";

// const Profile = () => {
//   const [student, setStudent] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedData, setEditedData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   const studentId = localStorage.getItem("studentId");

//   useEffect(() => {
//     const fetchStudentProfile = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           `/api/students/${studentId}/profile`
//         );
//         setStudent(response.data.student);
//         setEditedData(response.data.student);
//       } catch (error) {
//         console.error("Error fetching profile:", error);
//         setStudent(null);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchStudentProfile();
//   }, [studentId]);

//   const handleEdit = () => {
//     setIsEditing(true);
//     setEditedData({...student});
//   };

//   const handleCancel = () => {
//     setIsEditing(false);
//     setEditedData({...student});
//   };

//   const handleSave = async () => {
//     try {
//       setSaving(true);
//       const response = await axios.put(
//         `/api/students/${studentId}/profile`,
//         editedData
//       );
//       setStudent(response.data.student || editedData);
//       setIsEditing(false);
//       // Optional: Show success message
//       alert("Profile updated successfully!");
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       alert("Failed to update profile. Please try again.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleInputChange = (field, value) => {
//     setEditedData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const handleNestedInputChange = (parent, field, value) => {
//     setEditedData(prev => ({
//       ...prev,
//       [parent]: {
//         ...prev[parent],
//         [field]: value
//       }
//     }));
//   };

//   // Helper for displaying fallback if data is missing
//   const show = (val, fallback = "-") => val && val !== "" ? val : fallback;

//   if (loading) {
//     return (
//       <div>
//         <Header1 />
//         <SideNavBar1 />
//         <div className="main-content d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
//           <div className="spinner-border text-primary" role="status">
//             <span className="visually-hidden">Loading...</span>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <Header1 />
//       <SideNavBar1 />
//       <div className="main-content" style={{ minHeight: "100vh", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
//         <div className="page-content">
//           <div className="container-fluid py-4">

//             {/* Profile Header */}
//             <div className="row mb-4">
//               <div className="col-12">
//                 <div className="card border-0 shadow-sm bg-white bg-opacity-90">
//                   <div className="card-body">
//                     <div className="d-flex align-items-center justify-content-between">
//                       <div>
//                         <h2 className="mb-1 fw-bold text-dark">
//                           <i className="bi bi-person-circle me-2 text-primary"></i>
//                           Student Profile
//                         </h2>
//                         <p className="text-muted mb-0">Manage your personal information</p>
//                       </div>
//                       <div>
//                         {!isEditing ? (
//                           <button 
//                             className="btn btn-primary btn-lg px-4 shadow-sm"
//                             onClick={handleEdit}
//                           >
//                             <i className="bi bi-pencil-square me-2"></i>
//                             Edit Profile
//                           </button>
//                         ) : (
//                           <div className="btn-group">
//                             <button 
//                               className="btn btn-success px-4"
//                               onClick={handleSave}
//                               disabled={saving}
//                             >
//                               {saving ? (
//                                 <>
//                                   <span className="spinner-border spinner-border-sm me-2" role="status"></span>
//                                   Saving...
//                                 </>
//                               ) : (
//                                 <>
//                                   <i className="bi bi-check-lg me-2"></i>
//                                   Save
//                                 </>
//                               )}
//                             </button>
//                             <button 
//                               className="btn btn-outline-secondary px-4"
//                               onClick={handleCancel}
//                               disabled={saving}
//                             >
//                               <i className="bi bi-x-lg me-2"></i>
//                               Cancel
//                             </button>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Profile Card */}
//             <div className="row justify-content-center">
//               <div className="col-xl-10 col-lg-11">
//                 <div className="card border-0 shadow-lg">
//                   <div className="card-body p-5">
                    
//                     {/* Profile Header Section */}
//                     <div className="row mb-5">
//                       <div className="col-12">
//                         <div className="d-flex align-items-center gap-4 p-4 bg-light rounded-3">
//                           <div className="position-relative">
//                             <img
//                               src={student?.profilePhoto || "https://ui-avatars.com/api/?name=" + encodeURIComponent(student?.username || "User") + "&background=667eea&color=fff&size=150"}
//                               alt="Profile"
//                               className="img-fluid rounded-circle shadow-sm border border-3 border-white"
//                               width="120"
//                               height="120"
//                               style={{ objectFit: "cover" }}
//                             />
//                             <div className="position-absolute bottom-0 end-0">
//                               <span className="badge bg-success rounded-pill border border-white">
//                                 <i className="bi bi-check-circle-fill"></i>
//                               </span>
//                             </div>
//                           </div>
//                           <div className="flex-grow-1">
//                             <h3 className="fw-bold mb-2 text-dark">{show(student?.username)}</h3>
//                             <div className="mb-3">
//                               <span className="badge bg-primary fs-6 px-3 py-2">
//                                 <i className="bi bi-mortarboard me-1"></i>
//                                 {show(student?.role, "Student")}
//                               </span>
//                             </div>
//                             <div className="row g-2">
//                               <div className="col-md-6">
//                                 <div className="d-flex align-items-center text-muted">
//                                   <i className="bi bi-envelope me-2 text-primary"></i>
//                                   <span>{show(student?.email)}</span>
//                                 </div>
//                               </div>
//                               <div className="col-md-6">
//                                 <div className="d-flex align-items-center text-muted">
//                                   <i className="bi bi-card-text me-2 text-primary"></i>
//                                   <span>ID: {show(student?.studentId)}</span>
//                                 </div>
//                               </div>
//                               <div className="col-md-6">
//                                 <div className="d-flex align-items-center text-muted">
//                                   <i className="bi bi-building me-2 text-primary"></i>
//                                   <span>{show(student?.department)}</span>
//                                 </div>
//                               </div>
//                               <div className="col-md-6">
//                                 <div className="d-flex align-items-center text-muted">
//                                   <i className="bi bi-calendar3 me-2 text-primary"></i>
//                                   <span>Semester {show(student?.semester)}</span>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Editable Fields */}
//                     <div className="row g-4">
                      
//                       {/* Contact Information */}
//                       <div className="col-md-6">
//                         <div className="card h-100 border-0 bg-light">
//                           <div className="card-header bg-primary text-white">
//                             <h5 className="mb-0">
//                               <i className="bi bi-telephone me-2"></i>
//                               Contact Information
//                             </h5>
//                           </div>
//                           <div className="card-body">
//                             <div className="mb-3">
//                               <label className="form-label fw-semibold">Phone</label>
//                               {isEditing ? (
//                                 <input
//                                   type="tel"
//                                   className="form-control"
//                                   value={editedData.phone || ""}
//                                   onChange={(e) => handleInputChange("phone", e.target.value)}
//                                 />
//                               ) : (
//                                 <div className="form-control-plaintext">{show(student?.phone)}</div>
//                               )}
//                             </div>
//                             <div className="mb-3">
//                               <label className="form-label fw-semibold">Address</label>
//                               {isEditing ? (
//                                 <textarea
//                                   className="form-control"
//                                   rows="2"
//                                   value={editedData.address || ""}
//                                   onChange={(e) => handleInputChange("address", e.target.value)}
//                                 />
//                               ) : (
//                                 <div className="form-control-plaintext">{show(student?.address)}</div>
//                               )}
//                             </div>
//                             <div className="row">
//                               <div className="col-6">
//                                 <label className="form-label fw-semibold">City</label>
//                                 {isEditing ? (
//                                   <input
//                                     type="text"
//                                     className="form-control"
//                                     value={editedData.city || ""}
//                                     onChange={(e) => handleInputChange("city", e.target.value)}
//                                   />
//                                 ) : (
//                                   <div className="form-control-plaintext">{show(student?.city)}</div>
//                                 )}
//                               </div>
//                               <div className="col-6">
//                                 <label className="form-label fw-semibold">State</label>
//                                 {isEditing ? (
//                                   <input
//                                     type="text"
//                                     className="form-control"
//                                     value={editedData.state || ""}
//                                     onChange={(e) => handleInputChange("state", e.target.value)}
//                                   />
//                                 ) : (
//                                   <div className="form-control-plaintext">{show(student?.state)}</div>
//                                 )}
//                               </div>
//                             </div>
//                             <div className="row mt-3">
//                               <div className="col-6">
//                                 <label className="form-label fw-semibold">Country</label>
//                                 {isEditing ? (
//                                   <input
//                                     type="text"
//                                     className="form-control"
//                                     value={editedData.country || ""}
//                                     onChange={(e) => handleInputChange("country", e.target.value)}
//                                   />
//                                 ) : (
//                                   <div className="form-control-plaintext">{show(student?.country)}</div>
//                                 )}
//                               </div>
//                               <div className="col-6">
//                                 <label className="form-label fw-semibold">Postal Code</label>
//                                 {isEditing ? (
//                                   <input
//                                     type="text"
//                                     className="form-control"
//                                     value={editedData.postalCode || ""}
//                                     onChange={(e) => handleInputChange("postalCode", e.target.value)}
//                                   />
//                                 ) : (
//                                   <div className="form-control-plaintext">{show(student?.postalCode)}</div>
//                                 )}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Professional Information */}
//                       <div className="col-md-6">
//                         <div className="card h-100 border-0 bg-light">
//                           <div className="card-header bg-success text-white">
//                             <h5 className="mb-0">
//                               <i className="bi bi-briefcase me-2"></i>
//                               Professional Information
//                             </h5>
//                           </div>
//                           <div className="card-body">
//                             <div className="mb-3">
//                               <label className="form-label fw-semibold">Experience</label>
//                               {isEditing ? (
//                                 <textarea
//                                   className="form-control"
//                                   rows="3"
//                                   value={editedData.experience || ""}
//                                   onChange={(e) => handleInputChange("experience", e.target.value)}
//                                 />
//                               ) : (
//                                 <div className="form-control-plaintext">{show(student?.experience)}</div>
//                               )}
//                             </div>
//                             <div className="mb-3">
//                               <label className="form-label fw-semibold">Qualifications</label>
//                               {isEditing ? (
//                                 <textarea
//                                   className="form-control"
//                                   rows="3"
//                                   value={editedData.qualifications || ""}
//                                   onChange={(e) => handleInputChange("qualifications", e.target.value)}
//                                 />
//                               ) : (
//                                 <div className="form-control-plaintext">{show(student?.qualifications)}</div>
//                               )}
//                             </div>
//                             <div className="mb-3">
//                               <label className="form-label fw-semibold">Interests</label>
//                               {isEditing ? (
//                                 <textarea
//                                   className="form-control"
//                                   rows="2"
//                                   value={editedData.interests || ""}
//                                   onChange={(e) => handleInputChange("interests", e.target.value)}
//                                 />
//                               ) : (
//                                 <div className="form-control-plaintext">{show(student?.interests)}</div>
//                               )}
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Personal Information */}
//                       <div className="col-md-6">
//                         <div className="card h-100 border-0 bg-light">
//                           <div className="card-header bg-info text-white">
//                             <h5 className="mb-0">
//                               <i className="bi bi-person me-2"></i>
//                               Personal Information
//                             </h5>
//                           </div>
//                           <div className="card-body">
//                             <div className="mb-3">
//                               <label className="form-label fw-semibold">Bio</label>
//                               {isEditing ? (
//                                 <textarea
//                                   className="form-control"
//                                   rows="4"
//                                   value={editedData.bio || ""}
//                                   onChange={(e) => handleInputChange("bio", e.target.value)}
//                                 />
//                               ) : (
//                                 <div className="form-control-plaintext">{show(student?.bio)}</div>
//                               )}
//                             </div>
//                             <div className="mb-3">
//                               <label className="form-label fw-semibold">Language</label>
//                               {isEditing ? (
//                                 <input
//                                   type="text"
//                                   className="form-control"
//                                   value={editedData.language || ""}
//                                   onChange={(e) => handleInputChange("language", e.target.value)}
//                                 />
//                               ) : (
//                                 <div className="form-control-plaintext">{show(student?.language)}</div>
//                               )}
//                             </div>
//                             <div className="mb-3">
//                               <label className="form-label fw-semibold">Timezone</label>
//                               {isEditing ? (
//                                 <select
//                                   className="form-select"
//                                   value={editedData.timezone || ""}
//                                   onChange={(e) => handleInputChange("timezone", e.target.value)}
//                                 >
//                                   <option value="">Select Timezone</option>
//                                   <option value="UTC">UTC</option>
//                                   <option value="EST">EST</option>
//                                   <option value="PST">PST</option>
//                                   <option value="IST">IST</option>
//                                   <option value="GMT">GMT</option>
//                                 </select>
//                               ) : (
//                                 <div className="form-control-plaintext">{show(student?.timezone)}</div>
//                               )}
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Notification Preferences */}
//                       <div className="col-md-6">
//                         <div className="card h-100 border-0 bg-light">
//                           <div className="card-header bg-warning text-dark">
//                             <h5 className="mb-0">
//                               <i className="bi bi-bell me-2"></i>
//                               Notification Preferences
//                             </h5>
//                           </div>
//                           <div className="card-body">
//                             <div className="mb-3">
//                               <div className="form-check form-switch">
//                                 <input
//                                   className="form-check-input"
//                                   type="checkbox"
//                                   id="emailNotifications"
//                                   checked={isEditing ? (editedData.notifications?.email || false) : (student?.notifications?.email || false)}
//                                   onChange={(e) => isEditing && handleNestedInputChange("notifications", "email", e.target.checked)}
//                                   disabled={!isEditing}
//                                 />
//                                 <label className="form-check-label fw-semibold" htmlFor="emailNotifications">
//                                   Email Notifications
//                                 </label>
//                               </div>
//                             </div>
//                             <div className="mb-3">
//                               <div className="form-check form-switch">
//                                 <input
//                                   className="form-check-input"
//                                   type="checkbox"
//                                   id="smsNotifications"
//                                   checked={isEditing ? (editedData.notifications?.sms || false) : (student?.notifications?.sms || false)}
//                                   onChange={(e) => isEditing && handleNestedInputChange("notifications", "sms", e.target.checked)}
//                                   disabled={!isEditing}
//                                 />
//                                 <label className="form-check-label fw-semibold" htmlFor="smsNotifications">
//                                   SMS Notifications
//                                 </label>
//                               </div>
//                             </div>
//                             <div className="mb-3">
//                               <div className="form-check form-switch">
//                                 <input
//                                   className="form-check-input"
//                                   type="checkbox"
//                                   id="appNotifications"
//                                   checked={isEditing ? (editedData.notifications?.inApp || false) : (student?.notifications?.inApp || false)}
//                                   onChange={(e) => isEditing && handleNestedInputChange("notifications", "inApp", e.target.checked)}
//                                   disabled={!isEditing}
//                                 />
//                                 <label className="form-check-label fw-semibold" htmlFor="appNotifications">
//                                   In-App Notifications
//                                 </label>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Error Message */}
//                     {!student && (
//                       <div className="alert alert-danger mt-4 d-flex align-items-center">
//                         <i className="bi bi-exclamation-triangle-fill me-2"></i>
//                         <div>
//                           <strong>Error!</strong> Profile data not found or failed to load.
//                         </div>
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

// export default Profile;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Header1 from "../../Header/Header";
import SideNavBar1 from "../../SideNavBar/SideNavBar";

const Profile = () => {
  const [student, setStudent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const studentId = localStorage.getItem("studentId");

  useEffect(() => {
    const fetchStudentProfile = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8080/api/students/${studentId}/profile`
        );
        setStudent(response.data.student);
        setEditedData(response.data.student);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setStudent(null);
      } finally {
        setLoading(false);
      }
    };
    fetchStudentProfile();
  }, [studentId]);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedData({...student});
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedData({...student});
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      const response = await axios.put(
        `http://localhost:8080/api/students/${studentId}/profile`,
        editedData
      );
      setStudent(response.data.student || editedData);
      setIsEditing(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const handleInputChange = (field, value) => {
    setEditedData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNestedInputChange = (parent, field, value) => {
    setEditedData(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [field]: value
      }
    }));
  };

  const show = (val, fallback = "Not specified") => val && val !== "" ? val : fallback;

  if (loading) {
    return (
      <div>
        <Header1 />
        <SideNavBar1 />
        <div className="main-content d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
          <div className="text-center">
            <div className="spinner-border text-primary mb-3" role="status" style={{ width: "3rem", height: "3rem" }}>
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="text-muted">Loading your profile...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header1 />
      <SideNavBar1 />
      <div className="main-content" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
        <div className="page-content">
          <div className="container-fluid py-4">

            {/* Page Header */}
            <div className="row mb-4">
              <div className="col-12">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h2 className="fw-bold text-dark mb-1">Student Profile</h2>
                    <p className="text-muted mb-0">Manage your personal information and preferences</p>
                  </div>
                  {!isEditing ? (
                    <button 
                      className="btn btn-primary px-4 py-2"
                      onClick={handleEdit}
                      style={{ borderRadius: "8px" }}
                    >
                      <i className="bi bi-pencil-square me-2"></i>
                      Edit Profile
                    </button>
                  ) : (
                    <div>
                      <button 
                        className="btn btn-success px-3 py-2 me-2"
                        onClick={handleSave}
                        disabled={saving}
                        style={{ borderRadius: "8px" }}
                      >
                        {saving ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                            Saving...
                          </>
                        ) : (
                          <>
                            <i className="bi bi-check-lg me-2"></i>
                            Save
                          </>
                        )}
                      </button>
                      <button 
                        className="btn btn-outline-secondary px-3 py-2"
                        onClick={handleCancel}
                        disabled={saving}
                        style={{ borderRadius: "8px" }}
                      >
                        <i className="bi bi-x-lg me-2"></i>
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Profile Overview Card */}
            <div className="row mb-4">
              <div className="col-12">
                <div className="card border-0 shadow-sm" style={{ borderRadius: "12px" }}>
                  <div className="card-body p-4">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        <img
                          src={student?.profilePhoto || `https://ui-avatars.com/api/?name=${encodeURIComponent(student?.username || "User")}&background=0d6efd&color=fff&size=100`}
                          alt="Profile"
                          className="rounded-circle"
                          width="100"
                          height="100"
                          style={{ objectFit: "cover", border: "4px solid #e9ecef" }}
                        />
                      </div>
                      <div className="col">
                        <h3 className="fw-bold mb-2">{show(student?.username)}</h3>
                        <div className="row g-3">
                          <div className="col-md-3">
                            <div className="d-flex align-items-center text-muted">
                              <i className="bi bi-envelope me-2 text-primary"></i>
                              <small>{show(student?.email)}</small>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="d-flex align-items-center text-muted">
                              <i className="bi bi-card-text me-2 text-primary"></i>
                              <small>ID: {show(student?.studentId)}</small>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="d-flex align-items-center text-muted">
                              <i className="bi bi-building me-2 text-primary"></i>
                              <small>{show(student?.department)}</small>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="d-flex align-items-center text-muted">
                              <i className="bi bi-calendar3 me-2 text-primary"></i>
                              <small>Semester {show(student?.semester)}</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Details */}
            <div className="row g-4">
              
              {/* Contact Information */}
              <div className="col-lg-6">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: "12px" }}>
                  <div className="card-header bg-white border-0 pb-0" style={{ borderRadius: "12px 12px 0 0" }}>
                    <h5 className="mb-0 fw-semibold text-dark">
                      <i className="bi bi-telephone-fill me-2 text-primary"></i>
                      Contact Information
                    </h5>
                  </div>
                  <div className="card-body pt-3">
                    <div className="row g-3">
                      <div className="col-12">
                        <label className="form-label text-muted small mb-1">Phone Number</label>
                        {isEditing ? (
                          <input
                            type="tel"
                            className="form-control"
                            value={editedData.phone || ""}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            style={{ borderRadius: "8px" }}
                          />
                        ) : (
                          <div className="fw-medium">{show(student?.phone)}</div>
                        )}
                      </div>
                      <div className="col-12">
                        <label className="form-label text-muted small mb-1">Address</label>
                        {isEditing ? (
                          <textarea
                            className="form-control"
                            rows="2"
                            value={editedData.address || ""}
                            onChange={(e) => handleInputChange("address", e.target.value)}
                            style={{ borderRadius: "8px" }}
                          />
                        ) : (
                          <div className="fw-medium">{show(student?.address)}</div>
                        )}
                      </div>
                      <div className="col-6">
                        <label className="form-label text-muted small mb-1">City</label>
                        {isEditing ? (
                          <input
                            type="text"
                            className="form-control"
                            value={editedData.city || ""}
                            onChange={(e) => handleInputChange("city", e.target.value)}
                            style={{ borderRadius: "8px" }}
                          />
                        ) : (
                          <div className="fw-medium">{show(student?.city)}</div>
                        )}
                      </div>
                      <div className="col-6">
                        <label className="form-label text-muted small mb-1">State</label>
                        {isEditing ? (
                          <input
                            type="text"
                            className="form-control"
                            value={editedData.state || ""}
                            onChange={(e) => handleInputChange("state", e.target.value)}
                            style={{ borderRadius: "8px" }}
                          />
                        ) : (
                          <div className="fw-medium">{show(student?.state)}</div>
                        )}
                      </div>
                      <div className="col-6">
                        <label className="form-label text-muted small mb-1">Country</label>
                        {isEditing ? (
                          <input
                            type="text"
                            className="form-control"
                            value={editedData.country || ""}
                            onChange={(e) => handleInputChange("country", e.target.value)}
                            style={{ borderRadius: "8px" }}
                          />
                        ) : (
                          <div className="fw-medium">{show(student?.country)}</div>
                        )}
                      </div>
                      <div className="col-6">
                        <label className="form-label text-muted small mb-1">Postal Code</label>
                        {isEditing ? (
                          <input
                            type="text"
                            className="form-control"
                            value={editedData.postalCode || ""}
                            onChange={(e) => handleInputChange("postalCode", e.target.value)}
                            style={{ borderRadius: "8px" }}
                          />
                        ) : (
                          <div className="fw-medium">{show(student?.postalCode)}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="col-lg-6">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: "12px" }}>
                  <div className="card-header bg-white border-0 pb-0" style={{ borderRadius: "12px 12px 0 0" }}>
                    <h5 className="mb-0 fw-semibold text-dark">
                      <i className="bi bi-briefcase-fill me-2 text-success"></i>
                      Professional Information
                    </h5>
                  </div>
                  <div className="card-body pt-3">
                    <div className="row g-3">
                      <div className="col-12">
                        <label className="form-label text-muted small mb-1">Experience</label>
                        {isEditing ? (
                          <textarea
                            className="form-control"
                            rows="3"
                            value={editedData.experience || ""}
                            onChange={(e) => handleInputChange("experience", e.target.value)}
                            style={{ borderRadius: "8px" }}
                          />
                        ) : (
                          <div className="fw-medium">{show(student?.experience)}</div>
                        )}
                      </div>
                      <div className="col-12">
                        <label className="form-label text-muted small mb-1">Qualifications</label>
                        {isEditing ? (
                          <textarea
                            className="form-control"
                            rows="3"
                            value={editedData.qualifications || ""}
                            onChange={(e) => handleInputChange("qualifications", e.target.value)}
                            style={{ borderRadius: "8px" }}
                          />
                        ) : (
                          <div className="fw-medium">{show(student?.qualifications)}</div>
                        )}
                      </div>
                      <div className="col-12">
                        <label className="form-label text-muted small mb-1">Interests</label>
                        {isEditing ? (
                          <textarea
                            className="form-control"
                            rows="2"
                            value={editedData.interests || ""}
                            onChange={(e) => handleInputChange("interests", e.target.value)}
                            style={{ borderRadius: "8px" }}
                          />
                        ) : (
                          <div className="fw-medium">{show(student?.interests)}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div className="col-lg-6">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: "12px" }}>
                  <div className="card-header bg-white border-0 pb-0" style={{ borderRadius: "12px 12px 0 0" }}>
                    <h5 className="mb-0 fw-semibold text-dark">
                      <i className="bi bi-person-fill me-2 text-info"></i>
                      Personal Information
                    </h5>
                  </div>
                  <div className="card-body pt-3">
                    <div className="row g-3">
                      <div className="col-12">
                        <label className="form-label text-muted small mb-1">Bio</label>
                        {isEditing ? (
                          <textarea
                            className="form-control"
                            rows="4"
                            value={editedData.bio || ""}
                            onChange={(e) => handleInputChange("bio", e.target.value)}
                            style={{ borderRadius: "8px" }}
                          />
                        ) : (
                          <div className="fw-medium">{show(student?.bio)}</div>
                        )}
                      </div>
                      <div className="col-6">
                        <label className="form-label text-muted small mb-1">Language</label>
                        {isEditing ? (
                          <input
                            type="text"
                            className="form-control"
                            value={editedData.language || ""}
                            onChange={(e) => handleInputChange("language", e.target.value)}
                            style={{ borderRadius: "8px" }}
                          />
                        ) : (
                          <div className="fw-medium">{show(student?.language)}</div>
                        )}
                      </div>
                      <div className="col-6">
                        <label className="form-label text-muted small mb-1">Timezone</label>
                        {isEditing ? (
                          <select
                            className="form-select"
                            value={editedData.timezone || ""}
                            onChange={(e) => handleInputChange("timezone", e.target.value)}
                            style={{ borderRadius: "8px" }}
                          >
                            <option value="">Select Timezone</option>
                            <option value="UTC">UTC</option>
                            <option value="EST">EST</option>
                            <option value="PST">PST</option>
                            <option value="IST">IST</option>
                            <option value="GMT">GMT</option>
                          </select>
                        ) : (
                          <div className="fw-medium">{show(student?.timezone)}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notification Preferences */}
              <div className="col-lg-6">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: "12px" }}>
                  <div className="card-header bg-white border-0 pb-0" style={{ borderRadius: "12px 12px 0 0" }}>
                    <h5 className="mb-0 fw-semibold text-dark">
                      <i className="bi bi-bell-fill me-2 text-warning"></i>
                      Notification Preferences
                    </h5>
                  </div>
                  <div className="card-body pt-3">
                    <div className="row g-3">
                      <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded" style={{ borderRadius: "8px" }}>
                          <div>
                            <div className="fw-medium">Email Notifications</div>
                            <small className="text-muted">Receive updates via email</small>
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="emailNotifications"
                              checked={isEditing ? (editedData.notifications?.email || false) : (student?.notifications?.email || false)}
                              onChange={(e) => isEditing && handleNestedInputChange("notifications", "email", e.target.checked)}
                              disabled={!isEditing}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded" style={{ borderRadius: "8px" }}>
                          <div>
                            <div className="fw-medium">SMS Notifications</div>
                            <small className="text-muted">Receive updates via SMS</small>
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="smsNotifications"
                              checked={isEditing ? (editedData.notifications?.sms || false) : (student?.notifications?.sms || false)}
                              onChange={(e) => isEditing && handleNestedInputChange("notifications", "sms", e.target.checked)}
                              disabled={!isEditing}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded" style={{ borderRadius: "8px" }}>
                          <div>
                            <div className="fw-medium">In-App Notifications</div>
                            <small className="text-muted">Receive updates in the app</small>
                          </div>
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="appNotifications"
                              checked={isEditing ? (editedData.notifications?.inApp || false) : (student?.notifications?.inApp || false)}
                              onChange={(e) => isEditing && handleNestedInputChange("notifications", "inApp", e.target.checked)}
                              disabled={!isEditing}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Error Message */}
            {!student && (
              <div className="row mt-4">
                <div className="col-12">
                  <div className="alert alert-danger d-flex align-items-center" style={{ borderRadius: "12px" }}>
                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                    <div>
                      <strong>Error!</strong> Profile data not found or failed to load.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;


