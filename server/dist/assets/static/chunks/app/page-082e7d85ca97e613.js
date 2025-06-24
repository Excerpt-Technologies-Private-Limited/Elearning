(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1931, 4952, 843], {
        10413: function(e, s, t) {
            Promise.resolve().then(t.bind(t, 58460)), Promise.resolve().then(t.bind(t, 5032)), Promise.resolve().then(t.t.bind(t, 28707, 23)), Promise.resolve().then(t.t.bind(t, 8920, 23)), Promise.resolve().then(t.bind(t, 14747)), Promise.resolve().then(t.bind(t, 55980)), Promise.resolve().then(t.bind(t, 19730)), Promise.resolve().then(t.bind(t, 67214)), Promise.resolve().then(t.bind(t, 38329)), Promise.resolve().then(t.bind(t, 1311))
        },
        5032: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return l
                }
            });
            var i = t(9268),
                a = t(76394),
                n = t.n(a);
            let r = ["/assets/img/clients/1.svg", "/assets/img/clients/2.svg", "/assets/img/clients/3.svg", "/assets/img/clients/4.svg", "/assets/img/clients/5.svg", "/assets/img/clients/6.svg"];
            var l = e => {
                let {
                    backgroundColorComponent: s,
                    brandsTwo: t
                } = e;
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)("section", {
                        className: " ".concat(t ? "layout-pt-md" : "layout-pt-lg", "  layout-pb-md  ").concat(s || "", " "),
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
                                children: r.map((e, s) => (0, i.jsx)("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "300",
                                    className: "col-lg-auto col-md-3 col-sm-4 col-6",
                                    children: (0, i.jsx)("div", {
                                        className: "d-flex justify-center items-center px-4",
                                        children: (0, i.jsx)(n(), {
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
                                }, s))
                            })]
                        })
                    })
                })
            }
        },
        58460: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return m
                }
            });
            var i = t(9268),
                a = t(76394),
                n = t.n(a),
                r = t(86006),
                l = t(36115),
                c = t(70382),
                o = t(41715);
            let d = [{
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

            function m() {
                let [e, s] = (0, r.useState)(!1);
                return (0, r.useEffect)(() => {
                    s(!0)
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
                            children: [e && (0, i.jsx)(c.tq, {
                                className: "overflow-visible",
                                modules: [l.W_, l.tl],
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
                                children: o.pb.map((e, s) => (0, i.jsx)(c.o5, {
                                    className: "swiper-slide",
                                    children: (0, i.jsx)("div", {
                                        className: "testimonials -type-1",
                                        "data-aos": "fade-left",
                                        "data-aos-duration": (s + 1) * 550,
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
                                                    children: (0, i.jsx)(n(), {
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
                                }, s))
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
                            children: d.map((e, s) => (0, i.jsx)("div", {
                                className: "col-lg-3 col-sm-6",
                                "data-aos": "fade-left",
                                "data-aos-duration": (s + 1) * 350,
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
                            }, s))
                        })]
                    })
                })
            }
        },
        19730: function(e, s, t) {
            "use strict";
            t.r(s);
            var i = t(9268),
                a = t(76394),
                n = t.n(a),
                r = t(36115),
                l = t(70382);
            t(17544);
            var c = t(63408);
            t(6497);
            var o = t(86006),
                d = t(35846),
                m = t.n(d);
            s.default = () => {
                let [e, s] = (0, o.useState)(!1);
                return (0, o.useEffect)(() => {
                    s(!0)
                }, []), (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)("section", {
                        className: "layout-pt-md layout-pb-md",
                        children: (0, i.jsxs)("div", {
                            className: "container",
                            children: [(0, i.jsx)("div", {
                                className: "row justify-center text-center",
                                children: (0, i.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, i.jsxs)("div", {
                                        className: "sectionTitle ",
                                        children: [(0, i.jsx)("h2", {
                                            className: "sectionTitle__title ",
                                            children: "Top Categories"
                                        }), (0, i.jsx)("p", {
                                            className: "sectionTitle__text ",
                                            children: "Lorem ipsum dolor sit amet, consectetur."
                                        })]
                                    })
                                })
                            }), (0, i.jsxs)("div", {
                                className: "overflow-hidden pt-50 js-section-slider",
                                children: [e && (0, i.jsx)(l.tq, {
                                    modules: [r.W_, r.tl],
                                    pagination: {
                                        el: ".swiper-paginationx",
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
                                    children: c.Ee.map((e, s) => (0, i.jsx)(l.o5, {
                                        children: (0, i.jsx)(m(), {
                                            href: "/courses-list-".concat(e.id > 8 ? 1 : e.id),
                                            "data-aos": "fade-left",
                                            "data-aos-duration": (s + 1) * 350,
                                            className: "featureCard -type-1 -featureCard-hover linkCustomTwo",
                                            children: (0, i.jsxs)("div", {
                                                className: "featureCard__content",
                                                children: [(0, i.jsx)("div", {
                                                    className: "featureCard__icon",
                                                    children: (0, i.jsx)(n(), {
                                                        width: 45,
                                                        height: 45,
                                                        src: e.iconSrc,
                                                        alt: "icon"
                                                    })
                                                }), (0, i.jsxs)("div", {
                                                    className: "featureCard__title",
                                                    children: [e.title.split(" ")[0], " ", (0, i.jsx)("br", {}), e.title.split(" ")[1] && e.title.split(" ")[1]]
                                                }), (0, i.jsx)("div", {
                                                    className: "featureCard__text",
                                                    children: e.text
                                                })]
                                            })
                                        })
                                    }, s))
                                }), (0, i.jsxs)("div", {
                                    className: "d-flex justify-center x-gap-15 items-center pt-60 lg:pt-40",
                                    children: [(0, i.jsx)("div", {
                                        className: "col-auto",
                                        children: (0, i.jsx)("button", {
                                            className: "d-flex items-center text-24 arrow-left-hover js-prev",
                                            children: (0, i.jsx)("i", {
                                                className: "icon icon-arrow-left arrow-left-one"
                                            })
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "col-auto",
                                        children: (0, i.jsx)("div", {
                                            className: "swiper-paginationx"
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "col-auto",
                                        children: (0, i.jsx)("button", {
                                            className: "d-flex items-center text-24 arrow-right-hover js-next",
                                            children: (0, i.jsx)("i", {
                                                className: "icon icon-arrow-right arrow-right-one"
                                            })
                                        })
                                    })]
                                })]
                            })]
                        })
                    })
                })
            }
        },
        24274: function(e, s, t) {
            "use strict";
            t.d(s, {
                Z: function() {
                    return o
                }
            });
            var i = t(9268),
                a = t(86006),
                n = t(76394),
                r = t.n(n),
                l = t(35846),
                c = t.n(l);

            function o(e) {
                let {
                    data: s,
                    index: t
                } = e, [n, l] = (0, a.useState)([]);
                return (0, a.useEffect)(() => {
                    for (let e = Math.round(s.rating); e >= 1; e--) l(e => [...e, "star"])
                }, []), (0, i.jsx)("div", {
                    className: "col-lg-3 col-md-6",
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsxs)("div", {
                            className: "coursesCard -type-1",
                            children: [(0, i.jsxs)("div", {
                                className: "relative",
                                children: [(0, i.jsxs)("div", {
                                    className: "coursesCard__image overflow-hidden rounded-8",
                                    children: [(0, i.jsx)(r(), {
                                        width: 500,
                                        height: 500,
                                        style: {
                                            height: "100%",
                                            width: "100%"
                                        },
                                        className: "w-1/1",
                                        src: s.imageSrc,
                                        alt: "image"
                                    }), (0, i.jsx)("div", {
                                        className: "coursesCard__image_overlay rounded-8"
                                    })]
                                }), s.popular && (0, i.jsxs)("div", {
                                    className: "d-flex justify-between py-10 px-10 absolute-full-center z-3",
                                    children: [(0, i.jsx)("div", {
                                        children: (0, i.jsx)("div", {
                                            className: "px-15 rounded-200 bg-purple-1",
                                            children: (0, i.jsx)("span", {
                                                className: "text-11 lh-1 uppercase fw-500 text-white",
                                                children: "Popular"
                                            })
                                        })
                                    }), (0, i.jsx)("div", {
                                        children: (0, i.jsx)("div", {
                                            className: "px-15 rounded-200 bg-green-1",
                                            children: (0, i.jsx)("span", {
                                                className: "text-11 lh-1 uppercase fw-500 text-dark-1",
                                                children: "Best sellers"
                                            })
                                        })
                                    })]
                                }), (0, i.jsx)("div", {
                                    className: "d-flex justify-between py-10 px-10 absolute-full-center z-3"
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "h-100 pt-15",
                                children: [(0, i.jsxs)("div", {
                                    className: "d-flex items-center",
                                    children: [(0, i.jsx)("div", {
                                        className: "text-14 lh-1 text-yellow-1 mr-10",
                                        children: s.rating
                                    }), (0, i.jsx)("div", {
                                        className: "d-flex x-gap-5 items-center",
                                        children: n.map((e, s) => (0, i.jsx)("div", {
                                            className: "icon-star text-9 text-yellow-1"
                                        }, s))
                                    }), (0, i.jsxs)("div", {
                                        className: "text-13 lh-1 ml-10",
                                        children: ["(", s.ratingCount, ")"]
                                    })]
                                }), (0, i.jsx)("div", {
                                    className: "text-17 lh-15 fw-500 text-dark-1 mt-10",
                                    children: (0, i.jsx)(c(), {
                                        className: "linkCustom",
                                        href: "/courses/".concat(s.id),
                                        children: s.title
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: "d-flex x-gap-10 items-center pt-10",
                                    children: [(0, i.jsxs)("div", {
                                        className: "d-flex items-center",
                                        children: [(0, i.jsx)("div", {
                                            className: "mr-8",
                                            children: (0, i.jsx)(r(), {
                                                width: 16,
                                                height: 17,
                                                src: "assets/img/coursesCards/icons/1.svg",
                                                alt: "icon"
                                            })
                                        }), (0, i.jsxs)("div", {
                                            className: "text-14 lh-1",
                                            children: [s.lessonCount, " lesson"]
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "d-flex items-center",
                                        children: [(0, i.jsx)("div", {
                                            className: "mr-8",
                                            children: (0, i.jsx)(r(), {
                                                width: 16,
                                                height: 17,
                                                src: "assets/img/coursesCards/icons/2.svg",
                                                alt: "icon"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "text-14 lh-1",
                                            children: "".concat(Math.floor(s.duration / 60), "h ").concat(Math.floor(s.duration % 60), "m")
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "d-flex items-center",
                                        children: [(0, i.jsx)("div", {
                                            className: "mr-8",
                                            children: (0, i.jsx)(r(), {
                                                width: 16,
                                                height: 17,
                                                src: "assets/img/coursesCards/icons/3.svg",
                                                alt: "icon"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "text-14 lh-1",
                                            children: s.level
                                        })]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "coursesCard-footer",
                                    children: [(0, i.jsxs)("div", {
                                        className: "coursesCard-footer__author",
                                        children: [(0, i.jsx)(r(), {
                                            width: 30,
                                            height: 30,
                                            src: s.authorImageSrc,
                                            alt: "image"
                                        }), (0, i.jsx)("div", {
                                            children: s.authorName
                                        })]
                                    }), (0, i.jsx)("div", {
                                        className: "coursesCard-footer__price",
                                        children: s.paid ? (0, i.jsxs)(i.Fragment, {
                                            children: [(0, i.jsxs)("div", {
                                                children: ["$", s.originalPrice]
                                            }), (0, i.jsxs)("div", {
                                                children: ["$", s.discountedPrice]
                                            })]
                                        }) : (0, i.jsxs)(i.Fragment, {
                                            children: [(0, i.jsx)("div", {}), (0, i.jsx)("div", {
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
        38329: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return l
                }
            });
            var i = t(9268),
                a = t(86006),
                n = t(24274),
                r = t(68148);

            function l() {
                let [e, s] = (0, a.useState)(), [t, l] = (0, a.useState)("All Categories");
                return (0, a.useEffect)(() => {
                    if ("All Categories" == t) s();
                    else {
                        let e = r.om.filter(e => e.category == t);
                        s(e)
                    }
                }, [t]), (0, i.jsxs)("section", {
                    className: "layout-pt-lg layout-pb-lg",
                    children: [(0, i.jsx)("div", {
                        className: "row justify-center text-center",
                        children: (0, i.jsx)("div", {
                            className: "col-auto",
                            children: (0, i.jsxs)("div", {
                                className: "sectionTitle ",
                                children: [(0, i.jsx)("h2", {
                                    className: "sectionTitle__title sm:text-24",
                                    children: "Our Most Popular Courses"
                                }), (0, i.jsx)("p", {
                                    className: "sectionTitle__text ",
                                    children: "10,000+ unique online course list designs"
                                })]
                            })
                        })
                    }), (0, i.jsx)("div", {
                        className: "tabs__controls flex-wrap  pt-50 d-flex justify-center x-gap-10 js-tabs-controls",
                        children: r.po.map((e, s) => (0, i.jsx)("div", {
                            onClick: () => l(e),
                            children: (0, i.jsx)("button", {
                                className: "tabs__button px-15 py-8 rounded-8 js-tabs-button ".concat(t == e ? "tabActive" : "", " "),
                                "data-tab-target": ".-tab-item-2",
                                type: "button",
                                children: e
                            })
                        }, s))
                    }), (0, i.jsx)("div", {
                        className: "pt-60 m-auto row y-gap-30 container pl-0 pr-0",
                        "data-aos": "fade-right",
                        "data-aos-offset": "80",
                        "data-aos-duration": 800,
                        children: e ? e.map((e, s) => (0, i.jsx)(n.Z, {
                            data: e,
                            index: s,
                            "data-aos": "fade-right",
                            "data-aos-duration": (s + 1) * 300
                        }, s)) : r.om.slice(0, 8).map((e, s) => (0, i.jsx)(n.Z, {
                            data: e
                        }, s))
                    })]
                })
            }
        },
        67214: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return y
                }
            });
            var i = t(9268),
                a = t(70226),
                n = t(35846),
                r = t.n(n),
                l = t(86006),
                c = () => (0, i.jsxs)("svg", {
                    className: "svg-waves",
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    viewBox: "0 24 150 28",
                    preserveAspectRatio: "none",
                    shapeRendering: "auto",
                    children: [(0, i.jsx)("defs", {
                        children: (0, i.jsx)("path", {
                            id: "gentle-wave",
                            d: "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                        })
                    }), (0, i.jsxs)("g", {
                        className: "svg-waves__parallax",
                        children: [(0, i.jsx)("use", {
                            xlinkHref: "/#gentle-wave",
                            x: "48",
                            y: "0"
                        }), (0, i.jsx)("use", {
                            xlinkHref: "/#gentle-wave",
                            x: "48",
                            y: "3"
                        }), (0, i.jsx)("use", {
                            xlinkHref: "/#gentle-wave",
                            x: "48",
                            y: "5"
                        }), (0, i.jsx)("use", {
                            xlinkHref: "/#gentle-wave",
                            x: "48",
                            y: "7"
                        })]
                    })]
                }),
                o = t(76394),
                d = t.n(o),
                m = {
                    src: "/_next/static/media/bg.86c9aca0.png",
                    height: 810,
                    width: 1920,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAABlBMVEUUA0IeDkpVrxheAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAD0lEQVR4nGNggAFGRjQGAABLAAX/7aAMAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 3
                },
                h = {
                    src: "/_next/static/media/1.4a57919a.png",
                    height: 400,
                    width: 300,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAZlBMVEWd7f2M4PR7ssSmnKaQVx2BtscpKSmZkpqKy95x2fmFbWidd2jMmYBzWVQDBQeq8v2P5ftx4v96Tzhlrsx8MhKMgomdWjxsTjyslZPMv8iilpu+sbPQuLklDASCgIRNSlJTRkRfZWxU1VrKAAAACnRSTlP8TP//+v7+/vj67uhTAAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADtJREFUeJwFwQUCgDAMALGjAzqmuOv/P0lC05Ip6MiVWAYrqRac8Vf68Psan5clhnO76edwqKEcnU76Az96AprwNBT2AAAAAElFTkSuQmCC",
                    blurWidth: 6,
                    blurHeight: 8
                },
                u = {
                    src: "/_next/static/media/2.15b6c1d2.png",
                    height: 200,
                    width: 200,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAb1BMVEWqsbVKYWRBOyart73I0NOvuL6irLJIXm9SZ3hZbHxydnBIX3BVbX9wgIyXbluQmZxOZXhxdHejf2uadGWTkIqDhHxrZltJTEKJaVpXS0DG0Nc/TUuxu8BmamxbZmuHaDVdWkC3u73Q2d5iXVhZWkk1emB5AAAAEHRSTlP1/f4r6v7R3v7j///////+77oGsgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEVJREFUeJwFwYUBgDAAA7DiY8pccf6/kQRjm5Rq84Cn3CGrAnjvbHq7ijM4K9PX46rUyBwjKBVG7gcFBNeaE4GVcbYRtvyoDARRSr0TqwAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 8
                },
                x = {
                    src: "/_next/static/media/3.1930f7c8.png",
                    height: 250,
                    width: 255,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAhFBMVEX1k0uimInbzb61lXve29NULhPMcSmurKHWx7dNSEjw69yQZE3/s2ZiVk4uGg04IBBKLBhwUkT3mFHjl1O7mX7IxrzNpo/s3c7Hrpvn08JXVViOjI2cmZRrTz5VSUS1pZIbEArhgDSLTBtuY2CuZi/vn1m4iHRiQCH/o1zZ183JmH7Zo2qZ+0dHAAAAFnRSTlP5/tj97+/+/vf+NP/////////////+2GgCOQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEpJREFUeJwFwQUCgCAABLAzQUEBUcLu/P//3ICbf40Nc1RcM+c9Bfil3joKgEMyYxzBoiU7qX2Q7mJQ9USwlmIsir5BMoutzbr4B6nABNbGA+kXAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 8
                },
                g = {
                    src: "/_next/static/media/1.d397830a.svg",
                    height: 23,
                    width: 24,
                    blurWidth: 0,
                    blurHeight: 0
                },
                A = {
                    src: "/_next/static/media/4.6f465e42.png",
                    height: 70,
                    width: 70,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEUA/ISPkJJA1X2chXoA/oYA/4MA/4MD9H5MaXEL6XrCqZ4fz3yRsaTFu8OgkJyGgoN2dnhqaGqLlIwB/4tDRDyfhGnPqI6nl3t+alVrwJwf4oVa2J6xpajVzNRAryX/AAAAE3RSTlPx/v6vrrL6LgD9Lv7s+Pjz/vLs4rd0oQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEFJREFUeJwFwQcCgCAMALFjtuC2uPX/3zRBJeWcRBHMe0OIVvYDi2BlO4sB+W6tM0jP4Obxikj/OfeugtYwLaHqD1qQAraKIFI1AAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 8
                },
                v = {
                    src: "/_next/static/media/2.90135b3c.svg",
                    height: 27,
                    width: 20,
                    blurWidth: 0,
                    blurHeight: 0
                };
            let j = [{
                    id: 1,
                    icon: {
                        src: "/_next/static/media/1.ab242553.svg",
                        height: 24,
                        width: 24,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    text: "Over 12 million students"
                }, {
                    id: 2,
                    icon: {
                        src: "/_next/static/media/2.c2c248e9.svg",
                        height: 22,
                        width: 22,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    text: "More than 60,000 courses"
                }, {
                    id: 3,
                    icon: {
                        src: "/_next/static/media/3.1afa7713.svg",
                        height: 24,
                        width: 24,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    text: "Learn anything online"
                }],
                p = {
                    title: "Learn New Skills Online with Top",
                    text_underline: "Educators",
                    info_hero: (0, i.jsxs)(i.Fragment, {
                        children: ["Build skills with courses, certificates, and degrees online from", (0, i.jsx)("br", {}), " world-class universities and companies."]
                    }),
                    starts: ["icon-star text-yellow-1 text-11", "icon-star text-yellow-1 text-11", "icon-star text-yellow-1 text-11", "icon-star text-yellow-1 text-11", "icon-star text-yellow-1 text-11"]
                },
                {
                    title: f,
                    text_underline: N,
                    info_hero: w,
                    starts: b
                } = p;
            var y = () => ((0, l.useEffect)(() => {
                (() => {
                    let e = document.querySelectorAll(".js-mouse-move-container");
                    e.forEach(e => {
                        let s = e.querySelectorAll(".js-mouse-move");
                        s.forEach(s => {
                            let t = s.getAttribute("data-move");
                            document.addEventListener("mousemove", i => {
                                let n = i.pageX - e.offsetLeft,
                                    r = i.pageY - e.offsetTop;
                                a.ZP.to(s, {
                                    x: (n - e.offsetWidth / 2) / e.offsetWidth * Number(t),
                                    y: (r - e.offsetHeight / 2) / e.offsetHeight * Number(t),
                                    duration: .2
                                })
                            })
                        })
                    })
                })()
            }, []), (0, i.jsx)(i.Fragment, {
                children: (0, i.jsxs)("section", {
                    className: "masthead -type-1 js-mouse-move-container",
                    children: [(0, i.jsx)("div", {
                        className: "masthead__bg",
                        children: (0, i.jsx)(d(), {
                            src: m,
                            alt: "image"
                        })
                    }), (0, i.jsx)("div", {
                        className: "container",
                        children: (0, i.jsxs)("div", {
                            className: "row y-gap-30 justify-between items-end",
                            children: [(0, i.jsx)("div", {
                                className: "col-xl-6 col-lg-6 col-sm-10",
                                children: (0, i.jsxs)("div", {
                                    className: "masthead__content",
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "500",
                                    children: [(0, i.jsxs)("h1", {
                                        className: "masthead__title",
                                        children: [f, " ", (0, i.jsx)("span", {
                                            className: "text-green-1 underline",
                                            children: N
                                        })]
                                    }), (0, i.jsx)("p", {
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "100",
                                        className: "masthead__text",
                                        children: w
                                    }), (0, i.jsxs)("div", {
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "200",
                                        className: "masthead__buttons row x-gap-10 y-gap-10",
                                        children: [(0, i.jsx)("div", {
                                            className: "col-12 col-sm-auto",
                                            children: (0, i.jsx)(r(), {
                                                "data-barba": !0,
                                                href: "/signup",
                                                className: "button -md -purple-1 text-white",
                                                children: "Join For Free"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "col-12 col-sm-auto",
                                            children: (0, i.jsx)(r(), {
                                                "data-barba": !0,
                                                href: "/courses-list-1",
                                                className: "button -md -outline-green-1 text-green-1",
                                                children: "Find Courses"
                                            })
                                        })]
                                    }), (0, i.jsx)("div", {
                                        "data-aos": "fade-up",
                                        "data-aos-duration": "300",
                                        className: "masthead-info row y-gap-15 sm:d-none",
                                        children: j.map((e, s) => (0, i.jsxs)("div", {
                                            className: "masthead-info__item d-flex items-center text-white",
                                            children: [(0, i.jsx)("div", {
                                                className: "masthead-info__icon mr-10",
                                                children: (0, i.jsx)(d(), {
                                                    src: e.icon,
                                                    alt: "icon"
                                                })
                                            }), (0, i.jsx)("div", {
                                                className: "masthead-info__title lh-1",
                                                children: e.text
                                            })]
                                        }, s))
                                    })]
                                })
                            }), (0, i.jsx)("div", {
                                className: "col-xl-6 col-lg-6",
                                "data-aos": "fade-up",
                                "data-aos-delay": "700",
                                children: (0, i.jsxs)("div", {
                                    className: "masthead-image",
                                    children: [(0, i.jsxs)("div", {
                                        className: "masthead-image__el1",
                                        children: [(0, i.jsx)(d(), {
                                            className: "js-mouse-move",
                                            "data-move": "40",
                                            style: {
                                                objectFit: "cover"
                                            },
                                            src: h,
                                            alt: "image"
                                        }), (0, i.jsxs)("div", {
                                            "data-move": "30",
                                            className: "lg:d-none img-el -w-250 px-20 py-20 d-flex items-center bg-white rounded-8 js-mouse-move",
                                            children: [(0, i.jsx)("div", {
                                                className: "size-50 d-flex justify-center items-center bg-red-2 rounded-full",
                                                children: (0, i.jsx)(d(), {
                                                    src: g,
                                                    alt: "icon"
                                                })
                                            }), (0, i.jsxs)("div", {
                                                className: "ml-20",
                                                children: [(0, i.jsx)("div", {
                                                    className: "text-orange-1 text-16 fw-500 lh-1",
                                                    children: "3.000 +"
                                                }), (0, i.jsx)("div", {
                                                    className: "mt-3",
                                                    children: "Free Courses"
                                                })]
                                            })]
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "masthead-image__el2",
                                        children: [(0, i.jsx)(d(), {
                                            className: "js-mouse-move",
                                            "data-move": "70",
                                            src: u,
                                            style: {
                                                objectFit: "cover"
                                            },
                                            alt: "image"
                                        }), (0, i.jsxs)("div", {
                                            "data-move": "60",
                                            className: "lg:d-none img-el -w-260 px-20 py-20 d-flex items-center bg-white rounded-8 js-mouse-move",
                                            children: [(0, i.jsx)(d(), {
                                                src: A,
                                                alt: "icon"
                                            }), (0, i.jsxs)("div", {
                                                className: "ml-20",
                                                children: [(0, i.jsx)("div", {
                                                    className: "text-dark-1 text-16 fw-500 lh-1",
                                                    children: "Ali Tufan"
                                                }), (0, i.jsx)("div", {
                                                    className: "mt-3",
                                                    children: "UX/UI Designer"
                                                }), (0, i.jsx)("div", {
                                                    className: "d-flex x-gap-5 mt-3",
                                                    children: b.map((e, s) => (0, i.jsx)("div", {
                                                        children: (0, i.jsx)("div", {
                                                            className: e
                                                        })
                                                    }, s))
                                                })]
                                            })]
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "masthead-image__el3",
                                        children: [(0, i.jsx)(d(), {
                                            className: "js-mouse-move",
                                            "data-move": "40",
                                            src: x,
                                            style: {
                                                objectFit: "cover"
                                            },
                                            alt: "image"
                                        }), (0, i.jsxs)("div", {
                                            "data-move": "30",
                                            className: "shadow-4 img-el -w-260 px-30 py-20 d-flex items-center bg-white rounded-8 js-mouse-move",
                                            children: [(0, i.jsx)("div", {
                                                className: "img-el__side",
                                                children: (0, i.jsx)("div", {
                                                    className: "size-50 d-flex justify-center items-center bg-purple-1 rounded-full",
                                                    children: (0, i.jsx)(d(), {
                                                        style: {
                                                            objectFit: "cover"
                                                        },
                                                        src: v,
                                                        alt: "icon"
                                                    })
                                                })
                                            }), (0, i.jsxs)("div", {
                                                className: "",
                                                children: [(0, i.jsx)("div", {
                                                    className: "text-purple-1 text-16 fw-500 lh-1",
                                                    children: "Congrats!"
                                                }), (0, i.jsx)("div", {
                                                    className: "mt-3",
                                                    children: "Your Admission Completed"
                                                })]
                                            })]
                                        })]
                                    })]
                                })
                            })]
                        })
                    }), (0, i.jsx)(c, {})]
                })
            }))
        },
        41715: function(e, s, t) {
            "use strict";
            t.d(s, {
                nE: function() {
                    return n
                },
                pb: function() {
                    return i
                },
                r: function() {
                    return a
                },
                te: function() {
                    return r
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
                n = ["/assets/img/home-3/testimonials/1.png", "/assets/img/home-3/testimonials/2.png", "/assets/img/home-3/testimonials/3.png", "/assets/img/home-3/testimonials/4.png", "/assets/img/home-3/testimonials/5.png"],
                r = [{
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
        63408: function(e, s, t) {
            "use strict";
            t.d(s, {
                Ee: function() {
                    return i
                },
                sb: function() {
                    return a
                }
            });
            let i = [{
                    id: 1,
                    iconSrc: "/assets/img/featureCards/1.svg",
                    title: "Design Creative",
                    text: "573+ Courses"
                }, {
                    id: 2,
                    iconSrc: "/assets/img/featureCards/2.svg",
                    title: "Sales Marketing",
                    text: "565+ Courses"
                }, {
                    id: 3,
                    iconSrc: "/assets/img/featureCards/3.svg",
                    title: "Development IT",
                    text: "126+ Courses"
                }, {
                    id: 4,
                    iconSrc: "/assets/img/featureCards/4.svg",
                    title: "Engineering Architecture",
                    text: "35+ Courses"
                }, {
                    id: 5,
                    iconSrc: "/assets/img/featureCards/5.svg",
                    title: "Personal Development",
                    text: "908+ Courses"
                }, {
                    id: 6,
                    iconSrc: "/assets/img/featureCards/6.svg",
                    title: "Finance Accounting",
                    text: "129+ Courses"
                }],
                a = [{
                    id: 1,
                    icon: "icon-architecture text-40",
                    title: "Design Creative",
                    courses: 573
                }, {
                    id: 2,
                    icon: "icon-megaphone text-40",
                    title: "Sales Marketing",
                    courses: 565
                }, {
                    id: 3,
                    icon: "icon-save-money text-40",
                    title: "Development IT",
                    courses: 126
                }, {
                    id: 4,
                    icon: "icon-software text-40",
                    title: "Engineering Architecture",
                    courses: 35
                }, {
                    id: 5,
                    icon: "icon-tools text-40",
                    title: "Personal Development",
                    courses: 908
                }, {
                    id: 6,
                    icon: "icon-person-2 text-40",
                    title: "Finance Accounting",
                    courses: 129
                }]
        },
        6497: function() {},
        17544: function() {}
    },
    function(e) {
        e.O(0, [8224, 8201, 6721, 226, 1840, 5127, 4240, 4119, 7102, 9253, 6488, 1744], function() {
            return e(e.s = 10413)
        }), _N_E = e.O()
    }
]);