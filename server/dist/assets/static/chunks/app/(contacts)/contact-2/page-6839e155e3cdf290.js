(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6296], {
        13936: function(e, t, r) {
            "use strict";
            r.d(t, {
                G: function() {
                    return x
                }
            });
            var n = r(61410),
                i = r(34390),
                s = r.n(i),
                a = r(86006);

            function o(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(r), !0).forEach(function(t) {
                        u(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function c(e) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function u(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function d(e) {
                return function(e) {
                    if (Array.isArray(e)) return m(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return m(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return m(e, t)
                    }
                }(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function f(e) {
                var t;
                return (t = e - 0) == t ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(e, t) {
                    return t ? t.toUpperCase() : ""
                })).substr(0, 1).toLowerCase() + e.substr(1)
            }
            var p = ["style"],
                b = !1;
            try {
                b = !0
            } catch (e) {}

            function h(e) {
                return e && "object" === c(e) && e.prefix && e.iconName && e.icon ? e : n.Qc.icon ? n.Qc.icon(e) : null === e ? null : e && "object" === c(e) && e.prefix && e.iconName ? e : Array.isArray(e) && 2 === e.length ? {
                    prefix: e[0],
                    iconName: e[1]
                } : "string" == typeof e ? {
                    prefix: "fas",
                    iconName: e
                } : void 0
            }

            function y(e, t) {
                return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? u({}, e, t) : {}
            }
            var x = a.forwardRef(function(e, t) {
                var r, i, s, a, o, c, m, f, p, j, g, N, O, w, k, _, P, I, S, q = e.icon,
                    A = e.mask,
                    C = e.symbol,
                    T = e.className,
                    E = e.title,
                    L = e.titleId,
                    U = e.maskId,
                    D = h(q),
                    W = y("classes", [].concat(d((i = e.beat, s = e.fade, a = e.beatFade, o = e.bounce, c = e.shake, m = e.flash, f = e.spin, p = e.spinPulse, j = e.spinReverse, g = e.pulse, N = e.fixedWidth, O = e.inverse, w = e.border, k = e.listItem, _ = e.flip, P = e.size, I = e.rotation, S = e.pull, u(r = {
                        "fa-beat": i,
                        "fa-fade": s,
                        "fa-beat-fade": a,
                        "fa-bounce": o,
                        "fa-shake": c,
                        "fa-flash": m,
                        "fa-spin": f,
                        "fa-spin-reverse": j,
                        "fa-spin-pulse": p,
                        "fa-pulse": g,
                        "fa-fw": N,
                        "fa-inverse": O,
                        "fa-border": w,
                        "fa-li": k,
                        "fa-flip": !0 === _,
                        "fa-flip-horizontal": "horizontal" === _ || "both" === _,
                        "fa-flip-vertical": "vertical" === _ || "both" === _
                    }, "fa-".concat(P), null != P), u(r, "fa-rotate-".concat(I), null != I && 0 !== I), u(r, "fa-pull-".concat(S), null != S), u(r, "fa-swap-opacity", e.swapOpacity), Object.keys(r).map(function(e) {
                        return r[e] ? e : null
                    }).filter(function(e) {
                        return e
                    }))), d(T.split(" ")))),
                    R = y("transform", "string" == typeof e.transform ? n.Qc.transform(e.transform) : e.transform),
                    M = y("mask", h(A)),
                    F = (0, n.qv)(D, l(l(l(l({}, W), R), M), {}, {
                        symbol: C,
                        title: E,
                        titleId: L,
                        maskId: U
                    }));
                if (!F) return ! function() {
                    if (!b && console && "function" == typeof console.error) {
                        var e;
                        (e = console).error.apply(e, arguments)
                    }
                }("Could not find icon", D), null;
                var Q = F.abstract,
                    z = {
                        ref: t
                    };
                return Object.keys(e).forEach(function(t) {
                    x.defaultProps.hasOwnProperty(t) || (z[t] = e[t])
                }), v(Q[0], z)
            });
            x.displayName = "FontAwesomeIcon", x.propTypes = {
                beat: s().bool,
                border: s().bool,
                beatFade: s().bool,
                bounce: s().bool,
                className: s().string,
                fade: s().bool,
                flash: s().bool,
                mask: s().oneOfType([s().object, s().array, s().string]),
                maskId: s().string,
                fixedWidth: s().bool,
                inverse: s().bool,
                flip: s().oneOf([!0, !1, "horizontal", "vertical", "both"]),
                icon: s().oneOfType([s().object, s().array, s().string]),
                listItem: s().bool,
                pull: s().oneOf(["right", "left"]),
                pulse: s().bool,
                rotation: s().oneOf([0, 90, 180, 270]),
                shake: s().bool,
                size: s().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
                spin: s().bool,
                spinPulse: s().bool,
                spinReverse: s().bool,
                symbol: s().oneOfType([s().bool, s().string]),
                title: s().string,
                titleId: s().string,
                transform: s().oneOfType([s().string, s().object]),
                swapOpacity: s().bool
            }, x.defaultProps = {
                border: !1,
                className: "",
                mask: null,
                maskId: null,
                fixedWidth: !1,
                inverse: !1,
                flip: !1,
                icon: null,
                listItem: !1,
                pull: null,
                pulse: !1,
                rotation: null,
                size: null,
                spin: !1,
                spinPulse: !1,
                spinReverse: !1,
                beat: !1,
                fade: !1,
                beatFade: !1,
                bounce: !1,
                shake: !1,
                symbol: !1,
                title: "",
                titleId: null,
                transform: null,
                swapOpacity: !1
            };
            var v = (function e(t, r) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if ("string" == typeof r) return r;
                var i = (r.children || []).map(function(r) {
                        return e(t, r)
                    }),
                    s = Object.keys(r.attributes || {}).reduce(function(e, t) {
                        var n = r.attributes[t];
                        switch (t) {
                            case "class":
                                e.attrs.className = n, delete r.attributes.class;
                                break;
                            case "style":
                                e.attrs.style = n.split(";").map(function(e) {
                                    return e.trim()
                                }).filter(function(e) {
                                    return e
                                }).reduce(function(e, t) {
                                    var r = t.indexOf(":"),
                                        n = f(t.slice(0, r)),
                                        i = t.slice(r + 1).trim();
                                    return n.startsWith("webkit") ? e[n.charAt(0).toUpperCase() + n.slice(1)] = i : e[n] = i, e
                                }, {});
                                break;
                            default:
                                0 === t.indexOf("aria-") || 0 === t.indexOf("data-") ? e.attrs[t.toLowerCase()] = n : e.attrs[f(t)] = n
                        }
                        return e
                    }, {
                        attrs: {}
                    }),
                    a = n.style,
                    o = void 0 === a ? {} : a,
                    c = function(e, t) {
                        if (null == e) return {};
                        var r, n, i = function(e, t) {
                            if (null == e) return {};
                            var r, n, i = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                            return i
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var s = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < s.length; n++) r = s[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                        }
                        return i
                    }(n, p);
                return s.attrs.style = l(l({}, s.attrs.style), o), t.apply(void 0, [r.tag, l(l({}, s.attrs), c)].concat(d(i)))
            }).bind(null, a.createElement)
        },
        83639: function(e, t, r) {
            "use strict";
            var n = r(13836);

            function i() {}

            function s() {}
            s.resetWarningCache = i, e.exports = function() {
                function e(e, t, r, i, s, a) {
                    if (a !== n) {
                        var o = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw o.name = "Invariant Violation", o
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var r = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: s,
                    resetWarningCache: i
                };
                return r.PropTypes = r, r
            }
        },
        34390: function(e, t, r) {
            e.exports = r(83639)()
        },
        13836: function(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        38396: function(e, t, r) {
            Promise.resolve().then(r.bind(r, 1311)), Promise.resolve().then(r.bind(r, 14747)), Promise.resolve().then(r.bind(r, 55980)), Promise.resolve().then(r.bind(r, 67542)), Promise.resolve().then(r.bind(r, 41760))
        },
        67542: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var n = r(9268),
                i = r(86006);
            let s = [{
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
            var a = r(10009),
                o = r(13936);

            function l() {
                let [e, t] = (0, i.useState)(0);
                return (0, n.jsx)("section", {
                    className: "layout-pt-lg layout-pb-lg bg-light-4",
                    children: (0, n.jsx)("div", {
                        className: "container",
                        children: (0, n.jsx)("div", {
                            className: "row justify-center text-center",
                            children: (0, n.jsxs)("div", {
                                className: "col-xl-8 col-lg-9 col-md-11",
                                children: [(0, n.jsxs)("div", {
                                    className: "sectionTitle ",
                                    children: [(0, n.jsx)("h2", {
                                        className: "sectionTitle__title ",
                                        children: "Frequently Asked Questions."
                                    }), (0, n.jsx)("p", {
                                        className: "sectionTitle__text ",
                                        children: "Ut enim ad minim veniam, quis nostrud exercitation ullamco"
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "accordion -block text-left pt-60 lg:pt-40 js-accordion",
                                    children: s.map((r, i) => (0, n.jsxs)("div", {
                                        onClick: () => t(e => e == r.id ? 0 : r.id),
                                        className: "accordion__item  ".concat(e == r.id ? "is-active" : ""),
                                        children: [(0, n.jsxs)("div", {
                                            className: "accordion__button",
                                            children: [(0, n.jsxs)("div", {
                                                className: "accordion__icon",
                                                children: [(0, n.jsx)("div", {
                                                    style: {
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center"
                                                    },
                                                    className: "icon",
                                                    "data-feather": "plus",
                                                    children: (0, n.jsx)(o.G, {
                                                        icon: a.r8p
                                                    })
                                                }), (0, n.jsx)("div", {
                                                    style: {
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center"
                                                    },
                                                    className: "icon",
                                                    "data-feather": "minus",
                                                    children: (0, n.jsx)(o.G, {
                                                        icon: a.Kl4
                                                    })
                                                })]
                                            }), (0, n.jsx)("span", {
                                                className: "text-17 fw-500 text-dark-1",
                                                children: r.question
                                            })]
                                        }), (0, n.jsx)("div", {
                                            style: e == r.id ? {
                                                maxHeight: "139px"
                                            } : {},
                                            className: "accordion__content",
                                            children: (0, n.jsx)("div", {
                                                className: "accordion__content__inner",
                                                children: (0, n.jsx)("p", {
                                                    children: r.answer
                                                })
                                            })
                                        })]
                                    }, i))
                                })]
                            })
                        })
                    })
                })
            }
        },
        41760: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return s
                }
            });
            var n = r(9268);
            r(86006);
            let i = [{
                id: 1,
                location: "London",
                address: "328 Queensberry Street, North Melbourne VIC 3051, Australia.",
                phoneNumber: "+(1) 123 456 7890",
                email: "hi@educrat.com"
            }, {
                id: 2,
                location: "Paris",
                address: "328 Queensberry Street, North Melbourne VIC 3051, Australia.",
                phoneNumber: "+(1) 123 456 7890",
                email: "hi@educrat.com"
            }, {
                id: 3,
                location: "Los Angeles",
                address: "328 Queensberry Street, North Melbourne VIC 3051, Australia.",
                phoneNumber: "+(1) 123 456 7890",
                email: "hi@educrat.com"
            }];

            function s() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("section", {
                        className: "page-header -type-4 bg-beige-1",
                        children: (0, n.jsx)("div", {
                            className: "container",
                            children: (0, n.jsx)("div", {
                                className: "page-header__content",
                                children: (0, n.jsx)("div", {
                                    className: "row",
                                    children: (0, n.jsxs)("div", {
                                        className: "col-auto",
                                        children: [(0, n.jsx)("div", {
                                            children: (0, n.jsx)("h1", {
                                                className: "page-header__title",
                                                children: "Contact Us"
                                            })
                                        }), (0, n.jsx)("div", {
                                            children: (0, n.jsxs)("p", {
                                                className: "page-header__text",
                                                children: ["We’re on a mission to deliver engaging, curated", (0, n.jsx)("br", {}), " courses at a reasonable price."]
                                            })
                                        })]
                                    })
                                })
                            })
                        })
                    }), (0, n.jsx)("section", {
                        className: "layout-pt-md layout-pb-lg",
                        children: (0, n.jsx)("div", {
                            className: "container",
                            children: (0, n.jsxs)("div", {
                                className: "row y-gap-50 justify-between",
                                children: [(0, n.jsxs)("div", {
                                    className: "col-xl-5 col-lg-6",
                                    children: [(0, n.jsx)("h3", {
                                        className: "text-24 lh-1 fw-500",
                                        children: "Our offices"
                                    }), (0, n.jsx)("div", {
                                        className: "row y-gap-30 pt-40",
                                        children: i.map((e, t) => (0, n.jsxs)("div", {
                                            className: "col-sm-6",
                                            children: [(0, n.jsx)("div", {
                                                className: "text-20 fw-500 text-dark-1",
                                                children: e.location
                                            }), (0, n.jsxs)("div", {
                                                className: "y-gap-10 pt-15",
                                                children: [(0, n.jsx)("a", {
                                                    href: "#",
                                                    className: "d-block",
                                                    children: e.address
                                                }), (0, n.jsx)("a", {
                                                    href: "#",
                                                    className: "d-block",
                                                    children: e.phoneNumber
                                                }), (0, n.jsx)("a", {
                                                    href: "#",
                                                    className: "d-block",
                                                    children: e.email
                                                })]
                                            })]
                                        }, t))
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "col-lg-6",
                                    children: (0, n.jsxs)("div", {
                                        className: "px-40 py-40 bg-white border-light shadow-1 rounded-8 contact-form-to-top",
                                        children: [(0, n.jsx)("h3", {
                                            className: "text-24 fw-500",
                                            children: "Send a Message"
                                        }), (0, n.jsxs)("p", {
                                            className: "mt-25",
                                            children: ["Neque convallis a cras semper auctor. Libero id faucibus nisl", (0, n.jsx)("br", {}), " tincidunt egetnvallis."]
                                        }), (0, n.jsxs)("form", {
                                            className: "contact-form row y-gap-30 pt-60 lg:pt-40",
                                            onSubmit: e => {
                                                e.preventDefault()
                                            },
                                            children: [(0, n.jsxs)("div", {
                                                className: "col-12",
                                                children: [(0, n.jsx)("label", {
                                                    className: "text-16 lh-1 fw-500 text-dark-1 mb-10",
                                                    children: "Name"
                                                }), (0, n.jsx)("input", {
                                                    required: !0,
                                                    type: "text",
                                                    name: "title",
                                                    placeholder: "Name..."
                                                })]
                                            }), (0, n.jsxs)("div", {
                                                className: "col-12",
                                                children: [(0, n.jsx)("label", {
                                                    className: "text-16 lh-1 fw-500 text-dark-1 mb-10",
                                                    children: "Email Address"
                                                }), (0, n.jsx)("input", {
                                                    required: !0,
                                                    type: "text",
                                                    name: "title",
                                                    placeholder: "Email..."
                                                })]
                                            }), (0, n.jsxs)("div", {
                                                className: "col-12",
                                                children: [(0, n.jsx)("label", {
                                                    className: "text-16 lh-1 fw-500 text-dark-1 mb-10",
                                                    children: "Message..."
                                                }), (0, n.jsx)("textarea", {
                                                    name: "comment",
                                                    placeholder: "Message",
                                                    rows: "8",
                                                    required: !0
                                                })]
                                            }), (0, n.jsx)("div", {
                                                className: "col-12",
                                                children: (0, n.jsx)("button", {
                                                    type: "submit",
                                                    name: "submit",
                                                    id: "submit",
                                                    className: "button -md -purple-1 text-white",
                                                    children: "Send Message"
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })
                    })]
                })
            }
        },
        56008: function(e, t, r) {
            e.exports = r(93027)
        }
    },
    function(e) {
        e.O(0, [8957, 8201, 1410, 1840, 5127, 4240, 4119, 7102, 9253, 6488, 1744], function() {
            return e(e.s = 38396)
        }), _N_E = e.O()
    }
]);