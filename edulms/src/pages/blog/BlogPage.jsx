import React, { useState } from "react";

const blogs = [
  {
    img: "/assets/img/Elearning/Blog1.jpg",
    category: "EDUCATION",
    title: "Engendering a culture of professional development",
    date: "February 18, 2023",
    link: "/blogs/2",
  },
  {
    img: "/assets/img/Elearning/Blog2.jpg",
    category: "BUSINESS",
    title: "Increasing engagement with Instagram",
    date: "March 27, 2023",
    link: "/blogs/3",
  },
  {
    img: "/assets/img/Elearning/Blog3.jpg",
    category: "BUSINESS",
    title: "How to design a simple, yet unique and memorable brand identity",
    date: "April 14, 2023",
    link: "/blogs/4",
  },
  {
    img: "/assets/img/Elearning/Blog4.jpg",
    category: "PHOTO & FILM",
    title: "5 marketing trends that you should be prepared for in 2022",
    date: "May 22, 2023",
    link: "/blogs/5",
  },
  {
    img: "/assets/img/Elearning/Blog5.jpg",
    category: "LIFESTYLE",
    title: "8 great design trends that are making a come-back in 2021",
    date: "June 8, 2023",
    link: "/blogs/6",
  },
  {
    img: "/assets/img/Elearning/Blog6.jpg",
    category: "ILLUSTRATION",
    title: "How to be more creative: 5 cool tips to find inspiration everywhere",
    date: "July 17, 2023",
    link: "/blogs/7",
  },
  {
    img: "/assets/img/Elearning/Blog7.jpg",
    category: "DESIGN",
    title: "8 interesting programming languages you should be paying attention to",
    date: "August 3, 2023",
    link: "/blogs/8",
  },
  {
    img: "/assets/img/Elearning/Blog8.jpg",
    category: "ANIMATION",
    title: "19 ways to optimize your ad marketing budget efficiently",
    date: "September 12, 2023",
    link: "/blogs/9",
  },
  {
    img: "/assets/img/Elearning/Blog9.jpg",
    category: "WRITING",
    title: "Write compelling content that converts: Tips and tricks",
    date: "October 10, 2023",
    link: "/blogs/10",
  },
];

const BlogPage = () => {
  const blogsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div>
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        {/* Breadcrumb Section */}
        <section className="breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col-auto">
                <div className="breadcrumbs__content">
                  <div className="breadcrumbs__item">
                    <a href="/">Home</a>
                  </div>
                  <div className="breadcrumbs__item">
                    <a href="/courses-list-3">All courses</a>
                  </div>
                  <div className="breadcrumbs__item">
                    <a href="/courses-list-5">User Experience Design</a>
                  </div>
                  <div className="breadcrumbs__item">
                    <a href="/courses-list-6">User Interface</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Page Header Section */}
        <section className="page-header -type-1">
          <div className="container">
            <div className="page-header__content">
              <div className="row justify-center text-center">
                <div className="col-auto">
                  <div>
                    <h1 className="page-header__title">Latest News</h1>
                  </div>
                  <div>
                    <p className="page-header__text">
                      We’re on a mission to deliver engaging, curated courses at a reasonable price.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="layout-pt-sm layout-pb-lg">
          <div className="container">
            <div className="tabs -pills js-tabs">
              {/* Tabs buttons here... */}

              <div className="tabs__content pt-40 js-tabs-content">
                <div className="tabs__pane -tab-item-1 is-active">
                  <div className="row y-gap-30">
                    {currentBlogs.map((blog, idx) => (
                      <div key={idx} className="col-lg-4 col-md-6">
                        <div className="blogCard -type-1">
                          <div className="blogCard__image">
                            <img
                              alt={blog.title}
                              loading="lazy"
                              decoding="async"
                              src={blog.img}
                              srcSet={`${blog.img} 1x, ${blog.img} 2x`}
                              style={{
                                width: "100%",
                                height: "450px",
                                objectFit: "cover",
                                borderRadius: "8px",
                              }}
                            />
                          </div>
                          <div className="blogCard__content mt-20">
                            <div className="blogCard__category">{blog.category}</div>
                            <h4 className="blogCard__title text-20 lh-15 fw-500 mt-5">
                              <a className="linkCustom" href={blog.link}>
                                {blog.title}
                              </a>
                            </h4>
                            <div className="blogCard__date text-14 mt-5">{blog.date}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pagination */}
                  <div
                    className="pagination flex justify-center items-center gap-4 mt-40"
                    style={{ textAlign: "center" }}
                  >
                    <button
                      onClick={handlePrev}
                      disabled={currentPage === 1}
                      className="btn btn-secondary"
                      style={{
                        padding: "8px 16px",
                        cursor: currentPage === 1 ? "not-allowed" : "pointer",
                        opacity: currentPage === 1 ? 0.5 : 1,
                      }}
                    >
                      Previous
                    </button>
                    <span className="text-16 pt-2">
                      Page {currentPage} of {totalPages}
                    </span>
                    <button
                      onClick={handleNext}
                      disabled={currentPage === totalPages}
                      className="btn btn-secondary"
                      style={{
                        padding: "8px 16px",
                        cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                        opacity: currentPage === totalPages ? 0.5 : 1,
                      }}
                    >
                      Next
                    </button>
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

export default BlogPage;
