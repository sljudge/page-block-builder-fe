import { createDirectus, readItem, readItems, readSingleton, rest } from '@directus/sdk';
import { z } from 'zod';

import config from '@/config';
import { BackgroundColorSchema, XAxisAlignSchema, YAxisAlignSchema } from '@/types';
import Console from '@/utils/Console';
import toPascalCase from '@/utils/toPascalCase';

// Initialize the SDK.
export const directus = createDirectus(config.DIRECTUS_URL!).with(rest());

const ColorSchemeSchema = z.object({ key: BackgroundColorSchema });
export type ColorScheme = z.infer<typeof ColorSchemeSchema>;

/**************************************************************
 *  Company Information
 * ************************************************************/
export const CompanyInformationResponseSchema = z.object({
  logo: z.string(),
  name: z.string(),
  description: z.string()
});
export type CompanyInformationResponse = z.infer<typeof CompanyInformationResponseSchema>;

export async function getCompanyInformation(): Promise<CompanyInformationResponse> {
  try {
    const response = await directus.request(readSingleton('company_information'));
    return CompanyInformationResponseSchema.parse({
      ...response,
      logo: `${config.ASSETS_URL}/${response.logo}`
    });
  } catch (error) {
    Console.error('Error fetching company information: \n' + error);
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
  text: z.string().optional().nullable(),
  align_x: XAxisAlignSchema,
  align_y: YAxisAlignSchema,
  color_scheme: ColorSchemeSchema
});
export type HeroResponse = z.infer<typeof HeroResponseSchema>;

export async function getHero(version?: string): Promise<z.infer<typeof HeroResponseSchema>> {
  try {
    const response = await directus.request(
      readSingleton('hero', { fields: ['*', { color_scheme: ['key'] }], version })
    );
    return HeroResponseSchema.parse({
      ...response,
      image: `${config.ASSETS_URL}/${response.image}`
    });
  } catch (error) {
    Console.error('Error fetching hero: \n' + error);
    throw error;
  }
}

/**************************************************************
 *  Page sections
 * ************************************************************/

const BlockImageSchema = z.object({ directus_files_id: z.string() });

/** Blocks *******************************************************/

// Text and Images  -------------------------------------------------------
const TextAndImagesBlockSchema = z.object({
  id: z.number(),
  collection: z.literal('text_and_images'),
  item: z.object({
    id: z.number(),
    text: z.string(),
    images: z.array(BlockImageSchema),
    orientation: z.boolean(),
    background_color: ColorSchemeSchema.nullable()
  })
});
export type TextAndImagesBlock = z.infer<typeof TextAndImagesBlockSchema>;

// Text ------------------------------------------------------------------
const TextBlockSchema = z.object({
  id: z.number(),
  collection: z.literal('text'),
  item: z.object({
    id: z.number(),
    value: z.string(),
    background_color: ColorSchemeSchema.nullable()
  })
});
export type TextBlock = z.infer<typeof TextBlockSchema>;

// Icon and text grid  -------------------------------------------------------
const IconTextGridBlockSchema = z.object({
  id: z.number(),
  collection: z.literal('icon_text_grid'),
  item: z.object({
    id: z.number(),
    num_cols: z.number(),
    background_color: ColorSchemeSchema.nullable(),
    title: z.string().optional().nullable(),
    items: z.array(z.object({ icon: z.string().optional(), text: z.string() }))
  })
});
export type IconTextGridBlock = z.infer<typeof IconTextGridBlockSchema>;

// Testimonials  -------------------------------------------------------
const TestimonialsBlockSchema = z.object({
  id: z.number(),
  collection: z.literal('testimonials'),
  item: z.object({
    id: z.number(),
    num_cols: z.number(),
    background_color: ColorSchemeSchema.nullable(),
    title: z.string().optional().nullable(),
    items: z.array(z.object({ text: z.string(), name: z.string(), company: z.string().optional() }))
  })
});
export type TestimonialsBlock = z.infer<typeof TestimonialsBlockSchema>;

// Images  -------------------------------------------------------
const ImagesBlockSchema = z.object({
  id: z.number(),
  collection: z.literal('images'),
  item: z.object({
    id: z.number(),
    title: z.string().optional().nullable(),
    images: z.array(BlockImageSchema),
    background_color: ColorSchemeSchema.nullable()
  })
});
export type ImagesBlock = z.infer<typeof ImagesBlockSchema>;

// Union  ------------------------------------------------------------------
const PageBlockSchema = z.discriminatedUnion('collection', [
  TextAndImagesBlockSchema,
  TextBlockSchema,
  IconTextGridBlockSchema,
  TestimonialsBlockSchema,
  ImagesBlockSchema
]);
export type PageBlock = z.infer<typeof PageBlockSchema>;

/** Main ********************************************************/
const PAGE_SECTION_QUERY_SHAPE = {
  fields: [
    '*',
    {
      blocks: [
        '*',
        {
          item: {
            text_and_images: ['*', { images: ['directus_files_id'], background_color: ['key'] }],
            text: ['*', { background_color: ['key'] }],
            icon_text_grid: ['*', { background_color: ['key'] }],
            testimonials: ['*', { background_color: ['key'] }],
            images: ['*', { images: ['directus_files_id'], background_color: ['key'] }]
          }
        }
      ]
    }
  ]
};

const PageSectionResponseSchema = z.object({
  id: z.number(),
  sort: z.number(),
  nav_label: z.string(),
  blocks: z.array(PageBlockSchema)
});
export type PageSectionResponse = z.infer<typeof PageSectionResponseSchema>;

const PageSectionSchema = z.object({
  id: z.number(),
  href: z.string(),
  label: z.string(),
  blocks: z.array(PageBlockSchema)
});

export async function getPageSection(
  id: number,
  version?: string
): Promise<z.infer<typeof PageSectionSchema>> {
  try {
    const response = await directus.request(
      readItem('page_sections', id, { ...PAGE_SECTION_QUERY_SHAPE, version })
    );
    const { nav_label, blocks } = PageSectionResponseSchema.parse(response);
    return PageSectionSchema.parse({
      id,
      label: nav_label,
      href: toPascalCase(nav_label),
      blocks
    });
  } catch (error) {
    Console.error(`Error fetching page section ${id}: \n`);
    throw error;
  }
}

const PageSectionsResponseSchema = z.array(PageSectionResponseSchema);
export type PageSectionsResponse = z.infer<typeof PageSectionsResponseSchema>;
const PageSectionsSchema = z.array(PageSectionSchema);

export async function getPageSections(): Promise<z.infer<typeof PageSectionsSchema>> {
  try {
    const response = await directus.request(readItems('page_sections', PAGE_SECTION_QUERY_SHAPE));
    const parsedResonse = PageSectionsResponseSchema.parse(response);
    return PageSectionsSchema.parse(
      parsedResonse.map(({ id, nav_label, blocks }) => ({
        id,
        label: nav_label,
        href: toPascalCase(nav_label),
        blocks
      }))
    );
  } catch (error) {
    Console.error('Error fetching page sections: \n');
    throw error;
  }
}

/**************************************************************
 *  Fallback
 * ************************************************************/
const FallbackResponseSchema = z.object({
  text: z.string()
});
export async function getFallback(): Promise<z.infer<typeof FallbackResponseSchema>> {
  try {
    const response = await directus.request(readSingleton('fallback'));
    return FallbackResponseSchema.parse(response);
  } catch (error) {
    Console.error('Error fetching fallback: \n');
    throw error;
  }
}
