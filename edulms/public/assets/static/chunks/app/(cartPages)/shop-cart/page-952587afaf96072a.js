(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4054], {
        13936: function(e, t, s) {
            "use strict";
            s.d(t, {
                G: function() {
                    return g
                }
            });
            var r = s(61410),
                n = s(34390),
                a = s.n(n),
                i = s(86006);

            function l(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), s.push.apply(s, r)
                }
                return s
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(s), !0).forEach(function(t) {
                        d(e, t, s[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : l(Object(s)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
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

            function d(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }

            function u(e) {
                return function(e) {
                    if (Array.isArray(e)) return m(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return m(e, t);
                        var s = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === s && e.constructor && (s = e.constructor.name), "Map" === s || "Set" === s) return Array.from(e);
                        if ("Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)) return m(e, t)
                    }
                }(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var s = 0, r = Array(t); s < t; s++) r[s] = e[s];
                return r
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
                return e && "object" === c(e) && e.prefix && e.iconName && e.icon ? e : r.Qc.icon ? r.Qc.icon(e) : null === e ? null : e && "object" === c(e) && e.prefix && e.iconName ? e : Array.isArray(e) && 2 === e.length ? {
                    prefix: e[0],
                    iconName: e[1]
                } : "string" == typeof e ? {
                    prefix: "fas",
                    iconName: e
                } : void 0
            }

            function x(e, t) {
                return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? d({}, e, t) : {}
            }
            var g = i.forwardRef(function(e, t) {
                var s, n, a, i, l, c, m, p, f, j, v, N, O, _, w, k, C, S, P, I = e.icon,
                    A = e.mask,
                    E = e.symbol,
                    q = e.className,
                    T = e.title,
                    L = e.titleId,
                    F = e.maskId,
                    W = b(I),
                    D = x("classes", [].concat(u((n = e.beat, a = e.fade, i = e.beatFade, l = e.bounce, c = e.shake, m = e.flash, p = e.spin, f = e.spinPulse, j = e.spinReverse, v = e.pulse, N = e.fixedWidth, O = e.inverse, _ = e.border, w = e.listItem, k = e.flip, C = e.size, S = e.rotation, P = e.pull, d(s = {
                        "fa-beat": n,
                        "fa-fade": a,
                        "fa-beat-fade": i,
                        "fa-bounce": l,
                        "fa-shake": c,
                        "fa-flash": m,
                        "fa-spin": p,
                        "fa-spin-reverse": j,
                        "fa-spin-pulse": f,
                        "fa-pulse": v,
                        "fa-fw": N,
                        "fa-inverse": O,
                        "fa-border": _,
                        "fa-li": w,
                        "fa-flip": !0 === k,
                        "fa-flip-horizontal": "horizontal" === k || "both" === k,
                        "fa-flip-vertical": "vertical" === k || "both" === k
                    }, "fa-".concat(C), null != C), d(s, "fa-rotate-".concat(S), null != S && 0 !== S), d(s, "fa-pull-".concat(P), null != P), d(s, "fa-swap-opacity", e.swapOpacity), Object.keys(s).map(function(e) {
                        return s[e] ? e : null
                    }).filter(function(e) {
                        return e
                    }))), u(q.split(" ")))),
                    R = x("transform", "string" == typeof e.transform ? r.Qc.transform(e.transform) : e.transform),
                    z = x("mask", b(A)),
                    U = (0, r.qv)(W, o(o(o(o({}, D), R), z), {}, {
                        symbol: E,
                        title: T,
                        titleId: L,
                        maskId: F
                    }));
                if (!U) return ! function() {
                    if (!h && console && "function" == typeof console.error) {
                        var e;
                        (e = console).error.apply(e, arguments)
                    }
                }("Could not find icon", W), null;
                var B = U.abstract,
                    Q = {
                        ref: t
                    };
                return Object.keys(e).forEach(function(t) {
                    g.defaultProps.hasOwnProperty(t) || (Q[t] = e[t])
                }), y(B[0], Q)
            });
            g.displayName = "FontAwesomeIcon", g.propTypes = {
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
            }, g.defaultProps = {
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
            var y = (function e(t, s) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if ("string" == typeof s) return s;
                var n = (s.children || []).map(function(s) {
                        return e(t, s)
                    }),
                    a = Object.keys(s.attributes || {}).reduce(function(e, t) {
                        var r = s.attributes[t];
                        switch (t) {
                            case "class":
                                e.attrs.className = r, delete s.attributes.class;
                                break;
                            case "style":
                                e.attrs.style = r.split(";").map(function(e) {
                                    return e.trim()
                                }).filter(function(e) {
                                    return e
                                }).reduce(function(e, t) {
                                    var s = t.indexOf(":"),
                                        r = p(t.slice(0, s)),
                                        n = t.slice(s + 1).trim();
                                    return r.startsWith("webkit") ? e[r.charAt(0).toUpperCase() + r.slice(1)] = n : e[r] = n, e
                                }, {});
                                break;
                            default:
                                0 === t.indexOf("aria-") || 0 === t.indexOf("data-") ? e.attrs[t.toLowerCase()] = r : e.attrs[p(t)] = r
                        }
                        return e
                    }, {
                        attrs: {}
                    }),
                    i = r.style,
                    l = void 0 === i ? {} : i,
                    c = function(e, t) {
                        if (null == e) return {};
                        var s, r, n = function(e, t) {
                            if (null == e) return {};
                            var s, r, n = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) s = a[r], t.indexOf(s) >= 0 || (n[s] = e[s]);
                            return n
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var a = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < a.length; r++) s = a[r], !(t.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(e, s) && (n[s] = e[s])
                        }
                        return n
                    }(r, f);
                return a.attrs.style = o(o({}, a.attrs.style), l), t.apply(void 0, [s.tag, o(o({}, a.attrs), c)].concat(u(n)))
            }).bind(null, i.createElement)
        },
        83639: function(e, t, s) {
            "use strict";
            var r = s(13836);

            function n() {}

            function a() {}
            a.resetWarningCache = n, e.exports = function() {
                function e(e, t, s, n, a, i) {
                    if (i !== r) {
                        var l = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw l.name = "Invariant Violation", l
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var s = {
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
                return s.PropTypes = s, s
            }
        },
        34390: function(e, t, s) {
            e.exports = s(83639)()
        },
        13836: function(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        82402: function(e, t, s) {
            Promise.resolve().then(s.t.bind(s, 8920, 23)), Promise.resolve().then(s.bind(s, 1311)), Promise.resolve().then(s.bind(s, 14747)), Promise.resolve().then(s.bind(s, 55980)), Promise.resolve().then(s.bind(s, 89142)), Promise.resolve().then(s.bind(s, 87955))
        },
        89142: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            });
            var r = s(9268),
                n = s(76394),
                a = s.n(n),
                i = s(86006),
                l = s(11108),
                o = s(35846),
                c = s.n(o);

            function d() {
                let [e, t] = (0, i.useState)([]), [s, n] = (0, i.useState)("All Categories");
                return (0, i.useEffect)(() => {
                    "All Categories" == s ? t(l.ZF) : t(l.ZF.filter(e => e.category == s))
                }, [s]), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("section", {
                        className: "page-header -type-1",
                        children: (0, r.jsx)("div", {
                            className: "container",
                            children: (0, r.jsx)("div", {
                                className: "page-header__content",
                                children: (0, r.jsx)("div", {
                                    className: "row justify-center text-center",
                                    children: (0, r.jsxs)("div", {
                                        className: "col-auto",
                                        children: [(0, r.jsx)("div", {
                                            children: (0, r.jsx)("h1", {
                                                className: "page-header__title",
                                                children: "Latest News"
                                            })
                                        }), (0, r.jsx)("div", {
                                            children: (0, r.jsx)("p", {
                                                className: "page-header__text",
                                                children: "We’re on a mission to deliver engaging, curated courses at a reasonable price."
                                            })
                                        })]
                                    })
                                })
                            })
                        })
                    }), (0, r.jsx)("section", {
                        className: "layout-pt-sm layout-pb-lg",
                        children: (0, r.jsx)("div", {
                            className: "container",
                            children: (0, r.jsxs)("div", {
                                className: "tabs -pills js-tabs",
                                children: [(0, r.jsx)("div", {
                                    className: "tabs__controls d-flex justify-center flex-wrap y-gap-20 x-gap-10 js-tabs-controls",
                                    children: l.bd.map((e, t) => (0, r.jsx)("div", {
                                        onClick: () => n(e),
                                        children: (0, r.jsx)("button", {
                                            className: "tabs__button px-15 py-8 rounded-8 js-tabs-button ".concat(s == e ? "is-active" : "", " "),
                                            "data-tab-target": ".-tab-item-1",
                                            type: "button",
                                            children: e
                                        })
                                    }, t))
                                }), (0, r.jsx)("div", {
                                    className: "tabs__content pt-40 js-tabs-content",
                                    children: (0, r.jsxs)("div", {
                                        className: "tabs__pane -tab-item-1 is-active",
                                        children: [(0, r.jsx)("div", {
                                            className: "row y-gap-30",
                                            children: e.map((e, t) => (0, r.jsx)("div", {
                                                className: "col-lg-4 col-md-6",
                                                children: (0, r.jsxs)("div", {
                                                    className: "blogCard -type-1",
                                                    children: [(0, r.jsx)("div", {
                                                        className: "blogCard__image",
                                                        children: (0, r.jsx)(a(), {
                                                            width: 530,
                                                            height: 450,
                                                            className: "w-1/1 rounded-8",
                                                            src: e.imageSrc,
                                                            alt: "image"
                                                        })
                                                    }), (0, r.jsxs)("div", {
                                                        className: "blogCard__content mt-20",
                                                        children: [(0, r.jsx)("div", {
                                                            className: "blogCard__category",
                                                            children: e.category.toUpperCase()
                                                        }), (0, r.jsx)("h4", {
                                                            className: "blogCard__title text-20 lh-15 fw-500 mt-5",
                                                            children: (0, r.jsx)(c(), {
                                                                className: "linkCustom",
                                                                href: "/blogs/".concat(e.id),
                                                                children: e.title
                                                            })
                                                        }), (0, r.jsx)("div", {
                                                            className: "blogCard__date text-14 mt-5",
                                                            children: e.date
                                                        })]
                                                    })]
                                                })
                                            }, t))
                                        }), (0, r.jsx)("div", {
                                            className: "row justify-center pt-60 lg:pt-40",
                                            children: (0, r.jsx)("div", {
                                                className: "col-auto",
                                                children: (0, r.jsxs)("div", {
                                                    className: "pagination -buttons",
                                                    children: [(0, r.jsx)("button", {
                                                        className: "pagination__button -prev",
                                                        children: (0, r.jsx)("i", {
                                                            className: "icon icon-chevron-left"
                                                        })
                                                    }), (0, r.jsxs)("div", {
                                                        className: "pagination__count",
                                                        children: [(0, r.jsx)("a", {
                                                            href: "#",
                                                            children: "1"
                                                        }), (0, r.jsx)("a", {
                                                            className: "-count-is-active",
                                                            href: "#",
                                                            children: "2"
                                                        }), (0, r.jsx)("a", {
                                                            href: "#",
                                                            children: "3"
                                                        }), (0, r.jsx)("span", {
                                                            children: "..."
                                                        }), (0, r.jsx)("a", {
                                                            href: "#",
                                                            children: "67"
                                                        })]
                                                    }), (0, r.jsx)("button", {
                                                        className: "pagination__button -next",
                                                        children: (0, r.jsx)("i", {
                                                            className: "icon icon-chevron-right"
                                                        })
                                                    })]
                                                })
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
        87955: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            });
            var r = s(9268),
                n = s(86006),
                a = s(13936),
                i = s(10009),
                l = s(71840),
                o = s(35846),
                c = s.n(o);

            function d() {
                let {
                    cartProducts: e,
                    setCartProducts: t
                } = (0, l.o)(), [s, o] = (0, n.useState)(0), d = s => {
                    let r = e[s];
                    r.quantity += 1;
                    let n = [...e];
                    n[s], t(n)
                }, u = s => {
                    let r = e[s];
                    if (r.quantity > 1) {
                        r.quantity -= 1;
                        let n = [...e];
                        n[s], t(n)
                    }
                }, m = s => {
                    let r = e[s];
                    t(e => [...e.filter(e => e !== r)])
                };
                return (0, n.useEffect)(() => {
                    let t = e.reduce((e, t) => e + t.price * t.quantity, 0);
                    o(t)
                }, [e]), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("section", {
                        className: "page-header -type-1",
                        children: (0, r.jsx)("div", {
                            className: "container",
                            children: (0, r.jsx)("div", {
                                className: "page-header__content",
                                children: (0, r.jsx)("div", {
                                    className: "row justify-center text-center",
                                    children: (0, r.jsxs)("div", {
                                        className: "col-auto",
                                        children: [(0, r.jsx)("div", {
                                            children: (0, r.jsx)("h1", {
                                                className: "page-header__title",
                                                children: "Shop Cart"
                                            })
                                        }), (0, r.jsx)("div", {
                                            children: (0, r.jsx)("p", {
                                                className: "page-header__text",
                                                children: "We’re on a mission to deliver engaging, curated courses at a reasonable price."
                                            })
                                        })]
                                    })
                                })
                            })
                        })
                    }), (0, r.jsx)("section", {
                        className: "layout-pt-md layout-pb-lg",
                        children: (0, r.jsx)("div", {
                            className: "container",
                            children: (0, r.jsxs)("div", {
                                className: "row justify-end",
                                children: [(0, r.jsxs)("div", {
                                    className: "col-12",
                                    children: [(0, r.jsx)("div", {
                                        className: "px-30 pr-60 py-25 rounded-8 bg-light-6 md:d-none",
                                        children: (0, r.jsxs)("div", {
                                            className: "row justify-between",
                                            children: [(0, r.jsx)("div", {
                                                className: "col-md-4",
                                                children: (0, r.jsx)("div", {
                                                    className: "fw-500 text-purple-1",
                                                    children: "Product"
                                                })
                                            }), (0, r.jsx)("div", {
                                                className: "col-md-2",
                                                children: (0, r.jsx)("div", {
                                                    className: "fw-500 text-purple-1",
                                                    children: "Price"
                                                })
                                            }), (0, r.jsx)("div", {
                                                className: "col-md-2",
                                                children: (0, r.jsx)("div", {
                                                    className: "fw-500 text-purple-1",
                                                    children: "Quantity"
                                                })
                                            }), (0, r.jsx)("div", {
                                                className: "col-md-2",
                                                children: (0, r.jsx)("div", {
                                                    className: "fw-500 text-purple-1",
                                                    children: "Subtotal"
                                                })
                                            }), (0, r.jsx)("div", {
                                                className: "col-md-1",
                                                children: (0, r.jsx)("div", {
                                                    className: "d-flex justify-end",
                                                    children: (0, r.jsx)("div", {
                                                        className: "fw-500 text-purple-1",
                                                        children: "Remove"
                                                    })
                                                })
                                            })]
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "px-30 pr-60 md:px-0",
                                        children: e.map((e, t) => (0, r.jsxs)("div", {
                                            className: "row y-gap-20 justify-between items-center pt-30 pb-30 border-bottom-light",
                                            children: [(0, r.jsx)("div", {
                                                className: "col-md-4",
                                                children: (0, r.jsxs)("div", {
                                                    className: "d-flex items-center",
                                                    children: [(0, r.jsx)("div", {
                                                        className: "",
                                                        children: (0, r.jsx)("div", {
                                                            className: "size-100 bg-image rounded-8 js-lazy",
                                                            style: {
                                                                backgroundImage: "url(".concat(e.image, ")")
                                                            }
                                                        })
                                                    }), (0, r.jsx)("div", {
                                                        className: "fw-500 text-dark-1 ml-30",
                                                        children: (0, r.jsxs)(c(), {
                                                            className: "linkCustom",
                                                            href: "/shop/".concat(e.id),
                                                            children: [e.name, " "]
                                                        })
                                                    })]
                                                })
                                            }), (0, r.jsx)("div", {
                                                className: "col-md-2 md:mt-15",
                                                children: (0, r.jsxs)("div", {
                                                    className: "",
                                                    children: [(0, r.jsx)("div", {
                                                        className: "shopCart-products__title d-none md:d-block mb-10",
                                                        children: "Price"
                                                    }), (0, r.jsxs)("p", {
                                                        children: ["$", e.price]
                                                    })]
                                                })
                                            }), (0, r.jsx)("div", {
                                                className: "col-md-2",
                                                children: (0, r.jsxs)("div", {
                                                    className: "",
                                                    children: [(0, r.jsx)("div", {
                                                        className: "shopCart-products__title d-none md:d-block mb-10",
                                                        children: "Quantity"
                                                    }), (0, r.jsxs)("div", {
                                                        className: "input-counter md:mt-20 js-input-counter",
                                                        children: [(0, r.jsx)("input", {
                                                            required: !0,
                                                            className: "input-counter__counter",
                                                            type: "number",
                                                            placeholder: "value...",
                                                            value: e.quantity
                                                        }), (0, r.jsxs)("div", {
                                                            className: "input-counter__controls",
                                                            children: [(0, r.jsx)("button", {
                                                                className: "input-counter__up js-down",
                                                                onClick: () => u(t),
                                                                children: (0, r.jsx)(a.G, {
                                                                    icon: i.Kl4
                                                                })
                                                            }), (0, r.jsx)("button", {
                                                                className: "input-counter__down js-up",
                                                                onClick: () => d(t),
                                                                children: (0, r.jsx)(a.G, {
                                                                    icon: i.r8p
                                                                })
                                                            })]
                                                        })]
                                                    })]
                                                })
                                            }), (0, r.jsx)("div", {
                                                className: "col-md-1",
                                                children: (0, r.jsxs)("div", {
                                                    className: "",
                                                    children: [(0, r.jsx)("div", {
                                                        className: "shopCart-products__title d-none md:d-block mb-10",
                                                        children: "Subtotal"
                                                    }), (0, r.jsxs)("p", {
                                                        children: ["$", (e.quantity * e.price).toFixed(2)]
                                                    })]
                                                })
                                            }), (0, r.jsx)("div", {
                                                className: "col-md-1",
                                                children: (0, r.jsx)("div", {
                                                    className: "md:d-none d-flex justify-end",
                                                    onClick: () => m(t),
                                                    children: (0, r.jsx)(a.G, {
                                                        icon: i.EOp
                                                    })
                                                })
                                            })]
                                        }, t))
                                    }), (0, r.jsx)("div", {
                                        className: "shopCart-footer px-16 mt-30",
                                        children: e.length > 0 ? (0, r.jsxs)("div", {
                                            className: "row justify-between y-gap-30",
                                            children: [(0, r.jsx)("div", {
                                                className: "col-xl-5",
                                                children: (0, r.jsx)("form", {
                                                    className: "",
                                                    onSubmit: e => {
                                                        e.preventDefault()
                                                    },
                                                    children: (0, r.jsxs)("div", {
                                                        className: "d-flex justify-between border-dark",
                                                        children: [(0, r.jsx)("input", {
                                                            required: !0,
                                                            className: "rounded-8 px-25 py-20",
                                                            type: "text",
                                                            placeholder: "Coupon Code"
                                                        }), (0, r.jsx)("button", {
                                                            className: "text-black fw-500",
                                                            type: "submit",
                                                            children: "Apply coupon"
                                                        })]
                                                    })
                                                })
                                            }), (0, r.jsx)("div", {
                                                className: "col-auto",
                                                children: (0, r.jsx)("div", {
                                                    className: "shopCart-footer__item",
                                                    children: (0, r.jsx)("button", {
                                                        className: "button -md -purple-3 text-purple-1",
                                                        children: "Update cart"
                                                    })
                                                })
                                            })]
                                        }) : (0, r.jsx)("div", {
                                            className: "row justify-center pt-60 lg:pt-40",
                                            children: (0, r.jsx)("div", {
                                                className: "col-auto",
                                                children: (0, r.jsx)(c(), {
                                                    href: "/shop-list",
                                                    className: "button -md -outline-purple-1 text-purple-1",
                                                    children: "Buy Products"
                                                })
                                            })
                                        })
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "col-xl-4 col-lg-5 layout-pt-lg",
                                    children: [(0, r.jsxs)("div", {
                                        className: "py-30 bg-light-4 rounded-8 border-light",
                                        children: [(0, r.jsx)("h5", {
                                            className: "px-30 text-20 fw-500",
                                            children: "Cart Totals"
                                        }), (0, r.jsxs)("div", {
                                            className: "d-flex justify-between px-30 item mt-25",
                                            children: [(0, r.jsx)("div", {
                                                className: "py-15 fw-500 text-dark-1",
                                                children: "Subtotal"
                                            }), (0, r.jsxs)("div", {
                                                className: "py-15 fw-500 text-dark-1",
                                                children: ["$", s.toFixed(2)]
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "d-flex justify-between px-30 item border-top-dark",
                                            children: [(0, r.jsx)("div", {
                                                className: "pt-15 fw-500 text-dark-1",
                                                children: "Total"
                                            }), (0, r.jsxs)("div", {
                                                className: "pt-15 fw-500 text-dark-1",
                                                children: ["$", s.toFixed(2)]
                                            })]
                                        })]
                                    }), (0, r.jsx)(c(), {
                                        href: "/shop-checkout",
                                        className: "button -md -purple-1 text-white col-12 mt-30",
                                        children: "Proceed to checkout"
                                    })]
                                })]
                            })
                        })
                    })]
                })
            }
        },
        11108: function(e, t, s) {
            "use strict";
            s.d(t, {
                ZF: function() {
                    return r
                },
                bd: function() {
                    return n
                },
                pJ: function() {
                    return a
                }
            });
            let r = [{
                    id: 1,
                    imageSrc: "/assets/img/blog-list/1.png",
                    category: "Writing",
                    title: "Eco-Education in Our Lives: We Can Change the Future",
                    date: "January 5, 2023",
                    desc: "Our features, journey, tips and us being us. Lorem ipsum dolor sit amet, accumsan in, tempor dictum neque"
                }, {
                    id: 2,
                    imageSrc: "/assets/img/blog-list/2.png",
                    category: "EDUCATION",
                    title: "Engendering a culture of professional development",
                    date: "February 18, 2023",
                    desc: "Our features, journey, tips and us being us. Lorem ipsum dolor sit amet, accumsan in, tempor dictum neque"
                }, {
                    id: 3,
                    imageSrc: "/assets/img/blog-list/3.png",
                    category: "Business",
                    title: "Increasing engagement with Instagram",
                    date: "March 27, 2023",
                    desc: "Our features, journey, tips and us being us. Lorem ipsum dolor sit amet, accumsan in, tempor dictum neque"
                }, {
                    id: 4,
                    imageSrc: "/assets/img/blog-list/4.png",
                    category: "Business",
                    title: "How to design a simple, yet unique and memorable brand identity",
                    date: "April 14, 2023",
                    desc: "Our features, journey, tips and us being us. Lorem ipsum dolor sit amet, accumsan in, tempor dictum neque"
                }, {
                    id: 5,
                    imageSrc: "/assets/img/blog-list/5.png",
                    category: "Photo & Film",
                    title: "5 marketing trends that you should be prepared for in 2022",
                    date: "May 22, 2023",
                    desc: "Our features, journey, tips and us being us. Lorem ipsum dolor sit amet, accumsan in, tempor dictum neque"
                }, {
                    id: 6,
                    imageSrc: "/assets/img/blog-list/6.png",
                    category: "Lifestyle",
                    title: "8 great design trends that are making a come-back in 2021",
                    date: "June 8, 2023",
                    desc: "Our features, journey, tips and us being us. Lorem ipsum dolor sit amet, accumsan in, tempor dictum neque"
                }, {
                    id: 7,
                    imageSrc: "/assets/img/blog-list/7.png",
                    category: "Illustration",
                    title: "How to be more creative: 5 cool tips to find inspiration everywhere",
                    date: "July 17, 2023",
                    desc: "Our features, journey, tips and us being us. Lorem ipsum dolor sit amet, accumsan in, tempor dictum neque"
                }, {
                    id: 8,
                    imageSrc: "/assets/img/blog-list/8.png",
                    category: "Design",
                    title: "8 interesting programming languages you should be paying attention to",
                    date: "August 3, 2023",
                    desc: "Our features, journey, tips and us being us. Lorem ipsum dolor sit amet, accumsan in, tempor dictum neque"
                }, {
                    id: 9,
                    imageSrc: "/assets/img/blog-list/9.png",
                    category: "Animation",
                    title: "19 ways to optimize your ad marketing budget efficiently",
                    date: "September 12, 2023",
                    desc: "Our features, journey, tips and us being us. Lorem ipsum dolor sit amet, accumsan in, tempor dictum neque"
                }],
                n = ["All Categories", "Animation", "Design", "Illustration", "Lifestyle", "Photo & Film", "Business", "Writing"],
                a = [{
                    id: 1,
                    href: "#",
                    name: "Courses"
                }, {
                    id: 2,
                    href: "#",
                    name: "Learn"
                }, {
                    id: 3,
                    href: "#",
                    name: "Online"
                }, {
                    id: 4,
                    href: "#",
                    name: "Education"
                }, {
                    id: 5,
                    href: "#",
                    name: "LMS"
                }, {
                    id: 6,
                    href: "#",
                    name: "Training"
                }]
        },
        56008: function(e, t, s) {
            e.exports = s(93027)
        }
    },
    function(e) {
        e.O(0, [8957, 8201, 1410, 1840, 5127, 4240, 4119, 7102, 9253, 6488, 1744], function() {
            return e(e.s = 82402)
        }), _N_E = e.O()
    }
]);