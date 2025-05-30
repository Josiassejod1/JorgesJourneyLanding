import { Button } from "@/components/ui/button"
import { XCircle, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function PaymentCancelledPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">J</span>
              </div>
              <span className="text-2xl font-bold text-gray-800">Jorge's Journey</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Cancelled Content */}
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="bg-white shadow-xl rounded-lg p-8 md:p-12">
            <div className="flex justify-center mb-6">
              <XCircle className="h-24 w-24 text-red-500" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Payment Cancelled
            </h1>
            <div className="flex items-center justify-center text-orange-500 mb-6">
              <AlertTriangle className="h-8 w-8 mr-2" />
              <p className="text-xl font-semibold">Your transaction was not completed.</p>
            </div>
            <p className="text-gray-700 mb-6 text-lg">
              It seems your payment was cancelled or encountered an issue. Don't worry, you haven't been charged.
            </p>
            <p className="text-gray-600 mb-8">
              If you'd like to try again, please return to the checkout page. If you continue to experience issues, please contact our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://jorgejourney-67888.firebaseapp.com"> {/* Assuming you have a /pricing or checkout page */}
                <Button size="lg" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white">
                  Try Again
                </Button>
              </Link>
              <Link href="/">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer (Optional - can be a shared component later) */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Jorge's Journey. All rights reserved.</p>
        <p>
          <Link href="/privacy" className="hover:text-purple-600">Privacy Policy</Link>
        </p>
      </footer>
    </div>
  )
}
