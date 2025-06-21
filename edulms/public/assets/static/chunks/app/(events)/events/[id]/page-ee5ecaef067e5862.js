(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6584], {
        44916: function(e, s, t) {
            Promise.resolve().then(t.t.bind(t, 8920, 23)), Promise.resolve().then(t.bind(t, 1311)), Promise.resolve().then(t.bind(t, 14747)), Promise.resolve().then(t.bind(t, 55980)), Promise.resolve().then(t.bind(t, 23417))
        },
        40600: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return a
                }
            });
            var i = t(9268),
                l = t(86006);

            function a(e) {
                let {
                    star: s,
                    textSize: t,
                    textColor: a
                } = e, [c, n] = (0, l.useState)([]);
                return (0, l.useEffect)(() => {
                    for (let e = Math.round(s); e >= 1; e--) n(e => [...e, "star"])
                }, []), (0, i.jsx)(i.Fragment, {
                    children: c.map((e, s) => (0, i.jsx)("div", {
                        className: "icon-star ".concat(t || "text-9", " ").concat(a || "text-yellow-1", " ")
                    }, s))
                })
            }
        },
        23417: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return h
                }
            });
            var i = t(9268),
                l = t(76394),
                a = t.n(l);
            t(86006);
            var c = t(29707),
                n = t(86484),
                r = t(50309),
                d = t(40600),
                m = t(35846),
                o = t.n(m),
                x = t(71840);

            function h(e) {
                let {
                    id: s
                } = e, {
                    addEventToCart: t,
                    isAddedToCartEvents: l
                } = (0, x.o)(), m = c.U3.filter(e => e.id == s)[0] || c.U3[0];
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)("section", {
                        className: "page-header -type-2",
                        children: [(0, i.jsx)("div", {
                            className: "page-header__bg",
                            children: (0, i.jsx)("div", {
                                className: "bg-image js-lazy",
                                style: {
                                    backgroundImage: "url(".concat(m.imgSrc, ")")
                                },
                                "data-bg": ""
                            })
                        }), (0, i.jsx)("div", {
                            className: "container",
                            children: (0, i.jsx)("div", {
                                className: "page-header__content",
                                children: (0, i.jsx)("div", {
                                    className: "row",
                                    children: (0, i.jsxs)("div", {
                                        className: "col-xl-5 col-lg-6",
                                        children: [(0, i.jsxs)("div", {
                                            className: "page-header__info d-flex items-center",
                                            children: [(0, i.jsxs)("div", {
                                                className: "d-flex items-center text-white mr-15",
                                                children: [(0, i.jsx)("div", {
                                                    className: "icon icon-calendar-2"
                                                }), (0, i.jsx)("div", {
                                                    className: "text-14 ml-8",
                                                    children: m.date
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "d-flex items-center text-white mr-15",
                                                children: [(0, i.jsx)("div", {
                                                    className: "icon icon-location"
                                                }), (0, i.jsx)("div", {
                                                    className: "text-14 ml-8",
                                                    children: m.location
                                                })]
                                            })]
                                        }), (0, i.jsx)("div", {
                                            children: (0, i.jsx)("h1", {
                                                className: "page-header__title text-white mt-20",
                                                children: m.desc
                                            })
                                        }), (0, i.jsx)("div", {
                                            children: (0, i.jsxs)("div", {
                                                className: "d-flex x-gap-50 pt-12",
                                                children: [(0, i.jsxs)("div", {
                                                    className: "text-white",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "text-40 lh-12 fw-700",
                                                        children: "20"
                                                    }), (0, i.jsx)("div", {
                                                        className: "text-15",
                                                        children: "Days"
                                                    })]
                                                }), (0, i.jsxs)("div", {
                                                    className: "text-white",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "text-40 lh-12 fw-700",
                                                        children: "32"
                                                    }), (0, i.jsx)("div", {
                                                        className: "text-15",
                                                        children: "Hours"
                                                    })]
                                                }), (0, i.jsxs)("div", {
                                                    className: "text-white",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "text-40 lh-12 fw-700",
                                                        children: "57"
                                                    }), (0, i.jsx)("div", {
                                                        className: "text-15",
                                                        children: "Minutes"
                                                    })]
                                                }), (0, i.jsxs)("div", {
                                                    className: "text-white",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "text-40 lh-12 fw-700",
                                                        children: "13"
                                                    }), (0, i.jsx)("div", {
                                                        className: "text-15",
                                                        children: "Seconds"
                                                    })]
                                                })]
                                            })
                                        })]
                                    })
                                })
                            })
                        })]
                    }), (0, i.jsx)("section", {
                        className: "pt-50 layout-pb-lg",
                        children: (0, i.jsx)("div", {
                            className: "container",
                            children: (0, i.jsxs)("div", {
                                className: "row y-gap-50",
                                children: [(0, i.jsxs)("div", {
                                    className: "col-xl-8 col-lg-8 lg:order-2",
                                    children: [(0, i.jsx)("h4", {
                                        className: "text-20",
                                        children: "About The Event"
                                    }), (0, i.jsxs)("p", {
                                        className: "text-light-1 mt-30",
                                        children: ["Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.", (0, i.jsx)("br", {}), (0, i.jsx)("br", {}), "This course is aimed at people interested in UI/UX Design. We’ll start from the very beginning and work all the way through, step by step. If you already have some UI/UX Design experience but want to get up to speed using Adobe XD then this course is perfect for you too!", (0, i.jsx)("br", {}), (0, i.jsx)("br", {}), "First, we will go over the differences between UX and UI Design. We will look at what our brief for this real-world project is, then we will learn about low-fidelity wireframes and how to make use of existing UI design kits."]
                                    }), (0, i.jsx)("button", {
                                        className: "button underline text-purple-1 mt-30",
                                        children: "Show More"
                                    }), (0, i.jsxs)("div", {
                                        className: "mt-60",
                                        children: [(0, i.jsx)("h4", {
                                            className: "text-20 mb-30",
                                            children: "What you'll learn"
                                        }), (0, i.jsxs)("div", {
                                            className: "row x-gap-100 justfiy-between",
                                            children: [(0, i.jsx)("div", {
                                                className: "col-md-6",
                                                children: (0, i.jsx)("div", {
                                                    className: "y-gap-20",
                                                    children: c.XS.slice(0, 6).map((e, s) => (0, i.jsxs)("div", {
                                                        className: "d-flex items-center",
                                                        children: [(0, i.jsx)("div", {
                                                            className: "d-flex justify-center items-center border-light rounded-full size-20 mr-10",
                                                            children: (0, i.jsx)("i", {
                                                                className: "icon-check text-6"
                                                            })
                                                        }), (0, i.jsx)("p", {
                                                            children: e
                                                        })]
                                                    }, s))
                                                })
                                            }), (0, i.jsx)("div", {
                                                className: "col-md-6",
                                                children: (0, i.jsx)("div", {
                                                    className: "y-gap-20",
                                                    children: c.XS.slice(6, -1).map((e, s) => (0, i.jsxs)("div", {
                                                        className: "d-flex items-center",
                                                        children: [(0, i.jsx)("div", {
                                                            className: "d-flex justify-center items-center border-light rounded-full size-20 mr-10",
                                                            children: (0, i.jsx)("i", {
                                                                className: "icon-check text-6"
                                                            })
                                                        }), (0, i.jsx)("p", {
                                                            children: e
                                                        })]
                                                    }, s))
                                                })
                                            })]
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "mt-60",
                                        children: [(0, i.jsx)("h4", {
                                            className: "text-20",
                                            children: "Event Content"
                                        }), (0, i.jsx)("ul", {
                                            className: "ul-list y-gap-15 pt-30",
                                            children: c.zq.map((e, s) => (0, i.jsx)("li", {
                                                children: e
                                            }, s))
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "mt-60",
                                        children: [(0, i.jsx)("h4", {
                                            className: "text-20 mb-30",
                                            children: "Our Speakers"
                                        }), (0, i.jsx)("div", {
                                            className: "row y-gap-30",
                                            children: r.xz.slice(0, 4).map((e, s) => (0, i.jsx)("div", {
                                                className: "col-lg-3 col-md-6",
                                                children: (0, i.jsxs)("div", {
                                                    className: "text-center",
                                                    children: [(0, i.jsx)(a(), {
                                                        width: 180,
                                                        height: 180,
                                                        src: e.image,
                                                        alt: "image"
                                                    }), (0, i.jsx)("h5", {
                                                        className: "text-17 fw-500 mt-20",
                                                        children: (0, i.jsx)(o(), {
                                                            className: "linkCustom",
                                                            href: "/instructors/".concat(e.id),
                                                            children: e.name
                                                        })
                                                    }), (0, i.jsx)("p", {
                                                        className: "",
                                                        children: e.role
                                                    })]
                                                })
                                            }))
                                        })]
                                    }), (0, i.jsx)("div", {
                                        className: "blogPost -comments mt-60",
                                        children: (0, i.jsxs)("div", {
                                            className: "blogPost__content",
                                            children: [(0, i.jsx)("h2", {
                                                className: "text-20 fw-500",
                                                children: "Reviews"
                                            }), (0, i.jsxs)("ul", {
                                                className: "comments__list mt-30",
                                                children: [(0, i.jsx)("li", {
                                                    className: "comments__item",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "comments__item-inner md:direction-column",
                                                        children: [(0, i.jsx)("div", {
                                                            className: "comments__img mr-20",
                                                            children: (0, i.jsx)("div", {
                                                                className: "bg-image rounded-full js-lazy",
                                                                style: {
                                                                    backgroundImage: "url(/assets/img/avatars/1.png)"
                                                                },
                                                                "data-bg": "/assets/img/avatars/1.png"
                                                            })
                                                        }), (0, i.jsxs)("div", {
                                                            className: "comments__body md:mt-15",
                                                            children: [(0, i.jsxs)("div", {
                                                                className: "comments__header",
                                                                children: [(0, i.jsxs)("h4", {
                                                                    className: "text-17 fw-500 lh-15",
                                                                    children: ["Ali Tufan", (0, i.jsx)("span", {
                                                                        className: "text-13 text-light-1 fw-400",
                                                                        children: "3 Days ago"
                                                                    })]
                                                                }), (0, i.jsx)("div", {
                                                                    className: "stars"
                                                                })]
                                                            }), (0, i.jsx)("h5", {
                                                                className: "text-15 fw-500 mt-15",
                                                                children: "The best LMS Design"
                                                            }), (0, i.jsx)("div", {
                                                                className: "comments__text mt-10",
                                                                children: (0, i.jsx)("p", {
                                                                    children: "This course is a very applicable. Professor Ng explains precisely each algorithm and even tries to give an intuition for mathematical and statistic concepts behind each algorithm. Thank you very much."
                                                                })
                                                            }), (0, i.jsxs)("div", {
                                                                className: "comments__helpful mt-20",
                                                                children: [(0, i.jsx)("span", {
                                                                    className: "text-13 text-purple-1",
                                                                    children: "Was this review helpful?"
                                                                }), (0, i.jsx)("button", {
                                                                    className: "button text-13 -sm -purple-1 text-white",
                                                                    children: "Yes"
                                                                }), (0, i.jsx)("button", {
                                                                    className: "button text-13 -sm -light-7 text-purple-1",
                                                                    children: "No"
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                }), (0, i.jsx)("li", {
                                                    className: "comments__item",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "comments__item-inner md:direction-column",
                                                        children: [(0, i.jsx)("div", {
                                                            className: "comments__img mr-20",
                                                            children: (0, i.jsx)("div", {
                                                                className: "bg-image rounded-full js-lazy",
                                                                style: {
                                                                    backgroundImage: "url(/assets/img/avatars/1.png)"
                                                                },
                                                                "data-bg": "/assets/img/avatars/1.png"
                                                            })
                                                        }), (0, i.jsxs)("div", {
                                                            className: "comments__body md:mt-15",
                                                            children: [(0, i.jsxs)("div", {
                                                                className: "comments__header",
                                                                children: [(0, i.jsxs)("h4", {
                                                                    className: "text-17 fw-500 lh-15",
                                                                    children: ["Ali Tufan", (0, i.jsx)("span", {
                                                                        className: "text-13 text-light-1 fw-400",
                                                                        children: "3 Days ago"
                                                                    })]
                                                                }), (0, i.jsx)("div", {
                                                                    className: "stars"
                                                                })]
                                                            }), (0, i.jsx)("h5", {
                                                                className: "text-15 fw-500 mt-15",
                                                                children: "The best LMS Design"
                                                            }), (0, i.jsx)("div", {
                                                                className: "comments__text mt-10",
                                                                children: (0, i.jsx)("p", {
                                                                    children: "This course is a very applicable. Professor Ng explains precisely each algorithm and even tries to give an intuition for mathematical and statistic concepts behind each algorithm. Thank you very much."
                                                                })
                                                            }), (0, i.jsxs)("div", {
                                                                className: "comments__helpful mt-20",
                                                                children: [(0, i.jsx)("span", {
                                                                    className: "text-13 text-purple-1",
                                                                    children: "Was this review helpful?"
                                                                }), (0, i.jsx)("button", {
                                                                    className: "button text-13 -sm -purple-1 text-white",
                                                                    children: "Yes"
                                                                }), (0, i.jsx)("button", {
                                                                    className: "button text-13 -sm -light-7 text-purple-1",
                                                                    children: "No"
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                })]
                                            })]
                                        })
                                    }), (0, i.jsxs)("div", {
                                        className: "respondForm mt-60",
                                        children: [(0, i.jsx)("h3", {
                                            className: "text-20 fw-500",
                                            children: "Write a Review"
                                        }), (0, i.jsxs)("div", {
                                            className: "mt-30",
                                            children: [(0, i.jsx)("h4", {
                                                className: "text-16 fw-500",
                                                children: "What is it like to Course?"
                                            }), (0, i.jsx)("div", {
                                                className: "d-flex x-gap-10 pt-10",
                                                children: (0, i.jsx)(d.default, {
                                                    textSize: "text-14",
                                                    star: 5
                                                })
                                            })]
                                        }), (0, i.jsxs)("form", {
                                            className: "contact-form respondForm__form row y-gap-30 pt-30",
                                            onSubmit: e => {
                                                e.preventDefault()
                                            },
                                            children: [(0, i.jsxs)("div", {
                                                className: "col-12",
                                                children: [(0, i.jsx)("label", {
                                                    className: "text-16 lh-1 fw-500 text-dark-1 mb-10",
                                                    children: "Review Title"
                                                }), (0, i.jsx)("input", {
                                                    required: !0,
                                                    type: "text",
                                                    name: "title",
                                                    placeholder: "Great Courses"
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "col-12",
                                                children: [(0, i.jsx)("label", {
                                                    className: "text-16 lh-1 fw-500 text-dark-1 mb-10",
                                                    children: "Review Content"
                                                }), (0, i.jsx)("textarea", {
                                                    required: !0,
                                                    name: "comment",
                                                    placeholder: "Message",
                                                    rows: "8"
                                                })]
                                            }), (0, i.jsx)(o(), {
                                                href: "/login",
                                                className: "col-12",
                                                children: (0, i.jsx)("button", {
                                                    type: "submit",
                                                    name: "submit",
                                                    id: "submit",
                                                    className: "button -md -purple-1 text-white",
                                                    children: "Submit Review"
                                                })
                                            })]
                                        })]
                                    })]
                                }), (0, i.jsx)("div", {
                                    className: "col-xl-4 col-lg-4 lg:order-1",
                                    children: (0, i.jsxs)("div", {
                                        className: "event-info bg-white rounded-8 px-30 py-30 border-light shadow-1",
                                        children: [(0, i.jsxs)("div", {
                                            className: "d-flex justify-between items-center",
                                            children: [(0, i.jsx)("div", {
                                                className: "text-24 lh-1 fw-500 text-dark-1",
                                                children: "$96.00"
                                            }), (0, i.jsxs)("div", {
                                                className: "d-flex items-center",
                                                children: [(0, i.jsx)("div", {
                                                    className: "text-light-1 line-through mr-10",
                                                    children: "$76.00"
                                                }), (0, i.jsx)("div", {
                                                    className: "text-14 fw-500 text-dark-1 px-15 py-5 bg-green-1 rounded-4",
                                                    children: "91% off"
                                                })]
                                            })]
                                        }), (0, i.jsxs)("div", {
                                            className: "d-flex justify-between mt-30 pb-10",
                                            children: [(0, i.jsxs)("div", {
                                                className: "d-flex items-center text-dark-1",
                                                children: [(0, i.jsx)("div", {
                                                    className: "icon-location"
                                                }), (0, i.jsx)("div", {
                                                    className: "ml-10",
                                                    children: "Total Slot"
                                                })]
                                            }), (0, i.jsx)("div", {
                                                children: "587"
                                            })]
                                        }), (0, i.jsxs)("div", {
                                            className: "d-flex justify-between pt-10 border-top-light",
                                            children: [(0, i.jsxs)("div", {
                                                className: "d-flex items-center text-dark-1",
                                                children: [(0, i.jsx)("div", {
                                                    className: "icon-location"
                                                }), (0, i.jsx)("div", {
                                                    className: "ml-10",
                                                    children: "Booked Slot"
                                                })]
                                            }), (0, i.jsx)("div", {
                                                children: "987"
                                            })]
                                        }), (0, i.jsx)("div", {
                                            onClick: () => t(m.id),
                                            className: "button -md col-12 -purple-1 text-white mt-30 cursor",
                                            children: l(m.id) ? "Booked" : "Book Now"
                                        }), (0, i.jsx)("div", {
                                            className: "d-flex justify-center pt-25",
                                            children: (0, i.jsx)(n.Z, {
                                                componentsClass: "d-flex justify-center items-center size-50 rounded-full"
                                            })
                                        })]
                                    })
                                })]
                            })
                        })
                    })]
                })
            }
        },
        56008: function(e, s, t) {
            e.exports = t(93027)
        }
    },
    function(e) {
        e.O(0, [8201, 1840, 5127, 4240, 4119, 7102, 309, 9253, 6488, 1744], function() {
            return e(e.s = 44916)
        }), _N_E = e.O()
    }
]);