import { NextFunction, Request, Response } from "express";
import ChatService from "./chat.service";
const service = new ChatService();
export const getChats = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const chats = await service.find();
    res.json(chats);
  } catch (error) {
    next(error);
  }
};

export const getOneChat = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { idUser } = req.params;
    const user = await service.findOne(idUser);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const createChat = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { users } = req.body;
    const date = new Date();
    const result = await service.create({ users, date });
    res.json({ body: result });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (
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
