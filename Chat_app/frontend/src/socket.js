import { io } from "socket.io-client";

const socket = io("https://chat-app-backend-76gz.onrender.com");

export default socket;
