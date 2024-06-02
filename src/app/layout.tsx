import React from 'react'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { Metadata } from 'next'

import { AdminBar } from './_components/AdminBar'
import { Footer } from './_components/Footer'
import { Header } from './_components/Header'
import TopBar from './_components/Topbar'
import { Providers } from './_providers'
import { InitTheme } from './_providers/Theme/InitTheme'
import { mergeOpenGraph } from './_utilities/mergeOpenGraph'

import './_css/app.scss'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link rel="icon" href="/favicon/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon/favicon.ico" type="image/svg+xml" />
        <title>Berleen Safaris - Explore Africa's Wildlife</title>
        <meta
          name="description"
          content="Experience the adventure of a lifetime with Berleen Safaris. Explore Africa's stunning wildlife and natural beauty on our expertly guided tours."
        />
        <link rel="canonical" href="https://berleensafaris.com/" />
        <meta property="og:title" content="Berleen Safaris - Explore Africa's Wildlife" />
        <meta
          property="og:description"
          content="Experience the adventure of a lifetime with Berleen Safaris. Explore Africa's stunning wildlife and natural beauty on our expertly guided tours."
        />
        <meta property="og:url" content="https://berleensafaris.com/" />
        <meta
          property="og:image"
          content="https://berleensafaris-d9f76eb.payloadcms.app/beerleen.jpeg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@BerleenSafaris" />
        <meta name="twitter:title" content="Berleen Safaris - Explore Africa's Wildlife" />
        <meta
          name="twitter:description"
          content="Experience the adventure of a lifetime with Berleen Safaris. Explore Africa's stunning wildlife and natural beauty on our expertly guided tours."
        />
        <meta
          name="twitter:image"
          content="https://berleensafaris-d9f76eb.payloadcms.app/beerleen.jpeg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Berleen Safaris',
              description:
                "Experience the adventure of a lifetime with Berleen Safaris. Explore Africa's stunning wildlife and natural beauty on our expertly guided tours.",
              url: 'https://berleensafaris.com/',
              logo: 'https://berleensafaris-d9f76eb.payloadcms.app/beerleen.jpeg',
              sameAs: [
                'https://www.facebook.com/BerleenSafaris',
                'https://twitter.com/BerleenSafaris',
                'https://www.instagram.com/berleensafaris/',
                'https://www.linkedin.com/company/berleensafaris',
              ],
            }),
          }}
        />
      </head>
      <body>
        <Providers>
          <AdminBar />
          <TopBar />
          {/* @ts-expect-error */}
          <Header />
          {children}
          {/* @ts-expect-error */}
          <Footer />
        </Providers>
        <GoogleAnalytics gaId="G-7KXD0B7Z19" />
        <GoogleTagManager gtmId="G-7KXD0B7Z19" />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://berleensafaris.com'),
  twitter: {
    card: 'summary_large_image',
    creator: '@BerleenSafaris',
  },
  openGraph: mergeOpenGraph(),
}
