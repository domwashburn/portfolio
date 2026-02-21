import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.scss';
import ShaderBackground from '@/components/ShaderBackground';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' });

export const metadata: Metadata = {
  title: 'Dominick Washburn | UX Engineer & Developer',
  description: 'Portfolio of Dominick Washburn, UX Engineer and Front End Developer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased min-h-screen flex flex-col relative">
        <ShaderBackground />
        <Navigation />
        <main className="flex-grow z-10 relative w-full pt-32 pb-24">
          {children}
        </main>
      </body>
    </html>
  );
}
