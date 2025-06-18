(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3339], {
        13936: function(e, t, i) {
            "use strict";
            i.d(t, {
                G: function() {
                    return x
                }
            });
            var n = i(61410),
                r = i(34390),
                s = i.n(r),
                o = i(86006);

            function a(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), i.push.apply(i, n)
                }
                return i
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(i), !0).forEach(function(t) {
                        u(e, t, i[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : a(Object(i)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
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

            function u(e, t, i) {
                return t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }

            function d(e) {
                return function(e) {
                    if (Array.isArray(e)) return m(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return m(e, t);
                        var i = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i) return Array.from(e);
                        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return m(e, t)
                    }
                }(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, n = Array(t); i < t; i++) n[i] = e[i];
                return n
            }

            function p(e) {
                var t;
                return (t = e - 0) == t ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(e, t) {
                    return t ? t.toUpperCase() : ""
                })).substr(0, 1).toLowerCase() + e.substr(1)
            }
            var f = ["style"],
                h = !1;
            try {
                h = !0
            } catch (e) {}

            function b(e) {
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
            var x = o.forwardRef(function(e, t) {
                var i, r, s, o, a, c, m, p, f, v, j, O, N, w, _, k, P, q, I, S = e.icon,
                    T = e.mask,
                    A = e.symbol,
                    C = e.className,
                    E = e.title,
                    L = e.titleId,
                    U = e.maskId,
                    D = b(S),
                    R = y("classes", [].concat(d((r = e.beat, s = e.fade, o = e.beatFade, a = e.bounce, c = e.shake, m = e.flash, p = e.spin, f = e.spinPulse, v = e.spinReverse, j = e.pulse, O = e.fixedWidth, N = e.inverse, w = e.border, _ = e.listItem, k = e.flip, P = e.size, q = e.rotation, I = e.pull, u(i = {
                        "fa-beat": r,
                        "fa-fade": s,
                        "fa-beat-fade": o,
                        "fa-bounce": a,
                        "fa-shake": c,
                        "fa-flash": m,
                        "fa-spin": p,
                        "fa-spin-reverse": v,
                        "fa-spin-pulse": f,
                        "fa-pulse": j,
                        "fa-fw": O,
                        "fa-inverse": N,
                        "fa-border": w,
                        "fa-li": _,
                        "fa-flip": !0 === k,
                        "fa-flip-horizontal": "horizontal" === k || "both" === k,
                        "fa-flip-vertical": "vertical" === k || "both" === k
                    }, "fa-".concat(P), null != P), u(i, "fa-rotate-".concat(q), null != q && 0 !== q), u(i, "fa-pull-".concat(I), null != I), u(i, "fa-swap-opacity", e.swapOpacity), Object.keys(i).map(function(e) {
                        return i[e] ? e : null
                    }).filter(function(e) {
                        return e
                    }))), d(C.split(" ")))),
                    W = y("transform", "string" == typeof e.transform ? n.Qc.transform(e.transform) : e.transform),
                    z = y("mask", b(T)),
                    F = (0, n.qv)(D, l(l(l(l({}, R), W), z), {}, {
                        symbol: A,
                        title: E,
                        titleId: L,
                        maskId: U
                    }));
                if (!F) return ! function() {
                    if (!h && console && "function" == typeof console.error) {
                        var e;
                        (e = console).error.apply(e, arguments)
                    }
                }("Could not find icon", D), null;
                var G = F.abstract,
                    Q = {
                        ref: t
                    };
                return Object.keys(e).forEach(function(t) {
                    x.defaultProps.hasOwnProperty(t) || (Q[t] = e[t])
                }), g(G[0], Q)
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
            var g = (function e(t, i) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if ("string" == typeof i) return i;
                var r = (i.children || []).map(function(i) {
                        return e(t, i)
                    }),
                    s = Object.keys(i.attributes || {}).reduce(function(e, t) {
                        var n = i.attributes[t];
                        switch (t) {
                            case "class":
                                e.attrs.className = n, delete i.attributes.class;
                                break;
                            case "style":
                                e.attrs.style = n.split(";").map(function(e) {
                                    return e.trim()
                                }).filter(function(e) {
                                    return e
                                }).reduce(function(e, t) {
                                    var i = t.indexOf(":"),
                                        n = p(t.slice(0, i)),
                                        r = t.slice(i + 1).trim();
                                    return n.startsWith("webkit") ? e[n.charAt(0).toUpperCase() + n.slice(1)] = r : e[n] = r, e
                                }, {});
                                break;
                            default:
                                0 === t.indexOf("aria-") || 0 === t.indexOf("data-") ? e.attrs[t.toLowerCase()] = n : e.attrs[p(t)] = n
                        }
                        return e
                    }, {
                        attrs: {}
                    }),
                    o = n.style,
                    a = void 0 === o ? {} : o,
                    c = function(e, t) {
                        if (null == e) return {};
                        var i, n, r = function(e, t) {
                            if (null == e) return {};
                            var i, n, r = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) i = s[n], t.indexOf(i) >= 0 || (r[i] = e[i]);
                            return r
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var s = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < s.length; n++) i = s[n], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i])
                        }
                        return r
                    }(n, f);
                return s.attrs.style = l(l({}, s.attrs.style), a), t.apply(void 0, [i.tag, l(l({}, s.attrs), c)].concat(d(r)))
            }).bind(null, o.createElement)
        },
        83639: function(e, t, i) {
            "use strict";
            var n = i(13836);

            function r() {}

            function s() {}
            s.resetWarningCache = r, e.exports = function() {
                function e(e, t, i, r, s, o) {
                    if (o !== n) {
                        var a = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw a.name = "Invariant Violation", a
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var i = {
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
                    resetWarningCache: r
                };
                return i.PropTypes = i, i
            }
        },
        34390: function(e, t, i) {
            e.exports = i(83639)()
        },
        13836: function(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        90234: function(e, t, i) {
            Promise.resolve().then(i.bind(i, 67542)), Promise.resolve().then(i.t.bind(i, 8920, 23)), Promise.resolve().then(i.bind(i, 1311)), Promise.resolve().then(i.bind(i, 14747)), Promise.resolve().then(i.bind(i, 55980)), Promise.resolve().then(i.bind(i, 90040))
        },
        67542: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var n = i(9268),
                r = i(86006);
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
            var o = i(10009),
                a = i(13936);

            function l() {
                let [e, t] = (0, r.useState)(0);
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
                                    children: s.map((i, r) => (0, n.jsxs)("div", {
                                        onClick: () => t(e => e == i.id ? 0 : i.id),
                                        className: "accordion__item  ".concat(e == i.id ? "is-active" : ""),
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
                                                    children: (0, n.jsx)(a.G, {
                                                        icon: o.r8p
                                                    })
                                                }), (0, n.jsx)("div", {
                                                    style: {
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        alignItems: "center"
                                                    },
                                                    className: "icon",
                                                    "data-feather": "minus",
                                                    children: (0, n.jsx)(a.G, {
                                                        icon: o.Kl4
                                                    })
                                                })]
                                            }), (0, n.jsx)("span", {
                                                className: "text-17 fw-500 text-dark-1",
                                                children: i.question
                                            })]
                                        }), (0, n.jsx)("div", {
                                            style: e == i.id ? {
                                                maxHeight: "139px"
                                            } : {},
                                            className: "accordion__content",
                                            children: (0, n.jsx)("div", {
                                                className: "accordion__content__inner",
                                                children: (0, n.jsx)("p", {
                                                    children: i.answer
                                                })
                                            })
                                        })]
                                    }, r))
                                })]
                            })
                        })
                    })
                })
            }
        },
        90040: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var n = i(9268),
                r = i(76394),
                s = i.n(r);
            i(86006);
            let o = [{
                id: 1,
                icon: "/assets/img/help-center/1.svg",
                title: "Getting Started",
                description: "Lorem ipsum is placeholder text commonly used in site."
            }, {
                id: 2,
                icon: "/assets/img/help-center/2.svg",
                title: "Account / Profile",
                description: "Lorem ipsum is placeholder text commonly used in site."
            }, {
                id: 3,
                icon: "/assets/img/help-center/3.svg",
                title: "Troubleshooting",
                description: "Lorem ipsum is placeholder text commonly used in site."
            }, {
                id: 4,
                icon: "/assets/img/help-center/4.svg",
                title: "Purchase / Refunds",
                description: "Lorem ipsum is placeholder text commonly used in site."
            }, {
                id: 5,
                icon: "/assets/img/help-center/5.svg",
                title: "Course Taking",
                description: "Lorem ipsum is placeholder text commonly used in site."
            }, {
                id: 6,
                icon: "/assets/img/help-center/6.svg",
                title: "Mobile General",
                description: "Lorem ipsum is placeholder text commonly used in site."
            }];

            function a() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("section", {
                        className: "page-header -type-1",
                        children: (0, n.jsx)("div", {
                            className: "container",
                            children: (0, n.jsx)("div", {
                                className: "page-header__content",
                                children: (0, n.jsx)("div", {
                                    className: "row justify-center text-center",
                                    children: (0, n.jsxs)("div", {
                                        className: "col-auto",
                                        children: [(0, n.jsx)("div", {
                                            children: (0, n.jsx)("h1", {
                                                className: "page-header__title",
                                                children: "How can we help you?"
                                            })
                                        }), (0, n.jsx)("div", {
                                            children: (0, n.jsx)("p", {
                                                className: "page-header__text",
                                                children: "We’re on a mission to deliver engaging, curated courses at a reasonable price."
                                            })
                                        })]
                                    })
                                })
                            })
                        })
                    }), (0, n.jsx)("section", {
                        className: "layout-pb-lg",
                        children: (0, n.jsxs)("div", {
                            className: "container",
                            children: [(0, n.jsx)("div", {
                                className: "row justify-center text-center",
                                children: (0, n.jsx)("div", {
                                    className: "col-xl-6 col-lg-8",
                                    children: (0, n.jsxs)("form", {
                                        className: "form-single-field -help",
                                        onSubmit: e => {
                                            e.preventDefault()
                                        },
                                        children: [(0, n.jsx)("input", {
                                            required: !0,
                                            type: "text",
                                            placeholder: "Enter a question, topic or keyword"
                                        }), (0, n.jsxs)("button", {
                                            className: "button -purple-1 text-white",
                                            type: "submit",
                                            children: [(0, n.jsx)("i", {
                                                className: "icon-search text-20 mr-15"
                                            }), "Search"]
                                        })]
                                    })
                                })
                            }), (0, n.jsx)("div", {
                                className: "row y-gap-30 justify-between pt-90 lg:pt-50",
                                children: o.map((e, t) => (0, n.jsx)("div", {
                                    className: "col-lg-4 col-md-6",
                                    children: (0, n.jsxs)("div", {
                                        className: "py-40 px-45 rounded-16 bg-light-4",
                                        children: [(0, n.jsx)("div", {
                                            className: "d-flex justify-center items-center size-70 rounded-full bg-white",
                                            children: (0, n.jsx)(s(), {
                                                width: 30,
                                                height: 30,
                                                src: e.icon,
                                                alt: "icon"
                                            })
                                        }), (0, n.jsx)("h4", {
                                            className: "text-20 lh-11 fw-500 mt-25",
                                            children: e.title
                                        }), (0, n.jsx)("p", {
                                            className: "mt-10",
                                            children: e.description
                                        })]
                                    })
                                }, t))
                            })]
                        })
                    })]
                })
            }
        },
        56008: function(e, t, i) {
            e.exports = i(93027)
        }
    },
    function(e) {
        e.O(0, [8957, 8201, 1410, 1840, 5127, 4240, 4119, 7102, 9253, 6488, 1744], function() {
            return e(e.s = 90234)
        }), _N_E = e.O()
    }
]);