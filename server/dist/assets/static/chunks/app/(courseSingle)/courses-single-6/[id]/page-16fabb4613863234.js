(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6028], {
        58910: function(e, s, t) {
            Promise.resolve().then(t.t.bind(t, 8920, 23)), Promise.resolve().then(t.bind(t, 1311)), Promise.resolve().then(t.bind(t, 14747)), Promise.resolve().then(t.bind(t, 55980)), Promise.resolve().then(t.bind(t, 6286)), Promise.resolve().then(t.bind(t, 78770))
        },
        78770: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return N
                }
            });
            var i = t(9268),
                a = t(55124),
                l = t(99306),
                c = t(81383),
                d = t(29518),
                n = t(40600),
                r = t(68148),
                x = t(86006);
            t(13277);
            var m = t(47329),
                h = t(76394),
                j = t.n(h),
                o = t(71840);
            let v = [{
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
                } = e, [t, h] = (0, x.useState)(r.om[0]), [N, f] = (0, x.useState)(!1), [u, b] = (0, x.useState)(1), {
                    isAddedToCartCourses: g,
                    addCourseToCart: p
                } = (0, o.o)();
                return (0, x.useEffect)(() => {
                    h(r.om.filter(e => e.id == s)[0] || r.om[0])
                }, []), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)("section", {
                        className: "page-header -type-5 bg-dark-1",
                        children: [(0, i.jsx)("div", {
                            className: "page-header__bg",
                            children: (0, i.jsx)("div", {
                                className: "bg-image js-lazy",
                                "data-bg": "img/event-single/bg.png"
                            })
                        }), (0, i.jsx)("div", {
                            className: "container",
                            children: (0, i.jsx)("div", {
                                className: "page-header__content pt-80 pb-90",
                                children: (0, i.jsxs)("div", {
                                    className: "row y-gap-30 justify-between",
                                    children: [(0, i.jsxs)("div", {
                                        className: "col-xl-6 col-lg-6",
                                        children: [(0, i.jsxs)("div", {
                                            className: "d-flex x-gap-15 y-gap-10 pb-20",
                                            children: [(0, i.jsx)("div", {
                                                children: (0, i.jsx)("div", {
                                                    className: "badge px-15 py-8 text-11 bg-green-1 text-dark-1 fw-400",
                                                    children: "BEST SELLER"
                                                })
                                            }), (0, i.jsx)("div", {
                                                children: (0, i.jsx)("div", {
                                                    className: "badge px-15 py-8 text-11 bg-orange-1 text-white fw-400",
                                                    children: "NEW"
                                                })
                                            }), (0, i.jsx)("div", {
                                                children: (0, i.jsx)("div", {
                                                    className: "badge px-15 py-8 text-11 bg-purple-1 text-white fw-400",
                                                    children: "POPULAR"
                                                })
                                            })]
                                        }), (0, i.jsx)("div", {
                                            children: (0, i.jsx)("h1", {
                                                className: "text-30 lh-14 text-white pr-60 lg:pr-0",
                                                children: t.title
                                            })
                                        }), (0, i.jsx)("p", {
                                            className: "text-dark-3 mt-20",
                                            children: "Use XD to get a job in UI Design, User Interface, User Experience design, UX design & Web Design"
                                        }), (0, i.jsxs)("div", {
                                            className: "d-flex x-gap-30 y-gap-10 items-center flex-wrap pt-20",
                                            children: [(0, i.jsxs)("div", {
                                                className: "d-flex items-center text-dark-3",
                                                children: [(0, i.jsx)("div", {
                                                    className: "text-14 lh-1 text-yellow-1 mr-10",
                                                    children: t.rating
                                                }), (0, i.jsx)("div", {
                                                    className: "d-flex x-gap-5 items-center",
                                                    children: (0, i.jsx)(n.default, {
                                                        textSize: "text-11",
                                                        star: t.rating
                                                    })
                                                }), (0, i.jsxs)("div", {
                                                    className: "text-14 lh-1 ml-10",
                                                    children: ["(", t.ratingCount, ")"]
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "d-flex items-center text-dark-3",
                                                children: [(0, i.jsx)("div", {
                                                    className: "icon icon-person-3 text-13"
                                                }), (0, i.jsx)("div", {
                                                    className: "text-14 ml-8",
                                                    children: "853 enrolled on this course"
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "d-flex items-center text-dark-3",
                                                children: [(0, i.jsx)("div", {
                                                    className: "icon icon-wall-clock text-13"
                                                }), (0, i.jsx)("div", {
                                                    className: "text-14 ml-8",
                                                    children: "Last updated 11/2021"
                                                })]
                                            })]
                                        }), (0, i.jsxs)("div", {
                                            className: "d-flex items-center pt-20",
                                            children: [(0, i.jsx)("div", {
                                                className: "bg-image size-30 rounded-full js-lazy",
                                                style: {
                                                    backgroundImage: "url(".concat(t.authorImageSrc, ")")
                                                }
                                            }), (0, i.jsx)("div", {
                                                className: "text-14 lh-1 ml-10 text-dark-3",
                                                children: t.authorName
                                            })]
                                        }), (0, i.jsxs)("div", {
                                            className: "mt-30",
                                            children: [(0, i.jsxs)("div", {
                                                className: "d-flex justify-between py-8 border-bottom-light-2",
                                                children: [(0, i.jsxs)("div", {
                                                    className: "d-flex items-center text-white",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "icon-video-file"
                                                    }), (0, i.jsx)("div", {
                                                        className: "ml-10",
                                                        children: "Lessons"
                                                    })]
                                                }), (0, i.jsx)("div", {
                                                    className: "text-white",
                                                    children: "20"
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "d-flex justify-between py-8 border-bottom-light-2",
                                                children: [(0, i.jsxs)("div", {
                                                    className: "d-flex items-center text-white",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "icon-puzzle"
                                                    }), (0, i.jsx)("div", {
                                                        className: "ml-10",
                                                        children: "Quizzes"
                                                    })]
                                                }), (0, i.jsx)("div", {
                                                    className: "text-white",
                                                    children: "3"
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "d-flex justify-between py-8 border-bottom-light-2",
                                                children: [(0, i.jsxs)("div", {
                                                    className: "d-flex items-center text-white",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "icon-clock-2"
                                                    }), (0, i.jsx)("div", {
                                                        className: "ml-10",
                                                        children: "Duration"
                                                    })]
                                                }), (0, i.jsx)("div", {
                                                    className: "text-white",
                                                    children: "13 Hours"
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "d-flex justify-between py-8 border-bottom-light-2",
                                                children: [(0, i.jsxs)("div", {
                                                    className: "d-flex items-center text-white",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "icon-bar-chart-2"
                                                    }), (0, i.jsx)("div", {
                                                        className: "ml-10",
                                                        children: "Skill level"
                                                    })]
                                                }), (0, i.jsx)("div", {
                                                    className: "text-white",
                                                    children: "Beginner"
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "d-flex justify-between py-8 border-bottom-light-2",
                                                children: [(0, i.jsxs)("div", {
                                                    className: "d-flex items-center text-white",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "icon-translate"
                                                    }), (0, i.jsx)("div", {
                                                        className: "ml-10",
                                                        children: "Language"
                                                    })]
                                                }), (0, i.jsx)("div", {
                                                    className: "text-white",
                                                    children: "English"
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "d-flex justify-between py-8 border-bottom-light-2",
                                                children: [(0, i.jsxs)("div", {
                                                    className: "d-flex items-center text-white",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "icon-badge"
                                                    }), (0, i.jsx)("div", {
                                                        className: "ml-10",
                                                        children: "Certificate"
                                                    })]
                                                }), (0, i.jsx)("div", {
                                                    className: "text-white",
                                                    children: "Yes"
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "d-flex justify-between py-8 border-bottom-light-2",
                                                children: [(0, i.jsxs)("div", {
                                                    className: "d-flex items-center text-white",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "icon-infinity"
                                                    }), (0, i.jsx)("div", {
                                                        className: "ml-10",
                                                        children: "Full lifetime access"
                                                    })]
                                                }), (0, i.jsx)("div", {
                                                    className: "text-white",
                                                    children: "Yes"
                                                })]
                                            })]
                                        }), (0, i.jsxs)("div", {
                                            className: "d-flex mt-30",
                                            children: [(0, i.jsx)("a", {
                                                href: "#",
                                                className: "d-flex justify-center items-center size-40 rounded-full text-dark-3",
                                                children: (0, i.jsx)("i", {
                                                    className: "fa fa-facebook"
                                                })
                                            }), (0, i.jsx)("a", {
                                                href: "#",
                                                className: "d-flex justify-center items-center size-40 rounded-full text-dark-3",
                                                children: (0, i.jsx)("i", {
                                                    className: "fa fa-twitter"
                                                })
                                            }), (0, i.jsx)("a", {
                                                href: "#",
                                                className: "d-flex justify-center items-center size-40 rounded-full text-dark-3",
                                                children: (0, i.jsx)("i", {
                                                    className: "fa fa-instagram"
                                                })
                                            }), (0, i.jsx)("a", {
                                                href: "#",
                                                className: "d-flex justify-center items-center size-40 rounded-full text-dark-3",
                                                children: (0, i.jsx)("i", {
                                                    className: "fa fa-linkedin"
                                                })
                                            })]
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "col-xl-5 col-lg-6",
                                        children: [(0, i.jsxs)("div", {
                                            className: "relative",
                                            children: [(0, i.jsx)(j(), {
                                                width: 690,
                                                height: 342,
                                                className: "w-1/1",
                                                src: t.imageSrc,
                                                alt: "image"
                                            }), (0, i.jsx)("div", {
                                                className: "absolute-full-center d-flex justify-center items-center",
                                                children: (0, i.jsx)("div", {
                                                    onClick: () => f(!0),
                                                    className: "d-flex justify-center items-center size-60 rounded-full bg-white js-gallery cursor",
                                                    children: (0, i.jsx)("div", {
                                                        className: "icon-play text-18"
                                                    })
                                                })
                                            })]
                                        }), (0, i.jsxs)("div", {
                                            className: "mt-30",
                                            children: [(0, i.jsx)("div", {
                                                className: "d-flex justify-between items-center",
                                                children: t.paid ? (0, i.jsxs)(i.Fragment, {
                                                    children: [(0, i.jsxs)("div", {
                                                        className: "text-24 lh-1 text-white fw-500",
                                                        children: ["$", t.originalPrice]
                                                    }), (0, i.jsxs)("div", {
                                                        className: "lh-1 line-through text-dark-3",
                                                        children: ["$", t.discountedPrice]
                                                    })]
                                                }) : (0, i.jsxs)(i.Fragment, {
                                                    children: [(0, i.jsx)("div", {}), (0, i.jsx)("div", {
                                                        className: "lh-1 line-through text-dark-3",
                                                        children: "Free"
                                                    })]
                                                })
                                            }), (0, i.jsxs)("div", {
                                                className: "row x-gap-30 y-gap-20 pt-30",
                                                children: [(0, i.jsx)("div", {
                                                    className: "col-sm-6",
                                                    children: (0, i.jsx)("button", {
                                                        className: "button -md -purple-1 text-white w-1/1",
                                                        onClick: () => p(t.id),
                                                        children: g(t.id) ? "Already Added" : "Add To Cart"
                                                    })
                                                }), (0, i.jsx)("div", {
                                                    className: "col-sm-6",
                                                    children: (0, i.jsx)("button", {
                                                        className: "button -md -outline-green-1 text-green-1 w-1/1",
                                                        children: "Buy Now"
                                                    })
                                                })]
                                            }), (0, i.jsx)("div", {
                                                className: "text-14 lh-1 text-dark-3 mt-30",
                                                children: "30-Day Money-Back Guarantee"
                                            })]
                                        })]
                                    })]
                                })
                            })
                        })]
                    }), (0, i.jsx)("section", {
                        className: "layout-pt-lg layout-pb-md",
                        children: (0, i.jsx)("div", {
                            className: "container",
                            children: (0, i.jsx)("div", {
                                className: "tabs -side js-tabs",
                                children: (0, i.jsxs)("div", {
                                    className: "row y-gap-40",
                                    children: [(0, i.jsx)("div", {
                                        className: "col-lg-4",
                                        children: (0, i.jsx)("div", {
                                            className: "tabs__controls y-gap-5 js-tabs-controls",
                                            children: v.map((e, s) => (0, i.jsx)("div", {
                                                children: (0, i.jsx)("button", {
                                                    onClick: () => b(e.id),
                                                    className: "tabs__button text-18 fw-500 js-tabs-button ".concat(u == e.id ? "is-active" : "", " "),
                                                    type: "button",
                                                    children: e.text
                                                }, s)
                                            }, s))
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "col-lg-8",
                                        children: (0, i.jsxs)("div", {
                                            className: "tabs__content js-tabs-content",
                                            children: [(0, i.jsx)("div", {
                                                className: "tabs__pane -tab-item-1 ".concat(1 == u ? "is-active" : "", " "),
                                                children: (0, i.jsx)(c.Z, {})
                                            }), (0, i.jsx)("div", {
                                                className: "tabs__pane -tab-item-2 ".concat(2 == u ? "is-active" : "", " "),
                                                children: (0, i.jsx)(d.Z, {})
                                            }), (0, i.jsx)("div", {
                                                className: "tabs__pane -tab-item-3 ".concat(3 == u ? "is-active" : "", " "),
                                                children: (0, i.jsx)(a.Z, {})
                                            }), (0, i.jsx)("div", {
                                                className: "tabs__pane -tab-item-4 ".concat(4 == u ? "is-active" : "", " "),
                                                children: (0, i.jsx)(l.Z, {})
                                            })]
                                        })
                                    })]
                                })
                            })
                        })
                    }), (0, i.jsx)(m.Z, {
                        videoId: "LlCwHnp3kL4",
                        isOpen: N,
                        setIsOpen: f
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [8957, 8201, 1410, 6721, 3277, 1840, 5127, 4240, 4119, 7102, 8853, 5429, 9253, 6488, 1744], function() {
            return e(e.s = 58910)
        }), _N_E = e.O()
    }
]);