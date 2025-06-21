(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6695], {
        52001: function(e, s, i) {
            Promise.resolve().then(i.t.bind(i, 28707, 23)), Promise.resolve().then(i.t.bind(i, 8920, 23)), Promise.resolve().then(i.bind(i, 1311)), Promise.resolve().then(i.bind(i, 63757)), Promise.resolve().then(i.bind(i, 46889)), Promise.resolve().then(i.bind(i, 24772)), Promise.resolve().then(i.bind(i, 53179)), Promise.resolve().then(i.bind(i, 82551)), Promise.resolve().then(i.bind(i, 43775)), Promise.resolve().then(i.bind(i, 8001))
        },
        63757: function(e, s, i) {
            "use strict";
            i.r(s), i.d(s, {
                default: function() {
                    return o
                }
            });
            var t = i(9268),
                a = i(86006),
                l = i(36115),
                n = i(70382),
                r = i(41715),
                c = i(76394),
                d = i.n(c);

            function o(e) {
                let {
                    backgroundComponent: s
                } = e, i = (0, a.useRef)(null), [c, o] = (0, a.useState)(0), [m, h] = (0, a.useState)(!1);
                (0, a.useEffect)(() => {
                    h(!0), i.current && i.current.slideTo(0)
                }, []);
                let u = e => {
                    o(e), i.current && i.current.slideTo(e)
                };
                return (0, t.jsxs)("section", {
                    className: "layout-pt-lg layout-pb-lg section-bg",
                    children: [(0, t.jsx)("div", {
                        className: "section-bg__item  ".concat(s ? "bg-white-two" : "bg-light-6")
                    }), (0, t.jsxs)("div", {
                        className: "container",
                        children: [(0, t.jsx)("div", {
                            className: "row y-gap-20 justify-center text-center",
                            children: (0, t.jsx)("div", {
                                className: "col-auto",
                                children: (0, t.jsxs)("div", {
                                    className: "sectionTitle ",
                                    children: [(0, t.jsx)("h2", {
                                        className: "sectionTitle__title ",
                                        children: "Testimonials"
                                    }), (0, t.jsx)("p", {
                                        className: "sectionTitle__text ",
                                        children: "10,000+ unique online course list designs"
                                    })]
                                })
                            })
                        }), (0, t.jsx)("div", {
                            className: "row justify-center pt-60",
                            children: (0, t.jsx)("div", {
                                className: "col-xl-6 col-lg-8 col-md-10",
                                children: (0, t.jsxs)("div", {
                                    className: "overflow-hidden js-testimonials-slider",
                                    children: [m && (0, t.jsx)(n.tq, {
                                        className: "overflow-visible",
                                        modules: [l.W_, l.tl],
                                        loop: !0,
                                        spaceBetween: 4,
                                        speed: 1e3,
                                        slidesPerView: 1,
                                        onSwiper: e => {
                                            i.current = e
                                        },
                                        onSlideChange: e => {
                                            o(e.activeIndex), e.activeIndex >= 5 && o(e.activeIndex - 5)
                                        },
                                        children: r.r.map((e, s) => (0, t.jsx)(n.o5, {
                                            className: "swiper-slide",
                                            children: (0, t.jsx)("div", {
                                                className: "swiper-slide h-100",
                                                children: (0, t.jsxs)("div", {
                                                    className: "testimonials -type-2 text-center",
                                                    "data-aos": "fade-up",
                                                    "data-aos-duration": 600,
                                                    children: [(0, t.jsx)("div", {
                                                        className: "testimonials__icon",
                                                        children: (0, t.jsx)(d(), {
                                                            width: 60,
                                                            height: 43,
                                                            src: "/assets/img/misc/quote.svg",
                                                            alt: "quote"
                                                        })
                                                    }), (0, t.jsx)("div", {
                                                        className: "testimonials__text md:text-20 fw-500 text-dark-1",
                                                        children: e.text
                                                    }), (0, t.jsxs)("div", {
                                                        className: "testimonials__author",
                                                        children: [(0, t.jsx)("h5", {
                                                            className: "text-17 lh-15 fw-500",
                                                            children: e.author
                                                        }), (0, t.jsx)("div", {
                                                            className: "mt-5",
                                                            children: e.position
                                                        })]
                                                    })]
                                                })
                                            })
                                        }, s))
                                    }), (0, t.jsx)("div", {
                                        className: "pt-60 lg:pt-40",
                                        children: (0, t.jsx)("div", {
                                            className: "pagination -avatars row x-gap-40 y-gap-20 justify-center js-testimonials-pagination",
                                            children: r.nE.map((e, s) => (0, t.jsx)("div", {
                                                onClick: () => u(s),
                                                className: "col-auto ",
                                                children: (0, t.jsx)("div", {
                                                    className: "pagination__item ".concat(c == s ? "is-active" : ""),
                                                    children: (0, t.jsx)(d(), {
                                                        width: 70,
                                                        height: 70,
                                                        src: e,
                                                        alt: "image"
                                                    })
                                                })
                                            }, s))
                                        })
                                    })]
                                })
                            })
                        })]
                    })]
                })
            }
        },
        24274: function(e, s, i) {
            "use strict";
            i.d(s, {
                Z: function() {
                    return d
                }
            });
            var t = i(9268),
                a = i(86006),
                l = i(76394),
                n = i.n(l),
                r = i(35846),
                c = i.n(r);

            function d(e) {
                let {
                    data: s,
                    index: i
                } = e, [l, r] = (0, a.useState)([]);
                return (0, a.useEffect)(() => {
                    for (let e = Math.round(s.rating); e >= 1; e--) r(e => [...e, "star"])
                }, []), (0, t.jsx)("div", {
                    className: "col-lg-3 col-md-6",
                    children: (0, t.jsx)("div", {
                        children: (0, t.jsxs)("div", {
                            className: "coursesCard -type-1",
                            children: [(0, t.jsxs)("div", {
                                className: "relative",
                                children: [(0, t.jsxs)("div", {
                                    className: "coursesCard__image overflow-hidden rounded-8",
                                    children: [(0, t.jsx)(n(), {
                                        width: 500,
                                        height: 500,
                                        style: {
                                            height: "100%",
                                            width: "100%"
                                        },
                                        className: "w-1/1",
                                        src: s.imageSrc,
                                        alt: "image"
                                    }), (0, t.jsx)("div", {
                                        className: "coursesCard__image_overlay rounded-8"
                                    })]
                                }), s.popular && (0, t.jsxs)("div", {
                                    className: "d-flex justify-between py-10 px-10 absolute-full-center z-3",
                                    children: [(0, t.jsx)("div", {
                                        children: (0, t.jsx)("div", {
                                            className: "px-15 rounded-200 bg-purple-1",
                                            children: (0, t.jsx)("span", {
                                                className: "text-11 lh-1 uppercase fw-500 text-white",
                                                children: "Popular"
                                            })
                                        })
                                    }), (0, t.jsx)("div", {
                                        children: (0, t.jsx)("div", {
                                            className: "px-15 rounded-200 bg-green-1",
                                            children: (0, t.jsx)("span", {
                                                className: "text-11 lh-1 uppercase fw-500 text-dark-1",
                                                children: "Best sellers"
                                            })
                                        })
                                    })]
                                }), (0, t.jsx)("div", {
                                    className: "d-flex justify-between py-10 px-10 absolute-full-center z-3"
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "h-100 pt-15",
                                children: [(0, t.jsxs)("div", {
                                    className: "d-flex items-center",
                                    children: [(0, t.jsx)("div", {
                                        className: "text-14 lh-1 text-yellow-1 mr-10",
                                        children: s.rating
                                    }), (0, t.jsx)("div", {
                                        className: "d-flex x-gap-5 items-center",
                                        children: l.map((e, s) => (0, t.jsx)("div", {
                                            className: "icon-star text-9 text-yellow-1"
                                        }, s))
                                    }), (0, t.jsxs)("div", {
                                        className: "text-13 lh-1 ml-10",
                                        children: ["(", s.ratingCount, ")"]
                                    })]
                                }), (0, t.jsx)("div", {
                                    className: "text-17 lh-15 fw-500 text-dark-1 mt-10",
                                    children: (0, t.jsx)(c(), {
                                        className: "linkCustom",
                                        href: "/courses/".concat(s.id),
                                        children: s.title
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: "d-flex x-gap-10 items-center pt-10",
                                    children: [(0, t.jsxs)("div", {
                                        className: "d-flex items-center",
                                        children: [(0, t.jsx)("div", {
                                            className: "mr-8",
                                            children: (0, t.jsx)(n(), {
                                                width: 16,
                                                height: 17,
                                                src: "assets/img/coursesCards/icons/1.svg",
                                                alt: "icon"
                                            })
                                        }), (0, t.jsxs)("div", {
                                            className: "text-14 lh-1",
                                            children: [s.lessonCount, " lesson"]
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "d-flex items-center",
                                        children: [(0, t.jsx)("div", {
                                            className: "mr-8",
                                            children: (0, t.jsx)(n(), {
                                                width: 16,
                                                height: 17,
                                                src: "assets/img/coursesCards/icons/2.svg",
                                                alt: "icon"
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: "text-14 lh-1",
                                            children: "".concat(Math.floor(s.duration / 60), "h ").concat(Math.floor(s.duration % 60), "m")
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "d-flex items-center",
                                        children: [(0, t.jsx)("div", {
                                            className: "mr-8",
                                            children: (0, t.jsx)(n(), {
                                                width: 16,
                                                height: 17,
                                                src: "assets/img/coursesCards/icons/3.svg",
                                                alt: "icon"
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: "text-14 lh-1",
                                            children: s.level
                                        })]
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "coursesCard-footer",
                                    children: [(0, t.jsxs)("div", {
                                        className: "coursesCard-footer__author",
                                        children: [(0, t.jsx)(n(), {
                                            width: 30,
                                            height: 30,
                                            src: s.authorImageSrc,
                                            alt: "image"
                                        }), (0, t.jsx)("div", {
                                            children: s.authorName
                                        })]
                                    }), (0, t.jsx)("div", {
                                        className: "coursesCard-footer__price",
                                        children: s.paid ? (0, t.jsxs)(t.Fragment, {
                                            children: [(0, t.jsxs)("div", {
                                                children: ["$", s.originalPrice]
                                            }), (0, t.jsxs)("div", {
                                                children: ["$", s.discountedPrice]
                                            })]
                                        }) : (0, t.jsxs)(t.Fragment, {
                                            children: [(0, t.jsx)("div", {}), (0, t.jsx)("div", {
                                                children: "Free"
                                            })]
                                        })
                                    })]
                                })]
                            })]
                        })
                    })
                })
            }
        },
        53179: function(e, s, i) {
            "use strict";
            i.r(s), i.d(s, {
                default: function() {
                    return u
                }
            });
            var t = i(9268),
                a = i(86006),
                l = i(76394),
                n = i.n(l),
                r = i(35846),
                c = i.n(r);

            function d(e) {
                let {
                    data: s,
                    index: i
                } = e, [l, r] = (0, a.useState)([]);
                return (0, a.useEffect)(() => {
                    for (let e = Math.round(s.rating); e >= 1; e--) r(e => [...e, "star"])
                }, []), (0, t.jsx)("div", {
                    className: "swiper-slide -type-1 px-10 py-10 border-light  rounded-8",
                    style: {
                        height: "fit-content"
                    },
                    children: (0, t.jsx)("div", {
                        children: (0, t.jsxs)("div", {
                            className: "coursesCard -type-1 ",
                            children: [(0, t.jsxs)("div", {
                                className: "relative",
                                children: [(0, t.jsxs)("div", {
                                    className: "coursesCard__image overflow-hidden rounded-8",
                                    children: [(0, t.jsx)(n(), {
                                        width: 500,
                                        height: 500,
                                        style: {
                                            height: "100%",
                                            width: "100%"
                                        },
                                        className: "w-1/1",
                                        src: s.imageSrc,
                                        alt: "image"
                                    }), (0, t.jsx)("div", {
                                        className: "coursesCard__image_overlay rounded-8"
                                    })]
                                }), (0, t.jsx)("div", {
                                    className: "d-flex justify-between py-10 px-10 absolute-full-center z-3"
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "h-100 pt-15",
                                children: [(0, t.jsxs)("div", {
                                    className: "d-flex items-center",
                                    children: [(0, t.jsx)("div", {
                                        className: "text-14 lh-1 text-yellow-1 mr-10",
                                        children: s.rating
                                    }), (0, t.jsx)("div", {
                                        className: "d-flex x-gap-5 items-center",
                                        children: l.map((e, s) => (0, t.jsx)("div", {
                                            className: "icon-star text-9 text-yellow-1"
                                        }, s))
                                    }), (0, t.jsxs)("div", {
                                        className: "text-13 lh-1 ml-10",
                                        children: ["(", s.ratingCount, ")"]
                                    })]
                                }), (0, t.jsx)("div", {
                                    className: "text-17 lh-15 fw-500 text-dark-1 mt-10",
                                    children: (0, t.jsx)(c(), {
                                        className: "linkCustom",
                                        href: "/courses/".concat(s.id),
                                        children: s.title
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: "d-flex x-gap-10 items-center pt-10",
                                    children: [(0, t.jsxs)("div", {
                                        className: "d-flex items-center",
                                        children: [(0, t.jsx)("div", {
                                            className: "mr-8",
                                            children: (0, t.jsx)(n(), {
                                                width: 16,
                                                height: 17,
                                                src: "assets/img/coursesCards/icons/1.svg",
                                                alt: "icon"
                                            })
                                        }), (0, t.jsxs)("div", {
                                            className: "text-14 lh-1",
                                            children: [s.lessonCount, " lesson"]
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "d-flex items-center",
                                        children: [(0, t.jsx)("div", {
                                            className: "mr-8",
                                            children: (0, t.jsx)(n(), {
                                                width: 16,
                                                height: 17,
                                                src: "assets/img/coursesCards/icons/2.svg",
                                                alt: "icon"
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: "text-14 lh-1",
                                            children: "".concat(Math.floor(s.duration / 60), "h ").concat(Math.floor(s.duration % 60), "m")
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "d-flex items-center",
                                        children: [(0, t.jsx)("div", {
                                            className: "mr-8",
                                            children: (0, t.jsx)(n(), {
                                                width: 16,
                                                height: 17,
                                                src: "assets/img/coursesCards/icons/3.svg",
                                                alt: "icon"
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: "text-14 lh-1",
                                            children: s.level
                                        })]
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "coursesCard-footer",
                                    children: [(0, t.jsxs)("div", {
                                        className: "coursesCard-footer__author",
                                        children: [(0, t.jsx)(n(), {
                                            width: 30,
                                            height: 30,
                                            src: s.authorImageSrc,
                                            alt: "image"
                                        }), (0, t.jsx)("div", {
                                            children: s.authorName
                                        })]
                                    }), (0, t.jsx)("div", {
                                        className: "coursesCard-footer__price",
                                        children: s.paid ? (0, t.jsxs)(t.Fragment, {
                                            children: [(0, t.jsxs)("div", {
                                                children: ["$", s.originalPrice]
                                            }), (0, t.jsxs)("div", {
                                                children: ["$", s.discountedPrice]
                                            })]
                                        }) : (0, t.jsxs)(t.Fragment, {
                                            children: [(0, t.jsx)("div", {}), (0, t.jsx)("div", {
                                                children: "Free"
                                            })]
                                        })
                                    })]
                                })]
                            })]
                        })
                    })
                })
            }
            var o = i(68148),
                m = i(36115),
                h = i(70382);

            function u() {
                let [e, s] = (0, a.useState)(!1);
                return (0, a.useEffect)(() => {
                    s(!0)
                }, []), (0, t.jsxs)("section", {
                    className: "layout-pt-lg layout-pb-lg section-bg",
                    children: [(0, t.jsx)("div", {
                        className: "section-bg__item bg-light-6"
                    }), (0, t.jsxs)("div", {
                        className: "container",
                        children: [(0, t.jsxs)("div", {
                            className: "row y-gap-15 justify-between items-center",
                            children: [(0, t.jsx)("div", {
                                className: "col-lg-6",
                                children: (0, t.jsxs)("div", {
                                    className: "sectionTitle ",
                                    children: [(0, t.jsx)("h2", {
                                        className: "sectionTitle__title ",
                                        children: "Top courses"
                                    }), (0, t.jsx)("p", {
                                        className: "sectionTitle__text ",
                                        children: "10,000+ unique online course list designs"
                                    })]
                                })
                            }), (0, t.jsx)("div", {
                                className: "col-lg-auto",
                                children: (0, t.jsx)("div", {
                                    className: "d-inline-block",
                                    children: (0, t.jsxs)(c(), {
                                        href: "/courses-list-1",
                                        className: "button -icon -light-11 -purple-3 text-purple-1 ",
                                        children: ["All Courses", (0, t.jsx)("i", {
                                            className: "icon-arrow-top-right text-13 ml-10"
                                        })]
                                    })
                                })
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "relative",
                            children: [(0, t.jsx)("div", {
                                className: "overflow-hidden pt-60 lg:pt-50 js-section-slider",
                                "data-aos": "fade-left",
                                "data-aos-offset": "80",
                                "data-aos-duration": 800,
                                children: (0, t.jsx)("div", {
                                    className: "swiper-wrapper",
                                    children: e && (0, t.jsx)(h.tq, {
                                        modules: [m.W_, m.tl],
                                        navigation: {
                                            nextEl: ".icon-arrow-right",
                                            prevEl: ".icon-arrow-left"
                                        },
                                        spaceBetween: 30,
                                        slidesPerView: 1,
                                        loop: !0,
                                        breakpoints: {
                                            450: {
                                                slidesPerView: 2
                                            },
                                            768: {
                                                slidesPerView: 3
                                            },
                                            1200: {
                                                slidesPerView: 4
                                            }
                                        },
                                        children: o.om.slice(0, 12).map((e, s) => (0, t.jsx)(h.o5, {
                                            children: (0, t.jsx)(d, {
                                                data: e,
                                                index: s
                                            })
                                        }, s))
                                    })
                                })
                            }), (0, t.jsx)("button", {
                                className: "section-slider-nav -prev -dark-bg-dark-2 -outline-dark-1 -absolute-out size-50 rounded-full xl:d-none js-courses-prev",
                                children: (0, t.jsx)("i", {
                                    className: "icon icon-arrow-left text-24"
                                })
                            }), (0, t.jsx)("button", {
                                className: "section-slider-nav -next -dark-bg-dark-2 -outline-dark-1 -absolute-out size-50 rounded-full xl:d-none js-courses-next",
                                children: (0, t.jsx)("i", {
                                    className: "icon icon-arrow-right text-24"
                                })
                            })]
                        })]
                    })]
                })
            }
        },
        82551: function(e, s, i) {
            "use strict";
            i.r(s), i.d(s, {
                default: function() {
                    return d
                }
            });
            var t = i(9268),
                a = i(86006),
                l = i(68148),
                n = i(24274),
                r = i(35846),
                c = i.n(r);

            function d() {
                let [e, s] = (0, a.useState)(!1), [i, r] = (0, a.useState)("All"), [d, o] = (0, a.useState)([]);
                return (0, a.useEffect)(() => {
                    if (s(!1), "All" == i) o(l.om);
                    else {
                        let e = l.om.filter(e => e.viewStatus == i);
                        o(e)
                    }
                }, [i]), (0, t.jsx)("section", {
                    className: "layout-pt-lg layout-pb-lg",
                    children: (0, t.jsxs)("div", {
                        className: "container",
                        children: [(0, t.jsxs)("div", {
                            className: "row y-gap-15 justify-between items-center",
                            children: [(0, t.jsx)("div", {
                                className: "col-lg-6",
                                children: (0, t.jsxs)("div", {
                                    className: "sectionTitle ",
                                    children: [(0, t.jsx)("h2", {
                                        className: "sectionTitle__title ",
                                        children: "Recent courses"
                                    }), (0, t.jsx)("p", {
                                        className: "sectionTitle__text ",
                                        children: "10,000+ unique online course list designs"
                                    })]
                                })
                            }), (0, t.jsx)("div", {
                                className: "col-lg-auto",
                                children: (0, t.jsx)("div", {
                                    className: "d-inline-block",
                                    children: (0, t.jsxs)("div", {
                                        className: "dropdown js-dropdown js-category-active ".concat(e ? "-is-dd-active" : ""),
                                        children: [(0, t.jsxs)("div", {
                                            onClick: () => s(e => !e),
                                            className: "dropdown__button d-flex items-center text-14 rounded-8 px-15 py-10 text-dark-1",
                                            children: [(0, t.jsx)("span", {
                                                className: "js-dropdown-title",
                                                children: "Popular Most Viwed"
                                            }), (0, t.jsx)("i", {
                                                className: "icon text-9 ml-40 icon-chevron-down"
                                            })]
                                        }), (0, t.jsx)("div", {
                                            className: "toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle ".concat(e ? "-is-el-visible" : "", " "),
                                            children: (0, t.jsx)("div", {
                                                className: "text-14 y-gap-15 js-dropdown-list",
                                                children: l.Q8.map((e, s) => (0, t.jsx)("div", {
                                                    className: "d-block js-dropdown-link cursor ".concat(i == e ? "activeMenu" : "", " "),
                                                    onClick: () => r(e),
                                                    children: e
                                                }, s))
                                            })
                                        })]
                                    })
                                })
                            })]
                        }), (0, t.jsx)("div", {
                            className: "row y-gap-30 justify-start pt-50",
                            "data-aos": "fade-right",
                            "data-aos-offset": "80",
                            "data-aos-duration": 800,
                            children: d.slice(0, 8).map((e, s) => (0, t.jsx)(n.Z, {
                                index: s,
                                data: e
                            }, s))
                        }), (0, t.jsx)("div", {
                            className: "row justify-center pt-60 lg:pt-40",
                            children: (0, t.jsx)("div", {
                                className: "col-auto",
                                children: (0, t.jsxs)(c(), {
                                    href: "/courses-list-1",
                                    className: "button -icon -purple-3 text-purple-1",
                                    children: ["All Courses", (0, t.jsx)("i", {
                                        className: "icon-arrow-top-right text-13 ml-10"
                                    })]
                                })
                            })
                        })]
                    })
                })
            }
        },
        24772: function(e, s, i) {
            "use strict";
            i.r(s), i.d(s, {
                default: function() {
                    return n
                }
            });
            var t = i(9268),
                a = i(35846),
                l = i.n(a);

            function n() {
                return (0, t.jsxs)("section", {
                    className: "masthead -type-2",
                    children: [(0, t.jsx)("div", {
                        className: "masthead__bg",
                        children: (0, t.jsx)("div", {
                            style: {
                                backgroundImage: "url(/assets/img/home-3/masthead/bg.png)"
                            },
                            className: "bg-image js-lazy",
                            "data-bg": "/assets/img/home-3/masthead/bg.png"
                        })
                    }), (0, t.jsx)("div", {
                        className: "container",
                        children: (0, t.jsxs)("div", {
                            className: "row y-gap-50 justify-center items-center",
                            children: [(0, t.jsx)("div", {
                                className: "col-xl-6 col-lg-11",
                                "data-aos": "fade-up",
                                "data-aos-delay": "500",
                                children: (0, t.jsxs)("div", {
                                    className: "masthead__content",
                                    children: [(0, t.jsx)("div", {
                                        className: "masthead__subtitle fw-500 text-green-1 text-17 lh-15",
                                        children: "Start learning for free"
                                    }), (0, t.jsx)("h1", {
                                        className: "masthead__title text-white mt-10",
                                        children: "Explore your creativity with thousands of online classes."
                                    }), (0, t.jsx)("div", {
                                        className: "masthead__button mt-20",
                                        children: (0, t.jsx)(l(), {
                                            href: "/courses-list-1",
                                            className: "button -md -white text-dark-1",
                                            children: "Find Courses"
                                        })
                                    })]
                                })
                            }), (0, t.jsx)("div", {
                                className: "col-xl-5 col-lg-11",
                                "data-aos": "fade-up",
                                "data-aos-delay": "750",
                                children: (0, t.jsxs)("div", {
                                    className: "masthead-form",
                                    children: [(0, t.jsxs)("h4", {
                                        className: "masthead-form__title text-center text-20 lh-15 fw-500 mb-30",
                                        children: ["Create Your ", (0, t.jsx)("span", {
                                            className: "text-purple-1",
                                            children: "Free Account"
                                        })]
                                    }), (0, t.jsxs)("form", {
                                        onSubmit: e => {
                                            e.preventDefault()
                                        },
                                        children: [(0, t.jsxs)("div", {
                                            className: "masthead-form__group",
                                            children: [(0, t.jsx)("label", {
                                                children: "Email Address"
                                            }), (0, t.jsx)("input", {
                                                required: !0,
                                                type: "text",
                                                placeholder: "Your Email"
                                            })]
                                        }), (0, t.jsxs)("div", {
                                            className: "masthead-form__group",
                                            children: [(0, t.jsx)("label", {
                                                children: "Password"
                                            }), (0, t.jsx)("input", {
                                                required: !0,
                                                type: "text",
                                                placeholder: "Your Password"
                                            })]
                                        }), (0, t.jsx)("div", {
                                            className: "masthead-form__group",
                                            children: (0, t.jsx)("button", {
                                                type: "submit",
                                                className: "button -md -purple-1 text-white",
                                                children: "Start Learning For Free"
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: "masthead-form__desc",
                                            children: "By continuing, you accept our Terms of Use, our Privacy Policy and that your data is stored in the USA. You confirm you are at least 16 years old (13 if you are an authorized Classrooms user)."
                                        })]
                                    })]
                                })
                            })]
                        })
                    })]
                })
            }
            i(86006)
        },
        8001: function(e, s, i) {
            "use strict";
            i.r(s), i.d(s, {
                default: function() {
                    return n
                }
            });
            var t = i(9268);
            i(86006);
            var a = i(76394),
                l = i.n(a);

            function n() {
                return (0, t.jsxs)("section", {
                    className: "layout-pt-lg layout-pb-lg mb-90 section-bg",
                    children: [(0, t.jsx)("div", {
                        className: "section-bg__item",
                        children: (0, t.jsx)(l(), {
                            width: 1200,
                            height: 1200,
                            className: "img-full rounded-16",
                            src: "/assets/img/home-3/cta/bg.png",
                            alt: "image"
                        })
                    }), (0, t.jsxs)("div", {
                        className: "container",
                        children: [(0, t.jsx)("div", {
                            className: "row justify-center text-center",
                            children: (0, t.jsx)("div", {
                                className: "col-xl-5 col-lg-6 col-md-11",
                                children: (0, t.jsxs)("div", {
                                    className: "sectionTitle -light",
                                    children: [(0, t.jsx)("h2", {
                                        className: "sectionTitle__title ",
                                        children: "Subscribe our Newsletter &"
                                    }), (0, t.jsx)("p", {
                                        className: "sectionTitle__text ",
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                    })]
                                })
                            })
                        }), (0, t.jsx)("div", {
                            className: "row mt-30 justify-center",
                            children: (0, t.jsx)("div", {
                                className: "col-lg-6",
                                children: (0, t.jsxs)("form", {
                                    className: "form-single-field -help",
                                    action: "post",
                                    onSubmit: e => {
                                        e.preventDefault()
                                    },
                                    children: [(0, t.jsx)("input", {
                                        required: !0,
                                        type: "text",
                                        placeholder: "Your Email..."
                                    }), (0, t.jsx)("button", {
                                        className: "button -purple-1 text-white",
                                        type: "submit",
                                        children: "Submit"
                                    })]
                                })
                            })
                        })]
                    })]
                })
            }
        },
        43775: function(e, s, i) {
            "use strict";
            i.r(s), i.d(s, {
                default: function() {
                    return o
                }
            });
            var t = i(9268),
                a = i(86006),
                l = i(36115),
                n = i(70382);
            i(17544);
            let r = [{
                id: 1,
                imageSrc: "/assets/img/home-3/learn/1.png",
                skill: "Node Js",
                delay: 1
            }, {
                id: 2,
                imageSrc: "/assets/img/home-3/learn/2.png",
                skill: "HTML5",
                delay: 2
            }, {
                id: 3,
                imageSrc: "/assets/img/home-3/learn/3.png",
                skill: "JQuery",
                delay: 3
            }, {
                id: 4,
                imageSrc: "/assets/img/home-3/learn/4.png",
                skill: "CSS",
                delay: 4
            }, {
                id: 5,
                imageSrc: "/assets/img/home-3/learn/5.png",
                skill: "React Native",
                delay: 5
            }, {
                id: 6,
                imageSrc: "/assets/img/home-3/learn/6.png",
                skill: "Vue Js",
                delay: 6
            }];
            var c = i(76394),
                d = i.n(c);

            function o() {
                let [e, s] = (0, a.useState)(!1);
                return (0, a.useEffect)(() => {
                    s(!0)
                }, []), (0, t.jsx)("section", {
                    className: "layout-pt-lg layout-pb-lg",
                    children: (0, t.jsxs)("div", {
                        className: "container",
                        children: [(0, t.jsx)("div", {
                            className: "row y-gap-20 justify-center text-center",
                            children: (0, t.jsx)("div", {
                                className: "col-auto",
                                children: (0, t.jsxs)("div", {
                                    className: "sectionTitle ",
                                    children: [(0, t.jsx)("h2", {
                                        className: "sectionTitle__title ",
                                        children: "What will you learn"
                                    }), (0, t.jsx)("p", {
                                        className: "sectionTitle__text ",
                                        children: "10,000+ unique online course list designs"
                                    })]
                                })
                            })
                        }), (0, t.jsx)("div", {
                            className: "pt-60 lg:pt-50",
                            children: (0, t.jsxs)("div", {
                                className: "overflow-hidden js-section-slider",
                                children: [(0, t.jsx)("div", {
                                    className: "swiper-wrapper",
                                    children: e && (0, t.jsx)(n.tq, {
                                        modules: [l.W_, l.tl],
                                        pagination: {
                                            el: ".pagination-skils",
                                            clickable: !0
                                        },
                                        navigation: {
                                            nextEl: ".arrow-right-one",
                                            prevEl: ".arrow-left-one"
                                        },
                                        spaceBetween: 30,
                                        slidesPerView: 1,
                                        breakpoints: {
                                            450: {
                                                slidesPerView: 2
                                            },
                                            768: {
                                                slidesPerView: 4
                                            },
                                            1200: {
                                                slidesPerView: 6
                                            }
                                        },
                                        loop: !0,
                                        children: r.map((e, s) => (0, t.jsx)(n.o5, {
                                            children: (0, t.jsx)("div", {
                                                className: "swiper-slide h-100 overflow-visible",
                                                children: (0, t.jsxs)("div", {
                                                    className: "infoCard -type-1",
                                                    "data-aos": "fade-left",
                                                    "data-aos-duration": (s + 1) * 300,
                                                    children: [(0, t.jsx)("div", {
                                                        className: "infoCard__image",
                                                        children: (0, t.jsx)(d(), {
                                                            width: 150,
                                                            height: 100,
                                                            style: {
                                                                width: "100%",
                                                                objectFit: "contain"
                                                            },
                                                            src: e.imageSrc,
                                                            alt: "image"
                                                        })
                                                    }), (0, t.jsx)("h5", {
                                                        className: "infoCard__title text-17 lh-15 mt-10",
                                                        children: e.skill
                                                    })]
                                                })
                                            })
                                        }, s))
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "d-flex justify-center x-gap-15 items-center pt-60 lg:pt-40",
                                    children: (0, t.jsx)("div", {
                                        className: "col-auto",
                                        children: (0, t.jsx)("div", {
                                            className: "pagination-skils -arrows js-pagination"
                                        })
                                    })
                                })]
                            })
                        })]
                    })
                })
            }
        },
        46889: function(e, s, i) {
            "use strict";
            i.r(s), i.d(s, {
                default: function() {
                    return u
                }
            });
            var t = i(9268),
                a = i(86006),
                l = i(34119),
                n = i(39179),
                r = i(16797),
                c = i(51469),
                d = i(76394),
                o = i.n(d),
                m = i(35846),
                h = i.n(m);

            function u() {
                let [e, s] = (0, a.useState)(!1);
                return (0, t.jsx)("header", {
                    className: "header -type-3 js-header",
                    children: (0, t.jsx)("div", {
                        className: "header__container py-10",
                        children: (0, t.jsxs)("div", {
                            className: "row justify-between items-center",
                            children: [(0, t.jsx)("div", {
                                className: "col-auto",
                                children: (0, t.jsxs)("div", {
                                    className: "header-left d-flex items-center",
                                    children: [(0, t.jsx)("div", {
                                        className: "header__logo ",
                                        children: (0, t.jsx)(h(), {
                                            href: "/",
                                            children: (0, t.jsx)(o(), {
                                                width: 140,
                                                height: 50,
                                                src: "/assets/img/general/logo-dark.svg",
                                                alt: "logo"
                                            })
                                        })
                                    }), (0, t.jsx)(l.n, {
                                        allClasses: "header__explore text-purple-1 ml-30 xl:d-none"
                                    }), (0, t.jsx)("div", {
                                        className: "header-search-field ml-30",
                                        children: (0, t.jsx)("form", {
                                            onSubmit: e => {
                                                e.preventDefault()
                                            },
                                            children: (0, t.jsxs)("div", {
                                                className: "header-search-field__group",
                                                children: [(0, t.jsx)("input", {
                                                    required: !0,
                                                    type: "text",
                                                    placeholder: "What do you want to learn?"
                                                }), (0, t.jsx)("button", {
                                                    type: "submit",
                                                    children: (0, t.jsx)("i", {
                                                        className: "icon icon-search"
                                                    })
                                                })]
                                            })
                                        })
                                    })]
                                })
                            }), (0, t.jsx)("div", {
                                className: "col-auto",
                                children: (0, t.jsxs)("div", {
                                    className: "header-right d-flex items-center",
                                    children: [(0, t.jsxs)("div", {
                                        className: "header-right__icons text-white d-flex items-center",
                                        children: [(0, t.jsx)(r.Z, {
                                            allClasses: "menu__nav text-dark-1 -is-active"
                                        }), (0, t.jsx)(c.Z, {
                                            setActiveMobileMenu: s,
                                            activeMobileMenu: e
                                        }), (0, t.jsx)(n.Z, {
                                            parentClassess: "relative ml-30 xl:ml-20",
                                            allClasses: "d-flex items-center text-dark-1"
                                        }), (0, t.jsx)("div", {
                                            className: "d-none xl:d-block ml-20",
                                            children: (0, t.jsx)("button", {
                                                onClick: () => s(!0),
                                                className: "text-dark-1 items-center",
                                                "data-el-toggle": ".js-mobile-menu-toggle",
                                                children: (0, t.jsx)("i", {
                                                    className: "text-11 icon icon-mobile-menu"
                                                })
                                            })
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "header-right__buttons d-flex items-center ml-30 xl:ml-20 md:d-none",
                                        children: [(0, t.jsx)(h(), {
                                            href: "/login",
                                            className: "button px-30 h-50 -outline-dark-1 text-dark-1",
                                            children: "Log in"
                                        }), (0, t.jsx)(h(), {
                                            href: "/signup",
                                            className: "button px-30 h-50 -dark-1 text-white ml-10",
                                            children: "Sign up"
                                        })]
                                    })]
                                })
                            })]
                        })
                    })
                })
            }
        },
        41715: function(e, s, i) {
            "use strict";
            i.d(s, {
                nE: function() {
                    return l
                },
                pb: function() {
                    return t
                },
                r: function() {
                    return a
                },
                te: function() {
                    return n
                }
            });
            let t = [{
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
                a = [{
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
                l = ["/assets/img/home-3/testimonials/1.png", "/assets/img/home-3/testimonials/2.png", "/assets/img/home-3/testimonials/3.png", "/assets/img/home-3/testimonials/4.png", "/assets/img/home-3/testimonials/5.png"],
                n = [{
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
        },
        17544: function() {}
    },
    function(e) {
        e.O(0, [8201, 6721, 1840, 5127, 4240, 4119, 9253, 6488, 1744], function() {
            return e(e.s = 52001)
        }), _N_E = e.O()
    }
]);