export const Details = () => {
  return (
    <div className="w-full h-auto py-3 px-5 bg-zinc-900 flex items-center justify-between rounded">
      <div className="flex flex-col">
        <a
          href="#"
          title="See all repositories for this user"
          className="text-blue-500 hover:underline"
        >
          Repos
        </a>
        <span>10</span>
      </div>
      <div className="flex flex-col">
        <span className="text-zinc-400">Followers</span>
        <span>2000</span>
      </div>
      <div className="flex flex-col">
        <span className="text-zinc-400">Following</span>
        <span>2000</span>
      </div>
    </div>
  )
}
