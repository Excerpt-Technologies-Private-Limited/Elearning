import React from "react";
import "./LiveClass.css";
import Header1 from "../../Header/Header";
import SideNavBar1 from "../../SideNavBar/SideNavBar";

const LiveClass1 = () => {
  return (
    <>
    <Header1 />
    <SideNavBar1 />
    <div  className="main-content">
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
                          <p class="text-muted font-size-15">20 June, 2022</p>
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

                  <div class="mt-4">
                    <div class="text-muted font-size-14">
                      <p>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit, sed quia non
                        numquam eius modi tempora incidunt ut labore et dolore
                        magnam enim ad minima veniam quis
                      </p>

                      <p class="mb-4">
                        Ut enim ad minima veniam, quis nostrum exercitationem
                        ullam corporis suscipit laboriosam, nisi ut aliquid ex
                        ea reprehenderit qui in ea voluptate velit esse quam
                        nihil molestiae consequatur, vel illum qui dolorem eum
                        fugiat quo voluptas nulla pariatur? At vero eos et
                        accusamus et iusto odio dignissimos ducimus qui
                        blanditiis praesentium voluptatum deleniti atque
                        corrupti quos dolores et quas molestias excepturi sint
                        occaecati cupiditate non provident, similique sunt
                      </p>

                      <blockquote class="p-4 border-light border rounded mb-4">
                        <div class="d-flex">
                          <div class="me-3">
                            <i class="bx bxs-quote-alt-left text-body font-size-24"></i>
                          </div>
                          <div>
                            <p class="mb-0">
                              {" "}
                              At vero eos et accusamus et iusto odio dignissimos
                              ducimus qui blanditiis praesentium deleniti atque
                              corrupti quos dolores et quas molestias excepturi
                              sint quidem rerum facilis est
                            </p>
                          </div>
                        </div>
                      </blockquote>

                      <p>
                        Itaque earum rerum hic tenetur a sapiente delectus, ut
                        aut reiciendis voluptatibus maiores alias consequatur
                        aut perferendis doloribus asperiores repellat. Sed ut
                        perspiciatis unde omnis iste natus error sit
                      </p>

                      <div class="mt-4">
                        <h5 class="mb-3">Title: </h5>

                        <div>
                          <div class="row">
                            <div class="col-lg-4 col-sm-6">
                              <div>
                                <ul class="ps-4">
                                  <li class="py-1">Donec sodales sagittis</li>
                                  <li class="py-1">Sed consequat leo eget</li>
                                  <li class="py-1">Aliquam lorem ante</li>
                                </ul>
                              </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                              <div>
                                <ul class="ps-4">
                                  <li class="py-1">Aenean ligula eget</li>
                                  <li class="py-1">Cum sociis natoque</li>
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
            </div>
          </div>

          <div class="col-lg-4 ">
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
                      <i class="mdi mdi-magnify search-icon"></i>
                    </div>
                  </div>
                  <div class="mt-5">
                    <h5 class="mb-3">Lesson</h5>
                    <ul class="list-unstyled fw-medium px-2">
                      <li>
                        <a
                          href="javascript: void(0);"
                          class="text-body pb-3 d-block border-bottom"
                        >
                          Design & Prototype
                          <span class="badge bg-primary-subtle text-primary rounded-pill ms-1 float-end font-size-12">
                            02
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript: void(0);"
                          class="text-body py-3 d-block border-bottom"
                        >
                          Create with figma{" "}
                          <span class="badge bg-primary-subtle text-primary rounded-pill float-end ms-1 font-size-12">
                            04
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript: void(0);"
                          class="text-body py-3 d-block border-bottom"
                        >
                          Color picker
                          <span class="badge bg-primary-subtle text-primary rounded-pill ms-1 float-end font-size-12">
                            12
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript: void(0);"
                          class="text-body py-3 d-block border-bottom"
                        >
                          Typography
                          <span class="badge bg-primary-subtle text-primary rounded-pill ms-1 float-end font-size-12">
                            08
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript: void(0);"
                          class="text-body pt-3 pb-0 d-block"
                        >
                          Components
                          <span class="badge bg-primary-subtle text-primary rounded-pill ms-1 float-end font-size-12">
                            10
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="mt-5">
                    <h5 class="mb-3">Tag Clouds</h5>
                    <div class="px-2">
                      <a href="#" class="font-size-17">
                        <span class="badge bg-primary-subtle text-primary">
                          Design
                        </span>
                      </a>
                      <a href="#" class="font-size-17">
                        <span class="badge bg-primary-subtle text-primary">
                          Development
                        </span>
                      </a>
                      <a href="#" class="font-size-17">
                        <span class="badge bg-primary-subtle text-primary">
                          Wordpress
                        </span>
                      </a>
                      <a href="#" class="font-size-17">
                        <span class="badge bg-primary-subtle text-primary">
                          HTML
                        </span>
                      </a>
                      <a href="#" class="font-size-17">
                        <span class="badge bg-primary-subtle text-primary">
                          Project
                        </span>
                      </a>
                      <a href="#" class="font-size-17">
                        <span class="badge bg-primary-subtle text-primary">
                          Business
                        </span>
                      </a>
                      <a href="#" class="font-size-17">
                        <span class="badge bg-primary-subtle text-primary">
                          Travel
                        </span>
                      </a>
                      <a href="#" class="font-size-17">
                        <span class="badge bg-primary-subtle text-primary">
                          Photography
                        </span>
                      </a>
                    </div>
                  </div>

                  <div class="mt-5">
                    <h5 class="mb-3">Email Newsletter</h5>
                    <div class="">
                      <div class="input-group mb-0 px-2">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter Email"
                        />
                        <div class="input-group-append">
                          <span class="input-group-text">
                            <i class="mdi mdi-send-outline"></i>
                          </span>
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

      <footer class="footer">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6">
              <script>document.write(new Date().getFullYear())</script> © Minia.
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
