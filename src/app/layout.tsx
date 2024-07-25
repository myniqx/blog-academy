import { MainLayout } from "@/components/MainLayout"
import { Providers } from "@/components/Providers"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { web } from "@/constants/web"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: web.name,
  description: "Akademik kariyer asistanı",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <MainLayout>
            {children}
          </MainLayout>
        </Providers>
      </body>
    </html>
  )
}
