"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.MODEL_TABLE_USER = void 0;
const mongoose_1 = require("mongoose");
exports.MODEL_TABLE_USER = "User";
const user = new mongoose_1.Schema({
    user: { type: String, require: true },
    date: Date,
    //email: { type: String, require: true },
    //password: { type: String, require: true },
});
exports.UserModel = (0, mongoose_1.model)(exports.MODEL_TABLE_USER, user);
//# sourceMappingURL=user.model.js.map