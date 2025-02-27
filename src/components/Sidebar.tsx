import { Pickaxe, TreePine, Flame, Truck, Fan, Bomb, Octagon, Factory, Droplet, Gem, Warehouse } from 'lucide-react';
import { useState, useEffect } from "react";
import { PAGETABS } from "@src/types/SkillTypes"


interface SidebarProps {
  switchPage: (page: string) => void;
}

export default function SideBar({ switchPage }: SidebarProps) {
  const [page, setPage] = useState("Warehouse");

  useEffect(() => {
    switchPage(page)
  }, [page])

  return (
    <div className="block left-0 top-0 h-screen bg-gray-800 border-r border-gray-700 transition-all duration-300 z-50 w-64">
      <div className="flex flex-col h-full">
        <div className="px-4">
          <p className="px-4 py-2 text-xl font-medium rounded-lg text-gray-400">Factory Idle</p>
        </div>
        <div className="flex-1 px-4 space-y-4">
          <div>
            <button onClick={() => setPage("Warehouse")} className="flex items-center w-full gap-x-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"><Warehouse />Warehouse</button>
            <button onClick={() => setPage("Selling")} className="flex items-center w-full gap-x-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"><Gem />Shop</button>
          </div>
          <div>
            <p className="px-4 text-sm font-medium text-gray-500">Extraction</p>
            <button onClick={() => setPage(PAGETABS.MINING)} className="flex items-center w-full gap-x-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"><Pickaxe />Mining</button>
            <button onClick={() => setPage(PAGETABS.WOODCUTTING)} className="flex items-center w-full gap-x-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"><TreePine />Woodcutting</button>
            <button onClick={() => setPage(PAGETABS.OIL)} className="flex items-center w-full gap-x-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"><Droplet />Oil</button>
            <button onClick={() => setPage(PAGETABS.GAS)} className="flex items-center w-full gap-x-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"><Octagon />Gas</button>
          </div>
          <div>
            <p className="px-4 text-sm font-medium text-gray-500">Production</p>
            <button onClick={() => setPage(PAGETABS.SMELTING)} className="flex items-center w-full gap-x-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"><Flame />Smelting</button>
            <button onClick={() => setPage(PAGETABS.REFINING)} className="flex items-center w-full gap-x-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"><Factory />Refining</button>
            <button onClick={() => setPage(PAGETABS.FRACKING)} className="flex items-center w-full gap-x-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"><Bomb />Fracking</button>
          </div>
          <div>
            <p className="px-4 text-sm font-medium text-gray-500">Other</p>
            <button onClick={() => setPage(PAGETABS.TRANSPORTING)} className="flex items-center w-full gap-x-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"><Truck />Transporting</button>
            <button onClick={() => setPage(PAGETABS.POWER)} className="flex items-center w-full gap-x-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"><Fan />Power</button>
          </div>
        </div>
        <div className="grid grid-rows-2 px-4 py-2 space-y-2">
          <a>Report a bug</a>
          <a>Privacy Policy</a>
        </div>
        <div className="bg-slate-700 mb-6">
          <p className="text-center text-gray-400">V0.0.0</p>
        </div>
      </div>
    </div>
  );
}

