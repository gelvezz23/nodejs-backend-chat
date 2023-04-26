"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketContent = exports.connect = exports.socket = void 0;
const http_1 = require("http");
const socket_io_1 = require("socket.io");
exports.socket = {};
const connect = (server) => {
    exports.socket.io = new socket_io_1.Server(server);
};
exports.connect = connect;
const SocketContent = (app) => {
    const httpServer = (0, http_1.createServer)(app);
    const io = new socket_io_1.Server(httpServer, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
        },
    });
    (0, exports.connect)(httpServer);
    io.on("connection", (socket) => {
        console.log(socket);
        socket.emit("welcome to socket io");
    });
};
exports.SocketContent = SocketContent;
//# sourceMappingURL=index.js.map