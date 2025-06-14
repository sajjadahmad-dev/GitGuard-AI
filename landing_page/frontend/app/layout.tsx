import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gitguard AI - Stop Secret Leaks Before They Cost Millions",
  description:
    "Advanced LLM-powered IDE integration that prevents credential leaks with 94% accuracy. Protect your code secrets and prevent costly security breaches.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider defaultTheme="dark" storageKey="gitguard-theme">
          {children}
        </ThemeProvider>

        {/* Feedbask Feedback Widget */}
        <Script
          id="feedbask-widget-script"
          src="https://cdn.feedbask.com/widget.js"
          data-client-key="ea11e9cc-47ac-4921-b0ff-2668c51aab1c"
          defer
        />
      </body>
    </html>
  )
}
