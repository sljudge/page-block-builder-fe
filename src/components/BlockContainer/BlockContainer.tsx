import type { ReactNode } from 'react';

import cx from '@/utils/cx';

export type BlockContainerProps = {
  children: ReactNode;
  colorScheme?: 'primary' | 'secondary' | 'invert';
  className?: string;
};

export const BlockContainer = ({ children, colorScheme, className }: BlockContainerProps) => {
  return (
    <div
      className={cx('py-xxl', {
        'bg-primary text-primary': colorScheme === 'primary',
        'bg-secondary text-secondary': colorScheme === 'secondary',
        'bg-invert text-invert': colorScheme === 'invert'
      })}
    >
      <div className={cx('container mx-auto', className)}>{children}</div>
    </div>
  );
};
