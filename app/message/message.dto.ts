import Joi from "joi";
const id = Joi.string();
const message = Joi.string();
const user = Joi.string();
const chat = Joi.string();

export const getMessageDto = Joi.object({
  id: id.required(),
});
export const getMessageByUserDto = Joi.object({
  user: user.required(),
});

export const createMessageDto = Joi.object({
  message: message.required(),
  user: user.required(),
  chat: chat.required(),
});

export const updateMessageDto = Joi.object({
  message,
  user,
});
