import { useState } from "react";
import JoinChat from "./components/JoinChat";
import ChatBox from "./components/ChatBox";

export default function App() {
  const [name, setName] = useState("");
  const [joined, setJoined] = useState(false);

  return (
    <>
      {!joined ? (
        <JoinChat
          name={name}
          setName={setName}
          joined={joined}
          setJoined={setJoined}
        />
      ) : (
        <ChatBox name={name} />
      )}
    </>
  );
}
