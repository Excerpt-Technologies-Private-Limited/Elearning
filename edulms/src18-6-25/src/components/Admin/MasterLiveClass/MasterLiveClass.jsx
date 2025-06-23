import React from 'react'
import AdminSideNavaBar from "../AdminSideNavaBar/AdminSideNavaBar";

const MasterLiveClass = () => {
  return (
    <div className="dashboard__main">
          <AdminSideNavaBar />
          <div className="dashboard__content bg-light-4">
            <div class="row pb-50 mb-10">
              <div class="col-auto">
                <h1 class="text-30 lh-12 fw-700">Master of live classes</h1>
              </div>
            </div>
            <div class="d-flex items-center py-20 px-30 border-bottom-light"><h2 class="text-17 lh-1 fw-500">Basic Information</h2></div>
          </div>
        </div>
  )
}

export default MasterLiveClass
