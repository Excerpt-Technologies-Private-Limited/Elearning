import React from 'react'
import AdminSideNavaBar from "../AdminSideNavaBar/AdminSideNavaBar";

const ManageCertificates = () => {
  return (
 
        <div className="dashboard__main">
            <AdminSideNavaBar />
            <div className="dashboard__content bg-light-4">
            <div className="row pb-50 mb-10">
                <div className="col-auto">
                <h1 className="text-30 lh-12 fw-700">Manage Certificates</h1>
                </div>
            </div>
            <div className="row y-gap-60">
                <div className="col-12">
                <div className="overflow-hidden rounded-8 shadow-4">
                    <div className="overflow-x-auto">
                    <table className="table -dashboard -courses bordered-light-4">
                        <thead>
                        <tr>
                            <th>Certificate ID</th>
                            <th>Student Name</th>
                            <th>Email</th>
                            <th>Course Name</th>
                            <th>Issue Date</th>
                            <th>Completion</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                       
                        <tr>
                            <td>#484895</td>
                            <td>John Doe</td>
                             <td>vijay@gmail.com</td>
                            <td>React Development</td>
                            <td>2023-10-01</td>
                            <td>100%</td>
                            <td>Issued</td>
                            <td><button className="button -purple-1 text-white p-2"><i className="icon-bin text-16"></i></button></td>
                        </tr>

                        <tr>
                            <td>#484895</td>
                            <td>John Doe</td>
                             <td>vijay@gmail.com</td>
                            <td>React Development</td>
                            <td>2023-10-01</td>
                            <td>100%</td>
                            <td>Issued</td>
                            <td><button className="button -purple-1 text-white p-2"><i className="icon-bin text-16"></i></button></td>
                        </tr>

                        <tr>
                            <td>#484895</td>
                            <td>John Doe</td>
                             <td>vijay@gmail.com</td>
                            <td>React Development</td>
                            <td>2023-10-01</td>
                            <td>100%</td>
                            <td>Issued</td>
                            <td><button className="button -purple-1 text-white p-2"><i className="icon-bin text-16"></i></button></td>
                        </tr>

                        <tr>
                            <td>#484895</td>
                            <td>John Doe</td>
                             <td>vijay@gmail.com</td>
                            <td>React Development</td>
                            <td>2023-10-01</td>
                            <td>100%</td>
                            <td>Issued</td>
                            <td><button className="button -purple-1 text-white p-2"><i className="icon-bin text-16"></i></button></td>
                        </tr>

                        <tr>
                            <td>#484895</td>
                            <td>John Doe</td>
                            <td>vijay@gmail.com</td>
                            <td>React Development</td>
                            <td>2023-10-01</td>
                            <td>100%</td>
                            <td>Issued</td>
                            <td><button className="button -purple-1 text-white p-2"><i className="icon-bin text-16"></i></button></td>
                        </tr>
                   
                        
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    
  )
}

export default ManageCertificates
