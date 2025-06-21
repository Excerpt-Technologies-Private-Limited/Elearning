// import { useLocation, useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

// const AssessmentPage = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!state?.assessment) {
//       // If someone manually visits /assessment, redirect back
//       navigate('/dashboard');
//     }
//   }, [state, navigate]);

//   const assessment = state?.assessment;

//   return (
//     <div className="p-4">
//       <h2>{assessment.name}</h2>
//       <p>Course: {assessment.courseId?.courseName || 'N/A'}</p>

//       {assessment.questions?.map((q, index) => (
//         <div key={index} className="mb-4">
//           <p><strong>Q{index + 1}:</strong> {q.questionText}</p>

//           {q.type === 'mcq' && (
//             <ul className="ml-4">
//               {q.options.map((opt, i) => (
//                 <li key={i}>
//                   <label>
//                     <input type="radio" name={`q${index}`} value={opt} /> {opt}
//                   </label>
//                 </li>
//               ))}
//             </ul>
//           )}

//           {q.type === 'short' || q.type === 'long' ? (
//             <textarea rows={q.type === 'short' ? 2 : 4} className="w-full border p-1" />
//           ) : null}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AssessmentPage;

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header1 from "../../Header/Header";
import SideNavBar1 from "../../SideNavBar/SideNavBar";
import axios from "axios";

const AssessmentPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const assessment = state?.assessment;

  useEffect(() => {
    if (!assessment) navigate("/dashboard");
  }, [assessment, navigate]);

  const handleChange = (questionIndex, value) => {
    setAnswers((prev) => ({ ...prev, [questionIndex]: value }));
  };

  const handleSubmit = async () => {
    const studentId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    const submission = {
      studentId,
      assessmentId: assessment._id,
      answers: assessment.questions.map((q, index) => ({
        questionText: q.questionText,
        type: q.type,
        correctAnswer: q.answer, // Optional: for frontend verification
        userAnswer: answers[index] || "",
      })),
    };

    try {
      setSubmitting(true);
      await axios.post(
        "http://localhost:8080/api/submit-assessment",
        submission,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Assessment submitted!");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Failed to submit");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* <div className="p-4">
        <h2>{assessment.name}</h2>
        <p>Course: {assessment.courseId?.courseName || "N/A"}</p>

        {assessment.questions?.map((q, index) => (
          <div key={index} className="mb-4">
            <p>
              <strong>Q{index + 1}:</strong> {q.questionText}
            </p>

            {q.type === "mcq" && (
              <ul className="ml-4">
                {q.options.map((opt, i) => (
                  <li key={i}>
                    <label>
                      <input
                        type="radio"
                        name={`q${index}`}
                        value={opt}
                        onChange={() => handleChange(index, opt)}
                        checked={answers[index] === opt}
                      />{" "}
                      {opt}
                    </label>
                  </li>
                ))}
              </ul>
            )}

            {(q.type === "short" || q.type === "long") && (
              <textarea
                rows={q.type === "short" ? 2 : 4}
                className="w-full border p-1"
                value={answers[index] || ""}
                onChange={(e) => handleChange(index, e.target.value)}
              />
            )}
          </div>
        ))}

        <button
          className="bg-green-600 text-dark px-4 py-2 rounded"
          disabled={submitting}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div> */}

      <Header1 />
      <SideNavBar1 />
      <div className="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 class="mb-sm-0 font-size-18">AssessmentPage</h4>

                  <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                      <li class="breadcrumb-item">
                        <a href="javascript: void(0);">DashBoard</a>
                      </li>
                      <li class="breadcrumb-item active">AssessmentPage</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="card p-2">
                  <div className="card-header bg-primary text-white d-flex justify-content-between">
                    <div>
                    <h4 className="mb-0 text-white">Quiz: {assessment.name}</h4>
                    </div>
                    <div>
                       <p className="text-white mb-4">
                      Course: {assessment.courseId?.courseName || "N/A"}
                    </p>
                    </div>
                  </div>
                  <div className="card-body">
                    {assessment.questions?.map((q, idx) => (
                      <div key={idx} className="mb-4">
                        <p className="fw-semibold">
                          Q{idx + 1}. {q.questionText}
                        </p>

                        {q.type === "mcq" && (
                          <div className="list-group">
                            {q.options.map((opt, optIdx) => (
                              <label
                                key={optIdx}
                                className="list-group-item list-group-item-action"
                              >
                                <input
                                  type="radio"
                                  className="form-check-input me-2"
                                  name={`q${idx}`}
                                  value={opt}
                                  onChange={() => handleChange(idx, opt)}
                                  checked={answers[idx] === opt}
                                />
                                {opt}
                              </label>
                            ))}
                          </div>
                        )}

                        {(q.type === "short" || q.type === "long") && (
                          <textarea
                            rows={q.type === "short" ? 2 : 4}
                            className="form-control mt-2"
                            value={answers[idx] || ""}
                            onChange={(e) => handleChange(idx, e.target.value)}
                          />
                        )}
                      </div>
                    ))}

                    <button
                      className="btn btn-success"
                      disabled={submitting}
                      onClick={handleSubmit}
                    >
                      {submitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssessmentPage;
