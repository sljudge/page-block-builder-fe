import IconTextGridComponent from '@/components/IconTextGrid';
import { headers } from '@/components/TextContent';
import BlockContainer from '@/layout/BlockContainer';
import type { IconTextGridBlock } from '@/services/directus';
import { BackgroundColor } from '@/types';
import cx from '@/utils/cx';

export const IconTextGrid = ({
  background_color,
  items,
  num_cols,
  title
}: IconTextGridBlock['item']) => {
  return (
    <BlockContainer colorScheme={background_color?.key ?? 'primary'} className={cx(headers)}>
      {title && <h2 className="text-center">{title}</h2>}
      <IconTextGridComponent
        numCols={num_cols}
        items={items}
        colorScheme={(background_color?.key ?? BackgroundColor.primary) as BackgroundColor}
      />
    </BlockContainer>
  );
};
