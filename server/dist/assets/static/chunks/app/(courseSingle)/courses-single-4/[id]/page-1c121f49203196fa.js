(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5020], {
        93043: function(e, s, i) {
            Promise.resolve().then(i.t.bind(i, 8920, 23)), Promise.resolve().then(i.bind(i, 1311)), Promise.resolve().then(i.bind(i, 14747)), Promise.resolve().then(i.bind(i, 55980)), Promise.resolve().then(i.bind(i, 6286)), Promise.resolve().then(i.bind(i, 2340))
        },
        2340: function(e, s, i) {
            "use strict";
            i.r(s), i.d(s, {
                default: function() {
                    return N
                }
            });
            var l = i(9268),
                t = i(40600),
                a = i(68148),
                d = i(86006),
                c = i(81383),
                n = i(29518),
                r = i(55124),
                x = i(99306),
                m = i(47329),
                h = i(71840),
                j = i(76394),
                o = i.n(j);

            function v(e) {
                let {
                    pageItem: s
                } = e, {
                    isAddedToCartCourses: i,
                    addCourseToCart: t
                } = (0, h.o)(), [a, c] = (0, d.useState)(!1);
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        id: "js-pin-content",
                        className: "courses-single-info js-pin-content",
                        children: (0, l.jsxs)("div", {
                            className: "bg-white shadow-2 rounded-8 border-light py-10 px-10",
                            children: [(0, l.jsxs)("div", {
                                className: "relative",
                                children: [(0, l.jsx)(o(), {
                                    width: 368,
                                    height: 238,
                                    className: "w-1/1",
                                    src: s.imageSrc,
                                    alt: "image"
                                }), (0, l.jsx)("div", {
                                    className: "absolute-full-center d-flex justify-center items-center",
                                    children: (0, l.jsx)("div", {
                                        onClick: () => c(!0),
                                        className: "d-flex justify-center items-center size-60 rounded-full bg-white js-gallery cursor",
                                        "data-gallery": "gallery1",
                                        children: (0, l.jsx)("div", {
                                            className: "icon-play text-18"
                                        })
                                    })
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "courses-single-info__content scroll-bar-1 pt-30 pb-20 px-20",
                                children: [(0, l.jsx)("div", {
                                    className: "d-flex justify-between items-center mb-30",
                                    children: s.paid ? (0, l.jsxs)(l.Fragment, {
                                        children: [(0, l.jsxs)("div", {
                                            className: "text-24 lh-1 text-dark-1 fw-500",
                                            children: ["$", s.discountedPrice]
                                        }), (0, l.jsxs)("div", {
                                            className: "lh-1 line-through",
                                            children: ["$", s.originalPrice]
                                        })]
                                    }) : (0, l.jsxs)(l.Fragment, {
                                        children: [(0, l.jsx)("div", {
                                            className: "text-24 lh-1 text-dark-1 fw-500",
                                            children: "Free"
                                        }), (0, l.jsx)("div", {})]
                                    })
                                }), (0, l.jsx)("button", {
                                    className: "button -md -purple-1 text-white w-1/1",
                                    onClick: () => t(s.id),
                                    children: i(s.id) ? "Already Added" : "Add To Cart"
                                }), (0, l.jsx)("button", {
                                    className: "button -md -outline-dark-1 text-dark-1 w-1/1 mt-10",
                                    children: "Buy Now"
                                }), (0, l.jsx)("div", {
                                    className: "text-14 lh-1 text-center mt-30",
                                    children: "30-Day Money-Back Guarantee"
                                }), (0, l.jsxs)("div", {
                                    className: "mt-25",
                                    children: [(0, l.jsxs)("div", {
                                        className: "d-flex justify-between py-8 ",
                                        children: [(0, l.jsxs)("div", {
                                            className: "d-flex items-center text-dark-1",
                                            children: [(0, l.jsx)("div", {
                                                className: "icon-video-file"
                                            }), (0, l.jsx)("div", {
                                                className: "ml-10",
                                                children: "Lessons"
                                            })]
                                        }), (0, l.jsx)("div", {
                                            children: "20"
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "d-flex justify-between py-8 border-top-light",
                                        children: [(0, l.jsxs)("div", {
                                            className: "d-flex items-center text-dark-1",
                                            children: [(0, l.jsx)("div", {
                                                className: "icon-puzzle"
                                            }), (0, l.jsx)("div", {
                                                className: "ml-10",
                                                children: "Quizzes"
                                            })]
                                        }), (0, l.jsx)("div", {
                                            children: "3"
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "d-flex justify-between py-8 border-top-light",
                                        children: [(0, l.jsxs)("div", {
                                            className: "d-flex items-center text-dark-1",
                                            children: [(0, l.jsx)("div", {
                                                className: "icon-clock-2"
                                            }), (0, l.jsx)("div", {
                                                className: "ml-10",
                                                children: "Duration"
                                            })]
                                        }), (0, l.jsx)("div", {
                                            children: "13 Hours"
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "d-flex justify-between py-8 border-top-light",
                                        children: [(0, l.jsxs)("div", {
                                            className: "d-flex items-center text-dark-1",
                                            children: [(0, l.jsx)("div", {
                                                className: "icon-bar-chart-2"
                                            }), (0, l.jsx)("div", {
                                                className: "ml-10",
                                                children: "Skill level"
                                            })]
                                        }), (0, l.jsx)("div", {
                                            children: "Beginner"
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "d-flex justify-between py-8 border-top-light",
                                        children: [(0, l.jsxs)("div", {
                                            className: "d-flex items-center text-dark-1",
                                            children: [(0, l.jsx)("div", {
                                                className: "icon-translate"
                                            }), (0, l.jsx)("div", {
                                                className: "ml-10",
                                                children: "Language"
                                            })]
                                        }), (0, l.jsx)("div", {
                                            children: "English"
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "d-flex justify-between py-8 border-top-light",
                                        children: [(0, l.jsxs)("div", {
                                            className: "d-flex items-center text-dark-1",
                                            children: [(0, l.jsx)("div", {
                                                className: "icon-badge"
                                            }), (0, l.jsx)("div", {
                                                className: "ml-10",
                                                children: "Certificate"
                                            })]
                                        }), (0, l.jsx)("div", {
                                            children: "Yes"
                                        })]
                                    }), (0, l.jsxs)("div", {
                                        className: "d-flex justify-between py-8 border-top-light",
                                        children: [(0, l.jsxs)("div", {
                                            className: "d-flex items-center text-dark-1",
                                            children: [(0, l.jsx)("div", {
                                                className: "icon-infinity"
                                            }), (0, l.jsx)("div", {
                                                className: "ml-10",
                                                children: "Full lifetime access"
                                            })]
                                        }), (0, l.jsx)("div", {
                                            children: "Yes"
                                        })]
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "d-flex justify-center pt-15",
                                    children: [(0, l.jsx)("a", {
                                        href: "#",
                                        className: "d-flex justify-center items-center size-40 rounded-full",
                                        children: (0, l.jsx)("i", {
                                            className: "fa fa-facebook"
                                        })
                                    }), (0, l.jsx)("a", {
                                        href: "#",
                                        className: "d-flex justify-center items-center size-40 rounded-full",
                                        children: (0, l.jsx)("i", {
                                            className: "fa fa-twitter"
                                        })
                                    }), (0, l.jsx)("a", {
                                        href: "#",
                                        className: "d-flex justify-center items-center size-40 rounded-full",
                                        children: (0, l.jsx)("i", {
                                            className: "fa fa-instagram"
                                        })
                                    }), (0, l.jsx)("a", {
                                        href: "#",
                                        className: "d-flex justify-center items-center size-40 rounded-full",
                                        children: (0, l.jsx)("i", {
                                            className: "fa fa-linkedin"
                                        })
                                    })]
                                })]
                            })]
                        })
                    }), (0, l.jsx)(m.Z, {
                        videoId: "LlCwHnp3kL4",
                        isOpen: a,
                        setIsOpen: c
                    })]
                })
            }
            let f = [{
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

            function N(e) {
                let {
                    id: s
                } = e, [i, m] = (0, d.useState)(a.om[0]);
                return (0, d.useEffect)(() => {
                    m(a.om.filter(e => e.id == s)[0] || a.om[0])
                }, []), (0, l.jsxs)("div", {
                    id: "js-pin-container",
                    className: "js-pin-container",
                    children: [(0, l.jsxs)("section", {
                        className: "page-header -type-5 bg-light-6",
                        children: [(0, l.jsx)("div", {
                            className: "page-header__bg",
                            children: (0, l.jsx)("div", {
                                className: "bg-image js-lazy",
                                "data-bg": "img/event-single/bg.png"
                            })
                        }), (0, l.jsx)("div", {
                            className: "container",
                            children: (0, l.jsx)("div", {
                                className: "page-header__content pt-90 pb-90",
                                children: (0, l.jsxs)("div", {
                                    className: "row y-gap-30 relative",
                                    children: [(0, l.jsxs)("div", {
                                        className: "col-xl-7 col-lg-8",
                                        children: [(0, l.jsxs)("div", {
                                            className: "d-flex x-gap-15 y-gap-10 pb-20",
                                            children: [(0, l.jsx)("div", {
                                                children: (0, l.jsx)("div", {
                                                    className: "badge px-15 py-8 text-11 bg-green-1 text-dark-1 fw-400",
                                                    children: "BEST SELLER"
                                                })
                                            }), (0, l.jsx)("div", {
                                                children: (0, l.jsx)("div", {
                                                    className: "badge px-15 py-8 text-11 bg-orange-1 text-white fw-400",
                                                    children: "NEW"
                                                })
                                            }), (0, l.jsx)("div", {
                                                children: (0, l.jsx)("div", {
                                                    className: "badge px-15 py-8 text-11 bg-purple-1 text-white fw-400",
                                                    children: "POPULAR"
                                                })
                                            })]
                                        }), (0, l.jsx)("div", {
                                            children: (0, l.jsx)("h1", {
                                                className: "text-30 lh-14 pr-60 lg:pr-0",
                                                children: i.title
                                            })
                                        }), (0, l.jsx)("p", {
                                            className: "col-xl-9 mt-20",
                                            children: "Use XD to get a job in UI Design, User Interface, User Experience design, UX design & Web Design"
                                        }), (0, l.jsxs)("div", {
                                            className: "d-flex x-gap-30 y-gap-10 items-center flex-wrap pt-20",
                                            children: [(0, l.jsxs)("div", {
                                                className: "d-flex items-center",
                                                children: [(0, l.jsx)("div", {
                                                    className: "text-14 lh-1 text-yellow-1 mr-10",
                                                    children: i.rating
                                                }), (0, l.jsx)("div", {
                                                    className: "d-flex x-gap-5 items-center",
                                                    children: (0, l.jsx)(t.default, {
                                                        star: 5,
                                                        textSize: "text-11"
                                                    })
                                                }), (0, l.jsxs)("div", {
                                                    className: "text-14 lh-1 text-light-1 ml-10",
                                                    children: ["(", i.ratingCount, ")"]
                                                })]
                                            }), (0, l.jsxs)("div", {
                                                className: "d-flex items-center text-light-1",
                                                children: [(0, l.jsx)("div", {
                                                    className: "icon icon-person-3 text-13"
                                                }), (0, l.jsx)("div", {
                                                    className: "text-14 ml-8",
                                                    children: "853 enrolled on this course"
                                                })]
                                            }), (0, l.jsxs)("div", {
                                                className: "d-flex items-center text-light-1",
                                                children: [(0, l.jsx)("div", {
                                                    className: "icon icon-wall-clock text-13"
                                                }), (0, l.jsx)("div", {
                                                    className: "text-14 ml-8",
                                                    children: "Last updated 11/2021"
                                                })]
                                            })]
                                        }), (0, l.jsxs)("div", {
                                            className: "d-flex items-center pt-20",
                                            children: [(0, l.jsx)("div", {
                                                className: "bg-image size-30 rounded-full js-lazy",
                                                style: {
                                                    backgroundImage: "url(".concat(i.authorImageSrc, ")")
                                                }
                                            }), (0, l.jsx)("div", {
                                                className: "text-14 lh-1 ml-10",
                                                children: i.authorName
                                            })]
                                        })]
                                    }), (0, l.jsx)(v, {
                                        pageItem: i
                                    })]
                                })
                            })
                        })]
                    }), (0, l.jsx)("section", {
                        className: "layout-pt-md layout-pb-md",
                        children: (0, l.jsx)("div", {
                            className: "container",
                            children: (0, l.jsx)("div", {
                                className: "row",
                                children: (0, l.jsxs)("div", {
                                    className: "col-lg-8",
                                    children: [(0, l.jsx)("div", {
                                        className: "page-nav-menu -line",
                                        children: (0, l.jsx)("div", {
                                            className: "d-flex x-gap-30",
                                            children: f.map((e, s) => (0, l.jsx)("div", {
                                                children: (0, l.jsx)("a", {
                                                    href: e.href,
                                                    className: "pb-12 page-nav-menu__link ".concat(e.isActive ? "is-active" : ""),
                                                    children: e.text
                                                })
                                            }, s))
                                        })
                                    }), (0, l.jsx)(c.Z, {}), (0, l.jsx)(n.Z, {}), (0, l.jsx)(r.Z, {}), (0, l.jsx)(x.Z, {})]
                                })
                            })
                        })
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [8957, 8201, 1410, 6721, 3277, 1840, 5127, 4240, 4119, 7102, 8853, 5429, 9253, 6488, 1744], function() {
            return e(e.s = 93043)
        }), _N_E = e.O()
    }
]);