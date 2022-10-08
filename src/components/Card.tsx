import { MapPin, Link } from "phosphor-react"
import { Fragment } from "react"
import { User } from "../App"
import { Details } from "./Details"

interface CardProps {
  user: User | null
  error: string | null
}

export const Card = ({ user, error }: CardProps) => {
  return (
    <Fragment>
      {error && (
        <div className="w-full mt-4 px-1">
          <span className="text-red-400">{error}</span>
        </div>
      )}

      {user && !error && (
        <div className="w-full h-auto mt-4 flex items-start justify-start gap-6">
          <img
            src={user.avatar_url}
            alt="User profile picture on github"
            title="User profile picture on github"
            className="w-[80px] cover rounded-full"
          />

          <div className="flex flex-1 flex-col gap-4">
            <div className="flex justify-between">
              <div className="flex flex-col justify-between">
                <h1 className="text-zinc-300 text-lg font-bold">{user.name}</h1>
                <a
                  href={user.html_url}
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  {"@" + user.login}
                </a>
              </div>

              <div className="flex flex-col justify-between">
                <div className="max-w-[180px] flex items-center gap-2">
                  <Link className="min-w-[16px] min-h-[16px]" />
                  <a
                    href={user.blog}
                    target="_blank"
                    className="truncate text-blue-500 hover:underline"
                  >
                    {user.blog}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{user.location}</span>
                </div>
              </div>
            </div>
            <Details
              repos={user.public_repos}
              followers={user.followers}
              following={user.following}
            />
          </div>
        </div>
      )}
    </Fragment>
  )
}
