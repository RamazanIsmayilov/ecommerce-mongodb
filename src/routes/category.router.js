const { Router } = require("express");
const categoryController = require("../controllers/category.controller");
const validationMiddleware = require("../middlewares/validation.middleware");
const categoryValidation = require("../validations/category.validation");
const authMiddleware = require("../middlewares/auth.middleware");
const roleMiddleware = require("../middlewares/role.middleware");

const categoryRouter = Router();

categoryRouter.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  validationMiddleware(categoryValidation.create),
  categoryController.addCategory
);
categoryRouter.get("/", categoryController.allCategories);
categoryRouter.put(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  validationMiddleware(categoryValidation.update),
  categoryController.updateCategory
);
categoryRouter.delete(
  "/:id",
  authMiddleware,
  categoryController.deleteCategory
);

module.exports = categoryRouter;
