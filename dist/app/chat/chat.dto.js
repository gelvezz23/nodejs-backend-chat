"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createChatDto = exports.getChatDto = void 0;
const joi_1 = __importDefault(require("joi"));
const id = joi_1.default.string();
const users = joi_1.default.array();
exports.getChatDto = joi_1.default.object({
    idUser: id.required(),
});
exports.createChatDto = joi_1.default.object({
    users: users.required(),
});
//# sourceMappingURL=chat.dto.js.map