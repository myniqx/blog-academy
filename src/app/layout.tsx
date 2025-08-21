import { MainLayout } from "@/components/MainLayout";
import { Providers } from "@/components/Providers";
import { getMetaData } from "@/constants/metadataBase";
import { Inter } from "next/font/google";
import Script from "next/script";
import React from "react";
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
        {/* <!-- Google Tag Manager --> */}
        <Script
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-THQ9WVMT');
            `,
          }}
        />
        {/* <!-- End Google Tag Manager --> */}
      </head>
      <body className={inter.className}>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-THQ9WVMT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </body>
    </html>
  );
}
