(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9353], {
        13936: function(e, t, r) {
            "use strict";
            r.d(t, {
                G: function() {
                    return x
                }
            });
            var s = r(61410),
                n = r(34390),
                a = r.n(n),
                i = r(86006);

            function o(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, s)
                }
                return r
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(r), !0).forEach(function(t) {
                        d(e, t, r[t])
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

            function d(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function u(e) {
                return function(e) {
                    if (Array.isArray(e)) return f(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return f(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return f(e, t)
                    }
                }(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, s = Array(t); r < t; r++) s[r] = e[r];
                return s
            }

            function p(e) {
                var t;
                return (t = e - 0) == t ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(e, t) {
                    return t ? t.toUpperCase() : ""
                })).substr(0, 1).toLowerCase() + e.substr(1)
            }
            var m = ["style"],
                h = !1;
            try {
                h = !0
            } catch (e) {}

            function b(e) {
                return e && "object" === c(e) && e.prefix && e.iconName && e.icon ? e : s.Qc.icon ? s.Qc.icon(e) : null === e ? null : e && "object" === c(e) && e.prefix && e.iconName ? e : Array.isArray(e) && 2 === e.length ? {
                    prefix: e[0],
                    iconName: e[1]
                } : "string" == typeof e ? {
                    prefix: "fas",
                    iconName: e
                } : void 0
            }

            function y(e, t) {
                return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? d({}, e, t) : {}
            }
            var x = i.forwardRef(function(e, t) {
                var r, n, a, i, o, c, f, p, m, j, N, O, g, w, _, k, P, S, C, I = e.icon,
                    T = e.mask,
                    A = e.symbol,
                    E = e.className,
                    F = e.title,
                    R = e.titleId,
                    D = e.maskId,
                    W = b(I),
                    q = y("classes", [].concat(u((n = e.beat, a = e.fade, i = e.beatFade, o = e.bounce, c = e.shake, f = e.flash, p = e.spin, m = e.spinPulse, j = e.spinReverse, N = e.pulse, O = e.fixedWidth, g = e.inverse, w = e.border, _ = e.listItem, k = e.flip, P = e.size, S = e.rotation, C = e.pull, d(r = {
                        "fa-beat": n,
                        "fa-fade": a,
                        "fa-beat-fade": i,
                        "fa-bounce": o,
                        "fa-shake": c,
                        "fa-flash": f,
                        "fa-spin": p,
                        "fa-spin-reverse": j,
                        "fa-spin-pulse": m,
                        "fa-pulse": N,
                        "fa-fw": O,
                        "fa-inverse": g,
                        "fa-border": w,
                        "fa-li": _,
                        "fa-flip": !0 === k,
                        "fa-flip-horizontal": "horizontal" === k || "both" === k,
                        "fa-flip-vertical": "vertical" === k || "both" === k
                    }, "fa-".concat(P), null != P), d(r, "fa-rotate-".concat(S), null != S && 0 !== S), d(r, "fa-pull-".concat(C), null != C), d(r, "fa-swap-opacity", e.swapOpacity), Object.keys(r).map(function(e) {
                        return r[e] ? e : null
                    }).filter(function(e) {
                        return e
                    }))), u(E.split(" ")))),
                    z = y("transform", "string" == typeof e.transform ? s.Qc.transform(e.transform) : e.transform),
                    $ = y("mask", b(T)),
                    L = (0, s.qv)(W, l(l(l(l({}, q), z), $), {}, {
                        symbol: A,
                        title: F,
                        titleId: R,
                        maskId: D
                    }));
                if (!L) return ! function() {
                    if (!h && console && "function" == typeof console.error) {
                        var e;
                        (e = console).error.apply(e, arguments)
                    }
                }("Could not find icon", W), null;
                var U = L.abstract,
                    Q = {
                        ref: t
                    };
                return Object.keys(e).forEach(function(t) {
                    x.defaultProps.hasOwnProperty(t) || (Q[t] = e[t])
                }), v(U[0], Q)
            });
            x.displayName = "FontAwesomeIcon", x.propTypes = {
                beat: a().bool,
                border: a().bool,
                beatFade: a().bool,
                bounce: a().bool,
                className: a().string,
                fade: a().bool,
                flash: a().bool,
                mask: a().oneOfType([a().object, a().array, a().string]),
                maskId: a().string,
                fixedWidth: a().bool,
                inverse: a().bool,
                flip: a().oneOf([!0, !1, "horizontal", "vertical", "both"]),
                icon: a().oneOfType([a().object, a().array, a().string]),
                listItem: a().bool,
                pull: a().oneOf(["right", "left"]),
                pulse: a().bool,
                rotation: a().oneOf([0, 90, 180, 270]),
                shake: a().bool,
                size: a().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
                spin: a().bool,
                spinPulse: a().bool,
                spinReverse: a().bool,
                symbol: a().oneOfType([a().bool, a().string]),
                title: a().string,
                titleId: a().string,
                transform: a().oneOfType([a().string, a().object]),
                swapOpacity: a().bool
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
                var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if ("string" == typeof r) return r;
                var n = (r.children || []).map(function(r) {
                        return e(t, r)
                    }),
                    a = Object.keys(r.attributes || {}).reduce(function(e, t) {
                        var s = r.attributes[t];
                        switch (t) {
                            case "class":
                                e.attrs.className = s, delete r.attributes.class;
                                break;
                            case "style":
                                e.attrs.style = s.split(";").map(function(e) {
                                    return e.trim()
                                }).filter(function(e) {
                                    return e
                                }).reduce(function(e, t) {
                                    var r = t.indexOf(":"),
                                        s = p(t.slice(0, r)),
                                        n = t.slice(r + 1).trim();
                                    return s.startsWith("webkit") ? e[s.charAt(0).toUpperCase() + s.slice(1)] = n : e[s] = n, e
                                }, {});
                                break;
                            default:
                                0 === t.indexOf("aria-") || 0 === t.indexOf("data-") ? e.attrs[t.toLowerCase()] = s : e.attrs[p(t)] = s
                        }
                        return e
                    }, {
                        attrs: {}
                    }),
                    i = s.style,
                    o = void 0 === i ? {} : i,
                    c = function(e, t) {
                        if (null == e) return {};
                        var r, s, n = function(e, t) {
                            if (null == e) return {};
                            var r, s, n = {},
                                a = Object.keys(e);
                            for (s = 0; s < a.length; s++) r = a[s], t.indexOf(r) >= 0 || (n[r] = e[r]);
                            return n
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var a = Object.getOwnPropertySymbols(e);
                            for (s = 0; s < a.length; s++) r = a[s], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
                        }
                        return n
                    }(s, m);
                return a.attrs.style = l(l({}, a.attrs.style), o), t.apply(void 0, [r.tag, l(l({}, a.attrs), c)].concat(u(n)))
            }).bind(null, i.createElement)
        },
        83639: function(e, t, r) {
            "use strict";
            var s = r(13836);

            function n() {}

            function a() {}
            a.resetWarningCache = n, e.exports = function() {
                function e(e, t, r, n, a, i) {
                    if (i !== s) {
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
                    checkPropTypes: a,
                    resetWarningCache: n
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
        9926: function(e, t, r) {
            Promise.resolve().then(r.t.bind(r, 8920, 23)), Promise.resolve().then(r.bind(r, 1311)), Promise.resolve().then(r.bind(r, 14747)), Promise.resolve().then(r.bind(r, 55980)), Promise.resolve().then(r.bind(r, 90565))
        },
        90565: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var s = r(9268),
                n = r(86006),
                a = r(13936),
                i = r(10009),
                o = r(71840);

            function l() {
                let {
                    cartProducts: e
                } = (0, o.o)(), [t, r] = (0, n.useState)(0), [l, c] = (0, n.useState)(0);
                return (0, n.useEffect)(() => {
                    let t = e.reduce((e, t) => e + t.price * t.quantity, 0),
                        s = e.reduce((e, t) => e + t.quantity, 0);
                    c(10 * s), r(t)
                }, [e]), (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)("section", {
                        className: "page-header -type-1",
                        children: (0, s.jsx)("div", {
                            className: "container",
                            children: (0, s.jsx)("div", {
                                className: "page-header__content",
                                children: (0, s.jsx)("div", {
                                    className: "row justify-center text-center",
                                    children: (0, s.jsxs)("div", {
                                        className: "col-auto",
                                        children: [(0, s.jsx)("div", {
                                            children: (0, s.jsx)("h1", {
                                                className: "page-header__title",
                                                children: "Shop Order"
                                            })
                                        }), (0, s.jsx)("div", {
                                            children: (0, s.jsx)("p", {
                                                className: "page-header__text",
                                                children: "We’re on a mission to deliver engaging, curated courses at a reasonable price."
                                            })
                                        })]
                                    })
                                })
                            })
                        })
                    }), (0, s.jsx)("section", {
                        className: "layout-pt-md layout-pb-lg",
                        children: (0, s.jsx)("div", {
                            className: "container",
                            children: (0, s.jsx)("div", {
                                className: "row no-gutters justify-content-center",
                                children: (0, s.jsxs)("div", {
                                    className: "col-xl-8 col-lg-9 col-md-11",
                                    children: [(0, s.jsxs)("div", {
                                        className: "shopCompleted-header",
                                        children: [(0, s.jsx)("div", {
                                            className: "icon",
                                            children: (0, s.jsx)(a.G, {
                                                icon: i.LEp
                                            })
                                        }), (0, s.jsx)("h2", {
                                            className: "title",
                                            children: "Your order is completed!"
                                        }), (0, s.jsx)("div", {
                                            className: "subtitle",
                                            children: "Thank you. Your order has been received."
                                        })]
                                    }), (0, s.jsx)("div", {
                                        className: "shopCompleted-info",
                                        children: (0, s.jsxs)("div", {
                                            className: "row no-gutters y-gap-32",
                                            children: [(0, s.jsx)("div", {
                                                className: "col-md-3 col-sm-6",
                                                children: (0, s.jsxs)("div", {
                                                    className: "shopCompleted-info__item",
                                                    children: [(0, s.jsx)("div", {
                                                        className: "subtitle",
                                                        children: "Order Number"
                                                    }), (0, s.jsx)("div", {
                                                        className: "title text-purple-1 mt-5",
                                                        children: "13119"
                                                    })]
                                                })
                                            }), (0, s.jsx)("div", {
                                                className: "col-md-3 col-sm-6",
                                                children: (0, s.jsxs)("div", {
                                                    className: "shopCompleted-info__item",
                                                    children: [(0, s.jsx)("div", {
                                                        className: "subtitle",
                                                        children: "Date"
                                                    }), (0, s.jsx)("div", {
                                                        className: "title text-purple-1 mt-5",
                                                        children: "27/07/2021"
                                                    })]
                                                })
                                            }), (0, s.jsx)("div", {
                                                className: "col-md-3 col-sm-6",
                                                children: (0, s.jsxs)("div", {
                                                    className: "shopCompleted-info__item",
                                                    children: [(0, s.jsx)("div", {
                                                        className: "subtitle",
                                                        children: "Total"
                                                    }), (0, s.jsx)("div", {
                                                        className: "title text-purple-1 mt-5",
                                                        children: "$40.10"
                                                    })]
                                                })
                                            }), (0, s.jsx)("div", {
                                                className: "col-md-3 col-sm-6",
                                                children: (0, s.jsxs)("div", {
                                                    className: "shopCompleted-info__item",
                                                    children: [(0, s.jsx)("div", {
                                                        className: "subtitle",
                                                        children: "Payment Method"
                                                    }), (0, s.jsx)("div", {
                                                        className: "title text-purple-1 mt-5",
                                                        children: "Direct Bank Transfer"
                                                    })]
                                                })
                                            })]
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "shopCompleted-footer bg-light-4 border-light rounded-8",
                                        children: (0, s.jsxs)("div", {
                                            className: "shopCompleted-footer__wrap",
                                            children: [(0, s.jsx)("h5", {
                                                className: "title",
                                                children: "Order details"
                                            }), (0, s.jsxs)("div", {
                                                className: "item",
                                                children: [(0, s.jsx)("span", {
                                                    className: "fw-500",
                                                    children: "Product"
                                                }), (0, s.jsx)("span", {
                                                    className: "fw-500",
                                                    children: "Subtotal"
                                                })]
                                            }), e.map((e, t) => (0, s.jsxs)("div", {
                                                className: "item  ".concat(0 != t ? "-border-none" : "", " "),
                                                children: [(0, s.jsxs)("span", {
                                                    className: "",
                                                    children: [e.name, " x ", e.quantity]
                                                }), (0, s.jsxs)("span", {
                                                    className: "",
                                                    children: ["$", (e.price * e.quantity).toFixed(2)]
                                                })]
                                            }, t)), (0, s.jsxs)("div", {
                                                className: "item -border-none",
                                                children: [(0, s.jsx)("span", {
                                                    className: "fw-500",
                                                    children: "Subtotal"
                                                }), (0, s.jsxs)("span", {
                                                    className: "fw-500",
                                                    children: ["$", t.toFixed(2)]
                                                })]
                                            }), (0, s.jsxs)("div", {
                                                className: "item",
                                                children: [(0, s.jsx)("span", {
                                                    className: "fw-500",
                                                    children: "Shipping"
                                                }), (0, s.jsxs)("span", {
                                                    className: "fw-500",
                                                    children: ["$", l.toFixed(2)]
                                                })]
                                            }), (0, s.jsxs)("div", {
                                                className: "item",
                                                children: [(0, s.jsx)("span", {
                                                    className: "fw-500",
                                                    children: "Total"
                                                }), (0, s.jsxs)("span", {
                                                    className: "fw-500",
                                                    children: ["$", (t + l).toFixed(2)]
                                                })]
                                            })]
                                        })
                                    })]
                                })
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
            return e(e.s = 9926)
        }), _N_E = e.O()
    }
]);