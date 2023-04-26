"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chat_model_1 = require("./chat.model");
class ChatService {
    constructor() { }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const chatModel = new chat_model_1.ChatModel(data);
            const result = yield chatModel.save();
            return result;
        });
    }
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield chat_model_1.ChatModel.find().populate("users").exec();
            return result;
        });
    }
    findOne(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield chat_model_1.ChatModel.find({ users: idUser })
                .populate("users")
                .exec();
            return result;
        });
    }
    delete(idChat) {
        return __awaiter(this, void 0, void 0, function* () {
            yield chat_model_1.ChatModel.deleteOne({ _id: idChat });
            return { idChat };
        });
    }
}
exports.default = ChatService;
//# sourceMappingURL=chat.service.js.map