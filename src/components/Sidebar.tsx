import { Pickaxe, TreePine, Flame, Truck, Fan, Bomb, Octagon, Factory, Droplet, Gem } from 'lucide-react'

export default function SideBar() {
  return (
    <div className="block left-0 top-0 h-screen bg-gray-800 border-r border-gray-700 transition-all duration-300 z-50 w-64">
      <div className="flex flex-col h-full">
        <div className="px-4">
          <p className="px-4 py-2 text-lg text-center font-medium rounded-lg text-gray-400 hover:text-white hover:bg-gray-700">Factory Idle</p>
        </div>
        <div className="flex-1 px-4 space-y-4">
          <div>
            <p className="px-4 text-sm font-medium text-gray-500">Extraction</p>
            <a className="flex items-center gap-x-2 px-4 py-2 text-sm font-medium rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 cursor-pointer"><Pickaxe />Mining</a>
            <a className="flex items-center gap-x-2 px-4 py-2 text-sm font-medium rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 cursor-pointer"><TreePine />Woodcutting</a>
            <a className="flex items-center gap-x-2 px-4 py-2 text-sm font-medium rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 cursor-pointer"><Droplet />Oil</a>
            <a className="flex items-center gap-x-2 px-4 py-2 text-sm font-medium rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 cursor-pointer"><Octagon />Gas</a>
          </div>
          <div>
            <p className="px-4 text-sm font-medium text-gray-500">Production</p>
            <a className="flex items-center gap-x-2 px-4 py-2 text-sm font-medium rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 cursor-pointer"><Flame />Smelting</a>
            <a className="flex items-center gap-x-2 px-4 py-2 text-sm font-medium rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 cursor-pointer"><Factory />Refining</a>
            <a className="flex items-center gap-x-2 px-4 py-2 text-sm font-medium rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 cursor-pointer"><Bomb />Fracking</a>
          </div>
          <div>
            <p className="px-4 text-sm font-medium text-gray-500">Other</p>
            <a className="flex items-center gap-x-2 px-4 py-2 text-sm font-medium rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 cursor-pointer"><Truck />Transporting</a>
            <a className="flex items-center gap-x-2 px-4 py-2 text-sm font-medium rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 cursor-pointer"><Fan />Power</a>
            <a className="flex items-center gap-x-2 px-4 py-2 text-sm font-medium rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 cursor-pointer"><Gem />Selling</a>
          </div>
        </div>
        <div className="bg-slate-700 mb-6">
          <p className="text-center text-gray-400">V1.0.0</p>
        </div>
      </div>
    </div>
  )
}
