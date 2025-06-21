(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6951], {
        13936: function(e, s, t) {
            "use strict";
            t.d(s, {
                G: function() {
                    return v
                }
            });
            var r = t(61410),
                i = t(34390),
                a = t.n(i),
                l = t(86006);

            function n(e, s) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    s && (r = r.filter(function(s) {
                        return Object.getOwnPropertyDescriptor(e, s).enumerable
                    })), t.push.apply(t, r)
                }
                return t
            }

            function c(e) {
                for (var s = 1; s < arguments.length; s++) {
                    var t = null != arguments[s] ? arguments[s] : {};
                    s % 2 ? n(Object(t), !0).forEach(function(s) {
                        d(e, s, t[s])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : n(Object(t)).forEach(function(s) {
                        Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s))
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

            function d(e, s, t) {
                return s in e ? Object.defineProperty(e, s, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[s] = t, e
            }

            function h(e) {
                return function(e) {
                    if (Array.isArray(e)) return u(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, s) {
                    if (e) {
                        if ("string" == typeof e) return u(e, s);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t) return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return u(e, s)
                    }
                }(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(e, s) {
                (null == s || s > e.length) && (s = e.length);
                for (var t = 0, r = Array(s); t < s; t++) r[t] = e[t];
                return r
            }

            function p(e) {
                var s;
                return (s = e - 0) == s ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(e, s) {
                    return s ? s.toUpperCase() : ""
                })).substr(0, 1).toLowerCase() + e.substr(1)
            }
            var m = ["style"],
                f = !1;
            try {
                f = !0
            } catch (e) {}

            function x(e) {
                return e && "object" === o(e) && e.prefix && e.iconName && e.icon ? e : r.Qc.icon ? r.Qc.icon(e) : null === e ? null : e && "object" === o(e) && e.prefix && e.iconName ? e : Array.isArray(e) && 2 === e.length ? {
                    prefix: e[0],
                    iconName: e[1]
                } : "string" == typeof e ? {
                    prefix: "fas",
                    iconName: e
                } : void 0
            }

            function j(e, s) {
                return Array.isArray(s) && s.length > 0 || !Array.isArray(s) && s ? d({}, e, s) : {}
            }
            var v = l.forwardRef(function(e, s) {
                var t, i, a, l, n, o, u, p, m, g, N, y, w, _, k, C, O, S, P, A = e.icon,
                    T = e.mask,
                    E = e.symbol,
                    I = e.className,
                    F = e.title,
                    z = e.titleId,
                    D = e.maskId,
                    G = x(A),
                    M = j("classes", [].concat(h((i = e.beat, a = e.fade, l = e.beatFade, n = e.bounce, o = e.shake, u = e.flash, p = e.spin, m = e.spinPulse, g = e.spinReverse, N = e.pulse, y = e.fixedWidth, w = e.inverse, _ = e.border, k = e.listItem, C = e.flip, O = e.size, S = e.rotation, P = e.pull, d(t = {
                        "fa-beat": i,
                        "fa-fade": a,
                        "fa-beat-fade": l,
                        "fa-bounce": n,
                        "fa-shake": o,
                        "fa-flash": u,
                        "fa-spin": p,
                        "fa-spin-reverse": g,
                        "fa-spin-pulse": m,
                        "fa-pulse": N,
                        "fa-fw": y,
                        "fa-inverse": w,
                        "fa-border": _,
                        "fa-li": k,
                        "fa-flip": !0 === C,
                        "fa-flip-horizontal": "horizontal" === C || "both" === C,
                        "fa-flip-vertical": "vertical" === C || "both" === C
                    }, "fa-".concat(O), null != O), d(t, "fa-rotate-".concat(S), null != S && 0 !== S), d(t, "fa-pull-".concat(P), null != P), d(t, "fa-swap-opacity", e.swapOpacity), Object.keys(t).map(function(e) {
                        return t[e] ? e : null
                    }).filter(function(e) {
                        return e
                    }))), h(I.split(" ")))),
                    L = j("transform", "string" == typeof e.transform ? r.Qc.transform(e.transform) : e.transform),
                    R = j("mask", x(T)),
                    W = (0, r.qv)(G, c(c(c(c({}, M), L), R), {}, {
                        symbol: E,
                        title: F,
                        titleId: z,
                        maskId: D
                    }));
                if (!W) return ! function() {
                    if (!f && console && "function" == typeof console.error) {
                        var e;
                        (e = console).error.apply(e, arguments)
                    }
                }("Could not find icon", G), null;
                var U = W.abstract,
                    Z = {
                        ref: s
                    };
                return Object.keys(e).forEach(function(s) {
                    v.defaultProps.hasOwnProperty(s) || (Z[s] = e[s])
                }), b(U[0], Z)
            });
            v.displayName = "FontAwesomeIcon", v.propTypes = {
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
            }, v.defaultProps = {
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
            var b = (function e(s, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if ("string" == typeof t) return t;
                var i = (t.children || []).map(function(t) {
                        return e(s, t)
                    }),
                    a = Object.keys(t.attributes || {}).reduce(function(e, s) {
                        var r = t.attributes[s];
                        switch (s) {
                            case "class":
                                e.attrs.className = r, delete t.attributes.class;
                                break;
                            case "style":
                                e.attrs.style = r.split(";").map(function(e) {
                                    return e.trim()
                                }).filter(function(e) {
                                    return e
                                }).reduce(function(e, s) {
                                    var t = s.indexOf(":"),
                                        r = p(s.slice(0, t)),
                                        i = s.slice(t + 1).trim();
                                    return r.startsWith("webkit") ? e[r.charAt(0).toUpperCase() + r.slice(1)] = i : e[r] = i, e
                                }, {});
                                break;
                            default:
                                0 === s.indexOf("aria-") || 0 === s.indexOf("data-") ? e.attrs[s.toLowerCase()] = r : e.attrs[p(s)] = r
                        }
                        return e
                    }, {
                        attrs: {}
                    }),
                    l = r.style,
                    n = void 0 === l ? {} : l,
                    o = function(e, s) {
                        if (null == e) return {};
                        var t, r, i = function(e, s) {
                            if (null == e) return {};
                            var t, r, i = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) t = a[r], s.indexOf(t) >= 0 || (i[t] = e[t]);
                            return i
                        }(e, s);
                        if (Object.getOwnPropertySymbols) {
                            var a = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < a.length; r++) t = a[r], !(s.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                        }
                        return i
                    }(r, m);
                return a.attrs.style = c(c({}, a.attrs.style), n), s.apply(void 0, [t.tag, c(c({}, a.attrs), o)].concat(h(i)))
            }).bind(null, l.createElement)
        },
        83639: function(e, s, t) {
            "use strict";
            var r = t(13836);

            function i() {}

            function a() {}
            a.resetWarningCache = i, e.exports = function() {
                function e(e, s, t, i, a, l) {
                    if (l !== r) {
                        var n = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw n.name = "Invariant Violation", n
                    }
                }

                function s() {
                    return e
                }
                e.isRequired = e;
                var t = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: s,
                    element: e,
                    elementType: e,
                    instanceOf: s,
                    node: e,
                    objectOf: s,
                    oneOf: s,
                    oneOfType: s,
                    shape: s,
                    exact: s,
                    checkPropTypes: a,
                    resetWarningCache: i
                };
                return t.PropTypes = t, t
            }
        },
        34390: function(e, s, t) {
            e.exports = t(83639)()
        },
        13836: function(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        42149: function(e, s, t) {
            Promise.resolve().then(t.t.bind(t, 28707, 23)), Promise.resolve().then(t.t.bind(t, 8920, 23)), Promise.resolve().then(t.bind(t, 1311)), Promise.resolve().then(t.bind(t, 36395)), Promise.resolve().then(t.bind(t, 27337)), Promise.resolve().then(t.bind(t, 52737)), Promise.resolve().then(t.bind(t, 51591)), Promise.resolve().then(t.bind(t, 15726))
        },
        86484: function(e, s, t) {
            "use strict";
            t.d(s, {
                Z: function() {
                    return a
                }
            });
            var r = t(9268);
            t(35846);
            let i = [{
                id: 1,
                href: "#",
                iconClassName: "icon-facebook"
            }, {
                id: 2,
                href: "#",
                iconClassName: "icon-twitter"
            }, {
                id: 3,
                href: "#",
                iconClassName: "icon-instagram"
            }, {
                id: 4,
                href: "#",
                iconClassName: "icon-linkedin"
            }];

            function a(e) {
                let {
                    componentsClass: s,
                    textSize: t
                } = e;
                return (0, r.jsx)(r.Fragment, {
                    children: i.map((e, i) => (0, r.jsx)("a", {
                        className: s || "",
                        href: e.href,
                        children: (0, r.jsx)("i", {
                            className: "".concat(e.iconClassName, " ").concat(t)
                        })
                    }, i))
                })
            }
            t(86006)
        },
        15726: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return d
                }
            });
            var r = t(9268),
                i = t(86006),
                a = t(76394),
                l = t.n(a),
                n = t(68148),
                c = t(35846),
                o = t.n(c);

            function d() {
                let [e, s] = (0, i.useState)("All"), [t, a] = (0, i.useState)("All"), [c, d] = (0, i.useState)("");
                return (0, r.jsxs)("section", {
                    className: "layout-pt-lg layout-pb-lg bg-dark-2 relative",
                    children: [(0, r.jsx)("div", {
                        className: "side-image pr-25 lg:d-none",
                        children: (0, r.jsx)(l(), {
                            width: 465,
                            height: 360,
                            src: "/assets/img/home-5/cta/img.png",
                            alt: "image"
                        })
                    }), (0, r.jsx)("div", {
                        className: "container",
                        children: (0, r.jsx)("div", {
                            className: "row",
                            children: (0, r.jsxs)("div", {
                                className: "col-xl-12 col-lg-7",
                                children: [(0, r.jsxs)("div", {
                                    className: "sectionTitle ",
                                    children: [(0, r.jsx)("h2", {
                                        className: "sectionTitle__title text-white",
                                        children: "Get personal learning recommendations"
                                    }), (0, r.jsx)("p", {
                                        className: "sectionTitle__text text-white",
                                        children: "Enhance your skills with best Online courses"
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "row x-gap-20 y-gap-20 pt-60 lg:pt-40",
                                    children: [(0, r.jsx)("div", {
                                        className: "col-auto",
                                        children: (0, r.jsxs)("div", {
                                            className: "dropdown js-dropdown js-drop1-active ".concat("category" == c ? "-is-dd-active" : ""),
                                            children: [(0, r.jsxs)("div", {
                                                onClick: () => d(e => "category" == e ? "" : "category"),
                                                className: "dropdown__button d-flex items-center bg-dark-1 text-14 text-white h-60",
                                                "data-el-toggle": ".js-drop1-toggle",
                                                "data-el-toggle-active": ".js-drop1-active",
                                                children: [(0, r.jsx)("span", {
                                                    className: "js-dropdown-title",
                                                    children: "All" == e ? "Category" : e
                                                }), (0, r.jsx)("i", {
                                                    className: "icon text-9 ml-40 icon-chevron-down"
                                                })]
                                            }), (0, r.jsx)("div", {
                                                className: "toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-drop1-toggle ".concat("category" == c ? "-is-el-visible" : "", " "),
                                                children: (0, r.jsx)("div", {
                                                    className: "text-14 y-gap-15 js-dropdown-list",
                                                    children: n.Lp.map((t, i) => (0, r.jsx)("div", {
                                                        onClick: () => {
                                                            s(t), d("")
                                                        },
                                                        className: "d-block js-dropdown-link cursor ".concat(e == t ? "activeMenu" : "", " "),
                                                        children: t
                                                    }, i))
                                                })
                                            })]
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "col-auto",
                                        children: (0, r.jsxs)("div", {
                                            className: "dropdown js-dropdown js-drop3-active ".concat("difficulty" == c ? "-is-dd-active" : ""),
                                            children: [(0, r.jsxs)("div", {
                                                onClick: () => d(e => "difficulty" == e ? "" : "difficulty"),
                                                className: "dropdown__button d-flex items-center bg-dark-1 text-14 text-white h-60",
                                                "data-el-toggle": ".js-drop3-toggle",
                                                "data-el-toggle-active": ".js-drop3-active",
                                                children: [(0, r.jsx)("span", {
                                                    className: "js-dropdown-title",
                                                    children: "All" == t ? "Diffiulty" : t
                                                }), (0, r.jsx)("i", {
                                                    className: "icon text-9 ml-40 icon-chevron-down"
                                                })]
                                            }), (0, r.jsx)("div", {
                                                className: "toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-drop3-toggle ".concat("difficulty" == c ? "-is-el-visible" : "", " "),
                                                children: (0, r.jsx)("div", {
                                                    className: "text-14 y-gap-15 js-dropdown-list",
                                                    children: n.zV.map((e, s) => (0, r.jsx)("div", {
                                                        onClick: () => {
                                                            a(e), d("")
                                                        },
                                                        className: "d-block js-dropdown-link cursor ".concat(t == e ? "activeMenu" : "", " "),
                                                        children: e
                                                    }, s))
                                                })
                                            })]
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "col-auto",
                                        children: (0, r.jsx)(o(), {
                                            href: "/courses-list-1",
                                            className: "button -md -purple-1 text-white",
                                            children: "Get Started Now"
                                        })
                                    })]
                                })]
                            })
                        })
                    })]
                })
            }
        },
        52720: function(e, s, t) {
            "use strict";
            t.d(s, {
                Z: function() {
                    return o
                }
            });
            var r = t(9268),
                i = t(86006),
                a = t(76394),
                l = t.n(a),
                n = t(35846),
                c = t.n(n);

            function o(e) {
                let {
                    data: s,
                    index: t
                } = e, [a, n] = (0, i.useState)([]);
                return (0, i.useEffect)(() => {
                    for (let e = Math.round(s.rating); e >= 1; e--) n(e => [...e, "star"])
                }, []), (0, r.jsx)("div", {
                    className: "swiper-slide",
                    style: {
                        height: "fit-content"
                    },
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsxs)("div", {
                            className: "coursesCard -type-1 ",
                            style: {
                                border: "none",
                                padding: 0
                            },
                            children: [(0, r.jsxs)("div", {
                                className: "relative",
                                children: [(0, r.jsxs)("div", {
                                    className: "coursesCard__image overflow-hidden rounded-8",
                                    children: [(0, r.jsx)(l(), {
                                        width: 500,
                                        height: 500,
                                        style: {
                                            height: "100%",
                                            width: "100%"
                                        },
                                        className: "w-1/1",
                                        src: s.imageSrc,
                                        alt: "image"
                                    }), (0, r.jsx)("div", {
                                        className: "coursesCard__image_overlay rounded-8"
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: "d-flex justify-between py-10 px-10 absolute-full-center z-3"
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "h-100 pt-15",
                                children: [(0, r.jsxs)("div", {
                                    className: "d-flex items-center",
                                    children: [(0, r.jsx)("div", {
                                        className: "text-14 lh-1 text-yellow-1 mr-10",
                                        children: s.rating
                                    }), (0, r.jsx)("div", {
                                        className: "d-flex x-gap-5 items-center",
                                        children: a.map((e, s) => (0, r.jsx)("div", {
                                            className: "icon-star text-9 text-yellow-1"
                                        }, s))
                                    }), (0, r.jsxs)("div", {
                                        className: "text-13 lh-1 ml-10",
                                        children: ["(", s.ratingCount, ")"]
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: "text-17 lh-15 fw-500 text-dark-1 mt-10",
                                    children: (0, r.jsx)(c(), {
                                        className: "linkCustom",
                                        href: "/courses/".concat(s.id),
                                        children: s.title
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: "d-flex x-gap-10 items-center pt-10",
                                    children: [(0, r.jsxs)("div", {
                                        className: "d-flex items-center",
                                        children: [(0, r.jsx)("div", {
                                            className: "mr-8",
                                            children: (0, r.jsx)(l(), {
                                                width: 16,
                                                height: 17,
                                                src: "assets/img/coursesCards/icons/1.svg",
                                                alt: "icon"
                                            })
                                        }), (0, r.jsxs)("div", {
                                            className: "text-14 lh-1",
                                            children: [s.lessonCount, " lesson"]
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "d-flex items-center",
                                        children: [(0, r.jsx)("div", {
                                            className: "mr-8",
                                            children: (0, r.jsx)(l(), {
                                                width: 16,
                                                height: 17,
                                                src: "assets/img/coursesCards/icons/2.svg",
                                                alt: "icon"
                                            })
                                        }), (0, r.jsx)("div", {
                                            className: "text-14 lh-1",
                                            children: "".concat(Math.floor(s.duration / 60), "h ").concat(Math.floor(s.duration % 60), "m")
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "d-flex items-center",
                                        children: [(0, r.jsx)("div", {
                                            className: "mr-8",
                                            children: (0, r.jsx)(l(), {
                                                width: 16,
                                                height: 17,
                                                src: "assets/img/coursesCards/icons/3.svg",
                                                alt: "icon"
                                            })
                                        }), (0, r.jsx)("div", {
                                            className: "text-14 lh-1",
                                            children: s.level
                                        })]
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "coursesCard-footer",
                                    children: [(0, r.jsxs)("div", {
                                        className: "coursesCard-footer__author",
                                        children: [(0, r.jsx)(l(), {
                                            width: 30,
                                            height: 30,
                                            src: s.authorImageSrc,
                                            alt: "image"
                                        }), (0, r.jsx)("div", {
                                            children: s.authorName
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: "coursesCard-footer__price",
                                        children: s.paid ? (0, r.jsxs)(r.Fragment, {
                                            children: [(0, r.jsxs)("div", {
                                                children: ["$", s.originalPrice]
                                            }), (0, r.jsxs)("div", {
                                                children: ["$", s.discountedPrice]
                                            })]
                                        }) : (0, r.jsxs)(r.Fragment, {
                                            children: [(0, r.jsx)("div", {}), (0, r.jsx)("div", {
                                                children: "Free"
                                            })]
                                        })
                                    })]
                                })]
                            })]
                        })
                    })
                })
            }
        },
        27337: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return o
                }
            });
            var r = t(9268),
                i = t(86006),
                a = t(52720),
                l = t(68148),
                n = t(36115),
                c = t(70382);

            function o(e) {
                let {
                    tabBtnStyle: s
                } = e, [t, o] = (0, i.useState)(!1), [d, h] = (0, i.useState)("All"), [u, p] = (0, i.useState)([]);
                return (0, i.useEffect)(() => {
                    if ("All" == d) p(l.om);
                    else {
                        let e = l.om.filter(e => e.state == d);
                        p(e)
                    }
                }, [d]), (0, i.useEffect)(() => {
                    o(!0)
                }, []), (0, r.jsx)("section", {
                    className: "layout-pt-lg layout-pb-md",
                    children: (0, r.jsx)("div", {
                        className: "container",
                        children: (0, r.jsxs)("div", {
                            className: "tabs -pills js-tabs",
                            children: [(0, r.jsxs)("div", {
                                className: "row y-gap-20 justify-between items-end",
                                children: [(0, r.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, r.jsxs)("div", {
                                        className: "sectionTitle ",
                                        children: [(0, r.jsx)("h2", {
                                            className: "sectionTitle__title ",
                                            children: "Explore Featured Courses"
                                        }), (0, r.jsx)("p", {
                                            className: "sectionTitle__text ",
                                            children: "10,000+ unique online course list designs"
                                        })]
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, r.jsx)("div", {
                                        className: "tabs__controls d-flex justify-center x-gap-10 js-tabs-controls",
                                        children: l.MZ.map((e, t) => (0, r.jsx)("div", {
                                            children: (0, r.jsx)("button", {
                                                onClick: () => h(e),
                                                className: "".concat(s || "tabs__button px-20 py-8 rounded-200 js-tabs-button", "  ").concat(d == e ? "is-active" : "", " "),
                                                "data-tab-target": ".-tab-item-1",
                                                type: "button",
                                                children: e
                                            })
                                        }, t))
                                    })
                                })]
                            }), (0, r.jsx)("div", {
                                className: "tabs__content pt-60 lg:pt-50 js-tabs-content",
                                children: (0, r.jsx)("div", {
                                    className: "tabs__pane -tab-item-1 is-active",
                                    children: (0, r.jsxs)("div", {
                                        className: " js-section-slider",
                                        "data-gap": "30",
                                        "data-slider-cols": "xl-4 lg-3 md-2 sm-2",
                                        "data-aos": "fade-left",
                                        "data-aos-offset": "80",
                                        "data-aos-duration": 800,
                                        children: [t && (0, r.jsx)(c.tq, {
                                            modules: [n.W_, n.tl],
                                            className: "overflow-hidden",
                                            navigation: {
                                                nextEl: ".course-five-right",
                                                prevEl: ".course-five-left"
                                            },
                                            spaceBetween: 30,
                                            slidesPerView: 1,
                                            breakpoints: {
                                                450: {
                                                    slidesPerView: 2
                                                },
                                                768: {
                                                    slidesPerView: 3
                                                },
                                                1200: {
                                                    slidesPerView: 4
                                                }
                                            },
                                            children: u.map((e, s) => (0, r.jsx)(c.o5, {
                                                children: (0, r.jsx)(a.Z, {
                                                    data: e,
                                                    index: s
                                                })
                                            }, s))
                                        }), (0, r.jsx)("button", {
                                            className: "course-five-left section-slider-nav -prev -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-prev",
                                            children: (0, r.jsx)("i", {
                                                className: "icon icon-arrow-left text-24"
                                            })
                                        }), (0, r.jsx)("button", {
                                            className: "course-five-right section-slider-nav -next -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-next",
                                            children: (0, r.jsx)("i", {
                                                className: "icon icon-arrow-right text-24"
                                            })
                                        })]
                                    })
                                })
                            })]
                        })
                    })
                })
            }
        },
        51591: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return d
                }
            });
            var r = t(9268),
                i = t(86006),
                a = t(88371),
                l = t(35846),
                n = t.n(l),
                c = t(13936),
                o = t(10009);

            function d() {
                let [e, s] = (0, i.useState)(!1);
                return (0, r.jsx)("section", {
                    className: "layout-pt-lg layout-pb-lg bg-light-3",
                    children: (0, r.jsxs)("div", {
                        className: "container",
                        children: [(0, r.jsx)("div", {
                            className: "row justify-center text-center",
                            children: (0, r.jsxs)("div", {
                                className: "col-auto",
                                children: [(0, r.jsxs)("div", {
                                    className: "sectionTitle ",
                                    children: [(0, r.jsx)("h2", {
                                        className: "sectionTitle__title ",
                                        children: "Simple Pricing"
                                    }), (0, r.jsx)("p", {
                                        className: "sectionTitle__text ",
                                        children: "Lorem ipsum dolor sit amet, consectetur."
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "d-flex justify-center items-center pt-60 lg:pt-30",
                                    children: [(0, r.jsx)("div", {
                                        className: "text-14 text-dark-1",
                                        children: "Monthly"
                                    }), (0, r.jsx)("div", {
                                        className: "form-switch px-20",
                                        children: (0, r.jsxs)("div", {
                                            className: "switch",
                                            "data-switch": ".js-switch-content",
                                            children: [(0, r.jsx)("input", {
                                                checked: e,
                                                onChange: e => {
                                                    s(e.target.checked)
                                                },
                                                type: "checkbox"
                                            }), (0, r.jsx)("span", {
                                                className: "switch__slider"
                                            })]
                                        })
                                    }), (0, r.jsxs)("div", {
                                        className: "text-14 text-dark-1",
                                        children: ["Annually ", (0, r.jsx)("span", {
                                            className: "text-purple-1",
                                            children: "Save 30%"
                                        })]
                                    })]
                                })]
                            })
                        }), (0, r.jsxs)("div", {
                            className: "row y-gap-30 justify-between pt-60 lg:pt-50",
                            children: [(0, r.jsx)("div", {
                                className: "col-lg-4 col-md-6",
                                children: (0, r.jsxs)("div", {
                                    className: "priceCard -type-1 rounded-16 overflow-hidden",
                                    "data-aos": "fade-right",
                                    "data-aos-duration": 500,
                                    children: [(0, r.jsxs)("div", {
                                        className: "priceCard__header py-40 pl-50 bg-dark-2",
                                        children: [(0, r.jsx)("div", {
                                            className: "priceCard__type text-18 lh-11 fw-500 text-white",
                                            children: a.n[0].type
                                        }), (0, r.jsx)("div", {
                                            className: "priceCard__price text-45 lh-11 fw-700 text-white mt-8",
                                            children: a.n[0].price ? a.n[0].price : "Free"
                                        }), (0, r.jsx)("div", {
                                            className: "priceCard__period text-white mt-5",
                                            children: a.n[0].period
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "priceCard__content pt-30 pr-90 pb-50 pl-50 bg-white",
                                        children: [(0, r.jsx)("div", {
                                            className: "priceCard__text",
                                            children: "Standard listing submission, active for 30 dayss"
                                        }), (0, r.jsx)("div", {
                                            className: "priceCard__list mt-30",
                                            children: a.n[0].features.map((e, s) => (0, r.jsxs)("div", {
                                                children: [(0, r.jsx)("span", {
                                                    className: " pr-8 text-purple-1",
                                                    style: {
                                                        fontSize: "12px",
                                                        fontWeight: "300"
                                                    },
                                                    "aria-hidden": "true",
                                                    children: (0, r.jsx)(c.G, {
                                                        icon: o.LEp
                                                    })
                                                }), e]
                                            }, s))
                                        }), (0, r.jsx)("div", {
                                            className: "priceCard__button mt-30",
                                            children: (0, r.jsx)(n(), {
                                                className: "button -md -purple-3 text-purple-1",
                                                href: "/courses-list-1",
                                                children: "Get Started Now"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, r.jsx)("div", {
                                className: "col-lg-4 col-md-6",
                                children: (0, r.jsxs)("div", {
                                    className: "priceCard -type-1 rounded-16 overflow-hidden",
                                    "data-aos": "fade-right",
                                    "data-aos-duration": 1e3,
                                    children: [(0, r.jsxs)("div", {
                                        className: "priceCard__header py-40 pl-50 bg-purple-1",
                                        children: [(0, r.jsx)("div", {
                                            className: "priceCard__type text-18 lh-11 fw-500 text-white",
                                            children: a.n[1].type
                                        }), (0, r.jsxs)("div", {
                                            className: "priceCard__price text-45 lh-11 fw-700 text-white mt-8",
                                            children: ["$", e ? (12 * a.n[1].price * .7).toFixed(2) : a.n[1].price]
                                        }), (0, r.jsx)("div", {
                                            className: "priceCard__period text-white mt-5",
                                            children: e ? "per year" : a.n[1].period
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "priceCard__content pt-30 pr-90 pb-50 pl-50 bg-purple-1",
                                        children: [(0, r.jsx)("div", {
                                            className: "priceCard__text text-white",
                                            children: "Standard listing submission, active for 30 dayss"
                                        }), (0, r.jsx)("div", {
                                            className: "priceCard__list mt-30",
                                            children: a.n[1].features.map((e, s) => (0, r.jsxs)("div", {
                                                className: "text-white",
                                                children: [(0, r.jsx)("span", {
                                                    className: " pr-8  text-white",
                                                    style: {
                                                        fontSize: "12px",
                                                        fontWeight: "300"
                                                    },
                                                    "aria-hidden": "true",
                                                    children: (0, r.jsx)(c.G, {
                                                        icon: o.LEp
                                                    })
                                                }), e]
                                            }, s))
                                        }), (0, r.jsx)("div", {
                                            className: "priceCard__button mt-30",
                                            children: (0, r.jsx)(n(), {
                                                className: "button -md -white text-purple-1",
                                                href: "/courses-list-1",
                                                children: "Get Started Now"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, r.jsx)("div", {
                                className: "col-lg-4 col-md-6",
                                children: (0, r.jsxs)("div", {
                                    className: "priceCard -type-1 rounded-16 overflow-hidden",
                                    "data-aos": "fade-right",
                                    "data-aos-duration": 1500,
                                    children: [(0, r.jsxs)("div", {
                                        className: "priceCard__header py-40 pl-50 bg-dark-2",
                                        children: [(0, r.jsx)("div", {
                                            className: "priceCard__type text-18 lh-11 fw-500 text-white",
                                            children: a.n[2].type
                                        }), (0, r.jsxs)("div", {
                                            className: "priceCard__price text-45 lh-11 fw-700 text-white mt-8",
                                            children: ["$", e ? (12 * a.n[2].price * .7).toFixed(2) : a.n[2].price]
                                        }), (0, r.jsx)("div", {
                                            className: "priceCard__period text-white mt-5",
                                            children: e ? "per year" : a.n[2].period
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "priceCard__content pt-30 pr-90 pb-50 pl-50 bg-white",
                                        children: [(0, r.jsx)("div", {
                                            className: "priceCard__text",
                                            children: "Standard listing submission, active for 30 dayss"
                                        }), (0, r.jsx)("div", {
                                            className: "priceCard__list mt-30",
                                            children: a.n[2].features.map((e, s) => (0, r.jsxs)("div", {
                                                children: [(0, r.jsx)("span", {
                                                    className: "pr-8  text-purple-1",
                                                    style: {
                                                        fontSize: "12px",
                                                        fontWeight: "300"
                                                    },
                                                    "aria-hidden": "true",
                                                    children: (0, r.jsx)(c.G, {
                                                        icon: o.LEp
                                                    })
                                                }), e]
                                            }, s))
                                        }), (0, r.jsx)("div", {
                                            className: "priceCard__button mt-30",
                                            children: (0, r.jsx)(n(), {
                                                className: "button -md -purple-3 text-purple-1",
                                                href: "/courses-list-1",
                                                children: "Get Started Now"
                                            })
                                        })]
                                    })]
                                })
                            })]
                        })]
                    })
                })
            }
        },
        7700: function(e, s, t) {
            "use strict";
            t.d(s, {
                Z: function() {
                    return n
                }
            });
            var r = t(9268);
            t(86006);
            var i = t(69567),
                a = t(35846),
                l = t.n(a);

            function n(e) {
                let {
                    allClasses: s
                } = e;
                return (0, r.jsx)(r.Fragment, {
                    children: i.d.map((e, t) => (0, r.jsxs)("div", {
                        className: "col-xl-2 col-lg-4 col-md-6",
                        children: [(0, r.jsx)("div", {
                            className: "".concat(s || ""),
                            children: e.title
                        }), (0, r.jsx)("div", {
                            className: "d-flex y-gap-10 flex-column",
                            children: e.links.map((e, s) => (0, r.jsx)(l(), {
                                href: e.href,
                                children: e.label
                            }, s))
                        })]
                    }, t))
                })
            }
        },
        80808: function(e, s, t) {
            "use strict";
            t.d(s, {
                Z: function() {
                    return n
                }
            });
            var r = t(9268);
            let i = [{
                id: 1,
                href: "/help-center",
                label: "Help"
            }, {
                id: 2,
                href: "/terms",
                label: "Privacy Policy"
            }, {
                id: 3,
                href: "/terms",
                label: "Cookie Notice"
            }, {
                id: 4,
                href: "/terms",
                label: "Security"
            }, {
                id: 5,
                href: "/terms",
                label: "Terms of Use"
            }];
            var a = t(35846),
                l = t.n(a);

            function n(e) {
                let {
                    allClasses: s
                } = e;
                return (0, r.jsx)(r.Fragment, {
                    children: i.map((e, t) => (0, r.jsx)(l(), {
                        className: "".concat(s || ""),
                        href: e.href,
                        children: e.label
                    }, t))
                })
            }
            t(86006)
        },
        52737: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return o
                }
            });
            var r = t(9268);
            t(86006);
            var i = t(80808),
                a = t(7700),
                l = t(86484),
                n = t(76394),
                c = t.n(n);

            function o() {
                return (0, r.jsx)("footer", {
                    className: "footer -type-1 bg-purple-1",
                    children: (0, r.jsxs)("div", {
                        className: "container",
                        children: [(0, r.jsx)("div", {
                            className: "footer-header",
                            children: (0, r.jsxs)("div", {
                                className: "row y-gap-20 justify-between items-center",
                                children: [(0, r.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, r.jsx)("div", {
                                        className: "footer-header__logo",
                                        children: (0, r.jsx)(c(), {
                                            width: 140,
                                            height: 50,
                                            src: "/assets/img/general/logo-pure-white.svg",
                                            alt: "logo"
                                        })
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, r.jsxs)("div", {
                                        className: "footer-header-socials",
                                        children: [(0, r.jsx)("div", {
                                            className: "footer-header-socials__title text-white",
                                            children: "Follow us on social media"
                                        }), (0, r.jsx)("div", {
                                            className: "footer-header-socials__list",
                                            children: (0, r.jsx)(l.Z, {})
                                        })]
                                    })
                                })]
                            })
                        }), (0, r.jsx)("div", {
                            className: "footer-columns",
                            children: (0, r.jsxs)("div", {
                                className: "row y-gap-30",
                                children: [(0, r.jsx)(a.Z, {
                                    allClasses: "text-17 fw-500 text-white uppercase mb-25"
                                }), (0, r.jsxs)("div", {
                                    className: "col-xl-4 col-lg-4 col-md-6",
                                    children: [(0, r.jsx)("div", {
                                        className: "text-17 fw-500 text-white uppercase mb-25",
                                        children: "GET IN TOUCH"
                                    }), (0, r.jsxs)("div", {
                                        className: "footer-columns-form",
                                        children: [(0, r.jsx)("div", {
                                            children: "We don’t send spam so don’t worry."
                                        }), (0, r.jsx)("form", {
                                            onSubmit: e => {
                                                e.preventDefault()
                                            },
                                            children: (0, r.jsxs)("div", {
                                                className: "form-group",
                                                children: [(0, r.jsx)("input", {
                                                    required: !0,
                                                    type: "text",
                                                    placeholder: "Email..."
                                                }), (0, r.jsx)("button", {
                                                    type: "submit",
                                                    children: "Submit"
                                                })]
                                            })
                                        })]
                                    })]
                                })]
                            })
                        }), (0, r.jsx)("div", {
                            className: "py-30 border-top-light-15",
                            children: (0, r.jsxs)("div", {
                                className: "row justify-between items-center y-gap-20",
                                children: [(0, r.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, r.jsxs)("div", {
                                        className: "d-flex items-center h-100 text-white",
                                        children: ["\xa9 ", new Date().getFullYear(), " Educrat. All Right Reserved."]
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, r.jsxs)("div", {
                                        className: "d-flex x-gap-20 y-gap-20 items-center flex-wrap",
                                        children: [(0, r.jsx)("div", {
                                            children: (0, r.jsx)("div", {
                                                className: "d-flex x-gap-15 text-white",
                                                children: (0, r.jsx)(i.Z, {})
                                            })
                                        }), (0, r.jsx)("div", {
                                            children: (0, r.jsxs)("a", {
                                                href: "#",
                                                className: "button px-30 h-50 -dark-6 rounded-200 text-white",
                                                children: [(0, r.jsx)("i", {
                                                    className: "icon-worldwide text-20 mr-15"
                                                }), (0, r.jsx)("span", {
                                                    className: "text-15",
                                                    children: "English"
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })
                        })]
                    })
                })
            }
        },
        36395: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return p
                }
            });
            var r = t(9268),
                i = t(86006),
                a = t(39179),
                l = t(34119),
                n = t(16797),
                c = t(51469),
                o = t(76394),
                d = t.n(o),
                h = t(35846),
                u = t.n(h);

            function p() {
                let [e, s] = (0, i.useState)(!1);
                return (0, r.jsx)("header", {
                    "data-add-bg": "",
                    className: "header -type-4 -shadow bg-white js-header",
                    children: (0, r.jsx)("div", {
                        className: "header__container border-bottom-light py-10",
                        children: (0, r.jsxs)("div", {
                            className: "row justify-between items-center",
                            children: [(0, r.jsx)("div", {
                                className: "col-auto",
                                children: (0, r.jsxs)("div", {
                                    className: "header-left d-flex items-center",
                                    children: [(0, r.jsx)("div", {
                                        className: "header__logo pr-30 xl:pr-20 md:pr-0",
                                        children: (0, r.jsx)(u(), {
                                            href: "/",
                                            children: (0, r.jsx)(d(), {
                                                width: 140,
                                                height: 50,
                                                src: "/assets/img/general/logo-dark.svg",
                                                alt: "logo"
                                            })
                                        })
                                    }), (0, r.jsx)(l.n, {
                                        allClasses: "header__explore px-30 xl:px-20 -before-border -after-border xl:d-none"
                                    }), (0, r.jsx)(n.Z, {
                                        headerPosition: "pl-30 xl:pl-20",
                                        allClasses: "menu__nav text-dark-1 -is-active"
                                    }), (0, r.jsx)(c.Z, {
                                        activeMobileMenu: e,
                                        setActiveMobileMenu: s
                                    })]
                                })
                            }), (0, r.jsx)("div", {
                                className: "col-auto",
                                children: (0, r.jsxs)("div", {
                                    className: "header-right d-flex items-center",
                                    children: [(0, r.jsxs)("div", {
                                        className: "header-right__icons text-white d-flex items-center",
                                        children: [(0, r.jsx)("div", {
                                            className: "header-search-field",
                                            children: (0, r.jsx)("form", {
                                                onSubmit: e => {
                                                    e.preventDefault()
                                                },
                                                children: (0, r.jsxs)("div", {
                                                    className: "header-search-field__group",
                                                    children: [(0, r.jsx)("input", {
                                                        required: !0,
                                                        type: "text",
                                                        placeholder: "What do you want to learn?"
                                                    }), (0, r.jsx)("button", {
                                                        type: "submit",
                                                        children: (0, r.jsx)("i", {
                                                            className: "icon icon-search"
                                                        })
                                                    })]
                                                })
                                            })
                                        }), (0, r.jsx)(a.Z, {
                                            allClasses: "d-flex items-center text-dark-1",
                                            parentClassess: "relative -after-border pl-20 sm:pl-15"
                                        }), (0, r.jsx)("div", {
                                            className: "d-none xl:d-block pl-20 sm:pl-15",
                                            children: (0, r.jsx)("button", {
                                                onClick: () => s(!0),
                                                className: "text-dark-1 items-center",
                                                "data-el-toggle": ".js-mobile-menu-toggle",
                                                children: (0, r.jsx)("i", {
                                                    className: "text-11 icon icon-mobile-menu"
                                                })
                                            })
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "header-right__buttons d-flex items-center ml-30 xl:ml-20 lg:d-none",
                                        children: [(0, r.jsx)(u(), {
                                            href: "/login",
                                            className: "button -underline text-purple-1",
                                            children: "Log in"
                                        }), (0, r.jsx)(u(), {
                                            href: "/signup",
                                            className: "button h-50 px-30 -purple-1 -rounded text-white ml-20",
                                            children: "Sign up"
                                        })]
                                    })]
                                })
                            })]
                        })
                    })
                })
            }
        },
        69567: function(e, s, t) {
            "use strict";
            t.d(s, {
                d: function() {
                    return r
                }
            });
            let r = [{
                title: "ABOUT",
                links: [{
                    href: "/about-1",
                    label: "About Us"
                }, {
                    href: "/blog-list-1",
                    label: "Learner Stories"
                }, {
                    href: "/instructor-become",
                    label: "Careers"
                }, {
                    href: "/blog-list-1",
                    label: "Press"
                }, {
                    href: "#",
                    label: "Leadership"
                }, {
                    href: "/contact-1",
                    label: "Contact Us"
                }]
            }, {
                title: "CATEGORIES",
                links: [{
                    href: "/courses/1",
                    label: "Development"
                }, {
                    href: "/courses-single-2/3",
                    label: "Business"
                }, {
                    href: "/courses-single-3/3",
                    label: "Finance & Accounting"
                }, {
                    href: "/courses-single-4/3",
                    label: "IT & Software"
                }, {
                    href: "/courses-single-5/3",
                    label: "Office Productivity"
                }, {
                    href: "/courses-single-6/3",
                    label: "Design"
                }, {
                    href: "/courses/1",
                    label: "Marketing"
                }]
            }, {
                title: "Others",
                links: [{
                    href: "/courses/1",
                    label: "Lifestyle"
                }, {
                    href: "/courses-single-2/3",
                    label: "Photography & Video"
                }, {
                    href: "/courses-single-3/3",
                    label: "Health & Fitness"
                }, {
                    href: "/courses-single-4/3",
                    label: "Music"
                }, {
                    href: "/courses-single-5/3",
                    label: "UX Design"
                }, {
                    href: "/courses-single-6/3",
                    label: "SEO"
                }]
            }, {
                title: "SUPPORT",
                links: [{
                    href: "/terms",
                    label: "Documentation"
                }, {
                    href: "/help-center",
                    label: "FAQs"
                }, {
                    href: "/dashboard",
                    label: "Dashboard"
                }, {
                    href: "/contact-1",
                    label: "Contact"
                }]
            }]
        },
        88371: function(e, s, t) {
            "use strict";
            t.d(s, {
                n: function() {
                    return r
                }
            });
            let r = [{
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
        }
    },
    function(e) {
        e.O(0, [8957, 8201, 1410, 6721, 1840, 5127, 4240, 4119, 9253, 6488, 1744], function() {
            return e(e.s = 42149)
        }), _N_E = e.O()
    }
]);