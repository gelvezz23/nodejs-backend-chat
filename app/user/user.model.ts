import { Schema, model } from "mongoose";
export const MODEL_TABLE_USER = "User";

const user = new Schema({
  user: { type: String, require: true },
  date: Date,
  //email: { type: String, require: true },
  //password: { type: String, require: true },
});

export const UserModel = model(MODEL_TABLE_USER, user);
