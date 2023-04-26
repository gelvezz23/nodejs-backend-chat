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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMessage = exports.editMessage = exports.sendMessage = exports.getMessageByUser = exports.getOneMessage = exports.getMessage = void 0;
const message_service_1 = __importDefault(require("./message.service"));
const sockets_1 = require("../server/sockets");
const service = new message_service_1.default();
const getMessage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.header({
            Authenticate: "TOKEN_JWT",
        });
        //const { headers } = req;
        //console.log(headers);
        const messages = yield service.find();
        res.json(messages);
    }
    catch (error) {
        next(error);
    }
});
exports.getMessage = getMessage;
const getOneMessage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const messages = yield service.findOne(id);
        res.json(messages);
    }
    catch (error) {
        next(error);
    }
});
exports.getOneMessage = getOneMessage;
const getMessageByUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user } = req.params;
        const messages = yield service.findOneByUser(user);
        res.json(messages);
    }
    catch (error) {
        next(error);
    }
});
exports.getMessageByUser = getMessageByUser;
const sendMessage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { file } = req;
        const { message, user, chat } = req.body;
        const date = new Date();
        sockets_1.socket.io.emit("message", message);
        const result = yield service.create({
            message,
            user,
            chat,
            date,
            file: file === null || file === void 0 ? void 0 : file.path,
        });
        res.json({ body: result });
    }
    catch (error) {
        next(error);
    }
});
exports.sendMessage = sendMessage;
const editMessage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { message, user } = req.body;
        const date = new Date();
        const result = yield service.update(id, { message, user, date });
        res.json({ body: result });
    }
    catch (error) {
        next(error);
    }
});
exports.editMessage = editMessage;
const deleteMessage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield service.delete(id);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
});
exports.deleteMessage = deleteMessage;
//# sourceMappingURL=message.controller.js.map