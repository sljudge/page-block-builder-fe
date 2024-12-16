import { directus } from '@/services/directus';
import { readSingleton } from '@directus/sdk';
import { draftMode } from 'next/headers';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const version = searchParams.get('version');

  if (secret !== process.env.DIRECTUS_PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 });
  }

  const pageSection = await directus.request(readSingleton('hero'));

  if (!pageSection) {
    return new Response('Error fetching hero data', { status: 401 });
  }

  (await draftMode()).enable();

  return new Response(null, {
    status: 307,
    headers: {
      Location: `/draft/hero?version=${version}`
    }
  });
}
