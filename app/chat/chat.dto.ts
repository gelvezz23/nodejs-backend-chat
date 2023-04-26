import Joi from "joi";
const id = Joi.string();
const users = Joi.array();

export const getChatDto = Joi.object({
  idUser: id.required(),
});

export const createChatDto = Joi.object({
  users: users.required(),
});
