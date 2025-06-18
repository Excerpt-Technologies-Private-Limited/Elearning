import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer -type-1 bg-dark-1 -green-links">
        <div className="container">
          <div className="footer-header">
            <div className="row y-gap-20 justify-between items-center">
              <div className="col-auto">
                <div className="footer-header__logo">
                  <img
                    alt="logo"
                    loading="lazy"
                    width="140"
                    height="50"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src="/assets/img/general/logo.svg"
                  />
                </div>
              </div>
              <div className="col-auto">
                <div className="footer-header-socials">
                  <div className="footer-header-socials__title text-white">
                    Follow us on social media
                  </div>
                  <div className="footer-header-socials__list">
                    <a className="" href="#">
                      <i className="icon-facebook undefined"></i>
                    </a>
                    <a className="" href="#">
                      <i className="icon-twitter undefined"></i>
                    </a>
                    <a className="" href="#">
                      <i className="icon-instagram undefined"></i>
                    </a>
                    <a className="" href="#">
                      <i className="icon-linkedin undefined"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-columns">
            <div className="row y-gap-30">
              {/* <div className="col-xl-2 col-lg-4 col-md-6">
                <div className="text-17 fw-500 text-white uppercase mb-25">
                  ABOUT
                </div>
                <div className="d-flex y-gap-10 flex-column">
                  <a href="/about-1">About Us</a>
                  <a href="/blog-list-1">Learner Stories</a>
                  <a href="/instructor-become">Careers</a>
                  <a href="/blog-list-1">Press</a>
                  <a href="#">Leadership</a>
                  <a href="/contact-1">Contact Us</a>
                </div>
              </div> */}
              <div className="col-xl-2 col-lg-4 col-md-6">
                <div className="text-17 fw-500 text-white uppercase mb-25">
                  COURSE
                </div>
                <div className="d-flex y-gap-10 flex-column">
                  <a href="/courses/1">Development</a>
                  <a href="/courses-single-2/3">Business</a>
                  <a href="/courses-single-3/3">Finance &amp; Accounting</a>
                  <a href="/courses-single-4/3">IT &amp; Software</a>
                  <a href="/courses-single-5/3">Office Productivity</a>
                  <a href="/courses-single-6/3">Design</a>
                  <a href="/courses/1">Marketing</a>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6">
                <div className="text-17 fw-500 text-white uppercase mb-25">
                  Others
                </div>
                <div className="d-flex y-gap-10 flex-column">
                  <a href="/courses/1">Lifestyle</a>
                  <a href="/courses-single-2/3">Photography &amp; Video</a>
                  <a href="/courses-single-3/3">Health &amp; Fitness</a>
                  <a href="/courses-single-4/3">Music</a>
                  <a href="/courses-single-5/3">UX Design</a>
                  <a href="/courses-single-6/3">SEO</a>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6">
                <div className="text-17 fw-500 text-white uppercase mb-25">
                  SUPPORT
                </div>
                <div className="d-flex y-gap-10 flex-column">
                  <Link to="/terms">Documentation</Link>
                  <Link to="/help-center">FAQs</Link>
                  <Link to="/dashboard">Dashboard</Link>
                  <Link to="/ContactUs">Contact</Link>
                </div>
              </div>
              {/* <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="text-17 fw-500 text-white uppercase mb-25">
                  GET IN TOUCH
                </div>
                <div className="footer-columns-form">
                  <div>We don’t send spam so don’t worry.</div>
                  <form>
                    <div className="form-group">
                      <input required="" type="text" placeholder="Email..." />
                      <button type="submit">Submit</button>
                    </div>
                  </form>
                </div>
              </div> */}
            </div>
          </div>
          <div className="py-30 border-top-light-15">
            <div className="row justify-between items-center y-gap-20">
              <div className="col-auto">
                <div className="d-flex items-center h-100 text-white">
                  © 2025 Educrat. All Right Reserved.
                </div>
              </div>
              <div className="col-auto">
                <div className="d-flex x-gap-20 y-gap-20 items-center flex-wrap">
                  <div>
                    <div className="d-flex x-gap-15 text-white">
                      
                      <Link className="" to="/PrivacyPolicy">
                        Privacy Policy
                      </Link>
                      <Link className="" to="/TermConditions">
                        Terms of Use
                      </Link>
                    </div>
                  </div>
                  <div>
                    <a
                      className="button px-30 h-50 -dark-6 rounded-200 text-white"
                      href="#"
                    >
                      <i className="icon-worldwide text-20 mr-15"></i>
                      <span className="text-15">English</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
