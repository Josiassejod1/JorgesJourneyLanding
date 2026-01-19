'use client'

import { useState, useEffect } from "react"
import type { CarouselApi } from "@/components/ui/carousel"
import { HeroCarousel, HeroCarouselControls } from "./HeroCarousel"

export function HeroCarouselWrapper({ showControls = false }: { showControls?: boolean }) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <>
      <HeroCarousel setApi={setApi} />
      {showControls && <HeroCarouselControls api={api} current={current} />}
    </>
  )
}
