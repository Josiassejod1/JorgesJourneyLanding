import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Play, Music, Trophy, BookOpen, Gamepad2, Video, Download, Apple, Smartphone } from "lucide-react"
import type { Metadata } from 'next'
import { DownloadButton } from "@/components/DownloadButton"

export const metadata: Metadata = {
  title: "Jorge's Journey: Learn Haitian Creole with Fun Games",
  description: "Master Haitian Creole with Jorge's Journey! Engaging games, interactive lessons, music, and videos for all ages. Download now and start your language adventure.",
  openGraph: {
    title: "Jorge's Journey: Learn Haitian Creole with Fun Games",
    description: "Master Haitian Creole with Jorge's Journey! Engaging games, interactive lessons, music, and videos for all ages. Download now and start your language adventure.",
    url: "https://learnwithjorge.net", // Replace with your actual domain
    siteName: "Jorge's Journey",
    images: [
      {
        url: "https://learnwithjorge.net/app-icon.png", // Replace with an actual URL to an Open Graph image (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: "Jorge's Journey App - Learn Haitian Creole",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jorge's Journey: Learn Haitian Creole with Fun Games",
    description: "Master Haitian Creole with Jorge's Journey! Engaging games, interactive lessons, music, and videos for all ages. Download now and start your language adventure.",
    // siteId: "YourTwitterSiteID", // Optional: Your Twitter site ID
    // creator: "@YourTwitterHandle", // Optional: Your Twitter handle
    // creatorId: "YourTwitterCreatorID", // Optional: Your Twitter creator ID
    images: ["https://learnwithjorge.net/images/app-icon.png"], // Replace with an actual URL to a Twitter card image (e.g., 800x418px)
  },
  // Optional: Add more specific SEO tags if needed
  // keywords: ["Haitian Creole", "Learn Creole", "Language Learning", "Educational Games", "Jorge's Journey"],
  //alternates: {
  //  canonical: "https://jorgesjourney.com", // Replace with your actual domain
  //},
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-yellow-300">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/app-icon.png"
              alt="Jorge's Journey App Icon"
              width={50}
              height={50}
              className="rounded-xl"
            />
            <span className="text-2xl font-bold text-white">Jorge's Journey</span>
          </div>
          <Button className="bg-white text-purple-600 hover:bg-gray-100">Download Now</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">LEARN HAITIAN CREOLE</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-8">Through Fun & Interactive Games!</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join Jorge on an exciting journey to master Haitian Creole through engaging games, interactive lessons,
            music, and videos designed for learners of all ages.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <DownloadButton />
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg">
              <Smartphone className="mr-2 h-5 w-5" />
              Download for Android
            </Button>
          </div>

          {/* App Screenshot */}
          <div className="relative max-w-md mx-auto">
            <Image
              src="/images/dashboard.png"
              alt="Jorge's Journey App Dashboard"
              width={400}
              height={600}
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Everything You Need to Learn Haitian Creole
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Interactive Games */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="relative mx-auto w-48 h-64">
                  <Image src="/images/counting-game.png" alt="Counting Game" fill className="object-cover rounded-lg" />
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Gamepad2 className="h-6 w-6 text-purple-600" />
                  <h3 className="text-xl font-bold">Interactive Games</h3>
                </div>
                <p className="text-gray-600">
                  Learn numbers, letters, and vocabulary through fun, engaging games that make learning feel like play.
                </p>
              </CardContent>
            </Card>

            {/* Alphabet Learning */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="relative mx-auto w-48 h-64">
                  <Image src="/images/alphabet.png" alt="Alphabet Learning" fill className="object-cover rounded-lg" />
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                  <h3 className="text-xl font-bold">Alphabet Mastery</h3>
                </div>
                <p className="text-gray-600">
                  Master the Haitian Creole alphabet with interactive pronunciation guides and example words.
                </p>
              </CardContent>
            </Card>

            {/* Achievement System */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="relative mx-auto w-48 h-64">
                  <Image src="/images/badges.png" alt="Achievement Badges" fill className="object-cover rounded-lg" />
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Trophy className="h-6 w-6 text-purple-600" />
                  <h3 className="text-xl font-bold">Earn Badges</h3>
                </div>
                <p className="text-gray-600">
                  Stay motivated with achievement badges, practice streaks, and progress tracking.
                </p>
              </CardContent>
            </Card>

            {/* Interactive Videos */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="relative mx-auto w-48 h-64">
                  <Image src="/images/videos.png" alt="Learning Videos" fill className="object-cover rounded-lg" />
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Video className="h-6 w-6 text-purple-600" />
                  <h3 className="text-xl font-bold">Educational Videos</h3>
                </div>
                <p className="text-gray-600">
                  Watch engaging educational videos including number songs and alphabet lessons.
                </p>
              </CardContent>
            </Card>

            {/* Music Library */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="relative mx-auto w-48 h-64">
                  <Image src="/images/music.png" alt="Music Library" fill className="object-cover rounded-lg" />
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Music className="h-6 w-6 text-purple-600" />
                  <h3 className="text-xl font-bold">Music Library</h3>
                </div>
                <p className="text-gray-600">
                  Learn through traditional Haitian songs and nursery rhymes with audio playback and translations.
                </p>
              </CardContent>
            </Card>

            {/* Comprehensive Lessons */}
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg p-8 h-64 flex items-center justify-center">
                  <BookOpen className="h-24 w-24 text-white" />
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Star className="h-6 w-6 text-purple-600" />
                  <h3 className="text-xl font-bold">Structured Lessons</h3>
                </div>
                <p className="text-gray-600">
                  Follow a carefully designed curriculum that builds your Haitian Creole skills step by step.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-purple-600 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-lg">Interactive Games</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Vocabulary Words</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-lg">Achievement Badges</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-lg">Songs & Videos</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-400 to-blue-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Start Your Haitian Creole Journey Today!</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join thousands of learners who are discovering the beauty of Haitian Creole through Jorge's interactive and
            fun learning experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg">
              <Download className="mr-2 h-5 w-5" />
              Download Free Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/images/app-icon.png" alt="Jorge's Journey" width={40} height={40} className="rounded-lg" />
                <span className="text-xl font-bold">Jorge's Journey</span>
              </div>
              <p className="text-gray-400">Making Haitian Creole learning fun and accessible for everyone.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Interactive Games</li>
                <li>Alphabet Learning</li>
                <li>Music Library</li>
                <li>Educational Videos</li>
                <li>Achievement System</li>
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
            <p>&copy; 2024 Jorge's Journey. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
