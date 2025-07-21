import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Five-Systems',
  description: 'Website project',
  generator: 'Abderrafie El Mrabet & Samir oulad ammar',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
