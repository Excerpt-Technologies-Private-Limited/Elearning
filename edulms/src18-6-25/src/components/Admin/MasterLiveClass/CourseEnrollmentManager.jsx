import React from "react";
import AdminSideNavaBar from "../AdminSideNavaBar/AdminSideNavaBar";

const CourseEnrollmentManager = () => {
  return (
    
      <div className="dashboard__main">
        <AdminSideNavaBar />
        <div className="dashboard__content bg-light-4">
          <div class="row pb-50 mb-10">
            <div class="col-auto">
              <h1 class="text-30 lh-12 fw-700">Course Enrollment Manager</h1>
            </div>
          </div>

          <div class="d-flex flex-column items-center py-20 px-20 border-bottom-light">
            <div class="row">
              <div class="col-12">
                <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                  <div class="d-flex items-center py-20 px-30 border-bottom-light">
                    <h2 class="text-17 lh-1 fw-500">Live Session Scheduler</h2>
                  </div>

                  <div class="py-30 px-30">
                    <form class="contact-form row y-gap-30">
                      <div class="col-12">
                        <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                          Title*
                        </label>
                        <input
                          required=""
                          placeholder="Enter Course Title"
                          type="text"
                        />
                      </div>

                      <div class="col-12">
                        <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                          Description*
                        </label>
                        <textarea
                          required=""
                          placeholder="Description"
                          rows="7"
                        ></textarea>
                      </div>

                      <div class="col-md-6">
                        <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                          Category*
                        </label>
                        <select>
                          <option value="Live">Live</option>
                          <option value="Blended">Blended</option>
                        </select>
                      </div>

                      <div class="col-md-6">
                        <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                          Start Date
                        </label>
                        <input
                          required=""
                          placeholder="Start Date"
                          type="text"
                        />
                      </div>

                      <div class="col-md-6">
                        <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                          End Date
                        </label>
                        <input required="" placeholder="End Date" type="text" />
                      </div>

                      <div class="row y-gap-20 justify-between pt-15">
                        <div class="col-auto">
                          <button class="button -md -outline-purple-1 text-purple-1">
                            Rest
                          </button>
                        </div>
                        <div class="col-auto">
                          <button class="button -md -purple-1 text-white">
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-12">

                <div class="row y-gap-10 justify-between mb-4">
                  <div class="col-auto">
                    <form class="search-field border-light rounded-8 h-50">
                      <input
                        required=""
                        class="bg-white -dark-bg-dark-2 pr-50"
                        placeholder="Search Courses"
                        type="text"
                      />
                      <button class="" type="submit">
                        <i class="icon-search text-light-1 text-20"></i>
                      </button>
                    </form>
                  </div>
                  <div class="col-auto">
                    <div class="d-flex flex-wrap y-gap-10 x-gap-20">
                      <div>
                        <div
                          id="dd14button"
                          class="dropdown js-dropdown js-category-active"
                        >
                          <div
                            class="dropdown__button d-flex items-center text-14 bg-white -dark-bg-dark-2 border-light rounded-8 px-20 py-10 text-14 lh-12"
                            data-el-toggle=".js-category-toggle"
                            data-el-toggle-active=".js-category-active"
                          >
                            <span class="js-dropdown-title">Up Coming</span>
                            <i class="icon text-9 ml-40 icon-chevron-down"></i>
                          </div>
                          <div
                            id="dd14content"
                            class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle"
                          >
                            <div class="text-14 y-gap-15 js-dropdown-list">
                              <div class="d-block js-dropdown-link cursor activeMenu ">
                                <span
                                  class="d-block js-dropdown-link"
                                  Style={{ cursor: "pointer" }}
                                >
                                  All Categories
                                </span>
                              </div>
                              <div class="d-block js-dropdown-link cursor  ">
                                <span
                                  class="d-block js-dropdown-link"
                                  Style={{ cursor: "pointer" }}
                                >
                                  Animation
                                </span>
                              </div>
                              <div class="d-block js-dropdown-link cursor  ">
                                <span
                                  class="d-block js-dropdown-link"
                                  Style={{ cursor: "pointer" }}
                                >
                                  Design
                                </span>
                              </div>
                              <div class="d-block js-dropdown-link cursor  ">
                                <span
                                  class="d-block js-dropdown-link"
                                  Style={{ cursor: "pointer" }}
                                >
                                  Illustration
                                </span>
                              </div>
                              <div class="d-block js-dropdown-link cursor  ">
                                <span
                                  class="d-block js-dropdown-link"
                                  style={{ cursor: "pointer" }}
                                >
                                  Business
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div
                          id="dd15button"
                          class="dropdown js-dropdown js-review-active"
                        >
                          <div
                            class="dropdown__button d-flex items-center text-14 bg-white -dark-bg-dark-2 border-light rounded-8 px-20 py-10 text-14 lh-12"
                            data-el-toggle=".js-review-toggle"
                            data-el-toggle-active=".js-review-active"
                          >
                            <span class="js-dropdown-title">Sort By Title</span>
                            <i class="icon text-9 ml-40 icon-chevron-down"></i>
                          </div>
                          <div
                            id="dd15content"
                            class="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-review-toggle"
                          >
                            <div class="text-14 y-gap-15 js-dropdown-list">
                              <div>
                                <a href="#" class="d-block js-dropdown-link">
                                  Animation
                                </a>
                              </div>
                              <div>
                                <a href="#" class="d-block js-dropdown-link">
                                  Design
                                </a>
                              </div>
                              <div>
                                <a href="#" class="d-block js-dropdown-link">
                                  Illustration
                                </a>
                              </div>
                              <div>
                                <a href="#" class="d-block js-dropdown-link">
                                  Business
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="overflow rounded-8 shadow-4">
                  <div class="overflow-x-auto">
                    <table class="table -dashboard -courses">
                      <thead>
                        <tr>
                          <th>S.no</th>
                          <th>Title</th>
                          <th>Description</th>
                          <th>Mode</th>
                          <th>Start Date</th>
                          <th>End Date</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Add your table rows here */}
                        <tr>
                          <td>1</td>
                          <td>Full stack</td>
                          <td>Front end & back end</td>
                          <td>Live</td>
                          <td>1-2-2203</td>
                          <td>4-2-2203</td>
                          <td>Active</td>
                          <td className="d-flex gap-3">
                            <button className="button -purple-1 text-white p-2 m-1">
                              <i className="icon-bin text-16"></i>
                            </button>
                            <button className="button -purple-1 text-white p-2 m-1">
                              <i className="icon icon-edit text-16"></i>
                            </button>
                          </td>
                        </tr>

                         <tr>
                          <td>1</td>
                          <td>Full stack</td>
                          <td>Front end & back end</td>
                          <td>Live</td>
                          <td>1-2-2203</td>
                          <td>4-2-2203</td>
                          <td>Active</td>
                          <td className="d-flex gap-3">
                            <button className="button -purple-1 text-white p-2 m-1">
                              <i className="icon-bin text-16"></i>
                            </button>
                            <button className="button -purple-1 text-white p-2 m-1">
                              <i className="icon icon-edit text-16"></i>
                            </button>
                          </td>
                        </tr>

                         <tr>
                          <td>1</td>
                          <td>Full stack</td>
                          <td>Front end & back end</td>
                          <td>Live</td>
                          <td>1-2-2203</td>
                          <td>4-2-2203</td>
                          <td>Active</td>
                          <td className="d-flex gap-3">
                            <button className="button -purple-1 text-white p-2 m-1">
                              <i className="icon-bin text-16"></i>
                            </button>
                            <button className="button -purple-1 text-white p-2 m-1">
                              <i className="icon icon-edit text-16"></i>
                            </button>
                          </td>
                        </tr>

                        {/* Repeat for more courses */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default CourseEnrollmentManager;
