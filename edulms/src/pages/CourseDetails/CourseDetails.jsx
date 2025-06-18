import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from '../../context/CartContext';
import { useLocation } from 'react-router-dom';
const CourseDetails = () => {
  const { addToCart } = useCart();
  const location = useLocation();
  const [courseDetails, setCourseDetails] = useState(null);
  const { courseId } = location.state || {};
  console.log("Course ID:", courseId); // Log the courseId to verify it's being passed correctly
  useEffect(() => {
    fetch(`http://localhost:8080/api/courses/${courseId}`)
      .then((response) => response.json())
      .then((data) => {
        setCourseDetails(data); // Set the course details in state
        console.log("Course Details:", data); // Log the course details
        // You can use this data to populate your component state or props
      })
      .catch((error) => {
        console.error("Error fetching course details:", error);
      });
  }, [courseId]); // Fetch course details when component mounts or courseId changes

  return (
    <div>
      <section class="breadcrumbs  ">
        <div class="container">
          <div class="row">
            <div class="col-auto">
              <div class="breadcrumbs__content">
                <div class="breadcrumbs__item  ">
                  <Link to="/">Home</Link>
                </div>
                <div class="breadcrumbs__item  ">
                  <Link to="/courses-list-3">Course Details</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="js-pin-container" className="js-pin-container relative">
        <section class="page-header -type-5 bg-light-6">
          <div class="page-header__bg">
            <div
              class="bg-image js-lazy"
              data-bg="img/event-single/bg.png"
            ></div>
          </div>
          <div class="container">
            <div class="page-header__content pt-90 pb-90">
              <div class="row y-gap-30">
                <div class="col-xl-7 col-lg-8">
                  <div class="d-flex x-gap-15 y-gap-10 pb-20">
                    <div>
                      <div class="badge px-15 py-8 text-11 bg-green-1 text-dark-1 fw-400">
                        BEST SELLER
                      </div>
                    </div>
                    <div>
                      <div class="badge px-15 py-8 text-11 bg-orange-1 text-white fw-400">
                        NEW
                      </div>
                    </div>
                    <div>
                      <div class="badge px-15 py-8 text-11 bg-purple-1 text-white fw-400">
                        POPULAR
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1 class="text-30 lh-14 pr-60 lg:pr-0">
                      {courseDetails ? courseDetails.courseName : "Loading..."}
                    </h1>
                  </div>
                  <p class="col-xl-9 mt-20">
                    {courseDetails ? courseDetails.learningObjectives : "Loading..."}
                  </p>
                  <div class="d-flex x-gap-30 y-gap-10 items-center flex-wrap pt-20">
                    <div class="d-flex items-center">
                      <div class="text-14 lh-1 text-yellow-1 mr-10">4.3</div>
                      <div class="d-flex x-gap-5 items-center">
                        <div class="icon-star text-11 text-yellow-1 "></div>
                        <div class="icon-star text-11 text-yellow-1 "></div>
                        <div class="icon-star text-11 text-yellow-1 "></div>
                        <div class="icon-star text-11 text-yellow-1 "></div>
                        <div class="icon-star text-11 text-yellow-1 "></div>
                      </div>
                      <div class="text-14 lh-1 text-light-1 ml-10">(1991)</div>
                    </div>
                    <div class="d-flex items-center text-light-1">
                      <div class="icon icon-person-3 text-13"></div>
                      <div class="text-14 ml-8">
                        853 enrolled on this course
                      </div>
                    </div>
                    <div class="d-flex items-center text-light-1">
                      <div class="icon icon-wall-clock text-13"></div>
                      <div class="text-14 ml-8">Last updated 11/2021</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          id="js-pin-container"
          className="courses-single-info js-pin-content"
          style={{ height: "100%", right: "7%", paddingTop: "80px" }}
        >
          <div
            class="bg-white shadow-2 rounded-8 border-light py-10 px-10"
            style={{ position: "sticky", top: "100px" }}
          >
            <div class="relative">
              <img
                alt="image"
                loading="lazy"
                width="368"
                height="238"
                decoding="async"
                data-nimg="1"
                class="w-1/1"
                src={`/${courseDetails ? courseDetails.courseImages[0] : "Loading..."}`}
                style={{ color: "transparent" }}
              />
              <div class="absolute-full-center d-flex justify-center items-center">
                <div
                  class="d-flex justify-center items-center size-60 rounded-full bg-white js-gallery cursor"
                  data-gallery="gallery1"
                >
                  <div class="icon-play text-18"></div>
                </div>
              </div>
            </div>
            <div class="courses-single-info__content scroll-bar-1 pt-30 pb-20 px-20">
              <div class="d-flex justify-between items-center mb-30">
                <div class="text-24 lh-1 text-dark-1 fw-500">₹{courseDetails?.price}</div>
                <div class="lh-1 line-through">₹{courseDetails?.price}</div>
              </div>
              <button class="button -md -purple-1 text-white w-1/1">
                <Link to="/CourseCart" onClick={() => addToCart(courseDetails)}>
                  Add to Cart</Link>
              </button>
              <button class="button -md -outline-dark-1 text-dark-1 w-1/1 mt-10">
                <Link to="/coursCheckOut">Buy Now</Link>
              </button>
              <div class="text-14 lh-1 text-center mt-30">
                30-Day Money-Back Guarantee
              </div>
              <div class="mt-25">
                <div class="d-flex justify-between py-8 ">
                  <div class="d-flex items-center text-dark-1">
                    <div class="icon-video-file"></div>
                    <div class="ml-10">Lessons</div>
                  </div>
                  <div>20</div>
                </div>
                <div class="d-flex justify-between py-8 border-top-light">
                  <div class="d-flex items-center text-dark-1">
                    <div class="icon-puzzle"></div>
                    <div class="ml-10">Quizzes</div>
                  </div>
                  <div>3</div>
                </div>
                <div class="d-flex justify-between py-8 border-top-light">
                  <div class="d-flex items-center text-dark-1">
                    <div class="icon-clock-2"></div>
                    <div class="ml-10">Duration</div>
                  </div>
                  <div>13 Hours</div>
                </div>
                <div class="d-flex justify-between py-8 border-top-light">
                  <div class="d-flex items-center text-dark-1">
                    <div class="icon-bar-chart-2"></div>
                    <div class="ml-10">Skill level</div>
                  </div>
                  <div>Beginner</div>
                </div>
                <div class="d-flex justify-between py-8 border-top-light">
                  <div class="d-flex items-center text-dark-1">
                    <div class="icon-translate"></div>
                    <div class="ml-10">Language</div>
                  </div>
                  <div>English</div>
                </div>
                <div class="d-flex justify-between py-8 border-top-light">
                  <div class="d-flex items-center text-dark-1">
                    <div class="icon-badge"></div>
                    <div class="ml-10">Certificate</div>
                  </div>
                  <div>Yes</div>
                </div>
                <div class="d-flex justify-between py-8 border-top-light">
                  <div class="d-flex items-center text-dark-1">
                    <div class="icon-infinity"></div>
                    <div class="ml-10">Full lifetime access</div>
                  </div>
                  <div>Yes</div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <section className="layout-pt-md layout-pb-md">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div class="page-nav-menu -line">
                  <div class="d-flex x-gap-30">
                    <div>
                      <Link
                        to="#overview"
                        class="pb-12 page-nav-menu__link is-active"
                      >
                        Overview
                      </Link>
                    </div>

                  </div>
                </div>

                <div id="overview" class="pt-60 lg:pt-40 to-over">
                  <h4 class="text-18 fw-500">Description</h4>
                  <div class="">
                    <div class="">
                      <p>{courseDetails ? courseDetails.description : "Loading..."}</p>
                    </div>

                  </div>
                  <div class="mt-60">
                    <h4 class="text-20 mb-30">What you'll learn</h4>
                    <div class="row x-gap-100 justfiy-between">
                      <div class="col-md-6">
                        <div class="y-gap-20">
                          <div class="d-flex items-center">
                            <div class="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="check"
                                class="svg-inline--fa fa-check "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                style={{
                                  transform: "scale(0.7)",
                                  opacity: "0.7",
                                }}
                              >
                                <path
                                  fill="currentColor"
                                  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                ></path>
                              </svg>
                            </div>
                            <p>Become a UX designer.</p>
                          </div>
                          <div class="d-flex items-center">
                            <div class="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="check"
                                class="svg-inline--fa fa-check "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                style={{
                                  transform: "scale(0.7)",
                                  opacity: "0.7",
                                }}
                              >
                                <path
                                  fill="currentColor"
                                  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                ></path>
                              </svg>
                            </div>
                            <p>
                              You will be able to add UX designer to your CV
                            </p>
                          </div>
                          <div class="d-flex items-center">
                            <div class="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="check"
                                class="svg-inline--fa fa-check "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                style={{
                                  transform: "scale(0.7)",
                                  opacity: "0.7",
                                }}
                              >
                                <path
                                  fill="currentColor"
                                  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                ></path>
                              </svg>
                            </div>
                            <p>Become a UI designer.</p>
                          </div>
                          <div class="d-flex items-center">
                            <div class="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="check"
                                class="svg-inline--fa fa-check "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                style={{
                                  transform: "scale(0.7)",
                                  opacity: "0.7",
                                }}
                              >
                                <path
                                  fill="currentColor"
                                  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                ></path>
                              </svg>
                            </div>
                            <p>Build &amp; test a full website design.</p>
                          </div>
                          <div class="d-flex items-center">
                            <div class="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="check"
                                class="svg-inline--fa fa-check "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                style={{
                                  transform: "scale(0.7)",
                                  opacity: "0.7",
                                }}
                              >
                                <path
                                  fill="currentColor"
                                  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                ></path>
                              </svg>
                            </div>
                            <p>Create your first UX brief &amp; persona.</p>
                          </div>
                          <div class="d-flex items-center">
                            <div class="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="check"
                                class="svg-inline--fa fa-check "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                style={{
                                  transform: "scale(0.7)",
                                  opacity: "0.7",
                                }}
                              >
                                <path
                                  fill="currentColor"
                                  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                ></path>
                              </svg>
                            </div>
                            <p>How to use premade UI kits.</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="y-gap-20">
                          <div class="d-flex items-center">
                            <div class="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="check"
                                class="svg-inline--fa fa-check "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                style={{
                                  transform: "scale(0.7)",
                                  opacity: "0.7",
                                }}
                              >
                                <path
                                  fill="currentColor"
                                  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                ></path>
                              </svg>
                            </div>
                            <p>Create quick wireframes.</p>
                          </div>
                          <div class="d-flex items-center">
                            <div class="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="check"
                                class="svg-inline--fa fa-check "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                style={{
                                  transform: "scale(0.7)",
                                  opacity: "0.7",
                                }}
                              >
                                <path
                                  fill="currentColor"
                                  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                ></path>
                              </svg>
                            </div>
                            <p>Downloadable exercise files</p>
                          </div>
                          <div class="d-flex items-center">
                            <div class="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="check"
                                class="svg-inline--fa fa-check "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                style={{
                                  transform: "scale(0.7)",
                                  opacity: "0.7",
                                }}
                              >
                                <path
                                  fill="currentColor"
                                  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                ></path>
                              </svg>
                            </div>
                            <p>Build a UX project from beginning to end.</p>
                          </div>
                          <div class="d-flex items-center">
                            <div class="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="check"
                                class="svg-inline--fa fa-check "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                style={{
                                  transform: "scale(0.7)",
                                  opacity: "0.7",
                                }}
                              >
                                <path
                                  fill="currentColor"
                                  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                ></path>
                              </svg>
                            </div>
                            <p>
                              Learn to design websites &amp; mobile phone apps.
                            </p>
                          </div>
                          <div class="d-flex items-center">
                            <div class="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="check"
                                class="svg-inline--fa fa-check "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                style={{
                                  transform: "scale(0.7)",
                                  opacity: "0.7",
                                }}
                              >
                                <path
                                  fill="currentColor"
                                  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                ></path>
                              </svg>
                            </div>
                            <p>All the techniques used by UX professionals</p>
                          </div>
                          <div class="d-flex items-center">
                            <div class="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="check"
                                class="svg-inline--fa fa-check "
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                style={{
                                  transform: "scale(0.7)",
                                  opacity: "0.7",
                                }}
                              >
                                <path
                                  fill="currentColor"
                                  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                                ></path>
                              </svg>
                            </div>
                            <p>
                              You will be able to talk correctly with other UX
                              design.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-60">
                    <h4 class="text-20">Requirements</h4>
                    {courseDetails ? (
                      <div class="text-14 mt-20">
                        <p>{courseDetails.requirements}</p>
                      </div>
                    ) : (
                      <p>Loading requirements...</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CourseDetails;
