"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMessageDto = exports.createMessageDto = exports.getMessageByUserDto = exports.getMessageDto = void 0;
const joi_1 = __importDefault(require("joi"));
const id = joi_1.default.string();
const message = joi_1.default.string();
const user = joi_1.default.string();
const chat = joi_1.default.string();
exports.getMessageDto = joi_1.default.object({
    id: id.required(),
});
exports.getMessageByUserDto = joi_1.default.object({
    user: user.required(),
});
exports.createMessageDto = joi_1.default.object({
    message: message.required(),
    user: user.required(),
    chat: chat.required(),
});
exports.updateMessageDto = joi_1.default.object({
    message,
    user,
});
//# sourceMappingURL=message.dto.js.map