

import React, { useEffect, useState } from 'react';
import AdminSideNavaBar from "../AdminSideNavaBar/AdminSideNavaBar";
import axios from 'axios';

function SubcategoryManager() {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [subcategoryName, setSubcategoryName] = useState('');
  const [editing, setEditing] = useState(false);
  const [editingSubId, setEditingSubId] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const res = await axios.get('/api/categories');
    setCategories(res.data);
  };

  const handleAddOrUpdateSubcategory = async (e) => {
    e.preventDefault();

    if (!selectedCategoryId || !subcategoryName) return;

    if (editing) {
      await axios.put('/api/subcategories/edit-subcategory', {
        categoryId: selectedCategoryId,
        subcategoryId: editingSubId,
        subcategoryName,
      });
    } else {
      await axios.post('/api/subcategories', {
        category: selectedCategoryId,
        subcategoryName,
      });
    }

    resetForm();
    fetchCategories();
  };

  const resetForm = () => {
    setSubcategoryName('');
    setSelectedCategoryId('');
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
    await axios.delete('/api/subcategories/delete-subcategory', {
      data: { categoryId, subcategoryId },
    });
    fetchCategories();
  };

  return (
  
<div className="dashboard__main">
      <AdminSideNavaBar />
      <div className="dashboard__content bg-light-4">
        <div class="row pb-50 mb-10">
          <div class="col-auto">
            <h1 class="text-30 lh-12 fw-700">Sub Categories</h1>
          </div>
        </div>
        <div class="row y-gap-60">
          <div class="col-12">
                <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                  <div class="d-flex items-center py-20 px-30 border-bottom-light">
                    <h2 class="text-17 lh-1 fw-500"><h2>{editing ? 'Edit Subcategory' : 'Add Subcategory'}</h2></h2>
                  </div>

                  <div class="py-30 px-30">
                    <form class="contact-form row y-gap-30"  onSubmit={handleAddOrUpdateSubcategory}>
                      <div class="col-6">
                        <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                         Category Name
                        </label>
                        <input
                        type="text"
          placeholder="Subcategory Name"
          value={subcategoryName}
          onChange={(e) => setSubcategoryName(e.target.value)}
          required
                        />
                      </div>

                      <div class="col-6">
                        <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                         Select Categories
                        </label>
<select
          value={selectedCategoryId}
          onChange={(e) => setSelectedCategoryId(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.categoryName}
            </option>
          ))}
        </select>
                       </div>
                      <div class="row y-gap-20 justify-between pt-15">
                        {editing && (<div class="col-auto">
                          <button class="button -md -purple-1 text-white" onClick={resetForm}>
                            Reset
                          </button>
                        </div>)}
                        <div class="col-auto">
                          <button class="button -md -purple-1 text-white" type="submit">
                            {editing ? 'Update' : 'Add'}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

        {categories.map((cat) => (
  <div className="col-12" key={cat._id}>
    <h3>{cat.categoryName}</h3>

    {cat.subcategories.length === 0 ? (
      <p>No subcategories</p>
    ) : (
      <div className="overflow-hidden rounded-8">
        <div className="overflow-x-auto">
          <table className="table -dashboard -courses bordered-light-4">
            <thead>
              <tr>
                <th>Subcategory ID</th>
                <th>Subcategory Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cat.subcategories.map((sub) => (
                <tr key={sub.subcategoryId}>
                  <td>{sub.subcategoryId}</td>
                  <td>{sub.subcategoryName}</td>
                  <td className="d-flex">
                    <a href="#" onClick={() => handleEdit(cat._id, sub)}className="button -purple-1 text-white p-2"> <i className="icon icon-edit text-16"></i></a>{' '}
                    <button onClick={() => handleDelete(cat._id, sub.subcategoryId)}className="button -purple-1 text-white p-2"><i className="icon-bin text-16"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )}
  </div>
))}

        </div>
      </div>
    </div>
   
  );
}

export default SubcategoryManager;

