import React from 'react'
import AdminSideNavaBar from '../AdminSideNavaBar/AdminSideNavaBar'

const LiveSesssionScheduler = () => {
  return (
    <div className="dashboard__main">
        <AdminSideNavaBar />
        <div className="dashboard__content bg-light-4">
          <div class="row pb-50 mb-10">
            <div class="col-auto">
              <h1 class="text-30 lh-12 fw-700">Live Session Scheduler</h1>
            </div>
          </div>

          <div class="d-flex flex-column items-center py-20 px-20 border-bottom-light">
            <div class="row">
              <div class="col-12">
                <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                  <div class="d-flex items-center py-20 px-30 border-bottom-light">
                    <h2 class="text-17 lh-1 fw-500">Live Session Scheduler</h2>
                  </div>

                  <div class="py-30 px-30">
                    <form class="contact-form row y-gap-30">
                      <div class="col-3">
                        <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                          Topic*
                        </label>
                        <input
                          required=""
                          placeholder="Topic"
                          type="text"
                        />
                      </div>

                      <div class="col-md-3">
                        <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                          Platform
                        </label>
                        <input
                          required=""
                          placeholder="Zoom,GoogleMet,etc.."
                          type="text"
                        />
                      </div>

                      <div class="col-md-3">
                        <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                          Date
                        </label>
                        <input
                          required=""
                          placeholder="Date"
                          type="text"
                        />
                      </div>

                      <div class="col-md-3">
                        <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                          Time
                        </label>
                        <input required="" placeholder="Time" type="text" />
                      </div>

                      <div class="col-md-3">
                        <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                          End Date
                        </label>
                        <input required="" placeholder="Date" type="text" />
                      </div>

                      <div class="col-md-5">
                        <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                          
                        </label>
                        <button class="button -md -outline-purple-1 text-purple-1">
                            Schedule Live CLass
                          </button>
                      </div>

                      {/* <div class="row y-gap-20 justify-between pt-15">
                        <div class="col-auto">
                          <button class="button -md -outline-purple-1 text-purple-1">
                            Schedule Live CLass
                          </button>
                        </div>
                       
                      </div> */}
                    </form>
                  </div>
                </div>
              </div>
        </div>

            <div class="row mt-4">
              <div class="col-12">
                <div class="overflow rounded-8 shadow-4">
                  <div class="overflow-x-auto">
                    <table class="table -dashboard -courses">
                      <thead>
                        <tr>
                          <th>S.no</th>
                          <th>Date</th>
                          <th>Time</th>
                          <th>Topic</th>
                          <th>Platform</th>
                          <th>Instructor</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                       
                        <tr>
                          <td>1</td>
                          <td>1-4-2025</td>
                          <td>2:00 Pm</td>
                          <td>Consistency</td>
                          <td>Zoom</td>
                          <td>Vikram</td>
                          
                          <td className="d-flex gap-3">
                            <button className="button -purple-1 text-white p-2 m-1">
                              <i className="icon-bin text-16"></i>
                            </button>
                            <button className="button -purple-1 text-white p-2 m-1">
                              <i className="icon icon-edit text-16"></i>
                            </button>
                          </td>
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

export default LiveSesssionScheduler
