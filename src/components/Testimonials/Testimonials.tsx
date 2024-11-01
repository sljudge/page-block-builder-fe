import GridContainer, { type GridContainerProps } from '@/layout/GridContainer';

import TextContent from '../TextContent';

export type TestimonialsProps = {
  items: { text: string; name: string; company?: string }[];
  numCols?: GridContainerProps['numCols'];
};

export const Testimonials = ({ items, numCols = 3 }: TestimonialsProps) => {
  return (
    <GridContainer numCols={numCols} as="ul">
      {items.map(({ name, text, company }, i) => (
        <li
          key={`testimonial-${name}-${i}`}
          className="mx-auto flex max-w-[550px] flex-col text-center"
        >
          <blockquote className="flex flex-1 items-center text-body-xl">
            <TextContent>{text}</TextContent>
          </blockquote>
          <div className="font-semibold">{name}</div>
          <div className="text-body-md">{company ?? '\xa0'}</div>
        </li>
      ))}
    </GridContainer>
  );
};
