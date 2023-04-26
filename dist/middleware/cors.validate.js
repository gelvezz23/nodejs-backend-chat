"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = void 0;
const whiteList = [
    "http://localhost:4000",
    "http://localhost:3000",
    "https://cdn.socket.io/4.6.1/socket.io.min.js",
    "node_modules/socket.io/client-dist/socket.io.js",
    "http://localhost:4000/index.html",
];
exports.options = {
    origin: (origin, callback) => {
        if (!origin || whiteList.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error("access denied - CORS-disabled to white list"));
        }
    },
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
};
//# sourceMappingURL=cors.validate.js.map