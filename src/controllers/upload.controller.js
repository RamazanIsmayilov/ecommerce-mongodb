const uploadService = require("../services/upload.service");
const { AppError } = require("../utils/error.utils");

const uploadImage = async (req, res, next) => {
  try {
    if (!req.file) throw new AppError("file is required", 400);
    let result = await uploadService.uploadImage(req.file);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

const uploadController = {
  uploadImage,
};

module.exports = uploadController;
