import * as Directus from '../directus';

describe('Directus', () => {
  it('Fetches company information', async () => {
    await expect(Directus.getCompanyInformation()).resolves.not.toThrow();
  });
});
