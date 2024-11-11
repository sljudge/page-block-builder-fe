'use client';

import { useEffect, useState } from 'react';

import TextContent from '@/components/TextContent';
import { getFallback } from '@/services/directus';

export default function Error({ error }: { error: Error }) {
  const [errorText, setErrorText] = useState<string>(
    'Site currently undergoing maintenance. Please try again later.'
  );
  useEffect(() => {
    async function getFallbackText() {
      const { text } = await getFallback();
      if (text) {
        setErrorText(text);
      }
    }
    // eslint-disable-next-line no-console
    console.error(error);
    getFallbackText();
  }, [error]);
  return (
    <div className="h-screen w-screen bg-secondary">
      <div className="container mx-auto py-xxxl">
        <div className="m-auto w-max border-lg border-negative/50 bg-primary p-xxl shadow-md">
          <TextContent>{errorText}</TextContent>
        </div>
      </div>
    </div>
  );
}
