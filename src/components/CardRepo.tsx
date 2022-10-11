import { GitFork, Star } from "phosphor-react"

interface CardRepoProps {
  title: string
  description: string
  stars: number
  forks: number
  url: string
}

export const CardRepo = ({
  title,
  description,
  stars,
  forks,
  url,
}: CardRepoProps) => {
  return (
    <div className="w-[99%] h-full max-h-[140px] flex flex-col items-start justify-between gap-2 px-4 py-3 bg-zinc-800 shadow rounded">
      <div className="flex flex-col items-start gap-2">
        <a
          href={url}
          target="_blank"
          className="text-blue-300 hover:underline font-bold"
        >
          {title}
        </a>

        <p className="text-zinc-400 line-clamp-2">
          {description ?? "This repository has no description"}
        </p>
      </div>

      <div className="w-full flex items-center justify-start gap-3">
        <div className="flex items-center gap-2">
          <Star />
          <span>{stars}</span>
        </div>
        <div className="flex items-center gap-2">
          <GitFork />
          <span>{forks}</span>
        </div>
      </div>
    </div>
  )
}
