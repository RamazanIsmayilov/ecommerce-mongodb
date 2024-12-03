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

const singleCategory = async (req, res, next) => {
  try {
    const singleCategory = await categoryService.singleCategory(req.params.id);
    console.log(req.params.id);
    res.status(200).json(singleCategory);
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
  singleCategory,
  updateCategory,
  deleteCategory,
};

module.exports = categoryController;
