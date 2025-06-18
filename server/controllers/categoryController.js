const Category = require('../models/Category');
const Counter = require('../models/Counter');

exports.createCategory = async (req, res) => {
  try {
    let counter = await Counter.findOneAndUpdate(
      { id: 'categoryId' },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );

    const newCategory = new Category({
      categoryId: counter.seq,
      categoryName: req.body.categoryName
    });

    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const updated = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Error updating category' });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting category' });
  }
};
