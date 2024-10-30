import IconTextGridComponent from '@/components/IconTextGrid';
import type { IconTextGridBlock } from '@/services/directus';
import BlockContainer from '@components/BlockContainer';

export const IconTextGrid = ({ background_color, items, num_cols }: IconTextGridBlock['item']) => {
  return (
    <BlockContainer colorScheme={background_color?.key ?? 'primary'}>
      <IconTextGridComponent numCols={num_cols} items={items} />
    </BlockContainer>
  );
};
