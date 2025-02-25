import { usePlayerContext } from "@context/PlayerContext";

export default function MiningTab() {
  const { state, updateGame } = usePlayerContext();

  function toggleSkill() {
    updateGame({ type: "SET_ACTIVE_SKILL", skill: state.activeSkill === "mining" ? "" : "mining" });
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
        <p>You have {state.warehouse.find((item) => item.itemName === "coal")?.itemQuantity || 0} coal</p>
        <button
          className="mt-2 bg-slate-700 py-1 hover:cursor-pointer"
          onClick={toggleSkill}
        >
          {state.activeSkill === "mining" ? <p>Stop</p> : <p>Start</p>}
        </button>
      </div>
    </div>
  );
}

