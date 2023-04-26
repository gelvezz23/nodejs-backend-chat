import { ChatModel } from "./chat.model";
import { PropsChat } from "./types";

class ChatService {
  constructor() {}

  async create(data: PropsChat) {
    const chatModel = new ChatModel(data);
    const result = await chatModel.save();
    return result;
  }

  async find() {
    const result = await ChatModel.find().populate("users").exec();
    return result;
  }

  async findOne(idUser: string) {
    const result = await ChatModel.find({ users: idUser })
      .populate("users")
      .exec();
    return result;
  }

  async delete(idChat: string) {
    await ChatModel.deleteOne({ _id: idChat });
    return { idChat };
  }
}

export default ChatService;
