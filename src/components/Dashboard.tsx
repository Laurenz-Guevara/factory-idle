import { useState, useEffect } from "react";
import ProgressionBar from "@components/ProgressionBar";
import MiningComponent from "@components/skills/MiningComponent";
import WoodcuttingComponent from "@components/skills/WoodcuttingComponent";
// import OilComponent from "@components/skills/OilComponent";
// import GasComponent from "@components/skills/GasComponent";
// import SmeltingComponent from "@components/skills/SmeltingComponent";
// import RefiningComponent from "@components/skills/RefiningComponent";
// import FrackingComponent from "@components/skills/FrackingComponent";
// import TransportingComponent from "@components/skills/TransportingComponent";
// import PowerComponent from "@components/skills/PowerComponent";
// import SellingComponent from "@components/skills/SellingComponent";
import { GameSkill } from "@classes/gameSkill";

export default function Dashboard({ selectedPage }: { selectedPage: string }) {
  const miningSkill = new GameSkill(
    "https://cdn-icons-png.flaticon.com/512/18378/18378170.png",
    "Mining",
    9,
    99,
    44
  );

  useEffect(() => {
    displaySkill(selectedPage)
  }, [selectedPage]);

  function displaySkill(selectedPage: string) {
    switch (selectedPage) {
      case "Mining":
        return <MiningComponent />;
      case "Woodcutting":
        return <WoodcuttingComponent />;
      // case "Oil":
      //   return <OilComponent />;
      // case "Gas":
      //   return <GasComponent />;
      // case "Smelting":
      //   return <SmeltingComponent />;
      // case "Refining":
      //   return <RefiningComponent />;
      // case "Fracking":
      //   return <FrackingComponent />;
      // case "Transporting":
      //   return <TransportingComponent />;
      // case "Power":
      //   return <PowerComponent />;
      // case "Selling":
      //   return <SellingComponent />;
      default:
        return <p className="text-gray-400 text-center">Select a skill</p>;
    }
  }

  return (
    <div className="flex flex-col w-full">
      <div className="w-full h-full p-6">
        {displaySkill(selectedPage)}
      </div>
      <ProgressionBar skill={miningSkill} />
    </div>
  );
}
