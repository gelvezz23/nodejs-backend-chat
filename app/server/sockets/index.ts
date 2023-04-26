import { Application } from "express";
import { createServer, Server as HTTPServer } from "http";
import { Server, Socket } from "socket.io";

export const socket: { io?: any } = {};

export const connect = (server: any) => {
  socket.io = new Server(server);
};

export const SocketContent = (app: Application) => {
  const httpServer: HTTPServer = createServer(app);
  const io: Server = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });
  connect(httpServer);

  io.on("connection", (socket: Socket) => {
    console.log(socket);
    socket.emit("welcome to socket io");
  });
};
