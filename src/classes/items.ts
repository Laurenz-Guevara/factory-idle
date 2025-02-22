class Item {
  itemName: string;
  itemId: string;
  itemPrice: number;
  itemRarity: number;

  constructor(
    itemName: string,
    itemId: string,
    itemPrice: number,
    itemRarity: number,
  ) {
    this.itemName = itemName;
    this.itemId = itemId;
    this.itemPrice = itemPrice;
    this.itemRarity = itemRarity;
  }
}
