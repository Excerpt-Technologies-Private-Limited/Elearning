(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6985], {
        4206: function(e, s, t) {
            Promise.resolve().then(t.t.bind(t, 28707, 23)), Promise.resolve().then(t.t.bind(t, 8920, 23)), Promise.resolve().then(t.bind(t, 1311)), Promise.resolve().then(t.bind(t, 45102)), Promise.resolve().then(t.bind(t, 14747)), Promise.resolve().then(t.bind(t, 55980))
        },
        81152: function(e, s, t) {
            "use strict";
            t.d(s, {
                Z: function() {
                    return n
                }
            });
            var a = t(9268);

            function n() {
                return (0, a.jsxs)("div", {
                    className: "pagination -buttons",
                    children: [(0, a.jsx)("button", {
                        className: "pagination__button -prev",
                        children: (0, a.jsx)("i", {
                            className: "icon icon-chevron-left"
                        })
                    }), (0, a.jsxs)("div", {
                        className: "pagination__count",
                        children: [(0, a.jsx)("a", {
                            href: "#",
                            children: "1"
                        }), (0, a.jsx)("a", {
                            className: "-count-is-active",
                            href: "#",
                            children: "2"
                        }), (0, a.jsx)("a", {
                            href: "#",
                            children: "3"
                        }), (0, a.jsx)("span", {
                            children: "..."
                        }), (0, a.jsx)("a", {
                            href: "#",
                            children: "67"
                        })]
                    }), (0, a.jsx)("button", {
                        className: "pagination__button -next",
                        children: (0, a.jsx)("i", {
                            className: "icon icon-chevron-right"
                        })
                    })]
                })
            }
            t(86006)
        },
        45102: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return h
                }
            });
            var a = t(9268),
                n = t(76394),
                i = t.n(n),
                c = t(86006),
                l = t(29707),
                r = t(81152),
                d = t(35846),
                o = t.n(d);

            function h() {
                let [e, s] = (0, c.useState)([]), [t, n] = (0, c.useState)("All Categories");
                return (0, c.useEffect)(() => {
                    "All Categories" == t ? s(l.U3) : s(l.U3.filter(e => e.category == t))
                }, [t]), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("section", {
                        className: "page-header -type-1",
                        children: (0, a.jsx)("div", {
                            className: "container",
                            children: (0, a.jsx)("div", {
                                className: "page-header__content",
                                children: (0, a.jsx)("div", {
                                    className: "row justify-center text-center",
                                    children: (0, a.jsxs)("div", {
                                        className: "col-auto",
                                        children: [(0, a.jsx)("div", {
                                            children: (0, a.jsx)("h1", {
                                                className: "page-header__title",
                                                children: "Event"
                                            })
                                        }), (0, a.jsx)("div", {
                                            children: (0, a.jsx)("p", {
                                                className: "page-header__text",
                                                children: "We’re on a mission to deliver engaging, curated courses at a reasonable price."
                                            })
                                        })]
                                    })
                                })
                            })
                        })
                    }), (0, a.jsx)("section", {
                        className: "layout-pt-md layout-pb-lg",
                        children: (0, a.jsx)("div", {
                            className: "container",
                            children: (0, a.jsxs)("div", {
                                className: "tabs -pills js-tabs",
                                children: [(0, a.jsx)("div", {
                                    className: "tabs__controls d-flex flex-wrap y-gap-20 justify-center x-gap-10 js-tabs-controls",
                                    children: l.bd.map((e, s) => (0, a.jsx)("div", {
                                        onClick: () => n(e),
                                        children: (0, a.jsx)("button", {
                                            className: "tabs__button px-15 py-8 rounded-8 js-tabs-button ".concat(t == e ? "is-active" : "", " "),
                                            "data-tab-target": ".-tab-item-1",
                                            type: "button",
                                            children: e
                                        })
                                    }, s))
                                }), (0, a.jsx)("div", {
                                    className: "tabs__content pt-40 js-tabs-content",
                                    children: (0, a.jsxs)("div", {
                                        className: "tabs__pane -tab-item-1 is-active",
                                        children: [(0, a.jsx)("div", {
                                            className: "row y-gap-30 pt-30",
                                            children: e.map((e, s) => (0, a.jsx)("div", {
                                                className: "col-lg-4 col-md-6",
                                                children: (0, a.jsxs)("div", {
                                                    className: "eventCard -type-1",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "eventCard__img",
                                                        children: (0, a.jsx)(i(), {
                                                            width: 510,
                                                            height: 360,
                                                            src: e.imgSrc,
                                                            alt: "image"
                                                        })
                                                    }), (0, a.jsx)("div", {
                                                        className: "eventCard__bg bg-white",
                                                        children: (0, a.jsxs)("div", {
                                                            className: "eventCard__content y-gap-10",
                                                            children: [(0, a.jsxs)("div", {
                                                                className: "eventCard__inner",
                                                                children: [(0, a.jsx)("h4", {
                                                                    className: "eventCard__title text-17 fw-500",
                                                                    children: (0, a.jsx)(o(), {
                                                                        className: "linkCustom",
                                                                        href: "/events/".concat(e.id),
                                                                        children: e.desc
                                                                    })
                                                                }), (0, a.jsxs)("div", {
                                                                    className: "d-flex x-gap-15 pt-10",
                                                                    children: [(0, a.jsxs)("div", {
                                                                        className: "d-flex items-center",
                                                                        children: [(0, a.jsx)("div", {
                                                                            className: "icon-calendar-2 text-16 mr-8"
                                                                        }), (0, a.jsx)("div", {
                                                                            className: "text-14",
                                                                            children: e.date
                                                                        })]
                                                                    }), (0, a.jsxs)("div", {
                                                                        className: "d-flex items-center",
                                                                        children: [(0, a.jsx)("div", {
                                                                            className: "icon-location text-16 mr-8"
                                                                        }), (0, a.jsx)("div", {
                                                                            className: "text-14",
                                                                            children: e.location
                                                                        })]
                                                                    })]
                                                                })]
                                                            }), (0, a.jsx)("div", {
                                                                className: "eventCard__button",
                                                                children: (0, a.jsx)(o(), {
                                                                    href: "/events/".concat(e.id),
                                                                    className: "button -sm -rounded -outline-purple-1 text-purple-1 px-25",
                                                                    children: "Buy"
                                                                })
                                                            })]
                                                        })
                                                    })]
                                                })
                                            }, s))
                                        }), (0, a.jsx)("div", {
                                            className: "row justify-center pt-60 lg:pt-40",
                                            children: (0, a.jsx)("div", {
                                                className: "col-auto",
                                                children: (0, a.jsx)(r.Z, {})
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
        e.O(0, [8201, 1840, 5127, 4240, 4119, 7102, 9253, 6488, 1744], function() {
            return e(e.s = 4206)
        }), _N_E = e.O()
    }
]);