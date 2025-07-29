import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Digital Agency - Creative Design & Development",
  description:
    "Transform your brand with innovative design, strategic thinking, and cutting-edge technology. We craft digital experiences that captivate, convert, and inspire.",
  keywords: "digital agency, web design, branding, UI/UX, marketing, development",
  authors: [{ name: "Digital Agency" }],
  openGraph: {
    title: "Digital Agency - Creative Design & Development",
    description: "Transform your brand with innovative design, strategic thinking, and cutting-edge technology.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-P1ZNKQJGHV" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P1ZNKQJGHV');
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>
      </body>
    </html>
  )
}
