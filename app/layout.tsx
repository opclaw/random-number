import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://random-number.vercel.app'),
  title: 'Random Number Generator — Secure & Fast | Free Tool',
  description: 'Generate random numbers with custom ranges. Free online random number generator for games, drawings, and more.',
  keywords: ['random number generator', 'random generator', 'number picker', 'randomizer', 'rng'],
  authors: [{ name: 'SmartOK Tools' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://random-number.vercel.app',
    siteName: 'Random Number Generator',
    title: 'Random Number Generator — Secure & Fast',
    description: 'Generate random numbers with custom ranges.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Random Number Generator',
    description: 'Generate random numbers with custom ranges.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Random Number Generator',
              applicationCategory: 'UtilitiesApplication',
              operatingSystem: 'Any',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
              featureList: 'Custom range, Multiple results, Copy results',
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-slate-50">{children}</body>
    </html>
  )
}
