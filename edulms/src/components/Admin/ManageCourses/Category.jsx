import React, { useEffect, useState } from 'react';
import AdminSideNavaBar from "../AdminSideNavaBar/AdminSideNavaBar";
import axios from 'axios';

function CategoryForm() {
  const [categoryName, setCategoryName] = useState('');
  const [categories, setCategories] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const res = await axios.get('/api/categories');
    setCategories(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`/api/categories/${editingId}`, { categoryName });
    } else {
      await axios.post('/api/categories', { categoryName });
    }
    setCategoryName('');
    setEditingId(null);
    fetchCategories();
  };

  const handleEdit = (id, name) => {
    setEditingId(id);
    setCategoryName(name);
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/categories/${id}`);
    fetchCategories();
  };

  return (
   
     <div className="dashboard__main">
      <AdminSideNavaBar />
      <div className="dashboard__content bg-light-4">
        <div class="row pb-50 mb-10">
          <div class="col-auto">
            <h1 class="text-30 lh-12 fw-700">Categories</h1>
          </div>
        </div>
        <div class="row y-gap-60">
          <div class="col-12">
                <div class="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                  <div class="d-flex items-center py-20 px-30 border-bottom-light">
                    <h2 class="text-17 lh-1 fw-500">Category Form</h2>
                  </div>

                  <div class="py-30 px-30">
                    <form class="contact-form row y-gap-30" onSubmit={handleSubmit}>
                      <div class="col-12">
                        <label class="text-16 lh-1 fw-500 text-dark-1 mb-10">
                         Category Name
                        </label>
                        <input
                        type="text"
                          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Category Name"
          required
                        />
                      </div>
      
                      <div class="row y-gap-20 justify-between pt-15">
                        
                        <div class="col-auto">
                          <button class="button -md -purple-1 text-white" type="submit">
                            {editingId ? 'Update' : 'Add'}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

          <div class="col-12">
            <div class="overflow-hidden rounded-8">
              <div class="overflow-x-auto">
                <table class="table -dashboard -courses bordered-light-4">
                  <thead>
                    <tr>
                      <th>Category ID</th>
                      <th>Category Name</th>
                      <th>Actions</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {/* Add your table rows here */}
                    
                   {categories.map((cat) => (
            <tr key={cat._id}>
              <td>{cat.categoryId}</td>
              <td>{cat.categoryName}</td>
              <td class="d-flex">
                <a href="#" onClick={() => handleEdit(cat._id, cat.categoryName)} className="button -purple-1 text-white p-2"> <i className="icon icon-edit text-16"></i></a>
                <button onClick={() => handleDelete(cat._id)} className="button -purple-1 text-white p-2"><i className="icon-bin text-16"></i></button>
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

  );
}

export default CategoryForm;
