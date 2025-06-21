import React from "react";
import AdminSideNavaBar from "../AdminSideNavaBar/AdminSideNavaBar";

const CourseScheduling = () => {
  return (
    <div className="dashboard__main">
      <AdminSideNavaBar />
      <div className="dashboard__content bg-light-4">
        <div class="row pb-50 mb-10">
          <div class="col-auto">
            <h1 class="text-30 lh-12 fw-700">Course Scheduling</h1>
          </div>
        </div>
        <div class="d-flex items-center py-20 px-30 border-bottom-light">
          <div class="row y-gap-60">
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
                      <input required="" placeholder="Start Date" type="text" />
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
        </div>
      </div>
    </div>
  );
};

export default CourseScheduling;
