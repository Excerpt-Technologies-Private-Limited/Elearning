(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9107], {
        48448: function(e, s, t) {
            Promise.resolve().then(t.t.bind(t, 8920, 23)), Promise.resolve().then(t.bind(t, 1311)), Promise.resolve().then(t.bind(t, 14747)), Promise.resolve().then(t.bind(t, 55980)), Promise.resolve().then(t.bind(t, 31743)), Promise.resolve().then(t.bind(t, 88392)), Promise.resolve().then(t.bind(t, 5920)), Promise.resolve().then(t.bind(t, 11418))
        },
        31743: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return m
                }
            });
            var a = t(9268),
                l = t(76394),
                i = t.n(l),
                n = t(86006),
                r = t(16797),
                c = t(51469),
                d = t(35846),
                o = t.n(d);

            function m() {
                let [e, s] = (0, n.useState)(!1);
                return (0, a.jsx)("header", {
                    className: "header -base js-header",
                    children: (0, a.jsx)("div", {
                        className: "header__container py-10",
                        children: (0, a.jsxs)("div", {
                            className: "row justify-between items-center",
                            children: [(0, a.jsx)("div", {
                                className: "col-auto",
                                children: (0, a.jsx)("div", {
                                    className: "header-left",
                                    children: (0, a.jsx)("div", {
                                        className: "header__logo ",
                                        children: (0, a.jsx)(o(), {
                                            "data-barba": !0,
                                            href: "/",
                                            children: (0, a.jsx)(i(), {
                                                width: 140,
                                                height: 50,
                                                src: "/assets/img/general/logo.svg",
                                                alt: "logo"
                                            })
                                        })
                                    })
                                })
                            }), (0, a.jsx)("div", {
                                className: "col-auto",
                                children: (0, a.jsxs)("div", {
                                    className: "header-right d-flex items-center",
                                    children: [(0, a.jsx)(r.Z, {
                                        allClasses: "menu__nav text-dark-1 -is-active"
                                    }), (0, a.jsx)(c.Z, {
                                        activeMobileMenu: e,
                                        setActiveMobileMenu: s
                                    }), (0, a.jsx)("div", {
                                        className: "mr-30",
                                        children: (0, a.jsx)("div", {
                                            className: "d-none xl:d-block ml-20",
                                            children: (0, a.jsx)("button", {
                                                className: "text-dark-1 items-center",
                                                "data-el-toggle": ".js-mobile-menu-toggle",
                                                onClick: () => s(!0),
                                                children: (0, a.jsx)("i", {
                                                    className: "text-11 icon icon-mobile-menu"
                                                })
                                            })
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "header-right__buttons md:d-none",
                                        children: (0, a.jsx)("a", {
                                            href: "signup",
                                            className: "button -sm -rounded -dark-1 text-white",
                                            children: "Sign Up"
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                })
            }
        },
        88392: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return c
                }
            });
            var a = t(9268),
                l = t(70226),
                i = t(76394),
                n = t.n(i),
                r = t(86006);

            function c() {
                return (0, r.useEffect)(() => {
                    (() => {
                        let e = document.querySelectorAll(".js-mouse-move-container");
                        e.forEach(e => {
                            let s = e.querySelectorAll(".js-mouse-move");
                            s.forEach(s => {
                                let t = s.getAttribute("data-move");
                                document.addEventListener("mousemove", a => {
                                    let i = a.pageX - e.offsetLeft,
                                        n = a.pageY - e.offsetTop;
                                    l.ZP.to(s, {
                                        x: (i - e.offsetWidth / 2) / e.offsetWidth * Number(t),
                                        y: (n - e.offsetHeight / 2) / e.offsetHeight * Number(t),
                                        duration: .2
                                    })
                                })
                            })
                        })
                    })()
                }, []), (0, a.jsx)("div", {
                    className: "form-page__img bg-dark-1",
                    children: (0, a.jsxs)("div", {
                        className: "form-page-composition",
                        children: [(0, a.jsx)("div", {
                            className: "-bg",
                            children: (0, a.jsx)(n(), {
                                width: 1250,
                                height: 1e3,
                                style: {
                                    width: "100%"
                                },
                                "data-move": "30",
                                className: "js-mouse-move",
                                src: "/assets/img/login/bg.png",
                                alt: "bg"
                            })
                        }), (0, a.jsx)("div", {
                            className: "-el-1",
                            children: (0, a.jsx)(n(), {
                                width: 1250,
                                height: 1e3,
                                style: {
                                    width: "100%"
                                },
                                "data-move": "20",
                                className: "js-mouse-move",
                                src: "/assets/img/home-9/hero/bg.png",
                                alt: "image"
                            })
                        }), (0, a.jsx)("div", {
                            className: "-el-2",
                            children: (0, a.jsx)(n(), {
                                width: 488,
                                height: 485,
                                "data-move": "40",
                                className: "js-mouse-move",
                                src: "/assets/img/home-9/hero/1.png",
                                alt: "icon"
                            })
                        }), (0, a.jsx)("div", {
                            className: "-el-3",
                            children: (0, a.jsx)(n(), {
                                width: 108,
                                height: 108,
                                "data-move": "40",
                                className: "js-mouse-move",
                                src: "/assets/img/home-9/hero/2.png",
                                alt: "icon"
                            })
                        }), (0, a.jsx)("div", {
                            className: "-el-4",
                            children: (0, a.jsx)(n(), {
                                width: 108,
                                height: 108,
                                "data-move": "40",
                                className: "js-mouse-move",
                                src: "/assets/img/home-9/hero/3.png",
                                alt: "icon"
                            })
                        })]
                    })
                })
            }
        },
        5920: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return n
                }
            });
            var a = t(9268),
                l = t(35846),
                i = t.n(l);

            function n() {
                return (0, a.jsx)("div", {
                    className: "form-page__content lg:py-50",
                    children: (0, a.jsx)("div", {
                        className: "container",
                        children: (0, a.jsx)("div", {
                            className: "row justify-center items-center",
                            children: (0, a.jsx)("div", {
                                className: "col-xl-6 col-lg-8",
                                children: (0, a.jsxs)("div", {
                                    className: "px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16",
                                    children: [(0, a.jsx)("h3", {
                                        className: "text-30 lh-13",
                                        children: "Login"
                                    }), (0, a.jsxs)("p", {
                                        className: "mt-10",
                                        children: ["Don't have an account yet?", (0, a.jsx)(i(), {
                                            href: "/signup",
                                            className: "text-purple-1",
                                            children: "Sign up for free"
                                        })]
                                    }), (0, a.jsxs)("form", {
                                        className: "contact-form respondForm__form row y-gap-20 pt-30",
                                        onSubmit: e => {
                                            e.preventDefault()
                                        },
                                        children: [(0, a.jsxs)("div", {
                                            className: "col-12",
                                            children: [(0, a.jsx)("label", {
                                                className: "text-16 lh-1 fw-500 text-dark-1 mb-10",
                                                children: "Username Or Email"
                                            }), (0, a.jsx)("input", {
                                                required: !0,
                                                type: "text",
                                                name: "title",
                                                placeholder: "Name"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "col-12",
                                            children: [(0, a.jsx)("label", {
                                                className: "text-16 lh-1 fw-500 text-dark-1 mb-10",
                                                children: "Password"
                                            }), (0, a.jsx)("input", {
                                                required: !0,
                                                type: "password",
                                                name: "title",
                                                placeholder: "Password"
                                            })]
                                        }), (0, a.jsx)("div", {
                                            className: "col-12",
                                            children: (0, a.jsx)("button", {
                                                type: "submit",
                                                name: "submit",
                                                id: "submit",
                                                className: "button -md -green-1 text-dark-1 fw-500 w-1/1",
                                                children: "Login"
                                            })
                                        })]
                                    }), (0, a.jsx)("div", {
                                        className: "lh-12 text-dark-1 fw-500 text-center mt-20",
                                        children: "Or sign in using"
                                    }), (0, a.jsxs)("div", {
                                        className: "d-flex x-gap-20 items-center justify-between pt-20",
                                        children: [(0, a.jsx)("div", {
                                            children: (0, a.jsx)("button", {
                                                className: "button -sm px-24 py-20 -outline-blue-3 text-blue-3 text-14",
                                                children: "Log In via Facebook"
                                            })
                                        }), (0, a.jsx)("div", {
                                            children: (0, a.jsx)("button", {
                                                className: "button -sm px-24 py-20 -outline-red-3 text-red-3 text-14",
                                                children: "Log In via Google+"
                                            })
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                })
            }
            t(86006)
        },
        11418: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return n
                }
            });
            var a = t(9268),
                l = t(35846),
                i = t.n(l);

            function n() {
                return (0, a.jsx)("div", {
                    className: "form-page__content lg:py-50",
                    children: (0, a.jsx)("div", {
                        className: "container",
                        children: (0, a.jsx)("div", {
                            className: "row justify-center items-center",
                            children: (0, a.jsx)("div", {
                                className: "col-xl-8 col-lg-9",
                                children: (0, a.jsxs)("div", {
                                    className: "px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16",
                                    children: [(0, a.jsx)("h3", {
                                        className: "text-30 lh-13",
                                        children: "Sign Up"
                                    }), (0, a.jsxs)("p", {
                                        className: "mt-10",
                                        children: ["Already have an account?", (0, a.jsx)(i(), {
                                            href: "/login",
                                            className: "text-purple-1",
                                            children: "Log in"
                                        })]
                                    }), (0, a.jsxs)("form", {
                                        className: "contact-form respondForm__form row y-gap-20 pt-30",
                                        onSubmit: e => {
                                            e.preventDefault()
                                        },
                                        children: [(0, a.jsxs)("div", {
                                            className: "col-lg-6",
                                            children: [(0, a.jsx)("label", {
                                                className: "text-16 lh-1 fw-500 text-dark-1 mb-10",
                                                children: "Email address *"
                                            }), (0, a.jsx)("input", {
                                                required: !0,
                                                type: "text",
                                                name: "title",
                                                placeholder: "Name"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "col-lg-6",
                                            children: [(0, a.jsx)("label", {
                                                className: "text-16 lh-1 fw-500 text-dark-1 mb-10",
                                                children: "Username *"
                                            }), (0, a.jsx)("input", {
                                                required: !0,
                                                type: "text",
                                                name: "title",
                                                placeholder: "Name"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "col-lg-6",
                                            children: [(0, a.jsx)("label", {
                                                className: "text-16 lh-1 fw-500 text-dark-1 mb-10",
                                                children: "Password *"
                                            }), (0, a.jsx)("input", {
                                                required: !0,
                                                type: "text",
                                                name: "title",
                                                placeholder: "Name"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "col-lg-6",
                                            children: [(0, a.jsx)("label", {
                                                className: "text-16 lh-1 fw-500 text-dark-1 mb-10",
                                                children: "Confirm Password *"
                                            }), (0, a.jsx)("input", {
                                                required: !0,
                                                type: "text",
                                                name: "title",
                                                placeholder: "Name"
                                            })]
                                        }), (0, a.jsx)("div", {
                                            className: "col-12",
                                            children: (0, a.jsx)("button", {
                                                type: "submit",
                                                name: "submit",
                                                id: "submit",
                                                className: "button -md -green-1 text-dark-1 fw-500 w-1/1",
                                                children: "Register"
                                            })
                                        })]
                                    }), (0, a.jsx)("div", {
                                        className: "lh-12 text-dark-1 fw-500 text-center mt-20",
                                        children: "Or sign in using"
                                    }), (0, a.jsxs)("div", {
                                        className: "d-flex x-gap-20 items-center justify-between pt-20",
                                        children: [(0, a.jsx)("div", {
                                            children: (0, a.jsx)("button", {
                                                className: "button -sm px-24 py-20 -outline-blue-3 text-blue-3 text-14",
                                                children: "Log In via Facebook"
                                            })
                                        }), (0, a.jsx)("div", {
                                            children: (0, a.jsx)("button", {
                                                className: "button -sm px-24 py-20 -outline-red-3 text-red-3 text-14",
                                                children: "Log In via Google+"
                                            })
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                })
            }
            t(86006)
        },
        56008: function(e, s, t) {
            e.exports = t(93027)
        }
    },
    function(e) {
        e.O(0, [8224, 8201, 226, 1840, 5127, 4240, 4119, 7102, 9253, 6488, 1744], function() {
            return e(e.s = 48448)
        }), _N_E = e.O()
    }
]);