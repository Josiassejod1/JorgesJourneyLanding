import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Plane, Sparkles, Apple, Smartphone, MessageCircle } from "lucide-react"
import type { Metadata } from 'next'
import Link from "next/link"
import { DownloadButton } from "./components/DownloadButton"
import { WatchDemoButton } from "./components/WatchDemoButton"
import { WordOfTheDay } from "./components/WordOfTheDay"
import { HeroCarouselImage, HeroCarouselControlsWrapper } from "./components/HeroCarouselWithControls"

export const metadata: Metadata = {
  title: "Learn Creole with Jorge: Learn Haitian Creole with Fun Games",
  description: "Master Haitian Creole with Learn Creole with Jorge! Engaging games, interactive lessons, music, and videos for all ages. Download now and start your language adventure.",
  keywords: [
    "creole to english",
    "english to creole haitian",
    "creole haitian to english",
    "english to haitian",
    "english to creole",
    "english to haitian creole",
    "haitian to english",
    "haitian creole to english",
    "haitian creole translate",
    "translate",
    "haitian creole",
    "learn haitian creole",
    "haitian creole learning app",
    "creole translation",
    "haitian language learning",
    "what is creole",
    "what is creole language",
    "what language is creole",
    "haitian language",
    "haitian",
    "haitian creole language",
    "is creole a language",
    "creole english",
    "french creole"
  ],
  openGraph: {
    title: "Learn Creole with Jorge: Learn Haitian Creole with Fun Games",
    description: "Master Haitian Creole with Learn Creole with Jorge! Engaging games, interactive lessons, music, and videos for all ages. Download now and start your language adventure.",
    url: "https://learnwithjorge.net",
    siteName: "Learn Creole with Jorge",
    images: [
      {
        url: "https://learnwithjorge.net/app-icon.png",
        width: 1200,
        height: 630,
        alt: "Learn Creole with Jorge App - Learn Haitian Creole",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Creole with Jorge: Learn Haitian Creole with Fun Games",
    description: "Master Haitian Creole with Learn Creole with Jorge! Engaging games, interactive lessons, music, and videos for all ages. Download now and start your language adventure.",
    images: ["https://learnwithjorge.net/images/app-icon.png"],
  },
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/app-icon.png"
              alt="Learn Creole with Jorge App Icon"
              width={50}
              height={50}
              className="rounded-xl"
            />
            <span className="text-2xl font-bold text-gray-800">Learn Creole with Jorge</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://www.producthunt.com/products/learn-creole-with-jorge?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-learn-creole-with-jorge" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <img 
                alt="Learn Creole with Jorge - Learning Haitian Creole Made Easy | Product Hunt" 
                width="250" 
                height="54" 
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1068161&theme=dark&t=1769405960698"
                className="h-[54px] w-auto"
              />
            </a>
            <Button className="bg-purple-600 text-white hover:bg-purple-700">Download Now</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-start md:items-center">
            {/* Left side - Text content */}
            <div className="w-full order-2 md:order-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
                Learn Haitian Creole
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-700 mb-4 md:mb-6">
                Connect with What Matters Most
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 mb-6 md:mb-8">
                Whether you're connecting with family, your partner, preparing for a trip, or simply enjoying the joy of learning—Learn Creole with Jorge makes mastering Haitian Creole fun and meaningful.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6 md:mb-8">
                <DownloadButton url="/ios" text="Download for iOS" />
                <DownloadButton url="/android" text="Download for Android" />
              </div>

            </div>

            {/* Right side - Carousel Image */}
            <div className="relative w-full order-1 md:order-2 mb-6 md:mb-0">
              <HeroCarouselImage />
              {/* Carousel Controls directly under carousel */}
              <div className="mt-4">
                <HeroCarouselControlsWrapper />
              </div>
            </div>

            {/* Word of the Day Section - Shown on mobile below carousel */}
            <div className="w-full order-3 md:hidden">
              <WordOfTheDay />
            </div>

            {/* Word of the Day Section - Hidden on mobile, shown on larger screens */}
            <div className="hidden md:block w-full order-4 md:order-3 md:col-span-2">
              <WordOfTheDay />
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Why People Learn Haitian Creole
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Discover the meaningful reasons that inspire thousands to start their language journey
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Communicate with Family */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-200">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-4 bg-purple-100 rounded-full">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Connect with Family</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Bridge the language gap and deepen your relationships. Speak Haitian Creole with grandparents, cousins, and extended family members to create stronger bonds and preserve cultural connections.
                </p>
              </CardContent>
            </Card>

            {/* Partner is Haitian */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-200">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-4 bg-pink-100 rounded-full">
                    <Heart className="h-8 w-8 text-pink-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Your Partner is Haitian</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Show your love and commitment by learning their language. Communicate more deeply, understand their culture better, and connect with their family and community in a meaningful way.
                </p>
              </CardContent>
            </Card>

            {/* Trip Coming Up */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-200">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-4 bg-blue-100 rounded-full">
                    <Plane className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">A Trip Coming Up</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Prepare for your journey to Haiti or Haitian communities. Learn essential phrases, navigate confidently, and engage authentically with locals. Make your travel experience richer and more meaningful.
                </p>
              </CardContent>
            </Card>

            {/* Learning is Fun */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-200">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-4 bg-yellow-100 rounded-full">
                    <Sparkles className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Learning is Fun</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Discover the joy of learning a new language! Challenge yourself, expand your mind, and experience the satisfaction of mastering Haitian Creole through interactive games and engaging lessons.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#F5F5DC] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            How Learn Creole with Jorge Helps You Learn
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Interactive Games */}
            <Card className="text-center p-6 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="relative mx-auto w-full h-48 mb-4">
                  <Image src="/images/counting-game.png" alt="Interactive Games" fill className="object-cover rounded-lg" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Interactive Games</h3>
                <p className="text-gray-600">
                  Learn through fun, engaging games that make mastering Haitian Creole feel like play.
                </p>
              </CardContent>
            </Card>

            {/* Music & Videos */}
            <Card className="text-center p-6 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="relative mx-auto w-full h-48 mb-4">
                  <Image src="/images/music.png" alt="Music Library" fill className="object-cover rounded-lg" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Music & Videos</h3>
                <p className="text-gray-600">
                  Immerse yourself in Haitian culture through traditional songs, videos, and audio lessons.
                </p>
              </CardContent>
            </Card>

            {/* Achievement System */}
            <Card className="text-center p-6 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="relative mx-auto w-full h-48 mb-4">
                  <Image src="/images/badges.png" alt="Achievement Badges" fill className="object-cover rounded-lg" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Track Progress</h3>
                <p className="text-gray-600">
                  Stay motivated with badges, streaks, and progress tracking as you build your skills.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* App Screenshots Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            See Learn Creole with Jorge in Action
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Explore the app through these screenshots showcasing our interactive games, lessons, and features
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <div 
                key={num} 
                className="relative aspect-[9/16] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group bg-gray-100"
              >
                <Image
                  src={`/images/latest-app-screenshots/${num}.jpg`}
                  alt={`Learn Creole with Jorge app screenshot ${num}`}
                  fill
                  className="object-contain group-hover:brightness-110 transition-all duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                />
              </div>
            ))}
          </div>
          
          {/* Note: To add more screenshots, simply add them to /public/images/latest-app-screenshots/ 
              and update the array above with the new numbers */}
        </div>
      </section>

      {/* Music Section */}
      <section className="bg-[#F5F5DC] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Listen to Our Song
          </h2>
          <p className="text-xl text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience Haitian Creole through music
          </p>
          <div className="max-w-2xl mx-auto">
            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/track/63wVohZ18Tz5g9hlmw9LBa?utm_source=generator&theme=0&autoplay=1"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <MessageCircle className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Connecting Today
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Whether you're reconnecting with family, deepening your relationship, preparing for travel, or simply enjoying the journey of learning—Learn Creole with Jorge makes Haitian Creole accessible, fun, and meaningful.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <DownloadButton text="Download for Android" url="https://play.google.com/store/apps/details?id=com.dalvindigital.jorgejourney&pli=1" />
              <WatchDemoButton />
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12 text-white">
              <div>
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-sm opacity-90">Interactive Games</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-sm opacity-90">Vocabulary Words</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">20+</div>
                <div className="text-sm opacity-90">Songs & Videos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/images/app-icon.png" alt="Learn Creole with Jorge" width={40} height={40} className="rounded-lg" />
                <span className="text-xl font-bold">Learn Creole with Jorge</span>
              </div>
              <p className="text-gray-400">Connecting hearts through Haitian Creole. Making language learning meaningful, fun, and accessible for everyone.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Learn More</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/duolingo-vs-jorge" className="hover:text-white transition-colors">
                    Duolingo vs Learn Creole with Jorge
                  </Link>
                </li>
                <li>
                  <Link href="/pimsleur-vs-jorge" className="hover:text-white transition-colors">
                    Pimsleur vs Learn Creole with Jorge
                  </Link>
                </li>
                <li>
                  <Link href="/preply-vs-jorge" className="hover:text-white transition-colors">
                    Preply vs Learn Creole with Jorge
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Download</h3>
              <div className="space-y-3">
                <Button className="w-full bg-gray-700 hover:bg-gray-600">
                  <Apple className="mr-2 h-4 w-4" />
                  App Store
                </Button>
                <Button className="w-full bg-gray-700 hover:bg-gray-600">
                  <Smartphone className="mr-2 h-4 w-4" />
                  Google Play
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Learn Creole with Jorge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
