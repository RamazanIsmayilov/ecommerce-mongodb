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
  const categories = await Category.find()
    .sort({ order: 1 })
    .populate("parentId");
  return categories;
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

  const subCategories = await Category.find({ parentId: id });

  for (const subCategory of subCategories) {
    await deleteCategory(subCategory._id);
  }
  return deletedCategory;
};

const categoryService = {
  addCategory,
  allCategories,
  updateCategory,
  deleteCategory,
};

module.exports = categoryService;
