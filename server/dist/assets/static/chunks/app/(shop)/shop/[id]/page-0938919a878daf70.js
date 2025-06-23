(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6476], {
        13936: function(e, t, s) {
            "use strict";
            s.d(t, {
                G: function() {
                    return j
                }
            });
            var a = s(61410),
                i = s(34390),
                n = s.n(i),
                r = s(86006);

            function l(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), s.push.apply(s, a)
                }
                return s
            }

            function c(e) {
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

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
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

            function m(e) {
                return function(e) {
                    if (Array.isArray(e)) return u(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return u(e, t);
                        var s = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === s && e.constructor && (s = e.constructor.name), "Map" === s || "Set" === s) return Array.from(e);
                        if ("Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)) return u(e, t)
                    }
                }(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var s = 0, a = Array(t); s < t; s++) a[s] = e[s];
                return a
            }

            function p(e) {
                var t;
                return (t = e - 0) == t ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(e, t) {
                    return t ? t.toUpperCase() : ""
                })).substr(0, 1).toLowerCase() + e.substr(1)
            }
            var h = ["style"],
                x = !1;
            try {
                x = !0
            } catch (e) {}

            function f(e) {
                return e && "object" === o(e) && e.prefix && e.iconName && e.icon ? e : a.Qc.icon ? a.Qc.icon(e) : null === e ? null : e && "object" === o(e) && e.prefix && e.iconName ? e : Array.isArray(e) && 2 === e.length ? {
                    prefix: e[0],
                    iconName: e[1]
                } : "string" == typeof e ? {
                    prefix: "fas",
                    iconName: e
                } : void 0
            }

            function b(e, t) {
                return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? d({}, e, t) : {}
            }
            var j = r.forwardRef(function(e, t) {
                var s, i, n, r, l, o, u, p, h, y, N, g, _, w, O, k, S, C, P, T = e.icon,
                    A = e.mask,
                    I = e.symbol,
                    E = e.className,
                    R = e.title,
                    W = e.titleId,
                    q = e.maskId,
                    D = f(T),
                    z = b("classes", [].concat(m((i = e.beat, n = e.fade, r = e.beatFade, l = e.bounce, o = e.shake, u = e.flash, p = e.spin, h = e.spinPulse, y = e.spinReverse, N = e.pulse, g = e.fixedWidth, _ = e.inverse, w = e.border, O = e.listItem, k = e.flip, S = e.size, C = e.rotation, P = e.pull, d(s = {
                        "fa-beat": i,
                        "fa-fade": n,
                        "fa-beat-fade": r,
                        "fa-bounce": l,
                        "fa-shake": o,
                        "fa-flash": u,
                        "fa-spin": p,
                        "fa-spin-reverse": y,
                        "fa-spin-pulse": h,
                        "fa-pulse": N,
                        "fa-fw": g,
                        "fa-inverse": _,
                        "fa-border": w,
                        "fa-li": O,
                        "fa-flip": !0 === k,
                        "fa-flip-horizontal": "horizontal" === k || "both" === k,
                        "fa-flip-vertical": "vertical" === k || "both" === k
                    }, "fa-".concat(S), null != S), d(s, "fa-rotate-".concat(C), null != C && 0 !== C), d(s, "fa-pull-".concat(P), null != P), d(s, "fa-swap-opacity", e.swapOpacity), Object.keys(s).map(function(e) {
                        return s[e] ? e : null
                    }).filter(function(e) {
                        return e
                    }))), m(E.split(" ")))),
                    F = b("transform", "string" == typeof e.transform ? a.Qc.transform(e.transform) : e.transform),
                    L = b("mask", f(A)),
                    M = (0, a.qv)(D, c(c(c(c({}, z), F), L), {}, {
                        symbol: I,
                        title: R,
                        titleId: W,
                        maskId: q
                    }));
                if (!M) return ! function() {
                    if (!x && console && "function" == typeof console.error) {
                        var e;
                        (e = console).error.apply(e, arguments)
                    }
                }("Could not find icon", D), null;
                var G = M.abstract,
                    V = {
                        ref: t
                    };
                return Object.keys(e).forEach(function(t) {
                    j.defaultProps.hasOwnProperty(t) || (V[t] = e[t])
                }), v(G[0], V)
            });
            j.displayName = "FontAwesomeIcon", j.propTypes = {
                beat: n().bool,
                border: n().bool,
                beatFade: n().bool,
                bounce: n().bool,
                className: n().string,
                fade: n().bool,
                flash: n().bool,
                mask: n().oneOfType([n().object, n().array, n().string]),
                maskId: n().string,
                fixedWidth: n().bool,
                inverse: n().bool,
                flip: n().oneOf([!0, !1, "horizontal", "vertical", "both"]),
                icon: n().oneOfType([n().object, n().array, n().string]),
                listItem: n().bool,
                pull: n().oneOf(["right", "left"]),
                pulse: n().bool,
                rotation: n().oneOf([0, 90, 180, 270]),
                shake: n().bool,
                size: n().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
                spin: n().bool,
                spinPulse: n().bool,
                spinReverse: n().bool,
                symbol: n().oneOfType([n().bool, n().string]),
                title: n().string,
                titleId: n().string,
                transform: n().oneOfType([n().string, n().object]),
                swapOpacity: n().bool
            }, j.defaultProps = {
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
            var v = (function e(t, s) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if ("string" == typeof s) return s;
                var i = (s.children || []).map(function(s) {
                        return e(t, s)
                    }),
                    n = Object.keys(s.attributes || {}).reduce(function(e, t) {
                        var a = s.attributes[t];
                        switch (t) {
                            case "class":
                                e.attrs.className = a, delete s.attributes.class;
                                break;
                            case "style":
                                e.attrs.style = a.split(";").map(function(e) {
                                    return e.trim()
                                }).filter(function(e) {
                                    return e
                                }).reduce(function(e, t) {
                                    var s = t.indexOf(":"),
                                        a = p(t.slice(0, s)),
                                        i = t.slice(s + 1).trim();
                                    return a.startsWith("webkit") ? e[a.charAt(0).toUpperCase() + a.slice(1)] = i : e[a] = i, e
                                }, {});
                                break;
                            default:
                                0 === t.indexOf("aria-") || 0 === t.indexOf("data-") ? e.attrs[t.toLowerCase()] = a : e.attrs[p(t)] = a
                        }
                        return e
                    }, {
                        attrs: {}
                    }),
                    r = a.style,
                    l = void 0 === r ? {} : r,
                    o = function(e, t) {
                        if (null == e) return {};
                        var s, a, i = function(e, t) {
                            if (null == e) return {};
                            var s, a, i = {},
                                n = Object.keys(e);
                            for (a = 0; a < n.length; a++) s = n[a], t.indexOf(s) >= 0 || (i[s] = e[s]);
                            return i
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            for (a = 0; a < n.length; a++) s = n[a], !(t.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(e, s) && (i[s] = e[s])
                        }
                        return i
                    }(a, h);
                return n.attrs.style = c(c({}, n.attrs.style), l), t.apply(void 0, [s.tag, c(c({}, n.attrs), o)].concat(m(i)))
            }).bind(null, r.createElement)
        },
        83639: function(e, t, s) {
            "use strict";
            var a = s(13836);

            function i() {}

            function n() {}
            n.resetWarningCache = i, e.exports = function() {
                function e(e, t, s, i, n, r) {
                    if (r !== a) {
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
                    checkPropTypes: n,
                    resetWarningCache: i
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
        28248: function(e, t, s) {
            Promise.resolve().then(s.t.bind(s, 8920, 23)), Promise.resolve().then(s.bind(s, 1311)), Promise.resolve().then(s.bind(s, 14747)), Promise.resolve().then(s.bind(s, 55980)), Promise.resolve().then(s.bind(s, 25887)), Promise.resolve().then(s.bind(s, 12522))
        },
        25887: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return h
                }
            });
            var a = s(9268),
                i = s(36115),
                n = s(70382),
                r = s(31092),
                l = s(86006),
                c = s(76394),
                o = s.n(c),
                d = s(13936),
                m = s(10009);

            function u(e) {
                let {
                    images: t,
                    setActiveLightBox: s,
                    activeLightBox: i,
                    currentSlideIndex: n,
                    setCurrentSlideIndex: r
                } = e;
                return (0, a.jsxs)("div", {
                    id: "myModal",
                    style: i ? {
                        display: "block"
                    } : {
                        display: "none"
                    },
                    className: "modal",
                    children: [(0, a.jsx)("div", {
                        className: "close cursor",
                        style: {
                            zIndex: 1e3
                        },
                        onClick: () => {
                            s(!1)
                        },
                        children: (0, a.jsx)("span", {
                            children: "\xd7"
                        })
                    }), (0, a.jsxs)("div", {
                        className: "modal-content",
                        children: [t.map((e, s) => (0, a.jsxs)("div", {
                            className: "mySlides",
                            style: n == s ? {
                                display: "block",
                                height: "100%"
                            } : {
                                display: "none",
                                height: "100%"
                            },
                            children: [(0, a.jsxs)("div", {
                                className: "numbertext",
                                children: [s + 1, " / ", t.length]
                            }), (0, a.jsx)("img", {
                                src: e.image,
                                style: {
                                    height: "100%",
                                    width: "100%",
                                    objectFit: "contain",
                                    margin: "auto auto"
                                }
                            })]
                        }, s)), (0, a.jsx)("a", {
                            className: "prev",
                            onClick: () => r(e => 0 == e ? t.length - 1 : e - 1),
                            children: "❮"
                        }), (0, a.jsx)("a", {
                            className: "next",
                            onClick: () => r(e => e == t.length - 1 ? 0 : e + 1),
                            children: "❯"
                        })]
                    })]
                })
            }
            var p = s(71840);

            function h(e) {
                let {
                    id: t
                } = e, {
                    addProductToCart: s,
                    isAddedToCartProducts: c
                } = (0, p.o)(), h = (0, l.useRef)(null), [x, f] = (0, l.useState)(0), [b, j] = (0, l.useState)(!1), [v, y] = (0, l.useState)(1), [N, g] = (0, l.useState)([]), [_, w] = (0, l.useState)({}), [O, k] = (0, l.useState)(!1), [S, C] = (0, l.useState)(1);
                (0, l.useEffect)(() => {
                    h.current && h.current.slideTo(x + 1)
                }, [x]), (0, l.useEffect)(() => {
                    let e = r.JV.filter(e => e.id == t)[0] || r.JV[0];
                    w(e);
                    let s = r.JV.filter(t => t != e).slice(0, 3);
                    g([e, ...s])
                }, []), (0, l.useEffect)(() => {
                    j(!0)
                }, []);
                let P = e => {
                    f(e), h.current && h.current.slideTo(e + 1)
                };
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("section", {
                        className: "layout-pt-lg layout-pb-md",
                        children: (0, a.jsx)("div", {
                            className: "container",
                            children: (0, a.jsxs)("div", {
                                className: "row y-gap-60 justify-between items-center",
                                children: [(0, a.jsx)("div", {
                                    className: "col-lg-6",
                                    children: (0, a.jsxs)("div", {
                                        className: "js-shop-slider",
                                        children: [(0, a.jsx)("div", {
                                            className: "shopSingle-preview__image js-slider-slider",
                                            children: b && (0, a.jsx)(n.tq, {
                                                className: "overflow-visible",
                                                modules: [i.W_, i.tl],
                                                loop: !0,
                                                spaceBetween: 0,
                                                speed: 1e3,
                                                slidesPerView: 1,
                                                onSwiper: e => {
                                                    h.current = e
                                                },
                                                onSlideChange: e => {
                                                    e.activeIndex > 4 ? x < e.activeIndex && f(0) : e.activeIndex < 1 ? f(3) : f(e.activeIndex - 1)
                                                },
                                                children: N.map((e, t) => (0, a.jsx)(n.o5, {
                                                    className: "swiper-slide",
                                                    children: (0, a.jsx)("div", {
                                                        className: "swiper-slide",
                                                        children: (0, a.jsxs)("span", {
                                                            "data-barba": !0,
                                                            className: "gallery__item js-gallery",
                                                            "data-gallery": "gallery1",
                                                            children: [(0, a.jsx)("div", {
                                                                className: "ratio ratio-63:57",
                                                                children: (0, a.jsx)(o(), {
                                                                    width: 690,
                                                                    height: 625,
                                                                    className: "absolute-full-center rounded-8",
                                                                    src: e.image,
                                                                    alt: "project image"
                                                                })
                                                            }), (0, a.jsx)("div", {
                                                                className: "gallery__button -bottom-right",
                                                                onClick: () => k(!0),
                                                                children: (0, a.jsx)(d.G, {
                                                                    style: {
                                                                        fontWeight: 800,
                                                                        fontSize: "20px",
                                                                        color: "#fff"
                                                                    },
                                                                    icon: m.r8p
                                                                })
                                                            })]
                                                        })
                                                    })
                                                }, t))
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "row y-gap-10 x-gap-10 pt-10 js-slider-pagination",
                                            children: N.map((e, t) => (0, a.jsx)("div", {
                                                style: {
                                                    cursor: "pointer"
                                                },
                                                onClick: () => P(t),
                                                className: "col-auto gallery__item",
                                                children: (0, a.jsx)(o(), {
                                                    width: 90,
                                                    height: 90,
                                                    className: "size-90 object-cover rounded-8",
                                                    src: e.image,
                                                    alt: "project image"
                                                })
                                            }, t))
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "col-lg-5",
                                    children: (0, a.jsxs)("div", {
                                        className: "pb-90 md:pb-0",
                                        children: [(0, a.jsx)("h2", {
                                            className: "text-30 fw-500 mt-4",
                                            children: _.name
                                        }), (0, a.jsxs)("div", {
                                            className: "text-24 fw-500 text-purple-1 mt-15",
                                            children: ["$", _.price]
                                        }), (0, a.jsx)("div", {
                                            className: "mt-30",
                                            children: (0, a.jsx)("p", {
                                                children: "Besides, random text risks to be unintendedly humorous or offensive, an unacceptable risk in corporate environments and its many variants have been employed."
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "shopSingle-info__action row x-gap-20 y-gap-20 pt-30",
                                            children: [(0, a.jsx)("div", {
                                                className: "col-auto",
                                                children: (0, a.jsxs)("div", {
                                                    className: "input-counter js-input-counter",
                                                    children: [(0, a.jsx)("input", {
                                                        required: !0,
                                                        className: "input-counter__counter",
                                                        type: "number",
                                                        placeholder: "value...",
                                                        value: v
                                                    }), (0, a.jsxs)("div", {
                                                        className: "input-counter__controls",
                                                        children: [(0, a.jsx)("button", {
                                                            className: "input-counter__up js-down",
                                                            onClick: () => y(e => e > 1 ? e - 1 : e),
                                                            children: (0, a.jsx)(d.G, {
                                                                icon: m.Kl4
                                                            })
                                                        }), (0, a.jsx)("button", {
                                                            className: "input-counter__down js-up",
                                                            onClick: () => y(e => e + 1),
                                                            children: (0, a.jsx)(d.G, {
                                                                icon: m.r8p
                                                            })
                                                        })]
                                                    })]
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "col-auto",
                                                children: (0, a.jsx)("button", {
                                                    className: "button h-50 px-45 -purple-1 text-white",
                                                    onClick: () => s(_.id),
                                                    children: c(_.id) ? "Already Added" : "Add To Cart"
                                                })
                                            })]
                                        }), (0, a.jsx)("div", {
                                            className: "pt-30",
                                            children: (0, a.jsxs)("button", {
                                                className: "d-flex items-center text-light-1",
                                                children: [(0, a.jsx)("i", {
                                                    className: "icon size-20 mr-8",
                                                    "data-feather": "heart"
                                                }), "Add to withlist"]
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "pt-30",
                                            children: [(0, a.jsx)("p", {
                                                children: "Category: Classic"
                                            }), (0, a.jsx)("p", {
                                                children: "Tags: Men, Sports, Women"
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })
                    }), (0, a.jsx)("section", {
                        className: "layout-pt-md layout-pb-md",
                        children: (0, a.jsx)("div", {
                            className: "tabs -active-purple-1 js-tabs",
                            children: (0, a.jsxs)("div", {
                                className: "row pt-30 border-top-dark",
                                children: [(0, a.jsx)("div", {
                                    className: "col-12",
                                    children: (0, a.jsxs)("div", {
                                        className: "tabs__controls d-flex justify-center js-tabs-controls",
                                        children: [(0, a.jsx)("button", {
                                            className: "tabs__button js-tabs-button ".concat(1 == S ? "is-active" : "", " "),
                                            "data-tab-target": ".-tab-item-1",
                                            type: "button",
                                            onClick: () => C(1),
                                            children: "Description"
                                        }), (0, a.jsx)("button", {
                                            className: "tabs__button js-tabs-button ml-30  ".concat(2 == S ? "is-active" : "", " "),
                                            "data-tab-target": ".-tab-item-2",
                                            type: "button",
                                            onClick: () => C(2),
                                            children: "Reviews (2)"
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "container pt-60",
                                    children: (0, a.jsx)("div", {
                                        className: "row justify-center",
                                        children: (0, a.jsx)("div", {
                                            className: "col-xl-8 col-lg-10 justify-center",
                                            children: (0, a.jsxs)("div", {
                                                className: "tabs__content js-tabs-content lg:px-15 md:px-15",
                                                children: [(0, a.jsxs)("div", {
                                                    className: "tabs__pane -tab-item-1  ".concat(1 == S ? "is-active" : "", " "),
                                                    children: [(0, a.jsx)("h4", {
                                                        className: "text-18 fw-500",
                                                        children: "What makes a good brand book?"
                                                    }), (0, a.jsx)("p", {
                                                        className: "mt-30",
                                                        children: "Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam phasellus vestibulum lorem sed risus ultricies. Magna sit amet purus gravida quis blandit. Arcu cursus vitae congue mauris. Nunc mattis enim ut tellus elementum sagittis vitae et leo. Semper risus in hendrerit gravida rutrum quisque non. At urna condimentum mattis pellentesque id nibh tortor. A erat nam at lectus urna duis convallis convallis tellus. Sit amet mauris commodo quis imperdiet massa. Vitae congue eu consequat ac felis."
                                                    })]
                                                }), (0, a.jsxs)("div", {
                                                    className: "tabs__pane -tab-item-2  ".concat(2 == S ? "is-active" : "", " "),
                                                    children: [(0, a.jsx)("div", {
                                                        className: "blogPost -comments",
                                                        children: (0, a.jsxs)("div", {
                                                            className: "blogPost__content",
                                                            children: [(0, a.jsx)("h2", {
                                                                className: "text-20 fw-500",
                                                                children: "Reviews"
                                                            }), (0, a.jsxs)("ul", {
                                                                className: "comments__list mt-30",
                                                                children: [(0, a.jsx)("li", {
                                                                    className: "comments__item",
                                                                    children: (0, a.jsxs)("div", {
                                                                        className: "comments__item-inner md:direction-column",
                                                                        children: [(0, a.jsx)("div", {
                                                                            className: "comments__img mr-20",
                                                                            children: (0, a.jsx)("div", {
                                                                                className: "bg-image rounded-full js-lazy",
                                                                                style: {
                                                                                    backgroundImage: "url(/assets/img/avatars/1.png)"
                                                                                }
                                                                            })
                                                                        }), (0, a.jsxs)("div", {
                                                                            className: "comments__body md:mt-15",
                                                                            children: [(0, a.jsxs)("div", {
                                                                                className: "comments__header",
                                                                                children: [(0, a.jsxs)("h4", {
                                                                                    className: "text-17 fw-500 lh-15",
                                                                                    children: ["Ali Tufan", (0, a.jsx)("span", {
                                                                                        className: "text-13 text-light-1 fw-400",
                                                                                        children: "3 Days ago"
                                                                                    })]
                                                                                }), (0, a.jsx)("div", {
                                                                                    className: "stars"
                                                                                })]
                                                                            }), (0, a.jsx)("h5", {
                                                                                className: "text-15 fw-500 mt-15",
                                                                                children: "The best LMS Design"
                                                                            }), (0, a.jsx)("div", {
                                                                                className: "comments__text mt-10",
                                                                                children: (0, a.jsx)("p", {
                                                                                    children: "This course is a very applicable. Professor Ng explains precisely each algorithm and even tries to give an intuition for mathematical and statistic concepts behind each algorithm. Thank you very much."
                                                                                })
                                                                            }), (0, a.jsxs)("div", {
                                                                                className: "comments__helpful mt-20",
                                                                                children: [(0, a.jsx)("span", {
                                                                                    className: "text-13 text-purple-1",
                                                                                    children: "Was this review helpful?"
                                                                                }), (0, a.jsx)("button", {
                                                                                    className: "button text-13 -sm -purple-1 text-white",
                                                                                    children: "Yes"
                                                                                }), (0, a.jsx)("button", {
                                                                                    className: "button text-13 -sm -light-7 text-purple-1",
                                                                                    children: "No"
                                                                                })]
                                                                            })]
                                                                        })]
                                                                    })
                                                                }), (0, a.jsx)("li", {
                                                                    className: "comments__item",
                                                                    children: (0, a.jsxs)("div", {
                                                                        className: "comments__item-inner md:direction-column",
                                                                        children: [(0, a.jsx)("div", {
                                                                            className: "comments__img mr-20",
                                                                            children: (0, a.jsx)("div", {
                                                                                className: "bg-image rounded-full js-lazy",
                                                                                style: {
                                                                                    backgroundImage: "url(/assets/img/avatars/1.png)"
                                                                                }
                                                                            })
                                                                        }), (0, a.jsxs)("div", {
                                                                            className: "comments__body md:mt-15",
                                                                            children: [(0, a.jsxs)("div", {
                                                                                className: "comments__header",
                                                                                children: [(0, a.jsxs)("h4", {
                                                                                    className: "text-17 fw-500 lh-15",
                                                                                    children: ["Ali Tufan", (0, a.jsx)("span", {
                                                                                        className: "text-13 text-light-1 fw-400",
                                                                                        children: "3 Days ago"
                                                                                    })]
                                                                                }), (0, a.jsx)("div", {
                                                                                    className: "stars"
                                                                                })]
                                                                            }), (0, a.jsx)("h5", {
                                                                                className: "text-15 fw-500 mt-15",
                                                                                children: "The best LMS Design"
                                                                            }), (0, a.jsx)("div", {
                                                                                className: "comments__text mt-10",
                                                                                children: (0, a.jsx)("p", {
                                                                                    children: "This course is a very applicable. Professor Ng explains precisely each algorithm and even tries to give an intuition for mathematical and statistic concepts behind each algorithm. Thank you very much."
                                                                                })
                                                                            }), (0, a.jsxs)("div", {
                                                                                className: "comments__helpful mt-20",
                                                                                children: [(0, a.jsx)("span", {
                                                                                    className: "text-13 text-purple-1",
                                                                                    children: "Was this review helpful?"
                                                                                }), (0, a.jsx)("button", {
                                                                                    className: "button text-13 -sm -purple-1 text-white",
                                                                                    children: "Yes"
                                                                                }), (0, a.jsx)("button", {
                                                                                    className: "button text-13 -sm -light-7 text-purple-1",
                                                                                    children: "No"
                                                                                })]
                                                                            })]
                                                                        })]
                                                                    })
                                                                })]
                                                            })]
                                                        })
                                                    }), (0, a.jsxs)("div", {
                                                        className: "respondForm pt-30",
                                                        children: [(0, a.jsx)("h3", {
                                                            className: "text-20 fw-500",
                                                            children: "Write a Review"
                                                        }), (0, a.jsxs)("div", {
                                                            className: "mt-30",
                                                            children: [(0, a.jsx)("h4", {
                                                                className: "text-16 fw-500",
                                                                children: "What is it like to Course?"
                                                            }), (0, a.jsxs)("div", {
                                                                className: "d-flex x-gap-10 pt-10",
                                                                children: [(0, a.jsx)("div", {
                                                                    className: "icon-star text-14 text-yellow-1"
                                                                }), (0, a.jsx)("div", {
                                                                    className: "icon-star text-14 text-yellow-1"
                                                                }), (0, a.jsx)("div", {
                                                                    className: "icon-star text-14 text-yellow-1"
                                                                }), (0, a.jsx)("div", {
                                                                    className: "icon-star text-14 text-yellow-1"
                                                                }), (0, a.jsx)("div", {
                                                                    className: "icon-star text-14 text-yellow-1"
                                                                })]
                                                            })]
                                                        }), (0, a.jsxs)("form", {
                                                            className: "contact-form respondForm__form row y-gap-30 pt-30",
                                                            onSubmit: e => {
                                                                e.preventDefault()
                                                            },
                                                            children: [(0, a.jsxs)("div", {
                                                                className: "col-12",
                                                                children: [(0, a.jsx)("label", {
                                                                    className: "text-16 lh-1 fw-500 text-dark-1 mb-10",
                                                                    children: "Review Title"
                                                                }), (0, a.jsx)("input", {
                                                                    required: !0,
                                                                    type: "text",
                                                                    name: "title",
                                                                    placeholder: "Great Courses"
                                                                })]
                                                            }), (0, a.jsxs)("div", {
                                                                className: "col-12",
                                                                children: [(0, a.jsx)("label", {
                                                                    className: "text-16 lh-1 fw-500 text-dark-1 mb-10",
                                                                    children: "Review Content"
                                                                }), (0, a.jsx)("textarea", {
                                                                    required: !0,
                                                                    name: "comment",
                                                                    placeholder: "Message",
                                                                    rows: "8"
                                                                })]
                                                            }), (0, a.jsx)("div", {
                                                                className: "col-12",
                                                                children: (0, a.jsx)("button", {
                                                                    type: "submit",
                                                                    name: "submit",
                                                                    id: "submit",
                                                                    className: "button -md -purple-1 text-white",
                                                                    children: "Submit Review"
                                                                })
                                                            })]
                                                        })]
                                                    })]
                                                })]
                                            })
                                        })
                                    })
                                })]
                            })
                        })
                    }), (0, a.jsx)(u, {
                        currentSlideIndex: x,
                        setCurrentSlideIndex: f,
                        setActiveLightBox: k,
                        activeLightBox: O,
                        images: N
                    })]
                })
            }
        },
        12522: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var a = s(9268);
            s(86006);
            var i = s(31092),
                n = s(13936),
                r = s(10009),
                l = s(71840),
                c = s(76394),
                o = s.n(c),
                d = s(35846),
                m = s.n(d);

            function u() {
                let {
                    addProductToCart: e,
                    isAddedToCartProducts: t
                } = (0, l.o)();
                return (0, a.jsx)("section", {
                    className: "layout-pt-md layout-pb-lg",
                    children: (0, a.jsxs)("div", {
                        className: "container",
                        children: [(0, a.jsx)("div", {
                            className: "row justify-center text-center",
                            children: (0, a.jsx)("div", {
                                className: "col-auto",
                                children: (0, a.jsxs)("div", {
                                    className: "sectionTitle ",
                                    children: [(0, a.jsx)("h2", {
                                        className: "sectionTitle__title ",
                                        children: "Related Products"
                                    }), (0, a.jsx)("p", {
                                        className: "sectionTitle__text ",
                                        children: "10,000+ unique online course list designs"
                                    })]
                                })
                            })
                        }), (0, a.jsx)("div", {
                            className: "row y-gap-32 pt-60 sm:pt-40",
                            children: i.JV.slice(2, 6).map((s, i) => (0, a.jsx)("div", {
                                className: "col-lg-3 col-sm-6",
                                children: (0, a.jsxs)("div", {
                                    className: "productCard -type-1 text-center",
                                    children: [(0, a.jsxs)("div", {
                                        className: "productCard__image",
                                        children: [(0, a.jsx)(o(), {
                                            width: 528,
                                            height: 528,
                                            src: s.image,
                                            alt: "Product image"
                                        }), (0, a.jsxs)("div", {
                                            className: "productCard__controls",
                                            children: [(0, a.jsx)("span", {
                                                className: "productCard__icon",
                                                children: (0, a.jsx)(n.G, {
                                                    icon: r.Mdf
                                                })
                                            }), (0, a.jsx)("span", {
                                                className: "productCard__icon",
                                                children: (0, a.jsx)(n.G, {
                                                    icon: r.m6i
                                                })
                                            })]
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "productCard__content mt-20",
                                        children: [(0, a.jsx)("div", {
                                            className: "text-14 lh-1",
                                            children: s.categories.map((e, t) => (0, a.jsx)("span", {
                                                children: "".concat(e, ", ")
                                            }, t))
                                        }), (0, a.jsx)("h4", {
                                            className: "text-17 fw-500 mt-15 linkCustom",
                                            children: (0, a.jsx)(m(), {
                                                href: "/shop/".concat(s.id),
                                                style: {
                                                    textDecoration: "none",
                                                    color: "inherit"
                                                },
                                                children: s.name
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "text-17 fw-500 text-purple-1 mt-15",
                                            children: ["$", s.price]
                                        }), (0, a.jsx)("div", {
                                            className: "productCard__button d-inline-block",
                                            onClick: () => e(s.id),
                                            children: (0, a.jsx)("span", {
                                                className: "button -md -outline-purple-1 -rounded text-dark-1 mt-15",
                                                children: t(s.id) ? "Already Added" : "Add To Cart"
                                            })
                                        })]
                                    })]
                                })
                            }, i))
                        })]
                    })
                })
            }
        }
    },
    function(e) {
        e.O(0, [8957, 8201, 1410, 6721, 1840, 5127, 4240, 4119, 7102, 9253, 6488, 1744], function() {
            return e(e.s = 28248)
        }), _N_E = e.O()
    }
]);