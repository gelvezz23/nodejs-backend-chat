import { CorsOptions } from "cors";

const whiteList = [
  "http://localhost:4000",
  "http://localhost:3000",
  "https://cdn.socket.io/4.6.1/socket.io.min.js",
  "node_modules/socket.io/client-dist/socket.io.js",
  "http://localhost:4000/index.html",
];
export const options: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("access denied - CORS-disabled to white list"));
    }
  },
  methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
};
