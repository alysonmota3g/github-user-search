import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import useSWRInfinite from "swr/infinite"
import axios from "axios"

import { CardRepo } from "../components/CardRepo"
import { InfiniteScroll } from "../components/InfiniteScroll"
import { CaretLeft } from "phosphor-react"

interface Repo {
  id: number
  name: string
  html_url: string
  description: string
  forks: number
  stargazers_count: number
}

const fetcher = (url: string) =>
  axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    })
    .then(({ data }) => data)

export const Repos = () => {
  const { id: userName } = useParams()
  const [isEnding, setIsEnding] = useState(false)
  const PAGE_SIZE = 5

  const swr = useSWRInfinite(
    (index: number) =>
      `https://api.github.com/users/${userName}/repos?per_page=${PAGE_SIZE}&page=${(index += 1)}`,
    fetcher,
    {
      revalidateFirstPage: false,
    }
  )
  const { data, error, size } = swr
  const repos = data ? [].concat(...data) : []

  const isLoading =
    (!data && !error) ||
    (size > 0 && data && typeof data[size - 1] === "undefined")

  useEffect(() => {
    swr.data?.[0]?.length === 0 ||
    swr.data?.[swr.data?.length - 1]?.length < PAGE_SIZE
      ? setIsEnding(true)
      : setIsEnding(false)
  }, [data])

  if (!repos.length && error) {
    return (
      <div className="h-screen flex items-center justify-center gap-3">
        <Link
          to="/"
          className="bg-zinc-800 hover:bg-transparent transition-colors duration-200 p-2 rounded"
        >
          <CaretLeft size={22} />
        </Link>

        <h1 className="text-lg text-zinc-400 font-semibold">
          Oops, there was a problem, try again
        </h1>
      </div>
    )
  }

  return (
    <div className="max-w-[400px] mx-auto h-screen flex flex-col gap-3 items-start justify-center">
      <h1 className="text-lg text-zinc-300">
        <span className="font-semibold">{userName}</span> repositories
      </h1>

      <div className="h-full w-full max-h-[400px] flex flex-col gap-4 overflow-y-scroll">
        {repos.map((repo: Repo) => {
          return (
            <CardRepo
              key={repo.id}
              title={repo.name}
              description={repo.description}
              stars={repo.stargazers_count}
              forks={repo.forks}
              url={repo.html_url}
            />
          )
        })}

        <div className="relative">
          {repos && !isEnding && <InfiniteScroll swr={swr} />}

          {!isLoading && isEnding && (
            <div className="w-[99%] p-2 bg-zinc-800 rounded">
              <p>No more repositories! 🎉</p>
            </div>
          )}

          {isLoading && !isEnding && (
            <div className="w-[99%] flex items-center justify-center">
              <div className="w-[20px] h-[20px] border-r-4 border-r-zinc-500 animate-spin rounded-full" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
