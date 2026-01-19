import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Learn Creole with Jorge',
  description: 'Learn Haitian Creole with Learn Creole with Jorge',
  icons: {
    icon: [
      { url: '/images/app-icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/app-icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/images/app-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/images/app-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-itunes-app" content="app-id=6745862015" />
      </head>
      <body className={inter.className}>
        {children}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "s7h1ef6sy2");
            `,
          }}
        />
      </body>
    </html>
  )
}
