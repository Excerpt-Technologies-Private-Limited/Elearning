import React from "react";
import "./LiveClass.css";
import Header1 from "../../Header/Header";
import SideNavBar1 from "../../SideNavBar/SideNavBar";

const LiveClass1 = () => {
  return (
    <>
      <Header1 />
      <SideNavBar1 />
      <div className="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 class="mb-sm-0 font-size-18">Live Class</h4>

                  <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                      <li class="breadcrumb-item">
                        <a href="javascript: void(0);">DashBoard</a>
                      </li>
                      <li class="breadcrumb-item active">Live Class</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-8">
                <div class="card">
                  <div class="card-body">
                    <div class="">
                      <div class="card">
                        <div class="card-header">
                          <h4 class="card-title">UI/UX Video</h4>
                        </div>

                        <div class="card-body">
                          <div className="video-thumbnail-container">
                            <img
                              src="https://themesbrand.com/minia/layouts-lts/assets/images/small/img-2.jpg"
                              alt="video thumbnail"
                              className="img-thumbnail"
                            />
                            <i className="bx bx-play-circle play-icon"></i>
                          </div>
                        </div>
                      </div>

                      <div class="text-center">
                        <div class="row">
                          <div class="col-sm-4">
                            <div>
                              <h6 class="mb-2">Video</h6>
                              <p class="text-muted font-size-15">Description</p>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="mt-4 mt-sm-0">
                              <h6 class="mb-2">Date</h6>
                              <p class="text-muted font-size-15">
                                20 June, 2022
                              </p>
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="mt-4 mt-sm-0">
                              <p class="text-muted mb-2">Instructor</p>
                              <h5 class="font-size-15">Gilbert Smith</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />

                     
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="row">
                  <div class="card">
                    <div class="card-body">
                      <div class="search-box">
                        <h5 class="mb-3">Search</h5>
                        <div class="position-relative px-2">
                          <input
                            type="text"
                            class="form-control rounded bg-light border-light"
                            placeholder="Search..."
                          />
                          <i class="mdi mdi-magnify search-icon position-absolute top-50 end-0 translate-middle-y me-3"></i>
                        </div>
                      </div>

                      <div class="mt-5">
                        <div class="accordion" id="contentAccordion">
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="headingLessons">
                              <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseLessons"
                                aria-expanded="false"
                                aria-controls="collapseLessons"
                              >
                                Lessons
                              </button>
                            </h2>
                            <div
                              id="collapseLessons"
                              class="accordion-collapse collapse"
                              aria-labelledby="headingLessons"
                              data-bs-parent="#contentAccordion"
                            >
                              <div class="accordion-body px-2">
                                <ul class="list-unstyled fw-medium">
                                  <li class="border-bottom py-2">
                                    Design & Prototype{" "}
                                    <span class="badge bg-primary-subtle text-primary float-end">
                                      02
                                    </span>
                                  </li>
                                  <li class="border-bottom py-2">
                                    Create with Figma{" "}
                                    <span class="badge bg-primary-subtle text-primary float-end">
                                      04
                                    </span>
                                  </li>
                                  <li class="border-bottom py-2">
                                    Color Picker{" "}
                                    <span class="badge bg-primary-subtle text-primary float-end">
                                      12
                                    </span>
                                  </li>
                                  <li class="border-bottom py-2">
                                    Typography{" "}
                                    <span class="badge bg-primary-subtle text-primary float-end">
                                      08
                                    </span>
                                  </li>
                                  <li class="pt-2">
                                    Components{" "}
                                    <span class="badge bg-primary-subtle text-primary float-end">
                                      10
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div class="accordion-item">
                            <h2 class="accordion-header" id="headingResources">
                              <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseResources"
                                aria-expanded="false"
                                aria-controls="collapseResources"
                              >
                                Resources
                              </button>
                            </h2>
                            <div
                              id="collapseResources"
                              class="accordion-collapse collapse"
                              aria-labelledby="headingResources"
                              data-bs-parent="#contentAccordion"
                            >
                              <div class="accordion-body px-2">
                                <ul class="list-unstyled fw-medium">
                                  <li class="border-bottom py-2">
                                    PDF Notes{" "}
                                    <span class="badge bg-primary-subtle text-primary float-end">
                                      03
                                    </span>
                                  </li>
                                  <li class="border-bottom py-2">
                                    Reference Links{" "}
                                    <span class="badge bg-primary-subtle text-primary float-end">
                                      06
                                    </span>
                                  </li>
                                  <li class="pt-2">
                                    Additional Readings{" "}
                                    <span class="badge bg-primary-subtle text-primary float-end">
                                      02
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div class="accordion-item">
                            <h2 class="accordion-header" id="headingQuizzes">
                              <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseQuizzes"
                                aria-expanded="false"
                                aria-controls="collapseQuizzes"
                              >
                                Quizzes
                              </button>
                            </h2>
                            <div
                              id="collapseQuizzes"
                              class="accordion-collapse collapse"
                              aria-labelledby="headingQuizzes"
                              data-bs-parent="#contentAccordion"
                            >
                              <div class="accordion-body px-2">
                                <ul class="list-unstyled fw-medium">
                                  <li class="border-bottom py-2">
                                    Module 1 Quiz{" "}
                                    <span class="badge bg-primary-subtle text-primary float-end">
                                      01
                                    </span>
                                  </li>
                                  <li class="border-bottom py-2">
                                    Final Quiz{" "}
                                    <span class="badge bg-primary-subtle text-primary float-end">
                                      01
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="mt-5">
                        <h5 class="mb-3">Tag Clouds</h5>
                        <div class="px-2 d-flex flex-wrap gap-2">
                          <span class="badge bg-primary-subtle text-primary">
                            Design
                          </span>
                          <span class="badge bg-primary-subtle text-primary">
                            Development
                          </span>
                          <span class="badge bg-primary-subtle text-primary">
                            Wordpress
                          </span>
                          <span class="badge bg-primary-subtle text-primary">
                            HTML
                          </span>
                          <span class="badge bg-primary-subtle text-primary">
                            Business
                          </span>
                        </div>
                      </div>

                      <div class="mt-5">
                        <h5 class="mb-3">Email Newsletter</h5>
                        <div class="px-2">
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter Email"
                            />
                            <button
                              class="btn btn-outline-primary"
                              type="button"
                            >
                              <i class="mdi mdi-send-outline"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer class="footer">
            <div class="container-fluid">
              <div class="row">
                <div class="col-sm-6">
                  <script>document.write(new Date().getFullYear())</script> ©
                  Minia.
                </div>
                <div class="col-sm-6">
                  <div class="text-sm-end d-none d-sm-block">
                    Design & Develop by{" "}
                    <a href="#!" class="text-decoration-underline">
                      Themesbrand
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default LiveClass1;
