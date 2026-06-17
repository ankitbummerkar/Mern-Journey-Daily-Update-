import { Socket } from "socket.io";
import mesgModel from "../model/mesg.model.js";

export const socketHandler = (io) => {
  io.on("connection", (socket) => {
    console.log("user connected", socket.id);
    socket.on("send_messages", async (data) => {
      try {
        const savemessages = await mesgModel.create({
          name: data.name,
          text: data.text,
        });

        io.emit("receive_message", savemessages);
      } catch (error) {
        console.log(error);
      }
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};
