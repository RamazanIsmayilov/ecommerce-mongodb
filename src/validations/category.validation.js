const Joi = require("joi");

const category = Joi.object({
  name: Joi.string().trim().required(),
  slug: Joi.string().trim().required(),
  parentId: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).allow(null)
});

const categoryValidation = {
  category,
};

module.exports = categoryValidation;
