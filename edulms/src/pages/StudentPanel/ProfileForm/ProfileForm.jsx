// import { useState } from "react";
// import SideNavBar1 from "../../SideNavBar/SideNavBar";
// import Header1 from "../../Header/Header";

// const ProfileForm = () => {
//      const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     profilePhoto: null,
//     address: "",
//     city: "",
//     state: "",
//     postalCode: "",
//     country: "",
//     department: "",
//     language: "",
//     notifications: {
//       email: true,
//       sms: false,
//       inApp: true,
//     },
//     timezone: "",
//     role: "student",
//     studentId: "",
//     semester: "",
//     courses: [],
//     interests: "",
//     qualifications: "",
//     instructorSubjects: [],
//     experience: "",
//     certificates: null,
//     bio: "",
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;

//     if (type === "checkbox") {
//       setFormData({
//         ...formData,
//         notifications: {
//           ...formData.notifications,
//           [name]: checked,
//         },
//       });
//     } else if (type === "file") {
//       setFormData({ ...formData, [name]: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const nextStep = () => setStep(step + 1);
//   const prevStep = () => setStep(step - 1);


//   return (
//     <div>
//        <Header1 />
//     <SideNavBar1 />
//     <div className="main-content">
//       <div className="page-content ">
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-12">
//               <div className="card">
//                 <div className="card-header">
//                   <h4 className="card-title">Profile Form</h4>
//                 </div>
//                  <div className="card-body">
//       <form >
//         {step === 1 && (
//             <>
//               <h5>Step 1 of 5: Upload Your Photo</h5>
//               <input
//                 type="file"
//                 className="form-control mb-2"
//                 name="profilePhoto"
//                 onChange={handleChange}
//               />
//               <button className="btn btn-secondary me-2" onClick={nextStep}>Skip</button>
//               <button className="btn btn-primary" onClick={nextStep}>Next →</button>
//             </>
//           )}

//           {step === 2 && (
//             <>
//               <h5>Step 2 of 5: Personal Details</h5>
//               <input type="text" className="form-control mb-2" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
//               <input type="tel" className="form-control mb-2" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
//               <input type="text" className="form-control mb-2" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
//               <input type="text" className="form-control mb-2" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
//               <input type="text" className="form-control mb-2" name="state" placeholder="State/Province" value={formData.state} onChange={handleChange} />
//               <input type="text" className="form-control mb-2" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} />
//               <select name="country" className="form-control mb-2" value={formData.country} onChange={handleChange}>
//                 <option value="">Select Country</option>
//                 <option value="India">India</option>
//                 <option value="USA">USA</option>
//               </select>
//               <select name="department" className="form-control mb-2" value={formData.department} onChange={handleChange}>
//                 <option value="">Select Department</option>
//                 <option value="CS">Computer Science</option>
//                 <option value="ECE">Electronics</option>
//               </select>
//               <div className="d-flex justify-content-between">
//                 <button className="btn btn-secondary" onClick={prevStep}>← Back</button>
//                 <button className="btn btn-primary" onClick={nextStep}>Next →</button>
//               </div>
//             </>
//           )}

//           {step === 3 && (
//             <>
//               <h5>Step 3 of 5: Preferences</h5>
//               <select name="language" className="form-control mb-2" value={formData.language} onChange={handleChange}>
//                 <option value="">Select Language</option>
//                 <option value="English">English</option>
//                 <option value="Hindi">Hindi</option>
//               </select>
//               <div className="mb-2">
//                 <label className="me-2"><input type="checkbox" name="email" checked={formData.notifications.email} onChange={handleChange} /> Email</label>
//                 <label className="me-2"><input type="checkbox" name="sms" checked={formData.notifications.sms} onChange={handleChange} /> SMS</label>
//                 <label><input type="checkbox" name="inApp" checked={formData.notifications.inApp} onChange={handleChange} /> In-App</label>
//               </div>
//               <select name="timezone" className="form-control mb-2" value={formData.timezone} onChange={handleChange}>
//                 <option value="">Select Timezone</option>
//                 <option value="IST">IST</option>
//                 <option value="EST">EST</option>
//               </select>
//               <div className="d-flex justify-content-between">
//                 <button className="btn btn-secondary" onClick={prevStep}>← Back</button>
//                 <button className="btn btn-primary" onClick={nextStep}>Next →</button>
//               </div>
//             </>
//           )}

//           {step === 4 && (
//             <>
//               <h5>Step 4 of 5: {formData.role === "student" ? "Academic" : "Professional"} Information</h5>

//               {formData.role === "student" ? (
//                 <>
//                   <input type="text" className="form-control mb-2" name="studentId" placeholder="Student ID" value={formData.studentId} onChange={handleChange} />
//                   <select name="semester" className="form-control mb-2" value={formData.semester} onChange={handleChange}>
//                     <option value="">Select Semester</option>
//                     <option value="1">1st</option>
//                     <option value="2">2nd</option>
//                   </select>
//                   <select multiple name="courses" className="form-control mb-2" value={formData.courses} onChange={(e) => setFormData({ ...formData, courses: Array.from(e.target.selectedOptions, option => option.value) })}>
//                     <option value="CS101">CS101</option>
//                     <option value="MATH">Math</option>
//                   </select>
//                   <input type="text" name="interests" className="form-control mb-3" placeholder="Interests" value={formData.interests} onChange={handleChange} />
//                 </>
//               ) : (
//                 <>
//                   <select name="qualifications" className="form-control mb-2" value={formData.qualifications} onChange={handleChange}>
//                     <option value="">Select Qualification</option>
//                     <option value="MSc">M.Sc</option>
//                     <option value="PhD">Ph.D</option>
//                   </select>
//                   <select multiple name="instructorSubjects" className="form-control mb-2" value={formData.instructorSubjects} onChange={(e) => setFormData({ ...formData, instructorSubjects: Array.from(e.target.selectedOptions, option => option.value) })}>
//                     <option value="AI">AI</option>
//                     <option value="ML">ML</option>
//                   </select>
//                   <select name="experience" className="form-control mb-2" value={formData.experience} onChange={handleChange}>
//                     <option value="">Years of Experience</option>
//                     <option value="1">1</option>
//                     <option value="3">3</option>
//                     <option value="5">5+</option>
//                   </select>
//                   <input type="file" name="certificates" className="form-control mb-2" onChange={handleChange} />
//                   <textarea name="bio" className="form-control mb-3" placeholder="Bio" value={formData.bio} onChange={handleChange}></textarea>
//                 </>
//               )}
//               <div className="d-flex justify-content-between">
//                 <button className="btn btn-secondary" onClick={prevStep}>← Back</button>
//                 <button className="btn btn-primary" onClick={nextStep}>Next →</button>
//               </div>
//             </>
//           )}

//           {step === 5 && (
//             <>
//               <h5>Step 5 of 5: Review & Submit</h5>
//               <pre>
                
//               </pre>
//               <button className="btn btn-secondary me-2" onClick={prevStep}>← Back</button>
//               <button className="btn btn-success">Submit</button>
//             </>
//           )}

//       </form>
//     </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
//     </div>
//   )
// }

// export default ProfileForm


// import { useState } from "react";
// import SideNavBar1 from "../../SideNavBar/SideNavBar";
// import Header1 from "../../Header/Header";

// const ProfileForm = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     profilePhoto: null,
//     address: "",
//     city: "",
//     state: "",
//     postalCode: "",
//     country: "",
//     department: "",
//     language: "",
//     notifications: {
//       email: true,
//       sms: false,
//       inApp: true,
//     },
//     timezone: "",
//     role: "student",
//     studentId: "",
//     semester: "",
//     courses: [],
//     interests: "",
//     qualifications: "",
//     instructorSubjects: [],
//     experience: "",
//     certificates: null,
//     bio: "",
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;

//     if (type === "checkbox") {
//       setFormData({
//         ...formData,
//         notifications: {
//           ...formData.notifications,
//           [name]: checked,
//         },
//       });
//     } else if (type === "file") {
//       setFormData({ ...formData, [name]: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const nextStep = () => setStep(step + 1);
//   const prevStep = () => setStep(step - 1);

//   return (
//     <div>
//       <Header1 />
//       <SideNavBar1 />
//       <div className="main-content">
//         <div className="page-content">
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-12">
//                 <div className="card">
//                   <div className="card-header">
//                     <h4 className="card-title">Profile Form</h4>
//                   </div>
//                   <div className="card-body">
//                     <form>
//                       {step === 1 && (
//                         <>
//                           <h5>Step 1 of 5: Upload Your Photo</h5>
//                           <input
//                             type="file"
//                             className="form-control mb-2"
//                             name="profilePhoto"
//                             onChange={handleChange}
//                           />
//                           <button type="button" className="btn btn-secondary me-2" onClick={nextStep}>
//                             Skip
//                           </button>
//                           <button type="button" className="btn btn-primary" onClick={nextStep}>
//                             Next →
//                           </button>
//                         </>
//                       )}

//                       {step === 2 && (
//                         <>
//                           <h5>Step 2 of 5: Personal Details</h5>
//                           <input type="text" className="form-control mb-2" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
//                           <input type="text" className="form-control mb-2" name="email" placeholder="email" value={formData.email} onChange={handleChange} />
//                           <input type="tel" className="form-control mb-2" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
//                           <input type="text" className="form-control mb-2" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
//                           <input type="text" className="form-control mb-2" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
//                           <input type="text" className="form-control mb-2" name="state" placeholder="State/Province" value={formData.state} onChange={handleChange} />
//                           <input type="text" className="form-control mb-2" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} />
//                           <select name="country" className="form-control mb-2" value={formData.country} onChange={handleChange}>
//                             <option value="">Select Country</option>
//                             <option value="India">India</option>
//                             <option value="USA">USA</option>
//                           </select>
//                           <select name="department" className="form-control mb-2" value={formData.department} onChange={handleChange}>
//                             <option value="">Select Department</option>
//                             <option value="CS">Computer Science</option>
//                             <option value="ECE">Electronics</option>
//                           </select>
//                           <div className="d-flex justify-content-between">
//                             <button type="button" className="btn btn-secondary" onClick={prevStep}>
//                               ← Back
//                             </button>
//                             <button type="button" className="btn btn-primary" onClick={nextStep}>
//                               Next →
//                             </button>
//                           </div>
//                         </>
//                       )}

//                       {step === 3 && (
//                         <>
//                           <h5>Step 3 of 5: Preferences</h5>
//                           <select name="language" className="form-control mb-2" value={formData.language} onChange={handleChange}>
//                             <option value="">Select Language</option>
//                             <option value="English">English</option>
//                             <option value="Hindi">Hindi</option>
//                           </select>
//                           <div className="mb-2">
//                             <label className="me-2">
//                               <input type="checkbox" name="email" checked={formData.notifications.email} onChange={handleChange} /> Email
//                             </label>
//                             <label className="me-2">
//                               <input type="checkbox" name="sms" checked={formData.notifications.sms} onChange={handleChange} /> SMS
//                             </label>
//                             <label>
//                               <input type="checkbox" name="inApp" checked={formData.notifications.inApp} onChange={handleChange} /> In-App
//                             </label>
//                           </div>
//                           <select name="timezone" className="form-control mb-2" value={formData.timezone} onChange={handleChange}>
//                             <option value="">Select Timezone</option>
//                             <option value="IST">IST</option>
//                             <option value="EST">EST</option>
//                           </select>
//                           <div className="d-flex justify-content-between">
//                             <button type="button" className="btn btn-secondary" onClick={prevStep}>
//                               ← Back
//                             </button>
//                             <button type="button" className="btn btn-primary" onClick={nextStep}>
//                               Next →
//                             </button>
//                           </div>
//                         </>
//                       )}

//                       {step === 4 && (
//                         <>
//                           <h5>Step 4 of 5: {formData.role === "student" ? "Academic" : "Professional"} Information</h5>

//                           {formData.role === "student" ? (
//                             <>
//                               <input type="text" className="form-control mb-2" name="studentId" placeholder="Student ID" value={formData.studentId} onChange={handleChange} />
//                               <select name="semester" className="form-control mb-2" value={formData.semester} onChange={handleChange}>
//                                 <option value="">Select Semester</option>
//                                 <option value="1">1st</option>
//                                 <option value="2">2nd</option>
//                               </select>
//                               <select multiple name="courses" className="form-control mb-2" value={formData.courses} onChange={(e) => setFormData({ ...formData, courses: Array.from(e.target.selectedOptions, option => option.value) })}>
//                                 <option value="CS101">CS101</option>
//                                 <option value="MATH">Math</option>
//                               </select>
//                               <input type="text" name="interests" className="form-control mb-3" placeholder="Interests" value={formData.interests} onChange={handleChange} />
//                             </>
//                           ) : (
//                             <>
//                               <select name="qualifications" className="form-control mb-2" value={formData.qualifications} onChange={handleChange}>
//                                 <option value="">Select Qualification</option>
//                                 <option value="MSc">M.Sc</option>
//                                 <option value="PhD">Ph.D</option>
//                               </select>
//                               <select multiple name="instructorSubjects" className="form-control mb-2" value={formData.instructorSubjects} onChange={(e) => setFormData({ ...formData, instructorSubjects: Array.from(e.target.selectedOptions, option => option.value) })}>
//                                 <option value="AI">AI</option>
//                                 <option value="ML">ML</option>
//                               </select>
//                               <select name="experience" className="form-control mb-2" value={formData.experience} onChange={handleChange}>
//                                 <option value="">Years of Experience</option>
//                                 <option value="1">1</option>
//                                 <option value="3">3</option>
//                                 <option value="5">5+</option>
//                               </select>
//                               <input type="file" name="certificates" className="form-control mb-2" onChange={handleChange} />
//                               <textarea name="bio" className="form-control mb-3" placeholder="Bio" value={formData.bio} onChange={handleChange}></textarea>
//                             </>
//                           )}
//                           <div className="d-flex justify-content-between">
//                             <button type="button" className="btn btn-secondary" onClick={prevStep}>
//                               ← Back
//                             </button>
//                             <button type="button" className="btn btn-primary" onClick={nextStep}>
//                               Next →
//                             </button>
//                           </div>
//                         </>
//                       )}

//                       {step === 5 && (
//                         <>
//                           <h5>Step 5 of 5: Review & Submit</h5>
                         
//                           <button type="button" className="btn btn-secondary me-2" onClick={prevStep}>
//                             ← Back
//                           </button>
//                           {/* <button
//   type="button"
//   className="btn btn-success"
//   onClick={async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("token");
//     const studentId = localStorage.getItem("studentId"); // ✅ corrected key

//     console.log("Submitting profile with data:", formData);

//     if (!token) {   
//       alert("You are not logged in. Please log in to submit your profile.");
//       return;
//     }

//     if (!studentId) {
//       alert("User ID not found. Please log in again.");
//       return;
//     }

//     try {
//       const response = await fetch(`/api/students/${studentId}/profile`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       if (data.success) {
//         alert("Profile updated successfully!");
//         console.log("Updated data", data.student);
//       } else {
//         alert(data.message || "Error submitting profile.");
//       }
//     } catch (err) {
//       console.error("Submission error:", err);
//       alert("Something went wrong!");
//     }
//   }}
// >
//   Submit
// </button> */}
// <button
//   type="button"
//   className="btn btn-success"
//   onClick={async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("token");
//     const studentId = localStorage.getItem("studentId");

//     if (!token) {
//       alert("You are not logged in. Please log in to submit your profile.");
//       return;
//     }

//     if (!studentId) {
//       alert("User ID not found. Please log in again.");
//       return;
//     }

//     try {
//       const formDataToSend = new FormData();

//       // Append all fields to FormData
//       for (const key in formData) {
//         if (key === "notifications") {
//           // Append each notification type individually
//           for (const notifKey in formData.notifications) {
//             formDataToSend.append(`notifications[${notifKey}]`, formData.notifications[notifKey]);
//           }
//         } else if (key === "courses" || key === "instructorSubjects") {
//           // Append multiple select fields
//           formData[key].forEach((item) => formDataToSend.append(key, item));
//         } else if (key === "profilePhoto" || key === "certificates") {
//           if (formData[key]) {
//             formDataToSend.append(key, formData[key]); // Append files only if selected
//           }
//         } else {
//           formDataToSend.append(key, formData[key]);
//         }
//       }

//       const response = await fetch(`/api/students/${studentId}/profile`, {
//         method: "PUT",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formDataToSend,
//       });

//       const data = await response.json();

//       if (data.success) {
//         alert("Profile updated successfully!");
//         console.log("Updated data", data.student);
//       } else {
//         alert(data.message || "Error submitting profile.");
//       }
//     } catch (err) {
//       console.error("Submission error:", err);
//       alert("Something went wrong!");
//     }
//   }}
// >
//   Submit
// </button>


//                         </>
//                       )}
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileForm;

import { useState } from "react";
import SideNavBar1 from "../../SideNavBar/SideNavBar";
import Header1 from "../../Header/Header";

const ProfileForm = () => {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profilePhoto: null,
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    department: "",
    reference:"",
    language: "",
    notifications: {
      email: true,
      sms: false,
      inApp: true,
    },
    timezone: "",
    role: "student",
    semester: "",
    courses: [],
    interests: "",
    qualifications: "",
    instructorSubjects: [],
    experience: "",
    certificates: null,
    bio: "",
  });

  const validateStep = (currentStep) => {
    const newErrors = {};

    if (currentStep === 2) {
      if (!formData.name.trim()) newErrors.name = "Full name is required";
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
      } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
        newErrors.phone = "Please enter a valid 10-digit phone number";
      }
      if (!formData.address.trim()) newErrors.address = "Address is required";
      if (!formData.city.trim()) newErrors.city = "City is required";
      if (!formData.state.trim()) newErrors.state = "State/Province is required";
      if (!formData.postalCode.trim()) newErrors.postalCode = "Postal code is required";
      if (!formData.country) newErrors.country = "Please select a country";
      if (!formData.department) newErrors.department = "Please select a department";
      if (!formData.reference) newErrors.reference = "Please select a reference";
    }

    if (currentStep === 3) {
      if (!formData.language) newErrors.language = "Please select a language";
      if (!formData.timezone) newErrors.timezone = "Please select a timezone";
    }

    if (currentStep === 4) {
      if (formData.role === "student") {
        if (!formData.semester) newErrors.semester = "Please select a semester";
        if (formData.courses.length === 0) newErrors.courses = "Please select at least one course";
      } else {
        if (!formData.qualifications) newErrors.qualifications = "Please select your qualification";
        if (formData.instructorSubjects.length === 0) newErrors.instructorSubjects = "Please select at least one subject";
        if (!formData.experience) newErrors.experience = "Please select years of experience";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData({
        ...formData,
        notifications: {
          ...formData.notifications,
          [name]: checked,
        },
      });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(step - 1);

  return (
    <div>
      <Header1 />
      <SideNavBar1 />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Profile Form</h4>
                  </div>
                  <div className="card-body">
                    <div>
                      {step === 1 && (
                        <>
                          <h5>Step 1 of 5: Upload Your Photo</h5>
                          <input
                            type="file"
                            className="form-control mb-2"
                            name="profilePhoto"
                            onChange={handleChange}
                          />
                          <button type="button" className="btn btn-secondary me-2" onClick={nextStep}>
                            Skip
                          </button>
                          <button type="button" className="btn btn-primary" onClick={nextStep}>
                            Next →
                          </button>
                        </>
                      )}

                      {step === 2 && (
                        <>
                          <h5>Step 2 of 5: Personal Details</h5>
                          <input 
                            type="text" 
                            className={`form-control mb-2 ${errors.name ? 'is-invalid' : ''}`}
                            name="name" 
                            placeholder="Full Name" 
                            value={formData.name} 
                            onChange={handleChange} 
                          />
                          {errors.name && <div className="invalid-feedback d-block">{errors.name}</div>}
                          
                          <input 
                            type="text" 
                            className={`form-control mb-2 ${errors.email ? 'is-invalid' : ''}`}
                            name="email" 
                            placeholder="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                          />
                          {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
                          
                          <input 
  type="tel" 
  className={`form-control mb-2 ${errors.phone ? 'is-invalid' : ''}`}
  name="phone" 
  placeholder="Phone Number" 
  value={formData.phone} 
  onChange={(e) => {
    // Keep only digits
    const onlyDigits = e.target.value.replace(/\D/g, '');
    // Allow max 10 digits
    if (onlyDigits.length <= 10) {
      handleChange({ target: { name: 'phone', value: onlyDigits } });
    }
  }}
  maxLength="10"
/>
{errors.phone && <div className="invalid-feedback d-block">{errors.phone}</div>}

                          
                          <input 
                            type="text" 
                            className={`form-control mb-2 ${errors.address ? 'is-invalid' : ''}`}
                            name="address" 
                            placeholder="Address" 
                            value={formData.address} 
                            onChange={handleChange} 
                          />
                          {errors.address && <div className="invalid-feedback d-block">{errors.address}</div>}
                          
                          <input 
                            type="text" 
                            className={`form-control mb-2 ${errors.city ? 'is-invalid' : ''}`}
                            name="city" 
                            placeholder="City" 
                            value={formData.city} 
                            onChange={handleChange} 
                          />
                          {errors.city && <div className="invalid-feedback d-block">{errors.city}</div>}
                          
                          <input 
                            type="text" 
                            className={`form-control mb-2 ${errors.state ? 'is-invalid' : ''}`}
                            name="state" 
                            placeholder="State/Province" 
                            value={formData.state} 
                            onChange={handleChange} 
                          />
                          {errors.state && <div className="invalid-feedback d-block">{errors.state}</div>}
                          
                          <input 
                            type="text" 
                            className={`form-control mb-2 ${errors.postalCode ? 'is-invalid' : ''}`}
                            name="postalCode" 
                            placeholder="Postal Code" 
                            value={formData.postalCode} 
                            onChange={handleChange} 
                          />
                          {errors.postalCode && <div className="invalid-feedback d-block">{errors.postalCode}</div>}
                          
                          <select 
                            name="country" 
                            className={`form-control mb-2 ${errors.country ? 'is-invalid' : ''}`}
                            value={formData.country} 
                            onChange={handleChange}
                          >
                            <option value="">Select Country</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                          </select>
                          {errors.country && <div className="invalid-feedback d-block">{errors.country}</div>}
                          
                          <select 
                            name="reference" 
                            className={`form-control mb-2 ${errors.reference? 'is-invalid' : ''}`}
                            value={formData.reference} 
                            onChange={handleChange}
                          >
                            <option value="">Select Reference</option>
                            <option value="Twitter">Twitter</option>
                            <option value="Whatsapp">Whatsapp</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Facebook">Facebook</option>
                          </select>
                          {errors.reference && <div className="invalid-feedback d-block">{errors.reference}</div>}
                          <select 
                            name="department" 
                            className={`form-control mb-2 ${errors.department ? 'is-invalid' : ''}`}
                            value={formData.department} 
                            onChange={handleChange}
                          >
                            <option value="">Select Department</option>
                            <option value="CS">Computer Science</option>
                            <option value="ECE">Electronics</option>
                          </select>
                          {errors.department && <div className="invalid-feedback d-block">{errors.department}</div>}

                          
                          <div className="d-flex justify-content-between">
                            <button type="button" className="btn btn-secondary" onClick={prevStep}>
                              ← Back
                            </button>
                            <button type="button" className="btn btn-primary" onClick={nextStep}>
                              Next →
                            </button>
                          </div>
                        </>
                      )}

                      {step === 3 && (
                        <>
                          <h5>Step 3 of 5: Preferences</h5>
                          <select 
                            name="language" 
                            className={`form-control mb-2 ${errors.language ? 'is-invalid' : ''}`}
                            value={formData.language} 
                            onChange={handleChange}
                          >
                            <option value="">Select Language</option>
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                          </select>
                          {errors.language && <div className="invalid-feedback d-block">{errors.language}</div>}
                          
                          <div className="mb-2">
                            <label className="me-2">
                              <input type="checkbox" name="email" checked={formData.notifications.email} onChange={handleChange} /> Email
                            </label>
                            <label className="me-2">
                              <input type="checkbox" name="sms" checked={formData.notifications.sms} onChange={handleChange} /> SMS
                            </label>
                            <label>
                              <input type="checkbox" name="inApp" checked={formData.notifications.inApp} onChange={handleChange} /> In-App
                            </label>
                          </div>
                          
                          <select 
                            name="timezone" 
                            className={`form-control mb-2 ${errors.timezone ? 'is-invalid' : ''}`}
                            value={formData.timezone} 
                            onChange={handleChange}
                          >
                            <option value="">Select Timezone</option>
                            <option value="IST">IST</option>
                            <option value="EST">EST</option>
                          </select>
                          {errors.timezone && <div className="invalid-feedback d-block">{errors.timezone}</div>}
                          
                          <div className="d-flex justify-content-between">
                            <button type="button" className="btn btn-secondary" onClick={prevStep}>
                              ← Back
                            </button>
                            <button type="button" className="btn btn-primary" onClick={nextStep}>
                              Next →
                            </button>
                          </div>
                        </>
                      )}

                      {step === 4 && (
                        <>
                          <h5>Step 4 of 5: {formData.role === "student" ? "Academic" : "Professional"} Information</h5>

                          {formData.role === "student" ? (
                            <>
                              <select 
                                name="semester" 
                                className={`form-control mb-2 ${errors.semester ? 'is-invalid' : ''}`}
                                value={formData.semester} 
                                onChange={handleChange}
                              >
                                <option value="">Select Semester</option>
                                <option value="1">1st</option>
                                <option value="2">2nd</option>
                              </select>
                              {errors.semester && <div className="invalid-feedback d-block">{errors.semester}</div>}
                              
                              <select 
                                multiple 
                                name="courses" 
                                className={`form-control mb-2 ${errors.courses ? 'is-invalid' : ''}`}
                                value={formData.courses} 
                                onChange={(e) => setFormData({ ...formData, courses: Array.from(e.target.selectedOptions, option => option.value) })}
                              >
                                <option value="CS101">CS101</option>
                                <option value="MATH">Math</option>
                              </select>
                              {errors.courses && <div className="invalid-feedback d-block">{errors.courses}</div>}
                              
                              <input type="text" name="interests" className="form-control mb-3" placeholder="Interests" value={formData.interests} onChange={handleChange} />
                            </>
                          ) : (
                            <>
                              <select 
                                name="qualifications" 
                                className={`form-control mb-2 ${errors.qualifications ? 'is-invalid' : ''}`}
                                value={formData.qualifications} 
                                onChange={handleChange}
                              >
                                <option value="">Select Qualification</option>
                                <option value="MSc">M.Sc</option>
                                <option value="PhD">Ph.D</option>
                              </select>
                              {errors.qualifications && <div className="invalid-feedback d-block">{errors.qualifications}</div>}
                              
                              <select 
                                multiple 
                                name="instructorSubjects" 
                                className={`form-control mb-2 ${errors.instructorSubjects ? 'is-invalid' : ''}`}
                                value={formData.instructorSubjects} 
                                onChange={(e) => setFormData({ ...formData, instructorSubjects: Array.from(e.target.selectedOptions, option => option.value) })}
                              >
                                <option value="AI">AI</option>
                                <option value="ML">ML</option>
                              </select>
                              {errors.instructorSubjects && <div className="invalid-feedback d-block">{errors.instructorSubjects}</div>}
                              
                              <select 
                                name="experience" 
                                className={`form-control mb-2 ${errors.experience ? 'is-invalid' : ''}`}
                                value={formData.experience} 
                                onChange={handleChange}
                              >
                                <option value="">Years of Experience</option>
                                <option value="1">1</option>
                                <option value="3">3</option>
                                <option value="5">5+</option>
                              </select>
                              {errors.experience && <div className="invalid-feedback d-block">{errors.experience}</div>}
                              
                              <input type="file" name="certificates" className="form-control mb-2" onChange={handleChange} />
                              <textarea name="bio" className="form-control mb-3" placeholder="Bio" value={formData.bio} onChange={handleChange}></textarea>
                            </>
                          )}
                          <div className="d-flex justify-content-between">
                            <button type="button" className="btn btn-secondary" onClick={prevStep}>
                              ← Back
                            </button>
                            <button type="button" className="btn btn-primary" onClick={nextStep}>
                              Next →
                            </button>
                          </div>
                        </>
                      )}

                      {step === 5 && (
                        <>
                          <h5>Step 5 of 5: Submit</h5>
                         
                          <button type="button" className="btn btn-secondary me-2" onClick={prevStep}>
                            ← Back
                          </button>
                          <button
                            type="button"
                            className="btn btn-success"
                            onClick={async (e) => {
                              e.preventDefault();
                              const token = localStorage.getItem("token");
                              const studentId = localStorage.getItem("studentId");

                              if (!token) {
                                alert("You are not logged in. Please log in to submit your profile.");
                                return;
                              }

                              if (!studentId) {
                                alert("User ID not found. Please log in again.");
                                return;
                              }

                              try {
                                const formDataToSend = new FormData();

                                // Append all fields to FormData
                                for (const key in formData) {
                                  if (key === "notifications") {
                                    // Append each notification type individually
                                    for (const notifKey in formData.notifications) {
                                      formDataToSend.append(`notifications[${notifKey}]`, formData.notifications[notifKey]);
                                    }
                                  } else if (key === "courses" || key === "instructorSubjects") {
                                    // Append multiple select fields
                                    formData[key].forEach((item) => formDataToSend.append(key, item));
                                  } else if (key === "profilePhoto" || key === "certificates") {
                                    if (formData[key]) {
                                      formDataToSend.append(key, formData[key]); // Append files only if selected
                                    }
                                  } else {
                                    formDataToSend.append(key, formData[key]);
                                  }
                                }

                                const response = await fetch(`http://localhost:8080/api/students/${studentId}/profile`, {
                                  method: "PUT",
                                  headers: {
                                    Authorization: `Bearer ${token}`,
                                  },
                                  body: formDataToSend,
                                });

                                const data = await response.json();

                                if (data.success) {
                                  alert("Profile updated successfully!");
                                  console.log("Updated data", data.student);
                                } else {
                                  alert(data.message || "Error submitting profile.");
                                }
                              } catch (err) {
                                console.error("Submission error:", err);
                                alert("Something went wrong!");
                              }
                            }}
                          >
                            Submit
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;

