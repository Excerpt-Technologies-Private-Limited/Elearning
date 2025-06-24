(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1780], {
        31780: function(e, s, t) {
            Promise.resolve().then(t.bind(t, 64870)), Promise.resolve().then(t.bind(t, 98432))
        },
        5032: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return r
                }
            });
            var i = t(9268),
                a = t(76394),
                l = t.n(a);
            let n = ["/assets/img/clients/1.svg", "/assets/img/clients/2.svg", "/assets/img/clients/3.svg", "/assets/img/clients/4.svg", "/assets/img/clients/5.svg", "/assets/img/clients/6.svg"];
            var r = e => {
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
                                children: n.map((e, s) => (0, i.jsx)("div", {
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
        64870: function(e, s, t) {
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
                    whiteMode: s
                } = e;
                return (0, a.useEffect)(() => (document && (s ? document.getElementsByTagName("html")[0].classList.remove("-dark-mode") : document.getElementsByTagName("html")[0].classList.add("-dark-mode")), () => {
                    document.getElementsByTagName("html")[0].classList.remove("-dark-mode")
                }), []), (0, i.jsx)(i.Fragment, {})
            }
        },
        52720: function(e, s, t) {
            "use strict";
            t.d(s, {
                Z: function() {
                    return d
                }
            });
            var i = t(9268),
                a = t(86006),
                l = t(76394),
                n = t.n(l),
                r = t(35846),
                c = t.n(r);

            function d(e) {
                let {
                    data: s,
                    index: t
                } = e, [l, r] = (0, a.useState)([]);
                return (0, a.useEffect)(() => {
                    for (let e = Math.round(s.rating); e >= 1; e--) r(e => [...e, "star"])
                }, []), (0, i.jsx)("div", {
                    className: "swiper-slide",
                    style: {
                        height: "fit-content"
                    },
                    children: (0, i.jsx)("div", {
                        children: (0, i.jsxs)("div", {
                            className: "coursesCard -type-1 ",
                            style: {
                                border: "none",
                                padding: 0
                            },
                            children: [(0, i.jsxs)("div", {
                                className: "relative",
                                children: [(0, i.jsxs)("div", {
                                    className: "coursesCard__image overflow-hidden rounded-8",
                                    children: [(0, i.jsx)(n(), {
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
                                className: "h-100 pt-15",
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
                                    children: (0, i.jsx)(c(), {
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
                                            children: (0, i.jsx)(n(), {
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
                                            children: (0, i.jsx)(n(), {
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
                                            children: (0, i.jsx)(n(), {
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
                                        children: [(0, i.jsx)(n(), {
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
        },
        27337: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return d
                }
            });
            var i = t(9268),
                a = t(86006),
                l = t(52720),
                n = t(68148),
                r = t(36115),
                c = t(70382);

            function d(e) {
                let {
                    tabBtnStyle: s
                } = e, [t, d] = (0, a.useState)(!1), [o, m] = (0, a.useState)("All"), [h, x] = (0, a.useState)([]);
                return (0, a.useEffect)(() => {
                    if ("All" == o) x(n.om);
                    else {
                        let e = n.om.filter(e => e.state == o);
                        x(e)
                    }
                }, [o]), (0, a.useEffect)(() => {
                    d(!0)
                }, []), (0, i.jsx)("section", {
                    className: "layout-pt-lg layout-pb-md",
                    children: (0, i.jsx)("div", {
                        className: "container",
                        children: (0, i.jsxs)("div", {
                            className: "tabs -pills js-tabs",
                            children: [(0, i.jsxs)("div", {
                                className: "row y-gap-20 justify-between items-end",
                                children: [(0, i.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, i.jsxs)("div", {
                                        className: "sectionTitle ",
                                        children: [(0, i.jsx)("h2", {
                                            className: "sectionTitle__title ",
                                            children: "Explore Featured Courses"
                                        }), (0, i.jsx)("p", {
                                            className: "sectionTitle__text ",
                                            children: "10,000+ unique online course list designs"
                                        })]
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, i.jsx)("div", {
                                        className: "tabs__controls d-flex justify-center x-gap-10 js-tabs-controls",
                                        children: n.MZ.map((e, t) => (0, i.jsx)("div", {
                                            children: (0, i.jsx)("button", {
                                                onClick: () => m(e),
                                                className: "".concat(s || "tabs__button px-20 py-8 rounded-200 js-tabs-button", "  ").concat(o == e ? "is-active" : "", " "),
                                                "data-tab-target": ".-tab-item-1",
                                                type: "button",
                                                children: e
                                            })
                                        }, t))
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
                                        children: [t && (0, i.jsx)(c.tq, {
                                            modules: [r.W_, r.tl],
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
                                            children: h.map((e, s) => (0, i.jsx)(c.o5, {
                                                children: (0, i.jsx)(l.Z, {
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
        98432: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return W
                }
            });
            var i = t(9268),
                a = t(86006),
                l = t(35846),
                n = t.n(l),
                r = t(76394),
                c = t.n(r),
                d = t(39179),
                o = t(30866),
                m = t(68822);

            function h(e) {
                let {
                    setIsSidebarClosed: s,
                    setMessageOpen: t
                } = e, [l, r] = (0, a.useState)(!1), [h, x] = (0, a.useState)(!1), [u, j] = (0, a.useState)(!1), [g, v] = (0, a.useState)(), p = () => {
                    r(e => !e), l ? N() : f()
                };
                (0, a.useEffect)(() => {
                    v(document.documentElement)
                }, []);
                let f = () => {
                        (null == g ? void 0 : g.requestFullscreen) ? null == g || g.requestFullscreen(): (null == g ? void 0 : g.webkitRequestFullscreen) ? null == g || g.webkitRequestFullscreen() : (null == g ? void 0 : g.msRequestFullscreen) && (null == g || g.msRequestFullscreen())
                    },
                    N = () => {
                        (null == document ? void 0 : document.exitFullscreen) ? null == document || document.exitFullscreen(): (null == document ? void 0 : document.webkitExitFullscreen) ? null == document || document.webkitExitFullscreen() : (null == document ? void 0 : document.msExitFullscreen) && (null == document || document.msExitFullscreen())
                    };
                return (0, i.jsx)("header", {
                    className: " header -base-sidebar border-bottom-light bg-white js-header",
                    children: (0, i.jsx)("div", {
                        className: "header__container py-20 px-10",
                        children: (0, i.jsxs)("div", {
                            className: "row justify-between items-center",
                            children: [(0, i.jsx)("div", {
                                className: "col-auto",
                                children: (0, i.jsxs)("div", {
                                    className: "d-flex items-center",
                                    children: [(0, i.jsx)("div", {
                                        className: "header__explore text-dark-1",
                                        children: (0, i.jsx)("button", {
                                            className: "d-flex items-center js-dashboard-home-9-sidebar-toggle",
                                            onClick: () => s(e => !e),
                                            children: (0, i.jsx)("i", {
                                                className: "icon -dark-text-white icon-explore"
                                            })
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "header__logo ml-30 md:ml-20",
                                        children: (0, i.jsxs)(n(), {
                                            href: "/",
                                            children: [(0, i.jsx)(c(), {
                                                width: 140,
                                                height: 50,
                                                className: "-light-d-none",
                                                src: "/assets/img/general/logo.svg",
                                                alt: "logo"
                                            }), (0, i.jsx)(c(), {
                                                width: 140,
                                                height: 50,
                                                className: "-dark-d-none",
                                                src: "/assets/img/general/logo-dark.svg",
                                                alt: "logo"
                                            })]
                                        })
                                    }), (0, i.jsxs)("form", {
                                        onSubmit: e => {
                                            e.preventDefault()
                                        },
                                        className: "search-field rounded-16 h-50 -reverse-button -w-340 ml-90 xl:ml-20 lg:d-none",
                                        children: [(0, i.jsx)("input", {
                                            required: !0,
                                            className: "bg-light-4 pr-50",
                                            type: "text",
                                            placeholder: "What do you want to learn?"
                                        }), (0, i.jsx)("button", {
                                            className: "text-light-1",
                                            type: "submit",
                                            children: (0, i.jsx)("i", {
                                                className: "icon-search text-20"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, i.jsx)("div", {
                                className: "col-auto",
                                children: (0, i.jsxs)("div", {
                                    className: "d-flex items-center",
                                    children: [(0, i.jsxs)("div", {
                                        className: "d-flex items-center sm:d-none",
                                        children: [(0, i.jsx)("div", {
                                            children: (0, i.jsx)("button", {
                                                onClick: () => {
                                                    document && document.getElementsByTagName("html")[0].classList.toggle("-dark-mode")
                                                },
                                                className: "js-darkmode-toggle text-light-1 d-flex items-center justify-center size-50 rounded-16 -hover-dshb-header-light",
                                                children: (0, i.jsx)("i", {
                                                    className: "text-light-1 text-24 icon icon-night"
                                                })
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "relative",
                                            children: (0, i.jsx)("button", {
                                                onClick: () => p(),
                                                className: "text-light-1 d-flex items-center justify-center size-50 rounded-16 -hover-dshb-header-light",
                                                children: (0, i.jsx)("i", {
                                                    className: "text-24 icon icon-maximize"
                                                })
                                            })
                                        }), (0, i.jsx)(d.Z, {
                                            parentClassess: "relative",
                                            allClasses: 'd-flex items-center text-light-1 d-flex items-center justify-center size-50 rounded-16 -hover-dshb-header-light"'
                                        }), (0, i.jsx)("div", {
                                            className: "relative",
                                            onClick: () => t(!0),
                                            children: (0, i.jsx)("a", {
                                                href: "#",
                                                className: "d-flex items-center justify-center size-50 rounded-16 -hover-dshb-header-light",
                                                "data-el-toggle": ".js-msg-toggle",
                                                children: (0, i.jsx)("i", {
                                                    className: "text-24 icon icon-email"
                                                })
                                            })
                                        }), (0, i.jsxs)("div", {
                                            className: "relative",
                                            onClick: () => x(e => !e),
                                            children: [(0, i.jsx)("a", {
                                                href: "#",
                                                className: "d-flex items-center justify-center size-50 rounded-16 -hover-dshb-header-light",
                                                "data-el-toggle": ".js-notif-toggle",
                                                children: (0, i.jsx)("i", {
                                                    className: "text-24 icon icon-notification"
                                                })
                                            }), (0, i.jsx)("div", {
                                                className: "toggle-element js-notif-toggle  ".concat(h ? "-is-el-visible" : "", " -"),
                                                children: (0, i.jsx)("div", {
                                                    className: "toggle-bottom -notifications bg-white shadow-4 border-light rounded-8 mt-10",
                                                    children: (0, i.jsx)("div", {
                                                        className: "py-30 px-30",
                                                        children: (0, i.jsx)("div", {
                                                            className: "y-gap-40",
                                                            children: m.N.map((e, s) => (0, i.jsxs)("div", {
                                                                className: "d-flex items-center  ".concat(0 !== s ? "border-top-light -dark-border-top-light-5" : "", " "),
                                                                children: [(0, i.jsx)("div", {
                                                                    className: "shrink-0",
                                                                    children: (0, i.jsx)(c(), {
                                                                        width: 40,
                                                                        height: 40,
                                                                        src: e.imageSrc,
                                                                        alt: "image"
                                                                    })
                                                                }), (0, i.jsxs)("div", {
                                                                    className: "ml-12",
                                                                    children: [(0, i.jsx)("h4", {
                                                                        className: "text-15 lh-1 fw-500 -dark-text-dark-1",
                                                                        children: e.heading
                                                                    }), (0, i.jsxs)("div", {
                                                                        className: "text-13 lh-1 mt-10",
                                                                        children: [e.time, " Hours Ago"]
                                                                    })]
                                                                })]
                                                            }, s))
                                                        })
                                                    })
                                                })
                                            })]
                                        })]
                                    }), (0, i.jsxs)("div", {
                                        className: "relative d-flex items-center ml-10",
                                        onClick: () => j(e => !e),
                                        children: [(0, i.jsx)("a", {
                                            href: "#",
                                            "data-el-toggle": ".js-profile-toggle",
                                            children: (0, i.jsx)(c(), {
                                                width: 50,
                                                height: 50,
                                                className: "size-50",
                                                src: "/assets/img/misc/user-profile.png",
                                                alt: "image"
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "toggle-element js-profile-toggle ".concat(u ? "-is-el-visible" : "", " -"),
                                            children: (0, i.jsx)("div", {
                                                className: "toggle-bottom -profile bg-white shadow-4 border-light rounded-8 mt-10",
                                                children: (0, i.jsx)("div", {
                                                    className: "px-30 py-30",
                                                    children: (0, i.jsx)("div", {
                                                        className: "sidebar -dashboard",
                                                        children: o.z.map((e, s) => (0, i.jsx)("div", {
                                                            className: "sidebar__item ".concat(1 == e.id ? "-is-active -dark-bg-dark-2" : ""),
                                                            children: (0, i.jsxs)("a", {
                                                                href: e.href,
                                                                className: "d-flex items-center text-17 lh-1 fw-500 ",
                                                                children: [(0, i.jsx)("i", {
                                                                    className: e.iconClass
                                                                }), e.text]
                                                            })
                                                        }, s))
                                                    })
                                                })
                                            })
                                        })]
                                    })]
                                })
                            })]
                        })
                    })
                })
            }

            function x() {
                let [e, s] = (0, a.useState)(!1);
                return (0, i.jsx)("div", {
                    className: "sidebar -base-sidebar",
                    children: (0, i.jsxs)("div", {
                        className: "sidebar__inner",
                        children: [(0, i.jsxs)("div", {
                            children: [(0, i.jsx)("div", {
                                className: "text-16 lh-1 fw-500 text-dark-1 mb-30",
                                children: "General"
                            }), (0, i.jsxs)("div", {
                                children: [(0, i.jsx)("div", {
                                    className: "sidebar__item -is-active",
                                    children: (0, i.jsxs)(n(), {
                                        href: "/about-1",
                                        className: "-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500",
                                        children: [(0, i.jsx)("i", {
                                            className: "text-20 icon-discovery mr-15"
                                        }), "Explore"]
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "sidebar__item ",
                                    children: (0, i.jsxs)(n(), {
                                        href: "/courses-list-1",
                                        className: "-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500",
                                        children: [(0, i.jsx)("i", {
                                            className: "text-20 icon-play-button mr-15"
                                        }), "Courses"]
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "sidebar__item ",
                                    children: (0, i.jsxs)("a", {
                                        href: "#",
                                        className: "-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500",
                                        children: [(0, i.jsx)("i", {
                                            className: "text-20 icon-book mr-15"
                                        }), "Books"]
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "sidebar__item ",
                                    children: (0, i.jsxs)(n(), {
                                        href: "/blog-list-1",
                                        className: "-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500",
                                        children: [(0, i.jsx)("i", {
                                            className: "text-20 icon-list mr-15"
                                        }), "Articles"]
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "sidebar__item ",
                                    children: (0, i.jsxs)("a", {
                                        href: "#",
                                        className: "-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500",
                                        children: [(0, i.jsx)("i", {
                                            className: "text-20 icon-time-management mr-15"
                                        }), "Calendar"]
                                    })
                                })]
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "mt-60",
                            children: [(0, i.jsx)("div", {
                                className: "text-16 lh-1 fw-500 text-dark-1 mb-30",
                                children: "Pages"
                            }), (0, i.jsxs)("div", {
                                className: "",
                                children: [(0, i.jsx)("div", {
                                    className: "",
                                    children: (0, i.jsx)("div", {
                                        className: "accordion js-accordion",
                                        onClick: () => s(e => !e),
                                        children: (0, i.jsxs)("div", {
                                            className: "accordion__item ".concat(e ? "is-active" : "", " "),
                                            children: [(0, i.jsxs)("div", {
                                                className: "accordion__button py-10 px-20 bg-light-4 rounded-16",
                                                children: [(0, i.jsx)("span", {
                                                    className: "text-16 fw-500 text-dark-1",
                                                    children: "About"
                                                }), (0, i.jsxs)("div", {
                                                    className: "accordion__icon display-flex justify-center items-center h-[100%]",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "icon size-20 mt-5",
                                                        "data-feather": "chevron-down",
                                                        children: (0, i.jsx)("i", {
                                                            className: "fa fa-chevron-down",
                                                            style: {
                                                                fontSize: "14px"
                                                            },
                                                            "aria-hidden": "true"
                                                        })
                                                    }), (0, i.jsx)("div", {
                                                        className: "icon size-20",
                                                        "data-feather": "chevron-up",
                                                        children: (0, i.jsx)("i", {
                                                            className: "fa fa-chevron-up",
                                                            style: {
                                                                fontSize: "14px"
                                                            },
                                                            "aria-hidden": "true"
                                                        })
                                                    })]
                                                })]
                                            }), (0, i.jsx)("div", {
                                                className: "accordion__content ",
                                                style: e ? {
                                                    maxHeight: "112px"
                                                } : {},
                                                children: (0, i.jsx)("div", {
                                                    className: "accordion__content__inner px-30 pt-15 pb-10",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "sidebar__links y-gap-5",
                                                        children: [(0, i.jsx)("div", {
                                                            children: (0, i.jsx)(n(), {
                                                                href: "/about-1",
                                                                children: "About v1"
                                                            })
                                                        }), (0, i.jsx)("div", {
                                                            children: (0, i.jsx)(n(), {
                                                                href: "/about-2",
                                                                children: "About v2"
                                                            })
                                                        }), (0, i.jsx)("div", {
                                                            children: (0, i.jsx)("a", {
                                                                href: "#",
                                                                children: "About v3"
                                                            })
                                                        })]
                                                    })
                                                })
                                            })]
                                        })
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "",
                                    children: (0, i.jsx)(n(), {
                                        href: "/contact-1",
                                        className: "d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover",
                                        children: "Contact"
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "",
                                    children: (0, i.jsx)(n(), {
                                        href: "/pricing",
                                        className: "d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover",
                                        children: "Pricing"
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "",
                                    children: (0, i.jsx)(n(), {
                                        href: "/help-center",
                                        className: "d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover",
                                        children: "Help"
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "",
                                    children: (0, i.jsx)(n(), {
                                        href: "/terms",
                                        className: "d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover",
                                        children: "Faq"
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "",
                                    children: (0, i.jsx)(n(), {
                                        href: "/terms",
                                        className: "d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover",
                                        children: "Term"
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "",
                                    children: (0, i.jsx)("a", {
                                        href: "#",
                                        className: "d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover",
                                        children: "Privacy"
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "",
                                    children: (0, i.jsx)("a", {
                                        href: "#",
                                        className: "d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover",
                                        children: "Setting"
                                    })
                                })]
                            })]
                        })]
                    })
                })
            }
            var u = t(36337),
                j = t(70226),
                g = t(56008);
            let v = ["Category 1", "Category 2", "Category 3"],
                p = ["Category 1", "Category 2", "Category 3"];

            function f() {
                let e = (0, g.useRouter)(),
                    [s, t] = (0, a.useState)(""),
                    [l, n] = (0, a.useState)("");
                return (0, a.useEffect)(() => {
                    (() => {
                        let e = document.querySelectorAll(".js-mouse-move-container");
                        e.forEach(e => {
                            let s = e.querySelectorAll(".js-mouse-move");
                            s.forEach(s => {
                                let t = s.getAttribute("data-move");
                                document.addEventListener("mousemove", i => {
                                    let a = i.pageX - e.offsetLeft,
                                        l = i.pageY - e.offsetTop;
                                    j.ZP.to(s, {
                                        x: (a - e.offsetWidth / 2) / e.offsetWidth * Number(t),
                                        y: (l - e.offsetHeight / 2) / e.offsetHeight * Number(t),
                                        duration: .2
                                    })
                                })
                            })
                        })
                    })()
                }, []), (0, i.jsxs)("section", {
                    className: "masthead -type-7 js-mouse-move-container",
                    children: [(0, i.jsx)("div", {
                        className: "masthead__bg bg-purple-1 rounded-16",
                        children: (0, i.jsx)(c(), {
                            width: 1300,
                            height: 1200,
                            style: {
                                width: "100%"
                            },
                            src: "/assets/img/home-9/hero/bg.png",
                            alt: "image"
                        })
                    }), (0, i.jsx)("div", {
                        className: "container",
                        children: (0, i.jsxs)("div", {
                            className: "row y-gap-20 justify-between items-center",
                            children: [(0, i.jsx)("div", {
                                className: "col-xl-7 col-lg-6",
                                "data-aos": "fade-up",
                                "data-aos-delay": "500",
                                children: (0, i.jsxs)("div", {
                                    className: "masthead__content",
                                    children: [(0, i.jsx)("h1", {
                                        className: "masthead__title text-white is-in-view",
                                        children: "Find a perfect Online Course"
                                    }), (0, i.jsxs)("p", {
                                        className: "masthead__text text-16 lh-2 text-white pt-10 is-in-view",
                                        children: ["You can access 7900+ different courses from 600", (0, i.jsx)("br", {
                                            className: "lg:d-none"
                                        }), " professional trainers for free"]
                                    }), (0, i.jsx)("div", {
                                        children: (0, i.jsx)("div", {
                                            className: "masthead-form bg-white rounded-16 mt-30 px-10 py-10",
                                            children: (0, i.jsxs)("form", {
                                                onSubmit: e => {
                                                    e.preventDefault()
                                                },
                                                className: " d-flex x-gap-30 y-gap-10 items-center flex-wrap",
                                                children: [(0, i.jsx)("div", {
                                                    className: "masthead-form__item",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "d-flex items-center",
                                                        children: [(0, i.jsx)("i", {
                                                            className: "icon-search mr-10 ml-15"
                                                        }), (0, i.jsx)("input", {
                                                            style: {
                                                                outline: "none"
                                                            },
                                                            required: !0,
                                                            type: "text",
                                                            placeholder: "Your Search"
                                                        })]
                                                    })
                                                }), (0, i.jsx)("div", {
                                                    className: "masthead-form__item",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "dropdown js-dropdown w-1/1 bg-white",
                                                        children: [(0, i.jsxs)("div", {
                                                            className: "d-flex items-center justify-between text-dark-1 -dark-text-dark-1",
                                                            children: [(0, i.jsxs)("div", {
                                                                className: "d-flex items-center",
                                                                children: [(0, i.jsx)("i", {
                                                                    className: "icon-basket mr-10"
                                                                }), (0, i.jsx)("span", {
                                                                    className: "js-dropdown-title",
                                                                    children: s || "Category"
                                                                })]
                                                            }), (0, i.jsx)("i", {
                                                                className: "icon text-9 icon-chevron-down ml-10"
                                                            })]
                                                        }), (0, i.jsx)("div", {
                                                            className: "dropdown__item shadow-1",
                                                            children: (0, i.jsx)("div", {
                                                                className: "y-gap-15 js-dropdown-list",
                                                                children: v.map((e, a) => (0, i.jsx)("div", {
                                                                    children: (0, i.jsx)("span", {
                                                                        onClick: () => t(s => s == e ? "" : e),
                                                                        className: "d-block js-dropdown-link cursor ".concat(s == e ? "activeMenu" : "", " "),
                                                                        children: e
                                                                    })
                                                                }, a))
                                                            })
                                                        })]
                                                    })
                                                }), (0, i.jsx)("div", {
                                                    className: "masthead-form__item",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "dropdown js-dropdown w-1/1 bg-white",
                                                        children: [(0, i.jsxs)("div", {
                                                            className: "d-flex items-center justify-between text-dark-1 -dark-text-dark-1",
                                                            children: [(0, i.jsxs)("div", {
                                                                className: "d-flex items-center",
                                                                children: [(0, i.jsx)("i", {
                                                                    className: "icon-basket mr-10"
                                                                }), (0, i.jsx)("span", {
                                                                    className: "js-dropdown-title",
                                                                    children: l || "Category"
                                                                })]
                                                            }), (0, i.jsx)("i", {
                                                                className: "icon text-9 icon-chevron-down ml-10"
                                                            })]
                                                        }), (0, i.jsx)("div", {
                                                            className: "dropdown__item shadow-1",
                                                            children: (0, i.jsx)("div", {
                                                                className: "y-gap-15 js-dropdown-list",
                                                                children: p.map((e, s) => (0, i.jsx)("div", {
                                                                    children: (0, i.jsx)("span", {
                                                                        onClick: () => n(s => s == e ? "" : e),
                                                                        className: "d-block js-dropdown-link cursor ".concat(l == e ? "activeMenu" : "", " "),
                                                                        children: e
                                                                    })
                                                                }, s))
                                                            })
                                                        })]
                                                    })
                                                }), (0, i.jsx)("div", {
                                                    className: "masthead-form__button",
                                                    children: (0, i.jsx)("button", {
                                                        onClick: () => e.push("/courses-list-2"),
                                                        className: "button -dark-1 text-white -dark-button-dark-1",
                                                        children: "Search"
                                                    })
                                                })]
                                            })
                                        })
                                    }), (0, i.jsx)("div", {
                                        children: (0, i.jsx)("div", {
                                            className: "text-white mt-20 is-in-view",
                                            children: "Trending Search: Development, Business, Design, Merketing"
                                        })
                                    })]
                                })
                            }), (0, i.jsx)("div", {
                                className: "col-xl-5 col-lg-6",
                                "data-aos": "fade-up",
                                "data-aos-delay": "750",
                                children: (0, i.jsxs)("div", {
                                    className: "masthead-image",
                                    children: [(0, i.jsx)("div", {
                                        className: "masthead-image__img1",
                                        children: (0, i.jsx)(c(), {
                                            width: 690,
                                            height: 685,
                                            "data-move": "20",
                                            className: "js-mouse-move",
                                            src: "/assets/img/home-9/hero/1.png",
                                            alt: "image"
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "-el-1",
                                        children: (0, i.jsx)(c(), {
                                            width: 108,
                                            height: 108,
                                            className: "js-mouse-move",
                                            "data-move": "40",
                                            src: "/assets/img/home-9/hero/2.png",
                                            alt: "icon"
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "-el-2",
                                        children: (0, i.jsx)(c(), {
                                            width: 108,
                                            height: 108,
                                            className: "js-mouse-move",
                                            "data-move": "40",
                                            src: "/assets/img/home-9/hero/3.png",
                                            alt: "icon"
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "-el-3",
                                        children: (0, i.jsx)(c(), {
                                            width: 108,
                                            height: 108,
                                            className: "js-mouse-move",
                                            "data-move": "40",
                                            src: "/assets/img/home-9/hero/4.png",
                                            alt: "icon"
                                        })
                                    })]
                                })
                            })]
                        })
                    })]
                })
            }
            var N = t(36115),
                b = t(70382);
            t(17544);
            var w = t(63408);

            function y() {
                let [e, s] = (0, a.useState)(!1);
                return (0, a.useEffect)(() => {
                    s(!0)
                }, []), (0, i.jsx)("section", {
                    className: "layout-pt-lg layout-pb-md",
                    children: (0, i.jsxs)("div", {
                        className: "container ",
                        children: [(0, i.jsxs)("div", {
                            className: "row y-gap-20 justify-between items-center",
                            children: [(0, i.jsx)("div", {
                                className: "col-auto",
                                children: (0, i.jsxs)("div", {
                                    className: "sectionTitle ",
                                    children: [(0, i.jsx)("h2", {
                                        className: "sectionTitle__title ",
                                        children: "Top Categories"
                                    }), (0, i.jsx)("p", {
                                        className: "sectionTitle__text ",
                                        children: "Lorem ipsum dolor sit amet, consectetur."
                                    })]
                                })
                            }), (0, i.jsx)("div", {
                                className: "col-auto",
                                children: (0, i.jsxs)("div", {
                                    className: "d-flex x-gap-15 items-center justify-center",
                                    children: [(0, i.jsx)("div", {
                                        className: "col-auto",
                                        children: (0, i.jsx)("button", {
                                            className: "d-flex items-center text-24 arrow-left-hover js-cat-slider-prev arrow-left-categories-nine",
                                            children: (0, i.jsx)("i", {
                                                className: "icon icon-arrow-left"
                                            })
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "col-auto",
                                        children: (0, i.jsx)("div", {
                                            className: "pagination -arrows js-cat-slider-pag pagination-categories-nine pagination-white-dot-dark"
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "col-auto",
                                        children: (0, i.jsx)("button", {
                                            className: "d-flex items-center text-24 arrow-right-hover js-cat-slider-next arrow-right-categories-nine",
                                            children: (0, i.jsx)("i", {
                                                className: "icon icon-arrow-right"
                                            })
                                        })
                                    })]
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: "overflow-hidden pt-50 js-section-slider",
                            children: e && (0, i.jsx)(b.tq, {
                                modules: [N.W_, N.tl],
                                pagination: {
                                    el: ".pagination-categories-nine",
                                    clickable: !0
                                },
                                navigation: {
                                    nextEl: ".arrow-right-categories-nine",
                                    prevEl: ".arrow-left-categories-nine"
                                },
                                spaceBetween: 30,
                                slidesPerView: 1,
                                breakpoints: {
                                    450: {
                                        slidesPerView: 2
                                    },
                                    768: {
                                        slidesPerView: 4
                                    },
                                    1200: {
                                        slidesPerView: 6
                                    }
                                },
                                loop: !0,
                                children: w.Ee.map((e, s) => (0, i.jsx)(b.o5, {
                                    children: (0, i.jsx)(n(), {
                                        href: "/courses-list-".concat(e.id > 8 ? 1 : e.id),
                                        className: "featureCard -type-1 -featureCard-hover-3 linkCustomTwo",
                                        "data-aos": "fade-left",
                                        "data-aos-duration": (s + 1) * 250,
                                        children: (0, i.jsxs)("div", {
                                            className: "featureCard__content",
                                            children: [(0, i.jsx)("div", {
                                                className: "featureCard__icon",
                                                children: (0, i.jsx)(c(), {
                                                    width: 45,
                                                    height: 45,
                                                    src: e.iconSrc,
                                                    alt: "icon"
                                                })
                                            }), (0, i.jsxs)("div", {
                                                className: "featureCard__title",
                                                children: [e.title.split(" ")[0], " ", (0, i.jsx)("br", {}), e.title.split(" ")[1] && e.title.split(" ")[1]]
                                            }), (0, i.jsx)("div", {
                                                className: "featureCard__text",
                                                children: e.text
                                            })]
                                        })
                                    })
                                }, s))
                            })
                        })]
                    })
                })
            }
            t(6497);
            var _ = t(27337);
            let k = [{
                id: 1,
                imageSrc: "/assets/img/home-3/works/1.svg",
                text: "Browse courses from our expert contributors."
            }, {
                id: 2,
                imageSrc: "/assets/img/home-3/works/2.svg",
                text: "Purchase quickly and securely."
            }, {
                id: 3,
                imageSrc: "/assets/img/home-3/works/3.svg",
                text: "That’s it! Start learning right away."
            }];

            function C() {
                return (0, i.jsx)("section", {
                    className: "layout-pt-lg layout-pb-lg",
                    children: (0, i.jsxs)("div", {
                        className: "container",
                        children: [(0, i.jsx)("div", {
                            className: "row y-gap-20 justify-center text-center",
                            children: (0, i.jsx)("div", {
                                className: "col-auto",
                                children: (0, i.jsxs)("div", {
                                    className: "sectionTitle ",
                                    children: [(0, i.jsx)("h2", {
                                        className: "sectionTitle__title ",
                                        children: "How it works?"
                                    }), (0, i.jsx)("p", {
                                        className: "sectionTitle__text ",
                                        children: "10,000+ unique online course list designs"
                                    })]
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: "row y-gap-30 justify-between pt-60 lg:pt-40",
                            children: k.map((e, s) => (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("div", {
                                    className: "col-xl-2 col-lg-3 col-md-6",
                                    children: (0, i.jsxs)("div", {
                                        className: "d-flex flex-column items-center text-center",
                                        children: [(0, i.jsxs)("div", {
                                            className: "relative size-120 d-flex justify-center items-center rounded-full bg-light-4",
                                            children: [(0, i.jsx)(c(), {
                                                width: 50,
                                                height: 50,
                                                src: e.imageSrc,
                                                alt: "image"
                                            }), (0, i.jsx)("div", {
                                                className: "side-badge",
                                                children: (0, i.jsx)("div", {
                                                    className: "size-35 d-flex justify-center items-center rounded-full bg-dark-1 -dark-bg-purple-1",
                                                    children: (0, i.jsxs)("span", {
                                                        className: "text-14 fw-500 text-white",
                                                        children: ["0", e.id]
                                                    })
                                                })
                                            })]
                                        }), (0, i.jsx)("div", {
                                            className: "text-17 fw-500 text-dark-1 mt-30",
                                            children: e.text
                                        })]
                                    })
                                }, s), 0 == s && (0, i.jsx)("div", {
                                    className: "col-auto xl:d-none",
                                    children: (0, i.jsx)("div", {
                                        className: "pt-30",
                                        children: (0, i.jsx)(c(), {
                                            width: 142,
                                            height: 21,
                                            src: "/assets/img/misc/lines/1.svg",
                                            alt: "icon"
                                        })
                                    })
                                }), 1 == s && (0, i.jsx)("div", {
                                    className: "col-auto xl:d-none",
                                    children: (0, i.jsx)("div", {
                                        className: "pt-30",
                                        children: (0, i.jsx)(c(), {
                                            width: 142,
                                            height: 21,
                                            src: "/assets/img/misc/lines/2.svg",
                                            alt: "icon"
                                        })
                                    })
                                })]
                            }))
                        })]
                    })
                })
            }
            var S = t(50309);

            function E(e) {
                let {
                    backgroundColor: s
                } = e;
                return (0, i.jsx)("section", {
                    className: "layout-pt-lg layout-pb-lg ".concat(s || ""),
                    children: (0, i.jsxs)("div", {
                        className: "container",
                        children: [(0, i.jsxs)("div", {
                            className: "row y-gap-20 justify-between items-center",
                            children: [(0, i.jsx)("div", {
                                className: "col-lg-6",
                                children: (0, i.jsxs)("div", {
                                    className: "sectionTitle ",
                                    children: [(0, i.jsx)("h2", {
                                        className: "sectionTitle__title ",
                                        "data-aos": "fade-left",
                                        children: "Learn from the best instructors"
                                    }), (0, i.jsx)("p", {
                                        className: "sectionTitle__text ",
                                        "data-aos": "fade-left",
                                        children: "Lorem ipsum dolor sit amet, consectetur."
                                    })]
                                })
                            }), (0, i.jsx)("div", {
                                className: "col-auto",
                                "data-aos": "fade-left",
                                children: (0, i.jsxs)(n(), {
                                    href: "/instructors-list-1",
                                    className: "button -icon -purple-3 text-purple-1",
                                    children: ["View All Instructors", (0, i.jsx)("i", {
                                        className: "icon-arrow-top-right text-13 ml-10"
                                    })]
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: "row y-gap-30 pt-50",
                            children: S.cz.slice(0, 4).map((e, s) => {
                                var t;
                                return (0, i.jsx)("div", {
                                    className: "col-lg-3 col-sm-6",
                                    "data-aos": "fade-left",
                                    "data-aos-duration": (s + 1) * 500,
                                    children: (0, i.jsxs)("div", {
                                        className: "teamCard -type-1 -teamCard-hover",
                                        children: [(0, i.jsxs)("div", {
                                            className: "teamCard__image",
                                            children: [(0, i.jsx)(c(), {
                                                width: 600,
                                                height: 700,
                                                style: {
                                                    height: "100%",
                                                    width: "100%"
                                                },
                                                src: e.image,
                                                alt: "image"
                                            }), (0, i.jsx)("div", {
                                                className: "teamCard__socials",
                                                children: (0, i.jsx)("div", {
                                                    className: "d-flex x-gap-20 y-gap-10 justify-center items-center h-100",
                                                    children: null === (t = e.socialProfile) || void 0 === t ? void 0 : t.map((e, s) => (0, i.jsx)(n(), {
                                                        href: e.url ? e.url : "#",
                                                        children: (0, i.jsx)("i", {
                                                            className: "".concat(e.icon, " text-white")
                                                        })
                                                    }, s))
                                                })
                                            })]
                                        }), (0, i.jsxs)("div", {
                                            className: "teamCard__content",
                                            children: [(0, i.jsx)("h4", {
                                                className: "teamCard__title",
                                                children: (0, i.jsx)(n(), {
                                                    className: "linkCustom",
                                                    href: "/instructors/".concat(e.id),
                                                    children: e.name
                                                })
                                            }), (0, i.jsx)("p", {
                                                className: "teamCard__text",
                                                children: e.role
                                            }), (0, i.jsxs)("div", {
                                                className: "row items-center y-gap-10 x-gap-10 pt-10",
                                                children: [(0, i.jsx)("div", {
                                                    className: "col-auto",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "d-flex items-center",
                                                        children: [(0, i.jsx)("div", {
                                                            className: "icon-star text-yellow-1 text-11 mr-5"
                                                        }), (0, i.jsx)("div", {
                                                            className: "text-14 lh-12 text-yellow-1 fw-500",
                                                            children: e.rating
                                                        })]
                                                    })
                                                }), (0, i.jsx)("div", {
                                                    className: "col-auto",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "d-flex items-center",
                                                        children: [(0, i.jsx)("div", {
                                                            className: "icon-online-learning text-light-1 text-11 mr-5"
                                                        }), (0, i.jsxs)("div", {
                                                            className: "text-14 lh-12",
                                                            children: [e.students, " Students"]
                                                        })]
                                                    })
                                                }), (0, i.jsx)("div", {
                                                    className: "col-auto",
                                                    children: (0, i.jsxs)("div", {
                                                        className: "d-flex items-center",
                                                        children: [(0, i.jsx)("div", {
                                                            className: "icon-play text-light-1 text-11 mr-5"
                                                        }), (0, i.jsxs)("div", {
                                                            className: "text-14 lh-12",
                                                            children: [e.courses, " Course"]
                                                        })]
                                                    })
                                                })]
                                            })]
                                        })]
                                    })
                                }, s)
                            })
                        }), (0, i.jsx)("div", {
                            className: "row justify-center text-center pt-60 lg:pt-40",
                            children: (0, i.jsx)("div", {
                                className: "col-auto",
                                children: (0, i.jsxs)("p", {
                                    className: "lh-1",
                                    children: ["Want to help people learn, grow and achieve more in life?", (0, i.jsx)(n(), {
                                        className: "text-purple-1 underline",
                                        href: "/instructor-become",
                                        children: "Become an instructor"
                                    })]
                                })
                            })
                        })]
                    })
                })
            }
            let T = [{
                id: 1,
                imgSrc: "/assets/img/books/1.png",
                title: "HTML 5 Maker",
                rating: 5,
                ratingCount: 1845,
                price: 157,
                discountPrice: 79
            }, {
                id: 2,
                imgSrc: "/assets/img/books/2.png",
                title: "CSS Master",
                rating: 5,
                ratingCount: 1845,
                price: 157,
                discountPrice: 79
            }, {
                id: 3,
                imgSrc: "/assets/img/books/3.png",
                title: "Vue JS",
                rating: 5,
                ratingCount: 1845,
                price: 157,
                discountPrice: 79
            }, {
                id: 4,
                imgSrc: "/assets/img/books/4.png",
                title: "HTML 5 & CSS3",
                rating: 5,
                ratingCount: 1845,
                price: 157,
                discountPrice: 79
            }, {
                id: 5,
                imgSrc: "/assets/img/books/5.png",
                title: "CSS Developer",
                rating: 5,
                ratingCount: 1845,
                price: 157,
                discountPrice: 79
            }, {
                id: 6,
                imgSrc: "/assets/img/books/6.png",
                title: "HTML 5 Maker",
                rating: 5,
                ratingCount: 1845,
                price: 157,
                price: 157,
                discountPrice: 79
            }];

            function z(e) {
                let {
                    data: s
                } = e, [t, l] = (0, a.useState)([]);
                return (0, a.useEffect)(() => {
                    for (let e = Math.round(s.rating); e >= 1; e--) l(e => [...e, "star"])
                }, []), (0, i.jsx)("div", {
                    className: "swiper-slide",
                    children: (0, i.jsxs)("div", {
                        className: "",
                        children: [(0, i.jsx)(c(), {
                            width: 220,
                            height: 285,
                            style: {
                                width: "100%"
                            },
                            className: "w-1/1",
                            src: s.imgSrc,
                            alt: "book"
                        }), (0, i.jsx)("h5", {
                            className: "text-17 fw-500 mt-15",
                            children: s.title
                        }), (0, i.jsxs)("div", {
                            className: "d-flex items-center mt-10",
                            children: [(0, i.jsx)("div", {
                                className: "d-flex x-gap-5",
                                children: t.map((e, s) => (0, i.jsx)("div", {
                                    className: "icon-star text-9 text-yellow-1"
                                }, s))
                            }), (0, i.jsxs)("div", {
                                className: "text-13 lh-1 ml-10",
                                children: ["(", s.ratingCount, ")"]
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "d-flex items-center pt-15",
                            children: [(0, i.jsxs)("div", {
                                className: "text-15 lh-1 line-through",
                                children: ["$", s.price]
                            }), (0, i.jsxs)("div", {
                                className: "text-18 lh-1 text-purple-1 fw-500 ml-10",
                                children: ["$", s.discountPrice]
                            })]
                        })]
                    })
                })
            }

            function P() {
                let [e, s] = (0, a.useState)(!1);
                return (0, a.useEffect)(() => {
                    s(!0)
                }, []), (0, i.jsx)("section", {
                    className: "layout-pt-md layout-pb-md",
                    children: (0, i.jsxs)("div", {
                        className: "container",
                        children: [(0, i.jsxs)("div", {
                            className: "row y-gap-20 justify-between items-center",
                            children: [(0, i.jsx)("div", {
                                className: "col-lg-6",
                                "data-aos": "fade-left",
                                "data-aos-duration": "800",
                                children: (0, i.jsxs)("div", {
                                    className: "sectionTitle ",
                                    children: [(0, i.jsx)("h2", {
                                        className: "sectionTitle__title ",
                                        children: "Latest Books"
                                    }), (0, i.jsx)("p", {
                                        className: "sectionTitle__text ",
                                        children: "10,000+ unique online course list designs"
                                    })]
                                })
                            }), (0, i.jsx)("div", {
                                className: "col-auto",
                                "data-aos": "fade-left",
                                "data-aos-duration": "800",
                                children: (0, i.jsxs)("a", {
                                    href: "#",
                                    className: "button -icon -purple-3 text-purple-1",
                                    children: ["All Courses", (0, i.jsx)("i", {
                                        className: "icon-arrow-top-right text-13 ml-10"
                                    })]
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: "pt-60 lg:pt-40",
                            children: (0, i.jsxs)("div", {
                                className: "overflow-hidden js-section-slider",
                                "data-loop": !0,
                                "data-gap": "30",
                                "data-pagination": !0,
                                "data-slider-cols": "xl-6 lg-6 md-4 sm-3 base-2",
                                children: [e && (0, i.jsx)(b.tq, {
                                    modules: [N.W_, N.tl],
                                    pagination: {
                                        el: ".books-pagination",
                                        clickable: !0
                                    },
                                    navigation: {
                                        nextEl: ".books-next",
                                        prevEl: ".books-prev"
                                    },
                                    spaceBetween: 30,
                                    slidesPerView: 2,
                                    breakpoints: {
                                        450: {
                                            slidesPerView: 3
                                        },
                                        768: {
                                            slidesPerView: 4
                                        },
                                        1200: {
                                            slidesPerView: 6
                                        }
                                    },
                                    loop: !0,
                                    children: T.map((e, s) => (0, i.jsx)(b.o5, {
                                        children: (0, i.jsx)(z, {
                                            data: e
                                        })
                                    }, s))
                                }), (0, i.jsxs)("div", {
                                    className: "d-flex x-gap-15 items-center justify-center pt-60 lg:pt-40",
                                    children: [(0, i.jsx)("div", {
                                        className: "col-auto",
                                        children: (0, i.jsx)("button", {
                                            className: "d-flex items-center text-24 arrow-left-hover js-prev books-prev",
                                            children: (0, i.jsx)("i", {
                                                className: "icon icon-arrow-left"
                                            })
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "col-auto",
                                        children: (0, i.jsx)("div", {
                                            className: "pagination -arrows js-pagination books-pagination pagination-white-dot-dark"
                                        })
                                    }), (0, i.jsx)("div", {
                                        className: "col-auto",
                                        children: (0, i.jsx)("button", {
                                            className: "d-flex items-center text-24 arrow-right-hover js-next books-next",
                                            children: (0, i.jsx)("i", {
                                                className: "icon icon-arrow-right"
                                            })
                                        })
                                    })]
                                })]
                            })
                        })]
                    })
                })
            }

            function q() {
                return (0, i.jsx)("section", {
                    className: "layout-pt-md layout-pb-md",
                    children: (0, i.jsxs)("div", {
                        className: "container",
                        children: [(0, i.jsxs)("div", {
                            className: "row y-gap-20 justify-between items-center",
                            children: [(0, i.jsx)("div", {
                                className: "col-lg-6",
                                "data-aos": "fade-left",
                                "data-aos-duration": "800",
                                children: (0, i.jsxs)("div", {
                                    className: "sectionTitle ",
                                    children: [(0, i.jsx)("h2", {
                                        className: "sectionTitle__title ",
                                        children: "Live Streams"
                                    }), (0, i.jsx)("p", {
                                        className: "sectionTitle__text ",
                                        children: "10,000+ unique online course list designs"
                                    })]
                                })
                            }), (0, i.jsx)("div", {
                                className: "col-auto ",
                                "data-aos": "fade-left",
                                "data-aos-duration": "800",
                                children: (0, i.jsxs)("a", {
                                    href: "#",
                                    className: "button -icon -purple-3 text-purple-1",
                                    children: ["See All", (0, i.jsx)("i", {
                                        className: "icon-arrow-top-right text-13 ml-10"
                                    })]
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: "row y-gap-30 pt-60 lg:pt-40",
                            children: S.xz.map((e, s) => (0, i.jsx)("div", {
                                className: "col-xl-2 col-lg-3 col-md-4 col-sm-6",
                                children: (0, i.jsxs)(n(), {
                                    href: "/instructors/".concat(e.id),
                                    className: "d-flex flex-column items-center linkCustom",
                                    children: [(0, i.jsx)("div", {
                                        children: (0, i.jsx)(c(), {
                                            width: 180,
                                            height: 180,
                                            src: e.image,
                                            alt: "image"
                                        })
                                    }), (0, i.jsx)("h5", {
                                        className: "text-17 fw-500 mt-20",
                                        children: e.role
                                    }), (0, i.jsx)("a", {
                                        href: "#",
                                        className: "text-light-1 mt-5",
                                        children: e.email
                                    })]
                                })
                            }, s))
                        })]
                    })
                })
            }
            var A = t(59308);

            function I() {
                return (0, i.jsxs)("section", {
                    className: "layout-pt-lg layout-pb-lg section-bg",
                    children: [(0, i.jsx)("div", {
                        className: "section-bg__item",
                        children: (0, i.jsx)(c(), {
                            width: 1200,
                            height: 1200,
                            style: {
                                width: "100%"
                            },
                            className: "img-full rounded-16",
                            src: "/assets/img/home-9/cta/bg.png",
                            alt: "image"
                        })
                    }), (0, i.jsxs)("div", {
                        className: "container",
                        children: [(0, i.jsx)("div", {
                            className: "row justify-center text-center",
                            children: (0, i.jsx)("div", {
                                className: "col-xl-5 col-lg-6 col-md-11",
                                children: (0, i.jsxs)("div", {
                                    className: "sectionTitle -light",
                                    children: [(0, i.jsx)("h2", {
                                        className: "sectionTitle__title ",
                                        children: "Subscribe our Newsletter &"
                                    }), (0, i.jsx)("p", {
                                        className: "sectionTitle__text ",
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                    })]
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: "row mt-30 justify-center",
                            children: (0, i.jsx)("div", {
                                className: "col-lg-6",
                                children: (0, i.jsxs)("form", {
                                    className: "form-single-field -help",
                                    onSubmit: e => {
                                        e.preventDefault()
                                    },
                                    children: [(0, i.jsx)("input", {
                                        required: !0,
                                        type: "text",
                                        placeholder: "Your Email..."
                                    }), (0, i.jsx)("button", {
                                        className: "button -purple-1 text-white",
                                        type: "submit",
                                        children: "Submit"
                                    })]
                                })
                            })
                        })]
                    })]
                })
            }
            var F = t(5032),
                M = t(5900),
                D = t(1311);

            function W() {
                let [e, s] = (0, a.useState)(!1), [t, l] = (0, a.useState)(!1);
                return (0, a.useEffect)(() => {
                    window.innerWidth < 990 && s(!0);
                    let e = () => {
                        window.innerWidth < 990 && s(!0)
                    };
                    return window.addEventListener("resize", e), () => {
                        window.removeEventListener("resize", e)
                    }
                }, []), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)("div", {
                        className: "main-content homeModeChange ",
                        children: [(0, i.jsx)(D.default, {}), (0, i.jsx)(h, {
                            setMessageOpen: l,
                            setIsSidebarClosed: s
                        }), (0, i.jsx)("div", {
                            className: "content-wrapper js-content-wrapper",
                            children: (0, i.jsxs)("div", {
                                className: "dashboard -home-9 px-0 js-dashboard-home-9 ".concat(e ? "-is-sidebar-hidden" : "", " "),
                                children: [(0, i.jsx)("div", {
                                    className: "dashboard__sidebar -base scroll-bar-1 border-right-light lg:px-30",
                                    children: (0, i.jsx)(x, {})
                                }), (0, i.jsxs)("div", {
                                    className: "dashboard__main mt-0 ",
                                    children: [(0, i.jsxs)("div", {
                                        className: "dashboard__content pt-0 px-15 pb-0",
                                        children: [(0, i.jsx)(f, {}), (0, i.jsx)(y, {}), (0, i.jsx)(_.default, {
                                            tabBtnStyle: "tabs__button px-20 py-8 rounded-200 -dark-text-white js-tabs-button "
                                        }), (0, i.jsx)(C, {}), (0, i.jsx)(E, {}), (0, i.jsx)(P, {}), (0, i.jsx)(q, {}), (0, i.jsx)(A.default, {
                                            backgroundComponent: "whiteBg"
                                        }), (0, i.jsx)(I, {}), (0, i.jsx)(F.default, {})]
                                    }), (0, i.jsx)(u.Z, {})]
                                })]
                            })
                        })]
                    }), (0, i.jsx)(M.Z, {
                        messageOpen: t,
                        setMessageOpen: l
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
                n = t(70382),
                r = t(41715),
                c = t(76394),
                d = t.n(c);

            function o(e) {
                let {
                    backgroundComponent: s
                } = e, t = (0, a.useRef)(null), [c, o] = (0, a.useState)(0), [m, h] = (0, a.useState)(!1);
                (0, a.useEffect)(() => {
                    h(!0), t.current && t.current.slideTo(0)
                }, []);
                let x = e => {
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
                                    children: [m && (0, i.jsx)(n.tq, {
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
                                        children: r.r.map((e, s) => (0, i.jsx)(n.o5, {
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
                                            children: r.nE.map((e, s) => (0, i.jsx)("div", {
                                                onClick: () => x(s),
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
                    return n
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
                n = [{
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
        63408: function(e, s, t) {
            "use strict";
            t.d(s, {
                Ee: function() {
                    return i
                },
                sb: function() {
                    return a
                }
            });
            let i = [{
                    id: 1,
                    iconSrc: "/assets/img/featureCards/1.svg",
                    title: "Design Creative",
                    text: "573+ Courses"
                }, {
                    id: 2,
                    iconSrc: "/assets/img/featureCards/2.svg",
                    title: "Sales Marketing",
                    text: "565+ Courses"
                }, {
                    id: 3,
                    iconSrc: "/assets/img/featureCards/3.svg",
                    title: "Development IT",
                    text: "126+ Courses"
                }, {
                    id: 4,
                    iconSrc: "/assets/img/featureCards/4.svg",
                    title: "Engineering Architecture",
                    text: "35+ Courses"
                }, {
                    id: 5,
                    iconSrc: "/assets/img/featureCards/5.svg",
                    title: "Personal Development",
                    text: "908+ Courses"
                }, {
                    id: 6,
                    iconSrc: "/assets/img/featureCards/6.svg",
                    title: "Finance Accounting",
                    text: "129+ Courses"
                }],
                a = [{
                    id: 1,
                    icon: "icon-architecture text-40",
                    title: "Design Creative",
                    courses: 573
                }, {
                    id: 2,
                    icon: "icon-megaphone text-40",
                    title: "Sales Marketing",
                    courses: 565
                }, {
                    id: 3,
                    icon: "icon-save-money text-40",
                    title: "Development IT",
                    courses: 126
                }, {
                    id: 4,
                    icon: "icon-software text-40",
                    title: "Engineering Architecture",
                    courses: 35
                }, {
                    id: 5,
                    icon: "icon-tools text-40",
                    title: "Personal Development",
                    courses: 908
                }, {
                    id: 6,
                    icon: "icon-person-2 text-40",
                    title: "Finance Accounting",
                    courses: 129
                }]
        },
        6497: function() {},
        17544: function() {}
    }
]);