import TextContent from '@/components/TextContent';
import type { TextBlock } from '@/services/directus';
import BlockContainer from '@components/BlockContainer';

export const Text = ({ background_color, value }: TextBlock['item']) => {
  const colorScheme = background_color?.key ?? 'primary';
  return (
    <BlockContainer colorScheme={colorScheme}>
      <TextContent colorScheme={colorScheme}>{value}</TextContent>
    </BlockContainer>
  );
};
