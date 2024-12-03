const { Router } = require("express");
const categoryController = require("../controllers/category.controller");
const validationMiddleware = require("../middlewares/validation.middleware");
const categoryValidation = require("../validations/category.validation");

const categoryRouter = Router();

categoryRouter.post("/", validationMiddleware(categoryValidation.category), categoryController.addCategory);
categoryRouter.get("/", categoryController.allCategories);
categoryRouter.get("/:id", categoryController.singleCategory);
categoryRouter.put("/:id", validationMiddleware(categoryValidation.category), categoryController.updateCategory);
categoryRouter.delete("/:id", categoryController.deleteCategory);

module.exports = categoryRouter;
