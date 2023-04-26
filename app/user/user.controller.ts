import { NextFunction, Request, Response } from "express";
import UserService from "./user.service";
const service = new UserService();
export const getUsers = async (
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
    const users = await service.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const getOneUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const user = await service.findOne(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user } = req.body;
    const date = new Date();
    const result = await service.create({ user, date });
    res.json({ body: result });
  } catch (error) {
    next(error);
  }
};

export const editUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { user } = req.body;
    const date = new Date();
    const result = await service.update(id, { user, date });
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
