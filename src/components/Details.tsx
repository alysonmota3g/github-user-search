import { useNavigate } from "react-router-dom"

interface DetailsProps {
  userName: string
  repos: number
  followers: number
  following: number
}

export const Details = ({
  userName,
  repos,
  followers,
  following,
}: DetailsProps) => {
  const navigate = useNavigate()

  return (
    <div
      className={`w-full sm:flex-1 sm:gap-4 sm:flex-col sm:items-start py-3 px-5 bg-zinc-900 flex items-center justify-between rounded`}
    >
      <div className="flex flex-col sm:flex-row sm:gap-2">
        <button
          onClick={() => navigate(`/repos/${userName}`)}
          role="a"
          title="See all repositories for this user"
          className="text-blue-500 hover:underline"
        >
          Repos
        </button>
        <span>{repos}</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:gap-2">
        <span className="text-zinc-400">Followers</span>
        <span>{followers}</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:gap-2">
        <span className="text-zinc-400">Following</span>
        <span>{following}</span>
      </div>
    </div>
  )
}
