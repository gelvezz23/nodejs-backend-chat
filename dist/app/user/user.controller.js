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
exports.deleteUser = exports.editUser = exports.createUser = exports.getOneUser = exports.getUsers = void 0;
const user_service_1 = __importDefault(require("./user.service"));
const service = new user_service_1.default();
const getUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.header({
            Authenticate: "TOKEN_JWT",
        });
        //const { headers } = req;
        //console.log(headers);
        const users = yield service.find();
        res.json(users);
    }
    catch (error) {
        next(error);
    }
});
exports.getUsers = getUsers;
const getOneUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield service.findOne(id);
        res.json(user);
    }
    catch (error) {
        next(error);
    }
});
exports.getOneUser = getOneUser;
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user } = req.body;
        const date = new Date();
        const result = yield service.create({ user, date });
        res.json({ body: result });
    }
    catch (error) {
        next(error);
    }
});
exports.createUser = createUser;
const editUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { user } = req.body;
        const date = new Date();
        const result = yield service.update(id, { user, date });
        res.json({ body: result });
    }
    catch (error) {
        next(error);
    }
});
exports.editUser = editUser;
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
//# sourceMappingURL=user.controller.js.map