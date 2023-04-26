"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserDto = exports.createUserDto = exports.getUserDto = void 0;
const joi_1 = __importDefault(require("joi"));
const id = joi_1.default.string();
const user = joi_1.default.string();
exports.getUserDto = joi_1.default.object({
    id: id.required(),
});
exports.createUserDto = joi_1.default.object({
    user: user.required(),
});
exports.updateUserDto = joi_1.default.object({
    user,
});
//# sourceMappingURL=user.dto.js.map