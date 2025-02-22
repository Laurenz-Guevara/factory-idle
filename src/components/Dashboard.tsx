import { useState } from "react";
import ProgressionBar from "@components/ProgressionBar"
import { GameSkill } from "@classes/gameSkill"

export default function Dashboard() {
  const miningSkill = new GameSkill(
    "https://cdn-icons-png.flaticon.com/512/18378/18378170.png",
    "Mining",
    9,
    99,
    44
  );

  const [selectedSkill, setSelectedSkill] = useState(miningSkill);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full">
        <p>DASHBOARD</p>
      </div>
      {selectedSkill ? <ProgressionBar skill={selectedSkill} /> : <p>NO SKILL SELECTED</p>}
    </div>
  )
}
