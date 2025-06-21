const mongoose = require('mongoose');

const SubcategorySchema = new mongoose.Schema({
  subcategoryId: {
    type: Number,
    unique: true
  },
  subcategoryName: {
    type: String,
    required: true
  },
   category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
});

module.exports = mongoose.model('Subcategory', SubcategorySchema);
