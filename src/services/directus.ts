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
  text: z.string()
});

export async function getHero(): Promise<z.infer<typeof HeroResponseSchema>> {
  try {
    const response = await directus.request(readSingleton('hero'));
    // console.log('%csrc/services/directus.ts:41 response', 'color: #007acc;', response);
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
