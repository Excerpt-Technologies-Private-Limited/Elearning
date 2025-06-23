(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8690], {
        45747: function(e, s, t) {
            Promise.resolve().then(t.bind(t, 5032)), Promise.resolve().then(t.t.bind(t, 8920, 23)), Promise.resolve().then(t.bind(t, 1311)), Promise.resolve().then(t.bind(t, 36821)), Promise.resolve().then(t.bind(t, 14747)), Promise.resolve().then(t.bind(t, 55980))
        },
        5032: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return l
                }
            });
            var i = t(9268),
                c = t(76394),
                r = t.n(c);
            let a = ["/assets/img/clients/1.svg", "/assets/img/clients/2.svg", "/assets/img/clients/3.svg", "/assets/img/clients/4.svg", "/assets/img/clients/5.svg", "/assets/img/clients/6.svg"];
            var l = e => {
                let {
                    backgroundColorComponent: s,
                    brandsTwo: t
                } = e;
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)("section", {
                        className: " ".concat(t ? "layout-pt-md" : "layout-pt-lg", "  layout-pb-md  ").concat(s || "", " "),
                        children: (0, i.jsxs)("div", {
                            className: "container",
                            children: [(0, i.jsx)("div", {
                                className: "row justify-center",
                                children: (0, i.jsx)("div", {
                                    className: "col text-center",
                                    children: (0, i.jsx)("p", {
                                        className: "text-lg text-dark-1",
                                        children: "Trusted by the world’s best"
                                    })
                                })
                            }), (0, i.jsx)("div", {
                                className: "row y-gap-30 justify-between sm:justify-start items-center pt-60 md:pt-50",
                                children: a.map((e, s) => (0, i.jsx)("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "300",
                                    className: "col-lg-auto col-md-3 col-sm-4 col-6",
                                    children: (0, i.jsx)("div", {
                                        className: "d-flex justify-center items-center px-4",
                                        children: (0, i.jsx)(r(), {
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
        36821: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return p
                }
            });
            var i = t(9268),
                c = t(76394),
                r = t.n(c),
                a = t(86006),
                l = t(88371),
                n = t(35846),
                d = t.n(n);

            function p() {
                let [e, s] = (0, a.useState)(!1);
                return (0, i.jsx)("section", {
                    className: "layout-pt-lg layout-pb-md",
                    children: (0, i.jsxs)("div", {
                        className: "container",
                        children: [(0, i.jsx)("div", {
                            className: "row justify-center text-center",
                            children: (0, i.jsxs)("div", {
                                className: "col-auto",
                                children: [(0, i.jsxs)("div", {
                                    className: "sectionTitle ",
                                    children: [(0, i.jsx)("h2", {
                                        className: "sectionTitle__title ",
                                        children: "Simple Pricing"
                                    }), (0, i.jsx)("p", {
                                        className: "sectionTitle__text ",
                                        children: "Lorem ipsum dolor sit amet, consectetur."
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "d-flex justify-center items-center pt-60 lg:pt-40",
                                    children: [(0, i.jsx)("div", {
                                        className: "text-14 text-dark-1",
                                        children: "Monthly"
                                    }), (0, i.jsx)("div", {
                                        className: "form-switch px-20",
                                        children: (0, i.jsxs)("div", {
                                            className: "switch",
                                            "data-switch": ".js-switch-content",
                                            children: [(0, i.jsx)("input", {
                                                checked: e,
                                                onChange: e => {
                                                    s(e.target.checked)
                                                },
                                                type: "checkbox"
                                            }), (0, i.jsx)("span", {
                                                className: "switch__slider"
                                            })]
                                        })
                                    }), (0, i.jsxs)("div", {
                                        className: "text-14 text-dark-1",
                                        children: ["Annually ", (0, i.jsx)("span", {
                                            className: "text-purple-1",
                                            children: "Save 30%"
                                        })]
                                    })]
                                })]
                            })
                        }), (0, i.jsxs)("div", {
                            className: "row y-gap-30 justify-between pt-60 lg:pt-40",
                            children: [(0, i.jsx)("div", {
                                className: "col-lg-4 col-md-6",
                                children: (0, i.jsx)("div", {
                                    className: "priceCard -type-1 rounded-16 bg-white shadow-2",
                                    children: (0, i.jsxs)("div", {
                                        className: "priceCard__content py-45 px-60 xl:px-40 text-center",
                                        children: [(0, i.jsx)("div", {
                                            className: "priceCard__type text-18 lh-11 fw-500 text-dark-1",
                                            children: l.n[0].type
                                        }), (0, i.jsx)("div", {
                                            className: "priceCard__price text-45 lh-11 fw-700 text-dark-1 mt-15",
                                            children: l.n[0].price ? l.n[0].price : "Free"
                                        }), (0, i.jsx)("div", {
                                            className: "priceCard__period",
                                            children: l.n[0].period
                                        }), (0, i.jsx)(r(), {
                                            width: 90,
                                            height: 90,
                                            className: "mt-30",
                                            src: "/assets/img/pricing/1.svg",
                                            alt: "icon"
                                        }), (0, i.jsx)("div", {
                                            className: "priceCard__text text-left pr-15 mt-40",
                                            children: "Standard listing submission, active for 30 dayss"
                                        }), (0, i.jsx)("div", {
                                            className: "text-left y-gap-15 mt-35",
                                            children: l.n[0].features.map((e, s) => (0, i.jsxs)("div", {
                                                children: [(0, i.jsx)("i", {
                                                    className: "text-purple-1 fa fa-check pr-8",
                                                    style: {
                                                        strokeWidth: 2
                                                    },
                                                    "data-feather": "check"
                                                }), e]
                                            }, s))
                                        }), (0, i.jsx)("div", {
                                            className: "d-inline-block mt-30",
                                            children: (0, i.jsx)(d(), {
                                                className: "button px-40 py-20 fw-500 -purple-3 text-purple-1",
                                                href: "/courses-list-1",
                                                children: "Get Started Now"
                                            })
                                        })]
                                    })
                                })
                            }), (0, i.jsx)("div", {
                                className: "col-lg-4 col-md-6",
                                children: (0, i.jsx)("div", {
                                    className: "priceCard -type-1 rounded-16 bg-white shadow-2",
                                    children: (0, i.jsxs)("div", {
                                        className: "priceCard__content py-45 px-60 xl:px-40 text-center",
                                        children: [(0, i.jsx)("div", {
                                            className: "priceCard__type text-18 lh-11 fw-500 text-dark-1",
                                            children: l.n[1].type
                                        }), (0, i.jsxs)("div", {
                                            className: "priceCard__price text-45 lh-11 fw-700 text-dark-1 mt-15",
                                            children: ["$", e ? (12 * l.n[1].price * .7).toFixed(2) : l.n[1].price]
                                        }), (0, i.jsx)("div", {
                                            className: "priceCard__period",
                                            children: e ? "per year" : l.n[1].period
                                        }), (0, i.jsx)(r(), {
                                            width: 90,
                                            height: 90,
                                            className: "mt-30",
                                            src: "/assets/img/pricing/2.svg",
                                            alt: "icon"
                                        }), (0, i.jsx)("div", {
                                            className: "priceCard__text text-left pr-15 mt-40",
                                            children: "Standard listing submission, active for 30 dayss"
                                        }), (0, i.jsx)("div", {
                                            className: "text-left y-gap-15 mt-35",
                                            children: l.n[1].features.map((e, s) => (0, i.jsxs)("div", {
                                                children: [(0, i.jsx)("i", {
                                                    className: "text-purple-1 fa fa-check pr-8",
                                                    style: {
                                                        strokeWidth: 2
                                                    },
                                                    "data-feather": "check"
                                                }), e]
                                            }, s))
                                        }), (0, i.jsx)("div", {
                                            className: "d-inline-block mt-30",
                                            children: (0, i.jsx)(d(), {
                                                className: "button px-40 py-20 fw-500 -purple-3 text-purple-1",
                                                href: "/courses-list-1",
                                                children: "Get Started Now"
                                            })
                                        })]
                                    })
                                })
                            }), (0, i.jsx)("div", {
                                className: "col-lg-4 col-md-6",
                                children: (0, i.jsx)("div", {
                                    className: "priceCard -type-1 rounded-16 bg-white shadow-2",
                                    children: (0, i.jsxs)("div", {
                                        className: "priceCard__content py-45 px-60 xl:px-40 text-center",
                                        children: [(0, i.jsx)("div", {
                                            className: "priceCard__type text-18 lh-11 fw-500 text-dark-1",
                                            children: l.n[2].type
                                        }), (0, i.jsxs)("div", {
                                            className: "priceCard__price text-45 lh-11 fw-700 text-dark-1 mt-15",
                                            children: ["$", e ? (12 * l.n[2].price * .7).toFixed(2) : l.n[2].price]
                                        }), (0, i.jsx)("div", {
                                            className: "priceCard__period",
                                            children: e ? "per year" : l.n[2].period
                                        }), (0, i.jsx)(r(), {
                                            width: 90,
                                            height: 90,
                                            className: "mt-30",
                                            src: "/assets/img/pricing/3.svg",
                                            alt: "icon"
                                        }), (0, i.jsx)("div", {
                                            className: "priceCard__text text-left pr-15 mt-40",
                                            children: "Standard listing submission, active for 30 dayss"
                                        }), (0, i.jsx)("div", {
                                            className: "text-left y-gap-15 mt-35",
                                            children: l.n[2].features.map((e, s) => (0, i.jsxs)("div", {
                                                children: [(0, i.jsx)("i", {
                                                    className: "text-purple-1 fa fa-check pr-8",
                                                    style: {
                                                        strokeWidth: 2
                                                    },
                                                    "data-feather": "check"
                                                }), e]
                                            }, s))
                                        }), (0, i.jsx)("div", {
                                            className: "d-inline-block mt-30",
                                            children: (0, i.jsx)(d(), {
                                                className: "button px-40 py-20 fw-500 -purple-3 text-purple-1",
                                                href: "/courses-list-1",
                                                children: "Get Started Now"
                                            })
                                        })]
                                    })
                                })
                            })]
                        })]
                    })
                })
            }
        },
        88371: function(e, s, t) {
            "use strict";
            t.d(s, {
                n: function() {
                    return i
                }
            });
            let i = [{
                type: "Basic",
                price: 0,
                period: "per month",
                features: ["All Operating Supported", "Great Interface", "Allows encryption", "Face recognized system", "24/7 Full support"]
            }, {
                type: "Professional",
                price: 599.95,
                period: "per month",
                features: ["All Operating Supported", "Great Interface", "Allows encryption", "Face recognized system", "24/7 Full support"]
            }, {
                type: "Business",
                price: 999.95,
                period: "per month",
                features: ["All Operating Supported", "Great Interface", "Allows encryption", "Face recognized system", "24/7 Full support"]
            }]
        },
        56008: function(e, s, t) {
            e.exports = t(93027)
        }
    },
    function(e) {
        e.O(0, [8201, 1840, 5127, 4240, 4119, 7102, 9253, 6488, 1744], function() {
            return e(e.s = 45747)
        }), _N_E = e.O()
    }
]);