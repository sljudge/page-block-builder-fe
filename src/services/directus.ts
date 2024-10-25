import { createDirectus, readItems, readSingleton, rest } from '@directus/sdk';
import { z } from 'zod';

import Console from '@/utils/Console';
import toPascalCase from '@/utils/toPascalCase';

// Initialize the SDK.
const directus = createDirectus(process.env.DIRECTUS_URL!).with(rest());

/**************************************************************
 *  Company Information
 * ************************************************************/
const CompanyInformationResponseSchema = z.object({
  id: z.number(),
  logo: z.string(),
  name: z.string()
});

export async function getCompanyInformation(): Promise<
  z.infer<typeof CompanyInformationResponseSchema>
> {
  try {
    const response = await directus.request(readSingleton('company_information'));
    return CompanyInformationResponseSchema.parse({
      ...response,
      logo: `${process.env.ASSETS_URL}/${response.logo}`
    });
  } catch (error) {
    Console.error('Error fetching logo: \n' + error);
    throw error;
  }
}

/**************************************************************
 *  Hero
 * ************************************************************/
const HeroResponseSchema = z.object({
  id: z.number(),
  image: z.string(),
  header: z.string(),
  text: z.string(),
  align_x: z.enum(['right', 'left', 'center']),
  align_y: z.enum(['top', 'bottom', 'center'])
});

export async function getHero(): Promise<z.infer<typeof HeroResponseSchema>> {
  try {
    const response = await directus.request(readSingleton('hero'));
    return HeroResponseSchema.parse({
      ...response,
      image: `${process.env.ASSETS_URL}/${response.image}`
    });
  } catch (error) {
    Console.error('Error fetching logo: \n' + error);
    throw error;
  }
}

/**************************************************************
 *  Page sections
 * ************************************************************/

const BlockImageSchema = z.object({ id: z.number(), directus_files_id: z.string() });
const ColorSchemeSchema = z.enum(['primary', 'secondary', 'invert']);

/** Blocks *******************************************************/
const TextAndImagesBlockSchema = z.object({
  id: z.number(),
  collection: z.literal('text_and_images'),
  item: z.object({
    id: z.number(),
    text: z.string(),
    images: z.array(BlockImageSchema),
    orientation: z.boolean(),
    color_scheme: ColorSchemeSchema
  })
});
export type TextAndImagesBlock = z.infer<typeof TextAndImagesBlockSchema>;

const PageBlockSchema = z.discriminatedUnion('collection', [TextAndImagesBlockSchema]);
export type PageBlock = z.infer<typeof PageBlockSchema>;

/** Main ********************************************************/
const PageSectionResponseSchema = z.array(
  z.object({
    id: z.number(),
    sort: z.number(),
    label: z.string(),
    blocks: z.array(PageBlockSchema)
  })
);
const PageSectionsSchema = z.array(
  z.object({
    id: z.number(),
    href: z.string(),
    label: z.string(),
    blocks: z.array(PageBlockSchema)
  })
);

export async function getPageSections(): Promise<z.infer<typeof PageSectionsSchema>> {
  try {
    const response = await directus.request(
      readItems('page_sections', {
        fields: [
          '*',
          {
            blocks: [
              '*',
              {
                item: {
                  text_and_images: ['*', { '*': ['*'] }]
                }
              }
            ]
          }
        ]
      })
    );
    console.log('%csrc/services/directus.ts:115 response', 'color: #007acc;', response);
    console.log(
      '%csrc/services/directus.ts:72 images',
      'color: #007acc;',
      response[0].blocks[0].item
    );
    const parsedResonse = PageSectionResponseSchema.parse(response);
    return PageSectionsSchema.parse(
      parsedResonse.map(({ id, label, blocks }) => ({
        id,
        label,
        href: toPascalCase(label),
        blocks
      }))
    );
  } catch (error) {
    Console.error('Error fetching page sections: \n' + error);
    throw error;
  }
}
