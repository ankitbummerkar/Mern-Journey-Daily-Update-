import express from "express";
import { Server } from "socket.io";
import cors from "cors";
import http from "http";
import dotenv from "dotenv";
import { connectionDB } from "./db/connectiondb.js";
import messageRoutes from "./routes/mesg.routes.js";
import { socketHandler } from "./socket/socketHandler.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/all", messageRoutes);
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

socketHandler(io);

server.listen(process.env.PORT || 5000, () => {
  connectionDB();
  console.log("server running");
});
