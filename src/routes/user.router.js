const { Router } = require("express");
const validationMiddleware = require("../middlewares/validation.middleware");
const userValidation = require("../validations/user.validation");
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const userRouter = Router();

userRouter.get("/profile", authMiddleware, userController.myProfile);
userRouter.post(
  "/profile",
  authMiddleware,
  validationMiddleware(userValidation.update),
  userController.updateProfile
);

module.exports = userRouter;