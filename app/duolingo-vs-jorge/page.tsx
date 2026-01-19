import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, X, Download, Gamepad2, Music, Video, BookOpen, Users, Heart } from "lucide-react"
import type { Metadata } from 'next'
import Link from "next/link"
import { DownloadButton } from "../components/DownloadButton"

export const metadata: Metadata = {
  title: "Duolingo vs Learn Creole with Jorge: Which is Better for Learning Haitian Creole?",
  description: "Compare Duolingo and Learn Creole with Jorge for learning Haitian Creole. Discover why Learn Creole with Jorge offers specialized, culturally-rich Haitian Creole learning.",
  keywords: [
    "duolingo vs learn creole with jorge",
    "best haitian creole app",
    "learn haitian creole",
    "haitian creole learning comparison",
    "duolingo haitian creole",
    "learn creole with jorge vs duolingo"
  ],
}

export default function DuolingoVsJorgePage() {
  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/app-icon.png"
              alt="Learn Creole with Jorge App Icon"
              width={50}
              height={50}
              className="rounded-xl"
            />
            <span className="text-2xl font-bold text-gray-800">Learn Creole with Jorge</span>
          </Link>
          <Link href="/">
            <Button className="bg-purple-600 text-white hover:bg-purple-700">Back to Home</Button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Duolingo vs Learn Creole with Jorge
          </h1>
          <p className="text-xl text-gray-700 mb-2">
            Which is Better for Learning Haitian Creole?
          </p>
          <p className="text-lg text-gray-600">
            A comprehensive comparison to help you choose the right learning platform
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-6xl mx-auto mb-16">
          <Card className="bg-white shadow-xl">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-purple-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Feature</th>
                      <th className="px-6 py-4 text-center font-semibold">Learn Creole with Jorge</th>
                      <th className="px-6 py-4 text-center font-semibold">Duolingo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Haitian Creole Focus</td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Specialized</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <X className="h-6 w-6 text-red-500 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Limited</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Cultural Context</td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Rich & Authentic</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <X className="h-6 w-6 text-red-500 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Minimal</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Haitian Music & Songs</td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Included</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <X className="h-6 w-6 text-red-500 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Not Available</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Interactive Games</td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">10+ Games</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Available</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Educational Videos</td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">20+ Videos</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <X className="h-6 w-6 text-red-500 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Limited</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Pronunciation Guide</td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Detailed</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Basic</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Family-Focused Content</td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Designed for All Ages</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <X className="h-6 w-6 text-red-500 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">General Audience</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Free Content</td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Yes</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Yes (with ads)</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Multiple Languages</td>
                      <td className="px-6 py-4 text-center">
                        <X className="h-6 w-6 text-gray-400 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Haitian Creole Only</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">40+ Languages</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Learn Creole with Jorge Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Learn Creole with Jorge for Haitian Creole?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Heart className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Built for Haitian Creole</h3>
                </div>
                <p className="text-gray-600">
                  Learn Creole with Jorge is specifically designed for Haitian Creole learners. Unlike Duolingo, which offers Haitian Creole as one of many languages, we focus exclusively on providing the most comprehensive and culturally authentic learning experience.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-pink-100 rounded-full">
                    <Music className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Cultural Immersion</h3>
                </div>
                <p className="text-gray-600">
                  Learn through traditional Haitian songs, music, and cultural content. Our app includes authentic Haitian music and videos that help you understand not just the language, but the culture behind it.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Family-Focused Learning</h3>
                </div>
                <p className="text-gray-600">
                  Designed with families in mind. Whether you're learning to connect with family members, your partner, or preparing for a trip, our content is structured to help you communicate meaningfully with Haitian Creole speakers.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-yellow-100 rounded-full">
                    <Gamepad2 className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Engaging Game-Based Learning</h3>
                </div>
                <p className="text-gray-600">
                  Our interactive games make learning Haitian Creole fun and memorable. With 10+ games specifically designed for Haitian Creole vocabulary, pronunciation, and grammar, you'll stay motivated and engaged.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Video className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Rich Media Content</h3>
                </div>
                <p className="text-gray-600">
                  Access 20+ educational videos including number songs, alphabet lessons, and cultural content. Our video library is specifically curated for Haitian Creole learners.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-red-100 rounded-full">
                    <BookOpen className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Structured Curriculum</h3>
                </div>
                <p className="text-gray-600">
                  Follow a carefully designed learning path that builds your Haitian Creole skills progressively. Our curriculum is tailored specifically for Haitian Creole, ensuring you learn in the most effective way.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* When to Choose Each Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Which Should You Choose?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
              <CardContent className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose Learn Creole with Jorge If:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">You want to learn Haitian Creole specifically</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">You're learning to connect with Haitian family or friends</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">You want cultural context and authentic content</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">You enjoy learning through music and videos</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">You want a family-friendly learning experience</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gray-50 border-2 border-gray-200">
              <CardContent className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose Duolingo If:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">You want to learn multiple languages</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">You prefer a more general language learning approach</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">You want a well-established platform with many users</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">You're okay with limited Haitian Creole-specific content</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-16 mb-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Start Learning Haitian Creole?
              </h2>
              <p className="text-xl text-white mb-8">
                Join Learn Creole with Jorge and experience the most comprehensive Haitian Creole learning platform designed specifically for meaningful connections.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <DownloadButton 
                  url="https://play.google.com/store/apps/details?id=com.dalvindigital.jorgejourney&pli=1" 
                  text="Download for Android" 
                />
                <DownloadButton url="/ios" text="Download for iOS" />
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
                <p className="text-gray-400">The best way to learn Haitian Creole and connect with what matters most.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Learn More</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="/" className="hover:text-white">Home</Link>
                  </li>
                  <li>
                    <Link href="/pimsleur-vs-jorge" className="hover:text-white">Pimsleur Comparison</Link>
                  </li>
                  <li>
                    <Link href="/preply-vs-jorge" className="hover:text-white">Preply Comparison</Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Download</h3>
                <div className="space-y-3">
                  <Button className="w-full bg-gray-700 hover:bg-gray-600">
                    <Download className="mr-2 h-4 w-4" />
                    App Store
                  </Button>
                  <Button className="w-full bg-gray-700 hover:bg-gray-600">
                    <Download className="mr-2 h-4 w-4" />
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
      </section>
    </div>
  )
}
