import { createContext, useContext, useEffect, useReducer, useRef } from "react";
import { Game } from "@classes/Game"
import { Skills } from "@classes/Skills"

interface PlayerContextType {
  state: Game;
  updateGame: (action: GameAction) => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

const cacheData = new Game("Renz");

function getSaveName(): string {
  // TODO: Add functionality so it gets name from any local or cloud saves otherwise prompt user
  let saveName = "Renzo Save 1"
  return saveName
}

// TODO: ENUM for skill name
type GameAction =
  | { type: "UPDATE_SKILL_AND_XP"; skillName: keyof Skills, xp: number }
  | { type: "UPDATE_RESOURCE"; activeItemId: number; amount: number, itemName: string, itemImage: string }
  | { type: "SET_ACTIVE_SKILL"; skill: string, activeItemId: number }

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
      let item = Game.getResourceData(state.activeItemId)

      return {
        ...state,
        warehouse: state.warehouse.find(item => item.itemId === action.activeItemId) ?
          state.warehouse.map((item) => item.itemId === action.activeItemId ? { ...item, itemQuantity: item.itemQuantity + action.amount } : item)
          :
          [
            ...state.warehouse,
            {
              itemId: action.activeItemId,
              itemName: item.itemName,
              imgSrc: item.imgSrc,
              itemValue: item.itemValue,
              itemQuantity: action.amount,
            }]
      };
    case "SET_ACTIVE_SKILL":
      return { ...state, activeSkill: action.skill || "", activeItemId: action.activeItemId };
    default:
      return state;
  }
}

let onFirstLoad = true;
let savedPlayerData: Game | null;

// TODO: FIX TYPES
export function updateResource(resourceId: number, amount: number) {
  const item = savedPlayerData.warehouse.find((item: any) => item.itemId === resourceId);

  if (item) {
    item.itemQuantity += amount;
  }
}

function getSkillNameById(activeItemId: number): string {
  return "coal"
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
    updateGame({ type: "UPDATE_RESOURCE", activeItemId: state.activeItemId, amount: 1 });
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
  }, [state.activeSkill, state.activeItemId]);

  return <PlayerContext.Provider value={{ state, updateGame }}>{children}</PlayerContext.Provider>;
}

export function usePlayerContext() {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayerContext must be used within a PlayerProvider");
  }
  return context;
}
