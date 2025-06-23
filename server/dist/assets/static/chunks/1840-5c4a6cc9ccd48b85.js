"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1840], {
        71840: function(e, i, a) {
            a.d(i, {
                Z: function() {
                    return d
                },
                o: function() {
                    return u
                }
            });
            var t = a(9268),
                n = a(68148),
                r = a(29707),
                o = a(31092),
                s = a(86006);
            let g = s.createContext(),
                u = () => (0, s.useContext)(g);

            function d(e) {
                let {
                    children: i
                } = e, [a, u] = (0, s.useState)([]), [d, l] = (0, s.useState)([]), [c, m] = (0, s.useState)([]);
                return (0, t.jsx)(g.Provider, {
                    value: {
                        cartProducts: a,
                        setCartProducts: u,
                        addProductToCart: e => {
                            if (!a.filter(i => i.id == e)[0]) {
                                let i = { ...o.JV.filter(i => i.id == e)[0],
                                    quantity: 1
                                };
                                u(e => [...e, i])
                            }
                        },
                        isAddedToCartProducts: e => !!a.filter(i => i.id == e)[0],
                        addCourseToCart: e => {
                            if (!d.filter(i => i.id == e)[0]) {
                                let i = { ...n.om.filter(i => i.id == e)[0],
                                    quantity: 1
                                };
                                l(e => [...e, i])
                            }
                        },
                        isAddedToCartCourses: e => !!d.filter(i => i.id == e)[0],
                        cartCourses: d,
                        setCartCourses: l,
                        cartEvents: c,
                        setCartEvents: m,
                        addEventToCart: e => {
                            if (!c.filter(i => i.id == e)[0]) {
                                let i = { ...r.U3.filter(i => i.id == e)[0],
                                    quantity: 1
                                };
                                m(e => [...e, i])
                            }
                        },
                        isAddedToCartEvents: e => !!c.filter(i => i.id == e)[0]
                    },
                    children: i
                })
            }
        },
        68148: function(e, i, a) {
            a.d(i, {
                DW: function() {
                    return s
                },
                Hj: function() {
                    return h
                },
                JJ: function() {
                    return p
                },
                Lp: function() {
                    return g
                },
                MZ: function() {
                    return r
                },
                Mj: function() {
                    return c
                },
                Q8: function() {
                    return o
                },
                bb: function() {
                    return C
                },
                bd: function() {
                    return y
                },
                gr: function() {
                    return m
                },
                om: function() {
                    return t
                },
                pJ: function() {
                    return d
                },
                po: function() {
                    return n
                },
                x9: function() {
                    return w
                },
                z3: function() {
                    return l
                },
                zV: function() {
                    return u
                }
            });
            let t = [{
                    id: 1,
                    imageSrc: "/assets/img/coursesCards/6.png",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    title: "Learn Figma - UI/UX Design Essential Training",
                    rating: 4.3,
                    ratingCount: 1991,
                    lessonCount: 6,
                    duration: 1320,
                    level: "Beginner",
                    originalPrice: 199,
                    discountedPrice: 79,
                    paid: !0,
                    category: "Design",
                    state: "Popular",
                    languange: "French",
                    authorName: "Jane Cooper",
                    viewStatus: "Good",
                    difficulty: "Easy",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 2,
                    imageSrc: "/assets/img/coursesCards/9.png",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    title: "Complete Python Bootcamp From Zero to Hero in Python",
                    rating: 4.7,
                    ratingCount: 1991,
                    lessonCount: 6,
                    duration: 410,
                    level: "Expert",
                    originalPrice: 189,
                    discountedPrice: 89,
                    paid: !0,
                    category: "Programming",
                    languange: "German",
                    authorName: "Jenny Wilson",
                    popular: !0,
                    new: !0,
                    bestSeller: !0,
                    state: "Fetured",
                    viewStatus: "Low",
                    difficulty: "Easy",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 3,
                    imageSrc: "/assets/img/coursesCards/6.png",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    title: "Angular - The Complete Guide (2022 Edition)",
                    rating: 4.5,
                    ratingCount: 1991,
                    lessonCount: 6,
                    duration: 1220,
                    level: "Intermediate",
                    originalPrice: 249,
                    discountedPrice: 129,
                    languange: "Italian",
                    authorName: "Albert Flores",
                    paid: !0,
                    category: "Programming",
                    state: "Trending",
                    viewStatus: "Great",
                    difficulty: "Easy",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 4,
                    imageSrc: "/assets/img/coursesCards/1.png",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    title: "The Ultimate Drawing Course Beginner to Advanced",
                    rating: 4.2,
                    ratingCount: 1991,
                    lessonCount: 6,
                    duration: 1020,
                    level: "Expert",
                    originalPrice: 179,
                    discountedPrice: 99,
                    languange: "English",
                    authorName: "Jacob Jones",
                    paid: !0,
                    category: "Art",
                    state: "Trending",
                    viewStatus: "Good",
                    difficulty: "Easy",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 5,
                    imageSrc: "/assets/img/coursesCards/11.png",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    title: "Photography Masterclass: A Complete Guide to Photography",
                    rating: 3.8,
                    ratingCount: 1991,
                    lessonCount: 6,
                    duration: 250,
                    level: "Intermediate",
                    originalPrice: 169,
                    discountedPrice: 79,
                    paid: !0,
                    category: "Photography",
                    languange: "French",
                    authorName: "Robert Fox",
                    state: "Popular",
                    viewStatus: "Low",
                    difficulty: "Meduium",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 6,
                    imageSrc: "/assets/img/coursesCards/2.png",
                    imageAlt: "image",
                    rating: 4.6,
                    ratingCount: 1991,
                    title: "Complete Blender Creator: Learn 3D Modelling for Beginners",
                    lessonCount: 6,
                    duration: 800,
                    level: "Expert",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    languange: "German",
                    authorName: "Jane Cooper",
                    originalPrice: 209,
                    discountedPrice: 99,
                    paid: !0,
                    category: "Animation",
                    state: "Fetured",
                    viewStatus: "Good",
                    difficulty: "Meduium",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 7,
                    imageSrc: "/assets/img/coursesCards/7.png",
                    imageAlt: "image",
                    rating: 3.5,
                    ratingCount: 1991,
                    title: "The Complete Financial Analyst Training & Investing Course",
                    lessonCount: 6,
                    duration: 490,
                    level: "Intermediate",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    languange: "Italian",
                    authorName: "Jenny Wilson",
                    originalPrice: 299,
                    discountedPrice: 149,
                    paid: !0,
                    category: "Writing",
                    state: "Popular",
                    viewStatus: "Great",
                    difficulty: "Hard",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 8,
                    imageSrc: "/assets/img/coursesCards/5.png",
                    imageAlt: "image",
                    rating: 4.8,
                    ratingCount: 1991,
                    title: "Photography Masterclass: A Complete Guide to Photography",
                    lessonCount: 6,
                    duration: 500,
                    level: "Expert",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    languange: "English",
                    authorName: "Albert Flores",
                    originalPrice: 219,
                    discountedPrice: 109,
                    paid: !0,
                    category: "Photography",
                    state: "Fetured",
                    viewStatus: "Medium",
                    difficulty: "Meduium",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 9,
                    imageSrc: "/assets/img/coursesCards/6.png",
                    imageAlt: "image",
                    rating: 3.9,
                    ratingCount: 1991,
                    title: "Complete Python Bootcamp From Zero to Hero in Python",
                    lessonCount: 6,
                    duration: 920,
                    level: "Intermediate",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    languange: "French",
                    authorName: "Jacob Jones",
                    originalPrice: 199,
                    discountedPrice: 89,
                    paid: !0,
                    category: "Programming",
                    state: "Popular",
                    viewStatus: "Great",
                    difficulty: "Hard",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 10,
                    imageSrc: "/assets/img/coursesCards/5.png",
                    imageAlt: "image",
                    rating: 4.2,
                    ratingCount: 1991,
                    title: "Angular - The Complete Guide (2022 Edition)",
                    lessonCount: 6,
                    duration: 720,
                    level: "Beginner",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    languange: "German",
                    authorName: "Robert Fox",
                    originalPrice: 189,
                    discountedPrice: 99,
                    paid: !0,
                    category: "Writing",
                    state: "Trending",
                    viewStatus: "Medium",
                    difficulty: "Meduium",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 11,
                    imageSrc: "/assets/img/coursesCards/2.png",
                    imageAlt: "image",
                    rating: 5,
                    ratingCount: 1991,
                    title: "Web Design for Beginners: Real World Coding in HTML & CSS",
                    lessonCount: 6,
                    duration: 120,
                    level: "Intermediate",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    languange: "Italian",
                    authorName: "Jane Cooper",
                    originalPrice: 209,
                    discountedPrice: 119,
                    paid: !0,
                    category: "Design",
                    state: "Popular",
                    viewStatus: "Medium",
                    difficulty: "Hard",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 12,
                    imageSrc: "/assets/img/coursesCards/4.png",
                    imageAlt: "image",
                    rating: 5,
                    ratingCount: 1991,
                    title: "The Ultimate Drawing Course Beginner to Advanced",
                    lessonCount: 6,
                    duration: 1440,
                    level: "Beginner",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    languange: "English",
                    authorName: "Jenny Wilson",
                    originalPrice: 209,
                    discountedPrice: 119,
                    paid: !0,
                    category: "Design",
                    state: "Popular",
                    viewStatus: "Medium",
                    difficulty: "Hard",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 13,
                    imageSrc: "/assets/img/coursesCards/10.png",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    title: "Advanced JavaScript: Exploring ES6 and Beyond",
                    rating: 4.3,
                    ratingCount: 1991,
                    lessonCount: 6,
                    duration: 1320,
                    level: "Intermediate",
                    originalPrice: 199,
                    discountedPrice: 79,
                    paid: !0,
                    category: "Design",
                    state: "Popular",
                    languange: "French",
                    authorName: "Albert Flores",
                    viewStatus: "Good",
                    difficulty: "Easy",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 14,
                    imageSrc: "/assets/img/coursesCards/8.png",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    title: "Python for Data Analysis: NumPy, Pandas, and Matplotlib",
                    rating: 4.7,
                    ratingCount: 1991,
                    lessonCount: 6,
                    duration: 410,
                    level: "Beginner",
                    originalPrice: 189,
                    discountedPrice: 89,
                    paid: !0,
                    category: "Programming",
                    languange: "German",
                    authorName: "Jacob Jones",
                    popular: !0,
                    new: !0,
                    bestSeller: !0,
                    state: "Fetured",
                    viewStatus: "Low",
                    difficulty: "Easy",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 15,
                    imageSrc: "/assets/img/coursesCards/6.png",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    title: "Building Responsive Websites with Bootstrap 5",
                    rating: 4.5,
                    ratingCount: 1991,
                    lessonCount: 6,
                    duration: 1220,
                    level: "Intermediate",
                    originalPrice: 249,
                    discountedPrice: 129,
                    languange: "Italian",
                    authorName: "Robert Fox",
                    paid: !0,
                    category: "Programming",
                    state: "Trending",
                    viewStatus: "Great",
                    difficulty: "Easy",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 16,
                    imageSrc: "/assets/img/coursesCards/7.png",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    title: "Social Media Marketing: Strategies for Growing Your Audience",
                    rating: 4.2,
                    ratingCount: 1991,
                    lessonCount: 6,
                    duration: 1020,
                    level: "Beginner",
                    originalPrice: 179,
                    discountedPrice: 99,
                    languange: "English",
                    authorName: "Jane Cooper",
                    paid: !0,
                    category: "Art",
                    state: "Trending",
                    viewStatus: "Good",
                    difficulty: "Easy",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 17,
                    imageSrc: "/assets/img/coursesCards/10.png",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    title: "Landscape Photography: Capturing Nature's Beauty",
                    rating: 3.8,
                    ratingCount: 1991,
                    lessonCount: 6,
                    duration: 250,
                    level: "Intermediate",
                    originalPrice: 169,
                    discountedPrice: 79,
                    paid: !0,
                    category: "Photography",
                    languange: "French",
                    authorName: "Jenny Wilson",
                    state: "Popular",
                    viewStatus: "Low",
                    difficulty: "Meduium",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 18,
                    imageSrc: "/assets/img/coursesCards/1.png",
                    imageAlt: "image",
                    rating: 4.6,
                    ratingCount: 1991,
                    title: "Unity 3D Game Development: Create Your First FPS Game",
                    lessonCount: 6,
                    duration: 800,
                    level: "Expert",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    languange: "German",
                    authorName: "Albert Flores",
                    originalPrice: 209,
                    discountedPrice: 99,
                    paid: !0,
                    category: "Animation",
                    state: "Fetured",
                    viewStatus: "Good",
                    difficulty: "Meduium",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 19,
                    imageSrc: "/assets/img/coursesCards/2.png",
                    imageAlt: "image",
                    rating: 3.5,
                    ratingCount: 1991,
                    title: "Personal Finance and Investing: Securing Your Financial Future",
                    lessonCount: 6,
                    duration: 490,
                    level: "Intermediate",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    languange: "Italian",
                    authorName: "Jacob Jones",
                    originalPrice: 299,
                    discountedPrice: 149,
                    paid: !0,
                    category: "Writing",
                    state: "Popular",
                    viewStatus: "Great",
                    difficulty: "Hard",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 20,
                    imageSrc: "/assets/img/coursesCards/4.png",
                    imageAlt: "image",
                    rating: 4.8,
                    ratingCount: 1991,
                    title: "Graphic Design Principles: Layouts, Typography, and Color Theory",
                    lessonCount: 6,
                    duration: 500,
                    level: "Expert",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    languange: "English",
                    authorName: "Robert Fox",
                    originalPrice: 219,
                    discountedPrice: 109,
                    paid: !0,
                    category: "Photography",
                    state: "Fetured",
                    viewStatus: "Medium",
                    difficulty: "Meduium",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 21,
                    imageSrc: "/assets/img/coursesCards/2.png",
                    imageAlt: "image",
                    rating: 3.9,
                    ratingCount: 1991,
                    title: "Node.js and Express.js: Creating Web Applications",
                    lessonCount: 6,
                    duration: 920,
                    level: "Intermediate",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    languange: "French",
                    authorName: "Jane Cooper",
                    originalPrice: 199,
                    discountedPrice: 89,
                    paid: !0,
                    category: "Programming",
                    state: "Popular",
                    viewStatus: "Great",
                    difficulty: "Hard",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 22,
                    imageSrc: "/assets/img/coursesCards/4.png",
                    imageAlt: "image",
                    rating: 4.2,
                    ratingCount: 1991,
                    title: "Android App Development: Building Dynamic Mobile Apps",
                    lessonCount: 6,
                    duration: 720,
                    level: "Expert",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    languange: "German",
                    authorName: "Jenny Wilson",
                    originalPrice: 0,
                    discountedPrice: 0,
                    paid: !1,
                    category: "Writing",
                    state: "Trending",
                    viewStatus: "Medium",
                    difficulty: "Meduium",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 23,
                    imageSrc: "/assets/img/coursesCards/6.png",
                    imageAlt: "image",
                    rating: 5,
                    ratingCount: 1991,
                    title: "Machine Learning in Python: Hands-On Projects",
                    lessonCount: 6,
                    duration: 120,
                    level: "Intermediate",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    languange: "Italian",
                    authorName: "Albert Flores",
                    originalPrice: 209,
                    discountedPrice: 119,
                    paid: !0,
                    category: "Design",
                    state: "Popular",
                    viewStatus: "Medium",
                    difficulty: "Hard",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 24,
                    imageSrc: "/assets/img/coursesCards/6.png",
                    imageAlt: "image",
                    rating: 5,
                    ratingCount: 1991,
                    title: "Creative Writing Masterclass: Crafting Compelling Stories",
                    lessonCount: 6,
                    duration: 120,
                    level: "Beginner",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    languange: "French",
                    authorName: "Jacob Jones",
                    originalPrice: 0,
                    discountedPrice: 0,
                    paid: !1,
                    category: "Design",
                    state: "Popular",
                    viewStatus: "Medium",
                    difficulty: "Hard",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 25,
                    imageSrc: "/assets/img/coursesCards/2.png",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    title: "Front-End Web Development: HTML, CSS, and JavaScript Fundamentals",
                    rating: 4.3,
                    ratingCount: 1991,
                    lessonCount: 6,
                    duration: 1320,
                    level: "Intermediate",
                    originalPrice: 199,
                    discountedPrice: 79,
                    paid: !0,
                    category: "Design",
                    state: "Popular",
                    languange: "English",
                    authorName: "Robert Fox",
                    viewStatus: "Good",
                    difficulty: "Easy",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 26,
                    imageSrc: "/assets/img/coursesCards/10.png",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    title: "Data Visualization with Tableau: Creating Informative Dashboards",
                    rating: 4.7,
                    ratingCount: 1991,
                    lessonCount: 6,
                    duration: 410,
                    level: "Expert",
                    originalPrice: 0,
                    discountedPrice: 0,
                    paid: !1,
                    category: "Programming",
                    languange: "German",
                    authorName: "Albert Flores",
                    popular: !0,
                    new: !0,
                    bestSeller: !0,
                    state: "Fetured",
                    viewStatus: "Low",
                    difficulty: "Easy",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 27,
                    imageSrc: "/assets/img/coursesCards/6.png",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    title: "Digital Illustration: Bringing Your Imagination to Life",
                    rating: 4.5,
                    ratingCount: 1991,
                    lessonCount: 6,
                    duration: 1220,
                    level: "Expert",
                    originalPrice: 249,
                    discountedPrice: 129,
                    languange: "Italian",
                    authorName: "Jane Cooper",
                    paid: !0,
                    category: "Programming",
                    state: "Trending",
                    viewStatus: "Great",
                    difficulty: "Easy",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 28,
                    imageSrc: "/assets/img/coursesCards/6.png",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    title: "Java Enterprise Edition (EE): Building Scalable Web Applications",
                    rating: 4.2,
                    ratingCount: 1991,
                    lessonCount: 6,
                    duration: 1020,
                    level: "Beginner",
                    originalPrice: 0,
                    discountedPrice: 0,
                    languange: "French",
                    authorName: "Jenny Wilson",
                    paid: !1,
                    category: "Art",
                    state: "Trending",
                    viewStatus: "Good",
                    difficulty: "Easy",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 29,
                    imageSrc: "/assets/img/coursesCards/6.png",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    title: "iOS App Design: User Interface and User Experience (UI/UX)",
                    rating: 3.8,
                    ratingCount: 1991,
                    lessonCount: 6,
                    duration: 250,
                    level: "Expert",
                    originalPrice: 169,
                    discountedPrice: 79,
                    paid: !0,
                    category: "Photography",
                    languange: "English",
                    authorName: "Jacob Jones",
                    state: "Popular",
                    viewStatus: "Low",
                    difficulty: "Meduium",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 30,
                    imageSrc: "/assets/img/coursesCards/9.png",
                    imageAlt: "image",
                    rating: 4.6,
                    ratingCount: 1991,
                    title: "Introduction to Artificial Intelligence: Concepts and Applications",
                    lessonCount: 6,
                    duration: 800,
                    level: "Beginner",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    languange: "German",
                    authorName: "Albert Flores",
                    originalPrice: 0,
                    discountedPrice: 0,
                    paid: !1,
                    category: "Animation",
                    state: "Fetured",
                    viewStatus: "Good",
                    difficulty: "Meduium",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 31,
                    imageSrc: "/assets/img/coursesCards/7.png",
                    imageAlt: "image",
                    rating: 3.5,
                    ratingCount: 1991,
                    title: "Video Editing with Adobe Premiere Pro: From Shoot to Final Cut",
                    lessonCount: 6,
                    duration: 490,
                    level: "Expert",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    languange: "Italian",
                    authorName: "Albert Flores",
                    originalPrice: 299,
                    discountedPrice: 149,
                    paid: !0,
                    category: "Writing",
                    state: "Popular",
                    viewStatus: "Great",
                    difficulty: "Hard",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 32,
                    imageSrc: "/assets/img/coursesCards/9.png",
                    imageAlt: "image",
                    rating: 4.8,
                    ratingCount: 1991,
                    title: "Cybersecurity Essentials: Protecting Your Digital World",
                    lessonCount: 6,
                    duration: 500,
                    level: "Beginner",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    languange: "French",
                    authorName: "Jane Cooper",
                    originalPrice: 0,
                    discountedPrice: 0,
                    paid: !1,
                    category: "Photography",
                    state: "Fetured",
                    viewStatus: "Medium",
                    difficulty: "Meduium",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 33,
                    imageSrc: "/assets/img/coursesCards/10.png",
                    imageAlt: "image",
                    rating: 3.9,
                    ratingCount: 1991,
                    title: "Photography Post-Processing: Enhancing and Editing Your Images",
                    lessonCount: 6,
                    duration: 920,
                    level: "Expert",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    languange: "English",
                    authorName: "Jenny Wilson",
                    originalPrice: 199,
                    discountedPrice: 89,
                    paid: !0,
                    category: "Programming",
                    state: "Popular",
                    viewStatus: "Great",
                    difficulty: "Hard",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 34,
                    imageSrc: "/assets/img/coursesCards/12.png",
                    imageAlt: "image",
                    rating: 4.2,
                    ratingCount: 1991,
                    title: "Full-Stack Web Development with MERN: MongoDB, Express.js, React, Node.js",
                    lessonCount: 6,
                    duration: 720,
                    level: "Beginner",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    languange: "German",
                    authorName: "Jacob Jones",
                    originalPrice: 0,
                    discountedPrice: 0,
                    paid: !1,
                    category: "Writing",
                    state: "Trending",
                    viewStatus: "Medium",
                    difficulty: "Meduium",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 35,
                    imageSrc: "/assets/img/coursesCards/6.png",
                    imageAlt: "image",
                    rating: 5,
                    ratingCount: 1991,
                    title: "Content Marketing Strategy: Engaging Your Target Audience",
                    lessonCount: 6,
                    duration: 120,
                    level: "Intermediate",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    languange: "Italian",
                    authorName: "Albert Flores",
                    originalPrice: 209,
                    discountedPrice: 119,
                    paid: !0,
                    category: "Design",
                    state: "Popular",
                    viewStatus: "Medium",
                    difficulty: "Hard",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 36,
                    imageSrc: "/assets/img/coursesCards/1.png",
                    imageAlt: "image",
                    rating: 5,
                    ratingCount: 1991,
                    title: "Wildlife Photography: Capturing Animals in Their Natural Habitat",
                    lessonCount: 6,
                    duration: 120,
                    level: "Expert",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    languange: "French",
                    authorName: "Albert Flores",
                    originalPrice: 0,
                    discountedPrice: 0,
                    paid: !1,
                    category: "Design",
                    state: "Popular",
                    viewStatus: "Medium",
                    difficulty: "Hard",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 37,
                    imageSrc: "/assets/img/coursesCards/12.png",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    title: "Game Design and Storytelling: Creating Immersive Gaming Experiences",
                    rating: 4.3,
                    ratingCount: 1991,
                    lessonCount: 6,
                    duration: 1320,
                    level: "Intermediate",
                    originalPrice: 199,
                    discountedPrice: 79,
                    paid: !0,
                    category: "Design",
                    state: "Popular",
                    languange: "English",
                    authorName: "Jane Cooper",
                    viewStatus: "Good",
                    difficulty: "Easy",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 38,
                    imageSrc: "/assets/img/coursesCards/1.png",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    title: "Financial Planning for Retirement: Securing Your Golden Years",
                    rating: 4.7,
                    ratingCount: 1991,
                    lessonCount: 6,
                    duration: 410,
                    level: "Expert",
                    originalPrice: 0,
                    discountedPrice: 0,
                    paid: !1,
                    category: "Programming",
                    languange: "German",
                    authorName: "Jenny Wilson",
                    popular: !0,
                    new: !0,
                    bestSeller: !0,
                    state: "Fetured",
                    viewStatus: "Low",
                    difficulty: "Easy",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 39,
                    imageSrc: "/assets/img/coursesCards/11.png",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    title: "User Interface (UI) Design Fundamentals: Principles and Best Practices",
                    rating: 4.5,
                    ratingCount: 1991,
                    lessonCount: 6,
                    duration: 1220,
                    level: "Intermediate",
                    originalPrice: 249,
                    discountedPrice: 129,
                    languange: "Italian",
                    authorName: "Robert Fox",
                    paid: !0,
                    category: "Programming",
                    state: "Trending",
                    viewStatus: "Great",
                    difficulty: "Easy",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 40,
                    imageSrc: "/assets/img/coursesCards/8.png",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    title: "Python Web Scraping: Extracting Data from Websites",
                    rating: 4.2,
                    ratingCount: 1991,
                    lessonCount: 6,
                    duration: 1020,
                    level: "Beginner",
                    originalPrice: 179,
                    discountedPrice: 99,
                    languange: "French",
                    authorName: "Jacob Jones",
                    paid: !0,
                    category: "Art",
                    state: "Trending",
                    viewStatus: "Good",
                    difficulty: "Easy",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 41,
                    imageSrc: "/assets/img/coursesCards/3.png",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    title: "Digital Marketing Analytics: Measuring and Optimizing Campaigns",
                    rating: 3.8,
                    ratingCount: 1991,
                    lessonCount: 6,
                    duration: 250,
                    level: "Expert",
                    originalPrice: 169,
                    discountedPrice: 79,
                    paid: !0,
                    category: "Photography",
                    languange: "English",
                    authorName: "Jacob Jones",
                    state: "Popular",
                    viewStatus: "Low",
                    difficulty: "Meduium",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 42,
                    imageSrc: "/assets/img/coursesCards/11.png",
                    imageAlt: "image",
                    rating: 4.6,
                    ratingCount: 1991,
                    title: "Adobe Illustrator Mastery: Creating Vector Artwork",
                    lessonCount: 6,
                    duration: 800,
                    level: "Beginner",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    languange: "German",
                    authorName: "Jane Cooper",
                    originalPrice: 209,
                    discountedPrice: 99,
                    paid: !0,
                    category: "Animation",
                    state: "Fetured",
                    viewStatus: "Good",
                    difficulty: "Meduium",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }, {
                    id: 43,
                    imageSrc: "/assets/img/coursesCards/1.png",
                    imageAlt: "image",
                    rating: 3.5,
                    ratingCount: 1991,
                    title: "Ruby on Rails: Building Web Applications with Ease",
                    lessonCount: 6,
                    duration: 490,
                    level: "Intermediate",
                    authorImageSrc: "/assets/img/general/avatar-1.png",
                    languange: "Italian",
                    authorName: "Jenny Wilson",
                    originalPrice: 299,
                    discountedPrice: 149,
                    paid: !0,
                    category: "Writing",
                    state: "Popular",
                    viewStatus: "Great",
                    difficulty: "Hard",
                    desc: "Introductory course on web hosting, domain registration, and how you can easily publish and edit your website online."
                }],
                n = ["All Categories", "Animation", "Design", "Photography", "Art", "Programming", "Writing"],
                r = ["All", "Fetured", "Popular", "Trending"],
                o = ["All", "Great", "Good", "Medium", "Low"],
                s = [{
                    id: 1,
                    imageSrc: "/assets/img/dashboard/recent-courses/1.png",
                    title: "Complete Python Bootcamp From Zero to Hero in Python",
                    author: "Ali Tufan",
                    authorImg: "/assets/img/general/avatar-1.png",
                    lessonCount: 6,
                    duration: 236
                }, {
                    id: 2,
                    imageSrc: "/assets/img/dashboard/recent-courses/2.png",
                    title: "The Ultimate Drawing Course Beginner to Advanced",
                    author: "Ali Tufan",
                    authorImg: "/assets/img/general/avatar-1.png",
                    lessonCount: 6,
                    duration: 236
                }, {
                    id: 3,
                    imageSrc: "/assets/img/dashboard/recent-courses/3.png",
                    title: "Instagram Marketing 2021: Complete Guide To Instagram Growth",
                    author: "Ali Tufan",
                    authorImg: "/assets/img/general/avatar-1.png",
                    lessonCount: 6,
                    duration: 236
                }],
                g = ["All", "Design", "Programming", "Art", "Photography", "Animation", "Writing"],
                u = ["All", "Hard", "Meduium", "Easy"],
                d = [{
                    id: 1,
                    href: "#",
                    name: "Courses"
                }, {
                    id: 2,
                    href: "#",
                    name: "Learn"
                }, {
                    id: 3,
                    href: "#",
                    name: "Online"
                }, {
                    id: 4,
                    href: "#",
                    name: "Education"
                }, {
                    id: 5,
                    href: "#",
                    name: "LMS"
                }, {
                    id: 6,
                    href: "#",
                    name: "Training"
                }],
                l = [{
                    id: 1,
                    title: "Jane Cooper"
                }, {
                    id: 2,
                    title: "Jenny Wilson"
                }, {
                    id: 3,
                    title: "Robert Fox"
                }, {
                    id: 4,
                    title: "Jacob Jones"
                }, {
                    id: 5,
                    title: "Albert Flores"
                }],
                c = [{
                    id: 1,
                    title: "English"
                }, {
                    id: 2,
                    title: "French"
                }, {
                    id: 3,
                    title: "German"
                }, {
                    id: 4,
                    title: "Italian"
                }],
                m = [{
                    id: 2,
                    title: "Beginner"
                }, {
                    id: 3,
                    title: "Intermediate"
                }, {
                    id: 4,
                    title: "Expert"
                }],
                h = [{
                    id: 1,
                    title: "All"
                }, {
                    id: 2,
                    title: "Free"
                }, {
                    id: 3,
                    title: "Paid"
                }],
                p = [{
                    id: 1,
                    star: 5,
                    text: "4.5 & up",
                    range: [4.5, 5]
                }, {
                    id: 2,
                    star: 5,
                    text: "4.0 & up",
                    range: [4, 5]
                }, {
                    id: 3,
                    star: 5,
                    text: "3.5 & up",
                    range: [3.5, 5]
                }, {
                    id: 4,
                    star: 5,
                    text: "3.0 & up",
                    range: [3, 5]
                }],
                y = [{
                    id: 1,
                    title: "Art"
                }, {
                    id: 2,
                    title: "Animation"
                }, {
                    id: 3,
                    title: "Design"
                }, {
                    id: 4,
                    title: "Photography"
                }, {
                    id: 5,
                    title: "Programming"
                }, {
                    id: 6,
                    title: "Writing"
                }],
                w = [{
                    id: 1,
                    title: "Less than 4 hours",
                    range: [0, 239]
                }, {
                    id: 2,
                    title: "4 - 7 hours",
                    range: [240, 419]
                }, {
                    id: 3,
                    title: "7 - 18 hours",
                    range: [420, 1079]
                }, {
                    id: 4,
                    title: "20 + Hours",
                    range: [1080, 5e3]
                }],
                C = ["Default", "Rating (asc)", "Rating (dsc)", "Price (asc)", "Price (dsc)", "Duration (asc)", "Duration (dsc)"]
        },
        29707: function(e, i, a) {
            a.d(i, {
                U3: function() {
                    return t
                },
                XS: function() {
                    return s
                },
                bd: function() {
                    return n
                },
                pJ: function() {
                    return r
                },
                zq: function() {
                    return o
                }
            });
            let t = [{
                    id: 1,
                    imgSrc: "/assets/img/courses-list/1.png",
                    title: "Summer School 2022",
                    date: "6 April, 2022",
                    location: "London, UK",
                    desc: "Educational technology and mobile learning",
                    category: "Design",
                    price: 450,
                    preDiscount: 650
                }, {
                    id: 2,
                    imgSrc: "/assets/img/courses-list/2.png",
                    title: "Summer School 2022",
                    date: "6 April, 2022",
                    location: "London, UK",
                    desc: "We are changing the way the world learns",
                    category: "Animation",
                    price: 450,
                    preDiscount: 650
                }, {
                    id: 3,
                    imgSrc: "/assets/img/courses-list/3.png",
                    title: "Summer School 2022",
                    date: "6 April, 2022",
                    location: "London, UK",
                    desc: "Guide to visas and funding to study in the UK",
                    category: "Writing",
                    price: 450,
                    preDiscount: 650
                }, {
                    id: 4,
                    imgSrc: "/assets/img/courses-list/4.png",
                    title: "Summer School 2022",
                    date: "6 April, 2022",
                    location: "London, UK",
                    desc: "Achieving Advanced in Insights with Big",
                    category: "Business",
                    price: 450,
                    preDiscount: 650
                }, {
                    id: 5,
                    imgSrc: "/assets/img/courses-list/5.png",
                    title: "Summer School 2022",
                    date: "6 April, 2022",
                    location: "London, UK",
                    desc: "Educational technology and mobile learning",
                    category: "Photo & Film",
                    price: 450,
                    preDiscount: 650
                }, {
                    id: 6,
                    imgSrc: "/assets/img/courses-list/6.png",
                    title: "Summer School 2022",
                    date: "6 April, 2022",
                    location: "London, UK",
                    desc: "We are changing the way the world learns",
                    category: "Lifestyle",
                    price: 450,
                    preDiscount: 650
                }, {
                    id: 7,
                    imgSrc: "/assets/img/courses-list/7.png",
                    title: "Summer School 2022",
                    date: "6 April, 2022",
                    location: "London, UK",
                    desc: "We are changing the way the world learns",
                    category: "Illustration",
                    price: 450,
                    preDiscount: 650
                }, {
                    id: 8,
                    imgSrc: "/assets/img/courses-list/8.png",
                    title: "Summer School 2022",
                    date: "6 April, 2022",
                    location: "London, UK",
                    desc: "We are changing the way the world learns",
                    category: "Design",
                    price: 450,
                    preDiscount: 650
                }, {
                    id: 9,
                    imgSrc: "/assets/img/courses-list/9.png",
                    title: "Summer School 2022",
                    date: "6 April, 2022",
                    location: "London, UK",
                    desc: "We are changing the way the world learns",
                    category: "Animation",
                    price: 450,
                    preDiscount: 650
                }],
                n = ["All Categories", "Animation", "Design", "Illustration", "Lifestyle", "Photo & Film", "Business", "Writing"],
                r = [{
                    id: 1,
                    href: "#",
                    name: "Courses"
                }, {
                    id: 2,
                    href: "#",
                    name: "Learn"
                }, {
                    id: 3,
                    href: "#",
                    name: "Online"
                }, {
                    id: 4,
                    href: "#",
                    name: "Education"
                }, {
                    id: 5,
                    href: "#",
                    name: "LMS"
                }, {
                    id: 6,
                    href: "#",
                    name: "Training"
                }],
                o = ["You will need a copy of Adobe XD 2019 or above. A free trial can be downloaded from Adobe.", "No previous design experience is needed.", "No previous Adobe XD skills are needed."],
                s = ["Become a UX designer.", "You will be able to add UX designer to your CV", "Become a UI designer.", "Build & test a full website design.", "Create your first UX brief & persona.", "How to use premade UI kits.", "Create quick wireframes.", "Downloadable exercise files", "Build a UX project from beginning to end.", "Learn to design websites & mobile phone apps.", "All the techniques used by UX professionals", "You will be able to talk correctly with other UX design."]
        },
        31092: function(e, i, a) {
            a.d(i, {
                JV: function() {
                    return t
                },
                bd: function() {
                    return r
                },
                pJ: function() {
                    return n
                }
            });
            let t = [{
                    id: 1,
                    image: "/assets/img/shop/products/1.png",
                    categories: ["Clothing", "Glasses", "T-Shirts"],
                    name: "Wall Clock Brown",
                    price: 500,
                    preDiscount: 678
                }, {
                    id: 2,
                    image: "/assets/img/shop/products/2.png",
                    categories: ["Clothing", "Glasses", "T-Shirts"],
                    name: "Wall Clock Brown",
                    price: 1e3,
                    preDiscount: 1200
                }, {
                    id: 3,
                    image: "/assets/img/shop/products/3.png",
                    categories: ["Clothing", "Glasses", "T-Shirts"],
                    name: "Wall Clock Brown",
                    price: 750,
                    preDiscount: 800
                }, {
                    id: 4,
                    image: "/assets/img/shop/products/4.png",
                    categories: ["Clothing", "Glasses", "T-Shirts"],
                    name: "Wall Clock Brown",
                    price: 200,
                    preDiscount: 300
                }, {
                    id: 5,
                    image: "/assets/img/shop/products/5.png",
                    categories: ["Clothing", "Glasses", "T-Shirts"],
                    name: "Wall Clock Brown",
                    price: 1800,
                    preDiscount: 2300
                }, {
                    id: 6,
                    image: "/assets/img/shop/products/6.png",
                    categories: ["Clothing", "Glasses", "T-Shirts"],
                    name: "Wall Clock Brown",
                    price: 950,
                    preDiscount: 1200
                }, {
                    id: 7,
                    image: "/assets/img/shop/products/7.png",
                    categories: ["Clothing", "Glasses", "T-Shirts"],
                    name: "Wall Clock Brown",
                    price: 1300,
                    preDiscount: 1600
                }, {
                    id: 8,
                    image: "/assets/img/shop/products/8.png",
                    categories: ["Clothing", "Glasses", "T-Shirts"],
                    name: "Wall Clock Brown",
                    price: 2e3,
                    preDiscount: 1400
                }, {
                    id: 9,
                    image: "/assets/img/shop/products/9.png",
                    categories: ["Clothing", "Glasses", "T-Shirts"],
                    name: "Wall Clock Brown",
                    price: 400,
                    preDiscount: 590
                }],
                n = [{
                    id: 1,
                    href: "#",
                    name: "Courses"
                }, {
                    id: 2,
                    href: "#",
                    name: "Learn"
                }, {
                    id: 3,
                    href: "#",
                    name: "Online"
                }, {
                    id: 4,
                    href: "#",
                    name: "Education"
                }, {
                    id: 5,
                    href: "#",
                    name: "LMS"
                }, {
                    id: 6,
                    href: "#",
                    name: "Training"
                }],
                r = [{
                    id: 1,
                    href: "#",
                    name: "Gym"
                }, {
                    id: 2,
                    href: "#",
                    name: "High School"
                }, {
                    id: 3,
                    href: "#",
                    name: "Primary"
                }, {
                    id: 4,
                    href: "#",
                    name: "School"
                }, {
                    id: 5,
                    href: "#",
                    name: "University"
                }, {
                    id: 5,
                    href: "#",
                    name: "University"
                }, {
                    id: 5,
                    href: "#",
                    name: "College"
                }]
        }
    }
]);