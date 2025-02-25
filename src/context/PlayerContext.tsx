import { createContext, useContext, useEffect, useReducer } from "react";
import { Game } from "@classes/Game"

interface PlayerContextType {
  state: Game;
  updateGame: (action: GameAction) => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

const cacheData = new Game("Renz");

function getSaveName() {
  let saveName = "Renzo Save 1"
  return saveName
}

type GameAction =
  | { type: "UPDATE_RESOURCE"; resource: string; amount: number }
  | { type: "SET_ACTIVE_SKILL"; skill: string }
// | { type: "UPDATE_NAME"; name: string }
// | { type: "UPDATE_BANK_SIZE"; size: number }
// | { type: "RESET_GAME"; newGame: Game };

// Reducer function to handle all updates
function playerReducer(state: Game, action: GameAction): Game {
  switch (action.type) {
    case "UPDATE_RESOURCE":
      return {
        ...state,
        warehouse: state.warehouse.map((item) =>
          item.itemName === action.resource ? { ...item, itemQuantity: item.itemQuantity + action.amount } : item
        ),
      };
    case "SET_ACTIVE_SKILL":
      return { ...state, activeSkill: action.skill || "" }; // Update active skill
    default:
      return state;
    // case "UPDATE_NAME":
    //   return { ...state, name: action.name };
    //   case "UPDATE_BANK_SIZE":
    //     return { ...state, bankSize: action.size }; // Assuming Game has a `bankSize` property
    //   case "RESET_GAME":
    //     return action.newGame;
    //   default:
    //     return state;
  }
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
  const initialState = onFirstLoad ? Game.loadFromLocalStorage(getSaveName()) ?? cacheData : cacheData;
  if (onFirstLoad) {
    savedPlayerData = Game.loadFromLocalStorage(getSaveName());
    onFirstLoad = false;
  } else {
    savedPlayerData = cacheData
  }
  onFirstLoad = false;

  const [state, dispatch] = useReducer(playerReducer, initialState);

  function updateGame(action: GameAction) {
    console.log("action", action)
    dispatch(action);
  }

  return <PlayerContext.Provider value={{ state, updateGame }}>{children}</PlayerContext.Provider>;
}

export function usePlayerContext() {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayerContext must be used within a PlayerProvider");
  }
  return context;
}
