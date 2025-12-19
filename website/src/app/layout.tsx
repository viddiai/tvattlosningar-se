import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'KEN Sverige - Professionella Tvättlösningar',
    template: '%s | KEN Sverige',
  },
  description:
    'Ledande leverantör av professionella tvättlösningar för sjukvård, hotell, industri och offentlig sektor. Minska kostnader med upp till 40% med våra energieffektiva system.',
  keywords: [
    'tvättlösningar',
    'industritvättar',
    'sjukhustvätt',
    'hoteltvätt',
    'energieffektiv tvätt',
    'professionell tvätt',
    'tvättsystem',
  ],
  authors: [{ name: 'KEN Sverige' }],
  openGraph: {
    type: 'website',
    locale: 'sv_SE',
    url: 'https://www.kensverige.se',
    title: 'KEN Sverige - Professionella Tvättlösningar',
    description: 'Ledande leverantör av professionella tvättlösningar för Sveriges företag',
    siteName: 'KEN Sverige',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KEN Sverige - Professionella Tvättlösningar',
    description: 'Ledande leverantör av professionella tvättlösningar för Sveriges företag',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
