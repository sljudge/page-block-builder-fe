import { draftMode } from 'next/headers';

import config from '@/config';
import { directus } from '@/services/directus';
import { readItem } from '@directus/sdk';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const id = searchParams.get('id');
  const version = searchParams.get('version');

  if (secret !== config.DIRECTUS_PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 });
  }

  if (!id) {
    return new Response('Missing id', { status: 401 });
  }

  const pageSection = await directus.request(readItem('page_sections', id));

  if (!pageSection) {
    return new Response('Invalid id', { status: 401 });
  }

  (await draftMode()).enable();

  return new Response(null, {
    status: 307,
    headers: {
      Location: `/draft/pageSections/${pageSection.id}?version=${version}`
    }
  });
}
