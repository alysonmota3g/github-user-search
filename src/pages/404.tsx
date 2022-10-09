import { Link } from "react-router-dom"
import { House } from "phosphor-react"

export default () => {
  return (
    <div className="h-screen flex gap-3 items-center justify-center">
      <h1 className="text-zinc-400 text-lg">Page not found. 😢</h1>
      <Link
        to="/"
        className="bg-zinc-800 hover:opacity-80 flex items-center justify-center p-2 gap-2 transition-opacity rounded"
      >
        Back to home <House />
      </Link>
    </div>
  )
}
