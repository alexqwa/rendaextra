import type { Metadata } from "next"
import { Inter, Poppins, Roboto } from "next/font/google"
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css"

const inter = Inter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
})

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
})

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Renda Extra",
  description: "Conquiste seu patrimonio hoje mesmo",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable} ${poppins.variable}`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
