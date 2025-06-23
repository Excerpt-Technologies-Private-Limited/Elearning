import React from "react";
import SideNavBar1 from "../../SideNavBar/SideNavBar";
import Header1 from "../../Header/Header";

const StudentEnrollment1 = () => {
  return (
    <>
     <Header1 />
    <SideNavBar1 />
    
    <div  className="main-content">
    <div class="page-content">
      <div class="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">
                  Student Enrollment List
                </h4>
              </div>

              <div className="card-body">
                <div
                  id="datatable_wrapper"
                  className="dataTables_wrapper dt-bootstrap4 no-footer"
                >
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        data-bs-whatever="@mdo"
                      >
                        Add Student Enrollment +
                      </button>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <div id="datatable_filter" className="dataTables_filter">
                        <label>
                          Search:
                          <input
                            type="search"
                            className="form-control form-control-sm"
                            placeholder=""
                            aria-controls="datatable"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-12">
                      <table
                        id="datatable"
                        className="table table-bordered dt-responsive nowrap w-100 dataTable no-footer dtr-inline"
                        style={{ width: "100%" }}
                        aria-describedby="datatable_info"
                      >
                        <thead>
                          <tr>
                            <th>Enrollment Number</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Couse Selection</th>
                            <th>Education</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>#101</td>
                            <td>karthik</td>
                            <td>karthik@gamil.com</td>
                            <td>Rayadurg</td>
                            <td>React js</td>
                            <td>B.COM</td>
                            <td>
                              <div className="d-flex flex-wrap gap-2">
                                <button
                                  type="button"
                                  class="btn btn-soft-success waves-effect waves-light"
                                >
                                  <i className='bx bx-edit'></i>
                                </button>
                                <button
                                  type="button"
                                  class="btn btn-soft-danger waves-effect waves-light"
                                >
                                  <i className='bx bx-trash'></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                           <tr>
                            <td>#101</td>
                            <td>karthik</td>
                            <td>karthik@gamil.com</td>
                            <td>Rayadurg</td>
                            <td>React js</td>
                            <td>B.COM</td>
                            <td>
                              <div className="d-flex flex-wrap gap-2">
                                <button
                                  type="button"
                                  class="btn btn-soft-success waves-effect waves-light"
                                >
                                  <i className='bx bx-edit'></i>
                                </button>
                                <button
                                  type="button"
                                  class="btn btn-soft-danger waves-effect waves-light"
                                >
                                  <i className='bx bx-trash'></i>
                                </button>
                              </div>
                            </td>
                          </tr>

                           <tr>
                            <td>#101</td>
                            <td>karthik</td>
                            <td>karthik@gamil.com</td>
                            <td>Rayadurg</td>
                            <td>React js</td>
                            <td>B.COM</td>
                            <td>
                              <div className="d-flex flex-wrap gap-2">
                                <button
                                  type="button"
                                  class="btn btn-soft-success waves-effect waves-light"
                                >
                                  <i className='bx bx-edit'></i>
                                </button>
                                <button
                                  type="button"
                                  class="btn btn-soft-danger waves-effect waves-light"
                                >
                                  <i className='bx bx-trash'></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                           <tr>
                            <td>#101</td>
                            <td>karthik</td>
                            <td>karthik@gamil.com</td>
                            <td>Rayadurg</td>
                            <td>React js</td>
                            <td>B.COM</td>
                            <td>
                              <div className="d-flex flex-wrap gap-2">
                                <button
                                  type="button"
                                  class="btn btn-soft-success waves-effect waves-light"
                                >
                                  <i className='bx bx-edit'></i>
                                </button>
                                <button
                                  type="button"
                                  class="btn btn-soft-danger waves-effect waves-light"
                                >
                                  <i className='bx bx-trash'></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                         
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-12 col-md-5">
                      <div
                        className="dataTables_info"
                        id="datatable_info"
                        role="status"
                        aria-live="polite"
                      >
                        Showing 1 to 10 of 57 entries
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-7">
                      <div
                        className="dataTables_paginate paging_simple_numbers"
                        id="datatable_paginate"
                      >
                        <ul className="pagination">
                          <li className="paginate_button page-item previous disabled">
                            <a
                              aria-controls="datatable"
                              aria-disabled="true"
                              role="link"
                              data-dt-idx="previous"
                              tabIndex="0"
                              className="page-link"
                            >
                              Previous
                            </a>
                          </li>
                          <li className="paginate_button page-item active">
                            <a
                              href="#"
                              aria-controls="datatable"
                              role="link"
                              aria-current="page"
                              data-dt-idx="0"
                              tabIndex="0"
                              className="page-link"
                            >
                              1
                            </a>
                          </li>
                          <li className="paginate_button page-item">
                            <a
                              href="#"
                              aria-controls="datatable"
                              role="link"
                              data-dt-idx="1"
                              tabIndex="0"
                              className="page-link"
                            >
                              2
                            </a>
                          </li>
                          <li className="paginate_button page-item next">
                            <a
                              href="#"
                              aria-controls="datatable"
                              role="link"
                              data-dt-idx="next"
                              tabIndex="0"
                              className="page-link"
                            >
                              Next
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
                Add Student Enrollement
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
                  <div class="mb-3 col-md-6">
                    <label for="recipient-name" class="col-form-label">
                      Name:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="recipient-name" class="col-form-label">
                      Email:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="recipient-name" class="col-form-label">
                      Education:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="recipient-name"
                    />
                  </div>

                  <div className="mb-3 col-md-6">
                    <label htmlFor="role" className="col-form-label">
                      Select Course:
                    </label>
                    <select className="form-control" id="role">
                      <option value="">Select Course</option>
                      <option value="admin">Maths</option>
                      <option value="teacher">React js</option>
                      <option value="student">Cloud computing</option>
                      <option value="parent">App Developer</option>
                    </select>
                  </div>

                  <div class="mb-3">
                    <label for="message-text" class="col-form-label">
                      Address:
                    </label>
                    <textarea class="form-control" id="message-text"></textarea>
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
    </div>

    </>
  );
};

export default StudentEnrollment1;
