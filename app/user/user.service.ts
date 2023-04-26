import { UserProps } from "./types";
import { UserModel } from "./user.model";

class UserService {
  constructor() {}

  async create(data: UserProps) {
    const userModel = new UserModel(data);
    const result = await userModel.save();
    return result;
  }

  async find() {
    const result = await UserModel.find();
    return result;
  }

  async findOne(id: string) {
    const result = await UserModel.findOne({ _id: id });
    return result;
  }

  async findOneByUser(user?: any) {
    const result = await UserModel.find({ user: user });
    return result;
  }

  async update(id: string, changes: UserProps) {
    const result = await UserModel.findByIdAndUpdate(id, changes);
    return result;
  }

  async delete(id: string) {
    await UserModel.deleteOne({ _id: id });
    return { id };
  }
}

export default UserService;
