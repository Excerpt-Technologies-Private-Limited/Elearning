import React from 'react'
import AdminSideNavaBar from "../AdminSideNavaBar/AdminSideNavaBar";

const CommunicationTools = () => {
  return (
    <div className="dashboard__main">
      <AdminSideNavaBar />
      <div className="dashboard__content bg-light-4">
        <div class="row pb-50 mb-10">
          <div class="col-auto">
            <h1 class="text-30 lh-12 fw-700">Communication</h1>
          </div>
        </div>
        <div class="row y-gap-60">
          <div class="col-12">
            <div class="overflow-hidden rounded-8 shadow-4">
              <div class="overflow-x-auto">
                <table class="table -dashboard -courses bordered-light-4">
                  <thead>
                    <tr>
                      <th>Student ID</th>
                      <th>Student Name</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Course</th>
                      <th>Enrollment Date</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Add your table rows here */}
                    <tr>
                      <td>1</td>
                      <td>karthik</td>
                      <td>998087663</td>
                      <td>Enrolled@gmail.com</td>
                      <td>Full stack</td>
                      <td>2023-10-01</td>
                      <td>Active</td>
                      <td><button className="button -purple-1 text-white p-2"><i className="text-24 icon icon-email"></i></button></td>
                    </tr>

                    <tr>
                      <td>1</td>
                      <td>karthik</td>
                      <td>998087663</td>
                      <td>Enrolled@gmail.com</td>
                      <td>Full stack</td>
                      <td>2023-10-01</td>
                      <td>Active</td>
                      <td><button className="button -purple-1 text-white p-2"><i className="text-24 icon icon-email"></i></button></td>
                    </tr>

                    <tr>
                      <td>1</td>
                      <td>karthik</td>
                      <td>998087663</td>
                      <td>Enrolled@gmail.com</td>
                      <td>Full stack</td>
                      <td>2023-10-01</td>
                      <td>Active</td>
                      <td><button className="button -purple-1 text-white p-2"><i className="text-24 icon icon-email"></i></button></td>
                    </tr>

                    <tr>
                      <td>1</td>
                      <td>karthik</td>
                      <td>998087663</td>
                      <td>Enrolled@gmail.com</td>
                      <td>Full stack</td>
                      <td>2023-10-01</td>
                      <td>Active</td>
                      <td><button className="button -purple-1 text-white p-2"><i className="text-24 icon icon-email"></i></button></td>
                    </tr>

                    <tr>
                      <td>1</td>
                      <td>karthik</td>
                      <td>998087663</td>
                      <td>Enrolled@gmail.com</td>
                      <td>Full stack</td>
                      <td>2023-10-01</td>
                      <td>Active</td>
                      <td><button className="button -purple-1 text-white p-2"><i className="text-24 icon icon-email"></i></button></td>
                    </tr>
                    
                   
                    {/* Repeat for more courses */}
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

export default CommunicationTools
