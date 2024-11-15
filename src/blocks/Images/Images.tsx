import ImageContent from '@/components/ImageContent';
import config from '@/config';
import BlockContainer from '@/layout/BlockContainer';
import type { ImagesBlock } from '@/services/directus';
import { BackgroundColor } from '@/types';

export const Images = ({ background_color, images, title }: ImagesBlock['item']) => {
  return (
    <BlockContainer
      colorScheme={(background_color?.key ?? BackgroundColor.primary) as BackgroundColor}
      className="max-w-[900px]"
    >
      {title && <h2 className="text-center">{title}</h2>}
      <ImageContent
        width={900}
        withArrows
        images={images.map(({ directus_files_id }) => `${config.ASSETS_URL}/${directus_files_id}`)}
      />
    </BlockContainer>
  );
};
