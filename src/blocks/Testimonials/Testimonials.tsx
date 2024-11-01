import BlockContainer from '@/layout/BlockContainer';
import type { TestimonialsBlock } from '@/services/directus';
import { BackgroundColor } from '@/types';

import TestimonialsComponent from '@/components/Testimonials';

export const Testimonials = ({
  background_color,
  num_cols,
  items,
  title
}: TestimonialsBlock['item']) => {
  return (
    <BlockContainer
      colorScheme={(background_color?.key ?? BackgroundColor.primary) as BackgroundColor}
    >
      {title && <h2 className="text-center">{title}</h2>}
      <TestimonialsComponent numCols={num_cols} items={items} />
    </BlockContainer>
  );
};
