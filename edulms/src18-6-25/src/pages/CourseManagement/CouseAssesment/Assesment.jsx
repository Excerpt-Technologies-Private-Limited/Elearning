

// import React, { useState } from 'react';

// const AssessmentBuilder = () => {
//   const [assessmentName, setAssessmentName] = useState('');
//   const [questions, setQuestions] = useState([]);

//   const handleAddQuestion = () => {
//     setQuestions([...questions, {
//       type: 'mcq',
//       questionText: '',
//       options: ['', '', '', ''],
//       answer: '',
//     }]);
//   };

//   const handleQuestionChange = (index, field, value) => {
//     const updated = [...questions];
//     updated[index][field] = value;
//     setQuestions(updated);
//   };

//   const handleOptionChange = (qIndex, optIndex, value) => {
//     const updated = [...questions];
//     updated[qIndex].options[optIndex] = value;
//     setQuestions(updated);
//   };

//   const handleTypeChange = (index, newType) => {
//     const updated = [...questions];
//     updated[index] = {
//       type: newType,
//       questionText: '',
//       options: newType === 'mcq' ? ['', '', '', ''] : [],
//       answer: '',
//     };
//     setQuestions(updated);
//   };

//   const handleRemoveQuestion = (index) => {
//     setQuestions(questions.filter((_, i) => i !== index));
//   };

//   const handleSubmit = () => {
//     const assessmentData = {
//       name: assessmentName,
//       questions: questions,
//     };
//     console.log('Submit this to backend:', assessmentData);
//     // axios.post('/api/assessment', assessmentData)
//   };

//   return (
//     <div className="p-4 max-w-3xl mx-auto">
//       <h2 className="text-xl font-bold mb-4">Create New Assessment</h2>

//       <input
//         className="w-full border p-2 mb-4"
//         placeholder="Assessment Name (e.g., Final Test)"
//         value={assessmentName}
//         onChange={(e) => setAssessmentName(e.target.value)}
//       />

//       {questions.map((q, index) => (
//         <div key={index} className="border p-4 mb-4 rounded">
//           <div className="flex justify-between">
//             <h3 className="font-semibold">Question {index + 1}</h3>
//             <button onClick={() => handleRemoveQuestion(index)} className="text-red-500">Delete</button>
//           </div>

//           <select
//             className="border p-1 mt-2"
//             value={q.type}
//             onChange={(e) => handleTypeChange(index, e.target.value)}
//           >
//             <option value="mcq">Multiple Choice</option>
//             <option value="short">One Line Answer</option>
//             <option value="long">Paragraph Answer</option>
//           </select>

//           <textarea
//             className="w-full border p-2 mt-2"
//             placeholder="Enter question here"
//             value={q.questionText}
//             onChange={(e) => handleQuestionChange(index, 'questionText', e.target.value)}
//           />

//           {q.type === 'mcq' && (
//             <div className="mt-2 space-y-1">
//               {q.options.map((opt, optIndex) => (
//                 <input
//                   key={optIndex}
//                   className="w-full border p-1"
//                   placeholder={`Option ${optIndex + 1}`}
//                   value={opt}
//                   onChange={(e) => handleOptionChange(index, optIndex, e.target.value)}
//                 />
//               ))}
//               <input
//                 className="w-full border p-1 mt-2"
//                 placeholder="Correct Answer"
//                 value={q.answer}
//                 onChange={(e) => handleQuestionChange(index, 'answer', e.target.value)}
//               />
//             </div>
//           )}

//           {(q.type === 'short' || q.type === 'long') && (
//             <input
//               className="w-full border p-2 mt-2"
//               placeholder="Correct Answer"
//               value={q.answer}
//               onChange={(e) => handleQuestionChange(index, 'answer', e.target.value)}
//             />
//           )}
//         </div>
//       ))}

//       <button
//         onClick={handleAddQuestion}
//         className="bg-blue-500 text-dark px-4 py-2 rounded"
//       >
//         Add Question
//       </button>

//       <button
//         onClick={handleSubmit}
//         className="bg-green-500 text-dark px-4 py-2 rounded ml-2"
//       >
//         Save Assessment
//       </button>
//     </div>
//   );
// };

// export default AssessmentBuilder;


// import React, { useEffect, useState } from 'react';
// import Header1 from '../../Header/Header';
// import SideNavBar1 from '../../SideNavBar/SideNavBar';
// import axios from 'axios';

// const AssessmentBuilderModal = ({ courseId, courseName, onClose }) => {
//   const [assessmentName, setAssessmentName] = useState('');
//   const [questions, setQuestions] = useState([]);

//   const handleAddQuestion = () => {
//     setQuestions([...questions, {
//       type: 'mcq',
//       questionText: '',
//       options: ['', '', '', ''],
//       answer: '',
//     }]);
//   };

//   const handleQuestionChange = (index, field, value) => {
//     const updated = [...questions];
//     updated[index][field] = value;
//     setQuestions(updated);
//   };

//   const handleOptionChange = (qIndex, optIndex, value) => {
//     const updated = [...questions];
//     updated[qIndex].options[optIndex] = value;
//     setQuestions(updated);
//   };

//   const handleTypeChange = (index, newType) => {
//     const updated = [...questions];
//     updated[index] = {
//       type: newType,
//       questionText: '',
//       options: newType === 'mcq' ? ['', '', '', ''] : [],
//       answer: '',
//     };
//     setQuestions(updated);
//   };

//   const handleRemoveQuestion = (index) => {
//     setQuestions(questions.filter((_, i) => i !== index));
//   };

//   const handleSubmit = async () => {
//     const assessmentData = {
//       courseId,
//       name: assessmentName,
//       questions,
//     };

//     try {
//       await axios.post('/api/assessments', assessmentData);
//       alert('Assessment saved successfully!');
//       onClose();
//     } catch (err) {
//       alert('Error saving assessment');
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded-lg w-[700px] max-h-[80vh] overflow-y-auto">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-bold text-dark">Assessment for {courseName}</h2>
//           <button onClick={onClose} className="text-red-500 font-bold text-xl">×</button>
//         </div>

//         <input
//           className="w-full border p-2 mb-4"
//           placeholder="Assessment Name"
//           value={assessmentName}
//           onChange={(e) => setAssessmentName(e.target.value)}
//         />

//         {questions.map((q, index) => (
//           <div key={index} className="border p-3 mb-3 rounded">
//             <div className="flex justify-between items-center">
//               <div className="font-semibold text-dark">Question {index + 1}</div>
//               <button onClick={() => handleRemoveQuestion(index)} className="text-red-500">Delete</button>
//             </div>

//             <select
//               className="border p-1 mt-2 w-full"
//               value={q.type}
//               onChange={(e) => handleTypeChange(index, e.target.value)}
//             >
//               <option value="mcq">Multiple Choice</option>
//               <option value="short">One Line</option>
//               <option value="long">Paragraph</option>
//             </select>

//             <textarea
//               className="w-full border p-2 mt-2"
//               placeholder="Enter question"
//               value={q.questionText}
//               onChange={(e) => handleQuestionChange(index, 'questionText', e.target.value)}
//             />

//             {q.type === 'mcq' && (
//               <div className="mt-2 space-y-1">
//                 {q.options.map((opt, optIndex) => (
//                   <input
//                     key={optIndex}
//                     className="w-full border p-1"
//                     placeholder={`Option ${optIndex + 1}`}
//                     value={opt}
//                     onChange={(e) => handleOptionChange(index, optIndex, e.target.value)}
//                   />
//                 ))}
//                 <input
//                   className="w-full border p-1 mt-2"
//                   placeholder="Correct Answer"
//                   value={q.answer}
//                   onChange={(e) => handleQuestionChange(index, 'answer', e.target.value)}
//                 />
//               </div>
//             )}

//             {(q.type === 'short' || q.type === 'long') && (
//               <input
//                 className="w-full border p-2 mt-2"
//                 placeholder="Correct Answer"
//                 value={q.answer}
//                 onChange={(e) => handleQuestionChange(index, 'answer', e.target.value)}
//               />
//             )}
//           </div>
//         ))}

//         <div className="flex gap-2 mt-4">
//           <button onClick={handleAddQuestion} className="bg-blue-500 text-dark px-3 py-1 rounded">+ Add Question</button>
//           <button onClick={handleSubmit} className="bg-green-600 text-dark  px-4 py-1 rounded">Save Assessment</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Assesment = () => {
//   const [courses, setCourses] = useState([]);
//   const [selectedCourse, setSelectedCourse] = useState(null);


//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     const res = await axios.get('/api/courses');
//     setCourses(res.data);
//   };




//   return (
//     <>
//     <div className="p-4 max-w-4xl mx-auto">
//       <h2 className="text-xl font-bold mb-6">Course List</h2>

//       <ul className="space-y-3">
//         {courses.map(course => (
//           <li key={course._id} className="p-4 border rounded flex justify-between items-center">
//             <div>
//               <h3 className="font-semibold">{course.courseName}</h3>
//               <p>Price: ₹{course.price}</p>
//               <p>Categories: {course.categoryIds?.map(cat => cat.categoryName).join(', ')}</p>
//             </div>
//             <button
//               onClick={() => setSelectedCourse(course)}
//               className="bg-blue-500 text-dark  px-3 py-1 rounded"
//             >
//               + Add Assessment
//             </button>
//           </li>
//         ))}
//       </ul>

//       {selectedCourse && (
//         <AssessmentBuilderModal
//           courseId={selectedCourse._id}
//           courseName={selectedCourse.courseName}
//           onClose={() => setSelectedCourse(null)}
//         />
//       )}
//     </div>



//     </>
//   );
// };

// export default Assesment;







import React, { useEffect, useState } from 'react';
import Header1 from '../../Header/Header';
import SideNavBar1 from '../../SideNavBar/SideNavBar';
import axios from 'axios';

const Assessment = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [assessmentName, setAssessmentName] = useState('');
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const res = await axios.get('http://localhost:8080/api/courses');
    setCourses(res.data);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, {
      type: 'mcq',
      questionText: '',
      options: ['', '', '', ''],
      answer: '',
    }]);
  };

  const handleQuestionChange = (index, field, value) => {
    const updated = [...questions];
    updated[index][field] = value;
    setQuestions(updated);
  };

  const handleOptionChange = (qIndex, optIndex, value) => {
    const updated = [...questions];
    updated[qIndex].options[optIndex] = value;
    setQuestions(updated);
  };

  const handleTypeChange = (index, newType) => {
    const updated = [...questions];
    updated[index] = {
      type: newType,
      questionText: '',
      options: newType === 'mcq' ? ['', '', '', ''] : [],
      answer: '',
    };
    setQuestions(updated);
  };

  const handleRemoveQuestion = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    const assessmentData = {
      courseId: selectedCourse._id,
      name: assessmentName,
      questions,
    };

    try {
      await axios.post('http://localhost:8080/api/assessments', assessmentData);
      alert('Assessment saved successfully!');
      setSelectedCourse(null);
      setAssessmentName('');
      setQuestions([]);
    } catch (err) {
      alert('Error saving assessment');
    }
  };

  return (
    <div>
      <Header1/>
      <SideNavBar1/>
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0 font-size-18">Assesment</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item"><a href="#">Assesment</a></li>
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {courses.map(course => (
              <div className="col-xl-3 col-sm-6" key={course._id}>
                <div className="card text-center">
                  <div className="card-body">
                    <div className="mx-auto mb-4">
                      <img src="" alt="" className="avatar-xl rounded-circle img-thumbnail" />
                    </div>
                    <h5 className="font-size-16 mb-1 text-body">{course.courseName}</h5>
                    {/* <p> Price: ₹{course.price} |</p> */}
                    <p className="text-muted">
                     
                      Categories: {course.categoryIds?.map(cat => cat.categoryName).join(', ')}
                    </p>
                    <div className="btn-group" role="group">
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#assessmentModal"
                        onClick={() => setSelectedCourse(course)}
                      >
                        + Add Assessment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Assessment Modal */}
        <div className="modal fade" id="assessmentModal" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalLabel">
                  Assessment for {selectedCourse?.courseName}
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>

              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Assessment Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder='Assessment Name'
                    value={assessmentName}
                    onChange={(e) => setAssessmentName(e.target.value)}
                  />
                </div>

                {questions.map((q, index) => (
                  <div key={index} className="border p-3 mb-4 rounded ">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <strong>Question {index + 1}</strong>
                      <button className="btn btn-soft-danger waves-effect waves-light" onClick={() => handleRemoveQuestion(index)}>
                        <i class="bx bx-trash"></i>
                      </button>
                    </div>

                    {/* <div className="mb-2">
                      <label className="form-label">Question Type</label>
                      <select
                        className="form-select"
                        value={q.type}
                        onChange={(e) => handleTypeChange(index, e.target.value)}
                      >
                        <option value="mcq">Multiple Choice</option>
                        <option value="short">One Line</option>
                        <option value="long">Paragraph</option>
                      </select>
                    </div> */}

                    <div className="mb-2">
                      <label className="form-label">Question</label>
                      <textarea
                        className="form-control"
                        rows="2"
                        value={q.questionText}
                        onChange={(e) => handleQuestionChange(index, 'questionText', e.target.value)}
                      />
                    </div>
                     
                     <label label className="form-label">Enter The option Blow</label>

                    {q.type === 'mcq' && (
                      <>
                        {q.options.map((opt, optIndex) => (
                          <input
                            key={optIndex}
                            type="text"
                            className="form-control mb-2"
                            placeholder={`Option ${optIndex + 1}`}
                            value={opt}
                            onChange={(e) => handleOptionChange(index, optIndex, e.target.value)}
                          />
                        ))}
                      </>
                    )}

                    <div className="mb-2">
                      <label className="form-label">Correct Answer</label>
                      <input
                        type="text"
                        className="form-control"
                        value={q.answer}
                        onChange={(e) => handleQuestionChange(index, 'answer', e.target.value)}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleAddQuestion}>
                  + Add Question
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                  Save Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Assessment;
