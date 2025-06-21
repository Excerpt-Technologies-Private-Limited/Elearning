// const mongoose = require('mongoose');

// const CategorySchema = new mongoose.Schema({
//   categoryId: {
//     type: Number,
//     unique: true
//   },
//   categoryName: {
//     type: String,
//     required: true
//   },
//   subcategories: [
//     {
//       subcategoryId: Number,
//       subcategoryName: String,
//     },
//   ],
// });

// module.exports = mongoose.model('Category', CategorySchema);


const mongoose = require('mongoose');

const subcategorySchema = new mongoose.Schema({
  subcategoryId: Number,
  subcategoryName: String,
});

const categorySchema = new mongoose.Schema({
  categoryId: Number,
  categoryName: String,
  subcategories: [subcategorySchema], // embedded array
});

module.exports = mongoose.model('Category', categorySchema);

