import { useEffect, useState } from "react";
import axios from "axios";
import socket from "./socket";

export default function App() {
  const [name, setName] = useState("");
  const [joined, setJoined] = useState(false);

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/all/messages")
      .then((res) => setMessages(res.data));

    socket.on("receive_message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  const sendMessage = () => {
    if (!message.trim()) return;

    socket.emit("send_message", {
      name,
      text: message,
    });

    setMessage("");
  };

  if (!joined) {
    return (
      <div className="h-screen flex justify-center items-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow w-80">
          <h1 className="text-2xl font-bold mb-5 text-center">Join Chat</h1>

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-3 rounded"
          />

          <button
            onClick={() => name && setJoined(true)}
            className="w-full bg-black text-white mt-4 p-3 rounded"
          >
            Join
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-2xl h-[90vh] bg-white shadow rounded-lg flex flex-col">
        <div className="p-4 border-b font-bold text-xl">Global Chat</div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg) => (
            <div key={msg._id} className="bg-gray-100 p-3 rounded">
              <p className="font-bold">{msg.name}</p>

              <p>{msg.text}</p>
            </div>
          ))}
        </div>

        <div className="p-4 border-t flex gap-2">
          <input
            type="text"
            placeholder="Type Message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 border rounded p-3"
          />

          <button
            onClick={sendMessage}
            className="bg-black text-white px-6 rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
