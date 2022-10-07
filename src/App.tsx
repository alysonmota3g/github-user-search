import { Card } from "./components/Card"
import { Search } from "./components/Search"

export const App = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-zinc-900">
      <div className="w-full max-w-[500px] h-auto px-3 py-4 bg-zinc-800 shadow rounded">
        <Search />
        <Card />
      </div>
    </div>
  )
}
