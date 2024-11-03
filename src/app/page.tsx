import IconTextGridBlock from '@/blocks/IconTextGrid';
import Images from '@/blocks/Images';
import Testimonials from '@/blocks/Testimonials';
import TextBlock from '@/blocks/Text';
import TextAndImagesBlock from '@/blocks/TextAndImages';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import PageSection from '@/layout/PageSection';
import { getCompanyInformation, getHero, getPageSections } from '@/services/directus';
import { BackgroundColor, XAxisAlign, YAxisAlign } from '@/types';

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
          alignX={hero.align_x as XAxisAlign}
          alignY={hero.align_y as YAxisAlign}
          colorScheme={hero.color_scheme.key as BackgroundColor}
        />
        {pageSections.map(({ id, blocks, href }, i) => (
          <PageSection key={`page-section-${id}`} id={href} zIndex={pageSections.length - i}>
            {blocks.map(({ collection, item }, i) => {
              const blockKey = `page-section-${id}-${i}`;
              switch (collection) {
                case 'text_and_images':
                  return <TextAndImagesBlock key={blockKey} {...item} />;
                case 'text':
                  return <TextBlock key={blockKey} {...item} />;
                case 'icon_text_grid':
                  return <IconTextGridBlock key={blockKey} {...item} />;
                case 'testimonials':
                  return <Testimonials key={blockKey} {...item} />;
                case 'images':
                  return <Images key={blockKey} {...item} />;
                default:
                  return null;
              }
            })}
          </PageSection>
        ))}
      </main>
    </>
  );
}
