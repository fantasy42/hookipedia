import type {Metadata, Viewport} from 'next';

import {Inter, JetBrains_Mono} from 'next/font/google';
import {RootProvider} from 'fumadocs-ui/provider/next';

import {Footer} from '@/components/Footer';

import {cn} from '@/utils/cn';
import {baseUrl} from '@/lib/metadata';

import '@/styles/global.css';

const sans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});

const mono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

export default function Layout({children}: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={cn(sans.variable, mono.variable)}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          {children}

          <Footer />
        </RootProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: '%s | Hookipedia',
    default: 'Hookipedia',
  },
  twitter: {
    site: '@hookipedia',
    card: 'summary_large_image',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: {
      template: '%s | Hookipedia',
      default: 'Hookipedia',
    },
    ttl: 604_800,
  },
  alternates: {
    canonical: './',
  },
  icons: {
    icon: [
      {
        rel: 'icon',
        sizes: '32x32',
        url: '/static/favicon.ico',
      },
      {
        rel: 'icon',
        type: 'image/svg+xml',
        url: '/static/favicon.svg',
      },
    ],
    apple: [
      {
        rel: 'apple-touch-icon',
        url: '/static/apple-touch-icon.png',
      },
    ],
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
};
