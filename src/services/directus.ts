import { createDirectus, readItems, readSingleton, rest } from '@directus/sdk';
import { z } from 'zod';

import Console from '@/utils/Console';
import toPascalCase from '@/utils/toPascalCase';

// Initialize the SDK.
const directus = createDirectus(process.env.DIRECTUS_URL!).with(rest());

/** Logo ******************************************************/
const LogoResponseSchema = z.object({ id: z.number(), src: z.string(), alt: z.string() });

export async function getLogo(): Promise<z.infer<typeof LogoResponseSchema>> {
  try {
    const response = await directus.request(readSingleton('logo'));
    return LogoResponseSchema.parse({
      ...response,
      src: `${process.env.ASSETS_URL}/${response.src}`
    });
  } catch (error) {
    Console.error('Error fetching logo: \n' + error);
    throw error;
  }
}

/** Page Sections ******************************************************/
const PageSectionResponseSchema = z.array(
  z.object({ id: z.number(), sort: z.number(), label: z.string() })
);
const PageSectionsSchema = z.array(
  z.object({ id: z.number(), href: z.string(), label: z.string() })
);

export async function getPageSections(): Promise<z.infer<typeof PageSectionsSchema>> {
  try {
    const response = PageSectionResponseSchema.parse(
      await directus.request(readItems('page_sections'))
    );
    return PageSectionsSchema.parse(
      response.map(({ id, label }) => ({ id, label, href: toPascalCase(label) }))
    );
  } catch (error) {
    Console.error('Error fetching page sections: \n' + error);
    throw error;
  }
}
