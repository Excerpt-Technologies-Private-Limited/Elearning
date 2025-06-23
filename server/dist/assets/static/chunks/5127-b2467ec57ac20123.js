"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5127], {
        1311: function(e, s, l) {
            l.r(s), l.d(s, {
                default: function() {
                    return a
                }
            });
            var t = l(9268),
                r = l(86006);

            function a() {
                let [e, s] = (0, r.useState)(!1);
                return (0, r.useEffect)(() => {
                    s(!0)
                }, []), (0, t.jsx)("div", {
                    className: "preloader js-preloader",
                    children: (0, t.jsx)("div", {
                        className: "preloader__bg",
                        style: e ? {
                            transform: "scale(1,0)"
                        } : {}
                    })
                })
            }
        },
        39179: function(e, s, l) {
            l.d(s, {
                Z: function() {
                    return m
                }
            });
            var t = l(9268),
                r = l(63513),
                a = l(56008),
                i = l(86006),
                n = l(71840),
                c = l(76394),
                o = l.n(c),
                h = l(35846),
                d = l.n(h),
                u = () => {
                    let {
                        cartProducts: e,
                        setCartProducts: s
                    } = (0, n.o)(), [l, r] = (0, i.useState)(0), a = l => {
                        let t = e[l];
                        s(e => [...e.filter(e => e !== t)])
                    };
                    return (0, i.useEffect)(() => {
                        let s = e.reduce((e, s) => e + s.price * s.quantity, 0);
                        r(s)
                    }, [e]), (0, t.jsxs)("div", {
                        className: "header-cart bg-white -dark-bg-dark-1 rounded-8",
                        children: [(0, t.jsxs)("div", {
                            className: "px-30 pt-30 pb-10",
                            style: {
                                maxHeight: "300px",
                                overflowY: "scroll"
                            },
                            children: [e.map((e, s) => (0, t.jsxs)("div", {
                                className: "row justify-between x-gap-40 pb-20",
                                children: [(0, t.jsx)(d(), {
                                    style: {
                                        textDecoration: "none"
                                    },
                                    href: "/shop/".concat(e.id),
                                    className: "col",
                                    children: (0, t.jsxs)("div", {
                                        className: "row x-gap-10 y-gap-10",
                                        children: [(0, t.jsx)("div", {
                                            className: "col-auto",
                                            children: (0, t.jsx)(o(), {
                                                width: 80,
                                                height: 80,
                                                src: e.image,
                                                alt: "image"
                                            })
                                        }), (0, t.jsxs)("div", {
                                            className: "col",
                                            children: [(0, t.jsx)("div", {
                                                className: "text-dark-1 lh-15",
                                                children: e.name
                                            }), (0, t.jsxs)("div", {
                                                className: "d-flex items-center mt-10",
                                                children: [(0, t.jsxs)("div", {
                                                    className: "lh-12 fw-500 line-through text-light-1 mr-10",
                                                    children: ["$", e.preDiscount]
                                                }), (0, t.jsxs)("div", {
                                                    className: "text-18 lh-12 fw-500 text-dark-1",
                                                    children: ["$", e.price]
                                                })]
                                            })]
                                        })]
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "col-auto",
                                    onClick: () => a(s),
                                    children: (0, t.jsx)("button", {
                                        children: (0, t.jsx)(o(), {
                                            width: 12,
                                            height: 12,
                                            src: "/assets/img/menus/close.svg",
                                            alt: "icon"
                                        })
                                    })
                                })]
                            }, s)), !e.length && (0, t.jsx)("div", {
                                className: "p-20 pb-30 text-18 text-dark-1",
                                children: "Your Shop Cart Is Empty"
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "px-30 pt-20 pb-30 border-top-light",
                            children: [(0, t.jsxs)("div", {
                                className: "d-flex justify-between",
                                children: [(0, t.jsx)("div", {
                                    className: "text-18 lh-12 text-dark-1 fw-500",
                                    children: "Total:"
                                }), (0, t.jsxs)("div", {
                                    className: "text-18 lh-12 text-dark-1 fw-500",
                                    children: ["$", l]
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "row x-gap-20 y-gap-10 pt-30",
                                children: [e.length && (0, t.jsxs)(t.Fragment, {
                                    children: [(0, t.jsx)(d(), {
                                        href: "/shop-cart",
                                        style: {
                                            textDecoration: "none"
                                        },
                                        className: "col-sm-6",
                                        children: (0, t.jsx)("button", {
                                            className: "button py-20 -dark-1 text-white -dark-button-white col-12",
                                            children: "View Cart"
                                        })
                                    }), (0, t.jsx)(d(), {
                                        href: "/shop-checkout",
                                        style: {
                                            textDecoration: "none"
                                        },
                                        className: "col-sm-6",
                                        children: (0, t.jsx)("button", {
                                            className: "button py-20 -purple-1 text-white col-12",
                                            children: "Checkout"
                                        })
                                    })]
                                }), !e.length && (0, t.jsx)(t.Fragment, {
                                    children: (0, t.jsx)(d(), {
                                        href: "/shop-list",
                                        style: {
                                            textDecoration: "none"
                                        },
                                        className: "col-12",
                                        children: (0, t.jsx)("button", {
                                            className: "button py-20 -purple-1 text-white col-12",
                                            children: "Continue Shoping"
                                        })
                                    })
                                })]
                            })]
                        })]
                    })
                },
                x = () => {
                    let {
                        cartCourses: e,
                        setCartCourses: s
                    } = (0, n.o)(), [l, r] = (0, i.useState)(0), a = l => {
                        let t = e[l];
                        s(e => [...e.filter(e => e !== t)])
                    };
                    return (0, i.useEffect)(() => {
                        let s = e.reduce((e, s) => e + s.discountedPrice * s.quantity, 0);
                        r(s)
                    }, [e]), (0, t.jsxs)("div", {
                        className: "header-cart bg-white -dark-bg-dark-1 rounded-8",
                        children: [(0, t.jsxs)("div", {
                            className: "px-30 pt-30 pb-10",
                            style: {
                                maxHeight: "300px",
                                overflowY: "scroll"
                            },
                            children: [e.map((e, s) => (0, t.jsxs)("div", {
                                className: "row justify-between x-gap-40 pb-20",
                                children: [(0, t.jsx)(d(), {
                                    style: {
                                        textDecoration: "none"
                                    },
                                    href: "/courses/".concat(e.id),
                                    className: "col",
                                    children: (0, t.jsxs)("div", {
                                        className: "row x-gap-10 y-gap-10",
                                        children: [(0, t.jsx)("div", {
                                            className: "col-auto",
                                            children: (0, t.jsx)(o(), {
                                                width: 80,
                                                height: 80,
                                                src: e.imageSrc,
                                                alt: "image"
                                            })
                                        }), (0, t.jsxs)("div", {
                                            className: "col",
                                            children: [(0, t.jsx)("div", {
                                                className: "text-dark-1 lh-15",
                                                children: e.title
                                            }), (0, t.jsx)("div", {
                                                className: "d-flex items-center mt-10",
                                                children: e.paid ? (0, t.jsxs)(t.Fragment, {
                                                    children: [(0, t.jsxs)("div", {
                                                        className: "lh-12 fw-500 line-through text-light-1 mr-10",
                                                        children: ["$", e.originalPrice]
                                                    }), (0, t.jsxs)("div", {
                                                        className: "text-18 lh-12 fw-500 text-dark-1",
                                                        children: ["$", e.discountedPrice]
                                                    })]
                                                }) : (0, t.jsxs)(t.Fragment, {
                                                    children: [(0, t.jsx)("div", {}), (0, t.jsx)("div", {
                                                        className: "text-18 lh-12 fw-500 text-dark-1",
                                                        children: "Free"
                                                    })]
                                                })
                                            })]
                                        })]
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "col-auto",
                                    onClick: () => a(s),
                                    children: (0, t.jsx)("button", {
                                        children: (0, t.jsx)(o(), {
                                            width: 12,
                                            height: 12,
                                            src: "/assets/img/menus/close.svg",
                                            alt: "icon"
                                        })
                                    })
                                })]
                            }, s)), !e.length && (0, t.jsx)("div", {
                                className: "p-20 pb-30 text-18 text-dark-1",
                                children: "Your Course Cart Is Empty"
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "px-30 pt-20 pb-30 border-top-light",
                            children: [(0, t.jsxs)("div", {
                                className: "d-flex justify-between",
                                children: [(0, t.jsx)("div", {
                                    className: "text-18 lh-12 text-dark-1 fw-500",
                                    children: "Total:"
                                }), (0, t.jsxs)("div", {
                                    className: "text-18 lh-12 text-dark-1 fw-500",
                                    children: ["$", l]
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "row x-gap-20 y-gap-10 pt-30",
                                children: [e.length && (0, t.jsxs)(t.Fragment, {
                                    children: [(0, t.jsx)(d(), {
                                        href: "/course-cart",
                                        style: {
                                            textDecoration: "none"
                                        },
                                        className: "col-sm-6",
                                        children: (0, t.jsx)("button", {
                                            className: "button py-20 -dark-1 text-white -dark-button-white col-12",
                                            children: "View Cart"
                                        })
                                    }), (0, t.jsx)(d(), {
                                        href: "/course-checkout",
                                        style: {
                                            textDecoration: "none"
                                        },
                                        className: "col-sm-6",
                                        children: (0, t.jsx)("button", {
                                            className: "button py-20 -purple-1 text-white col-12",
                                            children: "Checkout"
                                        })
                                    })]
                                }), !e.length && (0, t.jsx)(t.Fragment, {
                                    children: (0, t.jsx)(d(), {
                                        href: "/courses-list-1",
                                        style: {
                                            textDecoration: "none"
                                        },
                                        className: "col-12",
                                        children: (0, t.jsx)("button", {
                                            className: "button py-20 -purple-1 text-white col-12",
                                            children: "Continue Buying"
                                        })
                                    })
                                })]
                            })]
                        })]
                    })
                },
                b = () => {
                    let {
                        cartEvents: e,
                        setCartEvents: s
                    } = (0, n.o)(), [l, r] = (0, i.useState)(0), a = l => {
                        let t = e[l];
                        s(e => [...e.filter(e => e !== t)])
                    };
                    return (0, i.useEffect)(() => {
                        let s = e.reduce((e, s) => e + s.price * s.quantity, 0);
                        r(s)
                    }, [e]), (0, t.jsxs)("div", {
                        className: "header-cart bg-white -dark-bg-dark-1 rounded-8",
                        children: [(0, t.jsxs)("div", {
                            className: "px-30 pt-30 pb-10",
                            style: {
                                maxHeight: "300px",
                                overflowY: "scroll"
                            },
                            children: [e.map((e, s) => (0, t.jsxs)("div", {
                                className: "row justify-between x-gap-40 pb-20",
                                children: [(0, t.jsx)(d(), {
                                    style: {
                                        textDecoration: "none"
                                    },
                                    href: "/events/".concat(e.id),
                                    className: "col",
                                    children: (0, t.jsxs)("div", {
                                        className: "row x-gap-10 y-gap-10",
                                        children: [(0, t.jsx)("div", {
                                            className: "col-auto",
                                            children: (0, t.jsx)(o(), {
                                                width: 80,
                                                height: 80,
                                                src: e.imgSrc,
                                                alt: "image"
                                            })
                                        }), (0, t.jsxs)("div", {
                                            className: "col",
                                            children: [(0, t.jsx)("div", {
                                                className: "text-dark-1 lh-15",
                                                children: e.title
                                            }), (0, t.jsxs)("div", {
                                                className: "d-flex items-center mt-10",
                                                children: [(0, t.jsxs)("div", {
                                                    className: "lh-12 fw-500 line-through text-light-1 mr-10",
                                                    children: ["$", e.preDiscount]
                                                }), (0, t.jsxs)("div", {
                                                    className: "text-18 lh-12 fw-500 text-dark-1",
                                                    children: ["$", e.price]
                                                })]
                                            })]
                                        })]
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "col-auto",
                                    onClick: () => a(s),
                                    children: (0, t.jsx)("button", {
                                        children: (0, t.jsx)(o(), {
                                            width: 12,
                                            height: 12,
                                            src: "/assets/img/menus/close.svg",
                                            alt: "icon"
                                        })
                                    })
                                })]
                            }, s)), !e.length && (0, t.jsx)("div", {
                                className: "p-20 pb-30 text-18 text-dark-1",
                                children: "Your Event Cart Is Empty"
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "px-30 pt-20 pb-30 border-top-light",
                            children: [(0, t.jsxs)("div", {
                                className: "d-flex justify-between",
                                children: [(0, t.jsx)("div", {
                                    className: "text-18 lh-12 text-dark-1 fw-500",
                                    children: "Total:"
                                }), (0, t.jsxs)("div", {
                                    className: "text-18 lh-12 text-dark-1 fw-500",
                                    children: ["$", l]
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "row x-gap-20 y-gap-10 pt-30",
                                children: [e.length && (0, t.jsxs)(t.Fragment, {
                                    children: [(0, t.jsx)(d(), {
                                        href: "/event-cart",
                                        style: {
                                            textDecoration: "none"
                                        },
                                        className: "col-sm-6",
                                        children: (0, t.jsx)("button", {
                                            className: "button py-20 -dark-1 text-white -dark-button-white col-12",
                                            children: "View Cart"
                                        })
                                    }), (0, t.jsx)(d(), {
                                        href: "/event-checkout",
                                        style: {
                                            textDecoration: "none"
                                        },
                                        className: "col-sm-6",
                                        children: (0, t.jsx)("button", {
                                            className: "button py-20 -purple-1 text-white col-12",
                                            children: "Checkout"
                                        })
                                    })]
                                }), !e.length && (0, t.jsx)(t.Fragment, {
                                    children: (0, t.jsx)(d(), {
                                        href: "/event-list-1",
                                        style: {
                                            textDecoration: "none"
                                        },
                                        className: "col-12",
                                        children: (0, t.jsx)("button", {
                                            className: "button py-20 -purple-1 text-white col-12",
                                            children: "Continue Buying"
                                        })
                                    })
                                })]
                            })]
                        })]
                    })
                },
                m = e => {
                    let {
                        allClasses: s,
                        parentClassess: l
                    } = e, {
                        cartProducts: c,
                        cartCourses: o,
                        cartEvents: h
                    } = (0, n.o)(), [d, m] = (0, i.useState)(!1), [f, g] = (0, i.useState)(""), [p, v] = (0, i.useState)(""), j = (0, a.usePathname)();
                    return (0, i.useEffect)(() => {
                        r.s.forEach(e => {
                            var s;
                            null == e || null === (s = e.links) || void 0 === s || s.forEach(s => {
                                var l, t;
                                (null === (l = s.href) || void 0 === l ? void 0 : l.split("/")[1]) == (null == j ? void 0 : j.split("/")[1]) ? g(e.title): null == s || null === (t = s.links) || void 0 === t || t.map(l => {
                                    var t;
                                    (null === (t = l.href) || void 0 === t ? void 0 : t.split("/")[1]) == (null == j ? void 0 : j.split("/")[1]) && (g(e.title), v(s.title))
                                })
                            })
                        })
                    }, []), (0, t.jsx)(t.Fragment, {
                        children: (0, t.jsxs)("div", {
                            className: l || "",
                            children: [(0, t.jsxs)("button", {
                                style: {
                                    position: "relative"
                                },
                                onClick: () => m(e => !e),
                                className: "".concat(s || ""),
                                "data-el-toggle": ".js-cart-toggle",
                                children: [(0, t.jsx)("i", {
                                    className: "text-20 icon icon-basket"
                                }), (0, t.jsxs)("div", {
                                    className: "cartProductCount",
                                    children: ["Shop" == p && (0, t.jsxs)(t.Fragment, {
                                        children: [c.length > 9 ? "9+" : c.length, " "]
                                    }), "Events" == f && (0, t.jsxs)(t.Fragment, {
                                        children: [h.length > 9 ? "9+" : h.length, " "]
                                    }), !("Shop" == p || "Events" == f) && (0, t.jsxs)(t.Fragment, {
                                        children: [o.length > 9 ? "9+" : o.length, " "]
                                    })]
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "toggle-element js-cart-toggle ".concat(d ? "-is-el-visible" : ""),
                                children: ["Shop" == p && (0, t.jsx)(u, {}), "Events" == f && (0, t.jsx)(b, {}), !("Shop" == p || "Events" == f) && (0, t.jsx)(x, {})]
                            })]
                        })
                    })
                }
        },
        63513: function(e, s, l) {
            l.d(s, {
                s: function() {
                    return t
                }
            });
            let t = [{
                title: "Home",
                links: [{
                    href: "/",
                    label: "Home 1"
                }, {
                    href: "/home-2",
                    label: "Home 2"
                }, {
                    href: "/home-3",
                    label: "Home 3"
                }, {
                    href: "/home-4",
                    label: "Home 4"
                }, {
                    href: "/home-5",
                    label: "Home 5"
                }, {
                    href: "/home-6",
                    label: "Home 6"
                }, {
                    href: "/home-7",
                    label: "Home 7"
                }, {
                    href: "/home-8",
                    label: "Home 8"
                }, {
                    href: "/home-9",
                    label: "Home 9"
                }, {
                    href: "/home-10",
                    label: "Home 10"
                }]
            }, {
                title: "Courses",
                links: [{
                    title: "Course List Layouts",
                    links: [{
                        href: "/courses-list-1",
                        label: "Course List v1"
                    }, {
                        href: "/courses-list-2",
                        label: "Course List v2"
                    }, {
                        href: "/courses-list-3",
                        label: "Course List v3"
                    }, {
                        href: "/courses-list-4",
                        label: "Course List v4"
                    }, {
                        href: "/courses-list-5",
                        label: "Course List v5"
                    }, {
                        href: "/courses-list-6",
                        label: "Course List v6"
                    }, {
                        href: "/courses-list-7",
                        label: "Course List v7"
                    }, {
                        href: "/courses-list-8",
                        label: "Course List v8"
                    }]
                }, {
                    title: "Course Single Layouts",
                    links: [{
                        href: "/courses/3",
                        label: "Course Single v1"
                    }, {
                        href: "/courses-single-2/2",
                        label: "Course Single v2"
                    }, {
                        href: "/courses-single-3/3",
                        label: "Course Single v3"
                    }, {
                        href: "/courses-single-4/4",
                        label: "Course Single v4"
                    }, {
                        href: "/courses-single-5/4",
                        label: "Course Single v5"
                    }, {
                        href: "/courses-single-6/7",
                        label: "Course Single v6"
                    }, {
                        href: "/course-cart",
                        label: "Course Cart"
                    }, {
                        href: "/course-checkout",
                        label: "Course Checkout"
                    }]
                }, {
                    title: "About Courses",
                    links: [{
                        href: "/lesson-single-1",
                        label: "Lesson Page v1"
                    }, {
                        href: "/lesson-single-2",
                        label: "Lesson Page v2"
                    }, {
                        href: "/instructors-list-1",
                        label: "Instructors List v1"
                    }, {
                        href: "/instructors-list-2",
                        label: "Instructors List v2"
                    }, {
                        href: "/instructors/1",
                        label: "Instructors Single"
                    }, {
                        href: "/instructor-become",
                        label: "Become an Instructor"
                    }]
                }, {
                    title: "Dashboard Pages",
                    links: [{
                        href: "/dashboard",
                        label: "Dashboard"
                    }, {
                        href: "/dshb-courses",
                        label: "My Courses"
                    }, {
                        href: "/dshb-bookmarks",
                        label: "Bookmarks"
                    }, {
                        href: "/dshb-listing",
                        label: "Add Listing"
                    }, {
                        href: "/dshb-reviews",
                        label: "Reviews"
                    }, {
                        href: "/dshb-settings",
                        label: "Settings"
                    }, {
                        href: "/dshb-administration",
                        label: "Administration"
                    }, {
                        href: "/dshb-assignment",
                        label: "Assignment"
                    }, {
                        href: "/dshb-calendar",
                        label: "Calendar"
                    }, {
                        href: "/dshb-dashboard",
                        label: "Single Dashboard"
                    }, {
                        href: "/dshb-dictionary",
                        label: "Dictionary"
                    }, {
                        href: "/dshb-forums",
                        label: "Forums"
                    }, {
                        href: "/dshb-grades",
                        label: "Grades"
                    }, {
                        href: "/dshb-messages",
                        label: "Messages"
                    }, {
                        href: "/dshb-participants",
                        label: "Participants"
                    }, {
                        href: "/dshb-quiz",
                        label: "Quiz"
                    }, {
                        href: "/dshb-survey",
                        label: "Survey"
                    }]
                }, {
                    title: "Popular Courses",
                    links: [{
                        label: "Web Developer",
                        href: "#"
                    }, {
                        label: "Mobile Developer",
                        href: "#"
                    }, {
                        label: "Digital Marketing",
                        href: "#"
                    }, {
                        label: "Development",
                        href: "#"
                    }, {
                        label: "Finance & Accounting",
                        href: "#"
                    }, {
                        label: "Design",
                        href: "#"
                    }, {
                        label: "View All Courses",
                        href: "#"
                    }]
                }]
            }, {
                title: "Events",
                links: [{
                    href: "/event-list-1",
                    label: "Event List 1"
                }, {
                    href: "/event-list-2",
                    label: "Event List 2"
                }, {
                    href: "/events/1",
                    label: "Event Single"
                }, {
                    href: "/event-cart",
                    label: "Event Cart"
                }, {
                    href: "/event-checkout",
                    label: "Event Checkout"
                }]
            }, {
                title: "Blogs",
                links: [{
                    href: "/blog-list-1",
                    label: "Blog List 1"
                }, {
                    href: "/blog-list-2",
                    label: "Blog List 2"
                }, {
                    href: "/blog-list-3",
                    label: "Blog List 3"
                }, {
                    href: "/blogs/3",
                    label: "Blog Single"
                }]
            }, {
                title: "Pages",
                links: [{
                    title: "About Us",
                    links: [{
                        href: "/about-1",
                        label: "About 1"
                    }, {
                        href: "/about-2",
                        label: "About 2"
                    }]
                }, {
                    title: "Contact",
                    links: [{
                        href: "/contact-1",
                        label: "Contact 1"
                    }, {
                        href: "/contact-2",
                        label: "Contact 2"
                    }]
                }, {
                    title: "Shop",
                    links: [{
                        href: "/shop-cart",
                        label: "Shop Cart"
                    }, {
                        href: "/shop-checkout",
                        label: "Shop Checkout"
                    }, {
                        href: "/shop-list",
                        label: "Shop List"
                    }, {
                        href: "/shop-order",
                        label: "Shop Order"
                    }, {
                        href: "/shop/3",
                        label: "Shop Single"
                    }]
                }, {
                    href: "/pricing",
                    label: "Membership plans"
                }, {
                    href: "/not-found",
                    label: "404 Page"
                }, {
                    href: "/terms",
                    label: "FAQs"
                }, {
                    href: "/help-center",
                    label: "Help Center"
                }, {
                    href: "/login",
                    label: "Login"
                }, {
                    href: "/signup",
                    label: "Register"
                }, {
                    href: "/ui-elements",
                    label: "UI Elements"
                }]
            }]
        }
    }
]);