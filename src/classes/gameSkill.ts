export class GameSkill {
  skillName: string;
  iconUrl: string;
  skillLevel: number;
  skillMaxLevel: number;
  currentSkillXp: number;
  skillXpMax: number;

  constructor(
    skillName: string,
    iconUrl: string,
    skillLevel: number,
    currentSkillXp: number
  ) {
    this.skillName = skillName;
    this.iconUrl = iconUrl;
    this.skillLevel = skillLevel;
    this.skillMaxLevel = 99;
    this.currentSkillXp = currentSkillXp;
    this.skillXpMax = this.calculateSkillXpMax(this.skillLevel);
  }

  private calculateSkillXpMax(level: number): number {
    let total = 0;
    for (let i = 0; i < level; i++) {
      total += Math.floor(i + 330 * Math.pow(2, i / 7.0));
    }
    return Math.floor(total / 4);
  }
}
