// import React from 'react'
// import Dashsub1 from './Dashsub1'
// import Dashsub2 from './Dashsub2'

// function Dashsub() {
//   return (
//     <div>
//      <Dashsub1   />

//        <Dashsub2 />

//           <div className="row">
//             <div class="col-xl-4">
//               <div class="card">
//                 <div class="card-header align-items-center d-flex">
//                   <h4 class="card-title mb-0 flex-grow-1">Expenses</h4>
//                   <div class="flex-shrink-0">
//                     <ul
//                       class="nav nav-tabs-custom card-header-tabs"
//                       role="tablist"
//                     >
//                       <li class="nav-item">
//                         <a
//                           class="nav-link active"
//                           data-bs-toggle="tab"
//                           href="#buy-tab"
//                           role="tab"
//                         >
//                           For company
//                         </a>
//                       </li>
//                       <li class="nav-item">
//                         <a
//                           class="nav-link"
//                           data-bs-toggle="tab"
//                           href="#sell-tab"
//                           role="tab"
//                         >
//                           For Employes
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div class="card-body">
//                   <div class="tab-content">
//                     <div class="tab-pane active" id="buy-tab" role="tabpanel">
//                       <div class="float-end ms-2">
//                         <h5 class="font-size-14">
//                           <i class="bx bx-wallet text-primary font-size-16 align-middle me-1"></i>{" "}
//                           <a
//                             href="#!"
//                             class="text-reset text-decoration-underline"
//                           >
//                             ₹4335.23
//                           </a>
//                         </h5>
//                       </div>
//                       <h5 class="font-size-14 mb-4">For Company</h5>
//                       <div>
//                         <div class="form-group mb-3">
//                           <label>Payment method :</label>
//                           <select class="form-select">
//                             <option>Direct Bank Payment</option>
//                             <option>Credit / Debit Card</option>
//                             <option>Paypal</option>
//                             <option>Payoneer</option>
//                             <option>Stripe</option>
//                           </select>
//                         </div>

//                         <div>
//                           <label>Add Amount :</label>
//                           <div class="input-group mb-3">
//                             <label class="input-group-text">Amount</label>
                           
//                             <input
//                               type="text"
//                               class="form-control"
//                               placeholder="0.00121255"
//                             />
//                           </div>

//                           <div class="input-group mb-3">
//                             <label class="input-group-text">Price</label>
//                             <input
//                               type="text"
//                               class="form-control"
//                               placeholder="₹58,245"
//                             />
//                             <label class="input-group-text">₹</label>
//                           </div>

//                           <div class="input-group mb-3">
//                             <label class="input-group-text">Total</label>
//                             <input
//                               type="text"
//                               class="form-control"
//                               placeholder="₹36,854.25"
//                             />
//                           </div>
//                         </div>

//                         <div class="text-center">
//                           <button type="button" class="btn btn-success w-md">
//                             Submit
//                           </button>
//                         </div>
//                       </div>
//                     </div>

//                     <div class="tab-pane" id="sell-tab" role="tabpanel">
//                       <div class="float-end ms-2">
//                         <h5 class="font-size-14">
//                           <i class="bx bx-wallet text-primary font-size-16 align-middle me-1"></i>{" "}
//                           <a
//                             href="#!"
//                             class="text-reset text-decoration-underline"
//                           >
//                             ₹4235.23
//                           </a>
//                         </h5>
//                       </div>
//                       <h5 class="font-size-14 mb-4">For Employes</h5>

//                       <div>
//                         <div class="form-group mb-3">
//                           <label>Purpose :</label>
//                           <input
//                             type="email"
//                             class="form-control"
//                             placeholder="purpose"
//                           />
//                         </div>

//                         <div>
//                           <label>Add Amount :</label>
//                           <div class="input-group mb-3">
//                             <label class="input-group-text">Amount</label>

                           
//                             <input
//                               type="text"
//                               class="form-control"
//                               placeholder="0.00121255"
//                             />
//                           </div>

//                           <div class="input-group mb-3">
//                             <label class="input-group-text">Price</label>

//                             <input
//                               type="text"
//                               class="form-control"
//                               placeholder="₹23,754.25"
//                             />

//                             <label class="input-group-text">₹</label>
//                           </div>

//                           <div class="input-group mb-3">
//                             <label class="input-group-text">Total</label>
//                             <input
//                               type="text"
//                               class="form-control"
//                               placeholder="₹6,852.41"
//                             />
//                           </div>
//                         </div>

//                         <div class="text-center">
//                           <button type="button" class="btn btn-success w-md">
//                             Sumbit
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div class="col-xl-4">
//               <div class="card">
//                 <div class="card-header align-items-center d-flex">
//                   <h4 class="card-title mb-0 flex-grow-1">Student Course Completed</h4>
//                   <div class="flex-shrink-0">
//                     <ul
//                       class="nav justify-content-end nav-tabs-custom rounded card-header-tabs"
//                       role="tablist"
//                     >
//                       <li class="nav-item">
//                         <a
//                           class="nav-link active"
//                           data-bs-toggle="tab"
//                           href="#transactions-all-tab"
//                           role="tab"
//                         >
//                           All
//                         </a>
//                       </li>
//                       <li class="nav-item">
//                         <a
//                           class="nav-link"
//                           data-bs-toggle="tab"
//                           href="#transactions-buy-tab"
//                           role="tab"
//                         >
//                           Completed
//                         </a>
//                       </li>
//                       <li class="nav-item">
//                         <a
//                           class="nav-link"
//                           data-bs-toggle="tab"
//                           href="#transactions-sell-tab"
//                           role="tab"
//                         >
//                           Not Completed
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div class="card-body px-0">
//                   <div class="tab-content">
//                     <div
//                       class="tab-pane active"
//                       id="transactions-all-tab"
//                       role="tabpanel"
//                     >
//                       <div
//                         class="table-responsive px-3"
//                         data-simplebar
//                         style={{ maxHeight: "352px" }}
//                       >
//                         <table class="table align-middle table-nowrap table-borderless">
//                           <tbody>
//                             <tr>
//                               <td style={{ width: "50px" }}>
//                                 <div class="font-size-22 text-success">
//                                   <i class="bx bx-down-arrow-circle d-block"></i>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div>
//                                   <h5 class="font-size-14 mb-1">Raju</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     14 Mar, 2021
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 mb-0">Batch 1</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Full stack course
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 text-muted mb-0">
//                                     Completed
//                                   </h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Amount Paid
//                                   </p>
//                                 </div>
//                               </td>
//                             </tr>

//                             <tr>
//                               <td>
//                                 <div class="font-size-22 text-danger">
//                                   <i class="bx bx-up-arrow-circle d-block"></i>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div>
//                                   <h5 class="font-size-14 mb-1">Vijay</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     15 Mar, 2021
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 mb-0">Batch 2</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Full Stack Course
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 text-muted mb-0">
//                                     Not completed
//                                   </h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Amount Paid
//                                   </p>
//                                 </div>
//                               </td>
//                             </tr>

//                              <tr>
//                               <td style={{ width: "50px" }}>
//                                 <div class="font-size-22 text-success">
//                                   <i class="bx bx-down-arrow-circle d-block"></i>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div>
//                                   <h5 class="font-size-14 mb-1">Raju</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     14 Mar, 2021
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 mb-0">Batch 1</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Full stack course
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 text-muted mb-0">
//                                     Completed
//                                   </h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Amount Paid
//                                   </p>
//                                 </div>
//                               </td>
//                             </tr>

//                             <tr>
//                               <td>
//                                 <div class="font-size-22 text-danger">
//                                   <i class="bx bx-up-arrow-circle d-block"></i>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div>
//                                   <h5 class="font-size-14 mb-1">Vijay</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     15 Mar, 2021
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 mb-0">Batch 2</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Full Stack Course
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 text-muted mb-0">
//                                     Not completed
//                                   </h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Amount Paid
//                                   </p>
//                                 </div>
//                               </td>
//                             </tr>

//                           </tbody>
//                         </table>
//                       </div>
//                     </div>

//                     <div
//                       class="tab-pane"
//                       id="transactions-buy-tab"
//                       role="tabpanel"
//                     >
//                       <div
//                         class="table-responsive px-3"
//                         data-simplebar
//                         style={{ maxHeight: "352px" }}
//                       >
//                         <table class="table align-middle table-nowrap table-borderless">
//                           <tbody>
//                             <tr>
//                               <td style={{ width: "50px" }}>
//                                 <div class="font-size-22 text-success">
//                                   <i class="bx bx-down-arrow-circle d-block"></i>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div>
//                                   <h5 class="font-size-14 mb-1">Raju</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     14 Mar, 2021
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 mb-0">Batch 1</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Full stack course
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 text-muted mb-0">
//                                     Completed
//                                   </h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Amount Paid
//                                   </p>
//                                 </div>
//                               </td>
//                             </tr>

//                              <tr>
//                               <td style={{ width: "50px" }}>
//                                 <div class="font-size-22 text-success">
//                                   <i class="bx bx-down-arrow-circle d-block"></i>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div>
//                                   <h5 class="font-size-14 mb-1">Raju</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     14 Mar, 2021
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 mb-0">Batch 1</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Full stack course
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 text-muted mb-0">
//                                     Completed
//                                   </h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Amount Paid
//                                   </p>
//                                 </div>
//                               </td>
//                             </tr>

//                              <tr>
//                               <td style={{ width: "50px" }}>
//                                 <div class="font-size-22 text-success">
//                                   <i class="bx bx-down-arrow-circle d-block"></i>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div>
//                                   <h5 class="font-size-14 mb-1">Raju</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     14 Mar, 2021
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 mb-0">Batch 1</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Full stack course
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 text-muted mb-0">
//                                     Completed
//                                   </h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Amount Paid
//                                   </p>
//                                 </div>
//                               </td>
//                             </tr>

//                              <tr>
//                               <td style={{ width: "50px" }}>
//                                 <div class="font-size-22 text-success">
//                                   <i class="bx bx-down-arrow-circle d-block"></i>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div>
//                                   <h5 class="font-size-14 mb-1">Raju</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     14 Mar, 2021
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 mb-0">Batch 1</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Full stack course
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 text-muted mb-0">
//                                     Completed
//                                   </h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Amount Paid
//                                   </p>
//                                 </div>
//                               </td>
//                             </tr>

                           
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>

//                     <div
//                       class="tab-pane"
//                       id="transactions-sell-tab"
//                       role="tabpanel"
//                     >
//                       <div
//                         class="table-responsive px-3"
//                         data-simplebar
//                         style={{ maxHeight: "352px" }}
//                       >
//                         <table class="table align-middle table-nowrap table-borderless">
//                           <tbody>
//                              <tr>
//                               <td>
//                                 <div class="font-size-22 text-danger">
//                                   <i class="bx bx-up-arrow-circle d-block"></i>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div>
//                                   <h5 class="font-size-14 mb-1">Vijay</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     15 Mar, 2021
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 mb-0">Batch 2</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Full Stack Course
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 text-muted mb-0">
//                                     Not completed
//                                   </h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Amount Paid
//                                   </p>
//                                 </div>
//                               </td>
//                             </tr>

//                              <tr>
//                               <td>
//                                 <div class="font-size-22 text-danger">
//                                   <i class="bx bx-up-arrow-circle d-block"></i>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div>
//                                   <h5 class="font-size-14 mb-1">Vijay</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     15 Mar, 2021
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 mb-0">Batch 2</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Full Stack Course
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 text-muted mb-0">
//                                     Not completed
//                                   </h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Amount Paid
//                                   </p>
//                                 </div>
//                               </td>
//                             </tr>

//                              <tr>
//                               <td>
//                                 <div class="font-size-22 text-danger">
//                                   <i class="bx bx-up-arrow-circle d-block"></i>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div>
//                                   <h5 class="font-size-14 mb-1">Vijay</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     15 Mar, 2021
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 mb-0">Batch 2</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Full Stack Course
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 text-muted mb-0">
//                                     Not completed
//                                   </h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Amount Paid
//                                   </p>
//                                 </div>
//                               </td>
//                             </tr>

//                              <tr>
//                               <td>
//                                 <div class="font-size-22 text-danger">
//                                   <i class="bx bx-up-arrow-circle d-block"></i>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div>
//                                   <h5 class="font-size-14 mb-1">Vijay</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     15 Mar, 2021
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 mb-0">Batch 2</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Full Stack Course
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 text-muted mb-0">
//                                     Not completed
//                                   </h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Amount Paid
//                                   </p>
//                                 </div>
//                               </td>
//                             </tr>

//                              <tr>
//                               <td>
//                                 <div class="font-size-22 text-danger">
//                                   <i class="bx bx-up-arrow-circle d-block"></i>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div>
//                                   <h5 class="font-size-14 mb-1">Vijay</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     15 Mar, 2021
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 mb-0">Batch 2</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Full Stack Course
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 text-muted mb-0">
//                                     Not completed
//                                   </h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Amount Paid
//                                   </p>
//                                 </div>
//                               </td>
//                             </tr>
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//            <div class="col-xl-4">
//               <div class="card">
//                 <div class="card-header align-items-center d-flex">
//                   <h4 class="card-title mb-0 flex-grow-1">New Student Course Registration</h4>
//                   <div class="flex-shrink-0">
                    
//                   </div>
//                 </div>

//                 <div class="card-body px-0">
//                   <div class="tab-content">
//                     <div
//                       class="tab-pane active"
//                       id="transactions-all-tab"
//                       role="tabpanel"
//                     >
//                       <div
//                         class="table-responsive px-3"
//                         data-simplebar
//                         style={{ maxHeight: "352px" }}
//                       >
//                         <table class="table align-middle table-nowrap table-borderless">
//                           <tbody>
//                             <tr>
//                               <td style={{ width: "50px" }}>
//                                 <div class="font-size-22 text-success">
//                                   <i class="bx bx-down-arrow-circle d-block"></i>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div>
//                                   <h5 class="font-size-14 mb-1">Raju</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     14 Mar, 2021
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 mb-0">Batch 1</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Full stack course
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 text-muted mb-0">
//                                     Registrated
//                                   </h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Amount Paid
//                                   </p>
//                                 </div>
//                               </td>
//                             </tr>

//                             <tr>
//                               <td style={{ width: "50px" }}>
//                                 <div class="font-size-22 text-success">
//                                   <i class="bx bx-down-arrow-circle d-block"></i>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div>
//                                   <h5 class="font-size-14 mb-1">Raju</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     14 Mar, 2021
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 mb-0">Batch 1</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Full stack course
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 text-muted mb-0">
//                                     Registrated
//                                   </h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Amount Paid
//                                   </p>
//                                 </div>
//                               </td>
//                             </tr>

//                             <tr>
//                               <td style={{ width: "50px" }}>
//                                 <div class="font-size-22 text-success">
//                                   <i class="bx bx-down-arrow-circle d-block"></i>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div>
//                                   <h5 class="font-size-14 mb-1">Raju</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     14 Mar, 2021
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 mb-0">Batch 1</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Full stack course
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 text-muted mb-0">
//                                     Registrated
//                                   </h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Amount Paid
//                                   </p>
//                                 </div>
//                               </td>
//                             </tr>

//                             <tr>
//                               <td style={{ width: "50px" }}>
//                                 <div class="font-size-22 text-success">
//                                   <i class="bx bx-down-arrow-circle d-block"></i>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div>
//                                   <h5 class="font-size-14 mb-1">Raju</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     14 Mar, 2021
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 mb-0">Batch 1</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Full stack course
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 text-muted mb-0">
//                                     Registrated
//                                   </h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Amount Paid
//                                   </p>
//                                 </div>
//                               </td>
//                             </tr>

                            

//                           </tbody>
//                         </table>
//                       </div>
//                     </div>

//                     <div
//                       class="tab-pane"
//                       id="transactions-buy-tab"
//                       role="tabpanel"
//                     >
//                       <div
//                         class="table-responsive px-3"
//                         data-simplebar
//                         style={{ maxHeight: "352px" }}
//                       >
//                         <table class="table align-middle table-nowrap table-borderless">
//                           <tbody>
//                             <tr>
//                               <td style={{ width: "50px" }}>
//                                 <div class="font-size-22 text-success">
//                                   <i class="bx bx-down-arrow-circle d-block"></i>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div>
//                                   <h5 class="font-size-14 mb-1">Raju</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     14 Mar, 2021
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 mb-0">Batch 1</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Full stack course
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 text-muted mb-0">
//                                     Completed
//                                   </h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Amount Paid
//                                   </p>
//                                 </div>
//                               </td>
//                             </tr>

//                              <tr>
//                               <td style={{ width: "50px" }}>
//                                 <div class="font-size-22 text-success">
//                                   <i class="bx bx-down-arrow-circle d-block"></i>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div>
//                                   <h5 class="font-size-14 mb-1">Raju</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     14 Mar, 2021
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 mb-0">Batch 1</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Full stack course
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 text-muted mb-0">
//                                     Completed
//                                   </h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Amount Paid
//                                   </p>
//                                 </div>
//                               </td>
//                             </tr>

//                              <tr>
//                               <td style={{ width: "50px" }}>
//                                 <div class="font-size-22 text-success">
//                                   <i class="bx bx-down-arrow-circle d-block"></i>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div>
//                                   <h5 class="font-size-14 mb-1">Raju</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     14 Mar, 2021
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 mb-0">Batch 1</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Full stack course
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 text-muted mb-0">
//                                     Completed
//                                   </h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Amount Paid
//                                   </p>
//                                 </div>
//                               </td>
//                             </tr>

//                              <tr>
//                               <td style={{ width: "50px" }}>
//                                 <div class="font-size-22 text-success">
//                                   <i class="bx bx-down-arrow-circle d-block"></i>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div>
//                                   <h5 class="font-size-14 mb-1">Raju</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     14 Mar, 2021
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 mb-0">Batch 1</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Full stack course
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 text-muted mb-0">
//                                     Completed
//                                   </h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Amount Paid
//                                   </p>
//                                 </div>
//                               </td>
//                             </tr>

                           
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>

//                     <div
//                       class="tab-pane"
//                       id="transactions-sell-tab"
//                       role="tabpanel"
//                     >
//                       <div
//                         class="table-responsive px-3"
//                         data-simplebar
//                         style={{ maxHeight: "352px" }}
//                       >
//                         <table class="table align-middle table-nowrap table-borderless">
//                           <tbody>
//                              <tr>
//                               <td>
//                                 <div class="font-size-22 text-danger">
//                                   <i class="bx bx-up-arrow-circle d-block"></i>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div>
//                                   <h5 class="font-size-14 mb-1">Vijay</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     15 Mar, 2021
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 mb-0">Batch 2</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Full Stack Course
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 text-muted mb-0">
//                                     Not completed
//                                   </h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Amount Paid
//                                   </p>
//                                 </div>
//                               </td>
//                             </tr>

//                              <tr>
//                               <td>
//                                 <div class="font-size-22 text-danger">
//                                   <i class="bx bx-up-arrow-circle d-block"></i>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div>
//                                   <h5 class="font-size-14 mb-1">Vijay</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     15 Mar, 2021
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 mb-0">Batch 2</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Full Stack Course
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 text-muted mb-0">
//                                     Not completed
//                                   </h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Amount Paid
//                                   </p>
//                                 </div>
//                               </td>
//                             </tr>

//                              <tr>
//                               <td>
//                                 <div class="font-size-22 text-danger">
//                                   <i class="bx bx-up-arrow-circle d-block"></i>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div>
//                                   <h5 class="font-size-14 mb-1">Vijay</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     15 Mar, 2021
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 mb-0">Batch 2</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Full Stack Course
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 text-muted mb-0">
//                                     Not completed
//                                   </h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Amount Paid
//                                   </p>
//                                 </div>
//                               </td>
//                             </tr>

//                              <tr>
//                               <td>
//                                 <div class="font-size-22 text-danger">
//                                   <i class="bx bx-up-arrow-circle d-block"></i>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div>
//                                   <h5 class="font-size-14 mb-1">Vijay</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     15 Mar, 2021
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 mb-0">Batch 2</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Full Stack Course
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 text-muted mb-0">
//                                     Not completed
//                                   </h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Amount Paid
//                                   </p>
//                                 </div>
//                               </td>
//                             </tr>

//                              <tr>
//                               <td>
//                                 <div class="font-size-22 text-danger">
//                                   <i class="bx bx-up-arrow-circle d-block"></i>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div>
//                                   <h5 class="font-size-14 mb-1">Vijay</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     15 Mar, 2021
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 mb-0">Batch 2</h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Full Stack Course
//                                   </p>
//                                 </div>
//                               </td>

//                               <td>
//                                 <div class="text-end">
//                                   <h5 class="font-size-14 text-muted mb-0">
//                                     Not completed
//                                   </h5>
//                                   <p class="text-muted mb-0 font-size-12">
//                                     Amount Paid
//                                   </p>
//                                 </div>
//                               </td>
//                             </tr>
//                           </tbody>
//                         </table>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//     </div>
//   )
// }

// export default Dashsub


import React from 'react'
import Dashsub1 from './Dashsub1'
import Dashsub2 from './Dashsub2'

function Dashsub() {
  return (
    <div>
     <Dashsub1   />

       <Dashsub2 />

         
    </div>
  )
}

export default Dashsub

