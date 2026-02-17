import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Apple, Smartphone } from "lucide-react"
import type { Metadata } from 'next'
import Link from "next/link"
import { MainContent } from "./components/MainContent"

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

      {/* Main Content with Tabs */}
      <MainContent />

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
