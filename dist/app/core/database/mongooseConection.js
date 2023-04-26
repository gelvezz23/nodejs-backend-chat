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
exports.connectionMongo = void 0;
const mongoose_1 = require("mongoose");
const username = process.env.DB_USER || "";
const password = process.env.DB_PASSWORD || "";
const URI = `mongodb+srv://${username}:${password}@learning.4yxzohu.mongodb.net/test`;
const connectionMongo = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, mongoose_1.connect)(URI);
        console.log(`Connect With Data Base`);
    }
    catch (error) {
        console.log(`[NOT Connect With Data Base]: ${error}`);
    }
});
exports.connectionMongo = connectionMongo;
//# sourceMappingURL=mongooseConection.js.map