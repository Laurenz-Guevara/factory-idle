import { createContext, useContext, useEffect, useReducer } from "react";
import { Game } from "@classes/Game"

// TODO: When user deletes local storage fix counter not incrementing

function playerReducer(state: Game, action: { type: string; payload?: any }) {
  switch (action.type) {
    case "SET_PLAYER_DATA":
      return action.payload;
    default:
      return state;
  }
}

const PlayerContext = createContext<{ playerData: Game; refreshPlayerData: () => void } | null>(null);

const x = {
  name: "Renz",
  warehouse: [
    {
      itemId: 0,
      itemName: "coal",
      itemImage: "https://cdn-icons-png.flaticon.com/512/176/176598.png",
      itemQuantity: 0,
    },
    {
      itemId: 1,
      itemName: "copper",
      itemImage: "https://cdn-icons-png.flaticon.com/512/9460/9460200.png",
      itemQuantity: 0,
    },
    {
      itemId: 2,
      itemName: "diamonds",
      itemImage: "https://cdn-icons-png.flaticon.com/512/9460/9460200.png",
      itemQuantity: 0,
    }
  ]
}

function getSaveName() {
  let saveName = "Renzo Save 1"
  return saveName
}

let onFirstLoad = true;
let savedPlayerData: Game | null;

export function updateResource(resource: string, amount: number, refreshPlayerData: () => void) {
  const item = savedPlayerData.warehouse.find((item: any) => item.itemName === resource);

  if (item) {
    item.itemQuantity += amount;
  }
  console.log("update", item)
}

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  if (onFirstLoad) {
    savedPlayerData = Game.loadFromLocalStorage(getSaveName());
    onFirstLoad = false;
  }

  const [playerData, dispatch] = useReducer(playerReducer, savedPlayerData);

  function refreshPlayerData() {
    const newData = Game.loadFromLocalStorage(getSaveName());
    if (newData) {
      dispatch({ type: "SET_PLAYER_DATA", payload: newData });
    } else {
      dispatch({ type: "SET_PLAYER_DATA", payload: savedPlayerData });
    }
  }

  return (
    <PlayerContext.Provider value={{ playerData, refreshPlayerData }}>
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayerContext() {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error("usePlayerContext must be used within a PlayerProvider");
  }
  return context;
}

