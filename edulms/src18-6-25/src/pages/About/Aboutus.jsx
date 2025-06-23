import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Aboutus = () => {
  useEffect(() => {
  AOS.init();
}, []);
  return (
   <>
     <section class="breadcrumbs  ">
            <div class="container">
                <div class="row">
                    <div class="col-auto">
                        <div class="breadcrumbs__content">
                            <div class="breadcrumbs__item  "><a href="/">Home</a></div>
                            <div class="breadcrumbs__item  "><a href="/courses-list-3">All courses</a></div>
                            <div class="breadcrumbs__item  "><a href="/courses-list-5">User Experience Design</a></div>
                            <div class="breadcrumbs__item  "><a href="/courses-list-6">User Interface</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         <section class="page-header -type-1">
            <div class="container">
                <div class="page-header__content">
                    <div class="row justify-center text-center">
                        <div class="col-auto">
                            <div>
                                <h1 class="page-header__title">About Us</h1>
                            </div>
                            <div>
                                <p class="page-header__text">We’re on a mission to deliver engaging, curated courses at a reasonable price.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         <section class="layout-pt-md layout-pb-lg">
            <div class="container">
                <div class="row y-gap-50 justify-between items-center">
                    <div class="col-lg-6 pr-50 sm:pr-15">
                        <div class="composition -type-8">
  
<div className="-el-1">
  <img
    alt="image"
    loading="lazy"
    width={300}
    height={400}
    decoding="async"
    style={{ color: "transparent" }}
    src="https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fabout-1%2F1.png&w=384&q=75"
  />
</div>


<img
  alt="image"
  loading="lazy"
  width={300}
  height={400}
  decoding="async"
  style={{ color: "transparent" }}
  srcSet="https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fabout-1%2F1.png&w=384&q=75 1x, https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fabout-1%2F1.png&w=384&q=75 2x"
  src="https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fabout-1%2F1.png&w=384&q=75"
/>



<div className="-el-3">
  <img
    alt="image"
    loading="lazy"
    width={300}
    height={400}
    decoding="async"
    style={{ color: "transparent" }}
    srcSet="/assets/img/3.webp 2x"
    src="/assets/img/3.webp"
  />
</div>

                        </div>
                    </div>
                    <div class="col-lg-5">
                        <h2 class="text-24 lh-16">Welcome to NIPUNA TECHNOLOGIES  Enhance your skills with best Online courses</h2>
                        <p class="text-dark-1 mt-30">ABOUT NIPUNA TECHNOLOGIES Learn & Grow with Nipuna Technologies Nipuna Technologies the best Software Training Institute in Guntur, is dedicated to providing you an exceptional quality of education to help you thrive in the IT industry. We equip learners both technically and professionally, allowing them to learn and grow. We at Nipuna Technologies are dedicated to giving you the confidence and skill to land your dream role. Our objective is not just improving your skills but also helping you monetize them with placement opportunities.

Increase your chances of getting a job by taking advantage of placement-oriented software training at Nipuna Technologies. We offer a diverse set of job-oriented courses while providing students with world-class training from working professionals and live projects.</p>
                        <div
                            class="d-inline-block"><a class="button -md -purple-1 text-white mt-30" href="/signup">Start Learning For Free</a>
                            </div>
                </div>
            </div>
    </div>
    </section>
<section className="layout-pt-md layout-pb-md">
  <div className="container">
    <div className="row y-gap-40 justify-between">
      {/* Mission Box */}
      <div className="col-lg-5 col-md-6">
        <div
          className="mission-box px-30 py-50 bg-white rounded-16 shadow transition"
          style={{
            minHeight: '300px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
            e.currentTarget.style.backgroundColor = '#f3f0ff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            e.currentTarget.style.backgroundColor = '#ffffff';
          }}
        >
          <h2 className="text-22 fw-700 mb-20">Our Mission</h2>
          <p className="text-dark-1 text-16 lh-28">
            To empower individuals with cutting-edge skills through high-quality training and hands-on experience,
            ensuring readiness for the global IT industry.
          </p>
        </div>
      </div>

      {/* Vision Box */}
      <div className="col-lg-5 col-md-6">
        <div
          className="vision-box px-30 py-50 bg-white rounded-16 shadow transition"
          style={{
            minHeight: '300px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
            e.currentTarget.style.backgroundColor = '#f0fbff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            e.currentTarget.style.backgroundColor = '#ffffff';
          }}
        >
          <h2 className="text-22 fw-700 mb-20">Our Vision</h2>
          <p className="text-dark-1 text-16 lh-28">
            To become a globally recognized institution for IT education by fostering a learning environment focused on
            innovation, excellence, and career success.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>





    
     <section class="layout-pt-lg layout-pb-lg">
        <div class="container">
            <div class="row y-gap-20 justify-center text-center">
                <div class="col-auto">
                    <div class="sectionTitle ">
                        <h2 class="sectionTitle__title ">How it works?</h2>
                        <p class="sectionTitle__text ">10,000+ unique online course list designs</p>
                    </div>
                </div>
            </div>
           <div className="row y-gap-30 justify-between pt-60 lg:pt-40">
{/* Step 1 */}
<div className="col-xl-2 col-lg-3 col-md-6">
  <div className="d-flex flex-column items-center text-center">
    <div className="relative size-120 d-flex justify-center items-center rounded-full bg-light-4">
      <img
        src="/assets/img/1.svg"
        alt="image"
        loading="lazy"
        width="50"
        height="50"
        decoding="async"
        style={{ color: "transparent" }}
      />
      <div className="side-badge">
        <div className="size-35 d-flex justify-center items-center rounded-full bg-dark-1 -dark-bg-purple-1">
          <span className="text-14 fw-500 text-white">01</span>
        </div>
      </div>
    </div>
    <div className="text-17 fw-500 text-dark-1 mt-30">
      Browse courses from our expert contributors.
    </div>
  </div>
</div>

  {/* Line Image */}
  <div className="col-auto xl:d-none">
    <div className="pt-30">
      <img
         src="/assets/img1.svg"
        alt="icon"
        width="142"
        height="21"
        loading="lazy"
        decoding="async"
        style={{ color: "transparent" }}
      />
    </div>
  </div>
{/* Step 2 */}
<div className="col-xl-2 col-lg-3 col-md-6">
  <div className="d-flex flex-column items-center text-center">
    <div className="relative size-120 d-flex justify-center items-center rounded-full bg-light-4">
      <img
        src="/assets/img/2.svg"
        alt="image"
        loading="lazy"
        width="50"
        height="50"
        decoding="async"
        style={{ color: "transparent" }}
      />
      <div className="side-badge">
        <div className="size-35 d-flex justify-center items-center rounded-full bg-dark-1 -dark-bg-purple-1">
          <span className="text-14 fw-500 text-white">02</span>
        </div>
      </div>
    </div>
    <div className="text-17 fw-500 text-dark-1 mt-30">
      Purchase quickly and securely.
    </div>
  </div>
</div>


  {/* Line Image */}
  <div className="col-auto xl:d-none">
    <div className="pt-30">
      <img
        src="/assets/img1.svg"
        alt="icon"
        width="142"
        height="21"
        loading="lazy"
        decoding="async"
        style={{ color: "transparent" }}
      />
    </div>
  </div>

  {/* Step 3 */}
  <div className="col-xl-2 col-lg-3 col-md-6">
    <div className="d-flex flex-column items-center text-center">
      <div className="relative size-120 d-flex justify-center items-center rounded-full bg-light-4">
        <img
         src="/assets/img/3.svg"
          alt="image"
          loading="lazy"
          width="50"
          height="50"
          decoding="async"
          style={{ color: "transparent" }}
        />
        <div className="side-badge">
          <div className="size-35 d-flex justify-center items-center rounded-full bg-dark-1 -dark-bg-purple-1">
            <span className="text-14 fw-500 text-white">03</span>
          </div>
        </div>
      </div>
      <div className="text-17 fw-500 text-dark-1 mt-30">
        That’s it! Start learning right away.
      </div>
    </div>
  </div>
</div>
        </div>
    </section>
    <section className="section-bg layout-pt-lg layout-pb-md">
  <div className="section-bg__item -full -height-half bg-dark-5"></div>
  <div className="container">
    <div className="row justify-center text-center">
      <div className="col-auto">
        <div className="sectionTitle">
          <h2 className="sectionTitle__title text-white">
            Start your Learning Journey Today!
          </h2>
        </div>
      </div>
    </div>

  <div className="row y-gap-30 justify-between pt-60 lg:pt-50">
  <div className="col-lg-3 col-md-6">
    <div
      className="coursesCard -type-2 text-center pt-50 pb-40 px-30 rounded-8 bg-white shadow-2"
      data-aos="fade-right"
      data-aos-duration="250"
    >
      <div className="coursesCard__image">
        <img
          src="/assets/a.svg"
          alt="Learn with Experts"
          loading="lazy"
          width="60"
          height="60"
          decoding="async"
          style={{ color: "transparent" }}
        />
      </div>
      <div className="coursesCard__content mt-30">
        <h5 className="coursesCard__title text-18 lh-1 fw-500">Expert Trainers</h5>
        <p className="coursesCard__text text-14 mt-10">
          At Nipuna Technologies, you will learn from experts in the field who are passionate about sharing their knowledge with students and have strong academic and practical skills at an expert level.
        </p>
      </div>

      
</div>
</div>
                 {/* Card 2 */}
  <div className="col-lg-3 col-md-6">
    <div className="coursesCard -type-2 text-center pt-50 pb-40 px-30 rounded-8 bg-white shadow-2" data-aos="fade-right" data-aos-duration="400">
      <div className="coursesCard__image">
        <img src="/assets/b.svg" alt="Learn Anything" width="60" height="60" loading="lazy" decoding="async" style={{ color: "transparent" }} />
      </div>
      <div className="coursesCard__content mt-30">
        <h5 className="coursesCard__title text-18 lh-1 fw-500">Certification</h5>
        <p className="coursesCard__text text-14 mt-10">Get Certified by Nipuna Technologies. We also offer lessons to help you pass Global Certifications. 80% of the students at Nipuna Technologies take Global Certifications, and everyone of them pass.</p>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="col-lg-3 col-md-6">
    <div className="coursesCard -type-2 text-center pt-50 pb-40 px-30 rounded-8 bg-white shadow-2" data-aos="fade-right" data-aos-duration="600">
      <div className="coursesCard__image">
        <img src="/assets/c.svg" alt="Flexible Learning" width="60" height="60" loading="lazy" decoding="async" style={{ color: "transparent" }} />
      </div>
      <div className="coursesCard__content mt-30">
        <h5 className="coursesCard__title text-18 lh-1 fw-500">Affordable Fees</h5>
        <p className="coursesCard__text text-14 mt-10">No other training center in Guntur can beat our prices. The Course Fee at Nipuna Technologies is not only cheap, but you can also pay it in installments. Our motto is "Quality Training for Less Money."</p>
      </div>
    </div>
  </div>

  {/* Card 4 */}
  <div className="col-lg-3 col-md-6">
    <div className="coursesCard -type-2 text-center pt-50 pb-40 px-30 rounded-8 bg-white shadow-2" data-aos="fade-right" data-aos-duration="800">
      <div className="coursesCard__image">
        <img src="/assets/4d.svg" alt="Industrial Standard" width="60" height="60" loading="lazy" decoding="async" style={{ color: "transparent" }} />
      </div>
      <div className="coursesCard__content mt-30">
        <h5 className="coursesCard__title text-18 lh-1 fw-500">Placement Support</h5>
        <p className="coursesCard__text text-14 mt-10">Nipuna Technologies provides 100% placement assistance, We have tied with many recruitment consultancies & companies to Support you with job Opportunities to Kick-Start & Step-up your Career in the world's best companies.</p>
      </div>
    </div>
  </div>
</div>
        </div>
    </section>
     <section class="layout-pt-lg layout-pb-lg section-bg">
        <div class="section-bg__item  bg-light-6"></div>
        <div class="container"></div>
            <div class="row y-gap-20 justify-center text-center">
                <div class="col-auto">
                    <div class="sectionTitle ">
                        <h2 class="sectionTitle__title ">Testimonials</h2>
                        <p class="sectionTitle__text ">10,000+ unique online course list designs</p>
                      <div className="row justify-center pt-60">
  <div className="col-xl-6 col-lg-8 col-md-10 text-center">
    
    {/* Quote Icon */}
    <img
      alt="Quote Icon"
      loading="lazy"
      width="40"
      height="40"
      decoding="async"
      style={{ color: "transparent", display: "block", margin: "0 auto 20px" }}
      className="quote-image"
      srcSet="/assets/quote%20(1).svg 1x, /assets/quote%20(1).svg 2x"
    />

    {/* Testimonial Text */}
    <div
      className="testimonials_text md:text-20 fw-600 text-dark-1"
      style={{ maxWidth: "700px", margin: "0 auto 30px" }}
    >
      "It is no exaggeration to say this Educrat experience was transformative — both professionally and personally. This workshop will long remain a high point of my life."
    </div>

    {/* Author Name */}
    <h5 className="text-17 lh-15 fw-600 text-center mt-20">Ali Tufan</h5>

    {/* Author Job Title */}
    <div className="mt-5 text-center text-dark-1">Product Manager, Apple Inc</div>
  </div>
</div>


                    <div className="overflow-hidden js-testimonials-slider">
  <div className="pt-60 lg:pt-40">

    <div className="pagination -avatars row x-gap-40 y-gap-20 justify-center js-testimonials-pagination">

      <div className="col-auto">
        <div className="pagination__item is-active">
          <img
            alt="image"
            loading="lazy"
            width="70"
            height="70"
            decoding="async"
            style={{ color: "transparent" }}
            srcSet="/assets/aa_files/1(3).png 1x, /assets/aa_files/1(3).png 2x"
            src="/assets/aa_files/1(3).png"
          />
        </div>
      </div>
      
   <div className="col-auto">
        <div className="pagination__item is-active">
          <img
            alt="Testimonial 2"
            loading="lazy"
            width="70"
            height="70"
            decoding="async"
            style={{ color: "transparent" }}
            srcSet="/assets/aa_files/3(2).png 1x, /assets/aa_files/3(2).png 2x"
            src="/assets/aa_files/3(2).png"
          />
        </div>
      </div>
 <div className="col-auto">
        <div className="pagination__item is-active">
          <img
            alt="Testimonial 3"
            loading="lazy"
            width="70"
            height="70"
            decoding="async"
            style={{ color: "transparent" }}
            srcSet="/assets/aa_files/2(3).png 1x, /assets/aa_files/2(3).png 2x"
            src="/assets/aa_files/2(3).png"
          />
        </div>
      </div>
       <div className="col-auto">
        <div className="pagination__item is-active">
          <img
            alt="Testimonial 4"
            loading="lazy"
            width="70"
            height="70"
            decoding="async"
            style={{ color: "transparent" }}
            srcSet="/assets/aa_files/4.png 1x, /assets/aa_files/4.png 2x"
            src="/assets/aa_files/4.png"
          />
        </div>
      </div>
       <div className="col-auto">
        <div className="pagination__item is-active">
          <img
            alt="Testimonial 5"
            loading="lazy"
            width="70"
            height="70"
            decoding="async"
            style={{ color: "transparent" }}
            srcSet="/assets/aa_files/5.png 1x, /assets/aa_files/5.png 2x"
            src="/assets/aa_files/5.png"
          />
        </div>
      </div>

                              
                              
  
  
</div>

                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      <section class="layout-pt-md layout-pb-md">
        <div class="container">
            <div class="row justify-center text-center">
                <div class="col-auto">
                    <div class="sectionTitle ">
                        <h2 class="sectionTitle__title ">Why FutureLearn?</h2>
                        <p class="sectionTitle__text ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                    </div>
                </div>
            </div>
            <div class="row y-gap-30 justify-between pt-60 lg:pt-50">
                <div class="col-lg-3 col-md-6">
                    <div class="coursesCard -type-3 px-0 text-center">
                        <div class="coursesCard__icon bg-white shadow-2"><i class="icon icon-rating-2 text-dark-1"></i></div>
                        <div class="coursesCard__content mt-30">
                            <h5 class="coursesCard__title text-18 lh-1 fw-500">Learn anything</h5>
                            <p class="coursesCard__text text-14 mt-10">The latest design trends meet hand-crafted templates in Sassio Collection.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="coursesCard -type-3 px-0 text-center">
                        <div class="coursesCard__icon bg-white shadow-2"><i class="icon icon-online-learning-3 text-dark-1"></i></div>
                        <div class="coursesCard__content mt-30">
                            <h5 class="coursesCard__title text-18 lh-1 fw-500">Learn together</h5>
                            <p class="coursesCard__text text-14 mt-10">The latest design trends meet hand-crafted templates in Sassio Collection.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="coursesCard -type-3 px-0 text-center">
                        <div class="coursesCard__icon bg-white shadow-2"><i class="icon icon-online-learning-2 text-dark-1"></i></div>
                        <div class="coursesCard__content mt-30">
                            <h5 class="coursesCard__title text-18 lh-1 fw-500">Learn with experts</h5>
                            <p class="coursesCard__text text-14 mt-10">The latest design trends meet hand-crafted templates in Sassio Collection.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="coursesCard -type-3 px-0 text-center">
                        <div class="coursesCard__icon bg-white shadow-2"><i class="icon icon-access text-dark-1"></i></div>
                        <div class="coursesCard__content mt-30">
                            <h5 class="coursesCard__title text-18 lh-1 fw-500">Life Time Access</h5>
                            <p class="coursesCard__text text-14 mt-10">The latest design trends meet hand-crafted templates in Sassio Collection.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="layout-pt-lg layout-pb-md">
    <div class="container">
        <div class="row y-gap-30 items-center">
            <div class="col-xl-5 offset-xl-1 col-lg-6">
                {/* <img 
                    alt="image" 
                    loading="lazy" 
                    width="730" 
                    height="530" 
                    decoding="async" 
                    data-nimg="1" 
                    class="w-1/1" 
                    style={{color:"transparent"}} 
                    srcSet=""
                    src="" 
                /> */}
            </div>
            {/* <div class="col-xl-4 offset-xl-1 col-lg-6">
                <h3 class="text-24 lh-1">Become an Instructor</h3>
                <p class="mt-20">Join millions of people from around the world learning together. Online learning is as easy and natural as chatting.</p>
                <div class="d-inline-block mt-20">
                    <a class="button -md -outline-purple-1 text-purple-1" href="/instructor-become">Apply Now</a>
                </div> */}
            {/* </div> */}
        </div>
    </div>
</section>

      <section class="layout-pt-md layout-pb-md">
    <div class="container">
        <div class="row y-gap-30 items-center">
            <div class="col-xl-4 offset-xl-1 order-lg-1 col-lg-6 order-2">
                <h3 class="text-24 lh-1">Become a Student</h3>
                <p class="mt-20">Join millions of people from around the world learning together. Online learning is as easy and natural as chatting..</p>
                <div class="d-inline-block mt-20"><a href="#" class="button -md -outline-dark-2 text-dark-2">Start Learning for Free</a></div>
            </div>
            <div class="col-xl-5 offset-xl-1 col-lg-6 order-lg-2 order-1">
                <img 
                    alt="image" 
                    loading="lazy" 
                    width="730" 
                    height="530" 
                    decoding="async" 
                    data-nimg="1" 
                    class="w-1/1" 
                    style={{color:"transparent"}} 
                    srcSet="/assets/B.webp 1x, /assets/B.webp 2x"
                    src="/assets/B.webp" 
                />
            </div>
        </div>
    </div>
</section>

     <section class=" layout-pt-lg  layout-pb-md ">
        <div class="container">
            <div class="row justify-center">
                <div class="col text-center">
                    <p class="text-lg text-dark-1">Trusted by the world’s best</p>
                </div>
            </div>
            <div class="row y-gap-30 justify-between sm:justify-start items-center pt-60 md:pt-50">
                <div data-aos="fade-up" data-aos-duration="300" class="col-lg-auto col-md-3 col-sm-4 col-6">
                    <div class="d-flex justify-center items-center px-4"><img alt="clients image" loading="lazy" width="140" height="90" decoding="async" data-nimg="1" class="w-1/1" style={{color:"transparent;object-fit:contain"}} src="/assets/img/clients/1.svg" /></div>
                </div>
                <div data-aos="fade-up" data-aos-duration="300" class="col-lg-auto col-md-3 col-sm-4 col-6">
                    <div class="d-flex justify-center items-center px-4"><img alt="clients image" loading="lazy" width="140" height="90" decoding="async" data-nimg="1" class="w-1/1" style={{color:"transparent;object-fit:contain"}} src="/assets/img/clients/2.svg" /></div>
                </div>
                <div data-aos="fade-up" data-aos-duration="300" class="col-lg-auto col-md-3 col-sm-4 col-6">
                    <div class="d-flex justify-center items-center px-4"><img alt="clients image" loading="lazy" width="140" height="90" decoding="async" data-nimg="1" class="w-1/1" style={{color:"transparent;object-fit:contain"}} src="/assets/img/clients/3.svg" /></div>
                </div>
                <div data-aos="fade-up" data-aos-duration="300" class="col-lg-auto col-md-3 col-sm-4 col-6">
                    <div class="d-flex justify-center items-center px-4"><img alt="clients image" loading="lazy" width="140" height="90" decoding="async" data-nimg="1" class="w-1/1" style={{color:"transparent;object-fit:contain"}} src="/assets/img/clients/4.svg" /></div>
                </div>
                <div data-aos="fade-up" data-aos-duration="300" class="col-lg-auto col-md-3 col-sm-4 col-6">
                    <div class="d-flex justify-center items-center px-4"><img alt="clients image" loading="lazy" width="140" height="90" decoding="async" data-nimg="1" class="w-1/1" style={{color:"transparent;object-fit:contain"}} src="/assets/img/clients/5.svg" /></div>
                </div>
                <div data-aos="fade-up" data-aos-duration="300" class="col-lg-auto col-md-3 col-sm-4 col-6">
                    <div class="d-flex justify-center items-center px-4"><img alt="clients image" loading="lazy" width="140" height="90" decoding="async" data-nimg="1" class="w-1/1" style={{color:"transparent;object-fit:contain"}} src="/assets/img/clients/6.svg" /></div>
                </div>
            </div>
        </div>
    </section>
  
   </>
  )
}
