import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import { getCompanyInformation, getHero, getPageSections } from '@/services/directus';

export default async function Home() {
  const hero = await getHero();
  const pageSections = await getPageSections();
  const companyInfo = await getCompanyInformation();

  return (
    <>
      <header>
        <Nav
          header={companyInfo.name}
          logo={{ src: companyInfo.logo, alt: companyInfo.name }}
          links={pageSections}
        />
      </header>
      <main className="">
        <Hero header={hero.header} imgSrc={hero.image} text={hero.text} />
      </main>
    </>
  );
}
