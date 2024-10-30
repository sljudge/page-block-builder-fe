import TextBlock from '@/blocks/Text';
import TextAndImagesBlock from '@/blocks/TextAndImages';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import { getCompanyInformation, getHero, getPageSections } from '@/services/directus';

export default async function App() {
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
      <main>
        <Hero
          header={hero.header}
          imgSrc={hero.image}
          text={hero.text}
          alignX={hero.align_x}
          alignY={hero.align_y}
        />
        {pageSections.map(({ id, blocks, href }) => (
          <section key={`page-section-${id}`} id={href}>
            {blocks.map(({ collection, item }, i) => {
              const sectionKey = `page-section-${id}-${i}`;
              switch (collection) {
                case 'text_and_images':
                  return <TextAndImagesBlock key={sectionKey} {...item} />;
                case 'text':
                  return <TextBlock key={sectionKey} {...item} />;
                default:
                  return null;
              }
            })}
          </section>
        ))}
      </main>
    </>
  );
}
