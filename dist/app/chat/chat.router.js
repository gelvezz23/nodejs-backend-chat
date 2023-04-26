"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../../middleware/middleware");
const chat_controller_1 = require("./chat.controller");
const chat_dto_1 = require("./chat.dto");
const router = (0, express_1.Router)();
router.get("/", chat_controller_1.getChats);
router.get("/:idUser", (0, middleware_1.validateHandler)(chat_dto_1.getChatDto, "params"), chat_controller_1.getOneChat);
router.post("/", (0, middleware_1.validateHandler)(chat_dto_1.createChatDto, "body"), chat_controller_1.createChat);
//router.delete("/:id", validateHandler(getMessageDto, "params"), deleteMessage);
exports.default = router;
//# sourceMappingURL=chat.router.js.map