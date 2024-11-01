import GridContainer, { type GridContainerProps } from '@/layout/GridContainer';
import cx from '@/utils/cx';

import TextContent, { blockquote } from '../TextContent';

export type TestimonialsProps = {
  items: { text: string; name: string; company?: string }[];
  numCols?: GridContainerProps['numCols'];
};

export const Testimonials = ({ items, numCols }: TestimonialsProps) => {
  return (
    <GridContainer numCols={numCols} as="ul">
      {items.map(({ name, text, company }, i) => (
        <li key={`testimonial-${name}-${i}`} className="flex flex-col text-center">
          <blockquote className={cx(blockquote, 'flex-1', 'flex items-center', 'text-body-xl')}>
            <TextContent>{text}</TextContent>
          </blockquote>
          <div className="font-semibold">{name}</div>
          <div className="text-body-md">{company ?? '\xa0'}</div>
        </li>
      ))}
    </GridContainer>
  );
};
