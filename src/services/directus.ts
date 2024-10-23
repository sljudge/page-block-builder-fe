import Console from '@/utils/Console';
import toPascalCase from '@/utils/toPascalCase';
import { createDirectus, readItems, rest } from '@directus/sdk';
import { z } from 'zod';

// Initialize the SDK.
const directus = createDirectus(process.env.DIRECTUS_URL!).with(rest());

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
