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
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("./user.model");
class UserService {
    constructor() { }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const userModel = new user_model_1.UserModel(data);
            const result = yield userModel.save();
            return result;
        });
    }
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield user_model_1.UserModel.find();
            return result;
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield user_model_1.UserModel.findOne({ _id: id });
            return result;
        });
    }
    findOneByUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield user_model_1.UserModel.find({ user: user });
            return result;
        });
    }
    update(id, changes) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield user_model_1.UserModel.findByIdAndUpdate(id, changes);
            return result;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield user_model_1.UserModel.deleteOne({ _id: id });
            return { id };
        });
    }
}
exports.default = UserService;
//# sourceMappingURL=user.service.js.map