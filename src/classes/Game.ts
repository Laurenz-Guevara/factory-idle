import { Skills } from "@classes/Skills"

export class Game {
  name: string;
  activeSkill: string;
  skills: any;
  warehouse: { itemId: number; itemName: string; itemImage: string; itemQuantity: number }[];

  // TODO: Store a reference of item image so it doesn't get saved to local storage
  constructor(name: string) {
    this.name = name;
    this.activeSkill = "";
    this.skills = new Skills;
    this.warehouse = [
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
      },
      {
        itemId: 3,
        itemName: "wood",
        itemImage: "https://cdn-icons-png.flaticon.com/512/9067/9067176.png",
        itemQuantity: 0,
      }
    ]
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
