"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageModel = void 0;
const mongoose_1 = require("mongoose");
const user_model_1 = require("../user/user.model");
const chat_model_1 = require("../chat/chat.model");
const MODEL_TABLE_MESSAGE = "Message";
const message = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: user_model_1.MODEL_TABLE_USER,
    },
    chat: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: chat_model_1.MODEL_TABLE_CHAT,
    },
    date: Date,
    message: { type: String, require: true },
    file: { type: String },
});
exports.MessageModel = (0, mongoose_1.model)(MODEL_TABLE_MESSAGE, message);
//# sourceMappingURL=message.model.js.map