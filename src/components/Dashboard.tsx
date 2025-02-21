import { useState } from "react";
import ProgressionBar from "@components/ProgressionBar"
import { ArrowDown10 } from "lucide-react";

export default function Dashboard() {
  interface SkillAttributes {
    iconUrl: string;
    skillName: string;
    skillLevel: number;
    skillMaxLevel: number;
    skillXpMax: number;
    currentSkillXp: number;
  }

  // GameSkill represents a player's progression in a specific skill
  class GameSkill implements SkillAttributes {
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

  // Example usage
  const skill = new GameSkill(
    "https://cdn-icons-png.flaticon.com/512/18378/18378170.png",
    "Mining",
    9,
    99,
    44
  );

  const [selectedSkill, setSelectedSkill] = useState(skill);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full">
        <p>DASHBOARD</p>
      </div>
      {selectedSkill ? <ProgressionBar skill={selectedSkill} /> : <p>NO SKILL SELECTED</p>}
    </div>
  )
}
