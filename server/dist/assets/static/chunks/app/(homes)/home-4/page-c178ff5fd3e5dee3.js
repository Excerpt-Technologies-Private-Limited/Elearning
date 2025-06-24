(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [173], {
        9348: function(e, s, t) {
            Promise.resolve().then(t.bind(t, 5032)), Promise.resolve().then(t.bind(t, 1311)), Promise.resolve().then(t.bind(t, 91991)), Promise.resolve().then(t.bind(t, 96924)), Promise.resolve().then(t.t.bind(t, 8920, 23)), Promise.resolve().then(t.bind(t, 44927)), Promise.resolve().then(t.t.bind(t, 28707, 23)), Promise.resolve().then(t.bind(t, 29399)), Promise.resolve().then(t.bind(t, 25311)), Promise.resolve().then(t.bind(t, 52519)), Promise.resolve().then(t.bind(t, 62308)), Promise.resolve().then(t.bind(t, 50483))
        },
        5032: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return n
                }
            });
            var i = t(9268),
                a = t(76394),
                l = t.n(a);
            let r = ["/assets/img/clients/1.svg", "/assets/img/clients/2.svg", "/assets/img/clients/3.svg", "/assets/img/clients/4.svg", "/assets/img/clients/5.svg", "/assets/img/clients/6.svg"];
            var n = e => {
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
                                        children: (0, i.jsx)(l(), {
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
        86484: function(e, s, t) {
            "use strict";
            t.d(s, {
                Z: function() {
                    return l
                }
            });
            var i = t(9268);
            t(35846);
            let a = [{
                id: 1,
                href: "#",
                iconClassName: "icon-facebook"
            }, {
                id: 2,
                href: "#",
                iconClassName: "icon-twitter"
            }, {
                id: 3,
                href: "#",
                iconClassName: "icon-instagram"
            }, {
                id: 4,
                href: "#",
                iconClassName: "icon-linkedin"
            }];

            function l(e) {
                let {
                    componentsClass: s,
                    textSize: t
                } = e;
                return (0, i.jsx)(i.Fragment, {
                    children: a.map((e, a) => (0, i.jsx)("a", {
                        className: s || "",
                        href: e.href,
                        children: (0, i.jsx)("i", {
                            className: "".concat(e.iconClassName, " ").concat(t)
                        })
                    }, a))
                })
            }
            t(86006)
        },
        62308: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return c
                }
            });
            var i = t(9268),
                a = t(86006),
                l = t(68148),
                r = t(35846),
                n = t.n(r);

            function c() {
                let [e, s] = (0, a.useState)("All"), [t, r] = (0, a.useState)("All"), [c, d] = (0, a.useState)("");
                return (0, i.jsx)("section", {
                    className: "layout-pt-lg layout-pb-lg border-top-light",
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
                                        children: "Get personal learning recommendations"
                                    }), (0, i.jsx)("p", {
                                        className: "sectionTitle__text ",
                                        children: "Enhance your skills with best Online courses"
                                    })]
                                })
                            })
                        }), (0, i.jsxs)("div", {
                            className: "row y-gap-20 justify-center pt-30",
                            children: [(0, i.jsx)("div", {
                                className: "col-auto",
                                children: (0, i.jsxs)("div", {
                                    className: "dropdown js-dropdown js-drop1-active ".concat("category" == c ? "-is-dd-active" : ""),
                                    children: [(0, i.jsxs)("div", {
                                        onClick: () => d(e => "category" == e ? "" : "category"),
                                        className: "dropdown__button d-flex items-center text-14 border-light h-60",
                                        "data-el-toggle": ".js-drop1-toggle",
                                        "data-el-toggle-active": ".js-drop1-active",
                                        children: [(0, i.jsx)("span", {
                                            className: "js-dropdown-title",
                                            children: "All" == e ? "Category" : e
                                        }), (0, i.jsx)("i", {
                                            className: "icon text-9 ml-40 icon-chevron-down"
                                        })]
                                    }), (0, i.jsx)("div", {
                                        className: "toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-drop1-toggle ".concat("category" == c ? "-is-el-visible" : "", " "),
                                        children: (0, i.jsx)("div", {
                                            className: "text-14 y-gap-15 js-dropdown-list",
                                            children: l.Lp.map((t, a) => (0, i.jsx)("div", {
                                                onClick: () => {
                                                    s(t), d("")
                                                },
                                                className: "d-block js-dropdown-link cursor ".concat(e == t ? "activeMenu" : "", " "),
                                                children: t
                                            }, a))
                                        })
                                    })]
                                })
                            }), (0, i.jsx)("div", {
                                className: "col-auto",
                                children: (0, i.jsxs)("div", {
                                    className: "dropdown js-dropdown js-drop3-active ".concat("difficulty" == c ? "-is-dd-active" : ""),
                                    children: [(0, i.jsxs)("div", {
                                        onClick: () => d(e => "difficulty" == e ? "" : "difficulty"),
                                        className: "dropdown__button d-flex items-center text-14 border-light h-60",
                                        "data-el-toggle": ".js-drop3-toggle",
                                        "data-el-toggle-active": ".js-drop3-active",
                                        children: [(0, i.jsx)("span", {
                                            className: "js-dropdown-title",
                                            children: "All" == t ? "Diffiulty" : t
                                        }), (0, i.jsx)("i", {
                                            className: "icon text-9 ml-40 icon-chevron-down"
                                        })]
                                    }), (0, i.jsx)("div", {
                                        className: "toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-drop3-toggle ".concat("difficulty" == c ? "-is-el-visible" : "", " "),
                                        children: (0, i.jsx)("div", {
                                            className: "text-14 y-gap-15 js-dropdown-list",
                                            children: l.zV.map((e, s) => (0, i.jsx)("div", {
                                                onClick: () => {
                                                    r(e), d("")
                                                },
                                                className: "d-block js-dropdown-link cursor ".concat(t == e ? "activeMenu" : "", " "),
                                                children: e
                                            }, s))
                                        })
                                    })]
                                })
                            }), (0, i.jsx)("div", {
                                className: "col-auto",
                                children: (0, i.jsx)(n(), {
                                    href: "/courses-list-1",
                                    className: "button -md -purple-1 text-white",
                                    children: "Get Started Now"
                                })
                            })]
                        })]
                    })
                })
            }
        },
        29399: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return d
                }
            });
            var i = t(9268),
                a = t(86006),
                l = t(76394),
                r = t.n(l),
                n = t(35846),
                c = t.n(n);

            function d(e) {
                let {
                    data: s,
                    index: t
                } = e, [l, n] = (0, a.useState)([]);
                return (0, a.useEffect)(() => {
                    for (let e = Math.round(s.rating); e >= 1; e--) n(e => [...e, "star"])
                }, []), (0, i.jsx)("div", {
                    className: "col-lg-4 col-md-6 ".concat(1 == s.id ? "offset-xl-1" : ""),
                    style: {
                        height: "fit-content"
                    },
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsxs)("div", {
                            className: "coursesCard -type-1 shadow-3 rounded-8 bg-white",
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
                                }), s.new && (0, i.jsx)("div", {
                                    className: "d-flex justify-between py-10 px-10 absolute-full-center z-3",
                                    children: (0, i.jsx)("div", {
                                        children: (0, i.jsx)("div", {
                                            className: "px-15 rounded-200 bg-orange-1",
                                            children: (0, i.jsx)("span", {
                                                className: "text-11 lh-1 uppercase fw-500 text-white",
                                                children: "New"
                                            })
                                        })
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "d-flex justify-between py-10 px-10 absolute-full-center z-3"
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "h-100 pt-20 pb-15 pl-30 pr-40",
                                children: [(0, i.jsxs)("div", {
                                    className: "d-flex items-center",
                                    children: [(0, i.jsx)("div", {
                                        className: "text-14 lh-1 text-yellow-1 mr-10",
                                        children: s.rating
                                    }), (0, i.jsx)("div", {
                                        className: "d-flex x-gap-5 items-center",
                                        children: l.map((e, s) => (0, i.jsx)("div", {
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
        44927: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return x
                }
            });
            var i = t(9268),
                a = t(36115),
                l = t(70382),
                r = t(76394),
                n = t.n(r),
                c = t(86006),
                d = t(35846),
                o = t.n(d);

            function h(e) {
                let {
                    data: s,
                    index: t
                } = e, [a, l] = (0, c.useState)([]);
                return (0, c.useEffect)(() => {
                    for (let e = Math.round(s.rating); e >= 1; e--) l(e => [...e, "star"])
                }, []), (0, i.jsx)("div", {
                    className: "",
                    style: {
                        height: "fit-content"
                    },
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsxs)("div", {
                            className: "coursesCard -type-1 shadow-3 rounded-8 bg-white ",
                            children: [(0, i.jsxs)("div", {
                                className: "relative",
                                children: [(0, i.jsxs)("div", {
                                    className: "coursesCard__image overflow-hidden rounded-8",
                                    children: [(0, i.jsx)(n(), {
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
                                className: "h-100 pt-20 pb-15 pl-30 pr-40",
                                children: [(0, i.jsxs)("div", {
                                    className: "d-flex items-center",
                                    children: [(0, i.jsx)("div", {
                                        className: "text-14 lh-1 text-yellow-1 mr-10",
                                        children: s.rating
                                    }), (0, i.jsx)("div", {
                                        className: "d-flex x-gap-5 items-center",
                                        children: a.map((e, s) => (0, i.jsx)("div", {
                                            className: "icon-star text-9 text-yellow-1"
                                        }, s))
                                    }), (0, i.jsxs)("div", {
                                        className: "text-13 lh-1 ml-10",
                                        children: ["(", s.ratingCount, ")"]
                                    })]
                                }), (0, i.jsx)("div", {
                                    className: "text-17 lh-15 fw-500 text-dark-1 mt-10",
                                    children: (0, i.jsx)(o(), {
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
                                            children: (0, i.jsx)(n(), {
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
                                            children: (0, i.jsx)(n(), {
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
                                            children: (0, i.jsx)(n(), {
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
                                        children: [(0, i.jsx)(n(), {
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
            var m = t(68148);

            function x() {
                let [e, s] = (0, c.useState)(!1);
                return (0, c.useEffect)(() => {
                    s(!0)
                }, []), (0, i.jsx)("section", {
                    className: "layout-pt-lg layout-pb-lg bg-light-3",
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
                                        children: "Our Most Popular Courses"
                                    }), (0, i.jsx)("p", {
                                        className: "sectionTitle__text ",
                                        children: "10,000+ unique online course list designs"
                                    })]
                                })
                            })
                        }), (0, i.jsxs)("div", {
                            className: "relative pt-60 lg:pt-50 js-section-slider",
                            "data-aos": "fade-left",
                            "data-aos-offset": "80",
                            "data-aos-duration": 800,
                            children: [e && (0, i.jsx)(l.tq, {
                                className: "overflow-visible",
                                modules: [a.W_, a.tl],
                                pagination: {
                                    el: ".event-pagination",
                                    clickable: !0
                                },
                                navigation: {
                                    nextEl: ".course-slider-four-next",
                                    prevEl: ".course-slider-four-prev"
                                },
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
                                children: m.om.slice(0, 6).map((e, s) => (0, i.jsx)(l.o5, {
                                    children: (0, i.jsx)(h, {
                                        index: s,
                                        data: e
                                    }, s)
                                }, s))
                            }), (0, i.jsx)("button", {
                                className: "course-slider-four-prev section-slider-nav -prev -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-prev",
                                children: (0, i.jsx)("i", {
                                    className: "icon icon-arrow-left text-24"
                                })
                            }), (0, i.jsx)("button", {
                                className: "course-slider-four-next section-slider-nav -next -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-next",
                                children: (0, i.jsx)("i", {
                                    className: "icon icon-arrow-right text-24"
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: "row justify-center pt-60 lg:pt-50",
                            children: (0, i.jsx)("div", {
                                className: "col-auto",
                                children: (0, i.jsxs)(o(), {
                                    href: "/courses-list-2",
                                    className: "button -icon -purple-1 text-white",
                                    children: ["Browse All Courses", (0, i.jsx)("i", {
                                        className: "icon-arrow-top-right text-13 ml-10"
                                    })]
                                })
                            })
                        })]
                    })
                })
            }
        },
        25311: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return o
                }
            });
            var i = t(9268);
            t(76394);
            var a = t(86006),
                l = t(36115),
                r = t(70382),
                n = t(29707),
                c = t(35846),
                d = t.n(c);

            function o() {
                let [e, s] = (0, a.useState)(!1);
                return (0, a.useEffect)(() => {
                    s(!0)
                }, []), (0, i.jsx)("section", {
                    className: "layout-pt-lg layout-pb-lg border-top-light",
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
                                        children: "Upcoming Events"
                                    }), (0, i.jsx)("p", {
                                        className: "sectionTitle__text ",
                                        children: "Lorem ipsum dolor sit amet, consectetur."
                                    })]
                                })
                            })
                        }), (0, i.jsxs)("div", {
                            className: "pt-60 lg:pt-50 js-section-slider",
                            children: [e && (0, i.jsx)(r.tq, {
                                className: "overflow-visible",
                                modules: [l.W_, l.tl],
                                pagination: {
                                    el: ".event-four-pagination",
                                    clickable: !0
                                },
                                navigation: {
                                    nextEl: ".icon-arrow-right-event-four",
                                    prevEl: ".icon-arrow-left-event-four"
                                },
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
                                children: n.U3.slice(0, 6).map((e, s) => (0, i.jsx)(r.o5, {
                                    className: "swiper-slide",
                                    children: (0, i.jsx)("div", {
                                        className: "swiper-slide",
                                        children: (0, i.jsxs)("div", {
                                            className: "eventCard -type-3 bg-light-4 rounded-8",
                                            children: [(0, i.jsxs)("div", {
                                                className: "eventCard__date",
                                                children: [(0, i.jsx)("span", {
                                                    className: "text-45 lh-1 fw-700 text-dark-1",
                                                    children: e.date.split(" ")[0]
                                                }), (0, i.jsx)("span", {
                                                    className: "text-18 lh-1 fw-500 ml-15",
                                                    children: e.date.split(" ")[1].split(",")[0].toUpperCase()
                                                })]
                                            }), (0, i.jsx)("h4", {
                                                className: "eventCard__title text-24 lh-15 fw-500",
                                                children: (0, i.jsx)(d(), {
                                                    className: "linkCustom",
                                                    href: "/events/".concat(e.id),
                                                    children: e.desc
                                                })
                                            }), (0, i.jsx)("div", {
                                                className: "eventCard__button",
                                                children: (0, i.jsxs)(d(), {
                                                    href: "/events/".concat(e.id),
                                                    className: "button -icon -purple-1 text-white",
                                                    children: ["Buy Ticket", (0, i.jsx)("i", {
                                                        className: "icon-arrow-top-right text-13 ml-10"
                                                    })]
                                                })
                                            })]
                                        })
                                    })
                                }, s))
                            }), (0, i.jsxs)("div", {
                                className: "d-flex justify-center x-gap-15 items-center pt-60 lg:pt-40",
                                children: [(0, i.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, i.jsx)("button", {
                                        className: "d-flex items-center text-24 arrow-left-hover js-prev icon-arrow-left-event-four",
                                        children: (0, i.jsx)("i", {
                                            className: "icon icon-arrow-left"
                                        })
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, i.jsx)("div", {
                                        className: "pagination -arrows js-pagination event-four-pagination"
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, i.jsx)("button", {
                                        className: "d-flex items-center text-24 arrow-right-hover js-next icon-arrow-right-event-four",
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
        91991: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return h
                }
            });
            var i = t(9268),
                a = t(70226),
                l = t(76394),
                r = t.n(l),
                n = t(35846),
                c = t.n(n),
                d = t(86006),
                o = t(56008);

            function h() {
                let e = (0, o.useRouter)();
                return (0, d.useEffect)(() => {
                    (() => {
                        let e = document.querySelectorAll(".js-mouse-move-container");
                        e.forEach(e => {
                            let s = e.querySelectorAll(".js-mouse-move");
                            s.forEach(s => {
                                let t = s.getAttribute("data-move");
                                document.addEventListener("mousemove", i => {
                                    let l = i.pageX - e.offsetLeft,
                                        r = i.pageY - e.offsetTop;
                                    a.ZP.to(s, {
                                        x: (l - e.offsetWidth / 2) / e.offsetWidth * Number(t),
                                        y: (r - e.offsetHeight / 2) / e.offsetHeight * Number(t),
                                        duration: .2
                                    })
                                })
                            })
                        })
                    })()
                }, []), (0, i.jsx)("section", {
                    className: "masthead -type-3 bg-light-6 js-mouse-move-container",
                    children: (0, i.jsx)("div", {
                        className: "container",
                        children: (0, i.jsxs)("div", {
                            className: "row y-gap-30 items-center justify-center",
                            children: [(0, i.jsx)("div", {
                                className: "col-xl-7 col-lg-11 relative z-5",
                                "data-aos": "fade-up",
                                "data-aos-delay": "500",
                                children: (0, i.jsxs)("div", {
                                    className: "masthead__content pl-32 lg:pl-0",
                                    children: [(0, i.jsxs)("h1", {
                                        className: "masthead__title",
                                        children: ["Find Your Preferred", (0, i.jsx)("br", {}), " ", (0, i.jsx)("span", {
                                            className: "text-purple-1",
                                            children: "Courses"
                                        }), " & Improve Your Skills"]
                                    }), (0, i.jsxs)("p", {
                                        className: "masthead__text text-17 text-dark-1 mt-25",
                                        children: ["Build skills with courses, certificates, and degrees online from", (0, i.jsx)("br", {
                                            className: "lg:d-none"
                                        }), "world-class universities and companies."]
                                    }), (0, i.jsxs)("div", {
                                        className: "masthead-search mt-30",
                                        children: [(0, i.jsx)("div", {
                                            className: "masthead-search__form",
                                            children: (0, i.jsxs)("form", {
                                                onSubmit: e => {
                                                    e.preventDefault()
                                                },
                                                children: [(0, i.jsx)("input", {
                                                    required: !0,
                                                    type: "text",
                                                    placeholder: "What do you want to learn today?"
                                                }), (0, i.jsx)("button", {
                                                    className: "button -purple-1 text-white",
                                                    onClick: () => e.push("/courses-list-2"),
                                                    children: (0, i.jsx)("i", {
                                                        className: "icon icon-search"
                                                    })
                                                })]
                                            })
                                        }), (0, i.jsxs)("div", {
                                            className: "masthead-search__searches mt-40",
                                            children: ["Trending Search:", (0, i.jsx)(c(), {
                                                href: "/courses/".concat(6),
                                                children: "Development"
                                            }), ",", (0, i.jsx)(c(), {
                                                href: "/courses-single-2/3",
                                                children: "Business"
                                            }), ",", (0, i.jsx)(c(), {
                                                href: "/courses-single-6/3",
                                                children: "Design"
                                            }), ",", (0, i.jsx)("a", {
                                                href: "#",
                                                children: "Merketing"
                                            })]
                                        })]
                                    })]
                                })
                            }), (0, i.jsx)("div", {
                                className: "col-xl-5 col-lg-7 relative z-2",
                                "data-aos": "fade-up",
                                "data-aos-delay": "750",
                                children: (0, i.jsxs)("div", {
                                    className: "masthead-image",
                                    children: [(0, i.jsxs)("div", {
                                        className: "masthead-image__img1",
                                        children: [(0, i.jsx)("div", {
                                            className: "masthead-image__shape xl:d-none",
                                            children: (0, i.jsx)(r(), {
                                                width: 800,
                                                height: 800,
                                                src: "/assets/img/home-4/masthead/shape.svg",
                                                alt: "image"
                                            })
                                        }), (0, i.jsx)(r(), {
                                            width: 587,
                                            height: 656,
                                            "data-move": "20",
                                            className: "js-mouse-move",
                                            src: "/assets/img/home-4/masthead/1.png",
                                            alt: "image"
                                        })]
                                    }), (0, i.jsx)("div", {
                                        className: "masthead-image__el1",
                                        children: (0, i.jsxs)("div", {
                                            "data-move": "40",
                                            className: "lg:d-none img-el -w-250 px-20 py-20 d-flex items-center bg-white rounded-8 js-mouse-move",
                                            children: [(0, i.jsx)("div", {
                                                className: "size-50 d-flex justify-center items-center bg-red-2 rounded-full",
                                                children: (0, i.jsx)(r(), {
                                                    width: 24,
                                                    height: 23,
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
                                        className: "masthead-image__el2",
                                        children: (0, i.jsxs)("div", {
                                            "data-move": "40",
                                            className: "shadow-4 img-el -w-260 px-40 py-20 d-flex items-center bg-white rounded-8 js-mouse-move",
                                            children: [(0, i.jsx)("div", {
                                                className: "img-el__side",
                                                children: (0, i.jsx)("div", {
                                                    className: "size-50 d-flex justify-center items-center bg-dark-1 rounded-full",
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
                    })
                })
            }
        },
        50483: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return h
                }
            });
            var i = t(9268),
                a = t(86006),
                l = t(36115),
                r = t(70382),
                n = t(41715),
                c = t(76394),
                d = t.n(c);

            function o(e) {
                let {
                    data: s,
                    index: t
                } = e, [l, r] = (0, a.useState)([]);
                return (0, a.useEffect)(() => {
                    for (let e = Math.round(s.rating); e >= 1; e--) r(e => [...e, "star"])
                }, []), (0, i.jsx)("div", {
                    className: "swiper-slide",
                    children: (0, i.jsx)("div", {
                        className: "testimonials -type-3 sm:px-20 sm:py-40 bg-white",
                        "data-aos": "fade-left",
                        "data-aos-duration": (t + 1) * 600,
                        children: (0, i.jsxs)("div", {
                            className: "row y-gap-30 md:text-center md:justify-center",
                            children: [(0, i.jsx)("div", {
                                className: "col-md-auto",
                                children: (0, i.jsx)("div", {
                                    className: "testimonials__image",
                                    children: (0, i.jsx)(d(), {
                                        width: 170,
                                        height: 160,
                                        src: s.image,
                                        alt: "image"
                                    })
                                })
                            }), (0, i.jsxs)("div", {
                                className: "col-md",
                                children: [(0, i.jsxs)("div", {
                                    className: "d-flex items-center md:justify-center",
                                    children: [(0, i.jsx)("span", {
                                        className: "text-14 lh-1 text-yellow-1",
                                        children: s.rating
                                    }), (0, i.jsx)("div", {
                                        className: "x-gap-5 px-10",
                                        children: l.map((e, s) => (0, i.jsx)("i", {
                                            className: "text-11 icon-star text-yellow-1"
                                        }, s))
                                    }), (0, i.jsxs)("span", {
                                        className: "text-13 lh-1",
                                        children: ["(", s.numRatings, ")"]
                                    })]
                                }), (0, i.jsxs)("p", {
                                    className: "testimonials__text text-16 lh-17 fw-500 mt-15",
                                    children: ["“", s.text, "”"]
                                }), (0, i.jsxs)("div", {
                                    className: "mt-15",
                                    children: [(0, i.jsx)("div", {
                                        className: "text-15 lh-1 text-dark-1 fw-500",
                                        children: s.name
                                    }), (0, i.jsx)("div", {
                                        className: "text-13 lh-1 mt-10",
                                        children: s.profession
                                    })]
                                })]
                            })]
                        })
                    })
                })
            }

            function h() {
                let [e, s] = (0, a.useState)(!1);
                return (0, a.useEffect)(() => {
                    s(!0)
                }, []), (0, i.jsx)("section", {
                    className: "layout-pt-lg layout-pb-lg bg-dark-5",
                    children: (0, i.jsxs)("div", {
                        className: "container",
                        children: [(0, i.jsx)("div", {
                            className: "row justify-center text-center",
                            children: (0, i.jsx)("div", {
                                className: "col-auto",
                                children: (0, i.jsxs)("div", {
                                    className: "sectionTitle ",
                                    children: [(0, i.jsx)("h2", {
                                        className: "sectionTitle__title text-white",
                                        children: "People Say About Educrat"
                                    }), (0, i.jsx)("p", {
                                        className: "sectionTitle__text text-white",
                                        children: "10,000+ unique online course list designs"
                                    })]
                                })
                            })
                        }), (0, i.jsxs)("div", {
                            className: "pt-60 lg:pt-50 js-section-slider",
                            children: [e && (0, i.jsx)(r.tq, {
                                className: "overflow-visible",
                                modules: [l.W_, l.tl],
                                pagination: {
                                    el: ".pagination-testimonial",
                                    clickable: !0
                                },
                                navigation: {
                                    nextEl: ".icon-arrow-right-testimonial",
                                    prevEl: ".icon-arrow-left-testimonial"
                                },
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
                                        slidesPerView: 2
                                    }
                                },
                                children: n.te.map((e, s) => (0, i.jsx)(r.o5, {
                                    className: "swiper-slide",
                                    children: (0, i.jsx)(o, {
                                        data: e,
                                        index: s
                                    })
                                }, s))
                            }), (0, i.jsxs)("div", {
                                className: "d-flex justify-center x-gap-15 items-center pt-60 lg:pt-40",
                                children: [(0, i.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, i.jsx)("button", {
                                        className: "d-flex items-center text-24 arrow-left-hover js-prev icon-arrow-left-testimonial",
                                        children: (0, i.jsx)("i", {
                                            className: "icon text-white icon-arrow-left"
                                        })
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, i.jsx)("div", {
                                        className: "pagination -arrows js-pagination pagination-testimonial"
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, i.jsx)("button", {
                                        className: "d-flex items-center text-24 arrow-right-hover js-next icon-arrow-right-testimonial",
                                        children: (0, i.jsx)("i", {
                                            className: "icon text-white icon-arrow-right"
                                        })
                                    })
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        7700: function(e, s, t) {
            "use strict";
            t.d(s, {
                Z: function() {
                    return n
                }
            });
            var i = t(9268);
            t(86006);
            var a = t(69567),
                l = t(35846),
                r = t.n(l);

            function n(e) {
                let {
                    allClasses: s
                } = e;
                return (0, i.jsx)(i.Fragment, {
                    children: a.d.map((e, t) => (0, i.jsxs)("div", {
                        className: "col-xl-2 col-lg-4 col-md-6",
                        children: [(0, i.jsx)("div", {
                            className: "".concat(s || ""),
                            children: e.title
                        }), (0, i.jsx)("div", {
                            className: "d-flex y-gap-10 flex-column",
                            children: e.links.map((e, s) => (0, i.jsx)(r(), {
                                href: e.href,
                                children: e.label
                            }, s))
                        })]
                    }, t))
                })
            }
        },
        80808: function(e, s, t) {
            "use strict";
            t.d(s, {
                Z: function() {
                    return n
                }
            });
            var i = t(9268);
            let a = [{
                id: 1,
                href: "/help-center",
                label: "Help"
            }, {
                id: 2,
                href: "/terms",
                label: "Privacy Policy"
            }, {
                id: 3,
                href: "/terms",
                label: "Cookie Notice"
            }, {
                id: 4,
                href: "/terms",
                label: "Security"
            }, {
                id: 5,
                href: "/terms",
                label: "Terms of Use"
            }];
            var l = t(35846),
                r = t.n(l);

            function n(e) {
                let {
                    allClasses: s
                } = e;
                return (0, i.jsx)(i.Fragment, {
                    children: a.map((e, t) => (0, i.jsx)(r(), {
                        className: "".concat(s || ""),
                        href: e.href,
                        children: e.label
                    }, t))
                })
            }
            t(86006)
        },
        81393: function(e, s, t) {
            "use strict";
            var i = t(9268),
                a = t(86006),
                l = t(76394),
                r = t.n(l),
                n = t(35846),
                c = t.n(n);
            s.Z = e => {
                let {
                    allClasses: s,
                    color: t
                } = e, [l, n] = (0, a.useState)(!1);
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)("div", {
                        className: s || "",
                        children: [(0, i.jsx)("button", {
                            onClick: () => n(e => !e),
                            className: "d-flex items-center ".concat(t || "text-white", " "),
                            "data-el-toggle": ".js-search-toggle",
                            children: (0, i.jsx)("i", {
                                className: "text-20 icon icon-search"
                            })
                        }), (0, i.jsxs)("div", {
                            className: "toggle-element js-search-toggle ".concat(l ? "-is-el-visible" : ""),
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
                                            onClick: () => n(!1),
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
        52519: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return d
                }
            });
            var i = t(9268);
            t(86006);
            var a = t(80808),
                l = t(86484),
                r = t(7700),
                n = t(76394),
                c = t.n(n);

            function d() {
                return (0, i.jsx)("footer", {
                    className: "footer -type-1 -dark bg-light-9",
                    children: (0, i.jsxs)("div", {
                        className: "container",
                        children: [(0, i.jsx)("div", {
                            className: "footer-header border-bottom-dark",
                            children: (0, i.jsxs)("div", {
                                className: "row y-gap-20 justify-between items-center",
                                children: [(0, i.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, i.jsx)("div", {
                                        className: "footer-header__logo",
                                        children: (0, i.jsx)(c(), {
                                            width: 140,
                                            height: 50,
                                            src: "/assets/img/general/logo-dark.svg",
                                            alt: "logo"
                                        })
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, i.jsxs)("div", {
                                        className: "footer-header-socials",
                                        children: [(0, i.jsx)("div", {
                                            className: "footer-header-socials__title text-dark-1",
                                            children: "Follow us on social media"
                                        }), (0, i.jsx)("div", {
                                            className: "footer-header-socials__list",
                                            children: (0, i.jsx)(l.Z, {})
                                        })]
                                    })
                                })]
                            })
                        }), (0, i.jsx)("div", {
                            className: "footer-columns",
                            children: (0, i.jsxs)("div", {
                                className: "row y-gap-30",
                                children: [(0, i.jsx)(r.Z, {
                                    allClasses: "text-17 fw-500 uppercase mb-25"
                                }), (0, i.jsxs)("div", {
                                    className: "col-xl-4 ol-md-4 col-sm-6",
                                    children: [(0, i.jsx)("div", {
                                        className: "text-17 fw-500 uppercase mb-25",
                                        children: "GET IN TOUCH"
                                    }), (0, i.jsxs)("div", {
                                        className: "footer-columns-form",
                                        children: [(0, i.jsx)("div", {
                                            children: "We don’t send spam so don’t worry."
                                        }), (0, i.jsx)("form", {
                                            onSubmit: e => {
                                                e.preventDefault()
                                            },
                                            children: (0, i.jsxs)("div", {
                                                className: "form-group",
                                                children: [(0, i.jsx)("input", {
                                                    required: !0,
                                                    type: "text",
                                                    placeholder: "Email..."
                                                }), (0, i.jsx)("button", {
                                                    type: "submit",
                                                    children: "Submit"
                                                })]
                                            })
                                        })]
                                    })]
                                })]
                            })
                        }), (0, i.jsx)("div", {
                            className: "footer-footer border-top-dark",
                            children: (0, i.jsxs)("div", {
                                className: "row justify-between y-gap-20",
                                children: [(0, i.jsx)("div", {
                                    className: "col-md-6",
                                    children: (0, i.jsxs)("div", {
                                        className: "footer-footer__copyright",
                                        children: ["\xa9 ", new Date().getFullYear(), " Educrat. All Right Reserved."]
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, i.jsxs)("div", {
                                        className: "footer-footer__right",
                                        children: [(0, i.jsx)("div", {
                                            className: "footer-footer__list",
                                            children: (0, i.jsx)(a.Z, {})
                                        }), (0, i.jsx)("div", {
                                            className: "ml-20",
                                            children: (0, i.jsx)("a", {
                                                href: "#",
                                                className: "button -white px-30 py-20 rounded-200 text-black -light-4  -purple-3 text-purple-1",
                                                children: "English"
                                            })
                                        })]
                                    })
                                })]
                            })
                        })]
                    })
                })
            }
        },
        96924: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return u
                }
            });
            var i = t(9268),
                a = t(76394),
                l = t.n(a),
                r = t(35846),
                n = t.n(r),
                c = t(86006),
                d = t(39179),
                o = t(34119),
                h = t(16797),
                m = t(51469),
                x = t(81393);

            function u() {
                let [e, s] = (0, c.useState)(!1);
                return (0, i.jsx)("header", {
                    className: "header -type-4 -shadow bg-white border-bottom-light js-header",
                    children: (0, i.jsx)("div", {
                        className: "header__container py-10",
                        children: (0, i.jsxs)("div", {
                            className: "row justify-between items-center",
                            children: [(0, i.jsx)("div", {
                                className: "col-auto",
                                children: (0, i.jsxs)("div", {
                                    className: "header-left d-flex items-center",
                                    children: [(0, i.jsx)("div", {
                                        className: "header__logo pr-30 xl:pr-20 md:pr-0",
                                        children: (0, i.jsx)(n(), {
                                            href: "/",
                                            children: (0, i.jsx)(l(), {
                                                width: 140,
                                                height: 50,
                                                src: "/assets/img/general/logo-dark.svg",
                                                alt: "logo"
                                            })
                                        })
                                    }), (0, i.jsx)(o.n, {
                                        allClasses: "header__explore px-30 xl:px-20 -before-border -after-border xl:d-none"
                                    }), (0, i.jsx)(h.Z, {
                                        headerPosition: "pl-30 xl:pl-20",
                                        allClasses: "menu__nav text-dark-1 -is-active"
                                    }), (0, i.jsx)(m.Z, {
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
                                        children: [(0, i.jsx)(x.Z, {
                                            color: "text-dark-1",
                                            allClasses: "pr-20 sm:pr-15"
                                        }), (0, i.jsx)(d.Z, {
                                            allClasses: "d-flex items-center text-dark-1"
                                        }), (0, i.jsx)("div", {
                                            className: "d-none xl:d-block -before-border pl-20 sm:pl-15",
                                            children: (0, i.jsx)("button", {
                                                onClick: () => s(!0),
                                                className: "text-dark-1 items-center",
                                                "data-el-toggle": ".js-mobile-menu-toggle",
                                                children: (0, i.jsx)("i", {
                                                    className: "text-11 icon icon-mobile-menu"
                                                })
                                            })
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "header-right__buttons d-flex items-center lg:d-none",
                                        children: [(0, i.jsx)("a", {
                                            href: "#",
                                            className: "button -underline text-dark-1 -before-border py-3 pl-30 xl:pl-20",
                                            children: "Log in"
                                        }), (0, i.jsx)("a", {
                                            href: "#",
                                            className: "button h-50 px-25 -purple-3 -rounded text-purple-1 ml-20",
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
        69567: function(e, s, t) {
            "use strict";
            t.d(s, {
                d: function() {
                    return i
                }
            });
            let i = [{
                title: "ABOUT",
                links: [{
                    href: "/about-1",
                    label: "About Us"
                }, {
                    href: "/blog-list-1",
                    label: "Learner Stories"
                }, {
                    href: "/instructor-become",
                    label: "Careers"
                }, {
                    href: "/blog-list-1",
                    label: "Press"
                }, {
                    href: "#",
                    label: "Leadership"
                }, {
                    href: "/contact-1",
                    label: "Contact Us"
                }]
            }, {
                title: "CATEGORIES",
                links: [{
                    href: "/courses/1",
                    label: "Development"
                }, {
                    href: "/courses-single-2/3",
                    label: "Business"
                }, {
                    href: "/courses-single-3/3",
                    label: "Finance & Accounting"
                }, {
                    href: "/courses-single-4/3",
                    label: "IT & Software"
                }, {
                    href: "/courses-single-5/3",
                    label: "Office Productivity"
                }, {
                    href: "/courses-single-6/3",
                    label: "Design"
                }, {
                    href: "/courses/1",
                    label: "Marketing"
                }]
            }, {
                title: "Others",
                links: [{
                    href: "/courses/1",
                    label: "Lifestyle"
                }, {
                    href: "/courses-single-2/3",
                    label: "Photography & Video"
                }, {
                    href: "/courses-single-3/3",
                    label: "Health & Fitness"
                }, {
                    href: "/courses-single-4/3",
                    label: "Music"
                }, {
                    href: "/courses-single-5/3",
                    label: "UX Design"
                }, {
                    href: "/courses-single-6/3",
                    label: "SEO"
                }]
            }, {
                title: "SUPPORT",
                links: [{
                    href: "/terms",
                    label: "Documentation"
                }, {
                    href: "/help-center",
                    label: "FAQs"
                }, {
                    href: "/dashboard",
                    label: "Dashboard"
                }, {
                    href: "/contact-1",
                    label: "Contact"
                }]
            }]
        },
        41715: function(e, s, t) {
            "use strict";
            t.d(s, {
                nE: function() {
                    return l
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
                l = ["/assets/img/home-3/testimonials/1.png", "/assets/img/home-3/testimonials/2.png", "/assets/img/home-3/testimonials/3.png", "/assets/img/home-3/testimonials/4.png", "/assets/img/home-3/testimonials/5.png"],
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
        }
    },
    function(e) {
        e.O(0, [8224, 8201, 6721, 226, 1840, 5127, 4240, 4119, 9253, 6488, 1744], function() {
            return e(e.s = 9348)
        }), _N_E = e.O()
    }
]);