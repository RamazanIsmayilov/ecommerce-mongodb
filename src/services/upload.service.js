const ImageModel = require("../models/Image.model");

const uploadImage = async (file) => {
  let image = new ImageModel({
    url: `/uploads/${file.filename}`,
  });

  await image.save();
  return image;
};

const uploadService = {
  uploadImage,
};

module.exports = uploadService;