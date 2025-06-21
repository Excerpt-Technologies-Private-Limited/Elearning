(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2024], {
        5032: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return r
                }
            });
            var t = a(9268),
                c = a(76394),
                i = a.n(c);
            let l = ["/assets/img/clients/1.svg", "/assets/img/clients/2.svg", "/assets/img/clients/3.svg", "/assets/img/clients/4.svg", "/assets/img/clients/5.svg", "/assets/img/clients/6.svg"];
            var r = e => {
                let {
                    backgroundColorComponent: s,
                    brandsTwo: a
                } = e;
                return (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsx)("section", {
                        className: " ".concat(a ? "layout-pt-md" : "layout-pt-lg", "  layout-pb-md  ").concat(s || "", " "),
                        children: (0, t.jsxs)("div", {
                            className: "container",
                            children: [(0, t.jsx)("div", {
                                className: "row justify-center",
                                children: (0, t.jsx)("div", {
                                    className: "col text-center",
                                    children: (0, t.jsx)("p", {
                                        className: "text-lg text-dark-1",
                                        children: "Trusted by the world’s best"
                                    })
                                })
                            }), (0, t.jsx)("div", {
                                className: "row y-gap-30 justify-between sm:justify-start items-center pt-60 md:pt-50",
                                children: l.map((e, s) => (0, t.jsx)("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "300",
                                    className: "col-lg-auto col-md-3 col-sm-4 col-6",
                                    children: (0, t.jsx)("div", {
                                        className: "d-flex justify-center items-center px-4",
                                        children: (0, t.jsx)(i(), {
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
        86484: function(e, s, a) {
            "use strict";
            a.d(s, {
                Z: function() {
                    return i
                }
            });
            var t = a(9268);
            a(35846);
            let c = [{
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

            function i(e) {
                let {
                    componentsClass: s,
                    textSize: a
                } = e;
                return (0, t.jsx)(t.Fragment, {
                    children: c.map((e, c) => (0, t.jsx)("a", {
                        className: s || "",
                        href: e.href,
                        children: (0, t.jsx)("i", {
                            className: "".concat(e.iconClassName, " ").concat(a)
                        })
                    }, c))
                })
            }
            a(86006)
        },
        22969: function(e, s, a) {
            "use strict";
            a.d(s, {
                Z: function() {
                    return d
                }
            });
            var t = a(9268),
                c = a(86006),
                i = a(76394),
                l = a.n(i),
                r = a(35846),
                n = a.n(r);

            function d(e) {
                let {
                    data: s,
                    index: a
                } = e, [i, r] = (0, c.useState)([]);
                return (0, c.useEffect)(() => {
                    for (let e = Math.round(s.rating); e >= 1; e--) r(e => [...e, "star"])
                }, []), (0, t.jsx)("div", {
                    className: "col-lg-3 col-md-6",
                    children: (0, t.jsx)("div", {
                        children: (0, t.jsxs)("div", {
                            className: "coursesCard -type-1 -hover-shadow border-light rounded-8",
                            children: [(0, t.jsxs)("div", {
                                className: "relative",
                                children: [(0, t.jsxs)("div", {
                                    className: "coursesCard__image overflow-hidden rounded-top-8",
                                    children: [(0, t.jsx)(l(), {
                                        width: 600,
                                        height: 420,
                                        className: "w-1/1",
                                        src: s.imageSrc,
                                        alt: "image"
                                    }), (0, t.jsx)("div", {
                                        className: "coursesCard__image_overlay rounded-top-8"
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
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "h-100 pt-15 pb-10 px-20",
                                children: [(0, t.jsxs)("div", {
                                    className: "d-flex items-center",
                                    children: [(0, t.jsx)("div", {
                                        className: "text-14 lh-1 text-yellow-1 mr-10",
                                        children: s.rating
                                    }), (0, t.jsx)("div", {
                                        className: "d-flex x-gap-5 items-center",
                                        children: i.map((e, s) => (0, t.jsx)("div", {
                                            className: "icon-star text-9 text-yellow-1"
                                        }, s))
                                    }), (0, t.jsxs)("div", {
                                        className: "text-13 lh-1 ml-10",
                                        children: ["((", s.ratingCount, "))"]
                                    })]
                                }), (0, t.jsx)("div", {
                                    className: "text-17 lh-15 fw-500 text-dark-1 mt-10",
                                    children: (0, t.jsx)(n(), {
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
                                            children: (0, t.jsx)(l(), {
                                                width: 16,
                                                height: 17,
                                                src: "/assets/img/coursesCards/icons/1.svg",
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
                                            children: (0, t.jsx)(l(), {
                                                width: 16,
                                                height: 17,
                                                src: "/assets/img/coursesCards/icons/2.svg",
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
                                            children: (0, t.jsx)(l(), {
                                                width: 16,
                                                height: 17,
                                                src: "/assets/img/coursesCards/icons/3.svg",
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
                                        children: [(0, t.jsx)(l(), {
                                            width: 30,
                                            height: 30,
                                            src: s.authorImageSrc,
                                            alt: "image"
                                        }), (0, t.jsx)("div", {
                                            children: s.authorName || "Ali Tufan"
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
        81393: function(e, s, a) {
            "use strict";
            var t = a(9268),
                c = a(86006),
                i = a(76394),
                l = a.n(i),
                r = a(35846),
                n = a.n(r);
            s.Z = e => {
                let {
                    allClasses: s,
                    color: a
                } = e, [i, r] = (0, c.useState)(!1);
                return (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsxs)("div", {
                        className: s || "",
                        children: [(0, t.jsx)("button", {
                            onClick: () => r(e => !e),
                            className: "d-flex items-center ".concat(a || "text-white", " "),
                            "data-el-toggle": ".js-search-toggle",
                            children: (0, t.jsx)("i", {
                                className: "text-20 icon icon-search"
                            })
                        }), (0, t.jsxs)("div", {
                            className: "toggle-element js-search-toggle ".concat(i ? "-is-el-visible" : ""),
                            children: [(0, t.jsx)("div", {
                                className: "header-search pt-90 bg-white shadow-4 ",
                                style: {
                                    height: "650px"
                                },
                                children: (0, t.jsxs)("div", {
                                    className: "container",
                                    children: [(0, t.jsxs)("div", {
                                        className: "header-search__field",
                                        children: [(0, t.jsx)("div", {
                                            className: "icon icon-search text-dark-1"
                                        }), (0, t.jsx)("input", {
                                            required: !0,
                                            type: "text",
                                            className: "col-12 text-18 lh-12 text-dark-1 fw-500",
                                            placeholder: "What do you want to learn?"
                                        }), (0, t.jsx)("button", {
                                            onClick: () => r(!1),
                                            className: "d-flex items-center justify-center size-40 rounded-full bg-purple-3",
                                            "data-el-toggle": ".js-search-toggle",
                                            children: (0, t.jsx)(l(), {
                                                width: 12,
                                                height: 12,
                                                src: "/assets/img/menus/close.svg",
                                                alt: "icon"
                                            })
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "header-search__content mt-30",
                                        children: [(0, t.jsx)("div", {
                                            className: "text-17 text-dark-1 fw-500",
                                            children: "Popular Right Now"
                                        }), (0, t.jsxs)("div", {
                                            className: "d-flex y-gap-5 flex-column mt-20",
                                            children: [(0, t.jsx)(n(), {
                                                href: "/courses/".concat(5),
                                                className: "text-dark-1",
                                                children: "The Ultimate Drawing Course - Beginner to Advanced"
                                            }), (0, t.jsx)(n(), {
                                                href: "/courses-single-2/3",
                                                className: "text-dark-1",
                                                children: "Character Art School: Complete Character Drawing Course"
                                            }), (0, t.jsx)(n(), {
                                                href: "/courses-single-3/3",
                                                className: "text-dark-1",
                                                children: "Complete Blender Creator: Learn 3D Modelling for Beginners"
                                            }), (0, t.jsx)(n(), {
                                                href: "/courses-single-4/3",
                                                className: "text-dark-1",
                                                children: "User Experience Design Essentials - Adobe XD UI UX Design"
                                            }), (0, t.jsx)(n(), {
                                                href: "/courses-single-5/3",
                                                className: "text-dark-1",
                                                children: "Graphic Design Masterclass - Learn GREAT Design"
                                            }), (0, t.jsx)(n(), {
                                                href: "/courses-single-6/3",
                                                className: "text-dark-1",
                                                children: "Adobe Photoshop CC – Essentials Training Course"
                                            })]
                                        }), (0, t.jsx)("div", {
                                            className: "mt-30",
                                            children: (0, t.jsx)("button", {
                                                className: "uppercase underline",
                                                children: "PRESS ENTER TO SEE ALL SEARCH RESULTS"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, t.jsx)("div", {
                                className: "header-search__bg",
                                "data-el-toggle": ".js-search-toggle"
                            })]
                        })]
                    })
                })
            }
        },
        6497: function() {},
        17544: function() {}
    }
]);