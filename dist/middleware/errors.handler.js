"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ormHandlerError = exports.boomHandleErrors = exports.handleErrors = exports.logErrors = void 0;
const logErrors = (error, req, res, next) => {
    console.error(error);
    next(error);
};
exports.logErrors = logErrors;
const handleErrors = (error, req, res, next) => {
    res.status(500).json({
        message: error.message,
        stack: error.stack,
    });
};
exports.handleErrors = handleErrors;
const boomHandleErrors = (error, req, res, next) => {
    if (error.isBoom) {
        const { payload, statusCode } = error.output;
        res.status(statusCode).json({
            payload,
        });
    }
    else {
        next(error);
    }
};
exports.boomHandleErrors = boomHandleErrors;
const ormHandlerError = (error, req, res, next) => {
    if (error === null || error === void 0 ? void 0 : error.sql) {
        res.status(409).json({
            statusCode: 409,
            message: error.errors.name,
            errors: error.errors,
        });
    }
    next(error);
};
exports.ormHandlerError = ormHandlerError;
//# sourceMappingURL=errors.handler.js.map