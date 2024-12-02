const Joi = require("joi");

const emailRule = Joi.string().email().required();
const passwordRule = Joi.string().min(3).max(30).required();

const login = Joi.object({
  email: emailRule,
  password: passwordRule,
});

const register = Joi.object({
  email: emailRule,
  password: passwordRule,
  fullName: Joi.string().trim().optional(),
  phone: Joi.string()
    .pattern(/^\+?[1-9]\d{1,14}(\s?\(?\d+\)?[\s\-\d]*)?$/)
    .message("Invalid phone number format."),
  balance: Joi.number().optional(),
});

const authValidation = {
  login,
  register,
};

module.exports = authValidation;
