import { MessageModel } from "./message.model";
import { PropsMessage } from "./types";

class MessageService {
  constructor() {}

  async create(data: PropsMessage) {
    const messageModel = new MessageModel(data);
    const result = await messageModel.save();
    return result;
  }

  async find() {
    const result = await MessageModel.find().populate("user").exec();
    return result;
  }

  async findOne(id: string) {
    const result = await MessageModel.findOne({ _id: id })
      .populate("user")
      .exec();
    return result;
  }

  async findOneByUser(user?: any) {
    const result = await MessageModel.find({ user: user })
      .populate("user")
      .exec();
    return result;
  }

  async update(id: string, changes: PropsMessage) {
    const result = await MessageModel.findByIdAndUpdate(id, changes);
    return result;
  }

  async delete(id: string) {
    await MessageModel.deleteOne({ _id: id });
    return { id };
  }
}

export default MessageService;
