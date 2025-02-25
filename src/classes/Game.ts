export class Game {
  name: string;
  warehouse: { itemId: number; itemName: string; itemImage: string; itemQuantity: number }[];

  // TODO: Store a reference of item image so it doesn't get saved to local storage
  constructor(name: string) {
    this.name = name;
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
      }
    ]
  }

  static loadFromLocalStorage(saveFileName: string): Game | null {
    let savedData = localStorage.getItem("playerData");
    if (!savedData) {
      return new Game(saveFileName); // Create a new Game instance
    }

    const parsedData = JSON.parse(savedData);
    if (parsedData.name) {
      return new Game(parsedData.name); // Create a new Game instance
    }
  }
}
