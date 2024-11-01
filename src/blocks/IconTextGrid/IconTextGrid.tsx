import IconTextGridComponent from '@/components/IconTextGrid';
import BlockContainer from '@/layout/BlockContainer';
import type { IconTextGridBlock } from '@/services/directus';
import { BackgroundColor } from '@/types';

export const IconTextGrid = ({
  background_color,
  items,
  num_cols,
  title
}: IconTextGridBlock['item']) => {
  const colorScheme = (background_color?.key ?? BackgroundColor.primary) as BackgroundColor;
  return (
    <BlockContainer colorScheme={colorScheme}>
      {title && <h2 className="text-center">{title}</h2>}
      <IconTextGridComponent numCols={num_cols} items={items} colorScheme={colorScheme} />
    </BlockContainer>
  );
};
