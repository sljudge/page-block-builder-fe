import 'material-symbols';
import type { Metadata } from 'next';

import { getCompanyInformation } from '@/services/directus';
import './globals.css';

export const metadata: Metadata = {
  title: 'Clifford Solutions',
  description: 'Event planning based in White Parish'
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const companyInfo = await getCompanyInformation();
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={companyInfo.logo} sizes="any" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
