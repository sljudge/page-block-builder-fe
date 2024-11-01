import TextContent from '@/components/TextContent';
import BlockContainer from '@/layout/BlockContainer';
import type { TextBlock } from '@/services/directus';
import { BackgroundColor } from '@/types';

export const Text = ({ background_color, value }: TextBlock['item']) => {
  const colorScheme = (background_color?.key ?? BackgroundColor.primary) as BackgroundColor;
  return (
    <BlockContainer colorScheme={colorScheme}>
      <TextContent colorScheme={colorScheme}>{value}</TextContent>
    </BlockContainer>
  );
};
