"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1064], {
        80808: function(e, s, a) {
            a.d(s, {
                Z: function() {
                    return n
                }
            });
            var t = a(9268);
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
            var c = a(35846),
                d = a.n(c);

            function n(e) {
                let {
                    allClasses: s
                } = e;
                return (0, t.jsx)(t.Fragment, {
                    children: i.map((e, a) => (0, t.jsx)(d(), {
                        className: "".concat(s || ""),
                        href: e.href,
                        children: e.label
                    }, a))
                })
            }
            a(86006)
        },
        5900: function(e, s, a) {
            a.d(s, {
                Z: function() {
                    return r
                }
            });
            var t = a(9268),
                i = a(76394),
                c = a.n(i),
                d = a(86006);
            let n = [{
                id: 1,
                title: "Starred",
                content: [{
                    id: 2,
                    name: "Darlene Robertson",
                    message: "Hello",
                    time: "35 mins",
                    imageSrc: "/assets/img/dashboard/right-sidebar/messages/1.png"
                }, {
                    id: 1,
                    name: "Darlene Robertson",
                    message: "Hello",
                    time: "35 mins",
                    imageSrc: "/assets/img/dashboard/right-sidebar/messages/1.png"
                }]
            }, {
                id: 2,
                title: "Group",
                content: [{
                    id: 1,
                    name: "Darlene Robertson",
                    message: "Hello",
                    time: "35 mins",
                    imageSrc: "/assets/img/dashboard/right-sidebar/messages/1.png"
                }, {
                    id: 2,
                    name: "Darlene Robertson",
                    message: "Hello",
                    time: "35 mins",
                    imageSrc: "/assets/img/dashboard/right-sidebar/messages/1.png"
                }, {
                    id: 3,
                    name: "Darlene Robertson",
                    message: "Hello",
                    time: "35 mins",
                    imageSrc: "/assets/img/dashboard/right-sidebar/messages/1.png"
                }]
            }, {
                id: 3,
                title: "Private",
                content: [{
                    id: 1,
                    name: "Darlene Robertson",
                    message: "Hello",
                    time: "35 mins",
                    imageSrc: "/assets/img/dashboard/right-sidebar/messages/1.png"
                }]
            }];

            function r(e) {
                let {
                    setMessageOpen: s,
                    messageOpen: a
                } = e, [i, r] = (0, d.useState)("message"), [l, o] = (0, d.useState)(0), [m, x] = (0, d.useState)(1), h = e => {
                    e.preventDefault()
                };
                return (0, t.jsxs)("aside", {
                    className: "sidebar-menu toggle-element js-msg-toggle js-dsbh-sidebar-menu ".concat(a ? "-is-el-visible" : ""),
                    children: [(0, t.jsx)("div", {
                        className: "sidebar-menu__bg"
                    }), (0, t.jsxs)("div", {
                        className: "sidebar-menu__content scroll-bar-1 py-30 px-40 sm:py-25 sm:px-20 bg-white -dark-bg-dark-1",
                        children: [(0, t.jsxs)("div", {
                            className: "row items-center justify-between mb-30",
                            children: [(0, t.jsx)("div", {
                                className: "col-auto",
                                children: (0, t.jsxs)("div", {
                                    className: "-sidebar-buttons",
                                    children: [(0, t.jsx)("button", {
                                        "data-sidebar-menu-button": "messages",
                                        onClick: () => r("messages"),
                                        className: "text-17 text-dark-1 fw-500 ".concat("message" == i ? "-is-button-active" : "", " "),
                                        children: "Messages"
                                    }), (0, t.jsxs)("button", {
                                        "data-sidebar-menu-button": "messages-2",
                                        onClick: () => r("message"),
                                        "data-sidebar-menu-target": "messages",
                                        className: "d-flex items-center text-17 text-dark-1 fw-500 ".concat("messageTwo" == i ? "-is-button-active" : ""),
                                        children: [(0, t.jsx)("i", {
                                            className: "icon-chevron-left text-11 text-purple-1 mr-10"
                                        }), "Messages"]
                                    }), (0, t.jsxs)("button", {
                                        "data-sidebar-menu-button": "settings",
                                        onClick: () => r("message"),
                                        "data-sidebar-menu-target": "messages",
                                        className: "d-flex items-center text-17 text-dark-1 fw-500 ".concat("settings" == i ? "-is-button-active" : ""),
                                        children: [(0, t.jsx)("i", {
                                            className: "icon-chevron-left text-11 text-purple-1 mr-10"
                                        }), "Settings"]
                                    }), (0, t.jsxs)("button", {
                                        "data-sidebar-menu-button": "contacts",
                                        onClick: () => r("message"),
                                        "data-sidebar-menu-target": "messages",
                                        className: "d-flex items-center text-17 text-dark-1 fw-500 ".concat("contacts" == i ? "-is-button-active" : ""),
                                        children: [(0, t.jsx)("i", {
                                            className: "icon-chevron-left text-11 text-purple-1 mr-10"
                                        }), "Contacts"]
                                    })]
                                })
                            }), (0, t.jsx)("div", {
                                className: "col-auto",
                                children: (0, t.jsxs)("div", {
                                    className: "row x-gap-10",
                                    children: [(0, t.jsx)("div", {
                                        className: "col-auto",
                                        children: (0, t.jsx)("button", {
                                            "data-sidebar-menu-target": "settings",
                                            onClick: () => r("settings"),
                                            className: "button -purple-3 text-purple-1 size-40 d-flex items-center justify-center rounded-full",
                                            children: (0, t.jsx)("i", {
                                                className: "icon-setting text-16"
                                            })
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "col-auto",
                                        children: (0, t.jsx)("button", {
                                            "data-sidebar-menu-target": "contacts",
                                            onClick: () => r("contacts"),
                                            className: "button -purple-3 text-purple-1 size-40 d-flex items-center justify-center rounded-full",
                                            children: (0, t.jsx)("i", {
                                                className: "icon-friend text-16"
                                            })
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "col-auto",
                                        children: (0, t.jsx)("button", {
                                            "data-el-toggle": ".js-msg-toggle",
                                            onClick: () => s(!1),
                                            className: "button -purple-3 text-purple-1 size-40 d-flex items-center justify-center rounded-full",
                                            children: (0, t.jsx)("i", {
                                                className: "icon-close text-14"
                                            })
                                        })
                                    })]
                                })
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "relative js-menu-switch",
                            children: [(0, t.jsxs)("div", {
                                "data-sidebar-menu-open": "messages",
                                className: "sidebar-menu__item -sidebar-menu ".concat("message" == i ? "-sidebar-menu-opened" : "", " "),
                                children: [(0, t.jsxs)("form", {
                                    onSubmit: h,
                                    className: "search-field rounded-8 h-50",
                                    children: [(0, t.jsx)("input", {
                                        required: !0,
                                        className: "bg-light-3 pr-50",
                                        type: "text",
                                        placeholder: "Search Courses"
                                    }), (0, t.jsx)("button", {
                                        className: "",
                                        type: "submit",
                                        children: (0, t.jsx)("i", {
                                            className: "icon-search text-light-1 text-20"
                                        })
                                    })]
                                }), (0, t.jsx)("div", {
                                    className: "accordion -block text-left pt-20 js-accordion",
                                    children: n.map((e, s) => (0, t.jsxs)("div", {
                                        onClick: () => o(s => s === e.id ? 0 : e.id),
                                        className: "accordion__item border-light rounded-16 ".concat(l === e.id ? "is-active" : ""),
                                        children: [(0, t.jsxs)("div", {
                                            className: "accordion__button",
                                            children: [(0, t.jsxs)("div", {
                                                className: "accordion__icon size-30 -dark-bg-dark-2 mr-10",
                                                children: [(0, t.jsx)("div", {
                                                    className: "icon d-flex items-center justify-center",
                                                    children: (0, t.jsx)("span", {
                                                        className: "lh-1 fw-500",
                                                        children: e.content.length
                                                    })
                                                }), (0, t.jsx)("div", {
                                                    className: "icon d-flex items-center justify-center",
                                                    children: (0, t.jsx)("span", {
                                                        className: "lh-1 fw-500",
                                                        children: e.content.length
                                                    })
                                                })]
                                            }), (0, t.jsx)("span", {
                                                className: "text-17 fw-500 text-dark-1 pt-3",
                                                children: e.title
                                            })]
                                        }), (0, t.jsx)("div", {
                                            className: "accordion__content",
                                            style: l === e.id ? {
                                                maxHeight: "340px"
                                            } : {},
                                            children: (0, t.jsx)("div", {
                                                className: "accordion__content__inner pl-20 pr-20 pb-20",
                                                children: e.content.map((e, s) => (0, t.jsxs)("div", {
                                                    "data-sidebar-menu-target": "messages-2",
                                                    onClick: () => r("messageTwo"),
                                                    className: "row x-gap-10 y-gap-10 pointer",
                                                    children: [(0, t.jsx)("div", {
                                                        className: "col-auto",
                                                        children: (0, t.jsx)(c(), {
                                                            width: 50,
                                                            height: 50,
                                                            src: e.imageSrc,
                                                            alt: "image"
                                                        })
                                                    }), (0, t.jsxs)("div", {
                                                        className: "col",
                                                        children: [(0, t.jsx)("div", {
                                                            className: "text-15 lh-12 fw-500 text-dark-1 pt-8",
                                                            children: e.name
                                                        }), (0, t.jsxs)("div", {
                                                            className: "text-14 lh-1 mt-5",
                                                            children: [(0, t.jsx)("span", {
                                                                className: "text-dark-1",
                                                                children: "You:"
                                                            }), e.message]
                                                        })]
                                                    }), (0, t.jsx)("div", {
                                                        className: "col-auto",
                                                        children: (0, t.jsx)("div", {
                                                            className: "text-13 lh-12 pt-8",
                                                            children: e.time
                                                        })
                                                    })]
                                                }, s))
                                            })
                                        })]
                                    }, s))
                                })]
                            }), (0, t.jsxs)("div", {
                                "data-sidebar-menu-open": "messages-2",
                                className: "sidebar-menu__item -sidebar-menu ".concat("messageTwo" == i ? "-sidebar-menu-opened" : ""),
                                children: [(0, t.jsxs)("div", {
                                    className: "row x-gap-10 y-gap-10",
                                    children: [(0, t.jsx)("div", {
                                        className: "col-auto",
                                        children: (0, t.jsx)(c(), {
                                            width: 50,
                                            height: 50,
                                            src: "/assets/img/dashboard/right-sidebar/messages-2/1.png",
                                            alt: "image"
                                        })
                                    }), (0, t.jsxs)("div", {
                                        className: "col",
                                        children: [(0, t.jsx)("div", {
                                            className: "text-15 lh-12 fw-500 text-dark-1 pt-8",
                                            children: "Arlene McCoy"
                                        }), (0, t.jsx)("div", {
                                            className: "text-14 lh-1 mt-5",
                                            children: "Active"
                                        })]
                                    })]
                                }), (0, t.jsx)("div", {
                                    className: "mt-20 pt-30 border-top-light",
                                    children: (0, t.jsxs)("div", {
                                        className: "row y-gap-20",
                                        children: [(0, t.jsxs)("div", {
                                            className: "col-12",
                                            children: [(0, t.jsxs)("div", {
                                                className: "row x-gap-10 y-gap-10 items-center",
                                                children: [(0, t.jsx)("div", {
                                                    className: "col-auto",
                                                    children: (0, t.jsx)(c(), {
                                                        width: 50,
                                                        height: 50,
                                                        src: "/assets/img/dashboard/right-sidebar/messages-2/2.png",
                                                        alt: "image"
                                                    })
                                                }), (0, t.jsx)("div", {
                                                    className: "col-auto",
                                                    children: (0, t.jsx)("div", {
                                                        className: "text-15 lh-12 fw-500 text-dark-1",
                                                        children: "Albert Flores"
                                                    })
                                                }), (0, t.jsx)("div", {
                                                    className: "col-auto",
                                                    children: (0, t.jsx)("div", {
                                                        className: "text-14 lh-1 ml-3",
                                                        children: "35 mins"
                                                    })
                                                })]
                                            }), (0, t.jsx)("div", {
                                                className: "bg-light-3 rounded-8 px-30 py-20 mt-15",
                                                children: "How likely are you to recommend our company to your friends and family?"
                                            })]
                                        }), (0, t.jsxs)("div", {
                                            className: "col-12",
                                            children: [(0, t.jsxs)("div", {
                                                className: "row x-gap-10 y-gap-10 items-center justify-end",
                                                children: [(0, t.jsx)("div", {
                                                    className: "col-auto",
                                                    children: (0, t.jsx)("div", {
                                                        className: "text-14 lh-1 mr-3",
                                                        children: "35 mins"
                                                    })
                                                }), (0, t.jsx)("div", {
                                                    className: "col-auto",
                                                    children: (0, t.jsx)("div", {
                                                        className: "text-15 lh-12 fw-500 text-dark-1",
                                                        children: "You"
                                                    })
                                                }), (0, t.jsx)("div", {
                                                    className: "col-auto",
                                                    children: (0, t.jsx)(c(), {
                                                        width: 50,
                                                        height: 50,
                                                        src: "/assets/img/dashboard/right-sidebar/messages-2/3.png",
                                                        alt: "image"
                                                    })
                                                })]
                                            }), (0, t.jsx)("div", {
                                                className: "text-right bg-light-7 -dark-bg-dark-2 text-purple-1 rounded-8 px-30 py-20 mt-15",
                                                children: "How likely are you to recommend our company to your friends and family?"
                                            })]
                                        }), (0, t.jsxs)("div", {
                                            className: "col-12",
                                            children: [(0, t.jsxs)("div", {
                                                className: "row x-gap-10 y-gap-10 items-center",
                                                children: [(0, t.jsx)("div", {
                                                    className: "col-auto",
                                                    children: (0, t.jsx)(c(), {
                                                        width: 50,
                                                        height: 50,
                                                        src: "/assets/img/dashboard/right-sidebar/messages-2/3.png",
                                                        alt: "image"
                                                    })
                                                }), (0, t.jsx)("div", {
                                                    className: "col-auto",
                                                    children: (0, t.jsx)("div", {
                                                        className: "text-15 lh-12 fw-500 text-dark-1",
                                                        children: "Cameron Williamson"
                                                    })
                                                }), (0, t.jsx)("div", {
                                                    className: "col-auto",
                                                    children: (0, t.jsx)("div", {
                                                        className: "text-14 lh-1 ml-3",
                                                        children: "35 mins"
                                                    })
                                                })]
                                            }), (0, t.jsx)("div", {
                                                className: "bg-light-3 rounded-8 px-30 py-20 mt-15",
                                                children: "Ok, Understood!"
                                            })]
                                        })]
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "mt-30 pb-20",
                                    children: (0, t.jsxs)("form", {
                                        onSubmit: h,
                                        className: "contact-form row y-gap-20",
                                        action: "post",
                                        children: [(0, t.jsx)("div", {
                                            className: "col-12",
                                            children: (0, t.jsx)("textarea", {
                                                required: !0,
                                                placeholder: "Write a message",
                                                rows: "7"
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: "col-12",
                                            children: (0, t.jsx)("button", {
                                                type: "submit",
                                                className: "button -md -purple-1 text-white",
                                                children: "Send Message"
                                            })
                                        })]
                                    })
                                })]
                            }), (0, t.jsx)("div", {
                                "data-sidebar-menu-open": "contacts",
                                className: "sidebar-menu__item -sidebar-menu ".concat("contacts" == i ? "-sidebar-menu-opened" : ""),
                                children: (0, t.jsxs)("div", {
                                    className: "tabs -pills js-tabs",
                                    children: [(0, t.jsxs)("div", {
                                        className: "tabs__controls d-flex js-tabs-controls",
                                        children: [(0, t.jsx)("button", {
                                            onClick: () => x(1),
                                            className: "tabs__button px-15 py-8 rounded-8 text-dark-1 js-tabs-button ".concat(1 == m ? "is-active" : "", " "),
                                            "data-tab-target": ".-tab-item-1",
                                            type: "button",
                                            children: "Contacts"
                                        }), (0, t.jsx)("button", {
                                            onClick: () => x(2),
                                            className: "tabs__button px-15 py-8 rounded-8 text-dark-1 js-tabs-button ".concat(2 == m ? "is-active" : "", " "),
                                            "data-tab-target": ".-tab-item-2",
                                            type: "button",
                                            children: "Request"
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "tabs__content pt-30 js-tabs-content",
                                        children: [(0, t.jsx)("div", {
                                            className: "tabs__pane -tab-item-1  ".concat(1 == m ? "is-active" : "", " "),
                                            children: (0, t.jsxs)("div", {
                                                className: "row x-gap-10 y-gap-10 items-center",
                                                children: [(0, t.jsx)("div", {
                                                    className: "col-auto",
                                                    children: (0, t.jsx)(c(), {
                                                        width: 50,
                                                        height: 50,
                                                        src: "/assets/img/dashboard/right-sidebar/contacts/1.png",
                                                        alt: "image"
                                                    })
                                                }), (0, t.jsx)("div", {
                                                    className: "col-auto",
                                                    children: (0, t.jsx)("div", {
                                                        className: "text-15 lh-12 fw-500 text-dark-1",
                                                        children: "Darlene Robertson"
                                                    })
                                                })]
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: "tabs__pane -tab-item-2 ".concat(2 == m ? "is-active" : "", " "),
                                            children: (0, t.jsxs)("div", {
                                                className: "row x-gap-10 y-gap-10 items-center",
                                                children: [(0, t.jsx)("div", {
                                                    className: "col-auto",
                                                    children: (0, t.jsx)(c(), {
                                                        width: 50,
                                                        height: 50,
                                                        src: "/assets/img/dashboard/right-sidebar/contacts/1.png",
                                                        alt: "image"
                                                    })
                                                }), (0, t.jsx)("div", {
                                                    className: "col-auto",
                                                    children: (0, t.jsx)("div", {
                                                        className: "text-15 lh-12 fw-500 text-dark-1",
                                                        children: "Darlene Robertson"
                                                    })
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            }), (0, t.jsxs)("div", {
                                "data-sidebar-menu-open": "settings",
                                className: "sidebar-menu__item -sidebar-menu ".concat("settings" == i ? "-sidebar-menu-opened" : ""),
                                children: [(0, t.jsx)("div", {
                                    className: "text-17 text-dark-1 fw-500",
                                    children: "Privacy"
                                }), (0, t.jsx)("div", {
                                    className: "text-15 mt-5",
                                    children: "You can restrict who can message you"
                                }), (0, t.jsxs)("div", {
                                    className: "mt-30",
                                    children: [(0, t.jsxs)("div", {
                                        className: "form-radio d-flex items-center ",
                                        children: [(0, t.jsxs)("div", {
                                            className: "radio",
                                            children: [(0, t.jsx)("input", {
                                                type: "radio"
                                            }), (0, t.jsx)("div", {
                                                className: "radio__mark",
                                                children: (0, t.jsx)("div", {
                                                    className: "radio__icon"
                                                })
                                            })]
                                        }), (0, t.jsx)("div", {
                                            className: "lh-1 text-13 text-dark-1 ml-12",
                                            children: "My contacts only"
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "form-radio d-flex items-center mt-15",
                                        children: [(0, t.jsxs)("div", {
                                            className: "radio",
                                            children: [(0, t.jsx)("input", {
                                                type: "radio"
                                            }), (0, t.jsx)("div", {
                                                className: "radio__mark",
                                                children: (0, t.jsx)("div", {
                                                    className: "radio__icon"
                                                })
                                            })]
                                        }), (0, t.jsx)("div", {
                                            className: "lh-1 text-13 text-dark-1 ml-12",
                                            children: "My contacts and anyone in my courses"
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "form-radio d-flex items-center mt-15",
                                        children: [(0, t.jsxs)("div", {
                                            className: "radio",
                                            children: [(0, t.jsx)("input", {
                                                type: "radio"
                                            }), (0, t.jsx)("div", {
                                                className: "radio__mark",
                                                children: (0, t.jsx)("div", {
                                                    className: "radio__icon"
                                                })
                                            })]
                                        }), (0, t.jsx)("div", {
                                            className: "lh-1 text-13 text-dark-1 ml-12",
                                            children: "Anyone on the site"
                                        })]
                                    })]
                                }), (0, t.jsx)("div", {
                                    className: "text-17 text-dark-1 fw-500 mt-30 mb-30",
                                    children: "Notification preferences"
                                }), (0, t.jsxs)("div", {
                                    className: "form-switch d-flex items-center",
                                    children: [(0, t.jsxs)("div", {
                                        className: "switch",
                                        children: [(0, t.jsx)("input", {
                                            type: "checkbox"
                                        }), (0, t.jsx)("span", {
                                            className: "switch__slider"
                                        })]
                                    }), (0, t.jsx)("div", {
                                        className: "text-13 lh-1 text-dark-1 ml-10",
                                        children: "Email"
                                    })]
                                }), (0, t.jsx)("div", {
                                    className: "text-17 text-dark-1 fw-500 mt-30 mb-30",
                                    children: "General"
                                }), (0, t.jsxs)("div", {
                                    className: "form-switch d-flex items-center",
                                    children: [(0, t.jsxs)("div", {
                                        className: "switch",
                                        children: [(0, t.jsx)("input", {
                                            type: "checkbox"
                                        }), (0, t.jsx)("span", {
                                            className: "switch__slider"
                                        })]
                                    }), (0, t.jsx)("div", {
                                        className: "text-13 lh-1 text-dark-1 ml-10",
                                        children: "Use enter to send"
                                    })]
                                })]
                            })]
                        })]
                    })]
                })
            }
        },
        36337: function(e, s, a) {
            a.d(s, {
                Z: function() {
                    return c
                }
            });
            var t = a(9268);
            a(86006);
            var i = a(80808);

            function c() {
                return (0, t.jsx)("footer", {
                    className: "footer",
                    children: (0, t.jsx)("div", {
                        className: "container",
                        children: (0, t.jsx)("div", {
                            className: "py-30 border-top-light",
                            children: (0, t.jsxs)("div", {
                                className: "row items-center justify-between",
                                children: [(0, t.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, t.jsxs)("div", {
                                        className: "text-13 lh-1",
                                        children: ["\xa9 ", new Date().getFullYear(), " Educrat. All Right Reserved."]
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "col-auto",
                                    children: (0, t.jsxs)("div", {
                                        className: "d-flex items-center",
                                        children: [(0, t.jsx)("div", {
                                            className: "d-flex items-center flex-wrap x-gap-20",
                                            children: (0, t.jsx)(i.Z, {})
                                        }), (0, t.jsx)("button", {
                                            className: "button -md -rounded bg-light-4 text-light-1 ml-30",
                                            children: "English"
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                })
            }
        },
        30866: function(e, s, a) {
            a.d(s, {
                z: function() {
                    return t
                }
            });
            let t = [{
                id: 1,
                href: "/dashboard",
                iconClass: "text-20 icon-discovery",
                text: "Dashboard"
            }, {
                id: 2,
                href: "/dshb-courses",
                iconClass: "text-20 icon-play-button",
                text: "My Courses"
            }, {
                id: 3,
                href: "/dshb-bookmarks",
                iconClass: "text-20 icon-bookmark",
                text: "Bookmarks"
            }, {
                id: 4,
                href: "/dshb-messages",
                iconClass: "text-20 icon-message",
                text: "Messages"
            }, {
                id: 5,
                href: "/dshb-listing",
                iconClass: "text-20 icon-list",
                text: "Create Course"
            }, {
                id: 6,
                href: "/dshb-reviews",
                iconClass: "text-20 icon-comment",
                text: "Reviews"
            }, {
                id: 7,
                href: "/dshb-settings",
                iconClass: "text-20 icon-setting",
                text: "Settings"
            }, {
                id: 8,
                href: "/",
                iconClass: "text-20 icon-power",
                text: "Logout"
            }]
        },
        68822: function(e, s, a) {
            a.d(s, {
                N: function() {
                    return t
                }
            });
            let t = [{
                id: 1,
                imageSrc: "/assets/img/dashboard/actions/1.png",
                heading: "Your resume updated!",
                time: 1
            }, {
                id: 2,
                imageSrc: "/assets/img/dashboard/actions/2.png",
                heading: "You changed password",
                time: 1
            }, {
                id: 3,
                imageSrc: "/assets/img/dashboard/actions/3.png",
                heading: "Your account has been created successfully",
                time: 1
            }, {
                id: 4,
                imageSrc: "/assets/img/dashboard/actions/4.png",
                heading: "You applied for a job Front-end Developer",
                time: 1
            }, {
                id: 5,
                imageSrc: "/assets/img/dashboard/actions/5.png",
                heading: "Your course uploaded successfully",
                time: 1
            }]
        }
    }
]);