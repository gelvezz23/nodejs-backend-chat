"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const message_controller_1 = require("./message.controller");
const middleware_1 = require("../../middleware/middleware");
const message_dto_1 = require("./message.dto");
const router = (0, express_1.Router)();
var storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads/");
    },
    filename: function (req, file, cb) {
        const ext = file.originalname.split(".").pop();
        cb(null, `${file.originalname}-${Date.now()}.${ext}`);
    },
});
const upload = (0, multer_1.default)({ storage: storage });
router.get("/", message_controller_1.getMessage);
router.get("/:id", (0, middleware_1.validateHandler)(message_dto_1.getMessageDto, "params"), message_controller_1.getOneMessage);
router.get("/user/:user", (0, middleware_1.validateHandler)(message_dto_1.getMessageByUserDto, "params"), message_controller_1.getMessageByUser);
router.post("/", upload.single("file"), (0, middleware_1.validateHandler)(message_dto_1.createMessageDto, "body"), message_controller_1.sendMessage);
router.patch("/:id", (0, middleware_1.validateHandler)(message_dto_1.getMessageDto, "params"), (0, middleware_1.validateHandler)(message_dto_1.updateMessageDto, "body"), message_controller_1.editMessage);
router.delete("/:id", (0, middleware_1.validateHandler)(message_dto_1.getMessageDto, "params"), message_controller_1.deleteMessage);
exports.default = router;
//# sourceMappingURL=message.router.js.map