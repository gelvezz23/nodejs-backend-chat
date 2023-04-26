import { Application } from "express";
import { Path as path } from "./paths";

import messageRouter from "../message/message.router";
import userRouter from "../user/user.router";
import chatRouter from "../chat/chat.router";
export const router = (app: Application) => {
  app.use(path.message, messageRouter);
  app.use(path.user, userRouter);
  app.use(path.chat, chatRouter);
};
