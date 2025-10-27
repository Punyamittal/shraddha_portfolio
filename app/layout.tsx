import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shraddha (Chawal) - Creative Designer & Marketer',
  description: 'Portfolio of Shraddha - Designer, Creative Director & Marketing Strategist. Specializing in campaign design, social media, and brand identity.',
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

