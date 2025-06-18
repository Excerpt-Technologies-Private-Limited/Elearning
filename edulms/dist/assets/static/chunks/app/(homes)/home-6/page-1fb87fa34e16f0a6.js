(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5815, 4952, 843], {
        56079: function(e, s, t) {
            Promise.resolve().then(t.bind(t, 1311)), Promise.resolve().then(t.t.bind(t, 28707, 23)), Promise.resolve().then(t.t.bind(t, 8920, 23)), Promise.resolve().then(t.bind(t, 13798)), Promise.resolve().then(t.bind(t, 54355)), Promise.resolve().then(t.bind(t, 86375)), Promise.resolve().then(t.bind(t, 61439)), Promise.resolve().then(t.bind(t, 39100)), Promise.resolve().then(t.bind(t, 48128)), Promise.resolve().then(t.bind(t, 56005))
        },
        47329: function(e, s, t) {
            "use strict";
            t.d(s, {
                Z: function() {
                    return n
                }
            });
            var i = t(9268);
            t(86006);
            var a = t(13277);

            function n(e) {
                let {
                    isOpen: s,
                    setIsOpen: t,
                    videoId: n
                } = e;
                return (0, i.jsx)(a.Z, {
                    channel: "youtube",
                    youtube: {
                        mute: 0,
                        autoplay: 0
                    },
                    isOpen: s,
                    videoId: n,
                    onClose: () => t(!1)
                })
            }
        },
        48128: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return n
                }
            });
            var i = t(9268),
                a = t(86006);

            function n() {
                let [e, s] = (0, a.useState)("00"), [t, n] = (0, a.useState)("00"), [r, l] = (0, a.useState)("00"), [c, o] = (0, a.useState)("00"), d = (0, a.useRef)(), m = () => {
                    let e = new Date("Dec 30, 2023 00:00:00").getTime();
                    d = setInterval(() => {
                        let t = new Date().getTime(),
                            i = e - t;
                        i < 0 ? clearInterval(d.current) : (s(Math.floor(i / 864e5)), n(Math.floor(i % 864e5 / 36e5)), l(Math.floor(i % 36e5 / 6e4)), o(Math.floor(i % 6e4 / 1e3)))
                    }, 1e3)
                };
                return (0, a.useEffect)(() => (m(), () => {
                    clearInterval(d.current)
                })), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("section", {
                        className: "layout-pt-lg bg-purple-1",
                        children: (0, i.jsx)("div", {
                            className: "container",
                            children: (0, i.jsxs)("div", {
                                className: "row y-gap-30 items-center",
                                children: [(0, i.jsx)("div", {
                                    className: "col-lg-5",
                                    children: (0, i.jsxs)("div", {
                                        className: "bg-white rounded-16 px-30 py-30",
                                        children: [(0, i.jsxs)("h3", {
                                            className: "text-20 lh-15 text-center",
                                            children: ["Create Your", (0, i.jsx)("span", {
                                                className: "text-purple-1",
                                                children: "Free Account"
                                            })]
                                        }), (0, i.jsxs)("form", {
                                            onSubmit: e => {
                                                e.preventDefault()
                                            },
                                            className: "contact-form row y-gap-30 pt-30",
                                            children: [(0, i.jsxs)("div", {
                                                className: "col-12",
                                                children: [(0, i.jsx)("label", {
                                                    className: "text-16 lh-1 fw-500 text-dark-1 mb-10",
                                                    children: "Email Address"
                                                }), (0, i.jsx)("input", {
                                                    required: !0,
                                                    type: "text",
                                                    name: "email",
                                                    placeholder: "Email..."
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "col-12",
                                                children: [(0, i.jsx)("label", {
                                                    className: "text-16 lh-1 fw-500 text-dark-1 mb-10",
                                                    children: "Password"
                                                }), (0, i.jsx)("input", {
                                                    required: !0,
                                                    type: "password",
                                                    name: "password",
                                                    placeholder: "Password..."
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "col-12",
                                                children: [(0, i.jsx)("button", {
                                                    className: "button -md -purple-1 w-1/1 text-white",
                                                    children: "Start Learning For Free"
                                                }), (0, i.jsx)("div", {
                                                    className: "text-13 lh-17 mt-15",
                                                    children: "By continuing, you accept our Terms of Use, our Privacy Policy and that your data is stored in the USA. You confirm you are at least 16 years old (13 if you are an authorized Classrooms user)."
                                                })]
                                            })]
                                        })]
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: "offset-xl-2 col-xl-4 offset-lg-1 col-lg-5 col-md-9",
                                    children: [(0, i.jsx)("h2", {
                                        className: "text-30 lh-13 text-white",
                                        children: "Register Now and Get a 70% Discount"
                                    }), (0, i.jsx)("p", {
                                        className: "text-lg text-white mt-10",
                                        children: "Get 100 Online Courses For Free"
                                    }), (0, i.jsx)("div", {
                                        className: "js-countdown",
                                        children: (0, i.jsxs)("div", {
                                            className: "row x-gap-50 y-gap-30 pt-60 lg:pt-30",
                                            children: [(0, i.jsx)("div", {
                                                className: "col-md-auto col-6",
                                                children: (0, i.jsxs)("div", {
                                                    className: "text-center text-white",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "text-45 lh-12 fw-700 js-countdown-days",
                                                        children: e
                                                    }), (0, i.jsx)("div", {
                                                        className: "mt-5",
                                                        children: "Days"
                                                    })]
                                                })
                                            }), (0, i.jsx)("div", {
                                                className: "col-md-auto col-6",
                                                children: (0, i.jsxs)("div", {
                                                    className: "text-center text-white",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "text-45 lh-12 fw-700 js-countdown-hours",
                                                        children: t
                                                    }), (0, i.jsx)("div", {
                                                        className: "mt-5",
                                                        children: "Hours"
                                                    })]
                                                })
                                            }), (0, i.jsx)("div", {
                                                className: "col-md-auto col-6",
                                                children: (0, i.jsxs)("div", {
                                                    className: "text-center text-white",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "text-45 lh-12 fw-700 js-countdown-minutes",
                                                        children: r
                                                    }), (0, i.jsx)("div", {
                                                        className: "mt-5",
                                                        children: "Minutes"
                                                    })]
                                                })
                                            }), (0, i.jsx)("div", {
                                                className: "col-md-auto col-6",
                                                children: (0, i.jsxs)("div", {
                                                    className: "text-center text-white",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "text-45 lh-12 fw-700 js-countdown-seconds",
                                                        children: c
                                                    }), (0, i.jsx)("div", {
                                                        className: "mt-5",
                                                        children: "Seconds"
                                                    })]
                                                })
                                            })]
                                        })
                                    })]
                                })]
                            })
                        })
                    }), (0, i.jsx)("div", {
                        className: "svg-shape bg-light-4",
                        children: (0, i.jsx)("svg", {
                            width: "1925",
                            height: "261",
                            viewBox: "0 0 1925 261",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, i.jsx)("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M1924.67 0L1922.7 7.03707C1911.58 46.7293 1877.25 75.5353 1836.23 79.5878L0 261V0H1924.67Z",
                                fill: "#6440FB"
                            })
                        })
                    })]
                })
            }
        },
        61439: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return d
                }
            });
            var i = t(9268);
            t(76394);
            var a = t(36115),
                n = t(70382);
            t(17544), t(6497);
            var r = t(86006),
                l = t(63408),
                c = t(35846),
                o = t.n(c);

            function d() {
                let [e, s] = (0, r.useState)(!1);
                return (0, r.useEffect)(() => {
                    s(!0)
                }, []), (0, i.jsx)("section", {
                    className: "layout-pt-lg layout-pb-lg",
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
                            "data-gap": "30",
                            "data-loop": !0,
                            "data-pagination": !0,
                            "data-slider-cols": "base-1 xl-6 lg-4 md-3 sm-2",
                            children: [e && (0, i.jsx)(n.tq, {
                                modules: [a.W_, a.tl],
                                pagination: {
                                    el: ".category-six-pagination",
                                    clickable: !0
                                },
                                navigation: {
                                    nextEl: ".category-six-right",
                                    prevEl: ".category-six-left"
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
                                children: l.sb.map((e, s) => (0, i.jsx)(n.o5, {
                                    children: (0, i.jsx)(o(), {
                                        href: "/courses-list-".concat(e.id > 8 ? 1 : e.id),
                                        className: "swiper-slide linkCustomTwo",
                                        children: (0, i.jsx)("div", {
                                            className: "bg-white border-light rounded-8 -featureCard-hover-2",
                                            "data-aos": "fade-left",
                                            "data-aos-duration": (s + 1) * 350,
                                            children: (0, i.jsxs)("div", {
                                                className: "py-30 px-40 text-center",
                                                children: [(0, i.jsx)("div", {
                                                    className: "featureCard__icon size-90 mx-auto d-flex items-center justify-center rounded-full bg-light-3",
                                                    children: (0, i.jsx)("i", {
                                                        className: e.icon
                                                    })
                                                }), (0, i.jsx)("div", {
                                                    className: "featureCard__title text-17 fw-500 text-dark-1 mt-20",
                                                    children: e.title
                                                }), (0, i.jsxs)("div", {
                                                    className: "featureCard__text text-13 lh-1 mt-10",
                                                    children: [e.courses, "+ Courses"]
                                                })]
                                            })
                                        })
                                    })
                                }, s))
                            }), (0, i.jsxs)("div", {
                                className: "d-flex x-gap-15 items-center justify-center pt-50",
                                children: [(0, i.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, i.jsx)("button", {
                                        className: "d-flex items-center text-24 arrow-left-hover js-prev category-six-left",
                                        children: (0, i.jsx)("i", {
                                            className: "icon icon-arrow-left"
                                        })
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, i.jsx)("div", {
                                        className: "pagination -arrows js-pagination category-six-pagination"
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, i.jsx)("button", {
                                        className: "d-flex items-center text-24 arrow-right-hover js-next category-six-right",
                                        children: (0, i.jsx)("i", {
                                            className: "icon icon-arrow-right"
                                        })
                                    })
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        86375: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return m
                }
            });
            var i = t(9268),
                a = t(86006),
                n = t(68148),
                r = t(76394),
                l = t.n(r),
                c = t(35846),
                o = t.n(c);

            function d(e) {
                let {
                    data: s,
                    index: t
                } = e, [n, r] = (0, a.useState)([]);
                return (0, a.useEffect)(() => {
                    for (let e = Math.round(s.rating); e >= 1; e--) r(e => [...e, "star"])
                }, []), (0, i.jsx)("div", {
                    className: "col-lg-6",
                    children: (0, i.jsxs)("div", {
                        className: "coursesCard -type-4 d-flex sm:d-block items-center border-light rounded-8 px-10 py-10",
                        children: [(0, i.jsx)("div", {
                            className: "coursesCard__image max-w-250 rounded-8",
                            children: (0, i.jsx)(l(), {
                                width: 250,
                                height: 175,
                                className: "w-1/1 rounded-8",
                                src: s.imageSrc,
                                alt: "image"
                            })
                        }), (0, i.jsxs)("div", {
                            className: "coursesCard__content pl-20 sm:pl-10 pr-10",
                            children: [(0, i.jsx)("div", {
                                className: "coursesCard__stars",
                                children: (0, i.jsxs)("div", {
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
                                })
                            }), (0, i.jsx)("div", {
                                className: "text-17 lh-13 fw-500 text-dark-1 mt-10",
                                children: (0, i.jsx)(o(), {
                                    className: "linkCustom",
                                    href: "/courses/".concat(s.id),
                                    children: s.title
                                })
                            }), (0, i.jsxs)("div", {
                                className: "d-flex x-gap-15 items-center py-10",
                                children: [(0, i.jsxs)("div", {
                                    className: "d-flex items-center",
                                    children: [(0, i.jsx)("div", {
                                        className: "mr-10",
                                        children: (0, i.jsx)(l(), {
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
                                        className: "mr-10",
                                        children: (0, i.jsx)(l(), {
                                            width: 16,
                                            height: 17,
                                            src: "assets/img/coursesCards/icons/2.svg",
                                            alt: "icon"
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "text-14 lh-1 text-light-1",
                                        children: "".concat(Math.floor(s.duration / 60), "h ").concat(Math.floor(s.duration % 60), "m")
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "d-flex items-center",
                                    children: [(0, i.jsx)("div", {
                                        className: "mr-10",
                                        children: (0, i.jsx)(l(), {
                                            width: 16,
                                            height: 17,
                                            src: "assets/img/coursesCards/icons/3.svg",
                                            alt: "icon"
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "text-14 lh-1 text-light-1",
                                        children: s.level
                                    })]
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "d-flex justify-between items-center pt-10 border-top-light",
                                children: [(0, i.jsxs)("div", {
                                    className: "d-flex items-center",
                                    children: [(0, i.jsx)(l(), {
                                        width: 30,
                                        height: 30,
                                        src: s.authorImageSrc,
                                        alt: "image"
                                    }), (0, i.jsx)("div", {
                                        className: "text-light-1 ml-10",
                                        children: s.authorName
                                    })]
                                }), (0, i.jsx)("div", {
                                    className: "d-flex items-center",
                                    children: s.paid ? (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsxs)("div", {
                                            className: "fw-500 mr-10 line-through text-light-1",
                                            children: ["$", s.originalPrice]
                                        }), (0, i.jsxs)("div", {
                                            className: "text-18 fw-500 text-dark-1",
                                            children: ["$", s.discountedPrice]
                                        })]
                                    }) : (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)("div", {}), (0, i.jsx)("div", {
                                            className: "text-18 fw-500 text-dark-1",
                                            children: "Free"
                                        })]
                                    })
                                })]
                            })]
                        })]
                    })
                })
            }

            function m() {
                let [e, s] = (0, a.useState)([]), [t, r] = (0, a.useState)("All Categories");
                return (0, a.useEffect)(() => {
                    s("All Categories" == t ? n.om : n.om.filter(e => e.category == t))
                }, [t]), (0, i.jsx)("section", {
                    className: "layout-pt-md layout-pb-lg",
                    children: (0, i.jsxs)("div", {
                        className: "container tabs -pills-2 js-tabs",
                        children: [(0, i.jsxs)("div", {
                            className: "row y-gap-20 justify-between items-end",
                            children: [(0, i.jsx)("div", {
                                className: "col-auto",
                                children: (0, i.jsxs)("div", {
                                    className: "sectionTitle ",
                                    children: [(0, i.jsx)("h2", {
                                        className: "sectionTitle__title ",
                                        children: "Explore Featured Courses"
                                    }), (0, i.jsx)("p", {
                                        className: "sectionTitle__text ",
                                        children: "10,000+ unique online course list designs"
                                    })]
                                })
                            }), (0, i.jsx)("div", {
                                className: "col-auto",
                                children: (0, i.jsx)("div", {
                                    className: "tabs__controls row justify-center x-gap-10 bg-light-3 rounded-200 py-5 js-tabs-controls",
                                    children: n.po.slice(0, 4).map((e, s) => (0, i.jsx)("div", {
                                        className: "col-auto",
                                        onClick: () => r(e),
                                        children: (0, i.jsx)("button", {
                                            className: "tabs__button px-20 py-8 rounded-200 fw-500 js-tabs-button ".concat(t == e ? "is-active" : "", " "),
                                            "data-tab-target": ".-tab-item-1",
                                            type: "button",
                                            children: e
                                        })
                                    }, s))
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: "tabs__content pt-60 lg:pt-40 js-tabs-content",
                            children: (0, i.jsx)("div", {
                                className: "tabs__pane -tab-item-1 is-active",
                                children: (0, i.jsx)("div", {
                                    className: "row y-gap-30 justify-start",
                                    "data-aos": "fade-right",
                                    "data-aos-offset": "80",
                                    "data-aos-duration": 800,
                                    children: e.slice(0, 6).map((e, s) => (0, i.jsx)(d, {
                                        data: e,
                                        index: s
                                    }, s))
                                })
                            })
                        })]
                    })
                })
            }
        },
        56005: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return d
                }
            });
            var i = t(9268);
            t(76394);
            var a = t(86006),
                n = t(36115),
                r = t(70382),
                l = t(29707),
                c = t(35846),
                o = t.n(c);

            function d() {
                let [e, s] = (0, a.useState)(!1);
                return (0, a.useEffect)(() => {
                    s(!0)
                }, []), (0, i.jsx)("section", {
                    className: "layout-pt-lg layout-pb-lg bg-light-4",
                    children: (0, i.jsxs)("div", {
                        className: "container",
                        children: [(0, i.jsxs)("div", {
                            className: "row y-gap-20 justify-between items-center",
                            children: [(0, i.jsx)("div", {
                                className: "col-lg-6",
                                children: (0, i.jsxs)("div", {
                                    className: "sectionTitle ",
                                    children: [(0, i.jsx)("h2", {
                                        className: "sectionTitle__title ",
                                        children: "Upcoming Events"
                                    }), (0, i.jsx)("p", {
                                        className: "sectionTitle__text ",
                                        children: "10,000+ unique online course list designs"
                                    })]
                                })
                            }), (0, i.jsx)("div", {
                                className: "col-auto",
                                children: (0, i.jsxs)(o(), {
                                    href: "/event-list-2",
                                    className: "button -icon -purple-3 text-purple-1 -rounded",
                                    children: ["Browse Event", (0, i.jsx)("i", {
                                        className: "icon-arrow-top-right text-13 ml-10"
                                    })]
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: "pt-60 lg:pt-40",
                            children: (0, i.jsxs)("div", {
                                className: "overflow-hidden js-section-slider",
                                children: [e && (0, i.jsx)(r.tq, {
                                    className: "overflow-visible",
                                    modules: [n.W_, n.tl],
                                    pagination: {
                                        el: ".event-six-pagination",
                                        clickable: !0
                                    },
                                    navigation: {
                                        nextEl: ".icon-arrow-right-event-six",
                                        prevEl: ".icon-arrow-left-event-six"
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
                                    children: l.U3.slice(0, 6).map((e, s) => (0, i.jsx)(r.o5, {
                                        className: "swiper-slide",
                                        children: (0, i.jsx)("div", {
                                            className: "swiper-slide",
                                            children: (0, i.jsxs)("div", {
                                                className: "bg-white rounded-8 shadow-1 px-20 py-20",
                                                "data-aos": "fade-left",
                                                "data-aos-duration": (s + 1) * 400,
                                                children: [(0, i.jsxs)("div", {
                                                    className: "d-flex items-center",
                                                    children: [(0, i.jsxs)("div", {
                                                        className: "size-60 d-flex flex-column justify-center items-center rounded-8 bg-dark-1 text-center mr-20",
                                                        children: [(0, i.jsx)("div", {
                                                            className: "text-17 lh-15 text-white fw-500",
                                                            children: e.date.split(" ")[0]
                                                        }), (0, i.jsx)("div", {
                                                            className: "lh-1 text-white fw-500",
                                                            children: e.date.split(" ")[1].split(",")[0].toUpperCase()
                                                        })]
                                                    }), (0, i.jsx)(o(), {
                                                        className: "linkCustom",
                                                        href: "/events/".concat(e.id),
                                                        children: e.title
                                                    })]
                                                }), (0, i.jsxs)("div", {
                                                    className: "d-flex items-center mt-20",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "icon-location text-14 mr-10"
                                                    }), (0, i.jsx)("div", {
                                                        className: "text-14 lh-1",
                                                        children: e.location
                                                    })]
                                                })]
                                            })
                                        })
                                    }, s))
                                }), (0, i.jsxs)("div", {
                                    className: "d-flex justify-center x-gap-15 items-center pt-60 lg:pt-40",
                                    children: [(0, i.jsx)("div", {
                                        className: "col-auto",
                                        children: (0, i.jsx)("button", {
                                            className: "d-flex items-center text-24 arrow-left-hover js-prev icon-arrow-left-event-six",
                                            children: (0, i.jsx)("i", {
                                                className: "icon icon-arrow-left"
                                            })
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "col-auto",
                                        children: (0, i.jsx)("div", {
                                            className: "pagination -arrows js-pagination event-six-pagination"
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "col-auto",
                                        children: (0, i.jsx)("button", {
                                            className: "d-flex items-center text-24 arrow-right-hover js-next icon-arrow-right-event-six",
                                            children: (0, i.jsx)("i", {
                                                className: "icon icon-arrow-right"
                                            })
                                        })
                                    })]
                                })]
                            })
                        })]
                    })
                })
            }
        },
        13798: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return h
                }
            });
            var i = t(9268),
                a = t(86006),
                n = t(76394),
                r = t.n(n),
                l = t(57486),
                c = t(47329),
                o = t(70226),
                d = t(35846),
                m = t.n(d);

            function h() {
                let [e, s] = (0, a.useState)(!1);
                return (0, a.useEffect)(() => {
                    (() => {
                        let e = document.querySelectorAll(".js-mouse-move-container");
                        e.forEach(e => {
                            let s = e.querySelectorAll(".js-mouse-move");
                            s.forEach(s => {
                                let t = s.getAttribute("data-move");
                                document.addEventListener("mousemove", i => {
                                    let a = i.pageX - e.offsetLeft,
                                        n = i.pageY - e.offsetTop;
                                    o.ZP.to(s, {
                                        x: (a - e.offsetWidth / 2) / e.offsetWidth * Number(t),
                                        y: (n - e.offsetHeight / 2) / e.offsetHeight * Number(t),
                                        duration: .2
                                    })
                                })
                            })
                        })
                    })()
                }, []), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)("section", {
                        className: "masthead -type-5",
                        children: [(0, i.jsx)("div", {
                            className: "masthead__bg pr-60 md:pr-0",
                            style: {
                                zIndex: -1
                            },
                            children: (0, i.jsx)(r(), {
                                width: 1200,
                                height: 1200,
                                style: {
                                    width: "100%",
                                    height: "100%"
                                },
                                src: "/assets/img/home-6/hero/bg.png",
                                alt: "image"
                            })
                        }), (0, i.jsx)("div", {
                            className: "container",
                            children: (0, i.jsxs)("div", {
                                className: "row y-gap-50 items-center justify-between",
                                children: [(0, i.jsx)("div", {
                                    className: "col-lg-6",
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "500",
                                    children: (0, i.jsxs)("div", {
                                        className: "masthead__content",
                                        children: [(0, i.jsxs)("h1", {
                                            className: "masthead__title",
                                            children: ["More Than", " ", (0, i.jsx)("span", {
                                                className: "text-purple-1 underline",
                                                children: "3.500+"
                                            }), " ", (0, i.jsx)("br", {
                                                className: "md:d-none"
                                            }), " Education Courses", (0, i.jsx)("br", {
                                                className: "md:d-none"
                                            }), " Online Join Us Today"]
                                        }), (0, i.jsxs)("div", {
                                            className: "row items-center x-gap-30 y-gap-20 pt-30",
                                            children: [(0, i.jsx)("div", {
                                                className: "col-auto",
                                                children: (0, i.jsx)(m(), {
                                                    href: "/courses-list-1",
                                                    className: "button -md -dark-1 -rounded text-white",
                                                    children: "Get Started"
                                                })
                                            }), (0, i.jsx)("div", {
                                                className: "col-auto",
                                                onClick: () => s(!0),
                                                cursor: !0,
                                                children: (0, i.jsxs)("div", {
                                                    style: {
                                                        cursor: "pointer"
                                                    },
                                                    className: "d-flex items-center js-gallery",
                                                    "data-gallery": "gallery1",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "d-flex justify-center items-center size-60 rounded-full border-dark-1-lg",
                                                        children: (0, i.jsx)("div", {
                                                            className: "icon-play text-20 text-dark-1 pl-5"
                                                        })
                                                    }), (0, i.jsx)("div", {
                                                        className: "ml-10",
                                                        children: "Watch Video"
                                                    })]
                                                })
                                            })]
                                        }), (0, i.jsx)("div", {
                                            className: "row x-gap-20 y-gap-20 items-center pt-60 lg:pt-30",
                                            children: l.MZ.map((e, s) => (0, i.jsx)("div", {
                                                className: "col-xl-4",
                                                children: (0, i.jsxs)("div", {
                                                    className: "d-flex items-center text-dark-1",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "mr-10",
                                                        children: (0, i.jsx)(r(), {
                                                            width: 24,
                                                            height: 24,
                                                            src: e.imageSrc,
                                                            alt: "icon"
                                                        })
                                                    }), (0, i.jsx)("div", {
                                                        className: "fw-500 lh-1 pt-3",
                                                        children: e.text
                                                    })]
                                                })
                                            }, s))
                                        })]
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "col-lg-6",
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "750",
                                    children: (0, i.jsxs)("div", {
                                        className: "composition -type-1 js-mouse-move-container",
                                        children: [(0, i.jsx)("div", {
                                            className: "-img-1",
                                            children: (0, i.jsx)(r(), {
                                                width: 255,
                                                height: 250,
                                                className: "js-mouse-move",
                                                "data-move": "40",
                                                src: "/assets/img/home-6/hero/2.png",
                                                alt: "image"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "-img-2",
                                            children: (0, i.jsx)(r(), {
                                                width: 300,
                                                height: 400,
                                                className: "js-mouse-move",
                                                "data-move": "40",
                                                src: "/assets/img/home-6/hero/1.png",
                                                alt: "image"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "-img-3",
                                            children: (0, i.jsx)(r(), {
                                                width: 200,
                                                height: 200,
                                                className: "js-mouse-move",
                                                "data-move": "40",
                                                src: "/assets/img/home-6/hero/3.png",
                                                alt: "image"
                                            })
                                        }), (0, i.jsx)("div", {
                                            "data-move": "30",
                                            className: "-el-1 md:d-none js-mouse-move",
                                            children: (0, i.jsxs)("div", {
                                                className: "img-el -w-250 px-20 py-20 d-flex items-center bg-white rounded-8",
                                                children: [(0, i.jsx)("div", {
                                                    className: "size-50 d-flex justify-center items-center bg-red-2 rounded-full",
                                                    children: (0, i.jsx)(r(), {
                                                        width: 24,
                                                        height: 24,
                                                        src: "/assets/img/masthead/1.svg",
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
                                            })
                                        }), (0, i.jsx)("div", {
                                            "data-move": "60",
                                            className: "-el-2 md:d-none js-mouse-move",
                                            children: (0, i.jsxs)("div", {
                                                className: "img-el -w-260 px-20 py-20 d-flex items-center bg-white rounded-8",
                                                children: [(0, i.jsx)(r(), {
                                                    width: 70,
                                                    height: 70,
                                                    src: "/assets/img/masthead/4.png",
                                                    alt: "icon"
                                                }), (0, i.jsxs)("div", {
                                                    className: "ml-20",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "text-dark-1 text-16 fw-500 lh-1",
                                                        children: "Ali Tufan"
                                                    }), (0, i.jsx)("div", {
                                                        className: "mt-3",
                                                        children: "UX/UI Designer"
                                                    }), (0, i.jsxs)("div", {
                                                        className: "d-flex x-gap-5 mt-3",
                                                        children: [(0, i.jsx)("div", {
                                                            children: (0, i.jsx)("div", {
                                                                className: "icon-star text-yellow-1 text-11"
                                                            })
                                                        }), (0, i.jsx)("div", {
                                                            children: (0, i.jsx)("div", {
                                                                className: "icon-star text-yellow-1 text-11"
                                                            })
                                                        }), (0, i.jsx)("div", {
                                                            children: (0, i.jsx)("div", {
                                                                className: "icon-star text-yellow-1 text-11"
                                                            })
                                                        }), (0, i.jsx)("div", {
                                                            children: (0, i.jsx)("div", {
                                                                className: "icon-star text-yellow-1 text-11"
                                                            })
                                                        }), (0, i.jsx)("div", {
                                                            children: (0, i.jsx)("div", {
                                                                className: "icon-star text-yellow-1 text-11"
                                                            })
                                                        })]
                                                    })]
                                                })]
                                            })
                                        }), (0, i.jsx)("div", {
                                            "data-move": "30",
                                            className: "-el-3 md:d-none js-mouse-move",
                                            children: (0, i.jsxs)("div", {
                                                className: "img-el px-40 py-20 shadow-4 d-flex items-center bg-white rounded-8",
                                                children: [(0, i.jsx)("div", {
                                                    className: "img-el__side",
                                                    children: (0, i.jsx)("div", {
                                                        className: "size-50 d-flex justify-center items-center bg-purple-1 rounded-full",
                                                        children: (0, i.jsx)(r(), {
                                                            width: 20,
                                                            height: 27,
                                                            src: "/assets/img/masthead/2.svg",
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
                                            })
                                        })]
                                    })
                                })]
                            })
                        })]
                    }), (0, i.jsx)(c.Z, {
                        videoId: "LlCwHnp3kL4",
                        isOpen: e,
                        setIsOpen: s
                    })]
                })
            }
        },
        39100: function(e, s, t) {
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
                o = t(57486),
                d = t(41715);

            function m() {
                let [e, s] = (0, r.useState)(!1), [t, a] = (0, r.useState)(0), [m, h] = (0, r.useState)(4);
                return (0, r.useEffect)(() => {
                    s(!0)
                }, []), (0, i.jsx)("section", {
                    className: "layout-pt-lg bg-dark-2",
                    children: (0, i.jsx)("div", {
                        className: "container",
                        children: (0, i.jsxs)("div", {
                            className: "row y-gap-30 items-center",
                            children: [(0, i.jsxs)("div", {
                                className: "col-lg-6 col-md-10",
                                children: [(0, i.jsx)("h2", {
                                    className: "text-30 lh-15 text-white",
                                    children: "People Love To Learn With Educrat"
                                }), (0, i.jsx)("p", {
                                    className: "text-white mt-10",
                                    children: "Lorem ipsum dolor sit amet, consectetur."
                                }), (0, i.jsx)("div", {
                                    className: "row x-gap-50 y-gap-30 pt-60 lg:pt-40 pr-40 md:pr-0",
                                    children: o.QW.slice(0, 2).map((e, s) => (0, i.jsxs)("div", {
                                        className: "col-sm-6 text-white",
                                        children: [(0, i.jsx)("div", {
                                            className: "text-45 lh-11 fw-700",
                                            children: e.rating
                                        }), (0, i.jsx)("div", {
                                            className: "mt-10",
                                            children: e.description
                                        })]
                                    }, s))
                                })]
                            }), (0, i.jsx)("div", {
                                className: "col-lg-4 offset-lg-1",
                                children: (0, i.jsxs)("div", {
                                    className: "testimonials-slider-2 js-testimonials-slider-2",
                                    children: [e && (0, i.jsx)(c.tq, {
                                        className: "overflow-visible w-[100%] custom-transition",
                                        effect: "cards",
                                        grabCursor: !0,
                                        modules: [l.W_, l.tl, l.c4],
                                        pagination: {
                                            el: ".pagination-testimonial-6",
                                            clickable: !0
                                        },
                                        navigation: {
                                            nextEl: ".icon-arrow-right-6",
                                            prevEl: ".icon-arrow-left-6"
                                        },
                                        spaceBetween: 40,
                                        slidesPerView: 1,
                                        onSlideChange: e => {
                                            h((1 - e.activeIndex / 1) * 4)
                                        },
                                        style: {
                                            transform: "rotate(".concat(m, "deg)"),
                                            transition: "1.5s",
                                            transformOrigin: "center bottom"
                                        },
                                        children: d.pb.slice(0, 3).map((e, s) => (0, i.jsx)(c.o5, {
                                            className: "swiper-slide scaleOne",
                                            style: {
                                                width: "100%",
                                                transform: "rotate(90deg)",
                                                transform: "scale(1)"
                                            },
                                            children: (0, i.jsx)("div", {
                                                className: "swiper-slide shadow-2",
                                                style: {
                                                    width: "100%"
                                                },
                                                children: (0, i.jsx)("div", {
                                                    className: "testimonials -type-1",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "testimonials__content",
                                                        children: [(0, i.jsx)("h4", {
                                                            className: "testimonials__title",
                                                            children: e.comment
                                                        }), (0, i.jsxs)("p", {
                                                            className: "testimonials__text",
                                                            children: ["“", e.description, "”"]
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
                                            })
                                        }, s))
                                    }), (0, i.jsxs)("div", {
                                        className: "d-flex x-gap-15 items-center justify-center pt-30",
                                        children: [(0, i.jsx)("div", {
                                            className: "col-auto",
                                            children: (0, i.jsx)("button", {
                                                className: "d-flex items-center text-24 arrow-left-hover text-white js-prev icon-arrow-left-6",
                                                children: (0, i.jsx)("i", {
                                                    className: "icon icon-arrow-left"
                                                })
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "col-auto",
                                            children: (0, i.jsx)("div", {
                                                className: "pagination -arrows text-white js-pagination pagination-testimonial-6 pagination-white-dot"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "col-auto",
                                            children: (0, i.jsx)("button", {
                                                className: "d-flex items-center text-24 arrow-right-hover text-white js-next icon-arrow-right-6",
                                                children: (0, i.jsx)("i", {
                                                    className: "icon icon-arrow-right"
                                                })
                                            })
                                        })]
                                    })]
                                })
                            })]
                        })
                    })
                })
            }
            t(26119)
        },
        81393: function(e, s, t) {
            "use strict";
            var i = t(9268),
                a = t(86006),
                n = t(76394),
                r = t.n(n),
                l = t(35846),
                c = t.n(l);
            s.Z = e => {
                let {
                    allClasses: s,
                    color: t
                } = e, [n, l] = (0, a.useState)(!1);
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)("div", {
                        className: s || "",
                        children: [(0, i.jsx)("button", {
                            onClick: () => l(e => !e),
                            className: "d-flex items-center ".concat(t || "text-white", " "),
                            "data-el-toggle": ".js-search-toggle",
                            children: (0, i.jsx)("i", {
                                className: "text-20 icon icon-search"
                            })
                        }), (0, i.jsxs)("div", {
                            className: "toggle-element js-search-toggle ".concat(n ? "-is-el-visible" : ""),
                            children: [(0, i.jsx)("div", {
                                className: "header-search pt-90 bg-white shadow-4 ",
                                style: {
                                    height: "650px"
                                },
                                children: (0, i.jsxs)("div", {
                                    className: "container",
                                    children: [(0, i.jsxs)("div", {
                                        className: "header-search__field",
                                        children: [(0, i.jsx)("div", {
                                            className: "icon icon-search text-dark-1"
                                        }), (0, i.jsx)("input", {
                                            required: !0,
                                            type: "text",
                                            className: "col-12 text-18 lh-12 text-dark-1 fw-500",
                                            placeholder: "What do you want to learn?"
                                        }), (0, i.jsx)("button", {
                                            onClick: () => l(!1),
                                            className: "d-flex items-center justify-center size-40 rounded-full bg-purple-3",
                                            "data-el-toggle": ".js-search-toggle",
                                            children: (0, i.jsx)(r(), {
                                                width: 12,
                                                height: 12,
                                                src: "/assets/img/menus/close.svg",
                                                alt: "icon"
                                            })
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "header-search__content mt-30",
                                        children: [(0, i.jsx)("div", {
                                            className: "text-17 text-dark-1 fw-500",
                                            children: "Popular Right Now"
                                        }), (0, i.jsxs)("div", {
                                            className: "d-flex y-gap-5 flex-column mt-20",
                                            children: [(0, i.jsx)(c(), {
                                                href: "/courses/".concat(5),
                                                className: "text-dark-1",
                                                children: "The Ultimate Drawing Course - Beginner to Advanced"
                                            }), (0, i.jsx)(c(), {
                                                href: "/courses-single-2/3",
                                                className: "text-dark-1",
                                                children: "Character Art School: Complete Character Drawing Course"
                                            }), (0, i.jsx)(c(), {
                                                href: "/courses-single-3/3",
                                                className: "text-dark-1",
                                                children: "Complete Blender Creator: Learn 3D Modelling for Beginners"
                                            }), (0, i.jsx)(c(), {
                                                href: "/courses-single-4/3",
                                                className: "text-dark-1",
                                                children: "User Experience Design Essentials - Adobe XD UI UX Design"
                                            }), (0, i.jsx)(c(), {
                                                href: "/courses-single-5/3",
                                                className: "text-dark-1",
                                                children: "Graphic Design Masterclass - Learn GREAT Design"
                                            }), (0, i.jsx)(c(), {
                                                href: "/courses-single-6/3",
                                                className: "text-dark-1",
                                                children: "Adobe Photoshop CC – Essentials Training Course"
                                            })]
                                        }), (0, i.jsx)("div", {
                                            className: "mt-30",
                                            children: (0, i.jsx)("button", {
                                                className: "uppercase underline",
                                                children: "PRESS ENTER TO SEE ALL SEARCH RESULTS"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, i.jsx)("div", {
                                className: "header-search__bg",
                                "data-el-toggle": ".js-search-toggle"
                            })]
                        })]
                    })
                })
            }
        },
        54355: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return x
                }
            });
            var i = t(9268),
                a = t(86006),
                n = t(39179),
                r = t(16797),
                l = t(51469),
                c = t(81393),
                o = t(76394),
                d = t.n(o),
                m = t(35846),
                h = t.n(m);

            function x() {
                let [e, s] = (0, a.useState)(!1), [t, o] = (0, a.useState)(0);
                return (0, a.useEffect)(() => {
                    let e = () => {
                        let e = window.scrollY;
                        o(e)
                    };
                    return window.addEventListener("scroll", e), () => {
                        window.removeEventListener("scroll", e)
                    }
                }, []), (0, i.jsx)("header", {
                    className: "header -type-4 js-header ".concat(t > 40 ? "bg-white" : "", " "),
                    children: (0, i.jsx)("div", {
                        className: "header__container py-5 border-bottom-dark",
                        children: (0, i.jsxs)("div", {
                            className: "row justify-between items-center",
                            children: [(0, i.jsx)("div", {
                                className: "col-auto",
                                children: (0, i.jsxs)("div", {
                                    className: "header-left d-flex items-center",
                                    children: [(0, i.jsx)("div", {
                                        className: "header__logo pr-30 xl:pr-20 md:pr-0",
                                        children: (0, i.jsx)(h(), {
                                            href: "/",
                                            children: (0, i.jsx)(d(), {
                                                width: 140,
                                                height: 50,
                                                src: "/assets/img/general/logo-black.svg",
                                                alt: "logo"
                                            })
                                        })
                                    }), (0, i.jsx)(r.Z, {
                                        allClasses: "menu__nav text-dark-1 -is-active"
                                    }), (0, i.jsx)(l.Z, {
                                        setActiveMobileMenu: s,
                                        activeMobileMenu: e
                                    })]
                                })
                            }), (0, i.jsx)("div", {
                                className: "col-auto",
                                children: (0, i.jsxs)("div", {
                                    className: "header-right d-flex items-center",
                                    children: [(0, i.jsxs)("div", {
                                        className: "header-right__icons text-white d-flex items-center",
                                        children: [(0, i.jsx)(c.Z, {
                                            color: "text-dark-1"
                                        }), (0, i.jsx)(n.Z, {
                                            parentClassess: "relative pl-30 sm:pl-15",
                                            allClasses: "d-flex items-center text-dark-1"
                                        }), (0, i.jsx)("div", {
                                            className: "d-none xl:d-block pl-30 sm:pl-15",
                                            children: (0, i.jsx)("button", {
                                                className: "text-dark-1 items-center",
                                                "data-el-toggle": ".js-mobile-menu-toggle",
                                                onClick: () => s(!0),
                                                children: (0, i.jsx)("i", {
                                                    className: "text-11 icon icon-mobile-menu"
                                                })
                                            })
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "header-right__buttons d-flex items-center ml-30 xl:ml-20 lg:d-none",
                                        children: [(0, i.jsx)(h(), {
                                            href: "/login",
                                            className: "button -underline text-dark-1",
                                            children: "Log in"
                                        }), (0, i.jsx)(h(), {
                                            href: "/signup",
                                            className: "button h-50 px-40 -purple-1 -rounded text-white ml-30 xl:ml-20",
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
        57486: function(e, s, t) {
            "use strict";
            t.d(s, {
                Jt: function() {
                    return i
                },
                MZ: function() {
                    return a
                },
                QW: function() {
                    return n
                }
            });
            let i = [{
                    id: 1,
                    imgSrc: "/assets/img/home-3/masthead/icons/1.svg",
                    title: "100,000 online courses",
                    description: "Explore a variety of fresh topics"
                }, {
                    id: 2,
                    imgSrc: "/assets/img/home-3/masthead/icons/2.svg",
                    title: "Expert instruction",
                    description: "Find the right instructor for you"
                }, {
                    id: 3,
                    imgSrc: "/assets/img/home-3/masthead/icons/3.svg",
                    title: "Lifetime access",
                    description: "Learn on your schedule"
                }],
                a = [{
                    id: 1,
                    imageSrc: "/assets/img/home-6/hero/icons/1.svg",
                    text: "Over 12 million students"
                }, {
                    id: 2,
                    imageSrc: "/assets/img/home-6/hero/icons/2.svg",
                    text: "More than 60,000 courses"
                }, {
                    id: 3,
                    imageSrc: "/assets/img/home-6/hero/icons/3.svg",
                    text: "Learn anything online"
                }],
                n = [{
                    id: 1,
                    rating: "9/10",
                    description: "9/10 users reported better learning outcomes."
                }, {
                    id: 2,
                    rating: "85%",
                    description: "85% of students see their course through to completion"
                }]
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
        26119: function() {},
        6497: function() {},
        17544: function() {}
    },
    function(e) {
        e.O(0, [8224, 8201, 6721, 3277, 226, 1840, 5127, 4240, 9253, 6488, 1744], function() {
            return e(e.s = 56079)
        }), _N_E = e.O()
    }
]);