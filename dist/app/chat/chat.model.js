"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatModel = exports.MODEL_TABLE_CHAT = void 0;
const mongoose_1 = require("mongoose");
exports.MODEL_TABLE_CHAT = "Chat";
const chat = new mongoose_1.Schema({
    users: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
});
exports.ChatModel = (0, mongoose_1.model)(exports.MODEL_TABLE_CHAT, chat);
//# sourceMappingURL=chat.model.js.map