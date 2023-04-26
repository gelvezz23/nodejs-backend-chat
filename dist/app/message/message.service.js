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
const message_model_1 = require("./message.model");
class MessageService {
    constructor() { }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const messageModel = new message_model_1.MessageModel(data);
            const result = yield messageModel.save();
            return result;
        });
    }
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield message_model_1.MessageModel.find().populate("user").exec();
            return result;
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield message_model_1.MessageModel.findOne({ _id: id })
                .populate("user")
                .exec();
            return result;
        });
    }
    findOneByUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield message_model_1.MessageModel.find({ user: user })
                .populate("user")
                .exec();
            return result;
        });
    }
    update(id, changes) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield message_model_1.MessageModel.findByIdAndUpdate(id, changes);
            return result;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield message_model_1.MessageModel.deleteOne({ _id: id });
            return { id };
        });
    }
}
exports.default = MessageService;
//# sourceMappingURL=message.service.js.map