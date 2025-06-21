(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8853], {
        13936: function(e, t, r) {
            "use strict";
            r.d(t, {
                G: function() {
                    return g
                }
            });
            var i = r(61410),
                n = r(34390),
                o = r.n(n),
                a = r(86006);

            function s(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, i)
                }
                return r
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(r), !0).forEach(function(t) {
                        c(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function u(e) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function c(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function f(e) {
                return function(e) {
                    if (Array.isArray(e)) return d(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return d(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d(e, t)
                    }
                }(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
                return i
            }

            function p(e) {
                var t;
                return (t = e - 0) == t ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(e, t) {
                    return t ? t.toUpperCase() : ""
                })).substr(0, 1).toLowerCase() + e.substr(1)
            }
            var y = ["style"],
                b = !1;
            try {
                b = !0
            } catch (e) {}

            function m(e) {
                return e && "object" === u(e) && e.prefix && e.iconName && e.icon ? e : i.Qc.icon ? i.Qc.icon(e) : null === e ? null : e && "object" === u(e) && e.prefix && e.iconName ? e : Array.isArray(e) && 2 === e.length ? {
                    prefix: e[0],
                    iconName: e[1]
                } : "string" == typeof e ? {
                    prefix: "fas",
                    iconName: e
                } : void 0
            }

            function h(e, t) {
                return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? c({}, e, t) : {}
            }
            var g = a.forwardRef(function(e, t) {
                var r, n, o, a, s, u, d, p, y, O, w, x, I, U, k, P, j, S, T, q = e.icon,
                    A = e.mask,
                    C = e.symbol,
                    W = e.className,
                    E = e.title,
                    N = e.titleId,
                    D = e.maskId,
                    X = m(q),
                    _ = h("classes", [].concat(f((n = e.beat, o = e.fade, a = e.beatFade, s = e.bounce, u = e.shake, d = e.flash, p = e.spin, y = e.spinPulse, O = e.spinReverse, w = e.pulse, x = e.fixedWidth, I = e.inverse, U = e.border, k = e.listItem, P = e.flip, j = e.size, S = e.rotation, T = e.pull, c(r = {
                        "fa-beat": n,
                        "fa-fade": o,
                        "fa-beat-fade": a,
                        "fa-bounce": s,
                        "fa-shake": u,
                        "fa-flash": d,
                        "fa-spin": p,
                        "fa-spin-reverse": O,
                        "fa-spin-pulse": y,
                        "fa-pulse": w,
                        "fa-fw": x,
                        "fa-inverse": I,
                        "fa-border": U,
                        "fa-li": k,
                        "fa-flip": !0 === P,
                        "fa-flip-horizontal": "horizontal" === P || "both" === P,
                        "fa-flip-vertical": "vertical" === P || "both" === P
                    }, "fa-".concat(j), null != j), c(r, "fa-rotate-".concat(S), null != S && 0 !== S), c(r, "fa-pull-".concat(T), null != T), c(r, "fa-swap-opacity", e.swapOpacity), Object.keys(r).map(function(e) {
                        return r[e] ? e : null
                    }).filter(function(e) {
                        return e
                    }))), f(W.split(" ")))),
                    R = h("transform", "string" == typeof e.transform ? i.Qc.transform(e.transform) : e.transform),
                    L = h("mask", m(A)),
                    V = (0, i.qv)(X, l(l(l(l({}, _), R), L), {}, {
                        symbol: C,
                        title: E,
                        titleId: N,
                        maskId: D
                    }));
                if (!V) return ! function() {
                    if (!b && console && "function" == typeof console.error) {
                        var e;
                        (e = console).error.apply(e, arguments)
                    }
                }("Could not find icon", X), null;
                var z = V.abstract,
                    B = {
                        ref: t
                    };
                return Object.keys(e).forEach(function(t) {
                    g.defaultProps.hasOwnProperty(t) || (B[t] = e[t])
                }), v(z[0], B)
            });
            g.displayName = "FontAwesomeIcon", g.propTypes = {
                beat: o().bool,
                border: o().bool,
                beatFade: o().bool,
                bounce: o().bool,
                className: o().string,
                fade: o().bool,
                flash: o().bool,
                mask: o().oneOfType([o().object, o().array, o().string]),
                maskId: o().string,
                fixedWidth: o().bool,
                inverse: o().bool,
                flip: o().oneOf([!0, !1, "horizontal", "vertical", "both"]),
                icon: o().oneOfType([o().object, o().array, o().string]),
                listItem: o().bool,
                pull: o().oneOf(["right", "left"]),
                pulse: o().bool,
                rotation: o().oneOf([0, 90, 180, 270]),
                shake: o().bool,
                size: o().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
                spin: o().bool,
                spinPulse: o().bool,
                spinReverse: o().bool,
                symbol: o().oneOfType([o().bool, o().string]),
                title: o().string,
                titleId: o().string,
                transform: o().oneOfType([o().string, o().object]),
                swapOpacity: o().bool
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
            var v = (function e(t, r) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if ("string" == typeof r) return r;
                var n = (r.children || []).map(function(r) {
                        return e(t, r)
                    }),
                    o = Object.keys(r.attributes || {}).reduce(function(e, t) {
                        var i = r.attributes[t];
                        switch (t) {
                            case "class":
                                e.attrs.className = i, delete r.attributes.class;
                                break;
                            case "style":
                                e.attrs.style = i.split(";").map(function(e) {
                                    return e.trim()
                                }).filter(function(e) {
                                    return e
                                }).reduce(function(e, t) {
                                    var r = t.indexOf(":"),
                                        i = p(t.slice(0, r)),
                                        n = t.slice(r + 1).trim();
                                    return i.startsWith("webkit") ? e[i.charAt(0).toUpperCase() + i.slice(1)] = n : e[i] = n, e
                                }, {});
                                break;
                            default:
                                0 === t.indexOf("aria-") || 0 === t.indexOf("data-") ? e.attrs[t.toLowerCase()] = i : e.attrs[p(t)] = i
                        }
                        return e
                    }, {
                        attrs: {}
                    }),
                    a = i.style,
                    s = void 0 === a ? {} : a,
                    u = function(e, t) {
                        if (null == e) return {};
                        var r, i, n = function(e, t) {
                            if (null == e) return {};
                            var r, i, n = {},
                                o = Object.keys(e);
                            for (i = 0; i < o.length; i++) r = o[i], t.indexOf(r) >= 0 || (n[r] = e[r]);
                            return n
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            for (i = 0; i < o.length; i++) r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
                        }
                        return n
                    }(i, y);
                return o.attrs.style = l(l({}, o.attrs.style), s), t.apply(void 0, [r.tag, l(l({}, o.attrs), u)].concat(f(n)))
            }).bind(null, a.createElement)
        },
        83639: function(e, t, r) {
            "use strict";
            var i = r(13836);

            function n() {}

            function o() {}
            o.resetWarningCache = n, e.exports = function() {
                function e(e, t, r, n, o, a) {
                    if (a !== i) {
                        var s = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw s.name = "Invariant Violation", s
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
                    checkPropTypes: o,
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
        47329: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return o
                }
            });
            var i = r(9268);
            r(86006);
            var n = r(13277);

            function o(e) {
                let {
                    isOpen: t,
                    setIsOpen: r,
                    videoId: o
                } = e;
                return (0, i.jsx)(n.Z, {
                    channel: "youtube",
                    youtube: {
                        mute: 0,
                        autoplay: 0
                    },
                    isOpen: t,
                    videoId: o,
                    onClose: () => r(!1)
                })
            }
        },
        85495: function(e, t, r) {
            "use strict";
            r.d(t, {
                A9: function() {
                    return o
                },
                WV: function() {
                    return a
                },
                XS: function() {
                    return n
                },
                rq: function() {
                    return i
                }
            });
            let i = ["You will need a copy of Adobe XD 2019 or above. A free trial can be downloaded from Adobe.", "No previous design experience is needed.", "No previous Adobe XD skills are needed."],
                n = ["Become a UX designer.", "You will be able to add UX designer to your CV", "Become a UI designer.", "Build & test a full website design.", "Create your first UX brief & persona.", "How to use premade UI kits.", "Create quick wireframes.", "Downloadable exercise files", "Build a UX project from beginning to end.", "Learn to design websites & mobile phone apps.", "All the techniques used by UX professionals", "You will be able to talk correctly with other UX design."],
                o = [{
                    id: 1,
                    avatarSrc: "/assets/img/avatars/1.png",
                    name: "Ali Tufan",
                    date: "3 Days ago",
                    rating: 5,
                    title: "The best LMS Design",
                    comment: "This course is a very applicable. Professor Ng explains precisely each algorithm and even tries to give an intuition for mathematical and statistic concepts behind each algorithm. Thank you very much."
                }, {
                    id: 2,
                    avatarSrc: "/assets/img/avatars/1.png",
                    name: "Ali Tufan",
                    date: "3 Days ago",
                    rating: 5,
                    title: "The best LMS Design",
                    comment: "This course is a very applicable. Professor Ng explains precisely each algorithm and even tries to give an intuition for mathematical and statistic concepts behind each algorithm. Thank you very much."
                }, {
                    id: 3,
                    avatarSrc: "/assets/img/avatars/1.png",
                    name: "Ali Tufan",
                    date: "3 Days ago",
                    rating: 5,
                    title: "The best LMS Design",
                    comment: "This course is a very applicable. Professor Ng explains precisely each algorithm and even tries to give an intuition for mathematical and statistic concepts behind each algorithm. Thank you very much."
                }],
                a = [{
                    id: 1,
                    title: "Course Content",
                    duration: "87 min",
                    lessons: [{
                        id: 1,
                        title: "Introduction to the User",
                        duration: "03:56"
                    }, {
                        id: 2,
                        title: "Getting started with your",
                        duration: "03:56"
                    }, {
                        id: 3,
                        title: "What is UI vs UX - User Interface vs User Experience vs Product",
                        duration: "03:56"
                    }, {
                        id: 4,
                        title: "Wireframing (low fidelity) in",
                        duration: "03:56"
                    }, {
                        id: 5,
                        title: "Viewing your prototype on",
                        duration: "03:56"
                    }, {
                        id: 6,
                        title: "Sharing your design",
                        duration: "03:56"
                    }]
                }, {
                    id: 2,
                    title: "The Brief",
                    duration: "87 min",
                    lessons: [{
                        id: 1,
                        title: "Introduction to the User",
                        duration: "03:56",
                        questions: 5
                    }, {
                        id: 2,
                        title: "Getting started with your",
                        duration: "03:56",
                        questions: 5
                    }, {
                        id: 3,
                        title: "What is UI vs UX - User Interface vs User Experience vs Product",
                        duration: "03:56",
                        questions: 5
                    }, {
                        id: 4,
                        title: "Wireframing (low fidelity) in",
                        duration: "03:56",
                        questions: 5
                    }, {
                        id: 5,
                        title: "Viewing your prototype on",
                        duration: "03:56",
                        questions: 5
                    }, {
                        id: 6,
                        title: "Sharing your design",
                        duration: "03:56",
                        questions: 5
                    }]
                }, {
                    id: 3,
                    title: "Type, Color & Icon Introduction",
                    duration: "87 min",
                    lessons: [{
                        id: 1,
                        title: "Introduction to the User",
                        duration: "03:56",
                        questions: 5
                    }, {
                        id: 2,
                        title: "Getting started with your",
                        duration: "03:56",
                        questions: 5
                    }, {
                        id: 3,
                        title: "What is UI vs UX - User Interface vs User Experience vs Product",
                        duration: "03:56",
                        questions: 5
                    }, {
                        id: 4,
                        title: "Wireframing (low fidelity) in",
                        duration: "03:56",
                        questions: 5
                    }, {
                        id: 5,
                        title: "Viewing your prototype on",
                        duration: "03:56",
                        questions: 5
                    }, {
                        id: 6,
                        title: "Sharing your design",
                        duration: "03:56",
                        questions: 5
                    }]
                }, {
                    id: 4,
                    title: "Prototyping a App - Introduction",
                    duration: "87 min",
                    lessons: [{
                        id: 1,
                        title: "Introduction to the User",
                        duration: "03:56",
                        questions: 5
                    }, {
                        id: 2,
                        title: "Getting started with your",
                        duration: "03:56",
                        questions: 5
                    }, {
                        id: 3,
                        title: "What is UI vs UX - User Interface vs User Experience vs Product",
                        duration: "03:56",
                        questions: 5
                    }, {
                        id: 4,
                        title: "Wireframing (low fidelity) in",
                        duration: "03:56",
                        questions: 5
                    }, {
                        id: 5,
                        title: "Viewing your prototype on",
                        duration: "03:56",
                        questions: 5
                    }, {
                        id: 6,
                        title: "Sharing your design",
                        duration: "03:56",
                        questions: 5
                    }]
                }, {
                    id: 5,
                    title: "Wireframe Feedback",
                    duration: "87 min",
                    lessons: [{
                        id: 1,
                        title: "Introduction to the User",
                        duration: "03:56",
                        questions: 5
                    }, {
                        id: 2,
                        title: "Getting started with your",
                        duration: "03:56",
                        questions: 5
                    }, {
                        id: 3,
                        title: "What is UI vs UX - User Interface vs User Experience vs Product",
                        duration: "03:56",
                        questions: 5
                    }, {
                        id: 4,
                        title: "Wireframing (low fidelity) in",
                        duration: "03:56",
                        questions: 5
                    }, {
                        id: 5,
                        title: "Viewing your prototype on",
                        duration: "03:56",
                        questions: 5
                    }, {
                        id: 6,
                        title: "Sharing your design",
                        duration: "03:56",
                        questions: 5
                    }]
                }]
        }
    }
]);