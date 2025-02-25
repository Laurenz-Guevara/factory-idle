import { useState, useEffect } from "react";
import ProgressionBar from "@components/ProgressionBar";
import WarehouseTab from "./storage/WarehouseTab";
import MiningTab from "@components/skills/MiningTab";
import WoodcuttingTab from "@components/skills/WoodcuttingTab";
// import OilTab from "@components/skills/OilTab";
// import GasTab from "@components/skills/GasTab";
// import SmeltingTab from "@components/skills/SmeltingTab";
// import RefiningTab from "@components/skills/RefiningTab";
// import FrackingTab from "@components/skills/FrackingTab";
// import TransportingTab from "@components/skills/TransportingTab";
// import PowerTab from "@components/skills/PowerTab";
// import SellingTab from "@components/skills/SellingTab";

import { usePlayerContext } from "@context/PlayerContext";

export default function Dashboard({ selectedPage }: { selectedPage: string }) {
  const { state } = usePlayerContext();
  let progressBarSkill;

  useEffect(() => {
    displaySkill(selectedPage)
  }, [selectedPage]);

  function displaySkill(selectedPage: string) {
    switch (selectedPage) {
      case "Warehouse":
        return <WarehouseTab />;
      case "Mining":
        progressBarSkill = state.skills.mining
        return <MiningTab />;
      case "Woodcutting":
        progressBarSkill = state.skills.woodcutting
        return <WoodcuttingTab />;
      default:
        return <p className="text-gray-400 text-center">Select a skill</p>;
    }
  }

  return (
    <div className="flex flex-col w-full">
      <div className="w-full h-full p-6">
        {displaySkill(selectedPage)}
      </div>
      {progressBarSkill ? <ProgressionBar skill={progressBarSkill} /> : ""}
    </div>
  );
}
