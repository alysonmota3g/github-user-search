import { MapPin, Link } from "phosphor-react"
import { Details } from "./Details"

export const Card = () => {
  return (
    <div className="w-full mt-4 flex items-start justify-start gap-6">
      <img
        src="https://avatars.githubusercontent.com/u/114875261?s=120&v=4"
        alt="User profile picture on github"
        title="User profile picture on github"
        className="w-[80px] cover rounded-full"
      />

      <div className="flex flex-1 flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex flex-col justify-between">
            <h1 className="text-zinc-300 text-lg font-bold">Alyson Mota</h1>
            <a href="#" className="text-blue-500 hover:underline">
              @alysonmota3g
            </a>
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>City name</span>
            </div>
            <div className="max-w-[180px] flex items-center gap-2">
              <Link className="min-w-[16px] min-h-[16px]" />
              <a href="#" className="truncate text-blue-500 hover:underline">
                https://github.blog
              </a>
            </div>
          </div>
        </div>
        <Details />
      </div>
    </div>
  )
}
