import { MainLayout } from "@/components/MainLayout"
import { Providers } from "@/components/Providers"
import { web } from "@/constants/web"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: web.name,
  description: "Akademik kariyer asistanı",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: web.webaddr,
    siteName: web.name,
    title: web.name,
    description: "Akademik kariyer asistanı",
    images: [
      {
        url: `${web.webaddr}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Og Image Alt',
      },
    ],
  },
  /*
  twitter: {
    handle: '@yourtwitterhandle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'keywords',
      content: 'akademik kariyer, asistan, eğitim, kariyer',
    },
    {
      name: 'author',
      content: 'Doruk Akademi',
    },
  ],*/
  alternates: {
    canonical: web.webaddr,
  },
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
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  )
}
