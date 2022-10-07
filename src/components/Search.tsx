import { MagnifyingGlass } from "phosphor-react"

export const Search = () => {
  return (
    <div className="w-full h-[42px] flex items-center justify-between gap-3">
      <input
        className="h-full flex-1 px-2 bg-zinc-900 border border-neutral-700 hover:border-neutral-600 focus:border-neutral-500 transition-colors outline-none rounded placeholder:text-zinc-500"
        type="text"
        placeholder="Search for a user github"
      />

      <button className="w-[42px] h-full px-2 hover:bg-zinc-900 flex items-center justify-center rounded">
        <MagnifyingGlass size={20} />
      </button>
    </div>
  )
}
