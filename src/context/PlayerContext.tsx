import { createContext, useContext, useEffect, useReducer, useRef } from "react";
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

// TODO: ENUM for skill name
type GameAction =
  | { type: "UPDATE_SKILL_AND_XP"; skillName: string, xp: number }
  | { type: "UPDATE_RESOURCE"; resource: string; amount: number }
  | { type: "SET_ACTIVE_SKILL"; skill: string }

// Reducer function to handle all updates
function playerReducer(state: Game, action: GameAction): Game {
  switch (action.type) {
    case "UPDATE_SKILL_AND_XP":
      return {
        ...state,
        skills: {
          ...state.skills,
          [action.skillName]: {
            ...state.skills[action.skillName],
            currentSkillXp: state.skills[action.skillName].currentSkillXp + action.xp
          }
        }
      };
    case "UPDATE_RESOURCE":
      return {
        ...state,
        warehouse: state.warehouse.map((item) =>
          item.itemName === action.resource ? { ...item, itemQuantity: item.itemQuantity + action.amount } : item
        ),
      };
    case "SET_ACTIVE_SKILL":
      return { ...state, activeSkill: action.skill || "" };

    default:
      return state;
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

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function gameTick() {
    if (!state.activeSkill) return;

    switch (state.activeSkill) {
      case "mining":
        updateGame({ type: "UPDATE_RESOURCE", resource: "coal", amount: 1 });
        updateGame({ type: "UPDATE_SKILL_AND_XP", skillName: "mining", xp: 10 });
        break;
      case "woodcutting":
        updateGame({ type: "UPDATE_RESOURCE", resource: "wood", amount: 1 });
        updateGame({ type: "UPDATE_SKILL_AND_XP", skillName: "woodcutting", xp: 10 });
        break;
    }
  }

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (state.activeSkill) {
      intervalRef.current = setInterval(() => {
        gameTick();
      }, 1000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [state.activeSkill]);

  return <PlayerContext.Provider value={{ state, updateGame }}>{children}</PlayerContext.Provider>;
}

export function usePlayerContext() {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayerContext must be used within a PlayerProvider");
  }
  return context;
}
