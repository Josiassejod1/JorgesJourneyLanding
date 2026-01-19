import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, X, Download, Gamepad2, Music, Video, BookOpen, Users, Heart, DollarSign, Clock, Calendar, Wifi, WifiOff } from "lucide-react"
import type { Metadata } from 'next'
import Link from "next/link"
import { DownloadButton } from "../components/DownloadButton"

export const metadata: Metadata = {
  title: "Preply vs Learn Creole with Jorge: Which is Better for Learning Haitian Creole?",
  description: "Compare Preply and Learn Creole with Jorge for learning Haitian Creole. Discover why Learn Creole with Jorge offers affordable, self-paced, and culturally-rich Haitian Creole learning.",
  keywords: [
    "preply vs learn creole with jorge",
    "best haitian creole app",
    "learn haitian creole",
    "haitian creole learning comparison",
    "preply haitian creole tutor",
    "learn creole with jorge vs preply",
    "affordable haitian creole learning",
    "haitian creole tutor vs app"
  ],
}

export default function PreplyVsJorgePage() {
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
            Preply vs Learn Creole with Jorge
          </h1>
          <p className="text-xl text-gray-700 mb-2">
            Which is Better for Learning Haitian Creole?
          </p>
          <p className="text-lg text-gray-600">
            Compare tutor-based learning with self-paced, interactive app learning
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
                      <th className="px-6 py-4 text-center font-semibold">Preply</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Learning Format</td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Self-Paced App</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Live Tutor Sessions</span>
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
                        <span className="text-sm text-gray-600 mt-1 block">$10-$40+/hour</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Learn Anytime</td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">24/7 Available</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <X className="h-6 w-6 text-red-500 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Scheduled Sessions</span>
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
                      <td className="px-6 py-4 font-medium text-gray-900">Haitian Music & Songs</td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Included</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <X className="h-6 w-6 text-red-500 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Depends on Tutor</span>
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
                        <span className="text-sm text-gray-600 mt-1 block">Not Included</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Cultural Context</td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Rich & Authentic</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Depends on Tutor</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Structured Curriculum</td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Yes</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Flexible</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Offline Learning</td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Available</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <X className="h-6 w-6 text-red-500 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Requires Internet</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Live Conversation Practice</td>
                      <td className="px-6 py-4 text-center">
                        <X className="h-6 w-6 text-gray-400 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Not Available</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Yes, with Tutor</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Family-Friendly</td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">All Ages</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Depends on Tutor</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">No Scheduling Required</td>
                      <td className="px-6 py-4 text-center">
                        <Check className="h-6 w-6 text-green-600 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Yes</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <X className="h-6 w-6 text-red-500 mx-auto" />
                        <span className="text-sm text-gray-600 mt-1 block">Must Schedule</span>
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
            Why Choose Learn Creole with Jorge Over Preply?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Affordable Learning</h3>
                </div>
                <p className="text-gray-600">
                  Preply tutors charge $10-$40+ per hour, which can add up quickly. Learn Creole with Jorge offers free content and affordable premium features, making quality Haitian Creole education accessible to everyone.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Learn on Your Schedule</h3>
                </div>
                <p className="text-gray-600">
                  No need to coordinate schedules with tutors or worry about time zones. Learn Creole with Jorge is available 24/7, so you can practice whenever you have a few minutes—morning, noon, or night.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-pink-100 rounded-full">
                    <Gamepad2 className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Interactive Games & Activities</h3>
                </div>
                <p className="text-gray-600">
                  Learn through fun, engaging games that make mastering Haitian Creole enjoyable. Preply focuses on conversation, but we offer 10+ interactive games, videos, and music to keep learning fun and varied.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <WifiOff className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Learn Offline</h3>
                </div>
                <p className="text-gray-600">
                  Download content and learn without an internet connection. Perfect for commutes, travel, or areas with limited connectivity. Preply requires a stable internet connection for every session.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-yellow-100 rounded-full">
                    <Music className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Haitian Music & Culture</h3>
                </div>
                <p className="text-gray-600">
                  Immerse yourself in authentic Haitian culture through traditional songs, music, and videos. While Preply tutors may share cultural insights, our app provides structured cultural content built into every lesson.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-red-100 rounded-full">
                    <BookOpen className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Structured Learning Path</h3>
                </div>
                <p className="text-gray-600">
                  Follow a carefully designed curriculum that builds your Haitian Creole skills progressively. While Preply offers flexibility, our structured approach ensures you don't miss important fundamentals.
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
                    <span className="text-gray-700">You want affordable, self-paced learning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">You prefer learning through games and interactive activities</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">You want to learn anytime, anywhere</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">You need offline learning capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">You want structured curriculum with cultural content</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">You're learning with family or children</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">You want to supplement tutor sessions with practice</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gray-50 border-2 border-gray-200">
              <CardContent className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose Preply If:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">You want live conversation practice with a native speaker</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">You need personalized feedback and correction</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">You prefer flexible, customized lesson plans</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">You're comfortable with $10-$40+ per hour pricing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">You can commit to scheduled sessions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">You want to focus on specific topics or goals</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Best of Both Worlds Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <Card className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 border-2 border-purple-200">
            <CardContent>
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
                Best of Both Worlds
              </h2>
              <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-6">
                Many learners find success by combining both approaches! Use Learn Creole with Jorge for daily practice, games, and cultural learning, then supplement with Preply sessions for live conversation practice when you're ready.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-purple-700 mb-3 flex items-center">
                    <Gamepad2 className="h-5 w-5 mr-2" />
                    Daily Practice with Jorge
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Practice vocabulary and grammar daily</li>
                    <li>• Learn through games and videos</li>
                    <li>• Build cultural understanding</li>
                    <li>• Affordable and flexible</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Weekly Preply Sessions
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Practice conversation skills</li>
                    <li>• Get personalized feedback</li>
                    <li>• Focus on specific goals</li>
                    <li>• Build confidence speaking</li>
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
                Start Learning Haitian Creole Today
              </h2>
              <p className="text-xl text-white mb-8">
                Experience affordable, self-paced, and culturally-rich Haitian Creole learning with Learn Creole with Jorge. Perfect for daily practice, whether you're learning solo or supplementing tutor sessions.
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
                    <Link href="/pimsleur-vs-jorge" className="hover:text-white">Pimsleur Comparison</Link>
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
