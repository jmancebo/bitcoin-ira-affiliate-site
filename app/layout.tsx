import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Bitcoin IRA - Secure Your Retirement with Cryptocurrency",
  description:
    "Diversify your portfolio and protect against inflation with tax-advantaged Bitcoin IRA investing. Compare top providers and start building your crypto retirement today.",
  keywords:
    "Bitcoin IRA, cryptocurrency retirement, crypto IRA, Bitcoin 401k, retirement planning, cryptocurrency investing",
  authors: [{ name: "Bitcoin IRA Guide" }],
  creator: "Bitcoin IRA Guide",
  publisher: "Bitcoin IRA Guide",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bitcoin-ira-guide.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bitcoin IRA - Secure Your Retirement with Cryptocurrency",
    description: "Diversify your portfolio and protect against inflation with tax-advantaged Bitcoin IRA investing.",
    url: "https://bitcoin-ira-guide.vercel.app",
    siteName: "Bitcoin IRA Guide",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Bitcoin IRA - Secure Your Retirement",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin IRA - Secure Your Retirement with Cryptocurrency",
    description: "Diversify your portfolio and protect against inflation with tax-advantaged Bitcoin IRA investing.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${inter.className}`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
