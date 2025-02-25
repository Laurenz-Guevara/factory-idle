import { GameSkill } from "@classes/GameSkill"

export default function ProgressionBar({ skill }: { skill: GameSkill }) {
  return (
    <div className="mt-auto">
      <div className="flex w-full bg-gray-800 ">
        <div className="grid grid-cols-3 py-2 container">
          <div className="flex justify-center px-4">
            <div className="flex items-center space-x-2">
              <p className="text-sm">Skill Level</p>
              <p className="text-sm text-yellow-200">Level {skill.skillLevel}</p>
            </div>
          </div>
          <div className="flex justify-center px-4">
            <div className="flex items-center space-x-2">
              <p className="text-sm">Skill XP</p>
              <p className="text-sm text-yellow-200">{skill.currentSkillXp} / {skill.skillXpMax}</p>
            </div>
          </div>
          <div className="flex justify-center px-4">
            <div className="flex items-center space-x-2">
              <p className="text-sm">XP/HR:</p>
              <p className="text-sm text-yellow-200">1390</p>
            </div>
          </div>

        </div>
      </div>
      <div className="flex w-full bg-gray-600 ">
        <div className="flex px-6 py-2 justify-between container">
          <div className="flex space-x-2">
            <img src={skill.iconUrl} className="h-12" />
            <div>
              <p className="text-base">{skill.skillName}</p>
              <p className="text-sm text-yellow-200">Level {skill.skillLevel}</p>
            </div>
          </div>
          <div className="bg-blue-800">
            <div className="bg-blue-900">
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
