// import React from "react";
// import { Link } from "react-router-dom";
// import { useCart } from '../../context/CartContext';
// const CourseCart = () => {
//   const { cartItems, removeFromCart } = useCart();
//   console.log("Cart items:", cartItems);

//   const finalPrice = cartItems.reduce((total, item) => total + Number(item.price), 0);
//   console.log("Final price:", finalPrice);

//   return (
//     <div>
//       <section class="breadcrumbs  ">
//         <div class="container">
//           <div class="row">
//             <div class="col-auto">
//               <div class="breadcrumbs__content">
//                 <div class="breadcrumbs__item  ">
//                   <Link to="/">Home</Link>
//                 </div>
//                 <div class="breadcrumbs__item  ">
//                   <Link to="/">Course Cart</Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section class="page-header -type-1">
//         <div class="container">
//           <div class="page-header__content">
//             <div class="row justify-center text-center">
//               <div class="col-auto">
//                 <div>
//                   <h1 class="page-header__title">Course Cart</h1>
//                 </div>
//                 <div>
//                   <p class="page-header__text">
//                     We’re on a mission to deliver engaging, curated courses at a
//                     reasonable price.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section class="layout-pt-md layout-pb-lg">
//         <div class="container">
//           <div class="row justify-end">
//             <div class="col-12">
//               <div class="px-30 pr-60 py-25 rounded-8 bg-light-6 md:d-none">
//                 <div class="row justify-between">
//                   <div class="col-md-4">
//                     <div class="fw-500 text-purple-1">Course</div>
//                   </div>
//                   <div class="col-md-2">
//                     <div class="fw-500 text-purple-1">Price</div>
//                   </div>

//                   <div class="col-md-2">
//                     <div class="fw-500 text-purple-1">Subtotal</div>
//                   </div>
//                   <div class="col-md-1">
//                     <div class="d-flex justify-end">
//                       <div class="fw-500 text-purple-1">Remove</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div class="px-30 pr-60 md:px-0">
//                 {cartItems.map((item) => (
//                   <div
//                     key={item.id}
//                     className="row y-gap-20 justify-between items-center pt-30 pb-30 border-bottom-light"
//                   >
//                     <div className="col-md-4">
//                       <div className="d-flex items-center">
//                         <div>
//                           <div
//                             className="size-100 bg-image rounded-8"

//                           >
//                             {/* Image will be displayed here */}
//                             <img src={`/${item.courseImages[0]}`} alt="" srcset="" />
//                           </div>
//                         </div>
//                         <div className="fw-500 text-dark-1 ml-30">
//                           <Link className="linkCustom" to={item.link}>
//                             {item.title}
//                           </Link>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="col-md-2 md:mt-15">
//                       <div>
//                         <div className="shopCart-products__title d-none md:d-block mb-10">
//                           Price
//                         </div>
//                         <p>₹{item.price}</p>
//                       </div>
//                     </div>



//                     <div className="col-md-1">
//                       <div>
//                         <div className="shopCart-products__title d-none md:d-block mb-10">
//                           Subtotal
//                         </div>
//                         <p>₹{item.price}</p>
//                       </div>
//                     </div>

//                     <div className="col-md-1">
//                       <div className="md:d-none d-flex justify-end">
//                         <button onClick={() => removeFromCart(item.courseId)} style={{ color: "red" }}>
//                           <Link class="icon icon-bin" to="#" ></Link>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//             </div>
//             <div class="col-xl-4 col-lg-5 layout-pt-lg">
//               <div class="py-30 bg-light-4 rounded-8 border-light">
//                 <h5 class="px-30 text-20 fw-500">Cart Totals</h5>
//                 <div class="d-flex justify-between px-30 item mt-25">
//                   <div class="py-15 fw-500 text-dark-1">Subtotal</div>
//                   <div class="py-15 fw-500 text-dark-1">₹{finalPrice}.00</div>
//                 </div>
//                 <div class="d-flex justify-between px-30 item border-top-dark">
//                   <div class="pt-15 fw-500 text-dark-1">Total</div>
//                   <div class="pt-15 fw-500 text-dark-1">₹{finalPrice}.00</div>
//                 </div>
//               </div>
//               <Link
//                 class="button -md -purple-1 text-white col-12 mt-30"
//                 to="/coursCheckOut"
//               >
//                 Proceed to checkout
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CourseCart;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from '../../context/CartContext';
import Login from "../Login/Login";

const CourseCart = () => {
  const { cartItems, removeFromCart } = useCart();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const navigate = useNavigate();

  console.log("Cart items:", cartItems);

  const finalPrice = cartItems.reduce((total, item) => total + Number(item.price), 0);
  console.log("Final price:", finalPrice);

  // Function to check if user is authenticated
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return token !== null && token !== undefined && token !== '';
  };

  // Handle proceed to checkout
  const handleProceedToCheckout = (e) => {
    e.preventDefault();
    
    if (isAuthenticated()) {
      // User is authenticated, proceed to checkout
      navigate('/coursCheckOut');
    } else {
      // User is not authenticated, open login modal
      setIsLoginModalOpen(true);
    }
  };

  // Handle successful login - redirect to checkout
  const handleLoginSuccess = () => {
    setIsLoginModalOpen(false);
    navigate('/coursCheckOut');
  };

  return (
    <div>
      <section className="breadcrumbs">
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <div className="breadcrumbs__content">
                <div className="breadcrumbs__item">
                  <Link to="/">Home</Link>
                </div>
                <div className="breadcrumbs__item">
                  <Link to="/">Course Cart</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__title">Course Cart</h1>
                </div>
                <div>
                  <p className="page-header__text">
                    We're on a mission to deliver engaging, curated courses at a
                    reasonable price.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-end">
            <div className="col-12">
              <div className="px-30 pr-60 py-25 rounded-8 bg-light-6 md:d-none">
                <div className="row justify-between">
                  <div className="col-md-4">
                    <div className="fw-500 text-purple-1">Course</div>
                  </div>
                  <div className="col-md-2">
                    <div className="fw-500 text-purple-1">Price</div>
                  </div>
                  <div className="col-md-2">
                    <div className="fw-500 text-purple-1">Subtotal</div>
                  </div>
                  <div className="col-md-1">
                    <div className="d-flex justify-end">
                      <div className="fw-500 text-purple-1">Remove</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-30 pr-60 md:px-0">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="row y-gap-20 justify-between items-center pt-30 pb-30 border-bottom-light"
                  >
                    <div className="col-md-4">
                      <div className="d-flex items-center">
                        <div>
                          <div className="size-100 bg-image rounded-8">
                            <img 
                              src={`/${item.courseImages[0]}`} 
                              alt={item.title}
                            />
                          </div>
                        </div>
                        <div className="fw-500 text-dark-1 ml-30">
                          <Link className="linkCustom" to={item.link}>
                            {item.title}
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-2 md:mt-15">
                      <div>
                        <div className="shopCart-products__title d-none md:d-block mb-10">
                          Price
                        </div>
                        <p>₹{item.price}</p>
                      </div>
                    </div>

                    <div className="col-md-1">
                      <div>
                        <div className="shopCart-products__title d-none md:d-block mb-10">
                          Subtotal
                        </div>
                        <p>₹{item.price}</p>
                      </div>
                    </div>

                    <div className="col-md-1">
                      <div className="md:d-none d-flex justify-end">
                        <button 
                          onClick={() => removeFromCart(item.courseId)} 
                          style={{ color: "red", background: "none", border: "none" }}
                        >
                          <span className="icon icon-bin"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="col-xl-4 col-lg-5 layout-pt-lg">
              <div className="py-30 bg-light-4 rounded-8 border-light">
                <h5 className="px-30 text-20 fw-500">Cart Totals</h5>
                <div className="d-flex justify-between px-30 item mt-25">
                  <div className="py-15 fw-500 text-dark-1">Subtotal</div>
                  <div className="py-15 fw-500 text-dark-1">₹{finalPrice}.00</div>
                </div>
                <div className="d-flex justify-between px-30 item border-top-dark">
                  <div className="pt-15 fw-500 text-dark-1">Total</div>
                  <div className="pt-15 fw-500 text-dark-1">₹{finalPrice}.00</div>
                </div>
              </div>
              <button
                className="button -md -purple-1 text-white col-12 mt-30"
                onClick={handleProceedToCheckout}
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Login Modal */}
      <Login
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
};

export default CourseCart;