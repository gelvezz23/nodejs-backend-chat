"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateHandler = void 0;
const boom_1 = __importDefault(require("@hapi/boom"));
const validateHandler = (dto, property) => {
    return (req, res, next) => {
        const data = req[property];
        const { error } = dto.validate(data, { abortEarly: false });
        if (error)
            next(boom_1.default.badRequest(error));
        next();
    };
};
exports.validateHandler = validateHandler;
//# sourceMappingURL=middleware.js.map