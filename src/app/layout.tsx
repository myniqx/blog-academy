import { MainLayout } from "@/components/MainLayout";
import { Providers } from "@/components/Providers";
import { getMetaData } from "@/constants/metadataBase";
import { Inter } from "next/font/google";
import Script from "next/script";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = getMetaData({
  title: "Çözümünüz Doruk Akademi'de",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16663815429"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16663815429');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
