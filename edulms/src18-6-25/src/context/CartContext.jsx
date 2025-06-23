// // src/context/CartContext.jsx
// import React, { createContext, useContext, useEffect, useState } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//     console.log("CartProvider initialized");
//   console.log("Initial cart items:", cartItems);

//   // Load from localStorage on init
//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     setCartItems(storedCart);
//   }, []);

//   // Save to localStorage on update
//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cartItems));
//   }, [cartItems]);

//   const addToCart = (course) => {
//     // Prevent duplicates
//     console.log("Adding to cart:", course);
//     if (!cartItems.some(item => item.courseId === course.courseId)) {
//       setCartItems([...cartItems, course]);
//     }
//   };

//   const removeFromCart = (courseId) => {
//     setCartItems(cartItems.filter(item => item.courseId !== courseId));
//   };

//   const clearCart = () => setCartItems([]);

//   return (
//     <CartContext.Provider value={{
//       cartItems,
//       addToCart,
//       removeFromCart,
//       clearCart
//     }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);


import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // ✅ Load initial cart from localStorage
    try {
      const stored = localStorage.getItem('cart');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error('Failed to load cart from localStorage', e);
      return [];
    }
  });

  // ✅ Save to localStorage on every change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (course) => {
    setCartItems((prev) => {
      const exists = prev.find(item => item.courseId === course.courseId);
      if (exists) return prev;
      return [...prev, course];
    });
  };

  const removeFromCart = (courseId) => {
    setCartItems((prev) => prev.filter(item => item.courseId !== courseId));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
