'use client'

import { useState, useEffect } from "react"
import type { CarouselApi } from "@/components/ui/carousel"
import { HeroCarousel, HeroCarouselControls } from "./HeroCarousel"

// Global state to share carousel API between image and controls
let globalCarouselApi: CarouselApi | undefined = undefined
let globalCurrent: number = 0
const listeners: Array<() => void> = []

export function setGlobalCarouselApi(api: CarouselApi | undefined) {
  globalCarouselApi = api
  listeners.forEach(listener => listener())
}

export function getGlobalCarouselApi() {
  return globalCarouselApi
}

export function subscribeToCarouselUpdates(callback: () => void) {
  listeners.push(callback)
  return () => {
    const index = listeners.indexOf(callback)
    if (index > -1) {
      listeners.splice(index, 1)
    }
  }
}

export function HeroCarouselImage() {
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    if (api) {
      setGlobalCarouselApi(api)
    }
  }, [api])

  return <HeroCarousel setApi={setApi} />
}

export function HeroCarouselControlsWrapper() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [, forceUpdate] = useState({})

  useEffect(() => {
    const update = () => {
      const globalApi = getGlobalCarouselApi()
      if (globalApi !== api) {
        setApi(globalApi)
        if (globalApi) {
          setCurrent(globalApi.selectedScrollSnap())
          globalApi.on("select", () => {
            setCurrent(globalApi.selectedScrollSnap())
          })
        }
      }
      forceUpdate({})
    }

    const unsubscribe = subscribeToCarouselUpdates(update)
    update()

    return unsubscribe
  }, [api])

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return <HeroCarouselControls api={api} current={current} />
}
