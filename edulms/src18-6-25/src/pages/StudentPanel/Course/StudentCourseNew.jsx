import React from 'react'
import Header1 from "../../Header/Header";
import SideNavBar1 from '../../SideNavBar/SideNavBar';


const StudentCourseNew = () => {
    const enrollments = [
    {
      studentName: "Yashwanth Yash",
      courseName: "React JS",
      enrollmentNo: "101",
      status: "Active",
    },
    {
      studentName: "Nisha Reddy",
      courseName: "Node.js",
      enrollmentNo: "102",
      status: "Completed",
    },
    {
      studentName: "Rahul Kumar",
      courseName: "MongoDB",
      enrollmentNo: "103",
      status: "Active",
    },
    {
      studentName: "Divya S",
      courseName: "Python",
      enrollmentNo: "104",
      status: "Pending",
    },
    {
      studentName: "Arjun M",
      courseName: "Java Full Stack",
      enrollmentNo: "105",
      status: "Completed",
    },
    // Adding 3 more dummy entries to make 8 total (4x2 grid)
    {
      studentName: "Priya K",
      courseName: "Angular",
      enrollmentNo: "106",
      status: "Active",
    },
    {
      studentName: "Vikram S",
      courseName: "Vue.js",
      enrollmentNo: "107",
      status: "Pending",
    },
    {
      studentName: "Anjali P",
      courseName: "Django",
      enrollmentNo: "108",
      status: "Completed",
    },
  ];
  return (
     <div>
        <Header1 />
    <SideNavBar1 />
    <div className="main-content">
    <div className="container-fluid mt-4 px-4">
      <h4 className="fw-bold mb-3">Student Enrollments</h4>
      <div className="row g-4">
        {enrollments.map((enroll, index) => (
          <div key={index} className="col-md-3 col-sm-6">
            <div className="card shadow rounded-3 h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">{enroll.studentName}</h5>
                <div className="card-text">
                  <p className="mb-1"><strong>Course:</strong> {enroll.courseName}</p>
                  <p className="mb-1"><strong>Enrollment No:</strong> {enroll.enrollmentNo}</p>
                  <p className="mb-0">
                    <strong>Status:</strong>{" "}
                    <span className={`badge ${
                      enroll.status === "Active" ? "bg-success" :
                      enroll.status === "Completed" ? "bg-primary" :
                      "bg-warning text-dark"
                    }`}>
                      {enroll.status}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  )
}

export default StudentCourseNew
