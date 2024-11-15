import type { TextAndImagesBlock } from '@/services/directus';

import ImageContent from '@/components/ImageContent';
import TextContent from '@/components/TextContent';
import BlockContainer from '@/layout/BlockContainer';
import { BackgroundColor } from '@/types';
import cx from '@/utils/cx';

export const TextAndImages = ({
  text,
  images,
  orientation,
  background_color
}: TextAndImagesBlock['item']) => {
  const colorScheme = (background_color?.key ?? BackgroundColor.primary) as BackgroundColor;
  return (
    <BlockContainer
      colorScheme={colorScheme}
      className={cx(
        'flex flex-wrap gap-x-lg gap-y-md',
        orientation === false && 'flex-row-reverse'
      )}
    >
      <div className="w-5/12 flex-1">
        <TextContent colorScheme={colorScheme}>{text}</TextContent>
      </div>
      <div className="w-full lg:w-1/2">
        <ImageContent
          images={images.map(
            ({ directus_files_id }) => `${process.env.ASSETS_URL}/${directus_files_id}`
          )}
        />
      </div>
    </BlockContainer>
  );
};
