(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9636], {
        81285: function(e, s, i) {
            Promise.resolve().then(i.t.bind(i, 8920, 23)), Promise.resolve().then(i.bind(i, 1311)), Promise.resolve().then(i.bind(i, 14747)), Promise.resolve().then(i.bind(i, 55980)), Promise.resolve().then(i.bind(i, 6286)), Promise.resolve().then(i.bind(i, 980))
        },
        980: function(e, s, i) {
            "use strict";
            i.r(s), i.d(s, {
                default: function() {
                    return o
                }
            });
            var t = i(9268),
                l = i(40600),
                a = i(68148),
                d = i(86006),
                c = i(76759),
                n = i(81383),
                r = i(29518),
                x = i(55124),
                m = i(99306);
            let h = [{
                id: 1,
                href: "#overview",
                text: "Overview",
                isActive: !0
            }, {
                id: 2,
                href: "#course-content",
                text: "Course Content",
                isActive: !1
            }, {
                id: 3,
                href: "#instructors",
                text: "Instructors",
                isActive: !1
            }, {
                id: 4,
                href: "#reviews",
                text: "Reviews",
                isActive: !1
            }];

            function o(e) {
                let {
                    id: s
                } = e, [i, o] = (0, d.useState)(a.om[0]);
                return (0, d.useEffect)(() => {
                    o(a.om.filter(e => e.id == s)[0] || a.om[0])
                }, []), (0, t.jsxs)("div", {
                    id: "js-pin-container",
                    className: "js-pin-container relative",
                    children: [(0, t.jsxs)("section", {
                        className: "page-header -type-5 bg-light-6",
                        children: [(0, t.jsx)("div", {
                            className: "page-header__bg",
                            children: (0, t.jsx)("div", {
                                className: "bg-image js-lazy",
                                "data-bg": "img/event-single/bg.png"
                            })
                        }), (0, t.jsx)("div", {
                            className: "container",
                            children: (0, t.jsx)("div", {
                                className: "page-header__content pt-90 pb-90",
                                children: (0, t.jsx)("div", {
                                    className: "row y-gap-30",
                                    children: (0, t.jsxs)("div", {
                                        className: "col-xl-7 col-lg-8",
                                        children: [(0, t.jsxs)("div", {
                                            className: "d-flex x-gap-15 y-gap-10 pb-20",
                                            children: [(0, t.jsx)("div", {
                                                children: (0, t.jsx)("div", {
                                                    className: "badge px-15 py-8 text-11 bg-green-1 text-dark-1 fw-400",
                                                    children: "BEST SELLER"
                                                })
                                            }), (0, t.jsx)("div", {
                                                children: (0, t.jsx)("div", {
                                                    className: "badge px-15 py-8 text-11 bg-orange-1 text-white fw-400",
                                                    children: "NEW"
                                                })
                                            }), (0, t.jsx)("div", {
                                                children: (0, t.jsx)("div", {
                                                    className: "badge px-15 py-8 text-11 bg-purple-1 text-white fw-400",
                                                    children: "POPULAR"
                                                })
                                            })]
                                        }), (0, t.jsx)("div", {
                                            children: (0, t.jsx)("h1", {
                                                className: "text-30 lh-14 pr-60 lg:pr-0",
                                                children: i.title
                                            })
                                        }), (0, t.jsx)("p", {
                                            className: "col-xl-9 mt-20",
                                            children: "Use XD to get a job in UI Design, User Interface, User Experience design, UX design & Web Design"
                                        }), (0, t.jsxs)("div", {
                                            className: "d-flex x-gap-30 y-gap-10 items-center flex-wrap pt-20",
                                            children: [(0, t.jsxs)("div", {
                                                className: "d-flex items-center",
                                                children: [(0, t.jsx)("div", {
                                                    className: "text-14 lh-1 text-yellow-1 mr-10",
                                                    children: i.rating
                                                }), (0, t.jsx)("div", {
                                                    className: "d-flex x-gap-5 items-center",
                                                    children: (0, t.jsx)(l.default, {
                                                        star: 5,
                                                        textSize: "text-11"
                                                    })
                                                }), (0, t.jsxs)("div", {
                                                    className: "text-14 lh-1 text-light-1 ml-10",
                                                    children: ["(", i.ratingCount, ")"]
                                                })]
                                            }), (0, t.jsxs)("div", {
                                                className: "d-flex items-center text-light-1",
                                                children: [(0, t.jsx)("div", {
                                                    className: "icon icon-person-3 text-13"
                                                }), (0, t.jsx)("div", {
                                                    className: "text-14 ml-8",
                                                    children: "853 enrolled on this course"
                                                })]
                                            }), (0, t.jsxs)("div", {
                                                className: "d-flex items-center text-light-1",
                                                children: [(0, t.jsx)("div", {
                                                    className: "icon icon-wall-clock text-13"
                                                }), (0, t.jsx)("div", {
                                                    className: "text-14 ml-8",
                                                    children: "Last updated 11/2021"
                                                })]
                                            })]
                                        }), (0, t.jsxs)("div", {
                                            className: "d-flex items-center pt-20",
                                            children: [(0, t.jsx)("div", {
                                                className: "bg-image size-30 rounded-full js-lazy",
                                                style: {
                                                    backgroundImage: "url(".concat(i.authorImageSrc, ")")
                                                }
                                            }), (0, t.jsx)("div", {
                                                className: "text-14 lh-1 ml-10",
                                                children: i.authorName
                                            })]
                                        })]
                                    })
                                })
                            })
                        })]
                    }), (0, t.jsx)(c.Z, {
                        pageItem: i
                    }), (0, t.jsx)("section", {
                        className: "layout-pt-md layout-pb-md",
                        children: (0, t.jsx)("div", {
                            className: "container",
                            children: (0, t.jsx)("div", {
                                className: "row",
                                children: (0, t.jsxs)("div", {
                                    className: "col-lg-8",
                                    children: [(0, t.jsx)("div", {
                                        className: "page-nav-menu -line",
                                        children: (0, t.jsx)("div", {
                                            className: "d-flex x-gap-30",
                                            children: h.map((e, s) => (0, t.jsx)("div", {
                                                children: (0, t.jsx)("a", {
                                                    href: e.href,
                                                    className: "pb-12 page-nav-menu__link ".concat(e.isActive ? "is-active" : ""),
                                                    children: e.text
                                                })
                                            }, s))
                                        })
                                    }), (0, t.jsx)(n.Z, {}), (0, t.jsx)(r.Z, {}), (0, t.jsx)(x.Z, {}), (0, t.jsx)(m.Z, {})]
                                })
                            })
                        })
                    })]
                })
            }
        },
        76759: function(e, s, i) {
            "use strict";
            i.d(s, {
                Z: function() {
                    return r
                }
            });
            var t = i(9268),
                l = i(86006),
                a = i(71840),
                d = i(47329),
                c = i(76394),
                n = i.n(c);

            function r(e) {
                let {
                    pageItem: s
                } = e, {
                    isAddedToCartCourses: i,
                    addCourseToCart: c
                } = (0, a.o)(), [r, x] = (0, l.useState)(!1), [m, h] = (0, l.useState)(window.innerWidth);
                return (0, l.useEffect)(() => {
                    let e = () => {
                        h(window.innerWidth)
                    };
                    return window.addEventListener("resize", e), () => {
                        window.removeEventListener("resize", e)
                    }
                }, []), (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)("div", {
                        id: "js-pin-content",
                        style: m < 991 ? {
                            height: "fit-content",
                            right: "0%"
                        } : {
                            height: "100%",
                            right: "7%",
                            paddingTop: "80px"
                        },
                        className: "courses-single-info js-pin-content",
                        children: (0, t.jsxs)("div", {
                            style: {
                                position: "sticky",
                                top: "100px"
                            },
                            className: "bg-white shadow-2 rounded-8 border-light py-10 px-10",
                            children: [(0, t.jsxs)("div", {
                                className: "relative",
                                children: [(0, t.jsx)(n(), {
                                    width: 368,
                                    height: 238,
                                    className: "w-1/1",
                                    src: s.imageSrc,
                                    alt: "image"
                                }), (0, t.jsx)("div", {
                                    className: "absolute-full-center d-flex justify-center items-center",
                                    children: (0, t.jsx)("div", {
                                        onClick: () => x(!0),
                                        className: "d-flex justify-center items-center size-60 rounded-full bg-white js-gallery cursor",
                                        "data-gallery": "gallery1",
                                        children: (0, t.jsx)("div", {
                                            className: "icon-play text-18"
                                        })
                                    })
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "courses-single-info__content scroll-bar-1 pt-30 pb-20 px-20",
                                children: [(0, t.jsx)("div", {
                                    className: "d-flex justify-between items-center mb-30",
                                    children: s.paid ? (0, t.jsxs)(t.Fragment, {
                                        children: [(0, t.jsxs)("div", {
                                            className: "text-24 lh-1 text-dark-1 fw-500",
                                            children: ["$", s.discountedPrice]
                                        }), (0, t.jsxs)("div", {
                                            className: "lh-1 line-through",
                                            children: ["$", s.originalPrice]
                                        })]
                                    }) : (0, t.jsxs)(t.Fragment, {
                                        children: [(0, t.jsx)("div", {
                                            className: "text-24 lh-1 text-dark-1 fw-500",
                                            children: "Free"
                                        }), (0, t.jsx)("div", {})]
                                    })
                                }), (0, t.jsx)("button", {
                                    className: "button -md -purple-1 text-white w-1/1",
                                    onClick: () => c(s.id),
                                    children: i(s.id) ? "Already Added" : "Add To Cart"
                                }), (0, t.jsx)("button", {
                                    className: "button -md -outline-dark-1 text-dark-1 w-1/1 mt-10",
                                    children: "Buy Now"
                                }), (0, t.jsx)("div", {
                                    className: "text-14 lh-1 text-center mt-30",
                                    children: "30-Day Money-Back Guarantee"
                                }), (0, t.jsxs)("div", {
                                    className: "mt-25",
                                    children: [(0, t.jsxs)("div", {
                                        className: "d-flex justify-between py-8 ",
                                        children: [(0, t.jsxs)("div", {
                                            className: "d-flex items-center text-dark-1",
                                            children: [(0, t.jsx)("div", {
                                                className: "icon-video-file"
                                            }), (0, t.jsx)("div", {
                                                className: "ml-10",
                                                children: "Lessons"
                                            })]
                                        }), (0, t.jsx)("div", {
                                            children: "20"
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "d-flex justify-between py-8 border-top-light",
                                        children: [(0, t.jsxs)("div", {
                                            className: "d-flex items-center text-dark-1",
                                            children: [(0, t.jsx)("div", {
                                                className: "icon-puzzle"
                                            }), (0, t.jsx)("div", {
                                                className: "ml-10",
                                                children: "Quizzes"
                                            })]
                                        }), (0, t.jsx)("div", {
                                            children: "3"
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "d-flex justify-between py-8 border-top-light",
                                        children: [(0, t.jsxs)("div", {
                                            className: "d-flex items-center text-dark-1",
                                            children: [(0, t.jsx)("div", {
                                                className: "icon-clock-2"
                                            }), (0, t.jsx)("div", {
                                                className: "ml-10",
                                                children: "Duration"
                                            })]
                                        }), (0, t.jsx)("div", {
                                            children: "13 Hours"
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "d-flex justify-between py-8 border-top-light",
                                        children: [(0, t.jsxs)("div", {
                                            className: "d-flex items-center text-dark-1",
                                            children: [(0, t.jsx)("div", {
                                                className: "icon-bar-chart-2"
                                            }), (0, t.jsx)("div", {
                                                className: "ml-10",
                                                children: "Skill level"
                                            })]
                                        }), (0, t.jsx)("div", {
                                            children: "Beginner"
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "d-flex justify-between py-8 border-top-light",
                                        children: [(0, t.jsxs)("div", {
                                            className: "d-flex items-center text-dark-1",
                                            children: [(0, t.jsx)("div", {
                                                className: "icon-translate"
                                            }), (0, t.jsx)("div", {
                                                className: "ml-10",
                                                children: "Language"
                                            })]
                                        }), (0, t.jsx)("div", {
                                            children: "English"
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "d-flex justify-between py-8 border-top-light",
                                        children: [(0, t.jsxs)("div", {
                                            className: "d-flex items-center text-dark-1",
                                            children: [(0, t.jsx)("div", {
                                                className: "icon-badge"
                                            }), (0, t.jsx)("div", {
                                                className: "ml-10",
                                                children: "Certificate"
                                            })]
                                        }), (0, t.jsx)("div", {
                                            children: "Yes"
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "d-flex justify-between py-8 border-top-light",
                                        children: [(0, t.jsxs)("div", {
                                            className: "d-flex items-center text-dark-1",
                                            children: [(0, t.jsx)("div", {
                                                className: "icon-infinity"
                                            }), (0, t.jsx)("div", {
                                                className: "ml-10",
                                                children: "Full lifetime access"
                                            })]
                                        }), (0, t.jsx)("div", {
                                            children: "Yes"
                                        })]
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "d-flex justify-center pt-15",
                                    children: [(0, t.jsx)("a", {
                                        href: "#",
                                        className: "d-flex justify-center items-center size-40 rounded-full",
                                        children: (0, t.jsx)("i", {
                                            className: "fa fa-facebook"
                                        })
                                    }), (0, t.jsx)("a", {
                                        href: "#",
                                        className: "d-flex justify-center items-center size-40 rounded-full",
                                        children: (0, t.jsx)("i", {
                                            className: "fa fa-twitter"
                                        })
                                    }), (0, t.jsx)("a", {
                                        href: "#",
                                        className: "d-flex justify-center items-center size-40 rounded-full",
                                        children: (0, t.jsx)("i", {
                                            className: "fa fa-instagram"
                                        })
                                    }), (0, t.jsx)("a", {
                                        href: "#",
                                        className: "d-flex justify-center items-center size-40 rounded-full",
                                        children: (0, t.jsx)("i", {
                                            className: "fa fa-linkedin"
                                        })
                                    })]
                                })]
                            })]
                        })
                    }), (0, t.jsx)(d.Z, {
                        videoId: "LlCwHnp3kL4",
                        isOpen: r,
                        setIsOpen: x
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [8957, 8201, 1410, 6721, 3277, 1840, 5127, 4240, 4119, 7102, 8853, 5429, 9253, 6488, 1744], function() {
            return e(e.s = 81285)
        }), _N_E = e.O()
    }
]);