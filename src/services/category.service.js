const Category = require("../models/Category.model");
const { AppError, NotFoundError } = require("../utils/error.utils");

const addCategory = async (params) => {
  const existsCategory = await Category.findOne({ name: params.name });
  if (existsCategory) throw new AppError("Category already exists", 409);

  const newCategory = new Category(params);
  await newCategory.save();
  return newCategory;
};

const allCategories = async () => {
  const categories = await Category.find().populate("parentId");
  return categories;
};

const singleCategory = async (id) => {
  const singleCategory = await Category.findById(id).populate("parentId");
  if (!singleCategory) throw new NotFoundError("Category is not found");
  return singleCategory;
};

const updateCategory = async (params, id) => {
  const updatedCategory = await Category.findByIdAndUpdate(id, params, {
    new: true,
  });
  if (!updatedCategory) throw new NotFoundError("Category is not found");
  return updatedCategory;
};

const deleteCategory = async (id) => {
  const deletedCategory = await Category.findByIdAndDelete(id);
  if (!deletedCategory) throw new NotFoundError("Category is not found");
  return deletedCategory;
};

const categoryService = {
  addCategory,
  allCategories,
  singleCategory,
  updateCategory,
  deleteCategory,
};

module.exports = categoryService;
