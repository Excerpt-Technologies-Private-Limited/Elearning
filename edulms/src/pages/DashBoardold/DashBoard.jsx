import React, { useState } from "react";


const DashBoard1 = () => {


  return (
      <div className="main-content">
      <div class="page-content">
        <div class="container-fluid">
          {/* <!-- start page title --> */}
          <div class="row">
            <div class="col-12">
              <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 class="mb-sm-0 font-size-18">Dashboard</h4>

                <div class="page-title-right">
                  <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item">
                      <a href="javascript: void(0);">Dashboard</a>
                    </li>
                    <li class="breadcrumb-item active">Dashboard</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end page title --> */}

          <div className="row">
            {/* Card 1 - My Wallet */}
            <div className="col-xl-3 col-md-6">
              <div className="card card-h-100">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <span className="text-muted mb-3 lh-1 d-block text-truncate">
                        Student
                      </span>
                      <h4 className="mb-3">
                        
                        
                        1400
                      </h4>
                    </div>
                    <div className="col-6">
                      <img src="./assets2/images/users/graph.PNG" alt="" height="" />
                    </div>
                  </div>
                  <div className="text-nowrap">
                    <span className="badge bg-success-subtle text-success">
                      +20.9 join
                    </span>
                    <span className="ms-1 text-muted font-size-13">
                      Since last week
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Number of Trades */}
            <div className="col-xl-3 col-md-6">
              <div className="card card-h-100">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <span className="text-muted mb-3 lh-1 d-block text-truncate">
                        Total Leads
                      </span>
                      <h4 className="mb-3">
                        <span className="counter-value" data-target="6258">
                          300
                        </span>
                      </h4>
                    </div>
                    <div className="col-6">
                       <img src="./assets2/images/users/graph.PNG" alt="" height="" />
                    </div>
                  </div>
                  <div className="text-nowrap">
                    <span className="badge bg-danger-subtle text-danger">
                      29 .5% decrease
                    </span>
                    <span className="ms-1 text-muted font-size-13">
                      Since last week
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Invested Amount */}
            <div className="col-xl-3 col-md-6">
              <div className="card card-h-100">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <span className="text-muted mb-3 lh-1 d-block text-truncate">
                        Reminders
                      </span>
                      <h4 className="mb-3">
                       
                        
                        1125
                      </h4>
                    </div>
                    <div className="col-6">
                       <img src="./assets2/images/users/graph.PNG" alt="" height="" />
                    </div>
                  </div>
                  <div className="text-nowrap">
                    <span className="badge bg-success-subtle text-success">
                      34 Times Informed
                    </span>
                    <span className="ms-1 text-muted font-size-13">
                      Since last week
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Profit Ratio */}
            <div className="col-xl-3 col-md-6">
              <div className="card card-h-100">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-6">
                      <span className="text-muted mb-3 lh-1 d-block text-truncate">
                        Reports
                      </span>
                      <h4 className="mb-3">
                        <span className="counter-value" data-target="12.57">
                          234
                        </span>
                        
                      </h4>
                    </div>
                    <div className="col-6">
                       <img src="./assets2/images/users/graph.PNG" alt="" height="" />
                    </div>
                  </div>
                  <div className="text-nowrap">
                    <span className="badge bg-success-subtle text-success">
                      2.95 % Submit
                    </span>
                    <span className="ms-1 text-muted font-size-13">
                      Since last week
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-5">
              {/* card */}
              <div className="card card-h-100">
                {/* card body */}
                <div className="card-body">
                  <div className="d-flex flex-wrap align-items-center mb-4">
                    <h5 className="card-title me-2">Earnings for June 2025</h5>
                    <div className="ms-auto">
                      <div>
                        <button
                          type="button"
                          className="btn btn-soft-secondary btn-sm"
                        >
                          ALL
                        </button>
                        <button
                          type="button"
                          className="btn btn-soft-primary btn-sm"
                        >
                          1M
                        </button>
                        <button
                          type="button"
                          className="btn btn-soft-secondary btn-sm"
                        >
                          6M
                        </button>
                        <button
                          type="button"
                          className="btn btn-soft-secondary btn-sm"
                        >
                          1Y
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="row align-items-center">
                    <div className="col-sm">
                      {/* <div
                        id="wallet-balance"
                        data-colors='["#777aca", "#5156be", "#a8aada"]'
                        className="apex-charts"
                      ></div> */}
                    <img src="./assets2/images/users/graphpie.PNG" alt="" height="" />
                    </div>
                    <div className="col-sm align-self-center">
                      <div className="mt-4 mt-sm-0">
                        <div>
                          <p className="mb-2">
                            <i className="mdi mdi-circle align-middle font-size-10 me-2 text-success"></i>{" "}
                            Course Sales
                          </p>
                          <h6>
                            ₹40,000
                            
                          </h6>
                        </div>

                        <div className="mt-4 pt-2">
                          <p className="mb-2">
                            <i className="mdi mdi-circle align-middle font-size-10 me-2 text-primary"></i>{" "}
                            Consultations
                          </p>
                          <h6>
                            ₹20,000 
                           
                          </h6>
                        </div>

                        <div className="mt-4 pt-2">
                          <p className="mb-2">
                            <i className="mdi mdi-circle align-middle font-size-10 me-2 text-info"></i>{" "}
                            Affiliate Income
                          </p>
                          <h6>
                            ₹13,000
                            
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end card */}
            </div>
            {/* end col */}

            <div className="col-xl-7">
              <div className="row">
                <div className="col-xl-8">
                  {/* card */}
                  <div className="card card-h-100">
                    {/* card body */}
                    <div className="card-body">
                      <div className="d-flex flex-wrap align-items-center mb-4">
                        <h5 className="card-title me-2">Income and Expenses for 2025</h5>
                        <div className="ms-auto">
                          <select
                            className="form-select form-select-sm"
                            defaultValue="MAY"
                          >
                            <option value="MAY">May</option>
                            <option value="AP">April</option>
                            <option value="MA">March</option>
                            <option value="FE">February</option>
                            <option value="JA">January</option>
                            <option value="DE">December</option>
                          </select>
                        </div>
                      </div>

                      <div className="row align-items-center">
                        <div className="col-sm">
                          {/* <div
                            id="invested-overview"
                            data-colors='["#5156be", "#34c38f"]'
                            className="apex-charts"
                          ></div> */}
                           <img src="./assets2/images/users/graphstatus.PNG" alt="" height="" />
                        </div>
                        <div className="col-sm align-self-center">
                          <div className="mt-4 mt-sm-0">
                          
                            <div className="row g-0">
                              <div className="col-6">
                                <div>
                                  <p className="mb-2 text-muted text-uppercase font-size-11">
                                    Income
                                  </p>
                                  <h5 className="fw-medium">₹ 2632.46</h5>
                                </div>
                              </div>
                              <div className="col-6">
                                <div>
                                  <p className="mb-2 text-muted text-uppercase font-size-11">
                                    Expenses
                                  </p>
                                  <h5 className="fw-medium">-₹ 924.38</h5>
                                </div>
                              </div>
                            </div>

                            <div className="mt-2">
                              <a href="#" className="btn btn-primary btn-sm">
                                View more{" "}
                                <i className="mdi mdi-arrow-right ms-1"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end card */}
                </div>
                {/* end col */}

                <div className="col-xl-4">
  <div className="card bg-primary text-white shadow-primary card-h-100">
    <div className="card-body p-0">
      <div
        id="carouselExampleCaptions"
        className="carousel slide text-center widget-carousel"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {/* React Course */}
          <div className="carousel-item active">
            <div className="text-center p-4">
              <i className="mdi mdi-react widget-box-1-icon"></i>
              <div className="avatar-md m-auto">
                <span className="avatar-title rounded-circle bg-light-subtle text-white font-size-24">
                  <i className="mdi mdi-react"></i>
                </span>
              </div>
              <h4 className="mt-3 lh-base fw-normal text-white">
                <b>React</b> Basics
              </h4>
              <p className="text-white-50 font-size-13">
                Learn the fundamentals of React including JSX, state, props, and component life cycle to build modern interfaces.
              </p>
              <button type="button" className="btn btn-light btn-sm">
                View details <i className="mdi mdi-arrow-right ms-1"></i>
              </button>
            </div>
          </div>

          {/* Node.js Course */}
          <div className="carousel-item">
            <div className="text-center p-4">
              <i className="mdi mdi-nodejs widget-box-1-icon"></i>
              <div className="avatar-md m-auto">
                <span className="avatar-title rounded-circle bg-light-subtle text-white font-size-24">
                  <i className="mdi mdi-nodejs"></i>
                </span>
              </div>
              <h4 className="mt-3 lh-base fw-normal text-white">
                <b>Node.js</b> Guide
              </h4>
              <p className="text-white-50 font-size-13">
                Understand backend development using Node.js, Express, and REST APIs to build scalable applications.
              </p>
              <button type="button" className="btn btn-light btn-sm">
                View details <i className="mdi mdi-arrow-right ms-1"></i>
              </button>
            </div>
          </div>

          {/* MongoDB Course */}
          <div className="carousel-item">
            <div className="text-center p-4">
              <i className="mdi mdi-database widget-box-1-icon"></i>
              <div className="avatar-md m-auto">
                <span className="avatar-title rounded-circle bg-light-subtle text-white font-size-24">
                  <i className="mdi mdi-database"></i>
                </span>
              </div>
              <h4 className="mt-3 lh-base fw-normal text-white">
                <b>MongoDB</b> Intro
              </h4>
              <p className="text-white-50 font-size-13">
                Get started with MongoDB, explore data models, CRUD operations, and how to connect with Node.js.
              </p>
              <button type="button" className="btn btn-light btn-sm">
                View details <i className="mdi mdi-arrow-right ms-1"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="carousel-indicators carousel-indicators-rounded">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
      </div>
    </div>
  </div>
</div>

                {/* end col */}
              </div>
              {/* end row */}
            </div>
            {/* end col */}
          </div>

          <div className="row">
            <div className="col-xl-8">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-wrap align-items-center mb-4">
                    <h5 className="card-title me-2">Student & Leads</h5>
                    <div className="ms-auto">
                      <div>
                        <button
                          type="button"
                          className="btn btn-soft-primary btn-sm"
                        >
                          ALL
                        </button>
                        <button
                          type="button"
                          className="btn btn-soft-secondary btn-sm"
                        >
                          1M
                        </button>
                        <button
                          type="button"
                          className="btn btn-soft-secondary btn-sm"
                        >
                          6M
                        </button>
                        <button
                          type="button"
                          className="btn btn-soft-secondary btn-sm"
                        >
                          1Y
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="row align-items-center">
                    <div className="col-xl-8">
                      {/* <div
                        id="market-overview"
                        data-colors='["#5156be", "#34c38f"]'
                        className="apex-charts"
                      ></div> */}
                       <img src="./assets2/images/users/graphbar.PNG" alt="" height="" />
                    </div>
                    <div className="col-xl-4">
                      <div className="p-4">
                        {[
                          "Facebook",
                          "Instagram",
                          "Whatsapp",
                          "Twitter",
                          "Youtube",
                        ].map((name, index) => (
                          <div className="mt-3" key={index}>
                            <div className="d-flex align-items-center">
                              <div className="avatar-sm m-auto">
                                <span className="avatar-title rounded-circle bg-light-subtle text-dark font-size-16">
                                  {index + 2 * 2}
                                </span>
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <span className="font-size-16">{name}</span>
                              </div>
                              <div className="flex-shrink-0">
                                <span
                                  className={`badge rounded-pill ₹{
                                    name === "Coinbase" || name === "Bitfinex"
                                      ? "bg-danger-subtle text-danger"
                                      : "bg-success-subtle text-success"
                                  } font-size-12 fw-medium`}
                                >
                                  {name === "facebook"
                                    ? "+2.5%"
                                    : name === "Instagram"
                                    ? "+8.3%"
                                    : name === "Whatsapp"
                                    ? "-3.6%"
                                    : name === "Twitter"
                                    ? "+7.1%"
                                    : "-0.9%"}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}

                        <div className="mt-4 pt-2">
                          <a href="#" className="btn btn-primary w-100">
                            View All{" "}
                            <i className="mdi mdi-arrow-right ms-1"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-wrap align-items-center mb-4">
                    <h5 className="card-title me-2">Reminders & Reports</h5>
                    <div className="ms-auto">
                      <div className="dropdown">
                        <a
                          className="dropdown-toggle text-reset"
                          href="#"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="text-muted font-size-12">
                            Sort By:
                          </span>{" "}
                          <span className="fw-medium">
                            World<i className="mdi mdi-chevron-down ms-1"></i>
                          </span>
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <a className="dropdown-item" href="#">
                            USA
                          </a>
                          <a className="dropdown-item" href="#">
                            Russia
                          </a>
                          <a className="dropdown-item" href="#">
                            Australia
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div
                    id="sales-by-locations"
                    data-colors='["#5156be"]'
                    style={{ height: 250 }}
                  ></div> */}

                  <img src="./assets2/images/users/graphpie.PNG" alt="" height="250" />

                  <div className="px-2 py-2">
                    {[
                      { country: "Student Batches", percent: 75 },
                      { country: "Expenses", percent: 55 },
                      { country: "Student Leads", percent: 85 },
                    ].map((loc, i) => (
                      <div key={i}>
                        <p className="mb-1">
                          {loc.country}{" "}
                          <span className="float-end">{loc.percent}%</span>
                        </p>
                        <div className="progress mt-2" style={{ height: 6 }}>
                          <div
                            className="progress-bar progress-bar-striped bg-primary"
                            role="progressbar"
                            style={{ width: `₹{loc.percent}%` }}
                            aria-valuenow={loc.percent}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div class="col-xl-4">
              <div class="card">
                <div class="card-header align-items-center d-flex">
                  <h4 class="card-title mb-0 flex-grow-1">Expenses</h4>
                  <div class="flex-shrink-0">
                    <ul
                      class="nav nav-tabs-custom card-header-tabs"
                      role="tablist"
                    >
                      <li class="nav-item">
                        <a
                          class="nav-link active"
                          data-bs-toggle="tab"
                          href="#buy-tab"
                          role="tab"
                        >
                          For company
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          data-bs-toggle="tab"
                          href="#sell-tab"
                          role="tab"
                        >
                          For Employes
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="card-body">
                  <div class="tab-content">
                    <div class="tab-pane active" id="buy-tab" role="tabpanel">
                      <div class="float-end ms-2">
                        <h5 class="font-size-14">
                          <i class="bx bx-wallet text-primary font-size-16 align-middle me-1"></i>{" "}
                          <a
                            href="#!"
                            class="text-reset text-decoration-underline"
                          >
                            ₹4335.23
                          </a>
                        </h5>
                      </div>
                      <h5 class="font-size-14 mb-4">For Company</h5>
                      <div>
                        <div class="form-group mb-3">
                          <label>Payment method :</label>
                          <select class="form-select">
                            <option>Direct Bank Payment</option>
                            <option>Credit / Debit Card</option>
                            <option>Paypal</option>
                            <option>Payoneer</option>
                            <option>Stripe</option>
                          </select>
                        </div>

                        <div>
                          <label>Add Amount :</label>
                          <div class="input-group mb-3">
                            <label class="input-group-text">Amount</label>
                            {/* <select
                              class="form-select"
                              style={{ maxWidth: "90px" }}
                            >
                              <option value="BT" selected>
                                BTC
                              </option>
                              <option value="ET">ETH</option>
                              <option value="LT">LTC</option>
                            </select> */}
                            <input
                              type="text"
                              class="form-control"
                              placeholder="0.00121255"
                            />
                          </div>

                          <div class="input-group mb-3">
                            <label class="input-group-text">Price</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="₹58,245"
                            />
                            <label class="input-group-text">₹</label>
                          </div>

                          <div class="input-group mb-3">
                            <label class="input-group-text">Total</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="₹36,854.25"
                            />
                          </div>
                        </div>

                        <div class="text-center">
                          <button type="button" class="btn btn-success w-md">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>

                    <div class="tab-pane" id="sell-tab" role="tabpanel">
                      <div class="float-end ms-2">
                        <h5 class="font-size-14">
                          <i class="bx bx-wallet text-primary font-size-16 align-middle me-1"></i>{" "}
                          <a
                            href="#!"
                            class="text-reset text-decoration-underline"
                          >
                            ₹4235.23
                          </a>
                        </h5>
                      </div>
                      <h5 class="font-size-14 mb-4">For Employes</h5>

                      <div>
                        <div class="form-group mb-3">
                          <label>Purpose :</label>
                          <input
                            type="email"
                            class="form-control"
                            placeholder="purpose"
                          />
                        </div>

                        <div>
                          <label>Add Amount :</label>
                          <div class="input-group mb-3">
                            <label class="input-group-text">Amount</label>

                            {/* <select
                              class="form-select"
                              style={{ maxWidth: "90px" }}
                            >
                              <option value="BT" selected>
                                BTC
                              </option>
                              <option value="ET">ETH</option>
                              <option value="LT">LTC</option>
                            </select> */}
                            <input
                              type="text"
                              class="form-control"
                              placeholder="0.00121255"
                            />
                          </div>

                          <div class="input-group mb-3">
                            <label class="input-group-text">Price</label>

                            <input
                              type="text"
                              class="form-control"
                              placeholder="₹23,754.25"
                            />

                            <label class="input-group-text">₹</label>
                          </div>

                          <div class="input-group mb-3">
                            <label class="input-group-text">Total</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="₹6,852.41"
                            />
                          </div>
                        </div>

                        <div class="text-center">
                          <button type="button" class="btn btn-success w-md">
                            Sumbit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-4">
              <div class="card">
                <div class="card-header align-items-center d-flex">
                  <h4 class="card-title mb-0 flex-grow-1">Student Course Completed</h4>
                  <div class="flex-shrink-0">
                    <ul
                      class="nav justify-content-end nav-tabs-custom rounded card-header-tabs"
                      role="tablist"
                    >
                      <li class="nav-item">
                        <a
                          class="nav-link active"
                          data-bs-toggle="tab"
                          href="#transactions-all-tab"
                          role="tab"
                        >
                          All
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          data-bs-toggle="tab"
                          href="#transactions-buy-tab"
                          role="tab"
                        >
                          Completed
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          data-bs-toggle="tab"
                          href="#transactions-sell-tab"
                          role="tab"
                        >
                          Not Completed
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="card-body px-0">
                  <div class="tab-content">
                    <div
                      class="tab-pane active"
                      id="transactions-all-tab"
                      role="tabpanel"
                    >
                      <div
                        class="table-responsive px-3"
                        data-simplebar
                        style={{ maxHeight: "352px" }}
                      >
                        <table class="table align-middle table-nowrap table-borderless">
                          <tbody>
                            <tr>
                              <td style={{ width: "50px" }}>
                                <div class="font-size-22 text-success">
                                  <i class="bx bx-down-arrow-circle d-block"></i>
                                </div>
                              </td>

                              <td>
                                <div>
                                  <h5 class="font-size-14 mb-1">Raju</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    14 Mar, 2021
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 mb-0">Batch 1</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Full stack course
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 text-muted mb-0">
                                    Completed
                                  </h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Amount Paid
                                  </p>
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <div class="font-size-22 text-danger">
                                  <i class="bx bx-up-arrow-circle d-block"></i>
                                </div>
                              </td>

                              <td>
                                <div>
                                  <h5 class="font-size-14 mb-1">Vijay</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    15 Mar, 2021
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 mb-0">Batch 2</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Full Stack Course
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 text-muted mb-0">
                                    Not completed
                                  </h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Amount Paid
                                  </p>
                                </div>
                              </td>
                            </tr>

                             <tr>
                              <td style={{ width: "50px" }}>
                                <div class="font-size-22 text-success">
                                  <i class="bx bx-down-arrow-circle d-block"></i>
                                </div>
                              </td>

                              <td>
                                <div>
                                  <h5 class="font-size-14 mb-1">Raju</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    14 Mar, 2021
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 mb-0">Batch 1</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Full stack course
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 text-muted mb-0">
                                    Completed
                                  </h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Amount Paid
                                  </p>
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <div class="font-size-22 text-danger">
                                  <i class="bx bx-up-arrow-circle d-block"></i>
                                </div>
                              </td>

                              <td>
                                <div>
                                  <h5 class="font-size-14 mb-1">Vijay</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    15 Mar, 2021
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 mb-0">Batch 2</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Full Stack Course
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 text-muted mb-0">
                                    Not completed
                                  </h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Amount Paid
                                  </p>
                                </div>
                              </td>
                            </tr>

                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div
                      class="tab-pane"
                      id="transactions-buy-tab"
                      role="tabpanel"
                    >
                      <div
                        class="table-responsive px-3"
                        data-simplebar
                        style={{ maxHeight: "352px" }}
                      >
                        <table class="table align-middle table-nowrap table-borderless">
                          <tbody>
                            <tr>
                              <td style={{ width: "50px" }}>
                                <div class="font-size-22 text-success">
                                  <i class="bx bx-down-arrow-circle d-block"></i>
                                </div>
                              </td>

                              <td>
                                <div>
                                  <h5 class="font-size-14 mb-1">Raju</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    14 Mar, 2021
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 mb-0">Batch 1</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Full stack course
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 text-muted mb-0">
                                    Completed
                                  </h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Amount Paid
                                  </p>
                                </div>
                              </td>
                            </tr>

                             <tr>
                              <td style={{ width: "50px" }}>
                                <div class="font-size-22 text-success">
                                  <i class="bx bx-down-arrow-circle d-block"></i>
                                </div>
                              </td>

                              <td>
                                <div>
                                  <h5 class="font-size-14 mb-1">Raju</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    14 Mar, 2021
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 mb-0">Batch 1</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Full stack course
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 text-muted mb-0">
                                    Completed
                                  </h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Amount Paid
                                  </p>
                                </div>
                              </td>
                            </tr>

                             <tr>
                              <td style={{ width: "50px" }}>
                                <div class="font-size-22 text-success">
                                  <i class="bx bx-down-arrow-circle d-block"></i>
                                </div>
                              </td>

                              <td>
                                <div>
                                  <h5 class="font-size-14 mb-1">Raju</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    14 Mar, 2021
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 mb-0">Batch 1</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Full stack course
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 text-muted mb-0">
                                    Completed
                                  </h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Amount Paid
                                  </p>
                                </div>
                              </td>
                            </tr>

                             <tr>
                              <td style={{ width: "50px" }}>
                                <div class="font-size-22 text-success">
                                  <i class="bx bx-down-arrow-circle d-block"></i>
                                </div>
                              </td>

                              <td>
                                <div>
                                  <h5 class="font-size-14 mb-1">Raju</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    14 Mar, 2021
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 mb-0">Batch 1</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Full stack course
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 text-muted mb-0">
                                    Completed
                                  </h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Amount Paid
                                  </p>
                                </div>
                              </td>
                            </tr>

                           
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div
                      class="tab-pane"
                      id="transactions-sell-tab"
                      role="tabpanel"
                    >
                      <div
                        class="table-responsive px-3"
                        data-simplebar
                        style={{ maxHeight: "352px" }}
                      >
                        <table class="table align-middle table-nowrap table-borderless">
                          <tbody>
                             <tr>
                              <td>
                                <div class="font-size-22 text-danger">
                                  <i class="bx bx-up-arrow-circle d-block"></i>
                                </div>
                              </td>

                              <td>
                                <div>
                                  <h5 class="font-size-14 mb-1">Vijay</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    15 Mar, 2021
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 mb-0">Batch 2</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Full Stack Course
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 text-muted mb-0">
                                    Not completed
                                  </h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Amount Paid
                                  </p>
                                </div>
                              </td>
                            </tr>

                             <tr>
                              <td>
                                <div class="font-size-22 text-danger">
                                  <i class="bx bx-up-arrow-circle d-block"></i>
                                </div>
                              </td>

                              <td>
                                <div>
                                  <h5 class="font-size-14 mb-1">Vijay</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    15 Mar, 2021
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 mb-0">Batch 2</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Full Stack Course
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 text-muted mb-0">
                                    Not completed
                                  </h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Amount Paid
                                  </p>
                                </div>
                              </td>
                            </tr>

                             <tr>
                              <td>
                                <div class="font-size-22 text-danger">
                                  <i class="bx bx-up-arrow-circle d-block"></i>
                                </div>
                              </td>

                              <td>
                                <div>
                                  <h5 class="font-size-14 mb-1">Vijay</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    15 Mar, 2021
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 mb-0">Batch 2</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Full Stack Course
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 text-muted mb-0">
                                    Not completed
                                  </h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Amount Paid
                                  </p>
                                </div>
                              </td>
                            </tr>

                             <tr>
                              <td>
                                <div class="font-size-22 text-danger">
                                  <i class="bx bx-up-arrow-circle d-block"></i>
                                </div>
                              </td>

                              <td>
                                <div>
                                  <h5 class="font-size-14 mb-1">Vijay</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    15 Mar, 2021
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 mb-0">Batch 2</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Full Stack Course
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 text-muted mb-0">
                                    Not completed
                                  </h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Amount Paid
                                  </p>
                                </div>
                              </td>
                            </tr>

                             <tr>
                              <td>
                                <div class="font-size-22 text-danger">
                                  <i class="bx bx-up-arrow-circle d-block"></i>
                                </div>
                              </td>

                              <td>
                                <div>
                                  <h5 class="font-size-14 mb-1">Vijay</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    15 Mar, 2021
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 mb-0">Batch 2</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Full Stack Course
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 text-muted mb-0">
                                    Not completed
                                  </h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Amount Paid
                                  </p>
                                </div>
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

           <div class="col-xl-4">
              <div class="card">
                
                <div class="card-body px-0">
                  <div class="tab-content">
                    <div
                      class="tab-pane active"
                      id="transactions-all-tab"
                      role="tabpanel"
                    >
                      <div
                        class="table-responsive px-3"
                        data-simplebar
                        style={{ maxHeight: "352px" }}
                      >
                        <table class="table align-middle table-nowrap table-borderless">
                          <tbody>
                            <tr>
                              <td style={{ width: "50px" }}>
                                <div class="font-size-22 text-success">
                                  <i class="bx bx-down-arrow-circle d-block"></i>
                                </div>
                              </td>

                              <td>
                                <div>
                                  <h5 class="font-size-14 mb-1">Raju</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    14 Mar, 2021
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 mb-0">Batch 1</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Full stack course
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 text-muted mb-0">
                                    Registrated
                                  </h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Amount Paid
                                  </p>
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <td style={{ width: "50px" }}>
                                <div class="font-size-22 text-success">
                                  <i class="bx bx-down-arrow-circle d-block"></i>
                                </div>
                              </td>

                              <td>
                                <div>
                                  <h5 class="font-size-14 mb-1">Raju</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    14 Mar, 2021
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 mb-0">Batch 1</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Full stack course
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 text-muted mb-0">
                                    Registrated
                                  </h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Amount Paid
                                  </p>
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <td style={{ width: "50px" }}>
                                <div class="font-size-22 text-success">
                                  <i class="bx bx-down-arrow-circle d-block"></i>
                                </div>
                              </td>

                              <td>
                                <div>
                                  <h5 class="font-size-14 mb-1">Raju</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    14 Mar, 2021
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 mb-0">Batch 1</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Full stack course
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 text-muted mb-0">
                                    Registrated
                                  </h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Amount Paid
                                  </p>
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <td style={{ width: "50px" }}>
                                <div class="font-size-22 text-success">
                                  <i class="bx bx-down-arrow-circle d-block"></i>
                                </div>
                              </td>

                              <td>
                                <div>
                                  <h5 class="font-size-14 mb-1">Raju</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    14 Mar, 2021
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 mb-0">Batch 1</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Full stack course
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 text-muted mb-0">
                                    Registrated
                                  </h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Amount Paid
                                  </p>
                                </div>
                              </td>
                            </tr>

                            

                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div
                      class="tab-pane"
                      id="transactions-buy-tab"
                      role="tabpanel"
                    >
                      <div
                        class="table-responsive px-3"
                        data-simplebar
                        style={{ maxHeight: "352px" }}
                      >
                        <table class="table align-middle table-nowrap table-borderless">
                          <tbody>
                            <tr>
                              <td style={{ width: "50px" }}>
                                <div class="font-size-22 text-success">
                                  <i class="bx bx-down-arrow-circle d-block"></i>
                                </div>
                              </td>

                              <td>
                                <div>
                                  <h5 class="font-size-14 mb-1">Raju</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    14 Mar, 2021
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 mb-0">Batch 1</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Full stack course
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 text-muted mb-0">
                                    Completed
                                  </h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Amount Paid
                                  </p>
                                </div>
                              </td>
                            </tr>

                             <tr>
                              <td style={{ width: "50px" }}>
                                <div class="font-size-22 text-success">
                                  <i class="bx bx-down-arrow-circle d-block"></i>
                                </div>
                              </td>

                              <td>
                                <div>
                                  <h5 class="font-size-14 mb-1">Raju</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    14 Mar, 2021
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 mb-0">Batch 1</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Full stack course
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 text-muted mb-0">
                                    Completed
                                  </h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Amount Paid
                                  </p>
                                </div>
                              </td>
                            </tr>

                             <tr>
                              <td style={{ width: "50px" }}>
                                <div class="font-size-22 text-success">
                                  <i class="bx bx-down-arrow-circle d-block"></i>
                                </div>
                              </td>

                              <td>
                                <div>
                                  <h5 class="font-size-14 mb-1">Raju</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    14 Mar, 2021
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 mb-0">Batch 1</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Full stack course
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 text-muted mb-0">
                                    Completed
                                  </h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Amount Paid
                                  </p>
                                </div>
                              </td>
                            </tr>

                             <tr>
                              <td style={{ width: "50px" }}>
                                <div class="font-size-22 text-success">
                                  <i class="bx bx-down-arrow-circle d-block"></i>
                                </div>
                              </td>

                              <td>
                                <div>
                                  <h5 class="font-size-14 mb-1">Raju</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    14 Mar, 2021
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 mb-0">Batch 1</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Full stack course
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 text-muted mb-0">
                                    Completed
                                  </h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Amount Paid
                                  </p>
                                </div>
                              </td>
                            </tr>

                           
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div
                      class="tab-pane"
                      id="transactions-sell-tab"
                      role="tabpanel"
                    >
                      <div
                        class="table-responsive px-3"
                        data-simplebar
                        style={{ maxHeight: "352px" }}
                      >
                        <table class="table align-middle table-nowrap table-borderless">
                          <tbody>
                             <tr>
                              <td>
                                <div class="font-size-22 text-danger">
                                  <i class="bx bx-up-arrow-circle d-block"></i>
                                </div>
                              </td>

                              <td>
                                <div>
                                  <h5 class="font-size-14 mb-1">Vijay</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    15 Mar, 2021
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 mb-0">Batch 2</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Full Stack Course
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 text-muted mb-0">
                                    Not completed
                                  </h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Amount Paid
                                  </p>
                                </div>
                              </td>
                            </tr>

                             <tr>
                              <td>
                                <div class="font-size-22 text-danger">
                                  <i class="bx bx-up-arrow-circle d-block"></i>
                                </div>
                              </td>

                              <td>
                                <div>
                                  <h5 class="font-size-14 mb-1">Vijay</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    15 Mar, 2021
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 mb-0">Batch 2</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Full Stack Course
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 text-muted mb-0">
                                    Not completed
                                  </h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Amount Paid
                                  </p>
                                </div>
                              </td>
                            </tr>

                             <tr>
                              <td>
                                <div class="font-size-22 text-danger">
                                  <i class="bx bx-up-arrow-circle d-block"></i>
                                </div>
                              </td>

                              <td>
                                <div>
                                  <h5 class="font-size-14 mb-1">Vijay</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    15 Mar, 2021
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 mb-0">Batch 2</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Full Stack Course
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 text-muted mb-0">
                                    Not completed
                                  </h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Amount Paid
                                  </p>
                                </div>
                              </td>
                            </tr>

                             <tr>
                              <td>
                                <div class="font-size-22 text-danger">
                                  <i class="bx bx-up-arrow-circle d-block"></i>
                                </div>
                              </td>

                              <td>
                                <div>
                                  <h5 class="font-size-14 mb-1">Vijay</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    15 Mar, 2021
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 mb-0">Batch 2</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Full Stack Course
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 text-muted mb-0">
                                    Not completed
                                  </h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Amount Paid
                                  </p>
                                </div>
                              </td>
                            </tr>

                             <tr>
                              <td>
                                <div class="font-size-22 text-danger">
                                  <i class="bx bx-up-arrow-circle d-block"></i>
                                </div>
                              </td>

                              <td>
                                <div>
                                  <h5 class="font-size-14 mb-1">Vijay</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    15 Mar, 2021
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 mb-0">Batch 2</h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Full Stack Course
                                  </p>
                                </div>
                              </td>

                              <td>
                                <div class="text-end">
                                  <h5 class="font-size-14 text-muted mb-0">
                                    Not completed
                                  </h5>
                                  <p class="text-muted mb-0 font-size-12">
                                    Amount Paid
                                  </p>
                                </div>
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
        </div>
      
    </div>
    </div>
  );
};

export default DashBoard1;
