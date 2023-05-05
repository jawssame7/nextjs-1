import './globals.css'
import { Noto_Sans_JP } from 'next/font/google'
import Header from '@/app/Header'

// const inter = Inter({ subsets: ['latin'] })

const NotoSansJP = Noto_Sans_JP({
  weight: '500',
  subsets: ['latin'],
  preload: true,
})

export const metadata = {
  title: 'Next.js Awesome Memo App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ja'>
      <body className={NotoSansJP.className}>
        {/* 7. 共通ヘッダー */}
        <Header></Header>
        {children}
      </body>
    </html>
  )
}
