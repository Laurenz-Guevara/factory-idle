import { usePlayerContext } from "@context/PlayerContext";

export default function WoodcuttingTab() {
  const { state, updateGame } = usePlayerContext();

  function toggleSkill() {
    updateGame({ type: "SET_ACTIVE_SKILL", skill: state.activeSkill === "woodcutting" ? "" : "woodcutting" });
  }

  return (
    <div className="flex">
      <div className="bg-gray-800 flex flex-wrap justify-center p-3 flex-col min-w-48">
        <p className="text-center">Wood</p>
        <div className="flex justify-center my-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/9067/9067176.png"
            className="h-12"
          />
        </div>
        <div className="my-2 h-2 w-full bg-green-400"></div>
        <p>You have {state.warehouse.find((item) => item.itemName === "wood")?.itemQuantity || 0} wood</p>
        <button
          className="mt-2 bg-slate-700 py-1 hover:cursor-pointer"
          onClick={toggleSkill}
        >
          {state.activeSkill === "woodcutting" ? <p>Stop</p> : <p>Start</p>}
        </button>
      </div>
    </div>
  );
}

