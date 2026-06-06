import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Barlow, Barlow_Condensed } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-condensed',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Velocity Garage — Experience Automotive Excellence',
    template: '%s | Velocity Garage',
  },
  description:
    'A curated sanctuary of the world\'s most extraordinary machines. Ultra-luxury automotive concierge specializing in Ferrari, Lamborghini, Bugatti, Porsche, and the rarest hypercars.',
  keywords: [
    'luxury cars',
    'Ferrari',
    'Lamborghini',
    'Bugatti',
    'Porsche',
    'McLaren',
    'Pagani',
    'Koenigsegg',
    'hypercar',
    'supercar',
    'automotive concierge',
    'luxury vehicle',
    'premium car dealer',
  ],
  authors: [{ name: 'Velocity Garage' }],
  creator: 'Velocity Garage',
  metadataBase: new URL('https://velocitygarage.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://velocitygarage.com',
    siteName: 'Velocity Garage',
    title: 'Velocity Garage — Experience Automotive Excellence',
    description:
      'The world\'s most exclusive automotive concierge. Curating extraordinary machines for extraordinary people since 2009.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Velocity Garage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velocity Garage — Experience Automotive Excellence',
    description: 'The world\'s most exclusive automotive concierge.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#050505',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${barlow.variable} ${barlowCondensed.variable}`}
    >
      <body className="bg-void text-text-primary font-sans font-light overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
