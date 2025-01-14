import 'material-symbols';
import { Metadata } from 'next';
import { Agent, setGlobalDispatcher } from 'undici';

import { getCompanyInformation } from '@/services/directus';
import './globals.css';

setGlobalDispatcher(new Agent({ connect: { timeout: 60_000 } }));

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
      <body className="bg-primary antialiased">
        {children}
        <footer className="-mt-xxl bg-invert py-xs text-invert">
          <div className="container mx-auto flex justify-end">
            <div className="flex items-center gap-x-xs">
              <span
                data-testid="icon"
                className="material-icons material-symbols-outlined text-lg max-w-full"
              >
                policy
              </span>
              <a
                href={companyInfo.privacy_notice}
                target="_blank"
                className="text-lg text-right underline"
              >
                Privacy notice
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
