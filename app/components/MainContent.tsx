"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Heart, Users, Plane, Sparkles, BookOpen, ExternalLink, MessageCircle } from "lucide-react"
import { DownloadButton } from "./DownloadButton"
import { WatchDemoButton } from "./WatchDemoButton"
import { WordOfTheDay } from "./WordOfTheDay"
import { HeroCarouselImage, HeroCarouselControlsWrapper } from "./HeroCarouselWithControls"

export function MainContent() {
  return (
    <Tabs defaultValue="home" className="w-full">
      <div className="container mx-auto px-4 py-6">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-white/95 backdrop-blur-sm shadow-lg">
          <TabsTrigger value="home" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">Home</TabsTrigger>
          <TabsTrigger value="books" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">Books</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="home" className="mt-0">
        <HomeContent />
      </TabsContent>

      <TabsContent value="books" className="mt-0">
        <BooksContent />
      </TabsContent>
    </Tabs>
  )
}

function HomeContent() {
  return (
    <>
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
    </>
  )
}

function BooksContent() {
  const books = [
    {
      title: "A Mile In My Shoes",
      subtitle: "Jorge's Journey from Haiti to America",
      authors: ["Dalvin Josias Sejour", "Ashley Josias Sejour"],
      illustrator: "Tincho Schmidt",
      translator: "Christa Dor",
      description: "This short story is a beautifully illustrated children's book that tells the story of Jorge, a young boy from Haiti, as he embarks on an adventurous journey to a new home in America. This book introduces young readers to Haitian culture, geography, and the immigrant experience through engaging storytelling and vibrant illustrations. With bilingual translations in Haitian Creole, this book is perfect for children learning new languages and for classrooms celebrating multiculturalism. Join Jorge as he navigates the bittersweet feelings of leaving home, discovers the joys and challenges of a new country, and learns to cherish his heritage.",
      isbn: "9781734067873",
      pages: 47,
      language: "English",
      publicationDate: "August 6, 2024",
      category: "Children's",
      dimensions: "Square (8.5 x 8.5 in / 216 x 216 mm)",
      binding: "Paperback Perfect Bound",
      interiorColor: "Color",
      keywords: ["Haiti", "Creole", "Immigration", "Children", "Caribbean", "Bilingual", "Education"],
      purchaseUrl: "https://www.lulu.com/shop/ashley-josias-sejour-and-dalvin-josias-sejour-and-tincho-schmidt/a-mile-in-my-shoes/paperback/product-dym56qv.html"
    }
  ]

  return (
    <section className="bg-white py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Books
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {books.map((book, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-purple-400 via-pink-300 to-yellow-300 p-8 flex items-center justify-center">
                  <div className="relative w-full aspect-[3/4] max-w-[280px] mx-auto">
                    <Image
                      src="/images/books/1.png"
                      alt={`${book.title} - Book Cover`}
                      fill
                      className="object-contain rounded-lg shadow-xl"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <CardHeader>
                    <CardTitle className="text-3xl mb-2">{book.title}</CardTitle>
                    <CardDescription className="text-xl text-purple-600 font-semibold">
                      {book.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-gray-700 leading-relaxed">{book.description}</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 pt-4 border-t">
                      <div>
                        <p className="text-sm font-semibold text-gray-600 mb-1">Authors:</p>
                        <p className="text-gray-800">{book.authors.join(", ")}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-600 mb-1">Illustrator:</p>
                        <p className="text-gray-800">{book.illustrator}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-600 mb-1">Translator:</p>
                        <p className="text-gray-800">{book.translator}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-600 mb-1">ISBN:</p>
                        <p className="text-gray-800">{book.isbn}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-600 mb-1">Pages:</p>
                        <p className="text-gray-800">{book.pages}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-600 mb-1">Language:</p>
                        <p className="text-gray-800">{book.language}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-600 mb-1">Publication Date:</p>
                        <p className="text-gray-800">{book.publicationDate}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-600 mb-1">Category:</p>
                        <p className="text-gray-800">{book.category}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <p className="text-sm font-semibold text-gray-600 mb-2">Keywords:</p>
                      <div className="flex flex-wrap gap-2">
                        {book.keywords.map((keyword, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      <a
                        href={book.purchaseUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        Purchase on Lulu
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}

          {/* Book Pages Gallery */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
              Preview Pages from the Book
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[14, 20].map((pageNum) => (
                <div
                  key={pageNum}
                  className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group bg-gray-100"
                >
                  <Image
                    src={`/images/books/${pageNum}.png`}
                    alt={`Book page ${pageNum} from A Mile In My Shoes`}
                    fill
                    className="object-contain group-hover:brightness-110 transition-all duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
