function savePlayerData(data: any) {
  throw new Error("Implement savePlayerData function")
}

// TODO: SET CURRENT ACTIVE SKILL (Refactor mining component and extract logic out)
export function updateResource(resource: string, amount: number, refreshPlayerData: () => void) {
  console.log("UPDATE")
  const playerData = JSON.parse(localStorage.getItem("playerData")!);

  const item = playerData.warehouse.find((item: any) => item.itemName === resource);

  if (item) {
    item.itemQuantity += amount;  // Increment the item quantity
  }
  localStorage.setItem("playerData", JSON.stringify(playerData));

  refreshPlayerData();
}

// TODO: ADD INTO FUNC (SAVE FILE NAME PIC)
export function setName(newName: string) {
  const playerData = JSON.parse(localStorage.getItem("playerData")!);
  playerData.name = newName;
  savePlayerData(playerData);
}
