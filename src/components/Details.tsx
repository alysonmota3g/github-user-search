interface DetailsProps {
  repos: number
  followers: number
  following: number
}

export const Details = ({ repos, followers, following }: DetailsProps) => {
  return (
    <div
      className={`w-full py-3 px-5 bg-zinc-900 flex items-center justify-between rounded`}
    >
      <div className="flex flex-col">
        <button
          role="a"
          title="See all repositories for this user"
          className="text-blue-500 hover:underline"
        >
          Repos
        </button>
        <span>{repos}</span>
      </div>

      <div className="flex flex-col">
        <span className="text-zinc-400">Followers</span>
        <span>{followers}</span>
      </div>

      <div className="flex flex-col">
        <span className="text-zinc-400">Following</span>
        <span>{following}</span>
      </div>
    </div>
  )
}
