import { Schema, model } from "mongoose";
import { MODEL_TABLE_USER } from "../user/user.model";
import { MODEL_TABLE_CHAT } from "../chat/chat.model";
const MODEL_TABLE_MESSAGE = "Message";

const message = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: MODEL_TABLE_USER,
  },
  chat: {
    type: Schema.Types.ObjectId,
    ref: MODEL_TABLE_CHAT,
  },
  date: Date,
  message: { type: String, require: true },
  file: { type: String },
});

export const MessageModel = model(MODEL_TABLE_MESSAGE, message);
