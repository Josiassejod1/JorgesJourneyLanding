'use client'

import Image from "next/image"
import { useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

const carouselImages = [
  {
    src: "/images/carousel_1.png",
    alt: "Family learning Haitian Creole together"
  },
  {
    src: "/images/carousel_2.png",
    alt: "Boy with globe highlighting Haiti"
  },
  {
    src: "/images/carousel_3.png",
    alt: "People communicating in Haitian Creole"
  }
]

export function HeroCarousel({ setApi }: { setApi: (api: CarouselApi | undefined) => void }) {
  // Auto-play functionality
  useEffect(() => {
    if (!setApi) return

    // This will be handled by the wrapper component
  }, [setApi])

  return (
    <div className="relative w-full">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-lg mx-auto"
      >
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full aspect-square">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain rounded-2xl"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export function HeroCarouselControls({ api, current }: { api: CarouselApi | undefined, current: number }) {
  // Auto-play functionality
  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [api])

  if (!api) return null

  return (
    <div className="flex justify-center items-center gap-4 mt-4">
      <button
        onClick={() => api.scrollPrev()}
        className="p-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      {/* Dots indicator */}
      <div className="flex justify-center gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => api.scrollTo(index)}
            className={`h-2 rounded-full transition-all ${
              current === index
                ? "w-8 bg-purple-600"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <button
        onClick={() => api.scrollNext()}
        className="p-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}
