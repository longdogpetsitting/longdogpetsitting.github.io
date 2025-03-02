import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Long Det Pet Sitting LLC | Dog Walker, Pet Sitter, Huntsville AL',
  description: '',
  metadataBase: new URL('https://longdogpetsitting.com'),
  keywords: [],
  robots: 'follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  openGraph: {
    title: 'Long Dog Pet Sitting LLC - Dog Walker, Pet Sitter, Huntsville AL',
    description: '',
    images: [{ url: '', width: '1440', height: '1440' }],
    url: 'https://longdogpetsitting.com',
    siteName: 'Log Dog Pet Setting LLC',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
