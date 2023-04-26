import Joi from "joi";
const id = Joi.string();
const user = Joi.string();

export const getUserDto = Joi.object({
  id: id.required(),
});

export const createUserDto = Joi.object({
  user: user.required(),
});

export const updateUserDto = Joi.object({
  user,
});
