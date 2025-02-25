import { createContext, useContext, useEffect, useReducer } from "react";
import { Game } from "@classes/Game"

const PlayerContext = createContext<Game | undefined>(undefined)

const cacheData = {
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

export function updateResource(resource: string, amount: number) {
  const item = savedPlayerData.warehouse.find((item: any) => item.itemName === resource);

  if (item) {
    item.itemQuantity += amount;
  }
}

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  if (onFirstLoad) {
    savedPlayerData = Game.loadFromLocalStorage(getSaveName());
    onFirstLoad = false;
  } else {
    savedPlayerData = cacheData
  }

  return (
    <PlayerContext.Provider value={savedPlayerData}>
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

