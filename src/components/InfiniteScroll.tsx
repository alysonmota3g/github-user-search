import { useEffect, useRef } from "react"
import type { SWRInfiniteResponse } from "swr/infinite"

interface InfiniteScrollProps<T> {
  swr: SWRInfiniteResponse<T>
}

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
}

export const InfiniteScroll = <T,>({ swr }: InfiniteScrollProps<T>) => {
  const intersectionRef = useRef<HTMLDivElement>(null)
  const { size, setSize } = swr

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setSize((state) => state + 1)
      }
    }, observerOptions)

    observer.observe(intersectionRef.current as HTMLDivElement)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      className="w-full h-[1px] absolute left-0 bottom-0"
      ref={intersectionRef}
    />
  )
}
