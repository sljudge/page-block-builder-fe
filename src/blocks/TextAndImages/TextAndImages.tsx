import type { TextAndImagesBlock } from '@/services/directus';

import ImageContent from '@/components/ImageContent';
import TextContent from '@/components/TextContent';
import cx from '@/utils/cx';
import BlockContainer from '@components/BlockContainer';

export const TextAndImages = ({
  text,
  images,
  orientation,
  color_scheme
}: TextAndImagesBlock['item']) => {
  return (
    <BlockContainer
      colorScheme={color_scheme}
      className={cx('flex flex-wrap gap-x-lg', orientation === false && 'flex-row-reverse')}
    >
      <div className="w-5/12 flex-1">
        <TextContent>{text}</TextContent>
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
