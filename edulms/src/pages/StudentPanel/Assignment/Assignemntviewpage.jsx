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



import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const AssessmentPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const assessment = state?.assessment;

  useEffect(() => {
    if (!assessment) navigate('/dashboard');
  }, [assessment, navigate]);

  const handleChange = (questionIndex, value) => {
    setAnswers(prev => ({ ...prev, [questionIndex]: value }));
  };

  const handleSubmit = async () => {
    const studentId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');

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
      await axios.post('http://localhost:8080/api/submit-assessment', submission, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Assessment submitted!');
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      alert('Failed to submit');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-4">
      <h2>{assessment.name}</h2>
      <p>Course: {assessment.courseId?.courseName || 'N/A'}</p>

      {assessment.questions?.map((q, index) => (
        <div key={index} className="mb-4">
          <p><strong>Q{index + 1}:</strong> {q.questionText}</p>

          {q.type === 'mcq' && (
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
                    /> {opt}
                  </label>
                </li>
              ))}
            </ul>
          )}

          {(q.type === 'short' || q.type === 'long') && (
            <textarea
              rows={q.type === 'short' ? 2 : 4}
              className="w-full border p-1"
              value={answers[index] || ''}
              onChange={e => handleChange(index, e.target.value)}
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
    </div>
  );
};

export default AssessmentPage;

