import { MainLayout } from "@/components/MainLayout"
import { Providers } from "@/components/Providers"
import { getMetaData } from "@/constants/metadataBase"
import { web } from "@/constants/web"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = getMetaData({
  title: "Çözümünüz Doruk Akademi'de",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  )
}
