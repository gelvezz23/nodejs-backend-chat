"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const paths_1 = require("./paths");
const message_router_1 = __importDefault(require("../message/message.router"));
const user_router_1 = __importDefault(require("../user/user.router"));
const chat_router_1 = __importDefault(require("../chat/chat.router"));
const router = (app) => {
    app.use(paths_1.Path.message, message_router_1.default);
    app.use(paths_1.Path.user, user_router_1.default);
    app.use(paths_1.Path.chat, chat_router_1.default);
};
exports.router = router;
//# sourceMappingURL=router.js.map