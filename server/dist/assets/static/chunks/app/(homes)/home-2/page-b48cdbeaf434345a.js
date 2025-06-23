(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [937, 4952, 843], {
        1126: function(e, s, i) {
            Promise.resolve().then(i.t.bind(i, 28707, 23)), Promise.resolve().then(i.t.bind(i, 8920, 23)), Promise.resolve().then(i.bind(i, 5032)), Promise.resolve().then(i.bind(i, 1311)), Promise.resolve().then(i.bind(i, 71288)), Promise.resolve().then(i.bind(i, 19472)), Promise.resolve().then(i.bind(i, 36094)), Promise.resolve().then(i.bind(i, 56923)), Promise.resolve().then(i.bind(i, 43003)), Promise.resolve().then(i.bind(i, 89784)), Promise.resolve().then(i.bind(i, 60371))
        },
        43003: function(e, s, i) {
            "use strict";
            i.r(s), i.d(s, {
                default: function() {
                    return d
                }
            });
            var t = i(9268),
                l = i(70226),
                a = i(76394),
                n = i.n(a),
                r = i(86006);
            let c = [{
                id: "item1",
                iconBg: "bg-green-2",
                iconSrc: "/assets/img/home-2/learning/icons/1.svg",
                title: "Leadership development",
                description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries"
            }, {
                id: "item2",
                iconBg: "bg-purple-2",
                iconSrc: "/assets/img/home-2/learning/icons/2.svg",
                title: "Digital transformation",
                description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries"
            }, {
                id: "item3",
                iconBg: "bg-orange-2",
                iconSrc: "/assets/img/home-2/learning/icons/3.svg",
                title: "Innovation & design thinking",
                description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries"
            }];

            function d() {
                return (0, r.useEffect)(() => {
                    (() => {
                        let e = document.querySelectorAll(".js-mouse-move-container");
                        e.forEach(e => {
                            let s = e.querySelectorAll(".js-mouse-move");
                            s.forEach(s => {
                                let i = s.getAttribute("data-move");
                                document.addEventListener("mousemove", t => {
                                    let a = t.pageX - e.offsetLeft,
                                        n = t.pageY - e.offsetTop;
                                    l.ZP.to(s, {
                                        x: (a - e.offsetWidth / 2) / e.offsetWidth * Number(i),
                                        y: (n - e.offsetHeight / 2) / e.offsetHeight * Number(i),
                                        duration: .2
                                    })
                                })
                            })
                        })
                    })()
                }, []), (0, t.jsx)("section", {
                    className: "layout-pt-lg layout-pb-lg js-mouse-move-container",
                    children: (0, t.jsx)("div", {
                        className: "container",
                        children: (0, t.jsxs)("div", {
                            className: "row y-gap-30 items-center",
                            children: [(0, t.jsxs)("div", {
                                className: "col-lg-6 order-2 order-lg-1",
                                children: [(0, t.jsxs)("h2", {
                                    className: "text-45 lg:text-40 md:text-30 text-dark-1",
                                    children: ["Online learning solutions", (0, t.jsx)("br", {
                                        className: "xl:d-none"
                                    }), " that meet your needs."]
                                }), (0, t.jsxs)("p", {
                                    className: "text-dark-1 mt-20",
                                    children: ["Use the list below to bring attention to your product’s key", (0, t.jsx)("br", {
                                        className: "lg:d-none"
                                    }), " differentiator."]
                                }), (0, t.jsx)("div", {
                                    className: "row y-gap-30 pt-60 lg:pt-40",
                                    children: c.map((e, s) => (0, t.jsx)("div", {
                                        className: "col-12",
                                        children: (0, t.jsxs)("div", {
                                            className: "featureIcon -type-1",
                                            children: [(0, t.jsx)("div", {
                                                className: "featureIcon__icon ".concat(e.iconBg && e.iconBg),
                                                children: (0, t.jsx)(n(), {
                                                    width: 40,
                                                    height: 40,
                                                    src: e.iconSrc && e.iconSrc,
                                                    alt: "icon"
                                                })
                                            }), (0, t.jsxs)("div", {
                                                className: "featureIcon__content ml-30 md:ml-20",
                                                children: [(0, t.jsx)("h4", {
                                                    className: "text-17 fw-500",
                                                    children: e.title
                                                }), (0, t.jsxs)("p", {
                                                    className: "mt-5",
                                                    children: [e.description.split(" ").slice(0, 5).join(" "), (0, t.jsx)("br", {
                                                        className: "lg:d-none"
                                                    }), e.description.split(" ").slice(5, -1).join(" ")]
                                                })]
                                            })]
                                        })
                                    }, s))
                                })]
                            }), (0, t.jsx)("div", {
                                className: "col-lg-6 order-1 order-lg-2",
                                children: (0, t.jsxs)("div", {
                                    className: "elements-image",
                                    children: [(0, t.jsx)("div", {
                                        className: "elements-image__img1",
                                        children: (0, t.jsx)(n(), {
                                            width: 520,
                                            height: 600,
                                            className: "js-mouse-move",
                                            "data-move": "40",
                                            src: "/assets/img/home-2/learning/1.png",
                                            alt: "image"
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "elements-image__img2",
                                        children: (0, t.jsx)(n(), {
                                            width: 290,
                                            height: 330,
                                            className: "js-mouse-move",
                                            "data-move": "70",
                                            src: "/assets/img/home-2/learning/2.png",
                                            alt: "image"
                                        })
                                    }), (0, t.jsxs)("div", {
                                        "data-move": "60",
                                        className: "elements-image__el1 lg:d-none img-el -w-260 px-20 py-20 d-flex items-center bg-white rounded-8 js-mouse-move",
                                        children: [(0, t.jsx)(n(), {
                                            width: 70,
                                            height: 70,
                                            src: "/assets/img/masthead/4.png",
                                            alt: "icon"
                                        }), (0, t.jsxs)("div", {
                                            className: "ml-20",
                                            children: [(0, t.jsx)("div", {
                                                className: "text-dark-1 text-16 fw-500 lh-1",
                                                children: "Ali Tufan"
                                            }), (0, t.jsx)("div", {
                                                className: "mt-3",
                                                children: "UX/UI Designer"
                                            }), (0, t.jsxs)("div", {
                                                className: "d-flex x-gap-5 mt-3",
                                                children: [(0, t.jsx)("div", {
                                                    children: (0, t.jsx)("div", {
                                                        className: "icon-star text-yellow-1 text-11"
                                                    })
                                                }), (0, t.jsx)("div", {
                                                    children: (0, t.jsx)("div", {
                                                        className: "icon-star text-yellow-1 text-11"
                                                    })
                                                }), (0, t.jsx)("div", {
                                                    children: (0, t.jsx)("div", {
                                                        className: "icon-star text-yellow-1 text-11"
                                                    })
                                                }), (0, t.jsx)("div", {
                                                    children: (0, t.jsx)("div", {
                                                        className: "icon-star text-yellow-1 text-11"
                                                    })
                                                }), (0, t.jsx)("div", {
                                                    children: (0, t.jsx)("div", {
                                                        className: "icon-star text-yellow-1 text-11"
                                                    })
                                                })]
                                            })]
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        "data-move": "30",
                                        className: "elements-image__el2 lg:d-none img-el -w-250 px-20 py-20 d-flex items-center bg-white rounded-8 js-mouse-move",
                                        children: [(0, t.jsx)("div", {
                                            className: "size-50 d-flex justify-center items-center bg-red-2 rounded-full",
                                            children: (0, t.jsx)(n(), {
                                                width: 24,
                                                height: 23,
                                                src: "/assets/img/masthead/1.svg",
                                                alt: "icon"
                                            })
                                        }), (0, t.jsxs)("div", {
                                            className: "ml-20",
                                            children: [(0, t.jsx)("div", {
                                                className: "text-orange-1 text-16 fw-500 lh-1",
                                                children: "3.000 +"
                                            }), (0, t.jsx)("div", {
                                                className: "mt-3",
                                                children: "Free Courses"
                                            })]
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        "data-move": "30",
                                        className: "elements-image__el3 sm:d-none shadow-4 img-el -w-260 px-30 py-20 d-flex items-center bg-white rounded-8 js-mouse-move",
                                        children: [(0, t.jsx)("div", {
                                            className: "img-el__side",
                                            children: (0, t.jsx)("div", {
                                                className: "size-50 d-flex justify-center items-center bg-purple-1 rounded-full",
                                                children: (0, t.jsx)(n(), {
                                                    width: 20,
                                                    height: 27,
                                                    src: "/assets/img/masthead/2.svg",
                                                    alt: "icon"
                                                })
                                            })
                                        }), (0, t.jsxs)("div", {
                                            className: "",
                                            children: [(0, t.jsx)("div", {
                                                className: "text-purple-1 text-16 fw-500 lh-1",
                                                children: "Congrats!"
                                            }), (0, t.jsx)("div", {
                                                className: "mt-3",
                                                children: "Your Admission Completed"
                                            })]
                                        })]
                                    })]
                                })
                            })]
                        })
                    })
                })
            }
        },
        36094: function(e, s, i) {
            "use strict";
            i.r(s), i.d(s, {
                default: function() {
                    return d
                }
            });
            var t = i(9268),
                l = i(68148),
                a = i(86006),
                n = i(22969),
                r = i(35846),
                c = i.n(r);

            function d() {
                let [e, s] = (0, a.useState)([]), [i, r] = (0, a.useState)("All"), [d, o] = (0, a.useState)("All"), [m, h] = (0, a.useState)("All"), [x, u] = (0, a.useState)("");
                return (0, a.useEffect)(() => {
                    u("");
                    let e = [];
                    e = "All" == i ? l.om : l.om.filter(e => e.category == i), "All" != d && (e = e.filter(e => e.viewStatus == d)), "All" != m && (e = e.filter(e => e.difficulty == m)), s(e)
                }, [d, m, i]), (0, t.jsx)("section", {
                    className: "layout-pt-lg layout-pb-lg",
                    children: (0, t.jsxs)("div", {
                        className: "container",
                        children: [(0, t.jsxs)("div", {
                            className: "row y-gap-15 justify-between items-center",
                            children: [(0, t.jsx)("div", {
                                className: "col-lg-6",
                                children: (0, t.jsxs)("div", {
                                    className: "sectionTitle ",
                                    children: [(0, t.jsx)("h2", {
                                        className: "sectionTitle__title sm:text-20",
                                        children: "Our Most Popular Courses"
                                    }), (0, t.jsx)("p", {
                                        className: "sectionTitle__text ",
                                        children: "10,000+ unique online course list designs"
                                    })]
                                })
                            }), (0, t.jsx)("div", {
                                className: "col-lg-auto",
                                children: (0, t.jsxs)("div", {
                                    className: "d-flex items-center",
                                    children: [(0, t.jsx)("div", {
                                        className: "text-dark-1",
                                        children: "Filter By:"
                                    }), (0, t.jsxs)("div", {
                                        className: "d-flex flex-wrap x-gap-20 y-gap-20 items-center pl-15",
                                        children: [(0, t.jsx)("div", {
                                            children: (0, t.jsxs)("div", {
                                                className: "dropdown js-dropdown js-drop1-active ".concat("category" == x ? "-is-dd-active" : ""),
                                                children: [(0, t.jsxs)("div", {
                                                    onClick: () => u(e => "category" == e ? "" : "category"),
                                                    className: "dropdown__button d-flex items-center text-14 rounded-8 px-15 py-10 text-dark-1",
                                                    "data-el-toggle": ".js-drop1-toggle",
                                                    "data-el-toggle-active": ".js-drop1-active",
                                                    children: [(0, t.jsx)("span", {
                                                        className: "js-dropdown-title",
                                                        children: "All" == i ? "Category" : i
                                                    }), (0, t.jsx)("i", {
                                                        className: "icon text-9 ml-40 icon-chevron-down"
                                                    })]
                                                }), (0, t.jsx)("div", {
                                                    className: "toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-drop1-toggle ".concat("category" == x ? "-is-el-visible" : "", " "),
                                                    children: (0, t.jsx)("div", {
                                                        className: "text-14 y-gap-15 js-dropdown-list",
                                                        children: l.Lp.map((e, s) => (0, t.jsx)("div", {
                                                            onClick: () => {
                                                                r(e), u("")
                                                            },
                                                            className: "d-block js-dropdown-link cursor ".concat(i == e ? "activeMenu" : "", " "),
                                                            children: e
                                                        }, s))
                                                    })
                                                })]
                                            })
                                        }), (0, t.jsx)("div", {
                                            children: (0, t.jsxs)("div", {
                                                className: "dropdown js-dropdown js-drop2-active ".concat("rating" == x ? "-is-dd-active" : ""),
                                                children: [(0, t.jsxs)("div", {
                                                    onClick: () => u(e => "rating" == e ? "" : "rating"),
                                                    className: "dropdown__button d-flex items-center text-14 rounded-8 px-15 py-10 text-dark-1",
                                                    "data-el-toggle": ".js-drop2-toggle",
                                                    "data-el-toggle-active": ".js-drop2-active",
                                                    children: [(0, t.jsx)("span", {
                                                        className: "js-dropdown-title",
                                                        children: "All" == d ? "Rating" : d
                                                    }), (0, t.jsx)("i", {
                                                        className: "icon text-9 ml-40 icon-chevron-down"
                                                    })]
                                                }), (0, t.jsx)("div", {
                                                    className: "toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-drop2-toggle ".concat("rating" == x ? "-is-el-visible" : "", " "),
                                                    children: (0, t.jsx)("div", {
                                                        className: "text-14 y-gap-15 js-dropdown-list",
                                                        children: l.Q8.map((e, s) => (0, t.jsx)("div", {
                                                            onClick: () => {
                                                                o(e), u("")
                                                            },
                                                            className: "d-block js-dropdown-link cursor ".concat(d == e ? "activeMenu" : "", " "),
                                                            children: e
                                                        }, s))
                                                    })
                                                })]
                                            })
                                        }), (0, t.jsx)("div", {
                                            children: (0, t.jsxs)("div", {
                                                className: "dropdown js-dropdown js-drop3-active ".concat("difficulty" == x ? "-is-dd-active" : ""),
                                                children: [(0, t.jsxs)("div", {
                                                    onClick: () => u(e => "difficulty" == e ? "" : "difficulty"),
                                                    className: "dropdown__button d-flex items-center text-14 rounded-8 px-15 py-10 text-dark-1",
                                                    "data-el-toggle": ".js-drop3-toggle",
                                                    "data-el-toggle-active": ".js-drop3-active",
                                                    children: [(0, t.jsx)("span", {
                                                        className: "js-dropdown-title",
                                                        children: "All" == m ? "Diffiulty" : m
                                                    }), (0, t.jsx)("i", {
                                                        className: "icon text-9 ml-40 icon-chevron-down"
                                                    })]
                                                }), (0, t.jsx)("div", {
                                                    className: "toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-drop3-toggle ".concat("difficulty" == x ? "-is-el-visible" : "", " "),
                                                    children: (0, t.jsx)("div", {
                                                        className: "text-14 y-gap-15 js-dropdown-list",
                                                        children: l.zV.map((e, s) => (0, t.jsx)("div", {
                                                            onClick: () => {
                                                                h(e), u("")
                                                            },
                                                            className: "d-block js-dropdown-link cursor ".concat(m == e ? "activeMenu" : "", " "),
                                                            children: e
                                                        }, s))
                                                    })
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            })]
                        }), (0, t.jsx)("div", {
                            className: "row y-gap-30 justify-start pt-50",
                            "data-aos": "fade-right",
                            "data-aos-offset": "80",
                            "data-aos-duration": 800,
                            children: e.slice(0, 8).map((e, s) => (0, t.jsx)(n.Z, {
                                data: e,
                                index: s
                            }, s))
                        }), (0, t.jsx)("div", {
                            className: "row justify-center pt-60 lg:pt-40",
                            children: (0, t.jsx)("div", {
                                className: "col-auto",
                                children: (0, t.jsx)(c(), {
                                    href: "/courses-list-1",
                                    className: "button -md -outline-purple-1 text-purple-1",
                                    children: "View All Courses"
                                })
                            })
                        })]
                    })
                })
            }
        },
        56923: function(e, s, i) {
            "use strict";
            i.r(s), i.d(s, {
                default: function() {
                    return h
                }
            });
            var t = i(9268),
                l = i(36115),
                a = i(70382),
                n = i(76394),
                r = i.n(n),
                c = i(86006),
                d = i(29707),
                o = i(35846),
                m = i.n(o);

            function h() {
                let [e, s] = (0, c.useState)(!1);
                return (0, c.useEffect)(() => {
                    s(!0)
                }, []), (0, t.jsx)("section", {
                    className: "layout-pt-lg layout-pb-lg bg-light-3",
                    children: (0, t.jsxs)("div", {
                        className: "container",
                        children: [(0, t.jsxs)("div", {
                            className: "row y-gap-15 justify-between items-end",
                            children: [(0, t.jsx)("div", {
                                className: "col-lg-6",
                                children: (0, t.jsxs)("div", {
                                    className: "sectionTitle ",
                                    children: [(0, t.jsx)("h2", {
                                        className: "sectionTitle__title ",
                                        children: "Upcoming Events"
                                    }), (0, t.jsx)("p", {
                                        className: "sectionTitle__text ",
                                        children: "Lorem ipsum dolor sit amet, consectetur."
                                    })]
                                })
                            }), (0, t.jsx)("div", {
                                className: "col-auto",
                                children: (0, t.jsxs)("div", {
                                    className: "d-flex justify-center x-gap-15 items-center",
                                    children: [(0, t.jsx)("div", {
                                        className: "col-auto",
                                        children: (0, t.jsx)("button", {
                                            className: "d-flex items-center text-24 arrow-left-hover js-events-slider-prev event-slide-prev",
                                            children: (0, t.jsx)("i", {
                                                className: "icon  icon-arrow-left"
                                            })
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "col-auto",
                                        children: (0, t.jsx)("div", {
                                            className: "pagination event-pagination -arrows js-events-slider-pagination"
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "col-auto",
                                        children: (0, t.jsx)("button", {
                                            className: "d-flex items-center text-24 arrow-right-hover js-events-slider-next event-slide-next",
                                            children: (0, t.jsx)("i", {
                                                className: "icon icon-arrow-right"
                                            })
                                        })
                                    })]
                                })
                            })]
                        }), (0, t.jsx)("div", {
                            className: "pt-60 lg:pt-40 js-section-slider",
                            children: e && (0, t.jsx)(a.tq, {
                                className: "overflow-visible",
                                modules: [l.W_, l.tl],
                                pagination: {
                                    el: ".event-pagination",
                                    clickable: !0
                                },
                                navigation: {
                                    nextEl: ".event-slide-next",
                                    prevEl: ".event-slide-prev"
                                },
                                spaceBetween: 30,
                                slidesPerView: 1,
                                breakpoints: {
                                    450: {
                                        slidesPerView: 1
                                    },
                                    768: {
                                        slidesPerView: 2
                                    },
                                    1200: {
                                        slidesPerView: 3
                                    }
                                },
                                children: d.U3.slice(0, 6).map((e, s) => (0, t.jsx)(a.o5, {
                                    children: (0, t.jsx)("div", {
                                        className: "swiper-slide",
                                        children: (0, t.jsxs)("div", {
                                            className: "eventCard -type-1",
                                            "data-aos": "fade-left",
                                            "data-aos-duration": (s + 1) * 500,
                                            children: [(0, t.jsx)("div", {
                                                className: "eventCard__img",
                                                children: (0, t.jsx)(r(), {
                                                    width: 730,
                                                    height: 530,
                                                    src: e.imgSrc,
                                                    alt: "image"
                                                })
                                            }), (0, t.jsx)("div", {
                                                className: "eventCard__bg bg-white",
                                                children: (0, t.jsxs)("div", {
                                                    className: "eventCard__content y-gap-10",
                                                    children: [(0, t.jsxs)("div", {
                                                        className: "eventCard__inner",
                                                        children: [(0, t.jsx)("h4", {
                                                            className: "eventCard__title text-17 fw-500",
                                                            children: (0, t.jsx)(m(), {
                                                                className: "linkCustom",
                                                                href: "/events/".concat(e.id),
                                                                children: e.title
                                                            })
                                                        }), (0, t.jsxs)("div", {
                                                            className: "d-flex x-gap-15 pt-10",
                                                            children: [(0, t.jsxs)("div", {
                                                                className: "d-flex items-center",
                                                                children: [(0, t.jsx)("div", {
                                                                    className: "icon-calendar-2 text-16 mr-8"
                                                                }), (0, t.jsx)("div", {
                                                                    className: "text-14",
                                                                    children: e.date
                                                                })]
                                                            }), (0, t.jsxs)("div", {
                                                                className: "d-flex items-center",
                                                                children: [(0, t.jsx)("div", {
                                                                    className: "icon-location text-16 mr-8"
                                                                }), (0, t.jsx)("div", {
                                                                    className: "text-14",
                                                                    children: e.location
                                                                })]
                                                            })]
                                                        })]
                                                    }), (0, t.jsx)("div", {
                                                        className: "eventCard__button",
                                                        children: (0, t.jsx)(m(), {
                                                            href: "/events/".concat(e.id),
                                                            className: "button -sm -rounded -purple-1 text-white px-25",
                                                            children: "Buy"
                                                        })
                                                    })]
                                                })
                                            })]
                                        })
                                    })
                                }, s))
                            })
                        }), (0, t.jsx)("div", {
                            className: "row pt-60 lg:pt-40",
                            children: (0, t.jsx)("div", {
                                className: "col-auto",
                                children: (0, t.jsxs)(m(), {
                                    href: "/event-list-1",
                                    className: "button -icon -outline-purple-1 text-purple-1 fw-500",
                                    children: ["View All Events", (0, t.jsx)("span", {
                                        className: "icon-arrow-top-right text-14 ml-10"
                                    })]
                                })
                            })
                        })]
                    })
                })
            }
        },
        71288: function(e, s, i) {
            "use strict";
            i.r(s), i.d(s, {
                default: function() {
                    return h
                }
            });
            var t = i(9268),
                l = i(76394),
                a = i.n(l),
                n = i(36115),
                r = i(70382);
            i(17544), i(6497);
            var c = i(86006),
                d = i(57486);
            let o = [{
                id: 1,
                bgImage: "/assets/img/home-2/mainSlider/bg.png"
            }, {
                id: 2,
                bgImage: "/assets/img/home-2/mainSlider/bg.png"
            }, {
                id: 3,
                bgImage: "/assets/img/home-2/mainSlider/bg.png"
            }];
            var m = i(56008);

            function h() {
                let e = (0, m.useRouter)(),
                    [s, i] = (0, c.useState)(!1);
                return (0, c.useEffect)(() => {
                    i(!0)
                }, []), (0, t.jsxs)("section", {
                    className: "mainSlider -type-1 js-mainSlider customizedHeroBackground",
                    children: [(0, t.jsx)("div", {
                        className: "swiper-wrapper-two",
                        children: s && (0, t.jsx)(r.tq, {
                            modules: [n.W_, n.tl],
                            navigation: {
                                nextEl: ".hero-slider-next",
                                prevEl: ".hero-slider-prev"
                            },
                            spaceBetween: 0,
                            slidesPerView: 1,
                            breakpoints: {
                                450: {
                                    slidesPerView: 1
                                },
                                768: {
                                    slidesPerView: 1
                                },
                                1200: {
                                    slidesPerView: 1
                                }
                            },
                            speed: 1200,
                            children: o.map((e, s) => (0, t.jsx)(r.o5, {
                                children: (0, t.jsx)("div", {
                                    className: "swiper-slide hightFull",
                                    children: (0, t.jsx)("div", {
                                        className: "mainSlider__bg",
                                        children: (0, t.jsx)("div", {
                                            className: "bg-image js-lazy customedBg",
                                            style: {
                                                backgroundImage: "url(".concat(e.bgImage, ")")
                                            }
                                        })
                                    })
                                })
                            }, s))
                        })
                    }), (0, t.jsxs)("div", {
                        className: "container",
                        children: [(0, t.jsx)("div", {
                            className: "row justify-center text-center",
                            children: (0, t.jsx)("div", {
                                className: "col-xl-6 col-lg-8",
                                children: (0, t.jsxs)("div", {
                                    className: "mainSlider__content",
                                    "data-aos": "fade-up",
                                    "data-aos-delay": "500",
                                    children: [(0, t.jsxs)("h1", {
                                        className: "mainSlider__title text-white",
                                        children: ["Learn Your Way With Educrat To", " ", (0, t.jsx)("span", {
                                            className: "text-green-1 underline",
                                            children: "Web Design"
                                        })]
                                    }), (0, t.jsx)("p", {
                                        className: "mainSlider__text text-white",
                                        children: "More than 6.500 online courses"
                                    }), (0, t.jsxs)("div", {
                                        className: "mainSlider__form",
                                        children: [(0, t.jsx)("input", {
                                            required: !0,
                                            type: "text",
                                            placeholder: "What do you want to learn today?"
                                        }), (0, t.jsxs)("button", {
                                            className: "button -md -purple-1 text-white",
                                            onClick: () => e.push("/courses-list-1"),
                                            children: [(0, t.jsx)("i", {
                                                className: "icon icon-search mr-15"
                                            }), "Search"]
                                        })]
                                    })]
                                })
                            })
                        }), (0, t.jsx)("div", {
                            className: "row y-gap-20 justify-center mainSlider__items",
                            children: d.Jt.map((e, s) => (0, t.jsx)("div", {
                                className: "col-xl-3 col-md-4 col-sm-6",
                                children: (0, t.jsxs)("div", {
                                    className: "mainSlider-item text-center",
                                    children: [(0, t.jsx)(a(), {
                                        width: 50,
                                        height: 50,
                                        src: e.imgSrc,
                                        alt: "icon"
                                    }), (0, t.jsx)("h4", {
                                        className: "text-20 fw-500 lh-18 text-white mt-8",
                                        children: e.title
                                    }), (0, t.jsx)("p", {
                                        className: "text-15 text-white",
                                        children: e.description
                                    })]
                                })
                            }, s))
                        })]
                    }), (0, t.jsx)("button", {
                        className: "swiper-prev hero-slider-prev button -white-20 text-white size-60 rounded-full d-flex justify-center items-center js-prev",
                        children: (0, t.jsx)("i", {
                            className: "icon icon-arrow-left text-24"
                        })
                    }), (0, t.jsx)("button", {
                        className: "swiper-next hero-slider-next button -white-20 text-white size-60 rounded-full d-flex justify-center items-center js-next",
                        children: (0, t.jsx)("i", {
                            className: "icon icon-arrow-right text-24"
                        })
                    })]
                })
            }
        },
        89784: function(e, s, i) {
            "use strict";
            i.r(s), i.d(s, {
                default: function() {
                    return o
                }
            });
            var t = i(9268),
                l = i(76394),
                a = i.n(l),
                n = i(36115),
                r = i(70382),
                c = i(86006);
            let d = [{
                id: 1,
                imgSrc: "/assets/img/home-2/students/1.png",
                name: "Brooklyn Simmons",
                title: "Web Designer",
                socials: [{
                    icon: "fa fa-facebook",
                    link: "#"
                }, {
                    icon: "fa fa-twitter",
                    link: "#"
                }, {
                    icon: "fa fa-instagram",
                    link: "#"
                }, {
                    icon: "fa fa-linkedin",
                    link: "#"
                }],
                tags: ["Design", "Art", "Graphic"],
                buttonLink: "#"
            }, {
                id: 2,
                imgSrc: "/assets/img/home-2/students/2.png",
                name: "Cody Fisher",
                title: "Dog Trainer",
                socials: [{
                    icon: "fa fa-facebook",
                    link: "#"
                }, {
                    icon: "fa fa-twitter",
                    link: "#"
                }, {
                    icon: "fa fa-instagram",
                    link: "#"
                }, {
                    icon: "fa fa-linkedin",
                    link: "#"
                }],
                tags: ["Design", "Art", "Graphic"],
                buttonLink: "#"
            }, {
                id: 3,
                imgSrc: "/assets/img/home-2/students/3.png",
                name: "Marvin McKinney",
                title: "President of Sales",
                socials: [{
                    icon: "fa fa-facebook",
                    link: "#"
                }, {
                    icon: "fa fa-twitter",
                    link: "#"
                }, {
                    icon: "fa fa-instagram",
                    link: "#"
                }, {
                    icon: "fa fa-linkedin",
                    link: "#"
                }],
                tags: ["Design", "Art", "Graphic"],
                buttonLink: "#"
            }, {
                id: 4,
                imgSrc: "/assets/img/home-2/students/4.png",
                name: "Jane Cooper",
                title: "Marketing Coordinator",
                socials: [{
                    icon: "fa fa-facebook",
                    link: "#"
                }, {
                    icon: "fa fa-twitter",
                    link: "#"
                }, {
                    icon: "fa fa-instagram",
                    link: "#"
                }, {
                    icon: "fa fa-linkedin",
                    link: "#"
                }],
                tags: ["Design", "Art", "Graphic"],
                buttonLink: "#"
            }, {
                id: 5,
                imgSrc: "/assets/img/home-2/students/5.png",
                name: "Ali Tufan",
                title: "Marketing Coordinator",
                socials: [{
                    icon: "fa fa-facebook",
                    link: "#"
                }, {
                    icon: "fa fa-twitter",
                    link: "#"
                }, {
                    icon: "fa fa-instagram",
                    link: "#"
                }, {
                    icon: "fa fa-linkedin",
                    link: "#"
                }],
                tags: ["Design", "Art", "Graphic"],
                buttonLink: "#"
            }];

            function o() {
                let [e, s] = (0, c.useState)(!1);
                return (0, c.useEffect)(() => {
                    s(!0)
                }, []), (0, t.jsx)("section", {
                    className: "layout-pt-lg layout-pb-lg bg-light-4",
                    children: (0, t.jsxs)("div", {
                        className: "container",
                        children: [(0, t.jsxs)("div", {
                            className: "row y-gap-15 justify-between items-end",
                            children: [(0, t.jsx)("div", {
                                className: "col-lg-6",
                                children: (0, t.jsxs)("div", {
                                    className: "sectionTitle ",
                                    children: [(0, t.jsx)("h2", {
                                        className: "sectionTitle__title ",
                                        children: "Top Students"
                                    }), (0, t.jsx)("p", {
                                        className: "sectionTitle__text ",
                                        children: "Lorem ipsum dolor sit amet, consectetur."
                                    })]
                                })
                            }), (0, t.jsx)("div", {
                                className: "col-auto",
                                children: (0, t.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, t.jsxs)("a", {
                                        href: "#",
                                        className: "button -icon -outline-purple-1 text-purple-1 fw-500",
                                        children: ["View All Students", (0, t.jsx)("span", {
                                            className: "icon-arrow-top-right text-14 ml-10"
                                        })]
                                    })
                                })
                            })]
                        }), (0, t.jsx)("div", {
                            className: "pt-60 lg:pt-40 js-section-slider",
                            "data-gap": "30",
                            "data-pagination": "js-students-slider-pagination",
                            "data-nav-prev": "js-students-slider-prev",
                            "data-nav-next": "js-students-slider-next",
                            "data-slider-cols": "xl-4 lg-3 md-2",
                            children: e && (0, t.jsx)(r.tq, {
                                className: "overflow-visible",
                                modules: [n.W_, n.tl],
                                pagination: {
                                    el: ".student-pagination-one",
                                    clickable: !0
                                },
                                navigation: {
                                    nextEl: ".student-next-one",
                                    prevEl: ".student-prev-one"
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
                                children: d.map((e, s) => (0, t.jsx)(r.o5, {
                                    children: (0, t.jsx)("div", {
                                        className: "swiper-slide",
                                        children: (0, t.jsx)("div", {
                                            className: "teamCard -type-2 bg-white",
                                            children: (0, t.jsxs)("div", {
                                                className: "teamCard__content",
                                                children: [(0, t.jsx)("div", {
                                                    className: "teamCard__img",
                                                    children: (0, t.jsx)(a(), {
                                                        width: 90,
                                                        height: 90,
                                                        src: e.imgSrc,
                                                        alt: "image"
                                                    })
                                                }), (0, t.jsx)("h4", {
                                                    className: "teamCard__title text-17 lh-15 fw-500 mt-12",
                                                    children: e.name
                                                }), (0, t.jsx)("div", {
                                                    className: "teamCard__subtitle text-14 lh-1 mt-5",
                                                    children: e.title
                                                }), (0, t.jsx)("div", {
                                                    className: "teamCard__socials d-flex x-gap-20 pt-12",
                                                    children: e.socials.map((e, s) => (0, t.jsx)("a", {
                                                        href: e.link,
                                                        children: (0, t.jsx)("i", {
                                                            className: e.icon
                                                        })
                                                    }, s))
                                                }), (0, t.jsx)("div", {
                                                    className: "teamCard-tags pt-20",
                                                    children: e.tags.map((e, s) => (0, t.jsx)("div", {
                                                        className: "teamCard-tags__item",
                                                        children: (0, t.jsx)("div", {
                                                            className: "teamCard-tags__tag",
                                                            children: e
                                                        })
                                                    }, s))
                                                }), (0, t.jsx)("div", {
                                                    className: "teamCard__button mt-20",
                                                    children: (0, t.jsx)("a", {
                                                        href: e.buttonLink,
                                                        className: "button -icon -outline-purple-1 -rounded text-purple-1",
                                                        children: "View Profile"
                                                    })
                                                })]
                                            })
                                        })
                                    })
                                }, s))
                            })
                        }), (0, t.jsx)("div", {
                            className: "row pt-60 lg:pt-40",
                            children: (0, t.jsx)("div", {
                                className: "col-auto",
                                children: (0, t.jsxs)("div", {
                                    className: "d-flex x-gap-15 justify-center items-center",
                                    children: [(0, t.jsx)("div", {
                                        className: "col-auto",
                                        children: (0, t.jsx)("button", {
                                            className: "d-flex items-center text-24 arrow-left-hover js-students-slider-prev student-prev-one",
                                            children: (0, t.jsx)("i", {
                                                className: "icon icon-arrow-left"
                                            })
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "col-auto",
                                        children: (0, t.jsx)("div", {
                                            className: "pagination -arrows js-students-slider-pagination student-pagination-one"
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "col-auto",
                                        children: (0, t.jsx)("button", {
                                            className: "d-flex items-center text-24 arrow-right-hover js-students-slider-next student-next-one",
                                            children: (0, t.jsx)("i", {
                                                className: "icon icon-arrow-right"
                                            })
                                        })
                                    })]
                                })
                            })
                        })]
                    })
                })
            }
        },
        80808: function(e, s, i) {
            "use strict";
            i.d(s, {
                Z: function() {
                    return r
                }
            });
            var t = i(9268);
            let l = [{
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
            var a = i(35846),
                n = i.n(a);

            function r(e) {
                let {
                    allClasses: s
                } = e;
                return (0, t.jsx)(t.Fragment, {
                    children: l.map((e, i) => (0, t.jsx)(n(), {
                        className: "".concat(s || ""),
                        href: e.href,
                        children: e.label
                    }, i))
                })
            }
            i(86006)
        },
        60371: function(e, s, i) {
            "use strict";
            i.r(s), i.d(s, {
                default: function() {
                    return h
                }
            });
            var t = i(9268);
            i(86006);
            var l = i(80808),
                a = i(86484),
                n = i(69567),
                r = i(35846),
                c = i.n(r);

            function d(e) {
                let {
                    allClasses: s,
                    parentClass: i
                } = e;
                return (0, t.jsx)(t.Fragment, {
                    children: n.d.slice(0, 3).map((e, l) => (0, t.jsxs)("div", {
                        className: i || "col-xl-4 col-lg-4 col-md-6 ",
                        children: [(0, t.jsx)("div", {
                            className: "".concat(s || ""),
                            children: e.title
                        }), (0, t.jsx)("div", {
                            className: "d-flex y-gap-10 flex-column text-white",
                            children: e.links.map((e, s) => (0, t.jsx)(c(), {
                                href: e.href,
                                children: e.label
                            }, s))
                        })]
                    }, l))
                })
            }
            var o = i(76394),
                m = i.n(o);

            function h() {
                return (0, t.jsx)("footer", {
                    className: "footer -type-4 bg-dark-2",
                    children: (0, t.jsxs)("div", {
                        className: "container",
                        children: [(0, t.jsxs)("div", {
                            className: "row y-gap-30 justify-between pt-60",
                            children: [(0, t.jsxs)("div", {
                                className: "col-lg-7 col-md-6",
                                children: [(0, t.jsx)("div", {
                                    className: "text-17 fw-500 text-white uppercase mb-25",
                                    children: "GET IN TOUCH"
                                }), (0, t.jsxs)("form", {
                                    onSubmit: e => {
                                        e.preventDefault()
                                    },
                                    className: "form-single-field -base mt-15",
                                    children: [(0, t.jsx)("input", {
                                        required: !0,
                                        className: "py-20 px-30 bg-dark-6 rounded-200 text-white",
                                        type: "text",
                                        placeholder: "Your Email"
                                    }), (0, t.jsx)("button", {
                                        className: "button -white rounded-full",
                                        type: "submit",
                                        children: (0, t.jsx)("i", {
                                            className: "icon-arrow-right text-24 text-dark-1"
                                        })
                                    })]
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "col-xl-4 col-lg-5 col-md-6",
                                children: [(0, t.jsx)("div", {
                                    className: "footer-header__logo",
                                    children: (0, t.jsx)(m(), {
                                        width: 140,
                                        height: 50,
                                        src: "/assets/img/footer/footer-logo.svg",
                                        alt: "logo"
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: "d-flex justify-between mt-30",
                                    children: [(0, t.jsxs)("div", {
                                        className: "",
                                        children: [(0, t.jsx)("div", {
                                            className: "text-white opac-70",
                                            children: "Toll Free Customer Care"
                                        }), (0, t.jsx)("div", {
                                            className: "text-18 lh-1 fw-500 text-white mt-5",
                                            children: "+(1) 123 456 7890"
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "",
                                        children: [(0, t.jsx)("div", {
                                            className: "text-white opac-70",
                                            children: "Need live support?"
                                        }), (0, t.jsx)("div", {
                                            className: "text-18 lh-1 fw-500 text-white mt-5",
                                            children: "hi@educrat.comv"
                                        })]
                                    })]
                                })]
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "row y-gap-30 justify-between pt-60 pb-60",
                            children: [(0, t.jsx)("div", {
                                className: "col-lg-7 col-md-6",
                                children: (0, t.jsx)("div", {
                                    className: "row y-gap-30",
                                    children: (0, t.jsx)(d, {
                                        allClasses: "text-17 fw-500 text-white uppercase mb-25"
                                    })
                                })
                            }), (0, t.jsxs)("div", {
                                className: "col-xl-4 col-lg-5 col-md-6",
                                children: [(0, t.jsxs)("div", {
                                    className: "",
                                    children: [(0, t.jsx)("div", {
                                        className: "text-17 uppercase text-white fw-500",
                                        children: "Take your learning with you"
                                    }), (0, t.jsxs)("div", {
                                        className: "d-flex mt-15",
                                        children: [(0, t.jsxs)("div", {
                                            className: "d-flex items-center rounded-8 px-25 py-10 footer-bg-color",
                                            children: [(0, t.jsx)("div", {
                                                className: "icon-apple text-white text-24"
                                            }), (0, t.jsxs)("div", {
                                                className: "text-white ml-20",
                                                children: [(0, t.jsx)("div", {
                                                    className: "text-13 lh-12",
                                                    children: "Download on the"
                                                }), (0, t.jsx)("div", {
                                                    className: "text-15 fw-500 lh-12 mt-3",
                                                    children: "Apple Store"
                                                })]
                                            })]
                                        }), (0, t.jsxs)("div", {
                                            className: "d-flex items-center rounded-8 px-25 py-10 footer-bg-color ml-10",
                                            children: [(0, t.jsx)("div", {
                                                className: "icon-play-market text-white text-24"
                                            }), (0, t.jsxs)("div", {
                                                className: "text-white ml-20",
                                                children: [(0, t.jsx)("div", {
                                                    className: "text-13 lh-12",
                                                    children: "Get in on"
                                                }), (0, t.jsx)("div", {
                                                    className: "text-15 fw-500 lh-12 mt-3",
                                                    children: "Google Play"
                                                })]
                                            })]
                                        })]
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "footer-header-socials mt-60",
                                    children: [(0, t.jsx)("div", {
                                        className: "text-17 uppercase text-white fw-500",
                                        children: "Follow us on social media"
                                    }), (0, t.jsx)("div", {
                                        className: "footer-header-socials__list d-flex items-center mt-15",
                                        children: (0, t.jsx)(a.Z, {
                                            componentsClass: "size-40 d-flex justify-center items-center text-white"
                                        })
                                    })]
                                })]
                            })]
                        }), (0, t.jsx)("div", {
                            className: "py-30 border-top-light-15",
                            children: (0, t.jsxs)("div", {
                                className: "row justify-between items-center y-gap-20",
                                children: [(0, t.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, t.jsxs)("div", {
                                        className: "d-flex items-center h-100 text-white",
                                        children: ["\xa9 ", new Date().getFullYear(), " Educrat. All Right Reserved."]
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, t.jsxs)("div", {
                                        className: "d-flex x-gap-20 y-gap-20 items-center flex-wrap",
                                        children: [(0, t.jsx)("div", {
                                            children: (0, t.jsx)("div", {
                                                className: "d-flex x-gap-15 text-white",
                                                children: (0, t.jsx)(l.Z, {})
                                            })
                                        }), (0, t.jsx)("div", {
                                            children: (0, t.jsxs)("a", {
                                                href: "#",
                                                className: "button px-30 h-50 -dark-6 rounded-200 text-white",
                                                children: [(0, t.jsx)("i", {
                                                    className: "icon-worldwide text-20 mr-15"
                                                }), (0, t.jsx)("span", {
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
        19472: function(e, s, i) {
            "use strict";
            i.r(s), i.d(s, {
                default: function() {
                    return u
                }
            });
            var t = i(9268),
                l = i(81393),
                a = i(39179),
                n = i(51469),
                r = i(16797),
                c = i(76394),
                d = i.n(c),
                o = i(35846),
                m = i.n(o),
                h = i(86006),
                x = i(86484);

            function u() {
                let [e, s] = (0, h.useState)(!1), [i, c] = (0, h.useState)(0);
                return (0, h.useEffect)(() => {
                    let e = () => {
                        let e = window.scrollY;
                        c(e)
                    };
                    return window.addEventListener("scroll", e), () => {
                        window.removeEventListener("scroll", e)
                    }
                }, []), (0, t.jsxs)("header", {
                    className: "header -type-5 js-header ".concat(i > 40 ? "bg-dark-1" : "", " "),
                    children: [(0, t.jsx)("div", {
                        className: "d-flex items-center bg-purple-1 py-10",
                        children: (0, t.jsx)("div", {
                            className: "container",
                            children: (0, t.jsxs)("div", {
                                className: "row y-gap-5 justify-between items-center",
                                children: [(0, t.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, t.jsxs)("div", {
                                        className: "d-flex x-gap-40 y-gap-10 items-center",
                                        children: [(0, t.jsxs)("div", {
                                            className: "d-flex items-center text-white md:d-none",
                                            children: [(0, t.jsx)("div", {
                                                className: "icon-email mr-10"
                                            }), (0, t.jsx)("div", {
                                                className: "text13 lh-1",
                                                children: "(00) 242 844 39 88"
                                            })]
                                        }), (0, t.jsxs)("div", {
                                            className: "d-flex items-center text-white",
                                            children: [(0, t.jsx)("div", {
                                                className: "icon-email mr-10"
                                            }), (0, t.jsx)("div", {
                                                className: "text13 lh-1",
                                                children: "hello@educrat.com"
                                            })]
                                        })]
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, t.jsxs)("div", {
                                        className: "d-flex x-gap-30 y-gap-10",
                                        children: [(0, t.jsx)("div", {
                                            children: (0, t.jsx)("div", {
                                                className: "d-flex x-gap-20 items-center text-white",
                                                children: (0, t.jsx)(x.Z, {
                                                    textSize: "text-11"
                                                })
                                            })
                                        }), (0, t.jsxs)("div", {
                                            className: "d-flex items-center text-white text-13 sm:d-none",
                                            children: ["English ", (0, t.jsx)("i", {
                                                className: "icon-chevron-down text-9 ml-10"
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })
                    }), (0, t.jsx)("div", {
                        className: "container py-10",
                        children: (0, t.jsxs)("div", {
                            className: "row justify-between items-center",
                            children: [(0, t.jsx)("div", {
                                className: "col-auto",
                                children: (0, t.jsx)("div", {
                                    className: "header-left",
                                    children: (0, t.jsx)("div", {
                                        className: "header__logo ",
                                        children: (0, t.jsx)(m(), {
                                            href: "/",
                                            children: (0, t.jsx)(d(), {
                                                width: 140,
                                                height: 40,
                                                src: "/assets/img/general/logo.svg",
                                                alt: "logo"
                                            })
                                        })
                                    })
                                })
                            }), (0, t.jsx)("div", {
                                className: "col-auto",
                                children: (0, t.jsxs)("div", {
                                    className: "header-right d-flex items-center",
                                    children: [(0, t.jsx)(r.Z, {
                                        allClasses: "menu__nav text-white -is-active"
                                    }), (0, t.jsx)(n.Z, {
                                        activeMobileMenu: e,
                                        setActiveMobileMenu: s
                                    }), (0, t.jsxs)("div", {
                                        className: "header-right__icons text-white d-flex items-center ml-30",
                                        children: [(0, t.jsx)(l.Z, {}), (0, t.jsx)(a.Z, {
                                            parentClassess: "relative ml-30 xl:ml-20",
                                            allClasses: "d-flex items-center text-white"
                                        }), (0, t.jsx)("div", {
                                            className: "d-none xl:d-block ml-20",
                                            children: (0, t.jsx)("button", {
                                                className: "text-white items-center",
                                                onClick: () => s(!0),
                                                "data-el-toggle": ".js-mobile-menu-toggle",
                                                children: (0, t.jsx)("i", {
                                                    className: "text-11 icon icon-mobile-menu"
                                                })
                                            })
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "header-right__buttons d-flex items-center ml-30 xl:ml-20 md:d-none",
                                        children: [(0, t.jsx)(m(), {
                                            href: "/login",
                                            className: "button -underline text-white",
                                            children: "Log in"
                                        }), (0, t.jsx)(m(), {
                                            href: "/signup",
                                            className: "button px-25 h-50 -white text-dark-1 -rounded ml-30 xl:ml-20",
                                            children: "Sign up"
                                        })]
                                    })]
                                })
                            })]
                        })
                    })]
                })
            }
        },
        57486: function(e, s, i) {
            "use strict";
            i.d(s, {
                Jt: function() {
                    return t
                },
                MZ: function() {
                    return l
                },
                QW: function() {
                    return a
                }
            });
            let t = [{
                    id: 1,
                    imgSrc: "/assets/img/home-3/masthead/icons/1.svg",
                    title: "100,000 online courses",
                    description: "Explore a variety of fresh topics"
                }, {
                    id: 2,
                    imgSrc: "/assets/img/home-3/masthead/icons/2.svg",
                    title: "Expert instruction",
                    description: "Find the right instructor for you"
                }, {
                    id: 3,
                    imgSrc: "/assets/img/home-3/masthead/icons/3.svg",
                    title: "Lifetime access",
                    description: "Learn on your schedule"
                }],
                l = [{
                    id: 1,
                    imageSrc: "/assets/img/home-6/hero/icons/1.svg",
                    text: "Over 12 million students"
                }, {
                    id: 2,
                    imageSrc: "/assets/img/home-6/hero/icons/2.svg",
                    text: "More than 60,000 courses"
                }, {
                    id: 3,
                    imageSrc: "/assets/img/home-6/hero/icons/3.svg",
                    text: "Learn anything online"
                }],
                a = [{
                    id: 1,
                    rating: "9/10",
                    description: "9/10 users reported better learning outcomes."
                }, {
                    id: 2,
                    rating: "85%",
                    description: "85% of students see their course through to completion"
                }]
        },
        69567: function(e, s, i) {
            "use strict";
            i.d(s, {
                d: function() {
                    return t
                }
            });
            let t = [{
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
        }
    },
    function(e) {
        e.O(0, [8224, 8201, 6721, 226, 1840, 5127, 4240, 2024, 9253, 6488, 1744], function() {
            return e(e.s = 1126)
        }), _N_E = e.O()
    }
]);