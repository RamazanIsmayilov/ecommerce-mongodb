const User = require("../models/User.model");
const { AppError, NotFoundError } = require("../utils/error.utils");
const bcrypt = require("bcrypt");
const { encodePayload } = require("../utils/jwt.utils");

const login = async (params) => {
  const user = await User.findOne({ email: params.email }).lean();
  if (!user) throw new NotFoundError("Email or password is wrong");

  const password = bcrypt.compare(params.password, user.password);
  if (!password) throw new NotFoundError("Email or password is wrong");

  const token = encodePayload({ userId: user._id });

  return {
    token,
    user: {
      ...user,
      password: undefined,
    },
  };
};

const register = async (params) => {
  const existUser = await User.findOne({ email: params.email });
  if (existUser) throw new AppError("Email already exists", 409);

  const user = new User(params);
  await user.save();
  return user;
};

const authService = {
  login,
  register,
};

module.exports = authService;
