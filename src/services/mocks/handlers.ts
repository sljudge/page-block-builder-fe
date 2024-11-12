import { http, HttpResponse } from 'msw';
import type {
  ColorScheme,
  CompanyInformationResponse,
  HeroResponse,
  PageSectionResponse,
  TextBlock
} from '../directus';

/*******************************************************
 * Mock data
 *******************************************************/
const mockColorScheme: ColorScheme = { key: 'invert' };
const mockBlock: TextBlock = {
  id: 0,
  collection: 'text',
  item: {
    id: 0,
    value:
      'Velit occaecat anim esse velit non pariatur Lorem consectetur est commodo dolore nulla commodo.',
    background_color: mockColorScheme
  }
};
const mockPageSection: PageSectionResponse = {
  nav_label: 'Page section',
  id: 1,
  sort: 0,
  blocks: [mockBlock]
};

/*******************************************************
 * Handlers
 *******************************************************/
export const handlers = [
  http.get(`${process.env.DIRECTUS_URL}/items/company_information`, () => {
    return HttpResponse.json({
      data: {
        logo: 'directus-id-string',
        name: 'My company',
        description: 'description of the company'
      } as CompanyInformationResponse
    });
  }),
  http.get(`${process.env.DIRECTUS_URL}/items/hero`, () => {
    return HttpResponse.json({
      data: {
        align_x: 'center',
        align_y: 'center',
        color_scheme: mockColorScheme,
        header: 'Hero header',
        id: 1,
        image: 'directus-id-string',
        text: 'Hero text'
      } as HeroResponse
    });
  }),
  http.get(`${process.env.DIRECTUS_URL}/items/page_sections/:id`, () => {
    return HttpResponse.json({
      data: mockPageSection
    });
  }),
  http.get(`${process.env.DIRECTUS_URL}/items/page_sections`, () => {
    return HttpResponse.json({
      data: [mockPageSection]
    });
  })
];
