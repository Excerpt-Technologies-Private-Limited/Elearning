import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <section className="form-page js-mouse-move-container">
          <div className="form-page__img bg-dark-1">
            <div className="form-page-composition">
              <div className="-bg">
                <img
                  data-move="30"
                  alt="bg"
                  loading="lazy"
                  width="1250"
                  height="1000"
                  decoding="async"
                  data-nimg="1"
                  className="js-mouse-move"
                  src="/_next/image?url=%2Fassets%2Fimg%2Flogin%2Fbg.png&w=3840&q=75"
                  style={{
                    color: "transparent",
                    width: "100%",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(15.235px, 1.2194px)",
                  }}
                />
              </div>
              <div className="-el-1">
                <img
                  data-move="20"
                  alt="image"
                  loading="lazy"
                  width="1250"
                  height="1000"
                  decoding="async"
                  data-nimg="1"
                  className="js-mouse-move"
                  src="https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fhome-9%2Fhero%2F1.png&w=640&q=75"
                  style={{
                    color: "transparent",
                    width: "100%",
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(10.1567px, 0.8129px)",
                  }}
                />
              </div>
            </div>
          </div>

          <div class="form-page__content lg:py-50">
            <div class="container">
              <div class="row justify-center items-center">
                <div class="col-xl-8 col-lg-9">
                  <div class="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16">
                    <h3 class="text-30 lh-13">Sign Up</h3>
                    <p class="mt-10">
                      Already have an account?
                      <Link class="text-purple-1" to="/login">
                        Log in
                      </Link>
                    </p>
                    <form class="contact-form respondForm__form row y-gap-20 pt-30">
                      <div class="col-lg-6">
                        <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                          Email address *
                        </label>
                        <input
                          required=""
                          placeholder="Email address"
                          type="text"
                          name="title"
                        />
                      </div>
                      <div class="col-lg-6">
                        <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                          Username *
                        </label>
                        <input
                          required=""
                          placeholder="Username"
                          type="text"
                          name="title"
                        />
                      </div>
                      <div class="col-lg-6">
                        <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                          Password *
                        </label>
                        <input
                          required=""
                          placeholder="Password"
                          type="text"
                          name="title"
                        />
                      </div>
                      <div class="col-lg-6">
                        <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                          Confirm Password *
                        </label>
                        <input
                          required=""
                          placeholder="Confirm Password"
                          type="text"
                          name="title"
                        />
                      </div>
                      <div class="col-12">
                        <button
                          type="submit"
                          name="submit"
                          id="submit"
                          class="button -md -green-1 text-dark-1 fw-500 w-1/1"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                    
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

export default Register;
