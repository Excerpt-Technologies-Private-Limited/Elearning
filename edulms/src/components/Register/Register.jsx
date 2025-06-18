
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Login/Login.css";

const Register = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmpassword) {
      alert("❌ Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          username: formData.username,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Registration failed");
      }

      alert("✅ Registered successfully!");
      onClose?.();
      navigate("/dashboard");
    } catch (err) {
      alert(`❌ Error: ${err.message}`);
      console.error(err);
    }
  };

  const handleOverlayClick = () => {
    onClose?.();
    navigate("/");
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleOverlayClick}>
          &times;
        </button>
        <h2 className="modal-title">Register Page</h2>
        <p className="modal-subtitle">
          Already have an account?{" "}
          <Link className="modal-to" to="/login">
            Log in
          </Link>
        </p>
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email address</label>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label>Username</label>
            <input
              required
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              required
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              required
              type="password"
              name="confirmpassword"
              value={formData.confirmpassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
            />
          </div>
          <button type="submit" className="button -md -purple-1 text-white">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

