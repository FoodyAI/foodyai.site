import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Foody - AI-Powered Nutrition Tracking',
  description: 'Track your nutrition effortlessly with AI-powered food image analysis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
