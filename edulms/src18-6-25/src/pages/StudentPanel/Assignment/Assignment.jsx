import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header1 from "../../Header/Header";
import SideNavBar1 from "../../SideNavBar/SideNavBar";

export default function AssigngmentStudent1() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId"); // ✅ Get userId
        console.log("Fetching dashboard for userId:", userId);
        const res = await axios.get(
          `http://localhost:8080/api/dashboard?userId=${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setData(res.data);
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };

    fetchDashboard();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Header1 />
      <SideNavBar1 />

      <div className="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <div className="mb-4">
              <h3 className="fw-bold">Assignment</h3>
              <p className="text-muted">
                Welcome back! Here’s a quick overview of your activity.
              </p>
            </div>

            <div className="row mb-4">
              {/* Student Profile */}
              {/* <div className="col-md-12 mb-3">
                <div className="card shadow">
                  <div className="card-body">
                    <div class="pt-md-5 p-4 d-flex" style={{ height: "36vh" }}>
                      <div class="bg-overlay bg-warning"></div>
                      <ul class="bg-bubbles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>

                      <div class="row">
                        <h1 className="text-black">
                          👋 Welcome back, {data.student.username}
                        </h1>
                        <p className="text-black"> Your Courses:</p>
                        <div>
                          {data.enrolledCourses.map((course) => (
                            <p key={course._id}>{course.courseName}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12 mb-3">
                <h4>Available Assessments:</h4>
                {data.assessments.map((assess) => {
                  const submission = data.submissionMap?.[assess._id];
                  const isSubmitted = submission?.submitted;

                  return (
                    <div className="row">
                    <div key={assess._id} className="col-xl-4 mb-4">
                      <div class="card p-1 h-100">
                        <div  className="p-3">
                      <span className="text-muted">
                        {assess.name} (Course:{" "}
                        {assess.courseId?.courseName || "N/A"})
                      </span>

                      {isSubmitted ? (
                        <span className="text-primary">
                          Submitted | Score: {submission.score}
                        </span>
                      ) : (
                        <button
                          className="text-primary"
                          onClick={() =>
                            navigate("/assignmentviewpage", {
                              state: { assessment: assess },
                            })
                          }
                        >
                          Take Assessment
                        </button>
                      )}
                    </div>
                    </div>
                    </div>
                    </div>
                  );
                })}
              </div> */}

              <div className="row mb-4">
                {/* Student Profile */}
                <div className="col-md-12 mb-3">
                  <div className="card ">
                    <div className="card-body">
                      <div
                        className="pt-md-5 p-4 d-flex"
                        style={{ height: "36vh" }}
                      >
                        <div className="bg-overlay bg-warning"></div>
                        <ul className="bg-bubbles">
                          {[...Array(10)].map((_, i) => (
                            <li key={i}></li>
                          ))}
                        </ul>

                        <div className="row">
                          <h1 className="text-black">
                            👋 Welcome back, {data.student.username}
                          </h1>
                          <p className="text-black">Your Courses:</p>
                          <div>
                            {data.enrolledCourses.map((course) => (
                              <p key={course._id}>{course.courseName}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Available Assessments */}
                <div className="col-md-12 mb-3">
                  <h4>Available Assessments:</h4>
                  <div className="row">
                    {data.assessments.map((assess) => {
                      const submission = data.submissionMap?.[assess._id];
                      const isSubmitted = submission?.submitted;

                      return (
                        <div
                          key={assess._id}
                          className="col-md-6 col-lg-4 col-xl-3 mb-4"
                        >
                          <div className="card h-100 p-3">
                            <div>
                            <h5 className="text-dark">{assess.name}</h5>
                            <p className="mb-2 text-muted">
                              Course: {assess.courseId?.courseName || "N/A"}
                            </p>
                            </div>
                            <div>
                            {isSubmitted ? (
                              <span className="badge text-success">
                                Submitted | Score: {submission.score}
                              </span>
                            ) : (
                              <button
                                className="text-primary"
                                onClick={() =>
                                  navigate("/assignmentviewpage", {
                                    state: { assessment: assess },
                                  })
                                }
                              >
                                Take Assessment <i className="mdi mdi-arrow-right"></i>
                              </button>
                            )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const StudentDashboard = () => {
//   const [data, setData] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDashboard = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const userId = localStorage.getItem('userId'); // ✅ Get userId
// console.log('Fetching dashboard for userId:', userId);
//         const res = await axios.get(`/api/dashboard?userId=${userId}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         setData(res.data);
//       } catch (error) {
//         console.error('Fetch Error:', error);
//       }
//     };

//     fetchDashboard();
//   }, []);

//   if (!data) return <div>Loading...</div>;

//   return (
//     <div className="p-4">
//       <h2>Welcome, {data.student.username}</h2>

//       <h3>Your Courses:</h3>
//       <ul>
//         {data.enrolledCourses.map(course => (
//           <li key={course._id}>{course.courseName}</li>
//         ))}
//       </ul>

//       <h3 className="mt-4">Available Assessments:</h3>

//        <h3 className="mt-4">Available Assessments:</h3>
// <ul>
//   {data.assessments.map((assess) => {
//     const submission = data.submissionMap?.[assess._id];
//     const isSubmitted = submission?.submitted;

//     return (
//       <li key={assess._id} className="mb-2">
//         <span>
//           {assess.name} (Course: {assess.courseId?.courseName || 'N/A'})
//         </span>

//         {isSubmitted ? (
//           <span className="ml-4 text-green-600 font-semibold">
//             Submitted | Score: {submission.score}
//           </span>
//         ) : (
//           <button
//             className="ml-4 px-2 py-1 bg-blue-500 text-white rounded"
//             onClick={() => navigate('/assignmentviewpage', { state: { assessment: assess } })}
//           >
//             Take Assessment
//           </button>
//         )}
//       </li>
//     );
//   })}
// </ul>

//     </div>
//   );
// };

// export default StudentDashboard;
