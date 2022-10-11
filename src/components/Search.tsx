import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react"
import { MagnifyingGlass } from "phosphor-react"

interface SearchProps {
  setUserName: Dispatch<SetStateAction<string>>
  userName: string
  handleSubmit: () => void
}

export const Search = ({
  userName,
  setUserName,
  handleSubmit,
}: SearchProps) => {
  return (
    <form
      onSubmit={(e: FormEvent) => e.preventDefault()}
      className="w-full h-[42px] flex items-center justify-between gap-3"
    >
      <input
        className="h-full min-w-[60px] mn:truncate mn:text-ellipses flex-1 px-2 bg-zinc-900 border border-neutral-700 hover:border-neutral-600 focus:border-neutral-500 transition-colors outline-none rounded placeholder:text-zinc-500"
        type="text"
        name="user-name"
        placeholder="Search for a user github"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setUserName(e.target.value)
        }
        value={userName}
        autoComplete="off"
      />

      <button
        onClick={handleSubmit}
        className="w-[42px] h-full px-2 hover:bg-zinc-900 flex items-center justify-center rounded"
      >
        <MagnifyingGlass size={20} />
      </button>
    </form>
  )
}
