import type { Metadata } from 'next'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamJuree } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
})

const baiJamJuree = BaiJamJuree({
  variable: '--font-bai-jamjuree',
  subsets: ['latin'],
  weight:"700"
})

export const metadata: Metadata = {
  title: 'Spacetime',
  description: 'Time capsule developed with React, Next.js, Tailwindcss and Typescript.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamJuree.variable} font-sans antialiased text-gray-100 bg-gray-900`}
      >
        {children}
      </body>
    </html>
  )
}
