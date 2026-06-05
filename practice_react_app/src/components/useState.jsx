import { useState } from "react";

const UseStateExample = () => {
  const block = [];
  const [num, setNum] = useState(2);

  for (let i = 0; i < num; i++) {
    block.push(<div className="w-24 h-8 bg-green-400 m-2" key={i}></div>);
  }

  return (
    <>
      <div className="flex flex-col   bg-black justify-end items-center">
        <div className="border-b-2 border-neutral-500 p-2">{block}</div>
        <div>
          <button
            className="p-2 m-2 rounded-lg bg-red-600 text-red-200 hover:bg-red-500"
            onClick={() => num > 0 && setNum(num - 1)}
          >
            remove block
          </button>
          <button
            className="p-2 m-2 rounded-lg bg-green-600 hover:bg-green-500 text-green-200 "
            onClick={() => num < 10 && setNum(num + 1)}
          >
            add block
          </button>
        </div>
      </div>
    </>
  );
};

export default UseStateExample;
