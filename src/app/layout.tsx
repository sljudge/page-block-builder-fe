import 'material-symbols';
import type { Metadata } from 'next';

import { getCompanyInformation } from '@/services/directus';
import './globals.css';

export async function generateMetadata(): Promise<Metadata> {
  const companyInfo = await getCompanyInformation();

  return {
    title: companyInfo.name,
    description: companyInfo.description
  };
}

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
