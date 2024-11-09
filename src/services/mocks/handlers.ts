import { http, HttpResponse } from 'msw';
import type { CompanyInformationResponse } from '../directus';

export const handlers = [
  http.get(`${process.env.DIRECTUS_URL}/items/company_information`, () => {
    return HttpResponse.json({
      data: {
        logo: 'directus-id-string',
        name: 'My company'
      } as CompanyInformationResponse
    });
  })
];
