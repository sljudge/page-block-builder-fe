import { revalidatePath } from 'next/cache';

import Console from '@/utils/Console';

export async function GET() {
  Console.info('Revalidating path "/" . Clearing route cache.');
  revalidatePath('/');
  return new Response('Revalidated path "/" . Route cache cleared.', { status: 200 });
}
