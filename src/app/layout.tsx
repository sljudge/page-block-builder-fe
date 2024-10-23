import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Clifford Solutions',
  description: 'Event planning based in White Parish'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
