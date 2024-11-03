import IconTextGridBlock from '@/blocks/IconTextGrid';
import Images from '@/blocks/Images';
import Testimonials from '@/blocks/Testimonials';
import TextBlock from '@/blocks/Text';
import TextAndImagesBlock from '@/blocks/TextAndImages';
import type { PageBlock } from '@/services/directus';

const BlockMap = ({ sectionKey, blocks }: { sectionKey: string | number; blocks: PageBlock[] }) => {
  return (
    <>
      {blocks.map(({ collection, item }, i) => {
        const blockKey = `page-section-${sectionKey}-${i}`;
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
    </>
  );
};

export default BlockMap;
