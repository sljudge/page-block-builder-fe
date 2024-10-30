import TextContent from '@/components/TextContent';
import cx from '@/utils/cx';

export type IconTextGridProps = {
  numCols?: number;
  items: { icon: string; text: string }[];
};

export const IconTextGrid = ({ numCols = 3, items }: IconTextGridProps) => {
  return (
    <div
      className={cx('grid gap-xxl', {
        'grid-cols-1': numCols === 1,
        'grid-cols-1 md:grid-cols-2': numCols === 2,
        'grid-cols-1 md:grid-cols-2 lg:grid-cols-3': numCols === 3,
        'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4': numCols === 4,
        'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5': numCols === 5,
        'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6': numCols === 6
      })}
    >
      {items.map(({ icon, text }, i) => (
        <div key={`icon-text-grid-${i}`} className="flex flex-col items-center gap-y-sm">
          <span className="material-icons material-symbols-outlined max-w-full text-title-xl">
            {icon}
          </span>
          <TextContent className="text-center">{text}</TextContent>
        </div>
      ))}
    </div>
  );
};
