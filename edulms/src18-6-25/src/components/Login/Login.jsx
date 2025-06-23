

// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import './Login.css';
// import Register from "../Register/Register";

// const LoginModal = ({ isOpen, onClose }) => {
//   const [isRegisterOpen, setIsRegisterOpen] = useState(false);
//   const [showResetPassword, setShowResetPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   // Reset Password States
//   const [resetEmail, setResetEmail] = useState('');
//   const [codeSent, setCodeSent] = useState(false);
//   const [resetCode, setResetCode] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [resetMessage, setResetMessage] = useState('');
//   const [resetMessageType, setResetMessageType] = useState('error');

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Reset password form when modal is closed or reset is complete
//   const resetPasswordForm = () => {
//     setResetEmail('');
//     setCodeSent(false);
//     setResetCode('');
//     setNewPassword('');
//     setConfirmPassword('');
//     setResetMessage('');
//     setShowResetPassword(false);
//   };

//   // Reset forms when modal is closed
//   useEffect(() => {
//     if (!isOpen) {
//       resetPasswordForm();
//       setFormData({ email: "", password: "" });
//     }
//   }, [isOpen]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("/api/auth/login", {
//         email: formData.email,
//         password: formData.password,
//       });

//       localStorage.setItem("token", res.data.token);
//       alert("Login successful!");
//       setFormData({ email: "", password: "" });
//       onClose();
//       navigate("/dashboard");
//     } catch (error) {
//       console.error("Login failed", error);
//       alert(error.response?.data?.error || "Login error");
//     }
//   };

//   // Send reset code function
//   const sendResetCode = async () => {
//     if (!resetEmail) {
//       setResetMessage('Please enter your email address');
//       setResetMessageType('error');
//       return;
//     }

//     try {
//       const res = await axios.post('/api/auth/send-reset-code', { 
//         email: resetEmail 
//       });
//       setCodeSent(true);
//       setResetMessage(res.data.message);
//       setResetMessageType('success');
//     } catch (err) {
//       setResetMessage(err.response?.data?.message || 'Failed to send code');
//       setResetMessageType('error');
//     }
//   };

//   // Handle password reset
//   const handlePasswordReset = async () => {
//     if (!resetCode) {
//       setResetMessage('Please enter the verification code');
//       setResetMessageType('error');
//       return;
//     }
    
//     if (!newPassword) {
//       setResetMessage('Please enter a new password');
//       setResetMessageType('error');
//       return;
//     }
    
//     if (newPassword !== confirmPassword) {
//       setResetMessage('Passwords do not match');
//       setResetMessageType('error');
//       return;
//     }

//     try {
//       const res = await axios.post('/api/auth/reset-password', {
//         email: resetEmail,
//         code: resetCode,
//         password: newPassword,
//       });
//       setResetMessage(res.data.message);
//       setResetMessageType('success');
      
//       // Reset form after successful password reset
//       setTimeout(() => {
//         resetPasswordForm();
//         alert('Password reset successful! You can now login with your new password.');
//       }, 2000);
//     } catch (err) {
//       setResetMessage(err.response?.data?.message || 'Failed to reset password');
//       setResetMessageType('error');
//     }
//   };

//   const handleOverlayClick = () => {
//     onClose();
//     navigate("/");
//   };

//   const handleForgotPasswordClick = () => {
//     setShowResetPassword(true);
//   };

//   const handleBackToLogin = () => {
//     resetPasswordForm();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay" onClick={handleOverlayClick}>
//       <div className="modal-container" onClick={(e) => e.stopPropagation()}>
//         <button className="modal-close" onClick={handleOverlayClick}>
//           &times;
//         </button>

//         {!showResetPassword ? (
//           // Login Form
//           <>
//             <h2 className="modal-title">Login</h2>
//             <p className="modal-subtitle">
//               Don't have an account?{" "}
//               <Link className="modal-link" onClick={() => setIsRegisterOpen(true)}>
//                 Sign up for free
//               </Link>
//             </p>

//             <Register 
//               isOpen={isRegisterOpen} 
//               onClose={() => setIsRegisterOpen(false)} 
//             />

//             <form className="modal-form" onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label>Email</label>
//                 <input
//                   required
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter your email"
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Password</label>
//                 <input
//                   required
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder="Enter your password"
//                 />
//               </div>
//               <button type="submit" className="button -md -purple-1 text-white">
//                 Login
//               </button>
//             </form>

//             <div className="modal-footer">
//               <button 
//                 className="forgot-password" 
//                 onClick={handleForgotPasswordClick}
//               >
//                 Forgot Password?
//               </button>
//             </div>
//           </>
//         ) : (
//           // Reset Password Form
//           <>
//             <h2 className="modal-title">Reset Password</h2>
//             <p className="modal-subtitle">
//               <Link className="modal-link" onClick={handleBackToLogin}>
//                 Back to Login
//               </Link>
//             </p>

//             {resetMessage && (
//               <div 
//                 className={`reset-message ${resetMessageType === 'error' ? 'error' : 'success'}`}
//                 style={{
//                   padding: '10px 12px',
//                   borderRadius: '8px',
//                   fontSize: '14px',
//                   marginBottom: '16px',
//                   backgroundColor: resetMessageType === 'error' ? '#fee2e2' : '#d1fae5',
//                   color: resetMessageType === 'error' ? '#b91c1c' : '#047857'
//                 }}
//               >
//                 {resetMessage}
//               </div>
//             )}

//             {!codeSent ? (
//               // Step 1: Enter Email
//               <div className="modal-form">
//                 <div className="form-group">
//                   <label>Email Address</label>
//                   <input
//                     type="email"
//                     value={resetEmail}
//                     onChange={(e) => setResetEmail(e.target.value)}
//                     placeholder="Enter your email"
//                   />
//                 </div>
//                 <button 
//                   type="button"
//                   className="button -md -purple-1 text-white"
//                   onClick={sendResetCode}
//                 >
//                   Send Verification Code
//                 </button>
//               </div>
//             ) : (
//               // Step 2: Enter Code and New Password
//               <div className="modal-form">
//                 <div className="form-group">
//                   <label>Verification Code</label>
//                   <input
//                     type="text"
//                     value={resetCode}
//                     onChange={(e) => setResetCode(e.target.value)}
//                     placeholder="Enter code sent to your email"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>New Password</label>
//                   <input
//                     type="password"
//                     value={newPassword}
//                     onChange={(e) => setNewPassword(e.target.value)}
//                     placeholder="Create a new password"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Confirm Password</label>
//                   <input
//                     type="password"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     placeholder="Confirm your new password"
//                   />
//                 </div>
//                 <div style={{ display: 'flex', gap: '10px' }}>
//                   <button 
//                     type="button"
//                     className="button -md -purple-1 text-white"
//                     onClick={handlePasswordReset}
//                     style={{ flex: 1 }}
//                   >
//                     Reset Password
//                   </button>
//                   <button 
//                     type="button"
//                     className="button -md"
//                     onClick={() => setCodeSent(false)}
//                     style={{ 
//                       flex: 1, 
//                       backgroundColor: '#e5e7eb', 
//                       color: '#374151' 
//                     }}
//                   >
//                     Back
//                   </button>
//                 </div>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LoginModal;


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css';
import Register from "../Register/Register";

const LoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Reset Password States
  const [resetEmail, setResetEmail] = useState('');
  const [codeSent, setCodeSent] = useState(false);
  const [resetCode, setResetCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetMessage, setResetMessage] = useState('');
  const [resetMessageType, setResetMessageType] = useState('error');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Reset password form when modal is closed or reset is complete
  const resetPasswordForm = () => {
    setResetEmail('');
    setCodeSent(false);
    setResetCode('');
    setNewPassword('');
    setConfirmPassword('');
    setResetMessage('');
    setShowResetPassword(false);
  };

  // Reset forms when modal is closed
  useEffect(() => {
    if (!isOpen) {
      resetPasswordForm();
      setFormData({ email: "", password: "" });
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("studentId", res.data.userId); 
;
      localStorage.setItem("userId", res.data.userId)
      alert("Login successful!");
      setFormData({ email: "", password: "" });
      
      // Check if onLoginSuccess callback is provided (from checkout flow)
      if (onLoginSuccess) {
        onLoginSuccess(); // This will redirect to checkout
      } else {
        // Default behavior - close modal and go to dashboard
        onClose();
        navigate("/DashBoard");
      }
    } catch (error) {
      console.error("Login failed", error);
      alert(error.response?.data?.error || "Login error");
    }
  };

  // Send reset code function
  const sendResetCode = async () => {
    if (!resetEmail) {
      setResetMessage('Please enter your email address');
      setResetMessageType('error');
      return;
    }

    try {
      const res = await axios.post('http://localhost:8080/api/auth/send-reset-code', { 
        email: resetEmail 
      });
      setCodeSent(true);
      setResetMessage(res.data.message);
      setResetMessageType('success');
    } catch (err) {
      setResetMessage(err.response?.data?.message || 'Failed to send code');
      setResetMessageType('error');
    }
  };

  // Handle password reset
  const handlePasswordReset = async () => {
    if (!resetCode) {
      setResetMessage('Please enter the verification code');
      setResetMessageType('error');
      return;
    }
    
    if (!newPassword) {
      setResetMessage('Please enter a new password');
      setResetMessageType('error');
      return;
    }
    
    if (newPassword !== confirmPassword) {
      setResetMessage('Passwords do not match');
      setResetMessageType('error');
      return;
    }

    try {
      const res = await axios.post('http://localhost:8080/api/auth/reset-password', {
        email: resetEmail,
        code: resetCode,
        password: newPassword,
      });
      setResetMessage(res.data.message);
      setResetMessageType('success');
      
      // Reset form after successful password reset
      setTimeout(() => {
        resetPasswordForm();
        alert('Password reset successful! You can now login with your new password.');
      }, 2000);
    } catch (err) {
      setResetMessage(err.response?.data?.message || 'Failed to reset password');
      setResetMessageType('error');
    }
  };

  const handleOverlayClick = () => {
    onClose();
    // Only navigate to home if not in checkout flow
    if (!onLoginSuccess) {
      navigate("/");
    }
  };

  const handleForgotPasswordClick = () => {
    setShowResetPassword(true);
  };

  const handleBackToLogin = () => {
    resetPasswordForm();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleOverlayClick}>
          &times;
        </button>

        {!showResetPassword ? (
          // Login Form
          <>
            <h2 className="modal-title">Login</h2>
            <p className="modal-subtitle">
              Don't have an account?{" "}
              <Link className="modal-link" onClick={() => setIsRegisterOpen(true)}>
                Sign up for free
              </Link>
            </p>

            <Register 
              isOpen={isRegisterOpen} 
              onClose={() => setIsRegisterOpen(false)} 
            />

            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email</label>
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
              <button type="submit" className="button -md -purple-1 text-white">
                Login
              </button>
            </form>

            <div className="modal-footer">
              <button 
                className="forgot-password" 
                onClick={handleForgotPasswordClick}
              >
                Forgot Password?
              </button>
            </div>
          </>
        ) : (
          // Reset Password Form
          <>
            <h2 className="modal-title">Reset Password</h2>
            <p className="modal-subtitle">
              <Link className="modal-link" onClick={handleBackToLogin}>
                Back to Login
              </Link>
            </p>

            {resetMessage && (
              <div 
                className={`reset-message ${resetMessageType === 'error' ? 'error' : 'success'}`}
                style={{
                  padding: '10px 12px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  marginBottom: '16px',
                  backgroundColor: resetMessageType === 'error' ? '#fee2e2' : '#d1fae5',
                  color: resetMessageType === 'error' ? '#b91c1c' : '#047857'
                }}
              >
                {resetMessage}
              </div>
            )}

            {!codeSent ? (
              // Step 1: Enter Email
              <div className="modal-form">
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>
                <button 
                  type="button"
                  className="button -md -purple-1 text-white"
                  onClick={sendResetCode}
                >
                  Send Verification Code
                </button>
              </div>
            ) : (
              // Step 2: Enter Code and New Password
              <div className="modal-form">
                <div className="form-group">
                  <label>Verification Code</label>
                  <input
                    type="text"
                    value={resetCode}
                    onChange={(e) => setResetCode(e.target.value)}
                    placeholder="Enter code sent to your email"
                  />
                </div>
                <div className="form-group">
                  <label>New Password</label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Create a new password"
                  />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your new password"
                  />
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button 
                    type="button"
                    className="button -md -purple-1 text-white"
                    onClick={handlePasswordReset}
                    style={{ flex: 1 }}
                  >
                    Reset Password
                  </button>
                  <button 
                    type="button"
                    className="button -md"
                    onClick={() => setCodeSent(false)}
                    style={{ 
                      flex: 1, 
                      backgroundColor: '#e5e7eb', 
                      color: '#374151' 
                    }}
                  >
                    Back
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default LoginModal;

