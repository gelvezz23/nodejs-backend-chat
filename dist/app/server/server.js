"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const errors_handler_1 = require("../../middleware/errors.handler");
const router_1 = require("./router");
const cors_validate_1 = require("../../middleware/cors.validate");
const mongooseConection_1 = require("../core/database/mongooseConection");
const sockets_1 = require("./sockets");
const Server = () => {
    const app = (0, express_1.default)();
    (0, sockets_1.SocketContent)(app);
    const port = process.env.HEYHOTEL_PORT || "";
    const host = process.env.HEYHOTEL_URL || "";
    app.use(express_1.default.static("public/statics"));
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use((0, helmet_1.default)());
    app.use((0, cors_1.default)(cors_validate_1.options));
    const listen = () => {
        try {
            (0, router_1.router)(app);
            (0, mongooseConection_1.connectionMongo)();
            app.use(errors_handler_1.logErrors);
            app.use(errors_handler_1.ormHandlerError);
            app.use(errors_handler_1.boomHandleErrors);
            app.use(errors_handler_1.handleErrors);
            app.listen(port, () => {
                console.log(`CORS-enabled web server listening on port ${port}`);
                console.log(`Run app in ${host}:${port}`);
            });
        }
        catch (error) {
            console.log("Error:", error);
        }
    };
    listen();
};
exports.Server = Server;
//# sourceMappingURL=server.js.map