import React, { useEffect, useState } from "react";
import SideNavBar1 from "../../SideNavBar/SideNavBar";
import Header1 from "../../Header/Header";
import axios from "axios";

const SubCategory1 = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [subcategoryName, setSubcategoryName] = useState("");
  const [editing, setEditing] = useState(false);
  const [editingSubId, setEditingSubId] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const res = await axios.get("http://localhost:8080/api/categories");
    setCategories(res.data);
  };

  const handleAddOrUpdateSubcategory = async (e) => {
    e.preventDefault();

    if (!selectedCategoryId || !subcategoryName) return;

    if (editing) {
      await axios.put(
        "http://localhost:8080/api/subcategories/edit-subcategory",
        {
          categoryId: selectedCategoryId,
          subcategoryId: editingSubId,
          subcategoryName,
        }
      );

      alert("successfully update")
    } else {
      await axios.post("http://localhost:8080/api/subcategories", {
        category: selectedCategoryId,
        subcategoryName,
      });
    }

    resetForm();
    fetchCategories();
  };

  const resetForm = () => {
    setSubcategoryName("");
    setSelectedCategoryId("");
    setEditing(false);
    setEditingSubId(null);
  };

  const handleEdit = (categoryId, sub) => {
    setSelectedCategoryId(categoryId);
    setSubcategoryName(sub.subcategoryName);
    setEditing(true);
    setEditingSubId(sub.subcategoryId);
  };

  const handleDelete = async (categoryId, subcategoryId) => {
    await axios.delete(
      "http://localhost:8080/api/subcategories/delete-subcategory",
      {
        data: { categoryId, subcategoryId },
      }
    );
    fetchCategories();
  };

  return (
    <div>
      <Header1 />
      <SideNavBar1 />

      <div className="main-content">
        <div class="page-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 class="mb-sm-0 font-size-18">Sub Categories</h4>

                  <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                      <li class="breadcrumb-item">
                        <a href="javascript: void(0);">Dashboard</a>
                      </li>
                      <li class="breadcrumb-item active">Sub Categories</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-6">
                <div class="card">
                  <div class="card-header">
                    <h4 class="card-title">Sub Categories - Form</h4>
                  </div>
                  <div class="card-body">
                    <form
                      class="needs-validation"
                      onSubmit={handleAddOrUpdateSubcategory}
                    >
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
                              name="categoryname"
                              placeholder="Subcategory Name"
                              value={subcategoryName}
                              onChange={(e) =>
                                setSubcategoryName(e.target.value)
                              }
                              required
                            />
                            <div class="invalid-feedback">
                              Please provide a valid city.
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="categorySelect"
                            >
                              Select Categories
                            </label>
                            <select
                              className="form-select"
                              id="categorySelect"
                              value={selectedCategoryId}
                              onChange={(e) =>
                                setSelectedCategoryId(e.target.value)
                              }
                              name="subcategory"
                              required
                            >
                              <option value="">Select Category</option>
                              {categories.map((cat) => (
                                <option key={cat._id} value={cat._id}>
                                  {cat.categoryName}
                                </option>
                              ))}
                            </select>
                            <div className="invalid-feedback">
                              Please select a valid category.
                            </div>
                          </div>
                        </div>
                      </div>
                     
                      <button class="btn btn-primary m-1" type="submit">
                        {editing ? "Update" : "Add"}
                      </button>
                      {editing && (
                        <button class="btn btn-primary" onClick={resetForm}>
                          Reset
                        </button>
                      )}
                     
                    </form>
                  </div>
                </div>
              </div>

              {categories.map((cat) => (
                <div className="col-xl-6" key={cat._id}>
                
                   

                    <div className="card-body">
                      {cat.subcategories.length === 0 ? (
                        <p>No subcategories</p>
                      ) : (
                        <div className="table-responsive">
                          <table className="table table-bordered border-success mb-0">
                            <thead>
                              <tr>
                                <th>Subcategory ID</th>
                                <th>Subcategory Name</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {cat.subcategories.map((sub) => (
                                <tr key={sub.subcategoryId}>
                                  <th scope="row">{sub.subcategoryId}</th>
                                  <td>{sub.subcategoryName}</td>
                                  <td>
                                    <div className="d-flex flex-wrap gap-2">
                                      <button
                                        type="button"
                                        className="btn btn-soft-success waves-effect waves-light"
                                        onClick={() => handleEdit(cat._id, sub)}
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        data-bs-whatever="@mdo"
                                      >
                                        <i className="bx bx-edit"></i>
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-soft-danger waves-effect waves-light"
                                        onClick={() =>
                                          handleDelete(
                                            cat._id,
                                            sub.subcategoryId
                                          )
                                        }
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
                      )}
                    </div>
                 
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SubCategory1;
