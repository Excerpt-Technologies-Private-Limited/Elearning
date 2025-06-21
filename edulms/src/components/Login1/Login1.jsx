import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom"; // For routing to sign up page


const Login = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
      });

      const navigate = useNavigate();

    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        navigate('/dashboard');

      };
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

        <div className="form-page__content lg:py-50">
          <div className="container">
            <div className="row justify-center items-center">
              <div className="col-xl-6 col-lg-8">
                <div className="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16">
                  <h3 className="text-30 lh-13">Login</h3>
                  <p className="mt-10">
                    Don't have an account yet?{" "}
                    <Link className="text-purple-1" to="/signup">
                      Sign up for free
                    </Link>
                  </p>
                  <form
                    className="contact-form respondForm__form row y-gap-20 pt-30"
                    onSubmit={handleSubmit}
                  >
                    <div className="col-12">
                      <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                        Username Or Email
                      </label>
                      <input
                        required
                        placeholder="Name"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12">
                      <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                        Password
                      </label>
                      <input
                        required
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        name="submit"
                        id="submit"
                        className="button -md -green-1 text-dark-1 fw-500 w-1/1"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                  <div className="lh-12 text-dark-1 fw-500 text-center mt-20">
                     Forget Password?
                     
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    </div>
  )
}

export default Login
