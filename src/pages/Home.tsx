import { useState } from "react"
import axios from "axios"

import { Card } from "../components/Card"
import { Search } from "../components/Search"

export interface User {
  id: number
  html_url: string
  avatar_url: string
  login: string
  name: string
  following: number
  followers: number
  public_repos: number
  location: string
  blog: string
}

const BASE_URL = "https://api.github.com"

export const Home = () => {
  const [userName, setUserName] = useState<string>("")
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async () => {
    if (!userName) {
      return setError("Fill in the search field.")
    }

    try {
      const { data: userData } = await axios.get<User>(
        `${BASE_URL}/users/${userName}`
      )
      const {
        id,
        html_url,
        avatar_url,
        login,
        name,
        followers,
        following,
        public_repos,
        location,
        blog,
      } = userData

      setUser({
        id,
        html_url,
        avatar_url,
        login,
        name,
        followers,
        following,
        public_repos,
        location,
        blog,
      })
      setError(null)
    } catch (error: any) {
      if (error.response.data.message === "Not Found") {
        setError("User not found.")
      }
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-zinc-900">
      <div className="w-full max-w-[500px] h-auto px-3 py-4 bg-zinc-800 shadow rounded transition-all duration-1000">
        <Search
          userName={userName}
          setUserName={setUserName}
          handleSubmit={handleSubmit}
        />
        <Card user={user} error={error} />
      </div>
    </div>
  )
}
