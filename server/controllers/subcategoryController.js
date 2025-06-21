const Subcategory = require('../models/Subcategory');
const Counter = require('../models/Counter');
const Category = require('../models/Category');




exports.createSubcategory = async (req, res) => {
  try {
    const { category, subcategoryName } = req.body;

    const categories = await Category.findById(category);

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    // Calculate subcategoryId based on count within this category
    const subcategoryId = categories.subcategories.length + 1;

    // Add subcategory
   categories.subcategories.push({ subcategoryId, subcategoryName });
    await categories.save();

    res.status(200).json({ message: 'Subcategory added', category });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add subcategory', error });
  }
};



exports.editSubcategory = async (req, res) => {
  try {
    const { categoryId, subcategoryId, subcategoryName } = req.body;
console.log('editSubcategory', req.body);
    const category = await Category.findById(categoryId);
    if (!category) return res.status(404).json({ message: 'Category not found' });

    const sub = category.subcategories.find((s) => s.subcategoryId === subcategoryId);
    if (!sub) return res.status(404).json({ message: 'Subcategory not found' });

    sub.subcategoryName = subcategoryName;
    await category.save();

    res.status(200).json({ message: 'Subcategory updated', category });
  } catch (err) {
    res.status(500).json({ message: 'Error updating subcategory', error: err.message });
  }
};
exports.deleteSubcategory = async (req, res) => {
  try {
    const { categoryId, subcategoryId } = req.body;

    const category = await Category.findById(categoryId);
    if (!category) return res.status(404).json({ message: 'Category not found' });

    category.subcategories = category.subcategories.filter(
      (s) => s.subcategoryId !== subcategoryId
    );

    await category.save();
    res.status(200).json({ message: 'Subcategory deleted', category });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting subcategory', error: err.message });
  }
};
