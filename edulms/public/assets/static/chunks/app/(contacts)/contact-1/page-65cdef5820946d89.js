(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7041], {
        90861: function(e, s, i) {
            Promise.resolve().then(i.t.bind(i, 8920, 23)), Promise.resolve().then(i.bind(i, 1311)), Promise.resolve().then(i.bind(i, 14747)), Promise.resolve().then(i.bind(i, 55980)), Promise.resolve().then(i.bind(i, 67542)), Promise.resolve().then(i.bind(i, 6052))
        },
        67542: function(e, s, i) {
            "use strict";
            i.r(s), i.d(s, {
                default: function() {
                    return r
                }
            });
            var t = i(9268),
                a = i(86006);
            let n = [{
                id: 1,
                question: "Do you offer discounts for students?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
            }, {
                id: 2,
                question: "Do you offer special pricing for big teams?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
            }, {
                id: 3,
                question: "What is the past experience of your teachers?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
            }, {
                id: 4,
                question: "What is the course refund policy?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
            }, {
                id: 5,
                question: "Do you offer discounts for non-profits?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
            }];
            var l = i(10009),
                c = i(13936);

            function r() {
                let [e, s] = (0, a.useState)(0);
                return (0, t.jsx)("section", {
                    className: "layout-pt-lg layout-pb-lg bg-light-4",
                    children: (0, t.jsx)("div", {
                        className: "container",
                        children: (0, t.jsx)("div", {
                            className: "row justify-center text-center",
                            children: (0, t.jsxs)("div", {
                                className: "col-xl-8 col-lg-9 col-md-11",
                                children: [(0, t.jsxs)("div", {
                                    className: "sectionTitle ",
                                    children: [(0, t.jsx)("h2", {
                                        className: "sectionTitle__title ",
                                        children: "Frequently Asked Questions."
                                    }), (0, t.jsx)("p", {
                                        className: "sectionTitle__text ",
                                        children: "Ut enim ad minim veniam, quis nostrud exercitation ullamco"
                                    })]
                                }), (0, t.jsx)("div", {
                                    className: "accordion -block text-left pt-60 lg:pt-40 js-accordion",
                                    children: n.map((i, a) => (0, t.jsxs)("div", {
                                        onClick: () => s(e => e == i.id ? 0 : i.id),
                                        className: "accordion__item  ".concat(e == i.id ? "is-active" : ""),
                                        children: [(0, t.jsxs)("div", {
                                            className: "accordion__button",
                                            children: [(0, t.jsxs)("div", {
                                                className: "accordion__icon",
                                                children: [(0, t.jsx)("div", {
                                                    style: {
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center"
                                                    },
                                                    className: "icon",
                                                    "data-feather": "plus",
                                                    children: (0, t.jsx)(c.G, {
                                                        icon: l.r8p
                                                    })
                                                }), (0, t.jsx)("div", {
                                                    style: {
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center"
                                                    },
                                                    className: "icon",
                                                    "data-feather": "minus",
                                                    children: (0, t.jsx)(c.G, {
                                                        icon: l.Kl4
                                                    })
                                                })]
                                            }), (0, t.jsx)("span", {
                                                className: "text-17 fw-500 text-dark-1",
                                                children: i.question
                                            })]
                                        }), (0, t.jsx)("div", {
                                            style: e == i.id ? {
                                                maxHeight: "139px"
                                            } : {},
                                            className: "accordion__content",
                                            children: (0, t.jsx)("div", {
                                                className: "accordion__content__inner",
                                                children: (0, t.jsx)("p", {
                                                    children: i.answer
                                                })
                                            })
                                        })]
                                    }, a))
                                })]
                            })
                        })
                    })
                })
            }
        },
        6052: function(e, s, i) {
            "use strict";
            i.r(s), i.d(s, {
                default: function() {
                    return m
                }
            });
            var t = i(9268),
                a = i(86006),
                n = i(76394),
                l = i.n(n);
            let c = [{
                id: 1,
                icon: "/assets/img/contact-1/1.svg",
                address: "328 Queensberry Street, North Melbourne VIC 3051, Australia."
            }, {
                id: 2,
                icon: "/assets/img/contact-1/2.svg",
                phoneNumber: "+(1) 123 456 7890"
            }, {
                id: 3,
                icon: "/assets/img/contact-1/3.svg",
                email: "hi@educrat.com"
            }];
            var r = i(81301),
                o = i.n(r);
            let d = o()(() => Promise.all([i.e(2590), i.e(7207)]).then(i.bind(i, 47207)), {
                loadableGenerated: {
                    webpack: () => [47207]
                },
                ssr: !1
            });

            function m() {
                let [e, s] = (0, a.useState)(!1);
                return (0, a.useEffect)(() => {
                    s(!0)
                }, []), (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)("section", {
                        className: "",
                        children: e && (0, t.jsx)(d, {})
                    }), (0, t.jsx)("section", {
                        className: "layout-pt-md layout-pb-lg",
                        children: (0, t.jsx)("div", {
                            className: "container",
                            children: (0, t.jsxs)("div", {
                                className: "row y-gap-50 justify-between",
                                children: [(0, t.jsxs)("div", {
                                    className: "col-lg-4",
                                    children: [(0, t.jsx)("h3", {
                                        className: "text-24 fw-500",
                                        children: "Keep In Touch With Us."
                                    }), (0, t.jsx)("p", {
                                        className: "mt-25",
                                        children: "Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis."
                                    }), (0, t.jsx)("div", {
                                        className: "y-gap-30 pt-60 lg:pt-40",
                                        children: c.map((e, s) => (0, t.jsxs)("div", {
                                            className: "d-flex items-center",
                                            children: [(0, t.jsx)("div", {
                                                className: "d-flex justify-center items-center size-60 rounded-full bg-light-7",
                                                children: (0, t.jsx)(l(), {
                                                    width: 30,
                                                    height: 30,
                                                    src: e.icon,
                                                    alt: "icon"
                                                })
                                            }), (0, t.jsx)("div", {
                                                className: "ml-20",
                                                children: e.address ? "".concat(e.address.split(" ").slice(0, 4).join(" "), " \n ").concat(e.address.split(" ").slice(4, -1).join(" ")) : e.email || e.phoneNumber
                                            })]
                                        }, s))
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "col-lg-7",
                                    children: [(0, t.jsx)("h3", {
                                        className: "text-24 fw-500",
                                        children: "Send a Message."
                                    }), (0, t.jsxs)("p", {
                                        className: "mt-25",
                                        children: ["Neque convallis a cras semper auctor. Libero id faucibus nisl", (0, t.jsx)("br", {}), " tincidunt egetnvallis."]
                                    }), (0, t.jsxs)("form", {
                                        className: "contact-form row y-gap-30 pt-60 lg:pt-40",
                                        onSubmit: e => {
                                            e.preventDefault()
                                        },
                                        children: [(0, t.jsxs)("div", {
                                            className: "col-md-6",
                                            children: [(0, t.jsx)("label", {
                                                className: "text-16 lh-1 fw-500 text-dark-1 mb-10",
                                                children: "Name"
                                            }), (0, t.jsx)("input", {
                                                required: !0,
                                                type: "text",
                                                name: "title",
                                                placeholder: "Name..."
                                            })]
                                        }), (0, t.jsxs)("div", {
                                            className: "col-md-6",
                                            children: [(0, t.jsx)("label", {
                                                className: "text-16 lh-1 fw-500 text-dark-1 mb-10",
                                                children: "Email Address"
                                            }), (0, t.jsx)("input", {
                                                required: !0,
                                                type: "text",
                                                name: "title",
                                                placeholder: "Email..."
                                            })]
                                        }), (0, t.jsxs)("div", {
                                            className: "col-12",
                                            children: [(0, t.jsx)("label", {
                                                className: "text-16 lh-1 fw-500 text-dark-1 mb-10",
                                                children: "Message..."
                                            }), (0, t.jsx)("textarea", {
                                                required: !0,
                                                name: "comment",
                                                placeholder: "Message",
                                                rows: "8"
                                            })]
                                        }), (0, t.jsx)("div", {
                                            className: "col-12",
                                            children: (0, t.jsx)("button", {
                                                type: "submit",
                                                name: "submit",
                                                id: "submit",
                                                className: "button -md -purple-1 text-white",
                                                children: "Send Message"
                                            })
                                        })]
                                    })]
                                })]
                            })
                        })
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [8957, 8201, 1410, 5401, 1840, 5127, 4240, 4119, 7102, 9253, 6488, 1744], function() {
            return e(e.s = 90861)
        }), _N_E = e.O()
    }
]);