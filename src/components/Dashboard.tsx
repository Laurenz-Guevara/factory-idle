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
      case "Warehouse":
        return <WarehouseTab />;
      case "Mining":
        return <MiningTab />;
      case "Woodcutting":
        return <WoodcuttingTab />;
      // case "Oil":
      //   return <OilTab />;
      // case "Gas":
      //   return <GasTab />;
      // case "Smelting":
      //   return <SmeltingTab />;
      // case "Refining":
      //   return <RefiningTab />;
      // case "Fracking":
      //   return <FrackingTab />;
      // case "Transporting":
      //   return <TransportingTab />;
      // case "Power":
      //   return <PowerTab />;
      // case "Selling":
      //   return <SellingTab />;
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
