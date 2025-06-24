import React, { useEffect, useState } from "react";
import SideNavBar1 from "../../SideNavBar/SideNavBar";
import Header1 from "../../Header/Header";
import axios from "axios";

const Category1 = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const res = await axios.get("http://localhost:8080/api/categories");
    setCategories(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`http://localhost:8080/api/categories/${editingId}`, {
        categoryName,
      });

      alert("successfully update")
    } else {
      await axios.post("http://localhost:8080/api/categories", {
        categoryName,
      });
    }
    setCategoryName("");
    setEditingId(null);
    fetchCategories();
  };

  const handleEdit = (id, name) => {
    setEditingId(id);
    setCategoryName(name);
    
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/api/categories/${id}`);
    fetchCategories();
  };

  return (
    <>
      <Header1 />
      <SideNavBar1 />
      <div className="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 class="mb-sm-0 font-size-18">Category</h4>

                  <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                      <li class="breadcrumb-item">
                        <a href="javascript: void(0);">Dashboard</a>
                      </li>
                      <li class="breadcrumb-item active">Category</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-12">
                <div class="card">
                  <div class="card-header">
                    <h4 class="card-title">Category - Form</h4>
                  </div>
                  <div class="card-body">
                    <form class="needs-validation" onSubmit={handleSubmit}>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="mb-3">
                            <label class="form-label" for="validationCustom03">
                              Category Name
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              id="validationCustom03"
                              value={categoryName}
                              onChange={(e) => setCategoryName(e.target.value)}
                              placeholder="Category Name"
                              required
                            />
                            <div class="invalid-feedback">
                              Please Category Name
                            </div>
                          </div>
                        </div>
                      </div>

                      <button class="btn btn-primary" type="submit">
                        {editingId ? "Update" : "Add"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              <div class="col-xl-12">
                <div class="card">
                  <div class="card-header">
                    <h4 class="card-title">Category List</h4>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-bordered border-success mb-0">
                        <thead>
                          <tr>
                            <th>Category ID</th>
                            <th>Category Name</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {categories.map((cat) => (
                            <tr key={cat._id}>
                              <th scope="row">{cat.categoryId}</th>
                              <td>{cat.categoryName}</td>
                              <td>
                                <div className="d-flex flex-wrap gap-2">
                                  <button
                                    type="button"
                                    class="btn btn-soft-success waves-effect waves-light"
                                    onClick={() =>
                                      handleEdit(cat._id, cat.categoryName)
                                    }
                                  >
                                    <i className="bx bx-edit"></i>
                                  </button>
                                  <button
                                    type="button"
                                    class="btn btn-soft-danger waves-effect waves-light"
                                    onClick={() => handleDelete(cat._id)}
                                  >
                                    <i className="bx bx-trash"></i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
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
    </>
  );
};

export default Category1;
