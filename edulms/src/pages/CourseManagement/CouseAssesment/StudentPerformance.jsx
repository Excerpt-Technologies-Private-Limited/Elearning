import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentPerformance = () => {
  const [performance, setPerformance] = useState([]);
  const studentId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchPerformance = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/performance?studentId=${studentId}`);
        setPerformance(res.data);
      } catch (err) {
        console.error('Performance fetch error:', err);
      }
    };

    fetchPerformance();
  }, []);

  return (
    <div className="p-4">
      <h2>Performance Report</h2>
      <table className="w-full border mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Student</th>
            <th className="border p-2">Test Name</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Score</th>
          </tr>
        </thead>
        <tbody>
          {performance.map((item, idx) => (
            <tr key={idx}>
              <td className="border p-2">{item.studentName}</td>
              <td className="border p-2">{item.testName}</td>
              <td className="border p-2">{new Date(item.attendedAt).toLocaleString()}</td>
              <td className="border p-2">{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentPerformance;
