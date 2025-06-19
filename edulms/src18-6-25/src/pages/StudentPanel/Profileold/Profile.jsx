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
          `/api/students/${studentId}/profile`
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
    setEditedData({ ...student });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedData({ ...student });
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      const response = await axios.put(
        `/api/students/${studentId}/profile`,
        editedData
      );
      setStudent(response.data.student || editedData);
      setIsEditing(false);
      // Optional: Show success message
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const handleInputChange = (field, value) => {
    setEditedData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNestedInputChange = (parent, field, value) => {
    setEditedData((prev) => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [field]: value,
      },
    }));
  };

  // Helper for displaying fallback if data is missing
  const show = (val, fallback = "-") => (val && val !== "" ? val : fallback);

  return (
    <div>
      <Header1 />
      <SideNavBar1 />
      <div className="main-content">
        <div className="page-content ">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 class="mb-sm-0 font-size-18">Student Profile</h4>

                  <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                      <li class="breadcrumb-item">
                        <a href="javascript: void(0);">DashBoard</a>
                      </li>
                      <li class="breadcrumb-item active">Student Profile</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-xl-9 col-lg-8">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm order-2 order-sm-1">
                        <div class="d-flex align-items-start mt-3 mt-sm-0">
                          <div class="flex-shrink-0">
                            <div class="avatar-xl me-3">
                              <img
                                src={
                                  student?.profilePhoto ||
                                  "https://ui-avatars.com/api/?name=" +
                                    encodeURIComponent(
                                      student?.username || "User"
                                    ) +
                                    "&background=667eea&color=fff&size=150"
                                }
                                alt="Profile"
                                class="img-fluid rounded-circle d-block"
                              />
                            </div>
                          </div>
                          <div class="flex-grow-1">
                            <div>
                              <h5 class="font-size-16 mb-1">
                                {show(student?.username)}
                              </h5>
                              <p class="text-muted font-size-13">
                                {show(student?.role, "Student")}
                              </p>

                              <div class="d-flex flex-wrap align-items-start gap-2 gap-lg-3 text-muted font-size-13">
                                <div>
                                  <i class="mdi mdi-circle-medium me-1 text-success align-middle"></i>
                                  ID: {show(student?.studentId)}
                                </div>
                                <div>
                                  <i class="mdi mdi-circle-medium me-1 text-success align-middle"></i>
                                  {show(student?.email)}
                                </div>
                                <div>
                                  <i class="mdi mdi-circle-medium me-1 text-success align-middle"></i>
                                  {show(student?.department)}
                                </div>
                                <div>
                                  <i class="mdi mdi-circle-medium me-1 text-success align-middle"></i>
                                  Semester {show(student?.semester)}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-auto order-1 order-sm-2">
                        <div class="d-flex align-items-start justify-content-end gap-2">
                          <div>
                            <button type="button" class="btn btn-soft-light">
                              <i class="me-1"></i> Message
                            </button>
                          </div>
                          <div>
                            <div class="dropdown">
                              <button
                                class="btn btn-link font-size-16 shadow-none text-muted dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i class="bx bx-dots-horizontal-rounded"></i>
                              </button>
                              <ul class="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a
                                    class="dropdown-item"
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    data-bs-whatever="@mdo"
                                    onClick={handleEdit}
                                  >
                                    Edit
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul
                      class="nav nav-tabs-custom card-header-tabs border-top mt-4"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li class="nav-item">
                        <a
                          class="nav-link px-3 active"
                          data-bs-toggle="tab"
                          href="#overview"
                          role="tab"
                        >
                          Information
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="tab-content">
                  <div class="tab-pane active" id="overview" role="tabpanel">
                    <div class="card">
                      <div class="card-header">
                        <h5 class="card-title mb-0">
                          Manage your personal information
                        </h5>
                      </div>
                      <div class="card-body h-100">
                        <div class="py-3">
                          <div class="row">
                            <div class="col-xl-6">
                              <div class="card p-1 mb-xl-0">
                                <div class="p-3">
                                  <div class="d-flex align-items-start">
                                    <div class="flex-grow-1 overflow-hidden">
                                      <h5 class="font-size-15 text-truncate">
                                        Contact Information
                                      </h5>
                                      <p class="font-size-13 text-muted ">
                                        Phone: 7383339349 | City: Mumbai
                                      </p>
                                    </div>
                                    <div class="flex-shrink-0 ms-2">
                                      <div class="dropdown">
                                        <a
                                          class="btn btn-link text-muted font-size-16 p-1 py-0 dropdown-toggle shadow-none"
                                          href="#"
                                          role="button"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                        >
                                          <i class="bx bx-dots-horizontal-rounded"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                          <li>
                                            <a class="dropdown-item" href="#">
                                              Action
                                            </a>
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#">
                                              Another action
                                            </a>
                                          </li>
                                          <li>
                                            <a class="dropdown-item" href="#">
                                              Something else here
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                   <ul class="list-inline">
                                    <li class="list-inline-item me-3">
                                      <a
                                        href="javascript: void(0);"
                                        class="text-muted"
                                      >
                                        <i class="bx bx-purchase-tag-alt align-middle text-muted me-1"></i>{" "}
                                         Country: hjjjds
                                      </a>
                                    </li>
                                    <li class="list-inline-item me-3">
                                      <a
                                        href="javascript: void(0);"
                                        class="text-muted"
                                      >
                                        <i class="bx bx-comment-dots align-middle text-muted me-1"></i>{" "}
                                        State: banglore
                                      </a>
                                    </li>
                                  </ul>
                                
                                 <p className="text-muted">
                                  Address: jsdfkjdfsjkd 
                                 </p>
                               
                                  <div>
                                    <a
                                      href="javascript: void(0);"
                                      class="text-primary"
                                    >
                                      Read more{" "}
                                      <i class="mdi mdi-arrow-right"></i>
                                    </a>
                                  </div>
                                </div>

                                
                              </div>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title mb-3">Skills</h5>

                    <div class="d-flex flex-wrap gap-2 font-size-16">
                      <a href="#" class="badge bg-primary-subtle text-primary">
                        Photoshop
                      </a>
                      <a href="#" class="badge bg-primary-subtle text-primary">
                        illustrator
                      </a>
                      <a href="#" class="badge bg-primary-subtle text-primary">
                        HTML
                      </a>
                      <a href="#" class="badge bg-primary-subtle text-primary">
                        CSS
                      </a>
                      <a href="#" class="badge bg-primary-subtle text-primary">
                        Javascript
                      </a>
                      <a href="#" class="badge bg-primary-subtle text-primary">
                        Php
                      </a>
                      <a href="#" class="badge bg-primary-subtle text-primary">
                        Python
                      </a>
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title mb-3">Portfolio</h5>

                    <div>
                      <ul class="list-unstyled mb-0">
                        <li>
                          <a href="#" class="py-2 d-block text-muted">
                            <i class="mdi mdi-web text-primary me-1"></i>{" "}
                            Website
                          </a>
                        </li>
                        <li>
                          <a href="#" class="py-2 d-block text-muted">
                            <i class="mdi mdi-note-text-outline text-primary me-1"></i>{" "}
                            Blog
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                your Profile
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div className="row">
                  <div class="mb-3 col-md-4">
                    <label for="recipient-name" class="col-form-label">
                      Name:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div class="mb-3 col-md-4">
                    <label for="recipient-name" class="col-form-label">
                      Experince
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div className="mb-3 col-md-4">
                    <label htmlFor="role" className="col-form-label">
                      Role:
                    </label>
                    <select className="form-control" id="role">
                      <option value="">Select Role</option>
                      <option value="admin">Full stack</option>
                      <option value="teacher">Mern stack</option>
                      <option value="student">Soild Work</option>
                      <option value="parent">AI generator</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
