import { ReactNode } from 'react';

import cx from '@/utils/cx';

export type GridContainerProps = {
  children: ReactNode;
  numCols?: number;
};

export const GridContainer = ({ numCols, children }: GridContainerProps) => {
  return (
    <div
      className={cx('grid gap-md lg:gap-xl xl:gap-xxl', {
        'grid-cols-1': numCols === 1,
        'grid-cols-1 md:grid-cols-2': numCols === 2,
        'grid-cols-1 md:grid-cols-2 lg:grid-cols-3': numCols === 3,
        'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4': numCols === 4,
        'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5': numCols === 5,
        'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6': numCols === 6
      })}
    >
      {children}
    </div>
  );
};

export default GridContainer;
