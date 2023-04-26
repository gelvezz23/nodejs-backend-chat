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
exports.deleteUser = exports.createChat = exports.getOneChat = exports.getChats = void 0;
const chat_service_1 = __importDefault(require("./chat.service"));
const service = new chat_service_1.default();
const getChats = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const chats = yield service.find();
        res.json(chats);
    }
    catch (error) {
        next(error);
    }
});
exports.getChats = getChats;
const getOneChat = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idUser } = req.params;
        const user = yield service.findOne(idUser);
        res.json(user);
    }
    catch (error) {
        next(error);
    }
});
exports.getOneChat = getOneChat;
const createChat = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { users } = req.body;
        const date = new Date();
        const result = yield service.create({ users, date });
        res.json({ body: result });
    }
    catch (error) {
        next(error);
    }
});
exports.createChat = createChat;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield service.delete(id);
        res.json(result);
    }
    catch (error) {
        next(error);
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=chat.controller.js.map