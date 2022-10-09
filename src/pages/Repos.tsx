import { CardRepo } from "../components/CardRepo"

export const Repos = () => {
  return (
    <div className="max-w-[400px] mx-auto h-screen flex flex-col gap-3 items-start justify-center">
      <h1 className="text-lg text-zinc-300">
        <span className="font-semibold">alysonmota3g</span> repositories
      </h1>

      <div className="w-full max-h-[430px] flex flex-col gap-2 overflow-y-scroll">
        <CardRepo />
        <CardRepo />
        <CardRepo />
        <CardRepo />
        <CardRepo />
      </div>
    </div>
  )
}
