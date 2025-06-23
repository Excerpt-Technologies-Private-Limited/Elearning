(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9170], {
        17470: function(e, s, a) {
            Promise.resolve().then(a.t.bind(a, 8920, 23)), Promise.resolve().then(a.bind(a, 1311)), Promise.resolve().then(a.bind(a, 14747)), Promise.resolve().then(a.bind(a, 55980)), Promise.resolve().then(a.bind(a, 63075))
        },
        81152: function(e, s, a) {
            "use strict";
            a.d(s, {
                Z: function() {
                    return c
                }
            });
            var i = a(9268);

            function c() {
                return (0, i.jsxs)("div", {
                    className: "pagination -buttons",
                    children: [(0, i.jsx)("button", {
                        className: "pagination__button -prev",
                        children: (0, i.jsx)("i", {
                            className: "icon icon-chevron-left"
                        })
                    }), (0, i.jsxs)("div", {
                        className: "pagination__count",
                        children: [(0, i.jsx)("a", {
                            href: "#",
                            children: "1"
                        }), (0, i.jsx)("a", {
                            className: "-count-is-active",
                            href: "#",
                            children: "2"
                        }), (0, i.jsx)("a", {
                            href: "#",
                            children: "3"
                        }), (0, i.jsx)("span", {
                            children: "..."
                        }), (0, i.jsx)("a", {
                            href: "#",
                            children: "67"
                        })]
                    }), (0, i.jsx)("button", {
                        className: "pagination__button -next",
                        children: (0, i.jsx)("i", {
                            className: "icon icon-chevron-right"
                        })
                    })]
                })
            }
            a(86006)
        },
        63075: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return N
                }
            });
            var i = a(9268),
                c = a(86006),
                n = a(76394),
                l = a.n(n),
                r = a(31092),
                d = a(13936),
                t = a(99614),
                o = a(66101),
                h = a(81152),
                x = a(10009),
                m = a(71840),
                j = a(35846),
                p = a.n(j);

            function N() {
                let {
                    addProductToCart: e,
                    isAddedToCartProducts: s
                } = (0, m.o)(), [a, n] = (0, c.useState)([200, 1500]), [j, N] = (0, c.useState)(), [u, v] = (0, c.useState)(r.JV);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("section", {
                        className: "page-header -type-1",
                        children: (0, i.jsx)("div", {
                            className: "container",
                            children: (0, i.jsx)("div", {
                                className: "page-header__content",
                                children: (0, i.jsx)("div", {
                                    className: "row justify-center text-center",
                                    children: (0, i.jsxs)("div", {
                                        className: "col-auto",
                                        children: [(0, i.jsx)("div", {
                                            children: (0, i.jsx)("h1", {
                                                className: "page-header__title",
                                                children: "Shop List"
                                            })
                                        }), (0, i.jsx)("div", {
                                            children: (0, i.jsx)("p", {
                                                className: "page-header__text",
                                                children: "We’re on a mission to deliver engaging, curated courses at a reasonable price."
                                            })
                                        })]
                                    })
                                })
                            })
                        })
                    }), (0, i.jsx)("section", {
                        className: "layout-pt-md layout-pb-lg",
                        children: (0, i.jsx)("div", {
                            className: "container",
                            children: (0, i.jsxs)("div", {
                                className: "row x-gap-60",
                                children: [(0, i.jsx)("div", {
                                    className: "col-lg-3",
                                    children: (0, i.jsxs)("div", {
                                        className: "sidebar -shop",
                                        children: [(0, i.jsxs)("div", {
                                            className: "sidebar__item",
                                            children: [(0, i.jsx)("div", {
                                                className: "sidebar__search mb-30",
                                                children: (0, i.jsx)("div", {
                                                    className: "search",
                                                    children: (0, i.jsxs)("form", {
                                                        onSubmit: e => {
                                                            e.preventDefault()
                                                        },
                                                        children: [(0, i.jsx)("button", {
                                                            className: "submit",
                                                            type: "submit",
                                                            children: (0, i.jsx)("i", {
                                                                className: "icon",
                                                                "data-feather": "search"
                                                            })
                                                        }), (0, i.jsx)("input", {
                                                            required: !0,
                                                            className: "field",
                                                            type: "text",
                                                            placeholder: "Search"
                                                        })]
                                                    })
                                                })
                                            }), (0, i.jsx)("h5", {
                                                className: "sidebar__title",
                                                children: "Categories"
                                            }), (0, i.jsx)("div", {
                                                className: "sidebar-content -list",
                                                children: r.bd.map((e, s) => (0, i.jsx)("a", {
                                                    className: "text-dark-1",
                                                    href: e.href,
                                                    children: e.name
                                                }, s))
                                            })]
                                        }), (0, i.jsxs)("div", {
                                            className: "sidebar__item",
                                            children: [(0, i.jsx)("h5", {
                                                className: "sidebar__title",
                                                children: "Filter by price"
                                            }), (0, i.jsx)("div", {
                                                className: "sidebar-content -slider",
                                                children: (0, i.jsxs)("div", {
                                                    className: "js-price-rangeSlider",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "px-5",
                                                        children: (0, i.jsx)(o.ZP, {
                                                            getAriaLabel: () => "Minimum distance",
                                                            value: a,
                                                            onChange: (e, s) => {
                                                                n(s)
                                                            },
                                                            valueLabelDisplay: "auto",
                                                            max: 2e3,
                                                            min: 200,
                                                            disableSwap: !0
                                                        })
                                                    }), (0, i.jsx)("div", {
                                                        className: "mt-25",
                                                        children: (0, i.jsxs)("div", {
                                                            className: "d-flex items-center justify-between text-14",
                                                            children: [(0, i.jsxs)("span", {
                                                                children: ["Min Price:", (0, i.jsx)("span", {
                                                                    className: "js-lower",
                                                                    children: a[0]
                                                                })]
                                                            }), (0, i.jsxs)("span", {
                                                                children: ["Max Price:", (0, i.jsx)("span", {
                                                                    className: "js-upper",
                                                                    children: a[1]
                                                                })]
                                                            })]
                                                        })
                                                    })]
                                                })
                                            })]
                                        }), (0, i.jsxs)("div", {
                                            className: "sidebar__item",
                                            children: [(0, i.jsx)("h5", {
                                                className: "sidebar__title",
                                                children: "Tags"
                                            }), (0, i.jsx)("div", {
                                                className: "sidebar-content -tags",
                                                children: r.pJ.map((e, s) => (0, i.jsx)("div", {
                                                    className: "sidebar-tag",
                                                    children: (0, i.jsx)("a", {
                                                        className: "text-11 fw-500 text-dark-1",
                                                        href: e.href,
                                                        children: e.name
                                                    })
                                                }, s))
                                            })]
                                        })]
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: "col-lg-9",
                                    children: [(0, i.jsxs)("div", {
                                        className: "row y-gap-10 justify-between items-center",
                                        children: [(0, i.jsx)("div", {
                                            className: "col-auto",
                                            children: (0, i.jsxs)("div", {
                                                className: "text-14",
                                                children: ["Showing ", (0, i.jsx)("span", {
                                                    className: "fw-500 text-dark-1",
                                                    children: "250"
                                                }), " ", "total results"]
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: "col-auto",
                                            children: (0, i.jsxs)("div", {
                                                className: "d-flex items-center",
                                                children: [(0, i.jsx)("div", {
                                                    className: "fw-500 text-dark-1 mr-20",
                                                    children: "Sort by:"
                                                }), (0, i.jsxs)("div", {
                                                    className: "dropdown js-shop-dropdown",
                                                    children: [(0, i.jsxs)("div", {
                                                        className: "d-flex items-center text-14",
                                                        children: [(0, i.jsx)("span", {
                                                            className: "js-dropdown-title",
                                                            children: "Default Sorting"
                                                        }), (0, i.jsx)(d.G, {
                                                            className: "icon size-15 ml-40",
                                                            icon: x.ptq
                                                        })]
                                                    }), (0, i.jsx)("div", {
                                                        className: "dropdown__item",
                                                        children: (0, i.jsxs)("div", {
                                                            className: "text-14 y-gap-15 js-dropdown-list",
                                                            children: [(0, i.jsx)("div", {
                                                                children: (0, i.jsx)("a", {
                                                                    className: "d-block decoration-none js-dropdown-link",
                                                                    href: "#",
                                                                    children: "Default Sorting"
                                                                })
                                                            }), (0, i.jsx)("div", {
                                                                children: (0, i.jsx)("a", {
                                                                    className: "d-block decoration-none js-dropdown-link",
                                                                    href: "#",
                                                                    children: "Clothing"
                                                                })
                                                            }), (0, i.jsx)("div", {
                                                                children: (0, i.jsx)("a", {
                                                                    className: "d-block decoration-none js-dropdown-link",
                                                                    href: "#",
                                                                    children: "Glasses"
                                                                })
                                                            }), (0, i.jsx)("div", {
                                                                children: (0, i.jsx)("a", {
                                                                    className: "d-block decoration-none js-dropdown-link",
                                                                    href: "#",
                                                                    children: "T-Shirts"
                                                                })
                                                            })]
                                                        })
                                                    })]
                                                })]
                                            })
                                        })]
                                    }), (0, i.jsx)("div", {
                                        className: "row y-gap-30 pt-30",
                                        children: u.map((a, c) => (0, i.jsx)("div", {
                                            className: "col-lg-4 col-sm-6",
                                            children: (0, i.jsxs)("div", {
                                                className: "productCard -type-1 text-center",
                                                children: [(0, i.jsxs)("div", {
                                                    className: "productCard__image",
                                                    children: [(0, i.jsx)(l(), {
                                                        width: 528,
                                                        height: 528,
                                                        src: a.image,
                                                        alt: "Product image"
                                                    }), (0, i.jsxs)("div", {
                                                        className: "productCard__controls",
                                                        children: [(0, i.jsx)("span", {
                                                            className: "productCard__icon",
                                                            children: (0, i.jsx)(d.G, {
                                                                icon: t.Mdf
                                                            })
                                                        }), (0, i.jsx)("span", {
                                                            className: "productCard__icon",
                                                            children: (0, i.jsx)(d.G, {
                                                                icon: t.m6i
                                                            })
                                                        })]
                                                    })]
                                                }), (0, i.jsxs)("div", {
                                                    className: "productCard__content mt-20",
                                                    children: [(0, i.jsx)("div", {
                                                        className: "text-14  lh-1",
                                                        children: a.categories.map((e, s) => (0, i.jsx)("span", {
                                                            children: "".concat(e, ", ")
                                                        }, s))
                                                    }), (0, i.jsx)("h4", {
                                                        className: "text-17 fw-500 mt-15 linkCustom",
                                                        children: (0, i.jsxs)(p(), {
                                                            href: "/shop/".concat(a.id),
                                                            style: {
                                                                textDecoration: "none",
                                                                color: "inherit"
                                                            },
                                                            children: [" ", a.name, " "]
                                                        })
                                                    }), (0, i.jsxs)("div", {
                                                        className: "text-17 fw-500 text-purple-1 mt-15",
                                                        children: ["$", a.price.toFixed(2)]
                                                    }), (0, i.jsx)("div", {
                                                        className: "productCard__button d-inline-block cursor",
                                                        onClick: () => e(a.id),
                                                        children: (0, i.jsx)("span", {
                                                            className: "button -md -outline-purple-1 text-dark-1 mt-15",
                                                            children: s(a.id) ? "Already Added" : "Add To Cart"
                                                        })
                                                    })]
                                                })]
                                            })
                                        }, c))
                                    }), (0, i.jsx)("div", {
                                        className: "row justify-center pt-60 lg:pt-40",
                                        children: (0, i.jsx)("div", {
                                            className: "col-auto",
                                            children: (0, i.jsx)(h.Z, {})
                                        })
                                    })]
                                })]
                            })
                        })
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [8957, 8201, 1410, 8100, 9984, 1840, 5127, 4240, 4119, 7102, 9253, 6488, 1744], function() {
            return e(e.s = 17470)
        }), _N_E = e.O()
    }
]);