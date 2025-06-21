import React from 'react'
import AdminSideNavaBar from '../AdminSideNavaBar/AdminSideNavaBar'

const CouponManagement = () => {
  return (
     <div className="dashboard__main">
        <AdminSideNavaBar />
        <div className="dashboard__content bg-light-4">
          <div class="row pb-50 mb-10">
            <div class="col-auto">
              <h1 class="text-30 lh-12 fw-700">Coupon Management</h1>
            </div>
          </div>
        
        <div class="row y-gap-60">
          <div class="col-12">
            <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div class="d-flex items-center py-20 px-30 border-bottom-light">
                <h2 class="text-17 lh-1 fw-500">Coupon Management</h2>
              </div>
              <div class="py-30 px-30">
                <form class="contact-form row y-gap-30" action="#">
                  <div class="col-md-3">
                    <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Course ID
                    </label>
                    <input
                      required=""
                      placeholder="C01"
                      type="text"
                    />
                  </div>

                  <div class="col-md-3">
                    <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Course Title
                    </label>
                    <input
                      required=""
                      placeholder="JAVA"
                      type="text"
                    />
                  </div>

                  <div class="col-md-3">
                    <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Coupon Code
                    </label>
                    <input required="" placeholder="Coupon Code" type="text" />
                  </div>

                  <div class="col-md-3">
                    <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Discount
                    </label>
                    <input required="" placeholder="20%" type="text" />
                  </div>

                </form>
                <div class="row y-gap-20 justify-between pt-15">
                  <div class="col-auto">
                    <button class="button -md -outline-purple-1 text-purple-1">
                      Rest
                    </button>
                  </div>
                  <div class="col-auto">
                    <button class="button -md -purple-1 text-white">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

          <div class="row y-gap-60">
          <div class="col-12">
            <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div class="d-flex items-center py-20 px-30 border-bottom-light">
                <h2 class="text-17 lh-1 fw-500">Coupon List</h2>
              </div>
              <div class="py-30 px-30">
                   <div class="overflow-hidden rounded-8 shadow-4">
              <div class="overflow-x">
                <table class="table -dashboard -courses bordered-light-4">
                  <thead>
                    <tr>
                      <th>S.no</th>
                      <th>Course ID</th>
                      <th>Course Title</th>
                      <th>Coupon Code</th>
                      <th>Discount</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Add your table rows here */}
                    <tr>
                      <td>1</td>
                      <td>C01</td>
                      <td>JAVA</td>
                      <td>Kavana%20</td>
                      <td>20</td>
                      <td><button className="button -purple-1 text-white p-2"><i className="icon-bin text-16"></i></button></td>
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

        </div>
      </div>
  )
}

export default CouponManagement
