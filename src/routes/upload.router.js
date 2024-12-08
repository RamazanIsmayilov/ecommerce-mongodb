const { Router } = require("express");
const uploadController = require("../controllers/upload.controller");
const upload = require("../middlewares/upload.middleware");

const uploadRouter = Router();

uploadRouter.post(
  "/image",
  upload.single("avatar"),
  uploadController.uploadImage
);

module.exports = uploadRouter;