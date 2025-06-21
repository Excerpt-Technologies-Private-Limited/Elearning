"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4240], {
        16797: function(e, s, l) {
            l.d(s, {
                Z: function() {
                    return d
                }
            });
            var i = l(9268),
                a = l(86006),
                n = l(35846),
                c = l.n(n),
                t = l(74316);
            l(76394);
            var r = l(63513),
                h = l(56008);

            function d(e) {
                let {
                    allClasses: s,
                    headerPosition: l
                } = e, [n, d] = (0, a.useState)(""), [m, x] = (0, a.useState)(""), u = (0, h.usePathname)();
                return (0, a.useEffect)(() => {
                    r.s.forEach(e => {
                        var s;
                        null == e || null === (s = e.links) || void 0 === s || s.forEach(s => {
                            var l, i;
                            (null === (l = s.href) || void 0 === l ? void 0 : l.split("/")[1]) == u.split("/")[1] ? d(e.title) : null == s || null === (i = s.links) || void 0 === i || i.map(l => {
                                var i;
                                (null === (i = l.href) || void 0 === i ? void 0 : i.split("/")[1]) == u.split("/")[1] && (d(e.title), x(s.title))
                            })
                        })
                    })
                }, []), (0, i.jsxs)("div", {
                    className: "header-menu js-mobile-menu-toggle ".concat(l || ""),
                    children: [(0, i.jsxs)("div", {
                        className: "header-menu__content",
                        children: [(0, i.jsx)("div", {
                            className: "mobile-bg js-mobile-bg"
                        }), (0, i.jsxs)("div", {
                            className: "d-none xl:d-flex items-center px-20 py-20 border-bottom-light",
                            children: [(0, i.jsx)(c(), {
                                href: "/login",
                                className: "text-dark-1",
                                children: "Log in"
                            }), (0, i.jsx)(c(), {
                                href: "/signup",
                                className: "text-dark-1 ml-30",
                                children: "Sign Up"
                            })]
                        }), (0, i.jsx)("div", {
                            className: "menu js-navList",
                            children: (0, i.jsxs)("ul", {
                                className: "".concat(s || ""),
                                children: [(0, i.jsxs)("li", {
                                    className: "menu-item-has-children",
                                    children: [(0, i.jsxs)(c(), {
                                        "data-barba": !0,
                                        href: "#",
                                        className: "Home" == n ? "activeMenu" : "",
                                        children: ["Home ", (0, i.jsx)("i", {
                                            className: "icon-chevron-right text-13 ml-10"
                                        })]
                                    }), (0, i.jsxs)("ul", {
                                        className: "subnav",
                                        children: [(0, i.jsx)("li", {
                                            className: "menu__backButton js-nav-list-back",
                                            children: (0, i.jsxs)(c(), {
                                                href: "#",
                                                children: [(0, i.jsx)("i", {
                                                    className: "icon-chevron-left text-13 mr-10"
                                                }), " Home"]
                                            })
                                        }), r.s[0].links.map((e, s) => (0, i.jsx)("li", {
                                            className: u.split("/")[1] == e.href.split("/")[1] ? "activeMenu" : "inActiveMenu",
                                            children: (0, i.jsx)(c(), {
                                                href: e.href,
                                                children: e.label
                                            })
                                        }, s))]
                                    })]
                                }), (0, i.jsxs)("li", {
                                    className: "menu-item-has-children -has-mega-menu",
                                    children: [(0, i.jsxs)(c(), {
                                        "data-barba": !0,
                                        href: "#",
                                        className: "Courses" == n ? "activeMenu" : "",
                                        children: ["Courses ", (0, i.jsx)("i", {
                                            className: "icon-chevron-right text-13 ml-10"
                                        })]
                                    }), (0, i.jsx)("div", {
                                        className: "mega xl:d-none",
                                        children: (0, i.jsxs)("div", {
                                            className: "mega__menu",
                                            children: [(0, i.jsxs)("div", {
                                                className: "row x-gap-40",
                                                children: [(0, i.jsxs)("div", {
                                                    className: "col",
                                                    children: [(0, i.jsx)("h4", {
                                                        className: "text-17 fw-500 mb-20",
                                                        children: "Course List Layouts"
                                                    }), (0, i.jsx)("ul", {
                                                        className: "mega__list",
                                                        children: r.s[1].links[0].links.map((e, s) => (0, i.jsx)("li", {
                                                            className: u.split("/")[1] == e.href.split("/")[1] ? "activeMenu" : "inActiveMegaMenu",
                                                            children: (0, i.jsx)(c(), {
                                                                "data-barba": !0,
                                                                href: e.href,
                                                                children: e.label
                                                            })
                                                        }, s))
                                                    })]
                                                }), (0, i.jsxs)("div", {
                                                    className: "col",
                                                    children: [(0, i.jsx)("h4", {
                                                        className: "text-17 fw-500 mb-20",
                                                        children: "Course Single Layouts"
                                                    }), (0, i.jsx)("ul", {
                                                        className: "mega__list",
                                                        children: r.s[1].links[1].links.map((e, s) => (0, i.jsx)("li", {
                                                            className: u.split("/")[1] == e.href.split("/")[1] ? "activeMenu" : "inActiveMegaMenu",
                                                            children: (0, i.jsx)(c(), {
                                                                "data-barba": !0,
                                                                href: e.href,
                                                                children: e.label
                                                            })
                                                        }, s))
                                                    })]
                                                }), (0, i.jsxs)("div", {
                                                    className: "col",
                                                    children: [(0, i.jsx)("h4", {
                                                        className: "text-17 fw-500 mb-20",
                                                        children: "About Courses"
                                                    }), (0, i.jsx)("ul", {
                                                        className: "mega__list",
                                                        children: r.s[1].links[2].links.map((e, s) => (0, i.jsx)("li", {
                                                            className: u.split("/")[1] == e.href.split("/")[1] ? "activeMenu" : "inActiveMegaMenu",
                                                            children: (0, i.jsx)(c(), {
                                                                "data-barba": !0,
                                                                href: e.href,
                                                                children: e.label
                                                            })
                                                        }, s))
                                                    })]
                                                }), (0, i.jsxs)("div", {
                                                    className: "col",
                                                    children: [(0, i.jsx)("h4", {
                                                        className: "text-17 fw-500 mb-20",
                                                        children: "Dashboard Pages"
                                                    }), (0, i.jsx)("ul", {
                                                        className: "mega__list",
                                                        children: r.s[1].links[3].links.map((e, s) => (0, i.jsx)("li", {
                                                            className: u.split("/")[1] == e.href.split("/")[1] ? "activeMenu" : "inActiveMegaMenu",
                                                            children: (0, i.jsx)(c(), {
                                                                "data-barba": !0,
                                                                href: e.href,
                                                                children: e.label
                                                            })
                                                        }, s))
                                                    })]
                                                }), (0, i.jsxs)("div", {
                                                    className: "col",
                                                    children: [(0, i.jsx)("h4", {
                                                        className: "text-17 fw-500 mb-20",
                                                        children: "Popular Courses"
                                                    }), (0, i.jsx)("ul", {
                                                        className: "mega__list",
                                                        children: r.s[1].links[4].links.map((e, s) => (0, i.jsx)("li", {
                                                            className: u.split("/")[1] == e.href.split("/")[1] ? "activeMenu" : "inActiveMegaMenu",
                                                            children: (0, i.jsx)(c(), {
                                                                "data-barba": !0,
                                                                href: e.href,
                                                                children: e.label
                                                            })
                                                        }, s))
                                                    })]
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "mega-banner bg-purple-1 ml-40",
                                                children: [(0, i.jsxs)("div", {
                                                    className: "text-24 lh-15 text-white fw-700",
                                                    children: ["Join more than", (0, i.jsx)("br", {}), (0, i.jsx)("span", {
                                                        className: "text-green-1",
                                                        children: "8 million learners"
                                                    }), "worldwide"]
                                                }), (0, i.jsx)(c(), {
                                                    href: "#",
                                                    className: "button -md -green-1 text-dark-1 fw-500 col-12",
                                                    children: "Start Learning For Free"
                                                })]
                                            })]
                                        })
                                    })]
                                }), (0, i.jsxs)("li", {
                                    className: "menu-item-has-children",
                                    children: [(0, i.jsxs)(c(), {
                                        "data-barba": !0,
                                        href: "#",
                                        className: "Events" == n ? "activeMenu" : "",
                                        children: ["Events ", (0, i.jsx)("i", {
                                            className: "icon-chevron-right text-13 ml-10"
                                        })]
                                    }), (0, i.jsxs)("ul", {
                                        className: "subnav",
                                        children: [(0, i.jsx)("li", {
                                            className: "menu__backButton js-nav-list-back",
                                            children: (0, i.jsxs)(c(), {
                                                href: "#",
                                                children: [(0, i.jsx)("i", {
                                                    className: "icon-chevron-left text-13 mr-10"
                                                }), " Events"]
                                            })
                                        }), r.s[2].links.map((e, s) => (0, i.jsx)("li", {
                                            className: u.split("/")[1] == e.href.split("/")[1] ? "activeMenu" : "inActiveMenu",
                                            children: (0, i.jsx)(c(), {
                                                "data-barba": !0,
                                                href: e.href,
                                                children: e.label
                                            })
                                        }, s))]
                                    })]
                                }), (0, i.jsxs)("li", {
                                    className: "menu-item-has-children",
                                    children: [(0, i.jsxs)(c(), {
                                        "data-barba": !0,
                                        href: "#",
                                        className: "Blogs" == n ? "activeMenu" : "",
                                        children: ["Blog ", (0, i.jsx)("i", {
                                            className: "icon-chevron-right text-13 ml-10"
                                        })]
                                    }), (0, i.jsxs)("ul", {
                                        className: "subnav",
                                        children: [(0, i.jsx)("li", {
                                            className: "menu__backButton js-nav-list-back",
                                            children: (0, i.jsxs)(c(), {
                                                href: "#",
                                                children: [(0, i.jsx)("i", {
                                                    className: "icon-chevron-left text-13 mr-10"
                                                }), " Blog"]
                                            })
                                        }), r.s[3].links.map((e, s) => (0, i.jsx)("li", {
                                            className: u.split("/")[1] == e.href.split("/")[1] ? "activeMenu" : "inActiveMenu",
                                            children: (0, i.jsx)(c(), {
                                                "data-barba": !0,
                                                href: e.href,
                                                children: e.label
                                            })
                                        }, s))]
                                    })]
                                }), (0, i.jsxs)("li", {
                                    className: "menu-item-has-children",
                                    children: [(0, i.jsxs)(c(), {
                                        "data-barba": !0,
                                        href: "#",
                                        className: "Pages" == n ? "activeMenu" : "",
                                        children: ["Pages ", (0, i.jsx)("i", {
                                            className: "icon-chevron-right text-13 ml-10"
                                        })]
                                    }), (0, i.jsxs)("ul", {
                                        className: "subnav",
                                        children: [(0, i.jsx)("li", {
                                            className: "menu__backButton js-nav-list-back",
                                            children: (0, i.jsxs)(c(), {
                                                href: "#",
                                                children: [(0, i.jsx)("i", {
                                                    className: "icon-chevron-left text-13 mr-10"
                                                }), " Pages"]
                                            })
                                        }), (0, i.jsxs)("li", {
                                            className: "menu-item-has-children",
                                            children: [(0, i.jsxs)(c(), {
                                                href: "#",
                                                className: "About Us" == m ? "activeMenu" : "inActiveMenu",
                                                children: ["About Us", (0, i.jsx)("div", {
                                                    className: "icon-chevron-right text-11"
                                                })]
                                            }), (0, i.jsxs)("ul", {
                                                className: "subnav",
                                                children: [(0, i.jsx)("li", {
                                                    className: "menu__backButton js-nav-list-back",
                                                    children: (0, i.jsxs)(c(), {
                                                        href: "#",
                                                        children: [(0, i.jsx)("i", {
                                                            className: "icon-chevron-left text-13 mr-10"
                                                        }), "About Us"]
                                                    })
                                                }), r.s[4].links[0].links.map((e, s) => (0, i.jsx)("li", {
                                                    className: u.split("/")[1] == e.href.split("/")[1] ? "activeMenu" : "inActiveMenu",
                                                    children: (0, i.jsx)(c(), {
                                                        "data-barba": !0,
                                                        href: e.href,
                                                        children: e.label
                                                    }, s)
                                                }, s))]
                                            })]
                                        }), (0, i.jsxs)("li", {
                                            className: "menu-item-has-children",
                                            children: [(0, i.jsxs)(c(), {
                                                href: "#",
                                                className: "Contact" == m ? "activeMenu" : "inActiveMenu",
                                                children: ["Contact", (0, i.jsx)("div", {
                                                    className: "icon-chevron-right text-11"
                                                })]
                                            }), (0, i.jsxs)("ul", {
                                                className: "subnav",
                                                children: [(0, i.jsx)("li", {
                                                    className: "menu__backButton js-nav-list-back",
                                                    children: (0, i.jsxs)(c(), {
                                                        href: "#",
                                                        children: [(0, i.jsx)("i", {
                                                            className: "icon-chevron-left text-13 mr-10"
                                                        }), "Contact"]
                                                    })
                                                }), r.s[4].links[1].links.map((e, s) => (0, i.jsx)("li", {
                                                    className: u.split("/")[1] == e.href.split("/")[1] ? "activeMenu" : "inActiveMenu",
                                                    children: (0, i.jsx)(c(), {
                                                        "data-barba": !0,
                                                        href: e.href,
                                                        children: e.label
                                                    }, s)
                                                }, s))]
                                            })]
                                        }), (0, i.jsxs)("li", {
                                            className: "menu-item-has-children",
                                            children: [(0, i.jsxs)(c(), {
                                                href: "#",
                                                className: "Shop" == m ? "activeMenu" : "inActiveMenu",
                                                children: ["Shop", (0, i.jsx)("div", {
                                                    className: "icon-chevron-right text-11"
                                                })]
                                            }), (0, i.jsxs)("ul", {
                                                className: "subnav",
                                                children: [(0, i.jsx)("li", {
                                                    className: "menu__backButton js-nav-list-back",
                                                    children: (0, i.jsxs)(c(), {
                                                        href: "#",
                                                        children: [(0, i.jsx)("i", {
                                                            className: "icon-chevron-left text-13 mr-10"
                                                        }), " Shop"]
                                                    })
                                                }), r.s[4].links[2].links.map((e, s) => (0, i.jsx)("li", {
                                                    className: u.split("/")[1] == e.href.split("/")[1] ? "activeMenu" : "inActiveMenu",
                                                    children: (0, i.jsx)(c(), {
                                                        "data-barba": !0,
                                                        href: e.href,
                                                        children: e.label
                                                    }, s)
                                                }, s))]
                                            })]
                                        }), r.s[4].links.filter(e => e.href).map((e, s) => (0, i.jsx)("li", {
                                            className: u.split("/")[1] == e.href.split("/")[1] ? "activeMenu" : "inActiveMenu",
                                            children: (0, i.jsx)(c(), {
                                                "data-barba": !0,
                                                href: e.href,
                                                children: e.label
                                            }, s)
                                        }, s))]
                                    })]
                                }), (0, i.jsx)("li", {
                                    children: (0, i.jsx)(c(), {
                                        "data-barba": !0,
                                        href: "/contact-1",
                                        className: "/contact-1" == u ? "activeMenu" : "inActiveMenuTwo",
                                        children: "Contact"
                                    })
                                })]
                            })
                        }), (0, i.jsx)(t.Z, {})]
                    }), (0, i.jsx)("div", {
                        className: "header-menu-close",
                        "data-el-toggle": ".js-mobile-menu-toggle",
                        children: (0, i.jsx)("div", {
                            className: "size-40 d-flex items-center justify-center rounded-full bg-white",
                            children: (0, i.jsx)("div", {
                                className: "icon-close text-dark-1 text-16"
                            })
                        })
                    }), (0, i.jsx)("div", {
                        className: "header-menu-bg"
                    })]
                })
            }
        },
        74316: function(e, s, l) {
            l.d(s, {
                Z: function() {
                    return c
                }
            });
            var i = l(9268);
            l(86006);
            var a = l(35846),
                n = l.n(a);

            function c() {
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)("div", {
                        className: "mobile-footer px-20 py-20 border-top-light js-mobile-footer",
                        children: [(0, i.jsxs)("div", {
                            className: "mobile-footer__number",
                            children: [(0, i.jsx)("div", {
                                className: "text-17 fw-500 text-dark-1",
                                children: "Call us"
                            }), (0, i.jsx)("div", {
                                className: "text-17 fw-500 text-purple-1",
                                children: "800 388 80 90"
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "lh-2 mt-10",
                            children: [(0, i.jsxs)("div", {
                                children: ["329 Queensberry Street,", (0, i.jsx)("br", {}), " North Melbourne VIC 3051, Australia."]
                            }), (0, i.jsx)("div", {
                                children: "hi@educrat.com"
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "mobile-socials mt-10",
                            children: [(0, i.jsx)(n(), {
                                href: "#",
                                className: "d-flex items-center justify-center rounded-full size-40",
                                children: (0, i.jsx)("i", {
                                    className: "fa fa-facebook"
                                })
                            }), (0, i.jsx)(n(), {
                                href: "#",
                                className: "d-flex items-center justify-center rounded-full size-40",
                                children: (0, i.jsx)("i", {
                                    className: "fa fa-twitter"
                                })
                            }), (0, i.jsx)(n(), {
                                href: "#",
                                className: "d-flex items-center justify-center rounded-full size-40",
                                children: (0, i.jsx)("i", {
                                    className: "fa fa-instagram"
                                })
                            }), (0, i.jsx)(n(), {
                                href: "#",
                                className: "d-flex items-center justify-center rounded-full size-40",
                                children: (0, i.jsx)("i", {
                                    className: "fa fa-linkedin"
                                })
                            })]
                        })]
                    })
                })
            }
        },
        51469: function(e, s, l) {
            l.d(s, {
                Z: function() {
                    return d
                }
            });
            var i = l(9268),
                a = l(74316),
                n = l(63513),
                c = l(35846),
                t = l.n(c);
            l(76394);
            var r = l(86006),
                h = l(56008);

            function d(e) {
                let {
                    setActiveMobileMenu: s,
                    activeMobileMenu: l
                } = e, [c, d] = (0, r.useState)(!1), [m, x] = (0, r.useState)([]), [u, o] = (0, r.useState)(""), [j, v] = (0, r.useState)("");
                (0, r.useEffect)(() => {
                    n.s.forEach(e => {
                        var s;
                        null == e || null === (s = e.links) || void 0 === s || s.forEach(s => {
                            var l, i;
                            (null === (l = s.href) || void 0 === l ? void 0 : l.split("/")[1]) == (null == f ? void 0 : f.split("/")[1]) ? o(e.title): null == s || null === (i = s.links) || void 0 === i || i.map(l => {
                                var i;
                                (null === (i = l.href) || void 0 === i ? void 0 : i.split("/")[1]) == (null == f ? void 0 : f.split("/")[1]) && (o(e.title), v(s.title))
                            })
                        })
                    })
                }, []), (0, r.useEffect)(() => {
                    d(!0)
                }, []);
                let f = (0, h.usePathname)();
                return (0, i.jsxs)("div", {
                    className: "header-menu js-mobile-menu-toggle ".concat(l ? "-is-el-visible" : ""),
                    children: [(0, i.jsxs)("div", {
                        className: "header-menu__content",
                        children: [(0, i.jsx)("div", {
                            className: "mobile-bg js-mobile-bg"
                        }), (0, i.jsxs)("div", {
                            className: "d-none xl:d-flex items-center px-20 py-20 border-bottom-light",
                            children: [(0, i.jsx)(t(), {
                                href: "/login",
                                className: "text-dark-1 ".concat("/login" == f ? "activeMenu" : "inActiveMenu", " "),
                                children: "Log in"
                            }), (0, i.jsx)(t(), {
                                href: "/signup",
                                className: "text-dark-1 ml-30 ".concat("/signup" == f ? "activeMenu" : "inActiveMenu", " "),
                                children: "Sign Up"
                            })]
                        }), c && l && (0, i.jsx)("div", {
                            className: "mobileMenu text-dark-1",
                            children: n.s.map((e, s) => {
                                if (e.title) return (0, i.jsxs)("div", {
                                    className: "submenuOne",
                                    children: [(0, i.jsxs)("div", {
                                        className: "title",
                                        onClick: () => x(s => s[0] == e.title ? [] : [e.title]),
                                        children: [(0, i.jsx)("span", {
                                            className: e.title == u ? "activeMenu" : "inActiveMenu",
                                            children: e.title
                                        }), (0, i.jsx)("i", {
                                            className: m[0] == e.title ? "icon-chevron-right text-13 ml-10 active" : "icon-chevron-right text-13 ml-10"
                                        })]
                                    }), e.links && e.links.map((l, a) => {
                                        var n;
                                        return (0, i.jsxs)("div", {
                                            className: m[0] == e.title ? "toggle active" : "toggle",
                                            children: [l.href && (0, i.jsx)(t(), {
                                                className: (null == f ? void 0 : f.split("/")[1]) == (null === (n = l.href) || void 0 === n ? void 0 : n.split("/")[1]) ? "activeMenu link" : "link inActiveMenu",
                                                href: l.href,
                                                children: l.label
                                            }, s), l.links && (0, i.jsxs)("div", {
                                                className: "submenuTwo",
                                                children: [(0, i.jsxs)("div", {
                                                    className: "title",
                                                    onClick: () => x(e => e[1] == l.title ? [e[0]] : [e[0], l.title]),
                                                    children: [(0, i.jsx)("span", {
                                                        className: l.title == j ? "activeMenu" : "inActiveMenu",
                                                        children: l.title && l.title
                                                    }), (0, i.jsx)("i", {
                                                        className: m[1] == l.title ? "icon-chevron-right text-13 ml-10 active" : "icon-chevron-right text-13 ml-10"
                                                    })]
                                                }), (0, i.jsx)("div", {
                                                    className: m[1] == l.title ? "toggle active" : "toggle",
                                                    children: l.links && l.links.map((e, s) => {
                                                        var l;
                                                        return (0, i.jsx)(t(), {
                                                            className: (null == f ? void 0 : f.split("/")[1]) == (null === (l = e.href) || void 0 === l ? void 0 : l.split("/")[1]) ? "activeMenu link" : "link inActiveMenu",
                                                            href: e.href,
                                                            children: e.label
                                                        }, s)
                                                    })
                                                })]
                                            })]
                                        }, a)
                                    })]
                                }, s)
                            })
                        }), (0, i.jsx)(a.Z, {})]
                    }), (0, i.jsx)("div", {
                        className: "header-menu-close",
                        onClick: () => {
                            s(!1)
                        },
                        "data-el-toggle": ".js-mobile-menu-toggle",
                        children: (0, i.jsx)("div", {
                            className: "size-40 d-flex items-center justify-center rounded-full bg-white",
                            children: (0, i.jsx)("div", {
                                className: "icon-close text-dark-1 text-16"
                            })
                        })
                    }), (0, i.jsx)("div", {
                        className: "header-menu-bg",
                        onClick: () => s(!1)
                    })]
                })
            }
        }
    }
]);