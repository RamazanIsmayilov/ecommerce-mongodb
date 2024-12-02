const { Router } = require("express");
const authController = require("../controllers/auth.controller");

const authRouter = Router();

authRouter.post("/login", authController.login);
authRouter.post("/register", authController.register);

module.exports = authRouter;