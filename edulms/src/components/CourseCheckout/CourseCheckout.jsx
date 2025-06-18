import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import axios from "axios";

const CourseCheckout = () => {
  const { cartItems } = useCart();
  console.log("Cart items:", cartItems);
  const finalPrice = cartItems.reduce(
    (total, item) => total + Number(item.price),
    0
  );
  console.log("Final price:", finalPrice);

  const token = localStorage.getItem("token");
  let decodedToken = null;
  try {
    if (token) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );
      decodedToken = JSON.parse(jsonPayload);
    }
  } catch (e) {
    console.error("Failed to decode token:", e);
  }
  console.log("Token:", decodedToken);
  const userid = decodedToken ? decodedToken.id : null;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
    email: "",
    notes: "",
    country: "",
    paymentMethod: "Online Payment",
    items: cartItems,
    amount: finalPrice,

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const createOrderObject = (response) => {
    return {
      orderId: response.razorpay_order_id,
      paymentId: response.razorpay_payment_id,
      signature: response.razorpay_signature,
      amount: formData.amount,
      currency: "INR",
      items: formData.items,
      shipping: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        pincode: formData.pincode,
        country: formData.country,
        phone: formData.phone,
        email: formData.email,
      },
      notes: formData.notes,
      paymentMethod: formData.paymentMethod,
      userId: userid, // Add user ID to the order
    };
  };

  // Function to handle payment success
  const handlePaymentSuccess = async (response) => {
    console.log("response:", response);
    try {
      const orderData = createOrderObject(response);

      // Save order to your database
      const savedOrder = await axios.post('http://localhost:8080/api/orders', orderData);
      console.log(savedOrder);
      
       // Extract course ObjectIds from cart items
    const courseIds = cartItems.map(item => item._id.$oid || item._id);
    const studentId = userid; // Assuming you have the student ID from the decoded token
    // Update student's courseIds array
    await axios.patch(`http://localhost:8080/api/students/${studentId}/courses`, {
      courseIds: courseIds
    });

      localStorage.removeItem('cart');

      // navigate('/OrderConfirmation', {
      //   state: {
      //     orderId: savedOrder.data.orderId,
      //     totalAmount: orderData.paymentDetails.totalAmount,
      //     shippingDetails: orderData.shipping
      //   }
      // });

      alert('Order placed successfully!');
    } catch (error) {
      console.error('Failed to save order:', error);
      alert('Payment successful but failed to save order. Please contact support.');
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/api/create-order", {
        amount: formData.amount,
      });

      console.log("Order response:", res);
      const { order } = res.data;
      console.log("Order details:", order);
      const options = {
        key: "rzp_test_qUmhUFElBiSNIs",
        amount: formData.amount,
        currency: "INR",
        name: "Course Purchase",
        description: "Checkout",
        order_id: res?.data?.id,
        handler: async function (response) {
          handlePaymentSuccess(response);
        },
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          contact: formData.phone,
        },
        theme: { color: "#0e76a8" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Payment initiation failed");
    }
  };
  
  
  return (
    <div>
      <section class="breadcrumbs  ">
        <div class="container">
          <div class="row">
            <div class="col-auto">
              <div class="breadcrumbs__content">
                <div class="breadcrumbs__item  ">
                  <Link to="/">Home</Link>
                </div>
                <div class="breadcrumbs__item  ">
                  <Link to="/courses-list-3">Course Checkout</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="page-header -type-1">
        <div class="container">
          <div class="page-header__content">
            <div class="row justify-center text-center">
              <div class="col-auto">
                <div>
                  <h1 class="page-header__title">Course Checkout</h1>
                </div>
                <div>
                  <p class="page-header__text">
                    We’re on a mission to deliver engaging, curated courses at a
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
          <div className="row y-gap-50">
            <div className="col-lg-8">
              <div className="shopCheckout-form">
                <form
                  className="contact-form row x-gap-30 y-gap-30"
                  onSubmit={handleSubmit}
                >
                  <div className="col-12">
                    <h5 className="text-20">Billing details</h5>
                  </div>
                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      First name
                    </label>
                    <input
                      required
                      placeholder="First name"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Last name
                    </label>
                    <input
                      required
                      placeholder="Last name"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Phone *
                    </label>
                    <input
                      required
                      placeholder="Phone *"
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Email address *
                    </label>
                    <input
                      required
                      placeholder="Email address *"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Country / Region *
                    </label>
                    <select
                      className="selectize wide js-selectize"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                    >
                      <option value="India">India</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                      <option value="Greece">Greece</option>
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      House number and street name
                    </label>
                    <input
                      required
                      placeholder="House number and street name"
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Town / City *
                    </label>
                    <input
                      required
                      placeholder="Town / City *"
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      State *
                    </label>
                    <input
                      required
                      placeholder="State *"
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      PinCode *
                    </label>
                    <input
                      placeholder="Pin code *"
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                    />
                  </div>


                  <div className="col-12 mt-30">
                    <button
                      type="submit"
                      className="button -md -purple-1 text-white col-12 mt-30"
                    >
                      Buy course
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pt-30 pb-15 bg-white border-light rounded-8 bg-light-4">
                <h5 className="px-30 text-20 fw-500">Your order</h5>
                <div className="d-flex justify-between px-30 mt-25">
                  <div className="py-15 fw-500 text-dark-1">Product</div>
                  <div className="py-15 fw-500 text-dark-1">Subtotal</div>
                </div>


                {cartItems.map((item) => (
                  <>
                    <div className="d-flex justify-between border-top-dark px-30">
                      <div className="py-15 text-grey" key={item.courseId}>
                        <Link className="linkCustom" to={`/courses/${item._id}`}>
                          {item.courseName}
                        </Link>
                      </div>
                      <div className="py-15 text-grey">₹{item.price}.00</div>
                    </div>
                  </>
                ))}
                <div className="d-flex justify-between border-top-dark px-30">
                  <div className="py-15 fw-500">Subtotal</div>
                  <div className="py-15 fw-500">₹{finalPrice}.00</div>
                </div>

                <div className="d-flex justify-between border-top-dark px-30">
                  <div className="py-15 fw-500 text-dark-1">Total</div>
                  <div className="py-15 fw-500 text-dark-1">₹{finalPrice}.00</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseCheckout;
