import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, X, Download, Gamepad2, Music, Video, BookOpen, Users, Heart, DollarSign, Headphones, Eye } from "lucide-react"
import type { Metadata } from 'next'
import Link from "next/link"
import { DownloadButton } from "../components/DownloadButton"

export const metadata: Metadata = {
  title: "Pimsleur vs Learn Creole with Jorge: Which is Better for Learning Haitian Creole?",
  description: "Compare Pimsleur and Learn Creole with Jorge for learning Haitian Creole. Discover why Learn Creole with Jorge offers interactive, affordable, and culturally-rich Haitian Creole learning.",
  keywords: [
    "pimsleur vs learn creole with jorge",
    "best haitian creole app",
    "learn haitian creole",
    "haitian creole learning comparison",
    "pimsleur haitian creole",
    "learn creole with jorge vs pimsleur",
    "affordable haitian creole learning"
  ],
}

export default function PimsleurVsJorgePage() {
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
            Pimsleur vs Learn Creole with Jorge
          </h1>
          <p className="text-xl text-gray-700 mb-2">
            Which is Better for Learning Haitian Creole?
          </p>
          <p className="text-lg text-gray-600">
            Compare audio-focused learning with interactive, visual, and culturally-rich Haitian Creole education
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
                      <th className="px-6 py-4 text-center font-semibold">Pimsleur</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Learning Style</td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Interactive & Visual</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Audio-Only</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Interactive Games</td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">10+ Games</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <X className="h-6 w-6 text-red-500 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Not Available</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Visual Learning Aids</td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Images, Videos, Text</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <X className="h-6 w-6 text-red-500 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Audio Only</span>
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
                      <td className="px-6 py-4 font-medium text-gray-900">Educational Videos</td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">20+ Videos</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <X className="h-6 w-6 text-red-500 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Not Available</span>
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
                      <td className="px-6 py-4 font-medium text-gray-900">Pronunciation Practice</td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">With Visual Guides</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Audio Repetition</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Pricing</td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Free & Affordable</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <X className="h-6 w-6 text-red-500 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Premium ($20+/month)</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Family-Friendly</td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">All Ages</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <X className="h-6 w-6 text-red-500 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Adults Focused</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Haitian Creole Focus</td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Specialized</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Available</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Learn on the Go</td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Mobile App</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Mobile App</span>
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
            Why Choose Learn Creole with Jorge Over Pimsleur?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Eye className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Visual Learning</h3>
                </div>
                <p className="text-gray-600">
                  Unlike Pimsleur's audio-only approach, Learn Creole with Jorge combines visual elements, images, and text to help you understand Haitian Creole better. Visual learners benefit from seeing words, images, and cultural context.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-pink-100 rounded-full">
                    <Gamepad2 className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Interactive Games</h3>
                </div>
                <p className="text-gray-600">
                  Learn through fun, engaging games that make mastering Haitian Creole enjoyable. Pimsleur focuses on repetition, while we make learning feel like play with 10+ interactive games designed for Haitian Creole.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Music className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Haitian Music & Culture</h3>
                </div>
                <p className="text-gray-600">
                  Immerse yourself in authentic Haitian culture through traditional songs, music, and videos. Pimsleur teaches conversation, but we help you understand the culture behind the language.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Affordable & Accessible</h3>
                </div>
                <p className="text-gray-600">
                  Pimsleur costs $20+ per month, while Learn Creole with Jorge offers free content and affordable premium features. Get quality Haitian Creole education without breaking the bank.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-yellow-100 rounded-full">
                    <Users className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Family-Friendly</h3>
                </div>
                <p className="text-gray-600">
                  Designed for learners of all ages. While Pimsleur targets adults with 30-minute audio lessons, our app is perfect for families learning together, with content suitable for children and adults.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-red-100 rounded-full">
                    <Video className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Rich Media Content</h3>
                </div>
                <p className="text-gray-600">
                  Access 20+ educational videos including number songs, alphabet lessons, and cultural content. Pimsleur is audio-only, but we provide a multimedia learning experience.
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
                    <span className="text-gray-700">You prefer visual and interactive learning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">You want to learn through games and fun activities</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">You're learning with family or children</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">You want cultural context and Haitian music</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">You need an affordable learning solution</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">You want to see words, images, and videos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gray-50 border-2 border-gray-200">
              <CardContent className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose Pimsleur If:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">You prefer audio-only learning (hands-free)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">You want structured 30-minute conversation lessons</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">You're comfortable with premium pricing ($20+/month)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">You learn best through repetition and audio drills</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">You want to learn multiple languages</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Differences Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <Card className="bg-white p-8 shadow-xl">
            <CardContent>
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Key Differences
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center">
                    <Headphones className="h-6 w-6 mr-2" />
                    Pimsleur Approach
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Audio-focused learning</li>
                    <li>• 30-minute structured lessons</li>
                    <li>• Spaced repetition method</li>
                    <li>• Conversation-focused</li>
                    <li>• Premium subscription required</li>
                    <li>• No visual elements</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center">
                    <Gamepad2 className="h-6 w-6 mr-2" />
                    Learn Creole with Jorge Approach
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Interactive, visual learning</li>
                    <li>• Flexible lesson lengths</li>
                    <li>• Game-based engagement</li>
                    <li>• Cultural immersion</li>
                    <li>• Free and affordable options</li>
                    <li>• Rich multimedia content</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-16 mb-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Learn Haitian Creole Your Way?
              </h2>
              <p className="text-xl text-white mb-8">
                Experience interactive, visual, and culturally-rich Haitian Creole learning with Learn Creole with Jorge. Start for free and learn at your own pace.
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
                <p className="text-gray-400">The best way to learn Haitian Creole through interactive, visual, and culturally-rich content.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Learn More</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="/" className="hover:text-white">Home</Link>
                  </li>
                  <li>
                    <Link href="/duolingo-vs-jorge" className="hover:text-white">Duolingo Comparison</Link>
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
