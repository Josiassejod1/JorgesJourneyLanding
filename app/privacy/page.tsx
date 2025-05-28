import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, Users, FileText, Mail } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicy() {
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
            <Link href="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 text-white mr-3" />
            <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
          </div>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
          <div className="mt-6 text-sm text-purple-200">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Introduction */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-6 w-6 mr-2 text-purple-600" />
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                Welcome to Jorge's Journey ("we," "our," or "us"). This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our mobile application Jorge's Journey - Learn
                Haitian Creole (the "App"). Please read this privacy policy carefully. If you do not agree with the
                terms of this privacy policy, please do not access the App.
              </p>
              <p>
                We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will
                alert you about any changes by updating the "Last updated" date of this Privacy Policy.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="h-6 w-6 mr-2 text-purple-600" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <h3>Personal Information</h3>
              <p>We may collect the following types of information:</p>
              <ul>
                <li>
                  <strong>Account Information:</strong> Username, email address (for account creation and support)
                </li>
                <li>
                  <strong>Learning Progress:</strong> Lesson completion, game scores, achievement badges, and learning
                  streaks
                </li>
                <li>
                  <strong>Device Information:</strong> Device type, operating system, app version, and unique device
                  identifiers
                </li>
                <li>
                  <strong>Usage Data:</strong> Time spent in app, features used, and interaction patterns
                </li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <ul>
                <li>App usage analytics and performance data</li>
                <li>Crash reports and error logs</li>
                <li>General location information (country/region level only)</li>
              </ul>

              <h3>Information We Do NOT Collect</h3>
              <ul>
                <li>Real names or personal identification documents</li>
                <li>Precise location data</li>
                <li>Audio or video recordings</li>
                <li>Contact lists or phone numbers</li>
                <li>Payment information (if app is free)</li>
              </ul>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="h-6 w-6 mr-2 text-purple-600" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>We use the information we collect to:</p>
              <ul>
                <li>
                  <strong>Provide Educational Services:</strong> Track learning progress, customize lessons, and provide
                  personalized learning experiences
                </li>
                <li>
                  <strong>Improve the App:</strong> Analyze usage patterns to enhance features and fix bugs
                </li>
                <li>
                  <strong>Communication:</strong> Send important updates about the app, respond to support requests
                </li>
                <li>
                  <strong>Safety and Security:</strong> Protect against fraud, abuse, and technical issues
                </li>
                <li>
                  <strong>Legal Compliance:</strong> Comply with applicable laws and regulations
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card className="mb-8 border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center text-orange-800">
                <Users className="h-6 w-6 mr-2" />
                Children's Privacy (COPPA Compliance)
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <div className="bg-orange-100 p-4 rounded-lg mb-4">
                <p className="font-semibold text-orange-800 mb-2">Important Notice for Parents and Guardians</p>
                <p className="text-orange-700">
                  Jorge's Journey is designed to be safe for children. We are committed to protecting children's privacy
                  and complying with the Children's Online Privacy Protection Act (COPPA).
                </p>
              </div>

              <h3>For Children Under 13:</h3>
              <ul>
                <li>
                  We do not knowingly collect personal information from children under 13 without parental consent
                </li>
                <li>The app can be used without creating an account</li>
                <li>Progress data is stored locally on the device only</li>
                <li>No chat features or social interactions with other users</li>
                <li>No advertising or third-party tracking</li>
              </ul>

              <h3>Parental Rights:</h3>
              <ul>
                <li>Review any personal information collected from your child</li>
                <li>Request deletion of your child's information</li>
                <li>Refuse to allow further collection of your child's information</li>
              </ul>

              <p>
                If you believe we have collected information from a child under 13, please contact us immediately at{" "}
                <a href="mailto:privacy@jorgesjourney.com" className="text-purple-600">
                  privacy@jorgesjourney.com
                </a>
                .
              </p>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-6 w-6 mr-2 text-purple-600" />
                Information Sharing and Disclosure
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share information only
                in the following circumstances:
              </p>

              <h3>Service Providers</h3>
              <ul>
                <li>Cloud storage providers (for app functionality)</li>
                <li>Analytics services (anonymized data only)</li>
                <li>App store platforms (Apple App Store, Google Play)</li>
              </ul>

              <h3>Legal Requirements</h3>
              <ul>
                <li>When required by law or legal process</li>
                <li>To protect our rights, property, or safety</li>
                <li>To protect the rights, property, or safety of our users</li>
              </ul>

              <h3>Business Transfers</h3>
              <p>
                In the event of a merger, acquisition, or sale of assets, user information may be transferred as part of
                that transaction.
              </p>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-6 w-6 mr-2 text-purple-600" />
                Data Security
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                We implement appropriate technical and organizational security measures to protect your information:
              </p>
              <ul>
                <li>
                  <strong>Encryption:</strong> Data is encrypted in transit and at rest
                </li>
                <li>
                  <strong>Access Controls:</strong> Limited access to personal information on a need-to-know basis
                </li>
                <li>
                  <strong>Regular Updates:</strong> Security measures are regularly reviewed and updated
                </li>
                <li>
                  <strong>Local Storage:</strong> Most learning progress is stored locally on your device
                </li>
              </ul>
              <p>
                However, no method of transmission over the internet or electronic storage is 100% secure. While we
                strive to protect your information, we cannot guarantee absolute security.
              </p>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-6 w-6 mr-2 text-purple-600" />
                Your Privacy Rights
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>Depending on your location, you may have the following rights:</p>
              <ul>
                <li>
                  <strong>Access:</strong> Request a copy of the personal information we have about you
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal information
                </li>
                <li>
                  <strong>Portability:</strong> Request transfer of your data to another service
                </li>
                <li>
                  <strong>Objection:</strong> Object to certain processing of your information
                </li>
              </ul>
              <p>
                To exercise these rights, please contact us at{" "}
                <a href="mailto:privacy@jorgesjourney.com" className="text-purple-600">
                  privacy@jorgesjourney.com
                </a>
                .
              </p>
            </CardContent>
          </Card>

          {/* International Users */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>International Users</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                If you are accessing the App from outside the United States, please be aware that your information may
                be transferred to, stored, and processed in the United States where our servers are located. By using
                the App, you consent to this transfer.
              </p>
              <p>
                For users in the European Union, we comply with the General Data Protection Regulation (GDPR) and
                provide additional protections as required by law.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="mb-8 bg-purple-50 border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center text-purple-800">
                <Mail className="h-6 w-6 mr-2" />
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p>
                    <a href="mailto:dalvin@dalvindigital.com" className="text-purple-600 hover:underline">
                      dalvin@dalvindigital.com
                    </a>
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Support</h4>
                  <p>
                    <a href="mailto:dalvin@dalvindigital.com" className="text-purple-600 hover:underline">
                      dalvin@dalvindigital.com
                    </a>
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Mailing Address</h4>
                  <p className="text-gray-600">
                    [Your Company Name]
                    <br />
                    [Street Address]
                    <br />
                    [City, State ZIP Code]
                    <br />
                    [Country]
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Response Time</h4>
                  <p className="text-gray-600">We will respond to privacy inquiries within 30 days.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Back to Top */}
          <div className="text-center">
            <Link href="/">
              <Button className="bg-purple-600 hover:bg-purple-700">Return to Jorge's Journey</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
