(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1050], {
        13594: function(e, t, s) {
            Promise.resolve().then(s.bind(s, 14747)), Promise.resolve().then(s.bind(s, 55980)), Promise.resolve().then(s.bind(s, 5032)), Promise.resolve().then(s.t.bind(s, 28707, 23)), Promise.resolve().then(s.t.bind(s, 8920, 23)), Promise.resolve().then(s.bind(s, 58460)), Promise.resolve().then(s.bind(s, 1311))
        },
        5032: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var i = s(9268),
                n = s(76394),
                a = s.n(n);
            let o = ["/assets/img/clients/1.svg", "/assets/img/clients/2.svg", "/assets/img/clients/3.svg", "/assets/img/clients/4.svg", "/assets/img/clients/5.svg", "/assets/img/clients/6.svg"];
            var r = e => {
                let {
                    backgroundColorComponent: t,
                    brandsTwo: s
                } = e;
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)("section", {
                        className: " ".concat(s ? "layout-pt-md" : "layout-pt-lg", "  layout-pb-md  ").concat(t || "", " "),
                        children: (0, i.jsxs)("div", {
                            className: "container",
                            children: [(0, i.jsx)("div", {
                                className: "row justify-center",
                                children: (0, i.jsx)("div", {
                                    className: "col text-center",
                                    children: (0, i.jsx)("p", {
                                        className: "text-lg text-dark-1",
                                        children: "Trusted by the world’s best"
                                    })
                                })
                            }), (0, i.jsx)("div", {
                                className: "row y-gap-30 justify-between sm:justify-start items-center pt-60 md:pt-50",
                                children: o.map((e, t) => (0, i.jsx)("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "300",
                                    className: "col-lg-auto col-md-3 col-sm-4 col-6",
                                    children: (0, i.jsx)("div", {
                                        className: "d-flex justify-center items-center px-4",
                                        children: (0, i.jsx)(a(), {
                                            className: "w-1/1",
                                            src: e && e,
                                            alt: "clients image",
                                            width: 140,
                                            height: 90,
                                            style: {
                                                objectFit: "contain"
                                            }
                                        })
                                    })
                                }, t))
                            })]
                        })
                    })
                })
            }
        },
        58460: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            });
            var i = s(9268),
                n = s(76394),
                a = s.n(n),
                o = s(86006),
                r = s(36115),
                l = s(70382),
                c = s(41715);
            let m = [{
                id: 1,
                number: "350,000+",
                title: "Students worldwide"
            }, {
                id: 2,
                number: "496,000+",
                title: "Total course views"
            }, {
                id: 3,
                number: "19,000+",
                title: "Five-star course reviews"
            }, {
                id: 4,
                number: "987,000+",
                title: "Students community"
            }];

            function d() {
                let [e, t] = (0, o.useState)(!1);
                return (0, o.useEffect)(() => {
                    t(!0)
                }, []), (0, i.jsx)("section", {
                    className: "layout-pt-lg mt-80 layout-pb-lg bg-purple-1",
                    children: (0, i.jsxs)("div", {
                        className: "container ",
                        children: [(0, i.jsx)("div", {
                            className: "row justify-center text-center",
                            children: (0, i.jsx)("div", {
                                className: "col-auto",
                                children: (0, i.jsxs)("div", {
                                    className: "sectionTitle ",
                                    children: [(0, i.jsx)("h2", {
                                        className: "sectionTitle__title text-green-1",
                                        children: "What People Say"
                                    }), (0, i.jsx)("p", {
                                        className: "sectionTitle__text text-white",
                                        children: "Lorem ipsum dolor sit amet, consectetur."
                                    })]
                                })
                            })
                        }), (0, i.jsxs)("div", {
                            className: "js-section-slider pt-50",
                            children: [e && (0, i.jsx)(l.tq, {
                                className: "overflow-visible",
                                modules: [r.W_, r.tl],
                                navigation: {
                                    nextEl: ".icon-arrow-right",
                                    prevEl: ".icon-arrow-left"
                                },
                                loop: !0,
                                spaceBetween: 30,
                                slidesPerView: 1,
                                breakpoints: {
                                    450: {
                                        slidesPerView: 1
                                    },
                                    768: {
                                        slidesPerView: 2
                                    },
                                    1200: {
                                        slidesPerView: 3
                                    }
                                },
                                children: c.pb.map((e, t) => (0, i.jsx)(l.o5, {
                                    className: "swiper-slide",
                                    children: (0, i.jsx)("div", {
                                        className: "testimonials -type-1",
                                        "data-aos": "fade-left",
                                        "data-aos-duration": (t + 1) * 550,
                                        children: (0, i.jsxs)("div", {
                                            className: "testimonials__content",
                                            children: [(0, i.jsx)("h4", {
                                                className: "testimonials__title",
                                                children: e.comment
                                            }), (0, i.jsx)("p", {
                                                className: "testimonials__text",
                                                children: "“".concat(e.description, "”")
                                            }), (0, i.jsxs)("div", {
                                                className: "testimonials-footer",
                                                children: [(0, i.jsx)("div", {
                                                    className: "testimonials-footer__image",
                                                    children: (0, i.jsx)(a(), {
                                                        width: 60,
                                                        height: 60,
                                                        src: e.imageSrc,
                                                        alt: "image"
                                                    })
                                                }), (0, i.jsxs)("div", {
                                                    className: "testimonials-footer__content",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "testimonials-footer__title",
                                                        children: e.name
                                                    }), (0, i.jsx)("div", {
                                                        className: "testimonials-footer__text",
                                                        children: e.position
                                                    })]
                                                })]
                                            })]
                                        })
                                    })
                                }, t))
                            }), (0, i.jsxs)("div", {
                                className: "d-flex x-gap-20 items-center justify-end pt-60 lg:pt-40",
                                children: [(0, i.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, i.jsx)("button", {
                                        className: "button -outline-white text-white size-50 rounded-full d-flex justify-center items-center js-prev",
                                        children: (0, i.jsx)("i", {
                                            className: "icon icon-arrow-left text-24"
                                        })
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, i.jsx)("button", {
                                        className: "button -outline-white text-white size-50 rounded-full d-flex justify-center items-center js-next",
                                        children: (0, i.jsx)("i", {
                                            className: "icon icon-arrow-right text-24"
                                        })
                                    })
                                })]
                            })]
                        }), (0, i.jsx)("div", {
                            className: "row y-gap-30  counter__row",
                            children: m.map((e, t) => (0, i.jsx)("div", {
                                className: "col-lg-3 col-sm-6",
                                "data-aos": "fade-left",
                                "data-aos-duration": (t + 1) * 350,
                                children: (0, i.jsxs)("div", {
                                    className: "counter -type-1",
                                    children: [(0, i.jsx)("div", {
                                        className: "counter__number",
                                        children: e.number
                                    }), (0, i.jsx)("div", {
                                        className: "counter__title",
                                        children: e.title
                                    })]
                                })
                            }, t))
                        })]
                    })
                })
            }
        },
        41715: function(e, t, s) {
            "use strict";
            s.d(t, {
                nE: function() {
                    return a
                },
                pb: function() {
                    return i
                },
                r: function() {
                    return n
                },
                te: function() {
                    return o
                }
            });
            let i = [{
                    id: 0,
                    imageSrc: "/assets/img/testimonials/1.png",
                    name: "Courtney Henry",
                    position: "Web Designer",
                    comment: "Great Work",
                    description: "I think Educrat is the best theme I ever seen this year.\n        Amazing design, easy to customize and a design quality\n        superlative account on its cloud platform for the\n        optimized performance"
                }, {
                    id: 1,
                    imageSrc: "/assets/img/testimonials/2.png",
                    name: "Ronald Richards",
                    position: "President of Sales",
                    comment: "Great Work",
                    description: "I think Educrat is the best theme I ever seen this year.\n        Amazing design, easy to customize and a design quality\n        superlative account on its cloud platform for the\n        optimized performance"
                }, {
                    id: 2,
                    imageSrc: "/assets/img/testimonials/3.png",
                    name: "Annette Black",
                    position: "Nursing Assistant",
                    comment: "Great Work",
                    description: "I think Educrat is the best theme I ever seen this year.\n        Amazing design, easy to customize and a design quality\n        superlative account on its cloud platform for the\n        optimized performance"
                }, {
                    id: 3,
                    imageSrc: "/assets/img/testimonials/4.png",
                    name: "Courtney Henry",
                    position: "Web Designer",
                    comment: "Great Work",
                    description: "I think Educrat is the best theme I ever seen this year.\n        Amazing design, easy to customize and a design quality\n        superlative account on its cloud platform for the\n        optimized performance"
                }],
                n = [{
                    id: 1,
                    author: "Ali Tufan",
                    position: "Product Manager, Apple Inc",
                    text: "It is no exaggeration to say this Educrat experience was transformative–both professionally and personally. This workshop will long remain a high point of my life."
                }, {
                    id: 2,
                    author: "John Smith",
                    position: "Marketing Director, XYZ Company",
                    text: "Educrat has helped me acquire valuable skills that have greatly enhanced my career prospects. The courses are comprehensive and taught by industry experts."
                }, {
                    id: 3,
                    author: "Emily Johnson",
                    position: "Freelance Graphic Designer",
                    text: "I've been using Educrat for several months now, and I'm impressed by the quality of the courses. They cover a wide range of topics and are easy to follow."
                }, {
                    id: 4,
                    author: "David Brown",
                    position: "Software Engineer, ABC Corporation",
                    text: "I highly recommend Educrat for anyone looking to upskill or learn new technologies. The platform is user-friendly, and the instructors are knowledgeable."
                }, {
                    id: 5,
                    author: "Sarah Thompson",
                    position: "Digital Marketing Specialist",
                    text: "Educrat has been a game-changer for me. The courses are up-to-date and relevant, helping me stay ahead in the ever-changing field of digital marketing."
                }],
                a = ["/assets/img/home-3/testimonials/1.png", "/assets/img/home-3/testimonials/2.png", "/assets/img/home-3/testimonials/3.png", "/assets/img/home-3/testimonials/4.png", "/assets/img/home-3/testimonials/5.png"],
                o = [{
                    id: 1,
                    image: "/assets/img/home-4/testimonials/1.png",
                    rating: 4.5,
                    numRatings: 1991,
                    text: "I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design.",
                    name: "Courtney Henry",
                    profession: "Web Designer"
                }, {
                    id: 2,
                    image: "/assets/img/home-4/testimonials/2.png",
                    rating: 4.5,
                    numRatings: 1991,
                    text: "I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design.",
                    name: "Courtney Henry",
                    profession: "Web Designer"
                }, {
                    id: 3,
                    image: "/assets/img/home-4/testimonials/3.png",
                    rating: 4.5,
                    numRatings: 1991,
                    text: "I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design.",
                    name: "Courtney Henry",
                    profession: "Web Designer"
                }]
        }
    },
    function(e) {
        e.O(0, [8201, 6721, 1840, 5127, 4240, 4119, 7102, 9253, 6488, 1744], function() {
            return e(e.s = 13594)
        }), _N_E = e.O()
    }
]);