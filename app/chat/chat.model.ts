import { Schema, model } from "mongoose";
export const MODEL_TABLE_CHAT = "Chat";

const chat = new Schema({
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

export const ChatModel = model(MODEL_TABLE_CHAT, chat);
