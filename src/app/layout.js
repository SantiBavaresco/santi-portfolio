import '../../styles/globals.css'
import { Inter } from 'next/font/google'
import Document, { Html, Head, Main, NextScript } from 'next/document';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Santiago Bavaresco Portfolio',
  description: 'This is my personal portfolio.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content="/avatar.png" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
