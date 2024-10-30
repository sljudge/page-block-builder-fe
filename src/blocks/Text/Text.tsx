import TextContent from '@/components/TextContent';
import type { TextBlock } from '@/services/directus';
import BlockContainer from '@components/BlockContainer';

export const Text = ({ background_color, value }: TextBlock['item']) => {
  return (
    <BlockContainer colorScheme={background_color?.key ?? 'primary'}>
      <TextContent>{value}</TextContent>
    </BlockContainer>
  );
};
