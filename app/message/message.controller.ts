import { NextFunction, Request, Response } from "express";
import MessageService from "./message.service";
import { socket } from "../server/sockets";
const service = new MessageService();
export const getMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.header({
      Authenticate: "TOKEN_JWT",
    });
    //const { headers } = req;
    //console.log(headers);
    const messages = await service.find();
    res.json(messages);
  } catch (error) {
    next(error);
  }
};

export const getOneMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const messages = await service.findOne(id);
    res.json(messages);
  } catch (error) {
    next(error);
  }
};

export const getMessageByUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user } = req.params;
    const messages = await service.findOneByUser(user);
    res.json(messages);
  } catch (error) {
    next(error);
  }
};

export const sendMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { file } = req;
    const { message, user, chat } = req.body;
    const date = new Date();
    socket.io.emit("message", message);
    const result = await service.create({
      message,
      user,
      chat,
      date,
      file: file?.path,
    });
    res.json({ body: result });
  } catch (error) {
    next(error);
  }
};

export const editMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { message, user } = req.body;
    const date = new Date();
    const result = await service.update(id, { message, user, date });
    res.json({ body: result });
  } catch (error) {
    next(error);
  }
};

export const deleteMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const result = await service.delete(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
