import { GameSkill } from "@classes/GameSkill"

export class Skills {
  mining: Object;
  woodcutting: Object;

  constructor(
  ) {
    this.mining = new GameSkill(
      "Mining",
      "https://cdn-icons-png.flaticon.com/512/18378/18378170.png",
      1,
      0
    );
    this.woodcutting = new GameSkill(
      "Woodcutting",
      "https://cdn-icons-png.flaticon.com/512/809/809139.png",
      1,
      0
    );
  }
}
