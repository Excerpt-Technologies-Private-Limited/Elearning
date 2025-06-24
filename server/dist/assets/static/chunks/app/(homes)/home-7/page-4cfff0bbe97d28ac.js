(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4607], {
        45065: function(e, s, t) {
            Promise.resolve().then(t.t.bind(t, 77069, 23)), Promise.resolve().then(t.t.bind(t, 28707, 23)), Promise.resolve().then(t.bind(t, 5032)), Promise.resolve().then(t.bind(t, 1311)), Promise.resolve().then(t.t.bind(t, 8920, 23)), Promise.resolve().then(t.bind(t, 40600)), Promise.resolve().then(t.bind(t, 58280)), Promise.resolve().then(t.bind(t, 64368)), Promise.resolve().then(t.bind(t, 59308)), Promise.resolve().then(t.bind(t, 4094)), Promise.resolve().then(t.bind(t, 36821)), Promise.resolve().then(t.bind(t, 89611))
        },
        5032: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return n
                }
            });
            var i = t(9268),
                a = t(76394),
                l = t.n(a);
            let r = ["/assets/img/clients/1.svg", "/assets/img/clients/2.svg", "/assets/img/clients/3.svg", "/assets/img/clients/4.svg", "/assets/img/clients/5.svg", "/assets/img/clients/6.svg"];
            var n = e => {
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
                                children: r.map((e, s) => (0, i.jsx)("div", {
                                    "data-aos": "fade-up",
                                    "data-aos-duration": "300",
                                    className: "col-lg-auto col-md-3 col-sm-4 col-6",
                                    children: (0, i.jsx)("div", {
                                        className: "d-flex justify-center items-center px-4",
                                        children: (0, i.jsx)(l(), {
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
        47329: function(e, s, t) {
            "use strict";
            t.d(s, {
                Z: function() {
                    return l
                }
            });
            var i = t(9268);
            t(86006);
            var a = t(13277);

            function l(e) {
                let {
                    isOpen: s,
                    setIsOpen: t,
                    videoId: l
                } = e;
                return (0, i.jsx)(a.Z, {
                    channel: "youtube",
                    youtube: {
                        mute: 0,
                        autoplay: 0
                    },
                    isOpen: s,
                    videoId: l,
                    onClose: () => t(!1)
                })
            }
        },
        36821: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return o
                }
            });
            var i = t(9268),
                a = t(76394),
                l = t.n(a),
                r = t(86006),
                n = t(88371),
                c = t(35846),
                d = t.n(c);

            function o() {
                let [e, s] = (0, r.useState)(!1);
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
                                            children: n.n[0].type
                                        }), (0, i.jsx)("div", {
                                            className: "priceCard__price text-45 lh-11 fw-700 text-dark-1 mt-15",
                                            children: n.n[0].price ? n.n[0].price : "Free"
                                        }), (0, i.jsx)("div", {
                                            className: "priceCard__period",
                                            children: n.n[0].period
                                        }), (0, i.jsx)(l(), {
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
                                            children: n.n[0].features.map((e, s) => (0, i.jsxs)("div", {
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
                                            children: n.n[1].type
                                        }), (0, i.jsxs)("div", {
                                            className: "priceCard__price text-45 lh-11 fw-700 text-dark-1 mt-15",
                                            children: ["$", e ? (12 * n.n[1].price * .7).toFixed(2) : n.n[1].price]
                                        }), (0, i.jsx)("div", {
                                            className: "priceCard__period",
                                            children: e ? "per year" : n.n[1].period
                                        }), (0, i.jsx)(l(), {
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
                                            children: n.n[1].features.map((e, s) => (0, i.jsxs)("div", {
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
                                            children: n.n[2].type
                                        }), (0, i.jsxs)("div", {
                                            className: "priceCard__price text-45 lh-11 fw-700 text-dark-1 mt-15",
                                            children: ["$", e ? (12 * n.n[2].price * .7).toFixed(2) : n.n[2].price]
                                        }), (0, i.jsx)("div", {
                                            className: "priceCard__period",
                                            children: e ? "per year" : n.n[2].period
                                        }), (0, i.jsx)(l(), {
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
                                            children: n.n[2].features.map((e, s) => (0, i.jsxs)("div", {
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
        86484: function(e, s, t) {
            "use strict";
            t.d(s, {
                Z: function() {
                    return l
                }
            });
            var i = t(9268);
            t(35846);
            let a = [{
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

            function l(e) {
                let {
                    componentsClass: s,
                    textSize: t
                } = e;
                return (0, i.jsx)(i.Fragment, {
                    children: a.map((e, a) => (0, i.jsx)("a", {
                        className: s || "",
                        href: e.href,
                        children: (0, i.jsx)("i", {
                            className: "".concat(e.iconClassName, " ").concat(t)
                        })
                    }, a))
                })
            }
            t(86006)
        },
        40600: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return l
                }
            });
            var i = t(9268),
                a = t(86006);

            function l(e) {
                let {
                    star: s,
                    textSize: t,
                    textColor: l
                } = e, [r, n] = (0, a.useState)([]);
                return (0, a.useEffect)(() => {
                    for (let e = Math.round(s); e >= 1; e--) n(e => [...e, "star"])
                }, []), (0, i.jsx)(i.Fragment, {
                    children: r.map((e, s) => (0, i.jsx)("div", {
                        className: "icon-star ".concat(t || "text-9", " ").concat(l || "text-yellow-1", " ")
                    }, s))
                })
            }
        },
        58280: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return u
                }
            });
            var i = t(9268),
                a = t(86006),
                l = t(68148),
                r = t(36115),
                n = t(70382),
                c = t(76394),
                d = t.n(c),
                o = t(35846),
                h = t.n(o);

            function m(e) {
                let {
                    data: s,
                    index: t
                } = e, [l, r] = (0, a.useState)([]);
                return (0, a.useEffect)(() => {
                    for (let e = Math.round(s.rating); e >= 1; e--) r(e => [...e, "star"])
                }, []), (0, i.jsx)("div", {
                    className: "",
                    style: {
                        height: "fit-content"
                    },
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsxs)("div", {
                            className: "coursesCard -type-1 ",
                            children: [(0, i.jsxs)("div", {
                                className: "relative",
                                children: [(0, i.jsxs)("div", {
                                    className: "coursesCard__image overflow-hidden rounded-8",
                                    children: [(0, i.jsx)(d(), {
                                        width: 500,
                                        height: 500,
                                        style: {
                                            height: "100%",
                                            width: "100%"
                                        },
                                        className: "w-1/1",
                                        src: s.imageSrc,
                                        alt: "image"
                                    }), (0, i.jsx)("div", {
                                        className: "coursesCard__image_overlay rounded-8"
                                    })]
                                }), (0, i.jsx)("div", {
                                    className: "d-flex justify-between py-10 px-10 absolute-full-center z-3"
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "h-100 pt-15 pb-10 px-20",
                                children: [(0, i.jsxs)("div", {
                                    className: "d-flex items-center",
                                    children: [(0, i.jsx)("div", {
                                        className: "text-14 lh-1 text-yellow-1 mr-10",
                                        children: s.rating
                                    }), (0, i.jsx)("div", {
                                        className: "d-flex x-gap-5 items-center",
                                        children: l.map((e, s) => (0, i.jsx)("div", {
                                            className: "icon-star text-9 text-yellow-1"
                                        }, s))
                                    }), (0, i.jsxs)("div", {
                                        className: "text-13 lh-1 ml-10",
                                        children: ["(", s.ratingCount, ")"]
                                    })]
                                }), (0, i.jsx)("div", {
                                    className: "text-17 lh-15 fw-500 text-dark-1 mt-10",
                                    children: (0, i.jsx)(h(), {
                                        className: "linkCustom",
                                        href: "/courses/".concat(s.id),
                                        children: s.title
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: "d-flex x-gap-10 items-center pt-10",
                                    children: [(0, i.jsxs)("div", {
                                        className: "d-flex items-center",
                                        children: [(0, i.jsx)("div", {
                                            className: "mr-8",
                                            children: (0, i.jsx)(d(), {
                                                width: 16,
                                                height: 17,
                                                src: "assets/img/coursesCards/icons/1.svg",
                                                alt: "icon"
                                            })
                                        }), (0, i.jsxs)("div", {
                                            className: "text-14 lh-1",
                                            children: [s.lessonCount, " lesson"]
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "d-flex items-center",
                                        children: [(0, i.jsx)("div", {
                                            className: "mr-8",
                                            children: (0, i.jsx)(d(), {
                                                width: 16,
                                                height: 17,
                                                src: "assets/img/coursesCards/icons/2.svg",
                                                alt: "icon"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "text-14 lh-1",
                                            children: "".concat(Math.floor(s.duration / 60), "h ").concat(Math.floor(s.duration % 60), "m")
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "d-flex items-center",
                                        children: [(0, i.jsx)("div", {
                                            className: "mr-8",
                                            children: (0, i.jsx)(d(), {
                                                width: 16,
                                                height: 17,
                                                src: "assets/img/coursesCards/icons/3.svg",
                                                alt: "icon"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "text-14 lh-1",
                                            children: s.level
                                        })]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "coursesCard-footer",
                                    children: [(0, i.jsxs)("div", {
                                        className: "coursesCard-footer__author",
                                        children: [(0, i.jsx)(d(), {
                                            width: 30,
                                            height: 30,
                                            src: s.authorImageSrc,
                                            alt: "image"
                                        }), (0, i.jsx)("div", {
                                            children: s.authorName
                                        })]
                                    }), (0, i.jsx)("div", {
                                        className: "coursesCard-footer__price",
                                        children: s.paid ? (0, i.jsxs)(i.Fragment, {
                                            children: [(0, i.jsxs)("div", {
                                                children: ["$", s.originalPrice]
                                            }), (0, i.jsxs)("div", {
                                                children: ["$", s.discountedPrice]
                                            })]
                                        }) : (0, i.jsxs)(i.Fragment, {
                                            children: [(0, i.jsx)("div", {}), (0, i.jsx)("div", {
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

            function u() {
                let [e, s] = (0, a.useState)(!1), [t, c] = (0, a.useState)("All"), [d, o] = (0, a.useState)([]);
                return (0, a.useEffect)(() => {
                    if ("All" == t) o(l.om);
                    else {
                        let e = l.om.filter(e => e.state == t);
                        o(e)
                    }
                }, [t]), (0, a.useEffect)(() => {
                    s(!0)
                }, []), (0, i.jsx)("section", {
                    className: "layout-pt-lg layout-pb-md",
                    children: (0, i.jsx)("div", {
                        className: "container",
                        children: (0, i.jsxs)("div", {
                            className: "tabs -pills js-tabs",
                            children: [(0, i.jsxs)("div", {
                                className: "row y-gap-15 justify-between items-center",
                                children: [(0, i.jsx)("div", {
                                    className: "col-lg-6",
                                    children: (0, i.jsxs)("div", {
                                        className: "sectionTitle ",
                                        children: [(0, i.jsx)("h2", {
                                            className: "sectionTitle__title ",
                                            children: "Our Most Popular Courses"
                                        }), (0, i.jsx)("p", {
                                            className: "sectionTitle__text ",
                                            children: "10,000+ unique online course list designs"
                                        })]
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "col-lg-auto",
                                    children: (0, i.jsxs)(h(), {
                                        href: "/courses-list-6",
                                        className: "button -icon -purple-3 text-purple-1",
                                        children: ["All Courses", (0, i.jsx)("i", {
                                            className: "icon-arrow-top-right text-13 ml-10"
                                        })]
                                    })
                                })]
                            }), (0, i.jsx)("div", {
                                className: "tabs__content pt-60 lg:pt-50 js-tabs-content",
                                children: (0, i.jsx)("div", {
                                    className: "tabs__pane -tab-item-1 is-active",
                                    children: (0, i.jsxs)("div", {
                                        className: " js-section-slider",
                                        "data-gap": "30",
                                        "data-slider-cols": "xl-4 lg-3 md-2 sm-2",
                                        "data-aos": "fade-left",
                                        "data-aos-offset": "80",
                                        "data-aos-duration": 800,
                                        children: [e && (0, i.jsx)(n.tq, {
                                            className: "overflow-hidden",
                                            modules: [r.W_, r.tl],
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
                                            children: d.map((e, s) => (0, i.jsx)(n.o5, {
                                                className: "swiper-slide -type-1  border-light bg-white rounded-8 ",
                                                children: (0, i.jsx)(m, {
                                                    data: e,
                                                    index: s
                                                })
                                            }, s))
                                        }), (0, i.jsx)("button", {
                                            className: "course-five-left section-slider-nav -prev -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-prev",
                                            children: (0, i.jsx)("i", {
                                                className: "icon icon-arrow-left text-24"
                                            })
                                        }), (0, i.jsx)("button", {
                                            className: "course-five-right section-slider-nav -next -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-next",
                                            children: (0, i.jsx)("i", {
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
        64368: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return u
                }
            });
            var i = t(9268),
                a = t(81301),
                l = t.n(a),
                r = t(86006),
                n = t(76394),
                c = t.n(n),
                d = t(47329),
                o = t(35846),
                h = t.n(o);
            let m = l()(() => Promise.all([t.e(3751), t.e(8938)]).then(t.bind(t, 58938)), {
                loadableGenerated: {
                    webpack: () => [58938]
                },
                ssr: !1
            });

            function u() {
                let [e, s] = (0, r.useState)(!1);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)("section", {
                        className: "masthead -type-6",
                        children: [(0, i.jsxs)("div", {
                            className: "masthead__bg",
                            style: {
                                zIndex: "-1"
                            },
                            children: [(0, i.jsx)(c(), {
                                width: 470,
                                style: {
                                    pointerEvents: "none"
                                },
                                height: 540,
                                src: "/assets/img/home-7/hero/1.svg",
                                alt: "blob"
                            }), (0, i.jsx)(c(), {
                                width: 580,
                                style: {
                                    pointerEvents: "none"
                                },
                                height: 920,
                                src: "/assets/img/home-7/hero/2.svg",
                                alt: "blob"
                            }), (0, i.jsx)(c(), {
                                width: 1200,
                                height: 1200,
                                style: {
                                    pointerEvents: "none",
                                    width: "100%"
                                },
                                src: "/assets/img/home-7/hero/bg.png",
                                alt: "background"
                            }), (0, i.jsx)("div", {
                                className: "absolute-full-center",
                                style: {
                                    maxHeight: "100vh",
                                    overflow: "hidden"
                                },
                                children: (0, i.jsx)(m, {})
                            })]
                        }), (0, i.jsx)("div", {
                            className: "container",
                            children: (0, i.jsxs)("div", {
                                className: "row y-gap-50 items-center",
                                children: [(0, i.jsx)("div", {
                                    className: "col-lg-5",
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "500",
                                    children: (0, i.jsxs)("div", {
                                        className: "masthead__content",
                                        children: [(0, i.jsx)("div", {
                                            className: "text-17 lh-15 text-purple-1 fw-500 mb-10",
                                            children: "Start learning for free"
                                        }), (0, i.jsxs)("h1", {
                                            className: "masthead__title",
                                            children: ["Build data skills", (0, i.jsx)("br", {}), " ", (0, i.jsx)("span", {
                                                className: "text-purple-1",
                                                children: "online"
                                            })]
                                        }), (0, i.jsxs)("p", {
                                            className: "mt-5",
                                            children: ["Data drives everything. Get the skills you need", (0, i.jsx)("br", {
                                                className: "lg:d-none"
                                            }), "for the future of work."]
                                        }), (0, i.jsxs)("div", {
                                            className: "row items-center x-gap-20 y-gap-20 pt-20",
                                            children: [(0, i.jsx)("div", {
                                                className: "col-auto",
                                                children: (0, i.jsx)(h(), {
                                                    href: "/signup",
                                                    className: "button -md -gradient-1 -rounded text-white",
                                                    children: "Join For Free"
                                                })
                                            }), (0, i.jsx)("div", {
                                                className: "col-auto",
                                                children: (0, i.jsx)(h(), {
                                                    href: "/courses-list-1",
                                                    className: "button -md -outline-light-5 -rounded text-dark-1",
                                                    children: "Find Courses"
                                                })
                                            })]
                                        })]
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "col-lg-7",
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "750",
                                    children: (0, i.jsxs)("div", {
                                        className: "masthead__image relative",
                                        children: [(0, i.jsx)(c(), {
                                            width: 780,
                                            height: 765,
                                            src: "/assets/img/home-7/hero/image.png",
                                            alt: "image"
                                        }), (0, i.jsx)("div", {
                                            onClick: () => s(!0),
                                            className: "absolute-full-center d-flex justify-center items-center cursor",
                                            children: (0, i.jsx)("div", {
                                                style: {
                                                    cursor: "pointer"
                                                },
                                                className: "d-flex justify-center items-center size-60 rounded-full bg-white js-gallery",
                                                "data-gallery": "gallery1",
                                                children: (0, i.jsx)("div", {
                                                    className: "icon-play text-18"
                                                })
                                            })
                                        })]
                                    })
                                })]
                            })
                        })]
                    }), (0, i.jsx)(d.Z, {
                        videoId: "LlCwHnp3kL4",
                        isOpen: e,
                        setIsOpen: s
                    })]
                })
            }
        },
        59308: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return o
                }
            });
            var i = t(9268),
                a = t(86006),
                l = t(36115),
                r = t(70382),
                n = t(41715),
                c = t(76394),
                d = t.n(c);

            function o(e) {
                let {
                    backgroundComponent: s
                } = e, t = (0, a.useRef)(null), [c, o] = (0, a.useState)(0), [h, m] = (0, a.useState)(!1);
                (0, a.useEffect)(() => {
                    m(!0), t.current && t.current.slideTo(0)
                }, []);
                let u = e => {
                    o(e), t.current && t.current.slideTo(e)
                };
                return (0, i.jsxs)("section", {
                    className: "layout-pt-lg layout-pb-lg section-bg",
                    children: [(0, i.jsx)("div", {
                        className: "section-bg__item  ".concat(s ? "bg-white-two" : "bg-light-6")
                    }), (0, i.jsxs)("div", {
                        className: "container",
                        children: [(0, i.jsx)("div", {
                            className: "row y-gap-20 justify-center text-center",
                            children: (0, i.jsx)("div", {
                                className: "col-auto",
                                children: (0, i.jsxs)("div", {
                                    className: "sectionTitle ",
                                    children: [(0, i.jsx)("h2", {
                                        className: "sectionTitle__title ",
                                        children: "Testimonials"
                                    }), (0, i.jsx)("p", {
                                        className: "sectionTitle__text ",
                                        children: "10,000+ unique online course list designs"
                                    })]
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: "row justify-center pt-60",
                            children: (0, i.jsx)("div", {
                                className: "col-xl-6 col-lg-8 col-md-10",
                                children: (0, i.jsxs)("div", {
                                    className: "overflow-hidden js-testimonials-slider",
                                    children: [h && (0, i.jsx)(r.tq, {
                                        className: "overflow-visible",
                                        modules: [l.W_, l.tl],
                                        loop: !0,
                                        spaceBetween: 4,
                                        speed: 1e3,
                                        slidesPerView: 1,
                                        onSwiper: e => {
                                            t.current = e
                                        },
                                        onSlideChange: e => {
                                            o(e.activeIndex), e.activeIndex >= 5 && o(e.activeIndex - 5)
                                        },
                                        children: n.r.map((e, s) => (0, i.jsx)(r.o5, {
                                            className: "swiper-slide",
                                            children: (0, i.jsx)("div", {
                                                className: "swiper-slide h-100",
                                                children: (0, i.jsxs)("div", {
                                                    className: "testimonials -type-2 text-center",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "testimonials__icon",
                                                        children: (0, i.jsx)(d(), {
                                                            width: 60,
                                                            height: 43,
                                                            src: "/assets/img/misc/quote.svg",
                                                            alt: "quote"
                                                        })
                                                    }), (0, i.jsx)("div", {
                                                        className: "testimonials__text md:text-20 fw-500 text-dark-1",
                                                        children: e.text
                                                    }), (0, i.jsxs)("div", {
                                                        className: "testimonials__author",
                                                        children: [(0, i.jsx)("h5", {
                                                            className: "text-17 lh-15 fw-500",
                                                            children: e.author
                                                        }), (0, i.jsx)("div", {
                                                            className: "mt-5",
                                                            children: e.position
                                                        })]
                                                    })]
                                                })
                                            })
                                        }, s))
                                    }), (0, i.jsx)("div", {
                                        className: "pt-60 lg:pt-40",
                                        children: (0, i.jsx)("div", {
                                            className: "pagination -avatars row x-gap-40 y-gap-20 justify-center js-testimonials-pagination",
                                            children: n.nE.map((e, s) => (0, i.jsx)("div", {
                                                onClick: () => u(s),
                                                className: "col-auto ",
                                                children: (0, i.jsx)("div", {
                                                    className: "pagination__item ".concat(c == s ? "is-active" : ""),
                                                    children: (0, i.jsx)(d(), {
                                                        width: 70,
                                                        height: 70,
                                                        src: e,
                                                        alt: "image"
                                                    })
                                                })
                                            }, s))
                                        })
                                    })]
                                })
                            })
                        })]
                    })]
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
            var i = t(9268);
            let a = [{
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
            var l = t(35846),
                r = t.n(l);

            function n(e) {
                let {
                    allClasses: s
                } = e;
                return (0, i.jsx)(i.Fragment, {
                    children: a.map((e, t) => (0, i.jsx)(r(), {
                        className: "".concat(s || ""),
                        href: e.href,
                        children: e.label
                    }, t))
                })
            }
            t(86006)
        },
        81393: function(e, s, t) {
            "use strict";
            var i = t(9268),
                a = t(86006),
                l = t(76394),
                r = t.n(l),
                n = t(35846),
                c = t.n(n);
            s.Z = e => {
                let {
                    allClasses: s,
                    color: t
                } = e, [l, n] = (0, a.useState)(!1);
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)("div", {
                        className: s || "",
                        children: [(0, i.jsx)("button", {
                            onClick: () => n(e => !e),
                            className: "d-flex items-center ".concat(t || "text-white", " "),
                            "data-el-toggle": ".js-search-toggle",
                            children: (0, i.jsx)("i", {
                                className: "text-20 icon icon-search"
                            })
                        }), (0, i.jsxs)("div", {
                            className: "toggle-element js-search-toggle ".concat(l ? "-is-el-visible" : ""),
                            children: [(0, i.jsx)("div", {
                                className: "header-search pt-90 bg-white shadow-4 ",
                                style: {
                                    height: "650px"
                                },
                                children: (0, i.jsxs)("div", {
                                    className: "container",
                                    children: [(0, i.jsxs)("div", {
                                        className: "header-search__field",
                                        children: [(0, i.jsx)("div", {
                                            className: "icon icon-search text-dark-1"
                                        }), (0, i.jsx)("input", {
                                            required: !0,
                                            type: "text",
                                            className: "col-12 text-18 lh-12 text-dark-1 fw-500",
                                            placeholder: "What do you want to learn?"
                                        }), (0, i.jsx)("button", {
                                            onClick: () => n(!1),
                                            className: "d-flex items-center justify-center size-40 rounded-full bg-purple-3",
                                            "data-el-toggle": ".js-search-toggle",
                                            children: (0, i.jsx)(r(), {
                                                width: 12,
                                                height: 12,
                                                src: "/assets/img/menus/close.svg",
                                                alt: "icon"
                                            })
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "header-search__content mt-30",
                                        children: [(0, i.jsx)("div", {
                                            className: "text-17 text-dark-1 fw-500",
                                            children: "Popular Right Now"
                                        }), (0, i.jsxs)("div", {
                                            className: "d-flex y-gap-5 flex-column mt-20",
                                            children: [(0, i.jsx)(c(), {
                                                href: "/courses/".concat(5),
                                                className: "text-dark-1",
                                                children: "The Ultimate Drawing Course - Beginner to Advanced"
                                            }), (0, i.jsx)(c(), {
                                                href: "/courses-single-2/3",
                                                className: "text-dark-1",
                                                children: "Character Art School: Complete Character Drawing Course"
                                            }), (0, i.jsx)(c(), {
                                                href: "/courses-single-3/3",
                                                className: "text-dark-1",
                                                children: "Complete Blender Creator: Learn 3D Modelling for Beginners"
                                            }), (0, i.jsx)(c(), {
                                                href: "/courses-single-4/3",
                                                className: "text-dark-1",
                                                children: "User Experience Design Essentials - Adobe XD UI UX Design"
                                            }), (0, i.jsx)(c(), {
                                                href: "/courses-single-5/3",
                                                className: "text-dark-1",
                                                children: "Graphic Design Masterclass - Learn GREAT Design"
                                            }), (0, i.jsx)(c(), {
                                                href: "/courses-single-6/3",
                                                className: "text-dark-1",
                                                children: "Adobe Photoshop CC – Essentials Training Course"
                                            })]
                                        }), (0, i.jsx)("div", {
                                            className: "mt-30",
                                            children: (0, i.jsx)("button", {
                                                className: "uppercase underline",
                                                children: "PRESS ENTER TO SEE ALL SEARCH RESULTS"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, i.jsx)("div", {
                                className: "header-search__bg",
                                "data-el-toggle": ".js-search-toggle"
                            })]
                        })]
                    })
                })
            }
        },
        4094: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return m
                }
            });
            var i = t(9268);
            t(86006);
            var a = t(80808),
                l = t(86484),
                r = t(76394),
                n = t.n(r),
                c = t(69567),
                d = t(35846),
                o = t.n(d);

            function h(e) {
                let {
                    allClasses: s,
                    parentClass: t
                } = e;
                return (0, i.jsx)(i.Fragment, {
                    children: c.d.slice(0, 3).map((e, a) => (0, i.jsxs)("div", {
                        className: t || "col-xl-4 col-lg-4 col-md-6 ",
                        children: [(0, i.jsx)("div", {
                            className: "".concat(s || ""),
                            children: e.title
                        }), (0, i.jsx)("div", {
                            className: "d-flex y-gap-10 flex-column ",
                            children: e.links.map((e, s) => (0, i.jsx)(o(), {
                                href: e.href,
                                children: e.label
                            }, s))
                        })]
                    }, a))
                })
            }

            function m() {
                return (0, i.jsx)("footer", {
                    className: "footer -type-4 bg-white border-top-light",
                    children: (0, i.jsxs)("div", {
                        className: "container",
                        children: [(0, i.jsxs)("div", {
                            className: "row y-gap-30 justify-between pt-60",
                            children: [(0, i.jsxs)("div", {
                                className: "col-lg-7 col-md-6",
                                children: [(0, i.jsx)("div", {
                                    className: "text-17 fw-500 text-dark-1 uppercase mb-25",
                                    children: "GET IN TOUCH"
                                }), (0, i.jsxs)("form", {
                                    onSubmit: e => {
                                        e.preventDefault()
                                    },
                                    className: "form-single-field -base mt-15",
                                    children: [(0, i.jsx)("input", {
                                        required: !0,
                                        className: "py-20 px-30 bg-light-3 rounded-200 text-dark-1",
                                        type: "text",
                                        placeholder: "Your Email"
                                    }), (0, i.jsx)("button", {
                                        className: "button -purple-1 rounded-full",
                                        type: "submit",
                                        children: (0, i.jsx)("i", {
                                            className: "icon-arrow-right text-24 text-white"
                                        })
                                    })]
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "col-xl-4 col-lg-5 col-md-6",
                                children: [(0, i.jsx)("div", {
                                    className: "footer-header__logo",
                                    children: (0, i.jsx)(n(), {
                                        width: 140,
                                        height: 50,
                                        src: "/assets/img/general/logo-dark.svg",
                                        alt: "logo"
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: "d-flex justify-between mt-30",
                                    children: [(0, i.jsxs)("div", {
                                        className: "",
                                        children: [(0, i.jsx)("div", {
                                            className: "",
                                            children: "Toll Free Customer Care"
                                        }), (0, i.jsx)("div", {
                                            className: "text-18 lh-1 fw-500 text-dark-1 mt-5",
                                            children: "+(1) 123 456 7890"
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "",
                                        children: [(0, i.jsx)("div", {
                                            className: "",
                                            children: "Need live support?"
                                        }), (0, i.jsx)("div", {
                                            className: "text-18 lh-1 fw-500 text-dark-1 mt-5",
                                            children: "hi@educrat.comv"
                                        })]
                                    })]
                                })]
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "row y-gap-30 justify-between pt-60 pb-60",
                            children: [(0, i.jsx)("div", {
                                className: "col-lg-7 col-md-6",
                                children: (0, i.jsx)("div", {
                                    className: "row y-gap-30",
                                    children: (0, i.jsx)(h, {
                                        allClasses: "text-17 fw-500 text-dark-1 uppercase mb-25",
                                        parentclassName: "col-lg-4 col-md-4"
                                    })
                                })
                            }), (0, i.jsxs)("div", {
                                className: "col-xl-4 col-lg-5 col-md-6",
                                children: [(0, i.jsxs)("div", {
                                    className: "",
                                    children: [(0, i.jsx)("div", {
                                        className: "text-17 uppercase text-whitedark-1 fw-500",
                                        children: "Take your learning with you"
                                    }), (0, i.jsxs)("div", {
                                        className: "d-flex mt-15",
                                        children: [(0, i.jsx)("a", {
                                            href: "#",
                                            children: (0, i.jsx)(n(), {
                                                width: 180,
                                                height: 60,
                                                src: "/assets/img/footer/apps-2/1.png",
                                                alt: "image"
                                            })
                                        }), (0, i.jsx)("a", {
                                            href: "#",
                                            className: "ml-10",
                                            children: (0, i.jsx)(n(), {
                                                width: 180,
                                                height: 60,
                                                src: "/assets/img/footer/apps-2/2.png",
                                                alt: "image"
                                            })
                                        })]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "footer-header-socials mt-60",
                                    children: [(0, i.jsx)("div", {
                                        className: "text-17 uppercase text-dark-1 fw-500",
                                        children: "Follow us on social media"
                                    }), (0, i.jsx)("div", {
                                        className: "footer-header-socials__list d-flex items-center mt-15",
                                        children: (0, i.jsx)(l.Z, {
                                            componentsClass: "size-40 d-flex justify-center items-center"
                                        })
                                    })]
                                })]
                            })]
                        }), (0, i.jsx)("div", {
                            className: "py-30 border-top-light-15",
                            children: (0, i.jsxs)("div", {
                                className: "row justify-between items-center y-gap-20",
                                children: [(0, i.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, i.jsxs)("div", {
                                        className: "d-flex items-center h-100",
                                        children: ["\xa9 ", new Date().getFullYear(), " Educrat. All Right Reserved."]
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, i.jsxs)("div", {
                                        className: "d-flex x-gap-20 y-gap-20 items-center flex-wrap",
                                        children: [(0, i.jsx)("div", {
                                            children: (0, i.jsx)("div", {
                                                className: "d-flex x-gap-15",
                                                children: (0, i.jsx)(a.Z, {})
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "",
                                            children: (0, i.jsxs)("a", {
                                                href: "#",
                                                className: "button -md -light-3 px-15 rounded-200 -purple-3 text-purple-1",
                                                children: [(0, i.jsx)("i", {
                                                    className: "icon-worldwide mr-10"
                                                }), "English"]
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
        89611: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return x
                }
            });
            var i = t(9268),
                a = t(86006),
                l = t(39179),
                r = t(34119),
                n = t(16797),
                c = t(51469),
                d = t(81393),
                o = t(76394),
                h = t.n(o),
                m = t(35846),
                u = t.n(m);

            function x() {
                let [e, s] = (0, a.useState)(!1), [t, o] = (0, a.useState)(0);
                return (0, a.useEffect)(() => {
                    let e = () => {
                        let e = window.scrollY;
                        o(e)
                    };
                    return window.addEventListener("scroll", e), () => {
                        window.removeEventListener("scroll", e)
                    }
                }, []), (0, i.jsx)("header", {
                    className: "header -type-4 js-header ".concat(t > 40 ? "bg-white" : ""),
                    children: (0, i.jsx)("div", {
                        className: "header__container py-10",
                        children: (0, i.jsxs)("div", {
                            className: "row justify-between items-center",
                            children: [(0, i.jsx)("div", {
                                className: "col-auto",
                                children: (0, i.jsxs)("div", {
                                    className: "header-left d-flex items-center",
                                    children: [(0, i.jsx)("div", {
                                        className: "header__logo pr-30 xl:pr-20 md:pr-0",
                                        children: (0, i.jsx)(u(), {
                                            href: "/",
                                            children: (0, i.jsx)(h(), {
                                                width: 140,
                                                height: 50,
                                                src: "/assets/img/general/logo-dark.svg",
                                                alt: "logo"
                                            })
                                        })
                                    }), (0, i.jsx)(r.n, {
                                        allClasses: "header__explore xl:d-none"
                                    })]
                                })
                            }), (0, i.jsxs)("div", {
                                className: "col-auto",
                                children: [(0, i.jsx)(n.Z, {
                                    allClasses: "menu__nav text-dark-1 -is-active"
                                }), (0, i.jsx)(c.Z, {
                                    activeMobileMenu: e,
                                    setActiveMobileMenu: s
                                })]
                            }), (0, i.jsx)("div", {
                                className: "col-auto",
                                children: (0, i.jsxs)("div", {
                                    className: "header-right d-flex items-center",
                                    children: [(0, i.jsxs)("div", {
                                        className: "header-right__icons text-white d-flex items-center",
                                        children: [(0, i.jsx)(d.Z, {
                                            color: "text-dark-1"
                                        }), (0, i.jsx)(l.Z, {
                                            parentClassess: "relative pl-30 sm:pl-15",
                                            allClasses: "d-flex items-center text-dark-1"
                                        }), (0, i.jsx)("div", {
                                            className: "d-none xl:d-block pl-30 sm:pl-15",
                                            children: (0, i.jsx)("button", {
                                                className: "text-dark-1 items-center",
                                                onClick: () => s(!0),
                                                "data-el-toggle": ".js-mobile-menu-toggle",
                                                children: (0, i.jsx)("i", {
                                                    className: "text-11 icon icon-mobile-menu"
                                                })
                                            })
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "header-right__buttons d-flex items-center ml-30 xl:ml-20 lg:d-none",
                                        children: [(0, i.jsx)(u(), {
                                            href: "/login",
                                            className: "button -underline text-purple-1",
                                            children: "Log in"
                                        }), (0, i.jsx)(u(), {
                                            href: "/signup",
                                            className: "button h-50 px-30 -purple-3 -rounded text-purple-1 ml-15",
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
                    return i
                }
            });
            let i = [{
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
        41715: function(e, s, t) {
            "use strict";
            t.d(s, {
                nE: function() {
                    return l
                },
                pb: function() {
                    return i
                },
                r: function() {
                    return a
                },
                te: function() {
                    return r
                }
            });
            let i = [{
                    id: 0,
                    imageSrc: "/assets/img/testimonials/1.png",
                    name: "Courtney Henry",
                    position: "Web Designer",
                    comment: "Great Work",
                    description: "I think Educrat is the best theme I ever seen this year.\n        Amazing design, easy to customize and a design quality\n        superlative account on its cloud platform for the\n        optimized performance"
                }, {
                    id: 1,
                    imageSrc: "/assets/img/testimonials/2.png",
                    name: "Ronald Richards",
                    position: "President of Sales",
                    comment: "Great Work",
                    description: "I think Educrat is the best theme I ever seen this year.\n        Amazing design, easy to customize and a design quality\n        superlative account on its cloud platform for the\n        optimized performance"
                }, {
                    id: 2,
                    imageSrc: "/assets/img/testimonials/3.png",
                    name: "Annette Black",
                    position: "Nursing Assistant",
                    comment: "Great Work",
                    description: "I think Educrat is the best theme I ever seen this year.\n        Amazing design, easy to customize and a design quality\n        superlative account on its cloud platform for the\n        optimized performance"
                }, {
                    id: 3,
                    imageSrc: "/assets/img/testimonials/4.png",
                    name: "Courtney Henry",
                    position: "Web Designer",
                    comment: "Great Work",
                    description: "I think Educrat is the best theme I ever seen this year.\n        Amazing design, easy to customize and a design quality\n        superlative account on its cloud platform for the\n        optimized performance"
                }],
                a = [{
                    id: 1,
                    author: "Ali Tufan",
                    position: "Product Manager, Apple Inc",
                    text: "It is no exaggeration to say this Educrat experience was transformative–both professionally and personally. This workshop will long remain a high point of my life."
                }, {
                    id: 2,
                    author: "John Smith",
                    position: "Marketing Director, XYZ Company",
                    text: "Educrat has helped me acquire valuable skills that have greatly enhanced my career prospects. The courses are comprehensive and taught by industry experts."
                }, {
                    id: 3,
                    author: "Emily Johnson",
                    position: "Freelance Graphic Designer",
                    text: "I've been using Educrat for several months now, and I'm impressed by the quality of the courses. They cover a wide range of topics and are easy to follow."
                }, {
                    id: 4,
                    author: "David Brown",
                    position: "Software Engineer, ABC Corporation",
                    text: "I highly recommend Educrat for anyone looking to upskill or learn new technologies. The platform is user-friendly, and the instructors are knowledgeable."
                }, {
                    id: 5,
                    author: "Sarah Thompson",
                    position: "Digital Marketing Specialist",
                    text: "Educrat has been a game-changer for me. The courses are up-to-date and relevant, helping me stay ahead in the ever-changing field of digital marketing."
                }],
                l = ["/assets/img/home-3/testimonials/1.png", "/assets/img/home-3/testimonials/2.png", "/assets/img/home-3/testimonials/3.png", "/assets/img/home-3/testimonials/4.png", "/assets/img/home-3/testimonials/5.png"],
                r = [{
                    id: 1,
                    image: "/assets/img/home-4/testimonials/1.png",
                    rating: 4.5,
                    numRatings: 1991,
                    text: "I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design.",
                    name: "Courtney Henry",
                    profession: "Web Designer"
                }, {
                    id: 2,
                    image: "/assets/img/home-4/testimonials/2.png",
                    rating: 4.5,
                    numRatings: 1991,
                    text: "I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design.",
                    name: "Courtney Henry",
                    profession: "Web Designer"
                }, {
                    id: 3,
                    image: "/assets/img/home-4/testimonials/3.png",
                    rating: 4.5,
                    numRatings: 1991,
                    text: "I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design.",
                    name: "Courtney Henry",
                    profession: "Web Designer"
                }]
        },
        81301: function(e, s, t) {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), Object.defineProperty(s, "default", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let i = t(26927);
            t(86006);
            let a = i._(t(1937));

            function l(e) {
                return {
                    default: (null == e ? void 0 : e.default) || e
                }
            }

            function r(e, s) {
                let t = a.default,
                    i = {
                        loading: e => {
                            let {
                                error: s,
                                isLoading: t,
                                pastDelay: i
                            } = e;
                            return null
                        }
                    };
                "function" == typeof e && (i.loader = e), Object.assign(i, s);
                let r = i.loader;
                return t({ ...i,
                    loader: () => null != r ? r().then(l) : Promise.resolve(l(() => null))
                })
            }("function" == typeof s.default || "object" == typeof s.default && null !== s.default) && void 0 === s.default.__esModule && (Object.defineProperty(s.default, "__esModule", {
                value: !0
            }), Object.assign(s.default, s), e.exports = s.default)
        },
        77069: function(e, s, t) {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                    value: !0
                }),
                function(e, s) {
                    for (var t in s) Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: s[t]
                    })
                }(s, {
                    suspense: function() {
                        return a
                    },
                    NoSSR: function() {
                        return l
                    }
                }), t(26927), t(86006);
            let i = t(34722);

            function a() {
                let e = Error(i.NEXT_DYNAMIC_NO_SSR_CODE);
                throw e.digest = i.NEXT_DYNAMIC_NO_SSR_CODE, e
            }

            function l(e) {
                let {
                    children: s
                } = e;
                return s
            }
        },
        1937: function(e, s, t) {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), Object.defineProperty(s, "default", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let i = t(26927),
                a = i._(t(86006)),
                l = t(77069),
                r = function(e) {
                    let s = Object.assign({
                        loader: null,
                        loading: null,
                        ssr: !0
                    }, e);

                    function t(e) {
                        let t = s.loading,
                            i = a.default.createElement(t, {
                                isLoading: !0,
                                pastDelay: !0,
                                error: null
                            }),
                            r = s.ssr ? a.default.Fragment : l.NoSSR,
                            n = s.lazy;
                        return a.default.createElement(a.default.Suspense, {
                            fallback: i
                        }, a.default.createElement(r, null, a.default.createElement(n, e)))
                    }
                    return s.lazy = a.default.lazy(s.loader), t.displayName = "LoadableComponent", t
                }
        }
    },
    function(e) {
        e.O(0, [8201, 6721, 3277, 1840, 5127, 4240, 4119, 9253, 6488, 1744], function() {
            return e(e.s = 45065)
        }), _N_E = e.O()
    }
]);