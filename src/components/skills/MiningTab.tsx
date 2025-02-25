import { useState, useRef, useEffect } from "react";
import { usePlayerContext } from "@context/PlayerContext";
import { updateResource } from "@context/PlayerContext";

export default function MiningTab() {
  const playerData = usePlayerContext();
  const [activeState, setActiveState] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // TODO: TURN INTO HOOK
  function getResourceQuantity(resourceName: string, warehouse: any[]) {
    const resource = warehouse.find(item => item.itemName === resourceName);
    return resource ? resource.itemQuantity : 0;
  }

  // TODO: Turn into skill hook?
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
      updateResource("coal", 1);
    }, 1000);
  }

  // TODO: Turn into skill hook?
  function stopMining() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  return (
    <div className="flex">
      <div className="bg-gray-800 flex flex-wrap justify-center p-3 flex-col min-w-48">
        <p className="text-center">Coal</p>
        <div className="flex justify-center my-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/176/176598.png"
            className="h-12"
          />
        </div>
        <div className="my-2 h-2 w-full bg-green-400"></div>
        <p className="text-center">You have {getResourceQuantity('coal', playerData.warehouse)} coal</p>
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

