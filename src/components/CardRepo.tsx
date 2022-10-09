import { GitFork, Star } from "phosphor-react"

export const CardRepo = () => {
  return (
    <div className="w-[99%] flex flex-col items-start gap-2 px-4 py-3 bg-zinc-800 shadow rounded">
      <button className="text-blue-300 hover:underline font-bold">
        Repo title
      </button>

      <p className="text-zinc-400 line-clamp-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Non odio euismod
        lacinia at quis. Dignissim convallis aenean et tortor at risus viverra.
      </p>

      <div className="w-full flex items-center justify-start gap-3">
        <div className="flex items-center gap-2">
          <Star />
          <span>999</span>
        </div>
        <div className="flex items-center gap-2">
          <GitFork />
          <span>999</span>
        </div>
      </div>
    </div>
  )
}
