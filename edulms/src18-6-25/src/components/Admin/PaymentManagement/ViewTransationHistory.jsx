import React from 'react'
import AdminSideNavaBar from '../AdminSideNavaBar/AdminSideNavaBar'

const ViewTransationHistory = () => {
  return (
   
       <div className="dashboard__main">
        <AdminSideNavaBar />
        <div className="dashboard__content bg-light-4">
          <div class="row pb-50 mb-10">
            <div class="col-auto">
              <h1 class="text-30 lh-12 fw-700">View Transation History</h1>
            </div>
          </div>

          <div class="d-flex flex-column items-center py-20 px-20 border-bottom-light">
            <div class="row mt-4">
              <div class="col-12">
                <div class="overflow rounded-8 shadow-4">
                  <div class="overflow-x-auto">
                    <table class="table -dashboard -courses">
                      <thead>
                        <tr>
                          <th>Invoice No</th>
                          <th>Full Name</th>
                          <th>Email</th>
                          <th>Phone Number</th>
                          <th>Status</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                       
                        <tr>
                          <td>#628292</td>
                          <td>Vikram</td>
                          <td>Vikram@gmail.com</td>
                          <td>849473993</td>
                          <td>Pending</td>
                          <td>300.00</td>
                        </tr>
                        <tr>
                          <td>#628292</td>
                          <td>Vikram</td>
                          <td>Vikram@gmail.com</td>
                          <td>849473993</td>
                          <td>Pending</td>
                          <td>300.00</td>
                        </tr>
                        <tr>
                          <td>#628292</td>
                          <td>Vikram</td>
                          <td>Vikram@gmail.com</td>
                          <td>849473993</td>
                          <td>Pending</td>
                          <td>300.00</td>
                        </tr>
                        <tr>
                          <td>#628292</td>
                          <td>Vikram</td>
                          <td>Vikram@gmail.com</td>
                          <td>849473993</td>
                          <td>Pending</td>
                          <td>300.00</td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  )
}

export default ViewTransationHistory
