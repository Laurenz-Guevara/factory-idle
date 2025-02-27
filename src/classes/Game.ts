import { gameItems, WarehouseItem, Items } from "@classes/GameItems"
import { Skills } from "@classes/Skills"

export class Game {
  name: string;
  activeSkill: string;
  activeItemId: number;
  skills: Skills;
  warehouse: Array<WarehouseItem>;
  warehouseSize: number;

  constructor(name: string) {
    this.name = name;
    this.activeSkill = "";
    this.activeItemId = 0;
    this.skills = new Skills;
    this.warehouse = [];
    this.warehouseSize = 8
  }

  static getResourceData(itemId: number): Items {
    for (const [_, category] of Object.entries(gameItems)) {
      const foundItem = category.find((item: Items) => item.itemId === itemId);

      if (foundItem) {
        return foundItem;
      }
    }

    console.warn("Item not found:", itemId);
    return null;
  }

  static loadFromLocalStorage(saveFileName: string): Game | null {
    let savedData = localStorage.getItem("playerData");
    if (savedData.length !== 0) {
      return JSON.parse(savedData)
    } else {
      // TODO: Remove and add option to ask if you want to create new save / corrupted save
      console.log("THIS SHOULD ONLY RUN ONCE")
      let newGame = new Game(saveFileName);
      localStorage.setItem("playerData", JSON.stringify(newGame));
      return newGame
    }
  }

  static getFreshSave(saveFileName: string) {
    return "GENERATE A FRESH SAVE"
  }
}
