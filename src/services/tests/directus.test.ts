import * as Directus from '../directus';

describe('Directus', () => {
  it('Fetches company information data', async () => {
    await expect(Directus.getCompanyInformation()).resolves.not.toThrow();
  });
  it('Fetches hero data', async () => {
    await expect(Directus.getHero()).resolves.not.toThrow();
  });
  it('Fetches single page section data', async () => {
    await expect(Directus.getPageSection(1)).resolves.not.toThrow();
  });
  it('Fetches page sections data', async () => {
    await expect(Directus.getPageSections()).resolves.not.toThrow();
  });
});
