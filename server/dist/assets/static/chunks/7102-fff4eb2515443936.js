"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7102], {
        86484: function(e, s, l) {
            l.d(s, {
                Z: function() {
                    return t
                }
            });
            var a = l(9268);
            l(35846);
            let r = [{
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

            function t(e) {
                let {
                    componentsClass: s,
                    textSize: l
                } = e;
                return (0, a.jsx)(a.Fragment, {
                    children: r.map((e, r) => (0, a.jsx)("a", {
                        className: s || "",
                        href: e.href,
                        children: (0, a.jsx)("i", {
                            className: "".concat(e.iconClassName, " ").concat(l)
                        })
                    }, r))
                })
            }
            l(86006)
        },
        7700: function(e, s, l) {
            l.d(s, {
                Z: function() {
                    return c
                }
            });
            var a = l(9268);
            l(86006);
            var r = l(69567),
                t = l(35846),
                i = l.n(t);

            function c(e) {
                let {
                    allClasses: s
                } = e;
                return (0, a.jsx)(a.Fragment, {
                    children: r.d.map((e, l) => (0, a.jsxs)("div", {
                        className: "col-xl-2 col-lg-4 col-md-6",
                        children: [(0, a.jsx)("div", {
                            className: "".concat(s || ""),
                            children: e.title
                        }), (0, a.jsx)("div", {
                            className: "d-flex y-gap-10 flex-column",
                            children: e.links.map((e, s) => (0, a.jsx)(i(), {
                                href: e.href,
                                children: e.label
                            }, s))
                        })]
                    }, l))
                })
            }
        },
        80808: function(e, s, l) {
            l.d(s, {
                Z: function() {
                    return c
                }
            });
            var a = l(9268);
            let r = [{
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
            var t = l(35846),
                i = l.n(t);

            function c(e) {
                let {
                    allClasses: s
                } = e;
                return (0, a.jsx)(a.Fragment, {
                    children: r.map((e, l) => (0, a.jsx)(i(), {
                        className: "".concat(s || ""),
                        href: e.href,
                        children: e.label
                    }, l))
                })
            }
            l(86006)
        },
        81393: function(e, s, l) {
            var a = l(9268),
                r = l(86006),
                t = l(76394),
                i = l.n(t),
                c = l(35846),
                n = l.n(c);
            s.Z = e => {
                let {
                    allClasses: s,
                    color: l
                } = e, [t, c] = (0, r.useState)(!1);
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("div", {
                        className: s || "",
                        children: [(0, a.jsx)("button", {
                            onClick: () => c(e => !e),
                            className: "d-flex items-center ".concat(l || "text-white", " "),
                            "data-el-toggle": ".js-search-toggle",
                            children: (0, a.jsx)("i", {
                                className: "text-20 icon icon-search"
                            })
                        }), (0, a.jsxs)("div", {
                            className: "toggle-element js-search-toggle ".concat(t ? "-is-el-visible" : ""),
                            children: [(0, a.jsx)("div", {
                                className: "header-search pt-90 bg-white shadow-4 ",
                                style: {
                                    height: "650px"
                                },
                                children: (0, a.jsxs)("div", {
                                    className: "container",
                                    children: [(0, a.jsxs)("div", {
                                        className: "header-search__field",
                                        children: [(0, a.jsx)("div", {
                                            className: "icon icon-search text-dark-1"
                                        }), (0, a.jsx)("input", {
                                            required: !0,
                                            type: "text",
                                            className: "col-12 text-18 lh-12 text-dark-1 fw-500",
                                            placeholder: "What do you want to learn?"
                                        }), (0, a.jsx)("button", {
                                            onClick: () => c(!1),
                                            className: "d-flex items-center justify-center size-40 rounded-full bg-purple-3",
                                            "data-el-toggle": ".js-search-toggle",
                                            children: (0, a.jsx)(i(), {
                                                width: 12,
                                                height: 12,
                                                src: "/assets/img/menus/close.svg",
                                                alt: "icon"
                                            })
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "header-search__content mt-30",
                                        children: [(0, a.jsx)("div", {
                                            className: "text-17 text-dark-1 fw-500",
                                            children: "Popular Right Now"
                                        }), (0, a.jsxs)("div", {
                                            className: "d-flex y-gap-5 flex-column mt-20",
                                            children: [(0, a.jsx)(n(), {
                                                href: "/courses/".concat(5),
                                                className: "text-dark-1",
                                                children: "The Ultimate Drawing Course - Beginner to Advanced"
                                            }), (0, a.jsx)(n(), {
                                                href: "/courses-single-2/3",
                                                className: "text-dark-1",
                                                children: "Character Art School: Complete Character Drawing Course"
                                            }), (0, a.jsx)(n(), {
                                                href: "/courses-single-3/3",
                                                className: "text-dark-1",
                                                children: "Complete Blender Creator: Learn 3D Modelling for Beginners"
                                            }), (0, a.jsx)(n(), {
                                                href: "/courses-single-4/3",
                                                className: "text-dark-1",
                                                children: "User Experience Design Essentials - Adobe XD UI UX Design"
                                            }), (0, a.jsx)(n(), {
                                                href: "/courses-single-5/3",
                                                className: "text-dark-1",
                                                children: "Graphic Design Masterclass - Learn GREAT Design"
                                            }), (0, a.jsx)(n(), {
                                                href: "/courses-single-6/3",
                                                className: "text-dark-1",
                                                children: "Adobe Photoshop CC – Essentials Training Course"
                                            })]
                                        }), (0, a.jsx)("div", {
                                            className: "mt-30",
                                            children: (0, a.jsx)("button", {
                                                className: "uppercase underline",
                                                children: "PRESS ENTER TO SEE ALL SEARCH RESULTS"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, a.jsx)("div", {
                                className: "header-search__bg",
                                "data-el-toggle": ".js-search-toggle"
                            })]
                        })]
                    })
                })
            }
        },
        14747: function(e, s, l) {
            l.r(s), l.d(s, {
                default: function() {
                    return h
                }
            });
            var a = l(9268),
                r = l(76394),
                t = l.n(r);
            l(86006);
            var i = l(35846),
                c = l.n(i),
                n = l(86484),
                o = l(7700),
                d = l(80808);

            function h() {
                return (0, a.jsx)("footer", {
                    className: "footer -type-1 bg-dark-1 -green-links",
                    children: (0, a.jsxs)("div", {
                        className: "container",
                        children: [(0, a.jsx)("div", {
                            className: "footer-header",
                            children: (0, a.jsxs)("div", {
                                className: "row y-gap-20 justify-between items-center",
                                children: [(0, a.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, a.jsx)("div", {
                                        className: "footer-header__logo",
                                        children: (0, a.jsx)(t(), {
                                            width: 140,
                                            height: 50,
                                            src: "/assets/img/footer/footer-logo.svg",
                                            alt: "logo"
                                        })
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, a.jsxs)("div", {
                                        className: "footer-header-socials",
                                        children: [(0, a.jsx)("div", {
                                            className: "footer-header-socials__title text-white",
                                            children: "Follow us on social media"
                                        }), (0, a.jsx)("div", {
                                            className: "footer-header-socials__list",
                                            children: (0, a.jsx)(n.Z, {})
                                        })]
                                    })
                                })]
                            })
                        }), (0, a.jsx)("div", {
                            className: "footer-columns",
                            children: (0, a.jsxs)("div", {
                                className: "row y-gap-30",
                                children: [(0, a.jsx)(o.Z, {
                                    allClasses: "text-17 fw-500 text-white uppercase mb-25"
                                }), (0, a.jsxs)("div", {
                                    className: "col-xl-4 col-lg-4 col-md-6",
                                    children: [(0, a.jsx)("div", {
                                        className: "text-17 fw-500 text-white uppercase mb-25",
                                        children: "GET IN TOUCH"
                                    }), (0, a.jsxs)("div", {
                                        className: "footer-columns-form",
                                        children: [(0, a.jsx)("div", {
                                            children: "We don’t send spam so don’t worry."
                                        }), (0, a.jsx)("form", {
                                            onSubmit: e => {
                                                e.preventDefault()
                                            },
                                            children: (0, a.jsxs)("div", {
                                                className: "form-group",
                                                children: [(0, a.jsx)("input", {
                                                    required: !0,
                                                    type: "text",
                                                    placeholder: "Email..."
                                                }), (0, a.jsx)("button", {
                                                    type: "submit",
                                                    children: "Submit"
                                                })]
                                            })
                                        })]
                                    })]
                                })]
                            })
                        }), (0, a.jsx)("div", {
                            className: "py-30 border-top-light-15",
                            children: (0, a.jsxs)("div", {
                                className: "row justify-between items-center y-gap-20",
                                children: [(0, a.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, a.jsxs)("div", {
                                        className: "d-flex items-center h-100 text-white",
                                        children: ["\xa9 ", new Date().getFullYear(), " Educrat. All Right Reserved."]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, a.jsxs)("div", {
                                        className: "d-flex x-gap-20 y-gap-20 items-center flex-wrap",
                                        children: [(0, a.jsx)("div", {
                                            children: (0, a.jsx)("div", {
                                                className: "d-flex x-gap-15 text-white",
                                                children: (0, a.jsx)(d.Z, {})
                                            })
                                        }), (0, a.jsx)("div", {
                                            children: (0, a.jsxs)(c(), {
                                                href: "#",
                                                className: "button px-30 h-50 -dark-6 rounded-200 text-white",
                                                children: [(0, a.jsx)("i", {
                                                    className: "icon-worldwide text-20 mr-15"
                                                }), (0, a.jsx)("span", {
                                                    className: "text-15",
                                                    children: "English"
                                                })]
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
        55980: function(e, s, l) {
            l.r(s), l.d(s, {
                default: function() {
                    return u
                }
            });
            var a = l(9268),
                r = l(86006),
                t = l(34119),
                i = l(81393),
                c = l(39179),
                n = l(16797),
                o = l(35846),
                d = l.n(o),
                h = l(76394),
                x = l.n(h),
                m = l(51469);

            function u() {
                let [e, s] = (0, r.useState)(!1);
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("header", {
                        className: "header -type-1 ",
                        children: (0, a.jsx)("div", {
                            className: "header__container",
                            children: (0, a.jsxs)("div", {
                                className: "row justify-between items-center",
                                children: [(0, a.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, a.jsxs)("div", {
                                        className: "header-left",
                                        children: [(0, a.jsx)("div", {
                                            className: "header__logo ",
                                            children: (0, a.jsx)(d(), {
                                                href: "/",
                                                children: (0, a.jsx)(x(), {
                                                    width: 140,
                                                    height: 50,
                                                    src: "/assets/img/general/logo.svg",
                                                    alt: "logo"
                                                })
                                            })
                                        }), (0, a.jsx)(t.n, {
                                            allClasses: "header__explore text-green-1 ml-60 xl:ml-30 xl:d-none"
                                        })]
                                    })
                                }), (0, a.jsx)(n.Z, {
                                    allClasses: "menu__nav text-white -is-active"
                                }), (0, a.jsx)(m.Z, {
                                    setActiveMobileMenu: s,
                                    activeMobileMenu: e
                                }), (0, a.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, a.jsxs)("div", {
                                        className: "header-right d-flex items-center",
                                        children: [(0, a.jsxs)("div", {
                                            className: "header-right__icons text-white d-flex items-center",
                                            children: [(0, a.jsx)(i.Z, {}), (0, a.jsx)(c.Z, {
                                                parentClassess: "relative ml-30 xl:ml-20",
                                                allClasses: "d-flex items-center text-white"
                                            }), (0, a.jsx)("div", {
                                                className: "d-none xl:d-block ml-20",
                                                children: (0, a.jsx)("button", {
                                                    onClick: () => s(!0),
                                                    className: "text-white items-center",
                                                    "data-el-toggle": ".js-mobile-menu-toggle",
                                                    children: (0, a.jsx)("i", {
                                                        className: "text-11 icon icon-mobile-menu"
                                                    })
                                                })
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "header-right__buttons d-flex items-center ml-30 md:d-none",
                                            children: [(0, a.jsx)(d(), {
                                                href: "/login",
                                                className: "button -underline text-white",
                                                children: "Log in"
                                            }), (0, a.jsx)(d(), {
                                                href: "/signup",
                                                className: "button -sm -white text-dark-1 ml-30",
                                                children: "Sign up"
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                })
            }
        },
        69567: function(e, s, l) {
            l.d(s, {
                d: function() {
                    return a
                }
            });
            let a = [{
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
        }
    }
]);