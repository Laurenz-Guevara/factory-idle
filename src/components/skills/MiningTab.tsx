import { gameItems } from "@classes/GameItems"
import { usePlayerContext } from "@context/PlayerContext";
import { SKILL } from "@src/types/SkillTypes"

export default function MiningTab() {
  const { state, updateGame } = usePlayerContext();

  function toggleSkill(itemId: number) {
    updateGame({
      type: "SET_ACTIVE_SKILL",
      skill: state.activeSkill === SKILL.MINING && state.activeItemId === itemId ? "" : SKILL.MINING,
      activeItemId: itemId
    });
  }

  return (
    <div className="flex flex-wrap space-x-6">
      {gameItems.miningItems.map((item) =>
        <div key={item.itemId} className="bg-gray-800 flex flex-wrap justify-center p-3 mb-6 flex-col min-w-48">
          <p className="text-center">{item.itemName}</p>
          <div className="flex justify-center my-4">
            <img
              src={item.imgSrc}
              className="h-12"
            />
          </div>
          <div className="my-2 h-2 w-full bg-green-400"></div>
          <p>You have {state.warehouse.find((wItem) => wItem.itemId === item.itemId)?.itemQuantity || 0} {item.itemName}</p>
          <button
            className="mt-2 bg-slate-700 py-1 hover:cursor-pointer"
            onClick={() => toggleSkill(item.itemId)}
          >
            {state.activeSkill === SKILL.MINING && state.activeItemId === item.itemId ? <p>Stop</p> : <p>Start</p>}
          </button>
        </div>
      )}
    </div>
  );
}

