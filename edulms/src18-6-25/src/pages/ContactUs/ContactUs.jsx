import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message);
      } else {
        const error = await response.json();
        alert(error.message);
      }
    } catch (err) {
      console.error("Error sending email: ", err);
      alert("Error sending email. Please try again later.");
    }
  };

  return (
    <>
      <section className="breadcrumbs">
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <div className="breadcrumbs__content">
                <div className="breadcrumbs__item">
                  <Link to="/">Home</Link>
                </div>
                <div className="breadcrumbs__item">
                  <Link to="/ContactUs">ContactUs</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__title">ContactUs</h1>
                </div>
                <div>
                  <p className="page-header__text">
                    We’re on a mission to deliver engaging, curated courses at a
                    reasonable price.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <section className="layout-pt-md layout-pb-lg">
          <div className="container">
            <div className="row y-gap-50 justify-between">
              {/* Guntur Address */}
              <div className="col-lg-6 mb-4">
                <h3 className="text-24 fw-500">Nipuna Technologies Guntur</h3>
                <p>6-4-46, arundelpet, Revenue Ward 17, GUNTUR, Guntur, Andhra Pradesh, 522002</p>
                <p>Email: <a href="mailto:admin@nipunatechnologies.com">admin@nipunatechnologies.com</a></p>
                <p>Phone: <a href="tel:+917997927111">+91 7997927111</a></p>
                <p>Monday-Sunday: 7am–10pm</p>
                <div className="mb-10"> </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.4002095596475!2d80.44036659999999!3d16.3024828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a7521c601ef99%3A0xa70a97b0a0c7c39!2sNipuna%20Technologies!5e0!3m2!1sen!2sin!4v1747646648634!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Guntur Map"
                ></iframe>
              </div>

              {/* Vijayawada Address */}
              <div className="col-lg-6 mb-4">
                <h3 className="text-24 fw-500">Nipuna Technologies Vijayawada</h3>
                <p>Door No : 40-27-88/1, 3rd Floor, Lohia Towers, KP Nagar, Opposite Nirmala Convent, Vijayawada-520010</p>
                <p>Email: <a href="mailto:admin@nipunatechnologies.com">admin@nipunatechnologies.com</a></p>
                <p>Phone: <a href="tel:+919985858639">+91 9985858639</a></p>
                <p>Monday-Sunday: 7am–10pm</p>
                <div className="mb-10"> </div>


                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.549839350099!2d80.65432217412045!3d16.498316427810213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb63a1e739cf%3A0x3d0b693e2e24a758!2sNipuna%20Technologies!5e0!3m2!1sen!2sin!4v1747646776648!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vijayawada Map"
                ></iframe>
              </div>

              {/* Form Section Below Maps */}
              <div className="col-12 mt-5">
                <h3 className="text-24 fw-500">Send a Message.</h3>
                <p className="mt-25">
                  
                </p>
                <form className="contact-form row y-gap-30 pt-60 lg:pt-40" onSubmit={handleSubmit}>
                  <div className="col-md-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Name</label>
                    <input
                      type="text"
                      name="fullname"
                      placeholder="Full Name"
                      value={formData.fullname}
                      onChange={handleChange}
                      required
                      style={{ color: "black" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{ color: "black" }}
                    />
                  </div>
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Message...</label>
                    <textarea
                      name="description"
                      placeholder="Description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      style={{ color: "black" }}
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      name="submit"
                      id="submit"
                      className="button -md -purple-1 text-white"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
