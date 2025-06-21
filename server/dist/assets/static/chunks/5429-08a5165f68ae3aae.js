"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5429], {
        40600: function(e, s, i) {
            i.r(s), i.d(s, {
                default: function() {
                    return t
                }
            });
            var a = i(9268),
                l = i(86006);

            function t(e) {
                let {
                    star: s,
                    textSize: i,
                    textColor: t
                } = e, [c, r] = (0, l.useState)([]);
                return (0, l.useEffect)(() => {
                    for (let e = Math.round(s); e >= 1; e--) r(e => [...e, "star"])
                }, []), (0, a.jsx)(a.Fragment, {
                    children: c.map((e, s) => (0, a.jsx)("div", {
                        className: "icon-star ".concat(i || "text-9", " ").concat(t || "text-yellow-1", " ")
                    }, s))
                })
            }
        },
        29518: function(e, s, i) {
            i.d(s, {
                Z: function() {
                    return d
                }
            });
            var a = i(9268),
                l = i(10009),
                t = i(13936),
                c = i(85495),
                r = i(86006),
                n = i(47329);

            function d() {
                let [e, s] = (0, r.useState)(0), [i, d] = (0, r.useState)(!1);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        id: "course-content",
                        className: "pt-60 lg:pt-40",
                        children: [(0, a.jsx)("h2", {
                            className: "text-20 fw-500",
                            children: "Course Content"
                        }), (0, a.jsxs)("div", {
                            className: "d-flex justify-between items-center mt-30",
                            children: [(0, a.jsx)("div", {
                                className: "",
                                children: "27 sections • 95 lectures"
                            }), (0, a.jsx)("a", {
                                href: "#",
                                className: "underline text-purple-1",
                                children: "Expand All Sections"
                            })]
                        }), (0, a.jsx)("div", {
                            className: "mt-10",
                            children: (0, a.jsx)("div", {
                                className: "accordion -block-2 text-left js-accordion",
                                children: c.WV.map((i, c) => (0, a.jsxs)("div", {
                                    className: "accordion__item ".concat(e == i.id ? "is-active" : "", " "),
                                    children: [(0, a.jsxs)("div", {
                                        onClick: () => s(e => e == i.id ? 0 : i.id),
                                        className: "accordion__button py-20 px-30 bg-light-4",
                                        children: [(0, a.jsxs)("div", {
                                            className: "d-flex items-center",
                                            children: [(0, a.jsxs)("div", {
                                                className: "accordion__icon",
                                                children: [(0, a.jsx)("div", {
                                                    className: "icon",
                                                    children: (0, a.jsx)(t.G, {
                                                        icon: l.ptq
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "icon",
                                                    children: (0, a.jsx)(t.G, {
                                                        icon: l.mTx
                                                    })
                                                })]
                                            }), (0, a.jsx)("span", {
                                                className: "text-17 fw-500 text-dark-1",
                                                children: "Course Content"
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            children: [i.lessons.length, " lectures • ", i.duration, " min"]
                                        })]
                                    }), (0, a.jsx)("div", {
                                        className: "accordion__content",
                                        style: e == i.id ? {
                                            maxHeight: "700px"
                                        } : {},
                                        children: (0, a.jsx)("div", {
                                            className: "accordion__content__inner px-30 py-30",
                                            children: (0, a.jsx)("div", {
                                                className: "y-gap-20",
                                                children: i.lessons.map((e, s) => (0, a.jsxs)("div", {
                                                    className: "d-flex justify-between",
                                                    children: [(0, a.jsxs)("div", {
                                                        className: "d-flex items-center",
                                                        children: [(0, a.jsx)("div", {
                                                            className: "d-flex justify-center items-center size-30 rounded-full bg-purple-3 mr-10",
                                                            children: (0, a.jsx)("div", {
                                                                className: "icon-play text-9"
                                                            })
                                                        }), (0, a.jsx)("div", {
                                                            children: e.title
                                                        })]
                                                    }), (0, a.jsxs)("div", {
                                                        className: "d-flex x-gap-20 items-center",
                                                        children: [(0, a.jsx)("span", {
                                                            onClick: () => d(!0),
                                                            className: "text-14 lh-1 text-purple-1 underline cursor ",
                                                            children: "Preview"
                                                        }), (0, a.jsxs)("a", {
                                                            href: "#",
                                                            className: "text-14 lh-1 text-purple-1 underline",
                                                            children: [i.duration, " question"]
                                                        }), (0, a.jsx)("a", {
                                                            href: "#",
                                                            className: "text-14 lh-1 text-purple-1 underline",
                                                            children: i.duration
                                                        })]
                                                    })]
                                                }, s))
                                            })
                                        })
                                    })]
                                }, c))
                            })
                        })]
                    }), (0, a.jsx)(n.Z, {
                        isOpen: i,
                        setIsOpen: d,
                        videoId: "LlCwHnp3kL4"
                    })]
                })
            }
        },
        6286: function(e, s, i) {
            i.r(s), i.d(s, {
                default: function() {
                    return h
                }
            });
            var a = i(9268),
                l = i(68148),
                t = i(86006),
                c = i(36115),
                r = i(70382),
                n = i(40600),
                d = i(76394),
                m = i.n(d),
                x = i(35846),
                o = i.n(x);

            function h() {
                let [e, s] = (0, t.useState)(!1);
                return (0, t.useEffect)(() => {
                    s(!0)
                }, []), (0, a.jsx)("section", {
                    className: "layout-pt-md layout-pb-lg",
                    children: (0, a.jsxs)("div", {
                        className: "container",
                        children: [(0, a.jsx)("div", {
                            className: "row",
                            children: (0, a.jsx)("div", {
                                className: "col-auto",
                                children: (0, a.jsxs)("div", {
                                    className: "sectionTitle ",
                                    children: [(0, a.jsx)("h2", {
                                        className: "sectionTitle__title ",
                                        children: "You May Like"
                                    }), (0, a.jsx)("p", {
                                        className: "sectionTitle__text ",
                                        children: "10,000+ unique online course list designs"
                                    })]
                                })
                            })
                        }), (0, a.jsxs)("div", {
                            className: "relative pt-60 lg:pt-50",
                            children: [(0, a.jsx)("div", {
                                className: "overflow-hidden js-section-slider",
                                children: e && (0, a.jsx)(r.tq, {
                                    modules: [c.W_, c.tl],
                                    navigation: {
                                        nextEl: ".js-courses-next-one",
                                        prevEl: ".js-courses-prev-one"
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
                                    children: l.om.slice(0, 12).map((e, s) => (0, a.jsx)(r.o5, {
                                        children: (0, a.jsx)("div", {
                                            className: "swiper-slide",
                                            children: (0, a.jsxs)("div", {
                                                className: "coursesCard -type-1 ",
                                                children: [(0, a.jsxs)("div", {
                                                    className: "relative",
                                                    children: [(0, a.jsxs)("div", {
                                                        className: "coursesCard__image overflow-hidden rounded-8",
                                                        children: [(0, a.jsx)(m(), {
                                                            width: 510,
                                                            height: 360,
                                                            className: "w-1/1",
                                                            src: e.imageSrc,
                                                            alt: "image"
                                                        }), (0, a.jsx)("div", {
                                                            className: "coursesCard__image_overlay rounded-8"
                                                        })]
                                                    }), (0, a.jsx)("div", {
                                                        className: "d-flex justify-between py-10 px-10 absolute-full-center z-3"
                                                    })]
                                                }), (0, a.jsxs)("div", {
                                                    className: "h-100 pt-15",
                                                    children: [(0, a.jsxs)("div", {
                                                        className: "d-flex items-center",
                                                        children: [(0, a.jsx)("div", {
                                                            className: "text-14 lh-1 text-yellow-1 mr-10",
                                                            children: e.rating
                                                        }), (0, a.jsx)("div", {
                                                            className: "d-flex x-gap-5 items-center",
                                                            children: (0, a.jsx)(n.default, {
                                                                star: e.rating
                                                            })
                                                        }), (0, a.jsxs)("div", {
                                                            className: "text-13 lh-1 ml-10",
                                                            children: ["(", e.ratingCount, ")"]
                                                        })]
                                                    }), (0, a.jsx)("div", {
                                                        className: "text-17 lh-15 fw-500 text-dark-1 mt-10",
                                                        children: (0, a.jsx)(o(), {
                                                            className: "linkCustom",
                                                            href: "/courses/".concat(e.id),
                                                            children: e.title
                                                        })
                                                    }), (0, a.jsxs)("div", {
                                                        className: "d-flex x-gap-10 items-center pt-10",
                                                        children: [(0, a.jsxs)("div", {
                                                            className: "d-flex items-center",
                                                            children: [(0, a.jsx)("div", {
                                                                className: "mr-8",
                                                                children: (0, a.jsx)(m(), {
                                                                    width: 16,
                                                                    height: 17,
                                                                    src: "/assets/img/coursesCards/icons/1.svg",
                                                                    alt: "icon"
                                                                })
                                                            }), (0, a.jsxs)("div", {
                                                                className: "text-14 lh-1",
                                                                children: [e.lessonCount, " lesson"]
                                                            })]
                                                        }), (0, a.jsxs)("div", {
                                                            className: "d-flex items-center",
                                                            children: [(0, a.jsx)("div", {
                                                                className: "mr-8",
                                                                children: (0, a.jsx)(m(), {
                                                                    width: 16,
                                                                    height: 17,
                                                                    src: "/assets/img/coursesCards/icons/2.svg",
                                                                    alt: "icon"
                                                                })
                                                            }), (0, a.jsx)("div", {
                                                                className: "text-14 lh-1",
                                                                children: "".concat(Math.floor(e.duration / 60), "h ").concat(Math.floor(e.duration % 60), "m")
                                                            })]
                                                        }), (0, a.jsxs)("div", {
                                                            className: "d-flex items-center",
                                                            children: [(0, a.jsx)("div", {
                                                                className: "mr-8",
                                                                children: (0, a.jsx)(m(), {
                                                                    width: 16,
                                                                    height: 17,
                                                                    src: "/assets/img/coursesCards/icons/3.svg",
                                                                    alt: "icon"
                                                                })
                                                            }), (0, a.jsx)("div", {
                                                                className: "text-14 lh-1",
                                                                children: e.level
                                                            })]
                                                        })]
                                                    }), (0, a.jsxs)("div", {
                                                        className: "coursesCard-footer",
                                                        children: [(0, a.jsxs)("div", {
                                                            className: "coursesCard-footer__author",
                                                            children: [(0, a.jsx)(m(), {
                                                                width: 30,
                                                                height: 30,
                                                                src: e.authorImageSrc,
                                                                alt: "image"
                                                            }), (0, a.jsx)("div", {
                                                                children: e.authorName
                                                            })]
                                                        }), (0, a.jsx)("div", {
                                                            className: "coursesCard-footer__price",
                                                            children: e.paid ? (0, a.jsxs)(a.Fragment, {
                                                                children: [(0, a.jsxs)("div", {
                                                                    children: ["$", e.originalPrice]
                                                                }), (0, a.jsxs)("div", {
                                                                    children: ["$", e.discountedPrice]
                                                                })]
                                                            }) : (0, a.jsxs)(a.Fragment, {
                                                                children: [(0, a.jsx)("div", {}), (0, a.jsx)("div", {
                                                                    children: "Free"
                                                                })]
                                                            })
                                                        })]
                                                    })]
                                                })]
                                            })
                                        })
                                    }, s))
                                })
                            }), (0, a.jsx)("button", {
                                className: "section-slider-nav -prev -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-courses-prev-one",
                                children: (0, a.jsx)("i", {
                                    className: "icon icon-arrow-left text-24"
                                })
                            }), (0, a.jsx)("button", {
                                className: "section-slider-nav -next -dark-bg-dark-2 -white -absolute size-70 rounded-full shadow-5 js-courses-next-one",
                                children: (0, a.jsx)("i", {
                                    className: "icon icon-arrow-right text-24"
                                })
                            })]
                        })]
                    })
                })
            }
        },
        55124: function(e, s, i) {
            i.d(s, {
                Z: function() {
                    return c
                }
            });
            var a = i(9268),
                l = i(76394),
                t = i.n(l);

            function c() {
                return (0, a.jsxs)("div", {
                    id: "instructors",
                    className: "pt-60 lg:pt-40",
                    children: [(0, a.jsx)("h2", {
                        className: "text-20 fw-500",
                        children: "Instructor"
                    }), (0, a.jsxs)("div", {
                        className: "mt-30",
                        children: [(0, a.jsxs)("div", {
                            className: "d-flex x-gap-20 y-gap-20 items-center flex-wrap",
                            children: [(0, a.jsx)("div", {
                                className: "size-120",
                                children: (0, a.jsx)(t(), {
                                    width: 100,
                                    height: 100,
                                    className: "object-cover",
                                    src: "/assets/img/misc/verified/1.png",
                                    alt: "image"
                                })
                            }), (0, a.jsxs)("div", {
                                className: "",
                                children: [(0, a.jsx)("h5", {
                                    className: "text-17 lh-14 fw-500",
                                    children: "Floyd Miles"
                                }), (0, a.jsx)("p", {
                                    className: "mt-5",
                                    children: "President of Sales"
                                }), (0, a.jsxs)("div", {
                                    className: "d-flex x-gap-20 y-gap-10 flex-wrap items-center pt-10",
                                    children: [(0, a.jsxs)("div", {
                                        className: "d-flex items-center",
                                        children: [(0, a.jsxs)("div", {
                                            className: "d-flex items-center mr-8",
                                            children: [(0, a.jsx)("div", {
                                                className: "icon-star text-11 text-yellow-1"
                                            }), (0, a.jsx)("div", {
                                                className: "text-14 lh-12 text-yellow-1 ml-5",
                                                children: "4.5"
                                            })]
                                        }), (0, a.jsx)("div", {
                                            className: "text-13 lh-1",
                                            children: "Instructor Rating"
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "d-flex items-center text-light-1",
                                        children: [(0, a.jsx)("div", {
                                            className: "icon-comment text-13 mr-8"
                                        }), (0, a.jsx)("div", {
                                            className: "text-13 lh-1",
                                            children: "23,987 Reviews"
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "d-flex items-center text-light-1",
                                        children: [(0, a.jsx)("div", {
                                            className: "icon-person-3 text-13 mr-8"
                                        }), (0, a.jsx)("div", {
                                            className: "text-13 lh-1",
                                            children: "692 Students"
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "d-flex items-center text-light-1",
                                        children: [(0, a.jsx)("div", {
                                            className: "icon-wall-clock text-13 mr-8"
                                        }), (0, a.jsx)("div", {
                                            className: "text-13 lh-1",
                                            children: "15 Course"
                                        })]
                                    })]
                                })]
                            })]
                        }), (0, a.jsx)("div", {
                            className: "mt-30",
                            children: (0, a.jsxs)("p", {
                                children: ["Back in 2010, I started brainspin with a desire to design compelling and engaging apps. For over 7 years, I have designed many high profile web and iPhone applications. The applications range from 3D medical aided web applications to project management applications for niche industries.", (0, a.jsx)("br", {}), (0, a.jsx)("br", {}), "I am also the founder of a large local design organization, Salt Lake Designers, where I and other local influencers help cultivate the talents of up and coming UX designers through workshops and panel discussions."]
                            })
                        })]
                    })]
                })
            }
            i(86006)
        },
        81383: function(e, s, i) {
            i.d(s, {
                Z: function() {
                    return n
                }
            });
            var a = i(9268),
                l = i(10009),
                t = i(85495),
                c = i(86006),
                r = i(13936);

            function n() {
                let [e, s] = (0, c.useState)(!1);
                return (0, a.jsxs)("div", {
                    id: "overview",
                    className: "pt-60 lg:pt-40 to-over",
                    children: [(0, a.jsx)("h4", {
                        className: "text-18 fw-500",
                        children: "Description"
                    }), (0, a.jsxs)("div", {
                        className: "show-more  mt-30 js-show-more ".concat(e ? "is-active" : "", " "),
                        children: [(0, a.jsx)("div", {
                            className: "show-more__content ",
                            style: e ? {
                                maxHeight: "370px"
                            } : {},
                            children: (0, a.jsxs)("p", {
                                className: "",
                                children: ["Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.", (0, a.jsx)("br", {}), (0, a.jsx)("br", {}), "This course is aimed at people interested in UI/UX Design. We’ll start from the very beginning and work all the way through, step by step. If you already have some UI/UX Design experience but want to get up to speed using Adobe XD then this course is perfect for you too!", (0, a.jsx)("br", {}), (0, a.jsx)("br", {}), "First, we will go over the differences between UX and UI Design. We will look at what our brief for this real-world project is, then we will learn about low-fidelity wireframes and how to make use of existing UI design kits."]
                            })
                        }), (0, a.jsx)("button", {
                            onClick: () => s(e => !e),
                            className: "show-more__button text-purple-1 fw-500 underline mt-30",
                            children: "Show more"
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "mt-60",
                        children: [(0, a.jsx)("h4", {
                            className: "text-20 mb-30",
                            children: "What you'll learn"
                        }), (0, a.jsxs)("div", {
                            className: "row x-gap-100 justfiy-between",
                            children: [(0, a.jsx)("div", {
                                className: "col-md-6",
                                children: (0, a.jsx)("div", {
                                    className: "y-gap-20",
                                    children: t.XS.slice(0, 6).map((e, s) => (0, a.jsxs)("div", {
                                        className: "d-flex items-center",
                                        children: [(0, a.jsx)("div", {
                                            className: "d-flex justify-center items-center border-light rounded-full size-20 mr-10",
                                            children: (0, a.jsx)(r.G, {
                                                icon: l.LEp,
                                                style: {
                                                    transform: "scale(0.7)",
                                                    opacity: "0.7"
                                                }
                                            })
                                        }), (0, a.jsx)("p", {
                                            children: e
                                        })]
                                    }, s))
                                })
                            }), (0, a.jsx)("div", {
                                className: "col-md-6",
                                children: (0, a.jsx)("div", {
                                    className: "y-gap-20",
                                    children: t.XS.slice(6).map((e, s) => (0, a.jsxs)("div", {
                                        className: "d-flex items-center",
                                        children: [(0, a.jsx)("div", {
                                            className: "d-flex justify-center items-center border-light rounded-full size-20 mr-10",
                                            children: (0, a.jsx)(r.G, {
                                                icon: l.LEp,
                                                style: {
                                                    transform: "scale(0.7)",
                                                    opacity: "0.7"
                                                }
                                            })
                                        }), (0, a.jsx)("p", {
                                            children: e
                                        })]
                                    }, s))
                                })
                            })]
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "mt-60",
                        children: [(0, a.jsx)("h4", {
                            className: "text-20",
                            children: "Requirements"
                        }), (0, a.jsx)("ul", {
                            className: "ul-list y-gap-15 pt-30",
                            children: t.rq.map((e, s) => (0, a.jsx)("li", {
                                children: e
                            }, s))
                        })]
                    })]
                })
            }
        },
        99306: function(e, s, i) {
            i.d(s, {
                Z: function() {
                    return c
                }
            });
            var a = i(9268);
            i(86006);
            var l = i(85495),
                t = i(40600);

            function c() {
                return (0, a.jsxs)("div", {
                    id: "reviews",
                    className: "pt-60 lg:pt-40",
                    children: [(0, a.jsx)("div", {
                        className: "blogPost -comments",
                        children: (0, a.jsxs)("div", {
                            className: "blogPost__content",
                            children: [(0, a.jsx)("h2", {
                                className: "text-20 fw-500",
                                children: "Student feedback"
                            }), (0, a.jsxs)("div", {
                                className: "row x-gap-10 y-gap-10 pt-30",
                                children: [(0, a.jsx)("div", {
                                    className: "col-md-4",
                                    children: (0, a.jsxs)("div", {
                                        className: "d-flex items-center justify-center flex-column py-50 text-center bg-light-6 rounded-8",
                                        children: [(0, a.jsx)("div", {
                                            className: "text-60 lh-11 text-dark-1 fw-500",
                                            children: "4.8"
                                        }), (0, a.jsx)("div", {
                                            className: "d-flex x-gap-5 mt-10",
                                            children: (0, a.jsx)(t.default, {
                                                star: 5,
                                                textSize: "text-11"
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "mt-10",
                                            children: "Course Rating"
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "col-md-8",
                                    children: (0, a.jsx)("div", {
                                        className: "py-20 px-30 bg-light-6 rounded-8",
                                        children: (0, a.jsxs)("div", {
                                            className: "row y-gap-15",
                                            children: [(0, a.jsx)("div", {
                                                className: "col-12",
                                                children: (0, a.jsxs)("div", {
                                                    className: "d-flex items-center",
                                                    children: [(0, a.jsxs)("div", {
                                                        className: "progress-bar w-1/1 mr-15",
                                                        children: [(0, a.jsx)("div", {
                                                            className: "progress-bar__bg bg-light-12"
                                                        }), (0, a.jsx)("div", {
                                                            className: "progress-bar__bar bg-purple-1 w-1/1"
                                                        })]
                                                    }), (0, a.jsx)("div", {
                                                        className: "d-flex x-gap-5 pr-15",
                                                        children: (0, a.jsx)(t.default, {
                                                            star: 5
                                                        })
                                                    }), (0, a.jsx)("div", {
                                                        className: "text-dark-1",
                                                        children: "70%"
                                                    })]
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "col-12",
                                                children: (0, a.jsxs)("div", {
                                                    className: "d-flex items-center",
                                                    children: [(0, a.jsxs)("div", {
                                                        className: "progress-bar w-1/1 mr-15",
                                                        children: [(0, a.jsx)("div", {
                                                            className: "progress-bar__bg bg-light-12"
                                                        }), (0, a.jsx)("div", {
                                                            className: "progress-bar__bar bg-purple-1 w-1/2"
                                                        })]
                                                    }), (0, a.jsx)("div", {
                                                        className: "d-flex x-gap-5 pr-15",
                                                        children: (0, a.jsx)(t.default, {
                                                            star: 5
                                                        })
                                                    }), (0, a.jsx)("div", {
                                                        className: "text-dark-1",
                                                        children: "15%"
                                                    })]
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "col-12",
                                                children: (0, a.jsxs)("div", {
                                                    className: "d-flex items-center",
                                                    children: [(0, a.jsxs)("div", {
                                                        className: "progress-bar w-1/1 mr-15",
                                                        children: [(0, a.jsx)("div", {
                                                            className: "progress-bar__bg bg-light-12"
                                                        }), (0, a.jsx)("div", {
                                                            className: "progress-bar__bar bg-purple-1 w-1/3"
                                                        })]
                                                    }), (0, a.jsx)("div", {
                                                        className: "d-flex x-gap-5 pr-15",
                                                        children: (0, a.jsx)(t.default, {
                                                            star: 5
                                                        })
                                                    }), (0, a.jsx)("div", {
                                                        className: "text-dark-1",
                                                        children: "20%"
                                                    })]
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "col-12",
                                                children: (0, a.jsxs)("div", {
                                                    className: "d-flex items-center",
                                                    children: [(0, a.jsxs)("div", {
                                                        className: "progress-bar w-1/1 mr-15",
                                                        children: [(0, a.jsx)("div", {
                                                            className: "progress-bar__bg bg-light-12"
                                                        }), (0, a.jsx)("div", {
                                                            className: "progress-bar__bar bg-purple-1 w-1/5"
                                                        })]
                                                    }), (0, a.jsx)("div", {
                                                        className: "d-flex x-gap-5 pr-15",
                                                        children: (0, a.jsx)(t.default, {
                                                            star: 5
                                                        })
                                                    }), (0, a.jsx)("div", {
                                                        className: "text-dark-1",
                                                        children: "3%"
                                                    })]
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "col-12",
                                                children: (0, a.jsxs)("div", {
                                                    className: "d-flex items-center",
                                                    children: [(0, a.jsxs)("div", {
                                                        className: "progress-bar w-1/1 mr-15",
                                                        children: [(0, a.jsx)("div", {
                                                            className: "progress-bar__bg bg-light-12"
                                                        }), (0, a.jsx)("div", {
                                                            className: "progress-bar__bar bg-purple-1 w-1/7"
                                                        })]
                                                    }), (0, a.jsx)("div", {
                                                        className: "d-flex x-gap-5 pr-15",
                                                        children: (0, a.jsx)(t.default, {
                                                            star: 5
                                                        })
                                                    }), (0, a.jsx)("div", {
                                                        className: "text-dark-1",
                                                        children: "2%"
                                                    })]
                                                })
                                            })]
                                        })
                                    })
                                })]
                            }), (0, a.jsx)("h2", {
                                className: "text-20 fw-500 mt-60 lg:mt-40",
                                children: "Reviews"
                            }), (0, a.jsxs)("ul", {
                                className: "comments__list mt-30",
                                children: [l.A9.slice(0, 2).map((e, s) => (0, a.jsx)("li", {
                                    className: "comments__item",
                                    children: (0, a.jsxs)("div", {
                                        className: "comments__item-inner md:direction-column",
                                        children: [(0, a.jsx)("div", {
                                            className: "comments__img mr-20",
                                            children: (0, a.jsx)("div", {
                                                className: "bg-image rounded-full js-lazy",
                                                style: {
                                                    backgroundImage: "url(".concat(e.avatarSrc, ")")
                                                }
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "comments__body md:mt-15",
                                            children: [(0, a.jsxs)("div", {
                                                className: "comments__header",
                                                children: [(0, a.jsxs)("h4", {
                                                    className: "text-17 fw-500 lh-15",
                                                    children: [e.name, (0, a.jsx)("span", {
                                                        className: "text-13 text-light-1 fw-400",
                                                        children: "3 Days ago"
                                                    })]
                                                }), (0, a.jsx)("div", {
                                                    className: "stars"
                                                })]
                                            }), (0, a.jsx)("h5", {
                                                className: "text-15 fw-500 mt-15",
                                                children: e.title
                                            }), (0, a.jsx)("div", {
                                                className: "comments__text mt-10",
                                                children: (0, a.jsx)("p", {
                                                    children: e.comment
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
                                }, s)), (0, a.jsx)("li", {
                                    className: "comments__item",
                                    children: (0, a.jsx)("div", {
                                        className: "d-flex justify-center",
                                        children: (0, a.jsx)("button", {
                                            className: "text-purple-1 lh-12 underline fw-500",
                                            children: "View All Reviews"
                                        })
                                    })
                                })]
                            })]
                        })
                    }), (0, a.jsxs)("div", {
                        className: "respondForm pt-60",
                        children: [(0, a.jsx)("h3", {
                            className: "text-20 fw-500",
                            children: "Write a Review"
                        }), (0, a.jsxs)("div", {
                            className: "mt-30",
                            children: [(0, a.jsx)("h4", {
                                className: "text-16 fw-500",
                                children: "What is it like to Course?"
                            }), (0, a.jsx)("div", {
                                className: "d-flex x-gap-10 pt-10",
                                children: (0, a.jsx)(t.default, {
                                    star: 5,
                                    textSize: "text-14"
                                })
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
                })
            }
        }
    }
]);