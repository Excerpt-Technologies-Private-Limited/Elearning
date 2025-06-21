import React, { useState, useEffect } from "react";
import Header1 from "../Header/Header";
import SideNavBar1 from "../SideNavBar/SideNavBar";

function SalesReport() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [students, setStudents] = useState({}); // Store students data as key-value pairs
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(10);

  // Filter states
  const [filters, setFilters] = useState({
    status: "",
    paymentMethod: "",
    searchTerm: "",
    fromDate: "",
    toDate: "",
    minAmount: "",
    maxAmount: "",
  });

  // Stats
  const [stats, setStats] = useState({
    totalSales: 0,
    totalOrders: 0,
    averageOrderValue: 0,
    paidOrders: 0,
  });

  // Fetch students data
  const fetchStudents = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/students");
      const data = await response.json();

      // Convert students array to object with userId as key for quick lookup
      const studentsMap = {};
      if (Array.isArray(data)) {
        data.forEach((student) => {
          if (student._id || student.userId) {
            studentsMap[student._id || student.userId] = student;
          }
        });
      } else if (data.students && Array.isArray(data.students)) {
        data.students.forEach((student) => {
          if (student._id || student.userId) {
            studentsMap[student._id || student.userId] = student;
          }
        });
      }

      setStudents(studentsMap);
    } catch (error) {
      console.error("Error fetching students:", error);
      setStudents({});
    }
  };

  // Fetch orders data
  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8080/api/orders");
      const data = await response.json();

      // Ensure data is an array
      const ordersArray = Array.isArray(data)
        ? data
        : data.orders
        ? data.orders
        : [];

      // Filter orders to only include those with orderId
      const ordersWithId = ordersArray.filter(
        (order) => order.orderId && order.orderId.toString().trim() !== ""
      );

      setOrders(ordersWithId);
      setFilteredOrders(ordersWithId);
      calculateStats(ordersWithId);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setOrders([]);
      setFilteredOrders([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([fetchOrders(), fetchStudents()]);
    };
    fetchData();
  }, []);

  // Get student name by userId
  const getStudentName = (userId) => {
    const student = students[userId];
    if (student) {
      // Try different possible name fields
      if (student.username) {
        return `${student.username} `;
      } else if (student.name) {
        return student.name;
      } else if (student.fullName) {
        return student.fullName;
      }
    }
    return "Unknown Student";
  };

  // Get student email by userId
  const getStudentEmail = (userId) => {
    const student = students[userId];
    return student?.email || "N/A";
  };

  // Get student phone by userId
  const getStudentPhone = (userId) => {
    const student = students[userId];
    return student?.phone || student?.mobile || "N/A";
  };

  // Calculate statistics
  const calculateStats = (ordersData) => {
    const totalOrders = ordersData.length;
    const totalSales = ordersData.reduce(
      (sum, order) => sum + (order.amount || 0),
      0
    );
    const paidOrders = ordersData.filter(
      (order) => order.status === "paid"
    ).length;
    const averageOrderValue = totalOrders > 0 ? totalSales / totalOrders : 0;

    setStats({
      totalSales,
      totalOrders,
      averageOrderValue,
      paidOrders,
    });
  };

  // Apply filters
  useEffect(() => {
    // Ensure orders is an array before filtering
    if (!Array.isArray(orders)) {
      setFilteredOrders([]);
      return;
    }

    let filtered = orders.filter((order) => {
      const orderDate = new Date(order.createdAt);
      const fromDate = filters.fromDate ? new Date(filters.fromDate) : null;
      const toDate = filters.toDate ? new Date(filters.toDate) : null;

      // Set time to start and end of day for proper comparison
      if (fromDate) {
        fromDate.setHours(0, 0, 0, 0);
      }
      if (toDate) {
        toDate.setHours(23, 59, 59, 999);
      }

      const orderAmount = order.amount || 0;
      const minAmount = filters.minAmount
        ? parseFloat(filters.minAmount)
        : null;
      const maxAmount = filters.maxAmount
        ? parseFloat(filters.maxAmount)
        : null;

      // Get student info for search
      const studentName = getStudentName(order.userId);
      const studentEmail = getStudentEmail(order.userId);

      return (
        (filters.status === "" ||
          order.status?.toLowerCase() === filters.status.toLowerCase()) &&
        (filters.paymentMethod === "" ||
          order.paymentMethod
            ?.toLowerCase()
            .includes(filters.paymentMethod.toLowerCase())) &&
        (filters.searchTerm === "" ||
          order.orderId
            ?.toLowerCase()
            .includes(filters.searchTerm.toLowerCase()) ||
          order.paymentId
            ?.toLowerCase()
            .includes(filters.searchTerm.toLowerCase()) ||
          studentName
            .toLowerCase()
            .includes(filters.searchTerm.toLowerCase()) ||
          studentEmail
            .toLowerCase()
            .includes(filters.searchTerm.toLowerCase()) ||
          order.shipping?.email
            ?.toLowerCase()
            .includes(filters.searchTerm.toLowerCase()) ||
          order.shipping?.firstName
            ?.toLowerCase()
            .includes(filters.searchTerm.toLowerCase()) ||
          order.shipping?.lastName
            ?.toLowerCase()
            .includes(filters.searchTerm.toLowerCase())) &&
        (!fromDate || orderDate >= fromDate) &&
        (!toDate || orderDate <= toDate) &&
        (!minAmount || orderAmount >= minAmount) &&
        (!maxAmount || orderAmount <= maxAmount)
      );
    });

    setFilteredOrders(filtered);
    setCurrentPage(1);
    calculateStats(filtered);
  }, [filters, orders, students]);

  // Handle filter changes
  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      status: "",
      paymentMethod: "",
      searchTerm: "",
      fromDate: "",
      toDate: "",
      minAmount: "",
      maxAmount: "",
    });
  };

  // Pagination
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;

  // Ensure filteredOrders is an array before slicing
  const currentOrders = Array.isArray(filteredOrders)
    ? filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder)
    : [];

  const totalPages = Array.isArray(filteredOrders)
    ? Math.ceil(filteredOrders.length / ordersPerPage)
    : 0;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Get unique values for filter dropdowns
  const getUniqueValues = (field) => {
    if (!Array.isArray(orders)) return [];
    return [...new Set(orders.map((order) => order[field]).filter(Boolean))];
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount || 0);
  };

  return (
    <div>
      <Header1 />
      <SideNavBar1 />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex gap-2">
                        <h4 className="card-title mb-0">
                          <i className="bx bx-line-chart me-2"></i>
                          Sales Report
                        </h4>
                        Total Orders:{" "}
                        {Array.isArray(filteredOrders)
                          ? filteredOrders.length
                          : 0}
                      </div>
                      <div className="col-md-2 mb-3">
                        <label className="form-label">Search</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search by order ID, payment ID, student name..."
                          value={filters.searchTerm}
                          onChange={(e) =>
                            handleFilterChange("searchTerm", e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {/* <div className="card-body">
                   
                    <div className="row mb-4 p-3 bg-light rounded">
                      <div className="col-md-12 mb-3">
                        <h6 className="text-muted mb-3">
                          <i className="bx bx-filter-alt me-2"></i>
                          Filter Orders
                        </h6>
                      </div>

                      
                      <div className="col-md-3 mb-3">
                        <label className="form-label">Search</label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="bx bx-search"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search by order ID, payment ID, student name..."
                            value={filters.searchTerm}
                            onChange={(e) =>
                              handleFilterChange("searchTerm", e.target.value)
                            }
                          />
                        </div>
                      </div>

                    
                      <div className="col-md-2 mb-3">
                        <label className="form-label">Status</label>
                        <select
                          className="form-select"
                          value={filters.status}
                          onChange={(e) =>
                            handleFilterChange("status", e.target.value)
                          }
                        >
                          <option value="">All Status</option>
                          {getUniqueValues("status").map((status) => (
                            <option key={status} value={status}>
                              {status}
                            </option>
                          ))}
                        </select>
                      </div>

                     
                      <div className="col-md-2 mb-3">
                        <label className="form-label">Payment Method</label>
                        <select
                          className="form-select"
                          value={filters.paymentMethod}
                          onChange={(e) =>
                            handleFilterChange("paymentMethod", e.target.value)
                          }
                        >
                          <option value="">All Methods</option>
                          {getUniqueValues("paymentMethod").map((method) => (
                            <option key={method} value={method}>
                              {method}
                            </option>
                          ))}
                        </select>
                      </div>

               
                      <div className="col-md-2 mb-3">
                        <label className="form-label">From Date</label>
                        <input
                          type="date"
                          className="form-control"
                          value={filters.fromDate}
                          onChange={(e) =>
                            handleFilterChange("fromDate", e.target.value)
                          }
                        />
                      </div>

                     
                      <div className="col-md-2 mb-3">
                        <label className="form-label">To Date</label>
                        <input
                          type="date"
                          className="form-control"
                          value={filters.toDate}
                          onChange={(e) =>
                            handleFilterChange("toDate", e.target.value)
                          }
                        />
                      </div>

                   
                      <div className="col-md-2 mb-3">
                        <label className="form-label">Min Amount</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Min amount"
                          value={filters.minAmount}
                          onChange={(e) =>
                            handleFilterChange("minAmount", e.target.value)
                          }
                        />
                      </div>

                      <div className="col-md-2 mb-3">
                        <label className="form-label">Max Amount</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Max amount"
                          value={filters.maxAmount}
                          onChange={(e) =>
                            handleFilterChange("maxAmount", e.target.value)
                          }
                        />
                      </div>
                    </div>

                   
                    {loading ? (
                      <div className="text-center py-5">
                        <div
                          className="spinner-border text-primary"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="mt-2 text-muted">Loading sales data...</p>
                      </div>
                    ) : (
                      <>
                       
                        <div className="table-responsive">
                          <table className="table table-bordered table-hover">
                            <thead className="table-light">
                              <tr>
                                <th>Order ID</th>
                                <th>Student</th>
                                <th>Courses</th>
                                <th>Amount</th>
                                <th>Payment Method</th>
                                <th>Status</th>
                                <th>Order Date</th>
                                <th>Shipping Address</th>
                              </tr>
                            </thead>
                            <tbody>
                              {currentOrders.length > 0 ? (
                                currentOrders.map((order) => (
                                  <tr key={order._id}>
                                    <td>
                                      <span className="fw-bold text-primary">
                                        {order.orderId}
                                      </span>
                                      <br />
                                      <small className="text-muted">
                                        Payment: {order.paymentId}
                                      </small>
                                    </td>
                                    <td>
                                      <div>
                                        <h6 className="mb-0">
                                          {getStudentName(order.userId)}
                                        </h6>
                                      </div>
                                    </td>
                                    <td>
                                      {order.products?.map((product, index) => (
                                        <div key={index} className="mb-1">
                                          <small className="fw-medium">
                                            {product.title}
                                          </small>
                                          <br />
                                          <small className="text-muted">
                                            {formatCurrency(product.price)}
                                          </small>
                                        </div>
                                      ))}
                                    </td>
                                    <td>
                                      <span className="fw-bold text-success">
                                        {formatCurrency(order.amount)}
                                      </span>
                                      <br />
                                      <small className="text-muted">
                                        {order.currency}
                                      </small>
                                    </td>
                                    <td>
                                      <span className="badge bg-info">
                                        {order.paymentMethod}
                                      </span>
                                    </td>
                                    <td>
                                      <span
                                        className={`badge ${
                                          order.status === "paid"
                                            ? "bg-success"
                                            : "bg-warning"
                                        }`}
                                      >
                                        <i
                                          className={`bx ${
                                            order.status === "paid"
                                              ? "bx-check-circle"
                                              : "bx-time"
                                          } me-1`}
                                        ></i>
                                        {order.status}
                                      </span>
                                    </td>
                                    <td>{formatDate(order.createdAt)}</td>
                                    <td>
                                      <div>
                                        <small>
                                          {order.shipping?.address}
                                          <br />
                                          {order.shipping?.city},{" "}
                                          {order.shipping?.state}
                                          <br />
                                          {order.shipping?.pincode}
                                        </small>
                                      </div>
                                    </td>
                                  </tr>
                                ))
                              ) : (
                                <tr>
                                  <td colSpan="8" className="text-center py-4">
                                    <div className="text-muted">
                                      <i className="bx bx-search-alt-2 display-4"></i>
                                      <p className="mt-2">
                                        No orders found matching your criteria
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                        </div>

                        
                        {totalPages > 1 && (
                          <div className="row mt-4">
                            <div className="col-sm-12 col-md-5">
                              <div className="dataTables_info">
                                Showing {indexOfFirstOrder + 1} to{" "}
                                {Math.min(
                                  indexOfLastOrder,
                                  Array.isArray(filteredOrders)
                                    ? filteredOrders.length
                                    : 0
                                )}{" "}
                                of{" "}
                                {Array.isArray(filteredOrders)
                                  ? filteredOrders.length
                                  : 0}{" "}
                                entries
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-7">
                              <div className="dataTables_paginate paging_simple_numbers">
                                <ul className="pagination justify-content-end">
                                  <li
                                    className={`page-item ${
                                      currentPage === 1 ? "disabled" : ""
                                    }`}
                                  >
                                    <button
                                      className="page-link"
                                      onClick={() => paginate(currentPage - 1)}
                                      disabled={currentPage === 1}
                                    >
                                      Previous
                                    </button>
                                  </li>

                                  {[...Array(totalPages)].map((_, index) => {
                                    const pageNumber = index + 1;
                                    if (
                                      pageNumber === 1 ||
                                      pageNumber === totalPages ||
                                      (pageNumber >= currentPage - 1 &&
                                        pageNumber <= currentPage + 1)
                                    ) {
                                      return (
                                        <li
                                          key={pageNumber}
                                          className={`page-item ${
                                            currentPage === pageNumber
                                              ? "active"
                                              : ""
                                          }`}
                                        >
                                          <button
                                            className="page-link"
                                            onClick={() => paginate(pageNumber)}
                                          >
                                            {pageNumber}
                                          </button>
                                        </li>
                                      );
                                    } else if (
                                      pageNumber === currentPage - 2 ||
                                      pageNumber === currentPage + 2
                                    ) {
                                      return (
                                        <li
                                          key={pageNumber}
                                          className="page-item disabled"
                                        >
                                          <span className="page-link">...</span>
                                        </li>
                                      );
                                    }
                                    return null;
                                  })}

                                  <li
                                    className={`page-item ${
                                      currentPage === totalPages
                                        ? "disabled"
                                        : ""
                                    }`}
                                  >
                                    <button
                                      className="page-link"
                                      onClick={() => paginate(currentPage + 1)}
                                      disabled={currentPage === totalPages}
                                    >
                                      Next
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div> */}

                  <div className="card-body">
                    <div
                      id="datatable_wrapper"
                      className="dataTables_wrapper dt-bootstrap4 no-footer"
                    >
                      <div className="row mb-4">
                        {/* Search Input */}
                        {/* <div className="col-md-2 mb-3">
                          <label className="form-label">Search</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search by order ID, payment ID, student name..."
                            value={filters.searchTerm}
                            onChange={(e) =>
                              handleFilterChange("searchTerm", e.target.value)
                            }
                          />
                        </div> */}

                        {/* Status Filter */}
                        <div className="col-md-2 mb-3">
                          <label className="form-label">Status</label>
                          <select
                            className="form-select"
                            value={filters.status}
                            onChange={(e) =>
                              handleFilterChange("status", e.target.value)
                            }
                          >
                            <option value="">All Status</option>
                            {getUniqueValues("status").map((status) => (
                              <option key={status} value={status}>
                                {status}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Payment Method Filter */}
                        <div className="col-md-2 mb-3">
                          <label className="form-label">Payment Method</label>
                          <select
                            className="form-select"
                            value={filters.paymentMethod}
                            onChange={(e) =>
                              handleFilterChange(
                                "paymentMethod",
                                e.target.value
                              )
                            }
                          >
                            <option value="">All Methods</option>
                            {getUniqueValues("paymentMethod").map((method) => (
                              <option key={method} value={method}>
                                {method}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* From Date Filter */}
                        <div className="col-md-2 mb-3">
                          <label className="form-label">From Date</label>
                          <input
                            type="date"
                            className="form-control"
                            value={filters.fromDate}
                            onChange={(e) =>
                              handleFilterChange("fromDate", e.target.value)
                            }
                          />
                        </div>

                        {/* To Date Filter */}
                        <div className="col-md-2 mb-3">
                          <label className="form-label">To Date</label>
                          <input
                            type="date"
                            className="form-control"
                            value={filters.toDate}
                            onChange={(e) =>
                              handleFilterChange("toDate", e.target.value)
                            }
                          />
                        </div>

                        {/* Min Amount Filter */}
                        <div className="col-md-2 mb-3">
                          <label className="form-label">Min Amount</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Min amount"
                            value={filters.minAmount}
                            onChange={(e) =>
                              handleFilterChange("minAmount", e.target.value)
                            }
                          />
                        </div>

                        {/* Max Amount Filter */}
                        <div className="col-md-2 mb-3">
                          <label className="form-label">Max Amount</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Max amount"
                            value={filters.maxAmount}
                            onChange={(e) =>
                              handleFilterChange("maxAmount", e.target.value)
                            }
                          />
                        </div>
                      </div>

                      {loading ? (
                        <div className="text-center py-5">
                          <div
                            className="spinner-border text-primary"
                            role="status"
                          >
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          <p className="mt-2 text-muted">
                            Loading sales data...
                          </p>
                        </div>
                      ) : (
                        <div className="row">
                          <div className="col-sm-12 table-responsive">
                            <table
                              id="datatable"
                              className="table table-bordered "
                              style={{ width: "100%" }}
                              aria-describedby="datatable_info"
                            >
                              <thead>
                                <tr>
                                  <th>Order ID</th>
                                  <th>Student</th>
                                  <th>Courses</th>
                                  <th>Amount</th>
                                  <th>Payment Method</th>
                                  <th>Status</th>
                                  <th>Order Date</th>
                                  <th>Shipping Address</th>
                                </tr>
                              </thead>
                              <tbody>
                                {currentOrders.length > 0 ? (
                                  currentOrders.map((order) => (
                                    <tr key={order._id}>
                                      <td>
                                        <span className="fw-bold text-primary">
                                          {order.orderId}
                                        </span>
                                        <br />
                                        <small className="text-muted">
                                          Payment: {order.paymentId}
                                        </small>
                                      </td>
                                      <td>
                                        <div>
                                          <h6 className="mb-0">
                                            {getStudentName(order.userId)}
                                          </h6>
                                        </div>
                                      </td>
                                      <td>
                                        {order.products?.map(
                                          (product, index) => (
                                            <div key={index} className="mb-1">
                                              <small className="fw-medium">
                                                {product.title}
                                              </small>
                                              <br />
                                              <small className="text-muted">
                                                {formatCurrency(product.price)}
                                              </small>
                                            </div>
                                          )
                                        )}
                                      </td>
                                      <td>
                                        <span className="fw-bold text-success">
                                          {formatCurrency(order.amount)}
                                        </span>
                                        <br />
                                        <small className="text-muted">
                                          {order.currency}
                                        </small>
                                      </td>
                                      <td>
                                        <span className="badge bg-info">
                                          {order.paymentMethod}
                                        </span>
                                      </td>
                                      <td>
                                        <span
                                          className={`badge ${
                                            order.status === "paid"
                                              ? "bg-success"
                                              : "bg-warning"
                                          }`}
                                        >
                                          <i
                                            className={`bx ${
                                              order.status === "paid"
                                                ? "bx-check-circle"
                                                : "bx-time"
                                            } me-1`}
                                          ></i>
                                          {order.status}
                                        </span>
                                      </td>
                                      <td>{formatDate(order.createdAt)}</td>
                                      <td>
                                        <div>
                                          <small>
                                            {order.shipping?.address}
                                            <br />
                                            {order.shipping?.city},{" "}
                                            {order.shipping?.state}
                                            <br />
                                            {order.shipping?.pincode}
                                          </small>
                                        </div>
                                      </td>
                                    </tr>
                                  ))
                                ) : (
                                  <tr>
                                    <td
                                      colSpan="8"
                                      className="text-center py-4"
                                    >
                                      <div className="text-muted">
                                        <i className="bx bx-search-alt-2 display-4"></i>
                                        <p className="mt-2">
                                          No orders found matching your criteria
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      {totalPages > 1 && (
                        <div className="card p-3 mt-4 shadow-sm border-0">
                          <div className="row align-items-center">
                            <div className="col-sm-12 col-md-5">
                              <div
                                className="dataTables_info"
                                id="datatable_info"
                                role="status"
                                aria-live="polite"
                              >
                                Showing {indexOfFirstOrder + 1} to{" "}
                                {Math.min(
                                  indexOfLastOrder,
                                  Array.isArray(filteredOrders)
                                    ? filteredOrders.length
                                    : 0
                                )}{" "}
                                of{" "}
                                {Array.isArray(filteredOrders)
                                  ? filteredOrders.length
                                  : 0}{" "}
                                entries
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-7">
                              <div
                                className="dataTables_paginate paging_simple_numbers"
                                id="datatable_paginate"
                              >
                                <ul className="pagination justify-content-end">
                                  <li
                                    className={`paginate_button page-item previous ${
                                      currentPage === 1 ? "disabled" : ""
                                    }`}
                                  >
                                    <button
                                      className="page-link"
                                      onClick={() => paginate(currentPage - 1)}
                                      disabled={currentPage === 1}
                                    >
                                      Previous
                                    </button>
                                  </li>

                                  {[...Array(totalPages)].map((_, index) => {
                                    const pageNumber = index + 1;
                                    if (
                                      pageNumber === 1 ||
                                      pageNumber === totalPages ||
                                      (pageNumber >= currentPage - 1 &&
                                        pageNumber <= currentPage + 1)
                                    ) {
                                      return (
                                        <li
                                          key={pageNumber}
                                          className={`paginate_button page-item ${
                                            currentPage === pageNumber
                                              ? "active"
                                              : ""
                                          }`}
                                        >
                                          <button
                                            className="page-link"
                                            onClick={() => paginate(pageNumber)}
                                          >
                                            {pageNumber}
                                          </button>
                                        </li>
                                      );
                                    } else if (
                                      pageNumber === currentPage - 2 ||
                                      pageNumber === currentPage + 2
                                    ) {
                                      return (
                                        <li
                                          key={pageNumber}
                                          className="paginate_button page-item disabled"
                                        >
                                          <span className="page-link">...</span>
                                        </li>
                                      );
                                    }
                                    return null;
                                  })}

                                  <li
                                    className={`paginate_button page-item next ${
                                      currentPage === totalPages
                                        ? "disabled"
                                        : ""
                                    }`}
                                  >
                                    <button
                                      className="page-link"
                                      onClick={() => paginate(currentPage + 1)}
                                      disabled={currentPage === totalPages}
                                    >
                                      Next
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
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
}

export default SalesReport;
