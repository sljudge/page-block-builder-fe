import TextContent from '@/components/TextContent';
import GridContainer, { type GridContainerProps } from '@/layout/GridContainer';
import { BackgroundColor } from '@/types';

export type IconTextGridProps = {
  items: { icon?: string; text: string }[];
  numCols?: GridContainerProps['numCols'];
  colorScheme?: BackgroundColor;
};

export const IconTextGrid = ({ numCols = 3, items, colorScheme }: IconTextGridProps) => {
  return (
    <GridContainer numCols={numCols}>
      {items.map(({ icon, text }, i) => (
        <div
          key={`icon-text-grid-${i}`}
          className="flex flex-col items-center justify-stretch gap-y-sm"
        >
          <span className="material-icons material-symbols-outlined max-w-full text-title-xl">
            {icon}
          </span>
          <TextContent className="max-w-full flex-1 text-center" colorScheme={colorScheme}>
            {text}
          </TextContent>
        </div>
      ))}
    </GridContainer>
  );
};
