export class GameSkill {
  iconUrl: string;
  skillName: string;
  skillLevel: number;
  skillMaxLevel: number;
  skillXpMax: number;
  currentSkillXp: number;

  constructor(
    iconUrl: string,
    skillName: string,
    skillLevel: number,
    skillMaxLevel: number,
    currentSkillXp: number
  ) {
    this.iconUrl = iconUrl;
    this.skillName = skillName;
    this.skillLevel = skillLevel;
    this.skillMaxLevel = skillMaxLevel;
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
