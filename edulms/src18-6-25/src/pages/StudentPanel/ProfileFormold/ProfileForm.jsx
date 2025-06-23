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



import { useState } from "react";
import SideNavBar1 from "../../SideNavBar/SideNavBar";
import Header1 from "../../Header/Header";

const ProfileForm = () => {
  const [step, setStep] = useState(1);
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
    language: "",
    notifications: {
      email: true,
      sms: false,
      inApp: true,
    },
    timezone: "",
    role: "student",
    studentId: "",
    semester: "",
    courses: [],
    interests: "",
    qualifications: "",
    instructorSubjects: [],
    experience: "",
    certificates: null,
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        notifications: {
          ...prev.notifications,
          [name]: checked,
        },
      }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const studentId = localStorage.getItem("studentId");

    if (!token) return alert("Please login to continue.");
    if (!studentId) return alert("User ID missing. Please login again.");
    if (!formData.name || !formData.email) return alert("Name and Email are required.");

    try {
      const formDataToSend = new FormData();

      for (const key in formData) {
        if (key === "notifications") {
          for (const notifKey in formData.notifications) {
            formDataToSend.append(`notifications[${notifKey}]`, formData.notifications[notifKey]);
          }
        } else if (key === "courses" || key === "instructorSubjects") {
          formData[key].forEach((item) => formDataToSend.append(key, item));
        } else if (key === "profilePhoto" || key === "certificates") {
          if (formData[key]) formDataToSend.append(key, formData[key]);
        } else {
          formDataToSend.append(key, formData[key]);
        }
      }

      const response = await fetch(`/api/students/${studentId}/profile`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
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
  };

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
                    <form>
                      {step === 1 && (
                        <>
                          <h5>Step 1 of 5: Upload Your Photo</h5>
                          <input
                            type="file"
                            className="form-control mb-2"
                            name="profilePhoto"
                            onChange={handleChange}
                          />
                          {formData.profilePhoto && (
                            <img
                              src={URL.createObjectURL(formData.profilePhoto)}
                              alt="Preview"
                              width={100}
                              className="mb-2"
                            />
                          )}
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
                          <input type="text" className="form-control mb-2" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
                          <input type="email" className="form-control mb-2" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                          <input type="tel" className="form-control mb-2" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                          <input type="text" className="form-control mb-2" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
                          <input type="text" className="form-control mb-2" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
                          <input type="text" className="form-control mb-2" name="state" placeholder="State/Province" value={formData.state} onChange={handleChange} />
                          <input type="text" className="form-control mb-2" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} />
                          <select name="country" className="form-control mb-2" value={formData.country} onChange={handleChange}>
                            <option value="">Select Country</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                          </select>
                          <select name="department" className="form-control mb-2" value={formData.department} onChange={handleChange}>
                            <option value="">Select Department</option>
                            <option value="CS">Computer Science</option>
                            <option value="ECE">Electronics</option>
                          </select>
                          <select name="role" className="form-control mb-2" value={formData.role} onChange={handleChange}>
                            <option value="student">Student</option>
                            <option value="instructor">Instructor</option>
                          </select>
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
                          <select name="language" className="form-control mb-2" value={formData.language} onChange={handleChange}>
                            <option value="">Select Language</option>
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                          </select>
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
                          <select name="timezone" className="form-control mb-2" value={formData.timezone} onChange={handleChange}>
                            <option value="">Select Timezone</option>
                            <option value="IST">India Standard Time (IST)</option>
                            <option value="EST">Eastern Standard Time (EST)</option>
                          </select>
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
                              <input type="text" className="form-control mb-2" name="studentId" placeholder="Student ID" value={formData.studentId} onChange={handleChange} />
                              <select name="semester" className="form-control mb-2" value={formData.semester} onChange={handleChange}>
                                <option value="">Select Semester</option>
                                <option value="1">1st</option>
                                <option value="2">2nd</option>
                              </select>
                              <select multiple name="courses" className="form-control mb-2" value={formData.courses} onChange={(e) => setFormData({ ...formData, courses: Array.from(e.target.selectedOptions, option => option.value) })}>
                                <option value="CS101">CS101</option>
                                <option value="MATH">Math</option>
                              </select>
                              <input type="text" name="interests" className="form-control mb-3" placeholder="Interests" value={formData.interests} onChange={handleChange} />
                            </>
                          ) : (
                            <>
                              <select name="qualifications" className="form-control mb-2" value={formData.qualifications} onChange={handleChange}>
                                <option value="">Select Qualification</option>
                                <option value="MSc">M.Sc</option>
                                <option value="PhD">Ph.D</option>
                              </select>
                              <select multiple name="instructorSubjects" className="form-control mb-2" value={formData.instructorSubjects} onChange={(e) => setFormData({ ...formData, instructorSubjects: Array.from(e.target.selectedOptions, option => option.value) })}>
                                <option value="AI">AI</option>
                                <option value="ML">ML</option>
                              </select>
                              <select name="experience" className="form-control mb-2" value={formData.experience} onChange={handleChange}>
                                <option value="">Years of Experience</option>
                                <option value="1">1</option>
                                <option value="3">3</option>
                                <option value="5">5+</option>
                              </select>
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
                          <h5>Step 5 of 5: Review & Submit</h5>
                          <button type="button" className="btn btn-secondary me-2" onClick={prevStep}>
                            ← Back
                          </button>
                          <button type="button" className="btn btn-success" onClick={handleSubmit}>
                            Submit
                          </button>
                        </>
                      )}
                    </form>
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
