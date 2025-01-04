import { Inter, Roboto_Mono } from 'next/font/google'
import "./globals.css"
import Navbar from "./components/Navbar"

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        <div className="relative min-h-screen">
          <Navbar />
          <main className="relative z-10">
            {children}
          </main>
          
          {/* Gradient effects */}
          <div className="fixed top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-purple-500/20 via-transparent to-transparent opacity-30 pointer-events-none" />
          <div className="fixed bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-blue-500/20 via-transparent to-transparent opacity-30 pointer-events-none" />
        </div>
      </body>
    </html>
  )
}
