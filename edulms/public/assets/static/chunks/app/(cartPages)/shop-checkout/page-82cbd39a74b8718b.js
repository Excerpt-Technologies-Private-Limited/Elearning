(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7356], {
        21693: function(e, s, a) {
            Promise.resolve().then(a.t.bind(a, 8920, 23)), Promise.resolve().then(a.bind(a, 1311)), Promise.resolve().then(a.bind(a, 14747)), Promise.resolve().then(a.bind(a, 55980)), Promise.resolve().then(a.bind(a, 38993))
        },
        38993: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return c
                }
            });
            var l = a(9268),
                t = a(86006),
                i = a(71840),
                d = a(35846),
                r = a.n(d);

            function c() {
                let {
                    cartProducts: e
                } = (0, i.o)(), [s, a] = (0, t.useState)(0), [d, c] = (0, t.useState)(0);
                return (0, t.useEffect)(() => {
                    let s = e.reduce((e, s) => e + s.price * s.quantity, 0),
                        l = e.reduce((e, s) => e + s.quantity, 0);
                    c(10 * l), a(s)
                }, [e]), (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("section", {
                        className: "page-header -type-1",
                        children: (0, l.jsx)("div", {
                            className: "container",
                            children: (0, l.jsx)("div", {
                                className: "page-header__content",
                                children: (0, l.jsx)("div", {
                                    className: "row justify-center text-center",
                                    children: (0, l.jsxs)("div", {
                                        className: "col-auto",
                                        children: [(0, l.jsx)("div", {
                                            children: (0, l.jsx)("h1", {
                                                className: "page-header__title",
                                                children: "Shop Checkout"
                                            })
                                        }), (0, l.jsx)("div", {
                                            children: (0, l.jsx)("p", {
                                                className: "page-header__text",
                                                children: "We’re on a mission to deliver engaging, curated courses at a reasonable price."
                                            })
                                        })]
                                    })
                                })
                            })
                        })
                    }), (0, l.jsx)("section", {
                        className: "layout-pt-md layout-pb-lg",
                        children: (0, l.jsx)("div", {
                            className: "container",
                            children: (0, l.jsxs)("div", {
                                className: "row y-gap-50",
                                children: [(0, l.jsx)("div", {
                                    className: "col-lg-8",
                                    children: (0, l.jsx)("div", {
                                        className: "shopCheckout-form",
                                        children: (0, l.jsxs)("form", {
                                            onSubmit: e => {
                                                e.preventDefault()
                                            },
                                            className: "contact-form row x-gap-30 y-gap-30",
                                            children: [(0, l.jsx)("div", {
                                                className: "col-12",
                                                children: (0, l.jsx)("h5", {
                                                    className: "text-20",
                                                    children: "Billing details"
                                                })
                                            }), (0, l.jsxs)("div", {
                                                className: "col-sm-6",
                                                children: [(0, l.jsx)("label", {
                                                    className: "text-16 lh-1 fw-500 text-dark-1 mb-10",
                                                    children: "First name"
                                                }), (0, l.jsx)("input", {
                                                    required: !0,
                                                    type: "text",
                                                    name: "firstName",
                                                    placeholder: "First name"
                                                })]
                                            }), (0, l.jsxs)("div", {
                                                className: "col-sm-6",
                                                children: [(0, l.jsx)("label", {
                                                    className: "text-16 lh-1 fw-500 text-dark-1 mb-10",
                                                    children: "Last name"
                                                }), (0, l.jsx)("input", {
                                                    required: !0,
                                                    type: "text",
                                                    name: "lastName",
                                                    placeholder: "Last name"
                                                })]
                                            }), (0, l.jsxs)("div", {
                                                className: "col-12",
                                                children: [(0, l.jsx)("label", {
                                                    className: "text-16 lh-1 fw-500 text-dark-1 mb-10",
                                                    children: "Company name"
                                                }), (0, l.jsx)("input", {
                                                    required: !0,
                                                    type: "text",
                                                    name: "company",
                                                    placeholder: "Company name"
                                                })]
                                            }), (0, l.jsxs)("div", {
                                                className: "col-12",
                                                children: [(0, l.jsx)("label", {
                                                    className: "text-16 lh-1 fw-500 text-dark-1 mb-10",
                                                    children: "Country / Region *"
                                                }), (0, l.jsxs)("select", {
                                                    className: "selectize wide js-selectize",
                                                    children: [(0, l.jsx)("option", {
                                                        value: "USA",
                                                        children: "USA"
                                                    }), (0, l.jsx)("option", {
                                                        value: "Germany",
                                                        children: "Germany"
                                                    }), (0, l.jsx)("option", {
                                                        value: "France",
                                                        children: "France"
                                                    }), (0, l.jsx)("option", {
                                                        value: "Greece",
                                                        children: "Greece"
                                                    })]
                                                })]
                                            }), (0, l.jsxs)("div", {
                                                className: "col-12",
                                                children: [(0, l.jsx)("label", {
                                                    className: "text-16 lh-1 fw-500 text-dark-1 mb-10",
                                                    children: "House number adn street name"
                                                }), (0, l.jsx)("input", {
                                                    required: !0,
                                                    type: "text",
                                                    name: "address",
                                                    placeholder: "House number adn street name"
                                                })]
                                            }), (0, l.jsxs)("div", {
                                                className: "col-sm-6",
                                                children: [(0, l.jsx)("label", {
                                                    className: "text-16 lh-1 fw-500 text-dark-1 mb-10",
                                                    children: "Apartment, suite, unit etc. (optional)"
                                                }), (0, l.jsx)("input", {
                                                    required: !0,
                                                    type: "text",
                                                    name: "apartment",
                                                    placeholder: "Apartment, suite, unit etc. (optional)"
                                                })]
                                            }), (0, l.jsxs)("div", {
                                                className: "col-sm-6",
                                                children: [(0, l.jsx)("label", {
                                                    className: "text-16 lh-1 fw-500 text-dark-1 mb-10",
                                                    children: "Town / City *"
                                                }), (0, l.jsx)("input", {
                                                    required: !0,
                                                    type: "text",
                                                    name: "city",
                                                    placeholder: "Town / City *"
                                                })]
                                            }), (0, l.jsxs)("div", {
                                                className: "col-sm-6",
                                                children: [(0, l.jsx)("label", {
                                                    className: "text-16 lh-1 fw-500 text-dark-1 mb-10",
                                                    children: "State *"
                                                }), (0, l.jsx)("input", {
                                                    required: !0,
                                                    type: "text",
                                                    name: "state",
                                                    placeholder: "State *"
                                                })]
                                            }), (0, l.jsxs)("div", {
                                                className: "col-sm-6",
                                                children: [(0, l.jsx)("label", {
                                                    className: "text-16 lh-1 fw-500 text-dark-1 mb-10",
                                                    children: "ZIP *"
                                                }), (0, l.jsx)("input", {
                                                    required: !0,
                                                    type: "text",
                                                    name: "zip",
                                                    placeholder: "ZIP *"
                                                })]
                                            }), (0, l.jsxs)("div", {
                                                className: "col-sm-6",
                                                children: [(0, l.jsx)("label", {
                                                    className: "text-16 lh-1 fw-500 text-dark-1 mb-10",
                                                    children: "Phone *"
                                                }), (0, l.jsx)("input", {
                                                    required: !0,
                                                    type: "text",
                                                    name: "phone",
                                                    placeholder: "Phone *"
                                                })]
                                            }), (0, l.jsxs)("div", {
                                                className: "col-12",
                                                children: [(0, l.jsx)("label", {
                                                    className: "text-16 lh-1 fw-500 text-dark-1 mb-10",
                                                    children: "Email address *"
                                                }), (0, l.jsx)("input", {
                                                    required: !0,
                                                    type: "email",
                                                    name: "email",
                                                    placeholder: "Email address *"
                                                })]
                                            }), (0, l.jsx)("div", {
                                                className: "col-12",
                                                children: (0, l.jsx)("h5", {
                                                    className: "text-20 fw-500 pt-30",
                                                    children: "Additional information"
                                                })
                                            }), (0, l.jsxs)("div", {
                                                className: "col-12",
                                                children: [(0, l.jsx)("label", {
                                                    className: "text-16 lh-1 fw-500 text-dark-1 mb-10",
                                                    children: "Order notes (optional)"
                                                }), (0, l.jsx)("textarea", {
                                                    required: !0,
                                                    name: "notes",
                                                    id: "form_notes",
                                                    rows: "8",
                                                    placeholder: "Order notes (optional)"
                                                })]
                                            })]
                                        })
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "col-lg-4",
                                    children: (0, l.jsxs)("div", {
                                        className: "",
                                        children: [(0, l.jsxs)("div", {
                                            className: "pt-30 pb-15 bg-white border-light rounded-8 bg-light-4",
                                            children: [(0, l.jsx)("h5", {
                                                className: "px-30 text-20 fw-500",
                                                children: "Your order"
                                            }), (0, l.jsxs)("div", {
                                                className: "d-flex justify-between px-30 mt-25",
                                                children: [(0, l.jsx)("div", {
                                                    className: "py-15 fw-500 text-dark-1",
                                                    children: "Product"
                                                }), (0, l.jsx)("div", {
                                                    className: "py-15 fw-500 text-dark-1",
                                                    children: "Subtotal"
                                                })]
                                            }), e.map((e, s) => (0, l.jsxs)("div", {
                                                className: "d-flex justify-between ".concat(0 == s ? "border-top-dark" : "", "  px-30"),
                                                children: [(0, l.jsxs)("div", {
                                                    className: "py-15 text-grey",
                                                    children: [(0, l.jsxs)(r(), {
                                                        className: "linkCustom",
                                                        href: "/shop/".concat(e.id),
                                                        children: [e.name, " "]
                                                    }), " x ", e.quantity]
                                                }), (0, l.jsxs)("div", {
                                                    className: "py-15 text-grey",
                                                    children: ["$", (e.price * e.quantity).toFixed(2)]
                                                })]
                                            }, s)), (0, l.jsxs)("div", {
                                                className: "d-flex justify-between border-top-dark px-30",
                                                children: [(0, l.jsx)("div", {
                                                    className: "py-15 fw-500",
                                                    children: "Subtotal"
                                                }), (0, l.jsxs)("div", {
                                                    className: "py-15 fw-500",
                                                    children: ["$", s.toFixed(2)]
                                                })]
                                            }), (0, l.jsxs)("div", {
                                                className: "d-flex justify-between border-top-dark px-30",
                                                children: [(0, l.jsx)("div", {
                                                    className: "py-15 fw-500 text-dark-1",
                                                    children: "Shipping"
                                                }), (0, l.jsxs)("div", {
                                                    className: "py-15 fw-500 text-dark-1",
                                                    children: ["$", d.toFixed(2)]
                                                })]
                                            }), (0, l.jsxs)("div", {
                                                className: "d-flex justify-between border-top-dark px-30",
                                                children: [(0, l.jsx)("div", {
                                                    className: "py-15 fw-500 text-dark-1",
                                                    children: "Total"
                                                }), (0, l.jsxs)("div", {
                                                    className: "py-15 fw-500 text-dark-1",
                                                    children: ["$", (s + d).toFixed(2)]
                                                })]
                                            })]
                                        }), (0, l.jsxs)("div", {
                                            className: "py-30 px-30 bg-white mt-30 border-light rounded-8 bg-light-4",
                                            children: [(0, l.jsx)("h5", {
                                                className: "text-20 fw-500",
                                                children: "Payment"
                                            }), (0, l.jsxs)("div", {
                                                className: "mt-30",
                                                children: [(0, l.jsxs)("div", {
                                                    className: "form-radio d-flex items-center",
                                                    children: [(0, l.jsxs)("div", {
                                                        className: "radio",
                                                        children: [(0, l.jsx)("input", {
                                                            type: "radio",
                                                            name: "radio",
                                                            checked: "checked"
                                                        }), (0, l.jsx)("div", {
                                                            className: "radio__mark",
                                                            children: (0, l.jsx)("div", {
                                                                className: "radio__icon"
                                                            })
                                                        })]
                                                    }), (0, l.jsx)("h5", {
                                                        className: "ml-15 text-15 lh-1 fw-500 text-dark-1",
                                                        children: "Direct bank transfer"
                                                    })]
                                                }), (0, l.jsx)("p", {
                                                    className: "ml-25 pl-5 mt-25",
                                                    children: "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account."
                                                })]
                                            }), (0, l.jsx)("div", {
                                                className: "mt-30",
                                                children: (0, l.jsxs)("div", {
                                                    className: "form-radio d-flex items-center",
                                                    children: [(0, l.jsxs)("div", {
                                                        className: "radio",
                                                        children: [(0, l.jsx)("input", {
                                                            type: "radio",
                                                            name: "radio",
                                                            checked: "checked"
                                                        }), (0, l.jsx)("div", {
                                                            className: "radio__mark",
                                                            children: (0, l.jsx)("div", {
                                                                className: "radio__icon"
                                                            })
                                                        })]
                                                    }), (0, l.jsx)("h5", {
                                                        className: "ml-15 text-15 lh-1 text-dark-1",
                                                        children: "Check payments"
                                                    })]
                                                })
                                            }), (0, l.jsx)("div", {
                                                className: "mt-30",
                                                children: (0, l.jsxs)("div", {
                                                    className: "form-radio d-flex items-center",
                                                    children: [(0, l.jsxs)("div", {
                                                        className: "radio",
                                                        children: [(0, l.jsx)("input", {
                                                            type: "radio",
                                                            name: "radio",
                                                            checked: "checked"
                                                        }), (0, l.jsx)("div", {
                                                            className: "radio__mark",
                                                            children: (0, l.jsx)("div", {
                                                                className: "radio__icon"
                                                            })
                                                        })]
                                                    }), (0, l.jsx)("h5", {
                                                        className: "ml-15 text-15 lh-1 text-dark-1",
                                                        children: "Cash on delivery"
                                                    })]
                                                })
                                            }), (0, l.jsx)("div", {
                                                className: "mt-30",
                                                children: (0, l.jsxs)("div", {
                                                    className: "form-radio d-flex items-center",
                                                    children: [(0, l.jsxs)("div", {
                                                        className: "radio",
                                                        children: [(0, l.jsx)("input", {
                                                            type: "radio",
                                                            name: "radio",
                                                            checked: "checked"
                                                        }), (0, l.jsx)("div", {
                                                            className: "radio__mark",
                                                            children: (0, l.jsx)("div", {
                                                                className: "radio__icon"
                                                            })
                                                        })]
                                                    }), (0, l.jsx)("h5", {
                                                        className: "ml-15 text-15 lh-1 text-dark-1",
                                                        children: "PayPal"
                                                    })]
                                                })
                                            })]
                                        }), (0, l.jsx)("div", {
                                            className: "mt-30",
                                            children: (0, l.jsx)("button", {
                                                className: "button -md -accent col-12 -uppercase text-white",
                                                children: "Place order"
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
        56008: function(e, s, a) {
            e.exports = a(93027)
        }
    },
    function(e) {
        e.O(0, [8201, 1840, 5127, 4240, 4119, 7102, 9253, 6488, 1744], function() {
            return e(e.s = 21693)
        }), _N_E = e.O()
    }
]);