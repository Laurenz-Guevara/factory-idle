import { useState, useRef } from "react"

export default function MiningComponent() {
  const [activeState, setActiveState] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  function startSkill() {
    if (!activeState) {
      startMining();
    } else {
      stopMining();
    }
    setActiveState(!activeState);
  }

  function startMining() {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      console.log("Mining...");
    }, 1000);
  }

  function stopMining() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  return (
    <div className="flex">
      <div className="bg-gray-800 flex flex-wrap justify-center p-3 flex-col min-w-48">
        <p className="text-center">Copper</p>
        <div className="flex justify-center my-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/9460/9460200.png"
            className="h-12"
          />
        </div>
        <div className="my-2 h-2 w-full bg-green-400"></div>
        <p className="text-center">You have 0 copper</p>
        <button
          className="mt-2 bg-slate-700 py-1 hover:cursor-pointer"
          onClick={startSkill}
        >
          {activeState ? <p>Stop</p> : <p>Start</p>}
        </button>
      </div>
    </div>
  );
}
