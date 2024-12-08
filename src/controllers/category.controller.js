const categoryService = require("../services/category.service");

const addCategory = async (req, res, next) => {
  try {
    const newCategory = await categoryService.addCategory(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};

const allCategories = async (req, res, next) => {
  try {
    const allCategories = await categoryService.allCategories();
    res.status(200).json(allCategories);
  } catch (error) {
    next(error);
  }
};

const updateCategory = async (req, res, next) => {
  try {
    const updatedCategory = await categoryService.updateCategory(
      req.body,
      req.params.id
    );
    res.status(200).json(updatedCategory);
  } catch (error) {
    next(error);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const deletedCategory = await categoryService.deleteCategory(req.params.id);
    res.status(200).json(deletedCategory);
  } catch (error) {
    next(error);
  }
};

const categoryController = {
  addCategory,
  allCategories,
  updateCategory,
  deleteCategory,
};

module.exports = categoryController;
