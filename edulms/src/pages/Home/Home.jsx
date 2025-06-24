import { useEffect, useState } from 'react';
import CourseCard from "../CourseCard/CourseCard";
import AOS from "aos";
import "aos/dist/aos.css";
import './Home.css'

const courseData = [
  {
    image: "/assets/img/clients/1.webp",
    title: "Learn Figma - UI/UX Design Essential Training",
    rating: 4.3,
    reviews: 1991,
    lessons: 6,
    duration: "22h 0m",
    level: "Beginner",
    author: {
      name: "Jane Cooper",
      image:
        "https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fgeneral%2Favatar-1.png&w=32&q=75",
    },
    priceOld: 199,
    priceNew: 79,
    badges: [],
  },
  {
    image: "/assets/img/clients/2.webp",
    title: "Web Development Bootcamp",
    rating: 4.7,
    reviews: 2643,
    lessons: 12,
    duration: "35h 20m",
    level: "Intermediate",
    author: {
      name: "John Doe",
      image:
        "https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fgeneral%2Favatar-1.png&w=32&q=75",
    },
    priceOld: 249,
    priceNew: 89,
    badges: [
      { label: "Popular", bgClass: "bg-purple-1", textClass: "text-white" },
      {
        label: "Best sellers",
        bgClass: "bg-green-1",
        textClass: "text-dark-1",
      },
    ],
  },
  {
    image: "/assets/img/clients/3.webp",
    title: "Learn Figma - UI/UX Design Essential Training",
    rating: 4.3,
    reviews: 1991,
    lessons: 6,
    duration: "22h 0m",
    level: "Beginner",
    author: {
      name: "Jane Cooper",
      image:
        "https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fgeneral%2Favatar-1.png&w=32&q=75",
    },
    priceOld: 199,
    priceNew: 79,
    badges: [],
  },
  {
    image: "/assets/img/clients/5.webp",
    title: "Web Development Bootcamp",
    rating: 4.7,
    reviews: 2643,
    lessons: 12,
    duration: "35h 20m",
    level: "Intermediate",
    author: {
      name: "John Doe",
      image:
        "https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fgeneral%2Favatar-1.png&w=32&q=75",
    },
    priceOld: 249,
    priceNew: 89,
    badges: [
      { label: "Popular", bgClass: "bg-purple-1", textClass: "text-white" },
      {
        label: "Best sellers",
        bgClass: "bg-green-1",
        textClass: "text-dark-1",
      },
    ],
  },

  {
    image: "/assets/img/clients/4.png",
    title: "Learn Figma - UI/UX Design Essential Training",
    rating: 4.3,
    reviews: 1991,
    lessons: 6,
    duration: "22h 0m",
    level: "Beginner",
    author: {
      name: "Jane Cooper",
      image:
        "https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fgeneral%2Favatar-1.png&w=32&q=75",
    },
    priceOld: 199,
    priceNew: 79,
    badges: [],
  },
  {
    image: "/assets/img/clients/6.webp",
    title: "Web Development Bootcamp",
    rating: 4.7,
    reviews: 2643,
    lessons: 12,
    duration: "35h 20m",
    level: "Intermediate",
    author: {
      name: "John Doe",
      image:
        "https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fgeneral%2Favatar-1.png&w=32&q=75",
    },
    priceOld: 249,
    priceNew: 89,
    badges: [
      { label: "Popular", bgClass: "bg-purple-1", textClass: "text-white" },
      {
        label: "Best sellers",
        bgClass: "bg-green-1",
        textClass: "text-dark-1",
      },
    ],
  },
  {
    image: "/assets/img/clients/7.webp",
    title: "Learn Figma - UI/UX Design Essential Training",
    rating: 4.3,
    reviews: 1991,
    lessons: 6,
    duration: "22h 0m",
    level: "Beginner",
    author: {
      name: "Jane Cooper",
      image:
        "https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fgeneral%2Favatar-1.png&w=32&q=75",
    },
    priceOld: 199,
    priceNew: 79,
    badges: [],
  },
  {
    image: "/assets/img/clients/1.webp",
    title: "Web Development Bootcamp",
    rating: 4.7,
    reviews: 2643,
    lessons: 12,
    duration: "35h 20m",
    level: "Intermediate",
    author: {
      name: "John Doe",
      image:
        "https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fgeneral%2Favatar-1.png&w=32&q=75",
    },
    priceOld: 249,
    priceNew: 89,
    badges: [
      { label: "Popular", bgClass: "bg-purple-1", textClass: "text-white" },
      {
        label: "Best sellers",
        bgClass: "bg-green-1",
        textClass: "text-dark-1",
      },
    ],
  },
];

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);


  const slides = [
    {
      id: 'cr-1',
      hue: 32,
      z: 4,
      h: 32,
      text: 'Learn from offline To Learn Online',
      img: '/assets/static/media/slider3.png',
      alt: 'Snow on leafs'
    },
    {
      id: 'cr-2',
      hue: 82,
      z: 3,
      h: 82,
      text: 'Look from inside?',
      img: '/assets/static/media/slider4.png',
      alt: 'Inside view'
    },
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);


  return (
    <>
      <div className="content-wrapper  js-content-wrapper overflow-hidden">
        <section className="masthead -type-1 js-mouse-move-container">
          <div className="masthead__bg">
            <img
              alt="image"
              loading="lazy"
              width="1920"
              height="810"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent" }}
              srcSet="/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg.86c9aca0.png&amp;w=1920&amp;q=75 1x, /image?url=%2F_next%2Fstatic%2Fmedia%2Fbg.86c9aca0.png&amp;w=3840&amp;q=75 2x"
              src="/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg.86c9aca0.png&amp;w=3840&amp;q=75"
            />
          </div>
          <div className="container">
            <div className="row y-gap-30 justify-between items-end">
              <div className="col-xl-6 col-lg-6 col-sm-10">
                <div
                  className="masthead__content"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <h1 className="masthead__title">
                    Learn New Skills Online with Top
                    <span className="text-green-1 underline">Educators</span>
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="100"
                    className="masthead__text"
                  >
                    Build skills with courses, certificates, and degrees online
                    from
                    <br /> world-class universities and companies.
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="200"
                    className="masthead__buttons row x-gap-10 y-gap-10"
                  >
                    <div className="col-12 col-sm-auto">
                      <a
                        data-barba="true"
                        className="button -md -purple-1 text-white"
                        href="/signup"
                      >
                        Join For Free
                      </a>
                    </div>
                    <div className="col-12 col-sm-auto">
                      <a
                        data-barba="true"
                        className="button -md -outline-green-1 text-green-1"
                        href="/courses-list-1"
                      >
                        Find Courses
                      </a>
                    </div>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="300"
                    className="masthead-info row y-gap-15 sm:d-none"
                  >
                    <div className="masthead-info__item d-flex items-center text-white">
                      <div className="masthead-info__icon mr-10">
                        <img
                          alt="icon"
                          loading="lazy"
                          width="24"
                          height="24"
                          decoding="async"
                          data-nimg="1"
                          style={{ color: "transparent" }}
                          src="/assets/static/media/1.ab242553.svg"
                        />
                      </div>
                      
                      <div className="masthead-info__title lh-1">
                        Over 12 million students
                      </div>
                    </div>
                    <div className="masthead-info__item d-flex items-center text-white">
                      <div className="masthead-info__icon mr-10">
                        <img
                          alt="icon"
                          loading="lazy"
                          width="22"
                          height="22"
                          decoding="async"
                          data-nimg="1"
                          style={{ color: "transparent" }}
                          src="/assets/static/media/2.c2c248e9.svg"
                        />
                      </div>
                      <div className="masthead-info__title lh-1">
                        More than 60,000 courses
                      </div>
                    </div>
                    <div className="masthead-info__item d-flex items-center text-white">
                      <div className="masthead-info__icon mr-10">
                        <img
                          alt="icon"
                          loading="lazy"
                          width="24"
                          height="24"
                          decoding="async"
                          data-nimg="1"
                          style={{ color: "transparent" }}
                          src="/assets/static/media/3.1afa7713.svg"
                        />
                      </div>
                      <div className="masthead-info__title lh-1">
                        Learn anything online
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <div className="masthead-image" style={{paddingLeft:"0px"}}>
                  
                  
                  {/* <div class="c">

                  <input type="radio" name="a" id="cr-1" defaultChecked className="slider_new_input"/>
      <label htmlFor="cr-1" style={{ '--hue': 32 }} className="slider_new_label"></label>
      <div className="ci" style={{ '--z': 4 }}>
        <h2 className="ch" style={{ '--h': 32, '--s': '80%', '--l': '90%' }}>
        Learn from offline To Learn Online
        </h2>
        <img
          src="/assets/static/media/slider3.png"
          alt="Snow on leafs"
          
        />
      </div>

      <input type="radio" name="a" id="cr-2" className="slider_new_input"/>
      <label htmlFor="cr-2" style={{ '--hue': 82 }} className="slider_new_label"></label>
      <div className="ci" style={{ '--z': 3 }}>
        <h2 className="ch" style={{ '--h': 82, '--s': '80%', '--l': '90%' }}>
          Look from inside?
        </h2>
        <img
          src="/assets/static/media/slider4.png"
          alt="Inside view"
          
        />
      </div>



</div> */}
<div className="c">
      {slides.map((slide, index) => (
        <div key={slide.id}>
          <input
            type="radio"
            name="a"
            id={slide.id}
            checked={activeIndex === index}
            onChange={() => setActiveIndex(index)}
            className="slider_new_input"
          />
          <label
            htmlFor={slide.id}
            style={{ '--hue': slide.hue }}
            className="slider_new_label"
          ></label>
          <div className="ci" style={{ '--z': slide.z }}>
            <h2
              className="ch"
              style={{ '--h': slide.h, '--s': '80%', '--l': '90%' }}
            >
              {slide.text}
            </h2>
            <img src={slide.img} alt={slide.alt} />
          </div>
        </div>
      ))}
    </div>

                </div>
              </div>
            </div>
          </div>
          <svg
            className="svg-waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              ></path>
            </defs>
            <g className="svg-waves__parallax">
              <use xlinkHref="/#gentle-wave" x="48" y="0"></use>
              <use xlinkHref="/#gentle-wave" x="48" y="3"></use>
              <use xlinkHref="/#gentle-wave" x="48" y="5"></use>
              <use xlinkHref="/#gentle-wave" x="48" y="7"></use>
            </g>
          </svg>
        </section>
        <section className=" layout-pt-lg  layout-pb-md   ">
          <div className="container">
            <div className="row justify-center">
              <div className="col text-center">
                <h3 className="text-lg text-dark-1">
                  Trusted by the world’s best
                </h3>
              </div>
            </div>
            <div className="row y-gap-30 justify-between sm:justify-start items-center pt-60 md:pt-50">
              <div
                data-aos="fade-up"
                data-aos-duration="300"
                className="col-lg-auto col-md-3 col-sm-4 col-6"
              >
                <div className="d-flex justify-center items-center px-4">
                  <img
                    alt="clients image"
                    loading="lazy"
                    width="140"
                    height="90"
                    decoding="async"
                    data-nimg="1"
                    className="w-1/1"
                    style={{ color: "transparent", objectFit: "contain" }}
                    src="/assets/img/clients\1.svg"
                  />
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="300"
                className="col-lg-auto col-md-3 col-sm-4 col-6"
              >
                <div className="d-flex justify-center items-center px-4">
                  <img
                    alt="clients image"
                    loading="lazy"
                    width="140"
                    height="90"
                    decoding="async"
                    data-nimg="1"
                    className="w-1/1"
                    style={{ color: "transparent", objectFit: "contain" }}
                    src="/assets/img/clients/2.svg"
                  />
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="300"
                className="col-lg-auto col-md-3 col-sm-4 col-6"
              >
                <div className="d-flex justify-center items-center px-4">
                  <img
                    alt="clients image"
                    loading="lazy"
                    width="140"
                    height="90"
                    decoding="async"
                    data-nimg="1"
                    className="w-1/1"
                    style={{ color: "transparent", objectFit: "contain" }}
                    src="/assets/img/clients/3.svg"
                  />
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="300"
                className="col-lg-auto col-md-3 col-sm-4 col-6"
              >
                <div className="d-flex justify-center items-center px-4">
                  <img
                    alt="clients image"
                    loading="lazy"
                    width="140"
                    height="90"
                    decoding="async"
                    data-nimg="1"
                    className="w-1/1"
                    style={{ color: "transparent", objectFit: "contain" }}
                    src="/assets/img/clients/4.svg"
                  />
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="300"
                className="col-lg-auto col-md-3 col-sm-4 col-6"
              >
                <div className="d-flex justify-center items-center px-4">
                  <img
                    alt="clients image"
                    loading="lazy"
                    width="140"
                    height="90"
                    decoding="async"
                    data-nimg="1"
                    className="w-1/1"
                    style={{ color: "transparent", objectFit: "contain" }}
                    src="/assets/img/clients/5.svg"
                  />
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="300"
                className="col-lg-auto col-md-3 col-sm-4 col-6"
              >
                <div className="d-flex justify-center items-center px-4">
                  <img
                    alt="clients image"
                    loading="lazy"
                    width="140"
                    height="90"
                    decoding="async"
                    data-nimg="1"
                    className="w-1/1"
                    style={{ color: "transparent", objectFit: "contain" }}
                    src="/assets/img/clients/6.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="layout-pt-lg layout-pb-lg">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle ">
                <h2 className="sectionTitle__title sm:text-24">
                  Our Most Popular Courses
                </h2>
                <p className="sectionTitle__text ">
                  10,000+ unique online course list designs
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-end">
            <div className="col-auto">
              <div className="mt-10">
                <select
                  className="form-select px-3 py-2 rounded-4 border"
                  style={{ minWidth: "200px" }}
                >
                  <option value="">All Categories</option>
                  <option value="web">Web Development</option>
                  <option value="design">UI/UX Design</option>
                  <option value="ai">Artificial Intelligence</option>
                  <option value="marketing">Digital Marketing</option>
                </select>
              </div>
            </div>
          </div>

          <div
            className="pt-60 m-auto row y-gap-30 container pl-0 pr-0"
            data-aos="fade-right"
            data-aos-offset="80"
            data-aos-duration="800"
          >
            {courseData.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </section>
        {/* <section className="layout-pt-lg mt-80 layout-pb-lg bg-purple-1">
          <div className="container ">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div className="sectionTitle ">
                  <h2 className="sectionTitle__title text-green-1">
                    What People Say
                  </h2>
                  <p className="sectionTitle__text text-white">
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                </div>
              </div>
            </div>
            <div className="js-section-slider pt-50">
              <div className="d-flex x-gap-20 items-center justify-end pt-60 lg:pt-40">
                <div className="col-auto">
                  <button className="button -outline-white text-white size-50 rounded-full d-flex justify-center items-center js-prev">
                    <i className="icon icon-arrow-left text-24"></i>
                  </button>
                </div>
                <div className="col-auto">
                  <button className="button -outline-white text-white size-50 rounded-full d-flex justify-center items-center js-next">
                    <i className="icon icon-arrow-right text-24"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="row y-gap-30  counter__row">
              <div
                className="col-lg-3 col-sm-6"
                data-aos="fade-left"
                data-aos-duration="350"
              >
                <div className="counter -type-1">
                  <div className="counter__number">350,000+</div>
                  <div className="counter__title">Students worldwide</div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6"
                data-aos="fade-left"
                data-aos-duration="700"
              >
                <div className="counter -type-1">
                  <div className="counter__number">496,000+</div>
                  <div className="counter__title">Total course views</div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6"
                data-aos="fade-left"
                data-aos-duration="1050"
              >
                <div className="counter -type-1">
                  <div className="counter__number">19,000+</div>
                  <div className="counter__title">Five-star course reviews</div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6"
                data-aos="fade-left"
                data-aos-duration="1400"
              >
                <div className="counter -type-1">
                  <div className="counter__number">987,000+</div>
                  <div className="counter__title">Students community</div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="layout-pt-lg layout-pb-lg bg-beige-1">
          <div className="container">
            <div className="row y-gap-30 justify-between items-center">
              <div className="col-xl-5 col-lg-6 col-md-10 order-2 order-lg-1">
                <div className="about-content">
                  <h2
                    className="about-content__title customSized"
                    data-aos="fade-up"
                  >
                    <span>Learn</span> new skills when and where you like.
                  </h2>
                  <p className="about-content__text" data-aos="fade-up">
                    Use the list below to bring attention to your product’s key
                    <br /> differentiator.
                  </p>
                  <div className="y-gap-20 pt-30">
                    <div className="d-flex items-center" data-aos="fade-up">
                      <div className="about-content-list__icon">
                        <span
                          className="text-white"
                          style={{ fontSize: "10px", fontWeight: 300 }}
                          aria-hidden="true"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="check"
                            className="svg-inline--fa fa-check "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                      <div className="about-content-list__title">
                        Hand-picked authors
                      </div>
                    </div>
                    <div className="d-flex items-center" data-aos="fade-up">
                      <div className="about-content-list__icon">
                        <span
                          className="text-white"
                          style={{ fontSize: "10px", fontWeight: 300 }}
                          aria-hidden="true"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="check"
                            className="svg-inline--fa fa-check "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                      <div className="about-content-list__title">
                        Easy to follow curriculum
                      </div>
                    </div>
                    <div className="d-flex items-center" data-aos="fade-up">
                      <div className="about-content-list__icon">
                        <span
                          className="text-white"
                          style={{ fontSize: "10px", fontWeight: 300 }}
                          aria-hidden="true"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="check"
                            className="svg-inline--fa fa-check "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                      <div className="about-content-list__title">
                        Free courses
                      </div>
                    </div>
                    <div className="d-flex items-center" data-aos="fade-up">
                      <div className="about-content-list__icon">
                        <span
                          className="text-white"
                          style={{ fontSize: "10px", fontWeight: 300 }}
                          aria-hidden="true"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="check"
                            className="svg-inline--fa fa-check "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                      <div className="about-content-list__title">
                        Money-back guarantee
                      </div>
                    </div>
                  </div>
                  <div className="d-inline-block mt-30">
                    <a className="button -md -dark-1 text-white" href="/signup">
                      Join Free
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-5 col-lg-6 order-1 order-lg-2"
                data-aos="fade-up"
              >
                <div className="about-image">
                  <img
                    alt="image"
                    loading="lazy"
                    width="750"
                    height="850"
                    decoding="async"
                    data-nimg="1"
                    style={{
                      color: "transparent",
                      height: "100%",
                      width: "100%",
                    }}
                    src="https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fabout%2F1.png&w=750&q=75"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="layout-pt-lg layout-pb-lg bg-dark-2">
          <div className="container">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div className="sectionTitle ">
                  <h2
                    className="sectionTitle__title text-white"
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    Why learn with our courses?
                  </h2>
                  <p
                    className="sectionTitle__text text-white"
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                </div>
              </div>
            </div>
            <div className="row y-gap-30 pt-50">
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-duration="400"
              >
                <div className="stepCard -type-1 -stepCard-hover">
                  <div className="stepCard__content">
                    <div className="stepCard__icon">
                      <i className="icon-online-learning-4 text-64 text-green-1"></i>
                    </div>
                    <h4 className="stepCard__title">01. Learn</h4>
                    <p className="stepCard__text">
                      Lorem ipsum dolor sit amet, consectetur dolorili
                      adipiscing elit. Felis donec massa aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div className="stepCard -type-1 -stepCard-hover">
                  <div className="stepCard__content">
                    <div className="stepCard__icon">
                      <i className="icon-graduation-1 text-64 text-green-1"></i>
                    </div>
                    <h4 className="stepCard__title">02. Graduate</h4>
                    <p className="stepCard__text">
                      Lorem ipsum dolor sit amet, consectetur dolorili
                      adipiscing elit. Felis donec massa aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="stepCard -type-1 -stepCard-hover">
                  <div className="stepCard__content">
                    <div className="stepCard__icon">
                      <i className="icon-working-at-home-2 text-64 text-green-1"></i>
                    </div>
                    <h4 className="stepCard__title">03. Work</h4>
                    <p className="stepCard__text">
                      Lorem ipsum dolor sit amet, consectetur dolorili
                      adipiscing elit. Felis donec massa aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="layout-pt-lg layout-pb-lg ">
          <div className="container">
            <div className="row y-gap-20 justify-between items-center">
              <div className="col-lg-6">
                <div className="sectionTitle ">
                  <h2 className="sectionTitle__title " data-aos="fade-left">
                    Learn from the best instructors
                  </h2>
                  <p className="sectionTitle__text " data-aos="fade-left">
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                </div>
              </div>
              <div className="col-auto" data-aos="fade-left">
                <a
                  className="button -icon -purple-3 text-purple-1"
                  href="/instructors-list-1"
                >
                  View All Instructors
                  <i className="icon-arrow-top-right text-13 ml-10"></i>
                </a>
              </div>
            </div>
            <div className="row y-gap-30 pt-50">
              <div
                className="col-lg-3 col-sm-6"
                data-aos="fade-left"
                data-aos-duration="500"
              >
                <div className="teamCard -type-1 -teamCard-hover">
                  <div className="teamCard__image">
                    <img
                      alt="image"
                      loading="lazy"
                      width="600"
                      height="700"
                      decoding="async"
                      data-nimg="1"
                      style={{
                        color: "transparent",
                        height: "100%",
                        width: "100%",
                      }}
                      src="https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F1.png&w=640&q=75"
                    />
                    <div className="teamCard__socials">
                      <div className="d-flex x-gap-20 y-gap-10 justify-center items-center h-100">
                        <a href="https://www.facebook.com/">
                          <i className="icon-facebook text-white"></i>
                        </a>
                        <a href="https://twitter.com/?lang=en">
                          <i className="icon-twitter text-white"></i>
                        </a>
                        <a href="https://www.instagram.com/">
                          <i className="icon-instagram text-white"></i>
                        </a>
                        <a href="https://www.linkedin.com/">
                          <i className="icon-linkedin text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="teamCard__content">
                    <h4 className="teamCard__title">
                      <a className="linkCustom" href="/instructors/1">
                        Floyd Miles
                      </a>
                    </h4>
                    <p className="teamCard__text">President of Sales</p>
                    <div className="row items-center y-gap-10 x-gap-10 pt-10">
                      <div className="col-auto">
                        <div className="d-flex items-center">
                          <div className="icon-star text-yellow-1 text-11 mr-5"></div>
                          <div className="text-14 lh-12 text-yellow-1 fw-500">
                            4.5
                          </div>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="d-flex items-center">
                          <div className="icon-online-learning text-light-1 text-11 mr-5"></div>
                          <div className="text-14 lh-12">692 Students</div>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="d-flex items-center">
                          <div className="icon-play text-light-1 text-11 mr-5"></div>
                          <div className="text-14 lh-12">15 Course</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="teamCard -type-1 -teamCard-hover">
                  <div className="teamCard__image">
                    <img
                      alt="image"
                      loading="lazy"
                      width="600"
                      height="700"
                      decoding="async"
                      data-nimg="1"
                      style={{
                        color: "transparent",
                        height: "100%",
                        width: "100%",
                      }}
                      src="https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F1.png&w=640&q=75"
                    />
                    <div className="teamCard__socials">
                      <div className="d-flex x-gap-20 y-gap-10 justify-center items-center h-100">
                        <a href="https://www.facebook.com/">
                          <i className="icon-facebook text-white"></i>
                        </a>
                        <a href="https://twitter.com/?lang=en">
                          <i className="icon-twitter text-white"></i>
                        </a>
                        <a href="https://www.instagram.com/">
                          <i className="icon-instagram text-white"></i>
                        </a>
                        <a href="https://www.linkedin.com/">
                          <i className="icon-linkedin text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="teamCard__content">
                    <h4 className="teamCard__title">
                      <a className="linkCustom" href="/instructors/2">
                        Cameron Williamson
                      </a>
                    </h4>
                    <p className="teamCard__text">Web Designer</p>
                    <div className="row items-center y-gap-10 x-gap-10 pt-10">
                      <div className="col-auto">
                        <div className="d-flex items-center">
                          <div className="icon-star text-yellow-1 text-11 mr-5"></div>
                          <div className="text-14 lh-12 text-yellow-1 fw-500">
                            3.5
                          </div>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="d-flex items-center">
                          <div className="icon-online-learning text-light-1 text-11 mr-5"></div>
                          <div className="text-14 lh-12">692 Students</div>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="d-flex items-center">
                          <div className="icon-play text-light-1 text-11 mr-5"></div>
                          <div className="text-14 lh-12">15 Course</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <div className="teamCard -type-1 -teamCard-hover">
                  <div className="teamCard__image">
                    <img
                      alt="image"
                      loading="lazy"
                      width="600"
                      height="700"
                      decoding="async"
                      data-nimg="1"
                      style={{
                        color: "transparent",
                        height: "100%",
                        width: "100%",
                      }}
                      src="https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F1.png&w=640&q=75"
                    />
                    <div className="teamCard__socials">
                      <div className="d-flex x-gap-20 y-gap-10 justify-center items-center h-100">
                        <a href="https://www.facebook.com/">
                          <i className="icon-facebook text-white"></i>
                        </a>
                        <a href="https://twitter.com/?lang=en">
                          <i className="icon-twitter text-white"></i>
                        </a>
                        <a href="https://www.instagram.com/">
                          <i className="icon-instagram text-white"></i>
                        </a>
                        <a href="https://www.linkedin.com/">
                          <i className="icon-linkedin text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="teamCard__content">
                    <h4 className="teamCard__title">
                      <a className="linkCustom" href="/instructors/3">
                        Brooklyn Simmons
                      </a>
                    </h4>
                    <p className="teamCard__text">Dog Trainer</p>
                    <div className="row items-center y-gap-10 x-gap-10 pt-10">
                      <div className="col-auto">
                        <div className="d-flex items-center">
                          <div className="icon-star text-yellow-1 text-11 mr-5"></div>
                          <div className="text-14 lh-12 text-yellow-1 fw-500">
                            5
                          </div>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="d-flex items-center">
                          <div className="icon-online-learning text-light-1 text-11 mr-5"></div>
                          <div className="text-14 lh-12">692 Students</div>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="d-flex items-center">
                          <div className="icon-play text-light-1 text-11 mr-5"></div>
                          <div className="text-14 lh-12">15 Course</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <div className="teamCard -type-1 -teamCard-hover">
                  <div className="teamCard__image">
                    <img
                      alt="image"
                      loading="lazy"
                      width="600"
                      height="700"
                      decoding="async"
                      data-nimg="1"
                      style={{
                        color: "transparent",
                        height: "100%",
                        width: "100%",
                      }}
                      src="https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F1.png&w=640&q=75"
                    />
                    <div className="teamCard__socials">
                      <div className="d-flex x-gap-20 y-gap-10 justify-center items-center h-100">
                        <a href="https://www.facebook.com/">
                          <i className="icon-facebook text-white"></i>
                        </a>
                        <a href="https://twitter.com/?lang=en">
                          <i className="icon-twitter text-white"></i>
                        </a>
                        <a href="https://www.instagram.com/">
                          <i className="icon-instagram text-white"></i>
                        </a>
                        <a href="https://www.linkedin.com/">
                          <i className="icon-linkedin text-white"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="teamCard__content">
                    <h4 className="teamCard__title">
                      <a className="linkCustom" href="/instructors/4">
                        Wade Warren
                      </a>
                    </h4>
                    <p className="teamCard__text">Marketing Coordinator</p>
                    <div className="row items-center y-gap-10 x-gap-10 pt-10">
                      <div className="col-auto">
                        <div className="d-flex items-center">
                          <div className="icon-star text-yellow-1 text-11 mr-5"></div>
                          <div className="text-14 lh-12 text-yellow-1 fw-500">
                            4
                          </div>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="d-flex items-center">
                          <div className="icon-online-learning text-light-1 text-11 mr-5"></div>
                          <div className="text-14 lh-12">692 Students</div>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="d-flex items-center">
                          <div className="icon-play text-light-1 text-11 mr-5"></div>
                          <div className="text-14 lh-12">15 Course</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-center text-center pt-60 lg:pt-40">
              <div className="col-auto">
                <p className="lh-1">
                  Want to help people learn, grow and achieve more in life?
                  <a
                    className="text-purple-1 underline"
                    href="/instructor-become"
                  >
                    Become an instructor
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="layout-pt-lg layout-pb-lg bg-light-3">
          <div className="container">
            <div className="row y-gap-20 items-center">
              <div className="col-xl-7 col-lg-7">
                <div
                  className="app-image"
                  data-aos="fade-up"
                  data-aos-duration="400"
                >
                  <img
                    alt="image"
                    loading="lazy"
                    width="700"
                    height="500"
                    decoding="async"
                    data-nimg="1"
                    style={{
                      color: "transparent",
                      height: "100%",
                      width: "100%",
                    }}
                    srcSet="/image?url=%2Fassets%2Fimg%2Fapp%2F1.png&amp;w=750&amp;q=75 1x, /image?url=%2Fassets%2Fimg%2Fapp%2F1.png&amp;w=1920&amp;q=75 2x"
                    src="/image?url=%2Fassets%2Fimg%2Fapp%2F1.png&amp;w=1920&amp;q=75"
                  />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="app-content">
                  <h2
                    className="app-content__title"
                    data-aos="fade-up"
                    data-aos-duration="500"
                  >
                    Learn From
                    <br /> <span>Anywhere</span>
                  </h2>
                  <p
                    className="app-content__text"
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >
                    Take classes on the go with the educrat app. Stream or
                    download to watch on the plane, the subway, or wherever you
                    learn best.
                  </p>
                  <div className="app-content__buttons">
                    <a href="#">
                      <img
                        alt="button"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        loading="lazy"
                        width="210"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        style={{
                          color: "transparent",
                          height: "100%",
                          width: "100%",
                        }}
                        src="/assets/img/app/buttons/1.svg"
                      />
                    </a>
                    <a href="#">
                      <img
                        alt="button"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        loading="lazy"
                        width="190"
                        height="60"
                        decoding="async"
                        data-nimg="1"
                        style={{
                          color: "transparent",
                          height: "100%",
                          width: "100%",
                        }}
                        src="/assets/img/app/buttons/2.svg"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="layout-pt-lg layout-pb-lg">
          <div className="container">
            <div className="row y-gap-20 justify-between items-center">
              <div className="col-lg-6">
                <div
                  className="sectionTitle "
                  data-aos="fade-left"
                  data-aos-duration="600"
                >
                  <h2 className="sectionTitle__title ">Resources &amp; News</h2>
                  <p className="sectionTitle__text ">
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                </div>
              </div>
              <div
                className="col-auto"
                data-aos="fade-left"
                data-aos-duration="700"
              >
                <a
                  className="button -icon -purple-3 text-purple-1"
                  href="/blog-list-1"
                >
                  Browse Blog
                  <i className="icon-arrow-top-right text-13 ml-10"></i>
                </a>
              </div>
            </div>
            <div className="row y-gap-30 pt-50">
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-left"
                data-aos-duration="400"
              >
                <div className="blogCard -type-1">
                  <div className="blogCard__image">
                    <img
                      alt="image"
                      loading="lazy"
                      width="550"
                      height="450"
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent", width: "100%" }}
                      src="https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog-list%2F1.png&w=640&q=75"
                    />
                  </div>
                  <div className="blogCard__content">
                    <div className="blogCard__category">Writing</div>
                    <h4 className="blogCard__title">
                      <a className="linkCustom" href="/blogs/1">
                        Eco-Education in Our Lives: We Can Change the Future
                      </a>
                    </h4>
                    <div className="blogCard__date">January 5, 2023</div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <div className="blogCard -type-1">
                  <div className="blogCard__image">
                    <img
                      alt="image"
                      loading="lazy"
                      width="550"
                      height="450"
                      decoding="async"
                      data-nimg="1"
                      style={{ color: "transparent", width: "100%" }}
                      src="https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog-list%2F2.png&w=640&q=75"
                    />
                  </div>
                  <div className="blogCard__content">
                    <div className="blogCard__category">EDUCATION</div>
                    <h4 className="blogCard__title">
                      <a className="linkCustom" href="/blogs/2">
                        Engendering a culture of professional development
                      </a>
                    </h4>
                    <div className="blogCard__date">February 18, 2023</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="row y-gap-30"
                  data-aos="fade-left"
                  data-aos-duration="700"
                >
                  <div className="col-lg-12 col-md-6">
                    <div className="blogCard -type-2">
                      <div className="blogCard__image">
                        <img
                          alt="image"
                          loading="lazy"
                          width="160"
                          height="130"
                          decoding="async"
                          data-nimg="1"
                          style={{
                            color: "transparent",
                            height: "120px",
                            width: "140px",
                          }}
                          src="https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fcourses-list%2F1.png&w=256&q=75"
                        />
                      </div>
                      <div className="blogCard__content">
                        <div className="blogCard__category">Design</div>
                        <h4 className="blogCard__title">
                          {" "}
                          <a className="linkCustom" href="/events/1">
                            Summer School 2022
                          </a>
                        </h4>
                        <div className="blogCard__date">6 April, 2022</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="blogCard -type-2">
                      <div className="blogCard__image">
                        <img
                          alt="image"
                          loading="lazy"
                          width="160"
                          height="130"
                          decoding="async"
                          data-nimg="1"
                          style={{
                            color: "transparent",
                            height: "120px",
                            width: "140px",
                          }}
                          src="https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fcourses-list%2F1.png&w=256&q=75"
                        />
                      </div>
                      <div className="blogCard__content">
                        <div className="blogCard__category">Animation</div>
                        <h4 className="blogCard__title">
                          {" "}
                          <a className="linkCustom" href="/events/2">
                            Summer School 2022
                          </a>
                        </h4>
                        <div className="blogCard__date">6 April, 2022</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="blogCard -type-2">
                      <div className="blogCard__image">
                        <img
                          alt="image"
                          loading="lazy"
                          width="160"
                          height="130"
                          decoding="async"
                          data-nimg="1"
                          style={{
                            color: "transparent",
                            height: "120px",
                            width: "140px",
                          }}
                          src="https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fcourses-list%2F1.png&w=256&q=75"
                        />
                      </div>
                      <div className="blogCard__content">
                        <div className="blogCard__category">Writing</div>
                        <h4 className="blogCard__title">
                          {" "}
                          <a className="linkCustom" href="/events/3">
                            Summer School 2022
                          </a>
                        </h4>
                        <div className="blogCard__date">6 April, 2022</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="layout-pt-md layout-pb-md bg-purple-1">
          <div className="container">
            <div className="row y-gap-20 justify-between items-center">
              <div className="col-xl-4 col-lg-5">
                <h2 className="text-30 lh-15 text-white">
                  Join more than
                  <span className="text-green-1">8 million learners</span>{" "}
                  worldwide
                </h2>
              </div>
              <div className="col-auto">
                <a className="button -md -green-1 text-dark-1" href="#">
                  Start Learning For Free
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Home;
