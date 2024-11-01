import GridContainer, { type GridContainerProps } from '@/layout/GridContainer';

import TextContent from '../TextContent';

export type TestimonialsProps = {
  items: { text: string; name: string; company?: string }[];
  numCols?: GridContainerProps['numCols'];
};

export const Testimonials = ({ items, numCols = 3 }: TestimonialsProps) => {
  return (
    <GridContainer numCols={numCols} as="ul" className="gap-y-xxl">
      {items.map(({ name, text, company }, i) => (
        <li
          key={`testimonial-${name}-${i}`}
          className="mx-auto flex w-[550px] max-w-full flex-col p-sm text-center shadow-md md:p-md"
        >
          <blockquote className="flex flex-1 items-center text-body-lg md:text-body-xl">
            <TextContent>{text}</TextContent>
          </blockquote>
          <div className="text-body-md font-semibold md:text-body-lg">{name}</div>
          <div className="text-body-sm md:text-body-md">{company ?? '\xa0'}</div>
        </li>
      ))}
    </GridContainer>
  );
};
