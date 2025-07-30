import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KM Gurukulam - Where Little Dreams Grow Big',
  description: 'Premier pre-school and daycare providing nurturing environment for toddlers and young children. Experienced faculty, holistic development, and loving care.',
  keywords: 'preschool, daycare, toddlers, early childhood education, KM Gurukulam',
  icons: {
    icon: '../images/logo.ico', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}