export default function JoinChat({ name, setName, setJoined }) {
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
