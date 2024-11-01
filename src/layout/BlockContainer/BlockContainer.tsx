import type { ReactNode } from 'react';

import { headers } from '@/components/TextContent';
import { BackgroundColor } from '@/types';

import cx from '@/utils/cx';

export type BlockContainerProps = {
  children: ReactNode;
  colorScheme?: BackgroundColor;
  className?: string;
};

export const BlockContainer = ({ children, colorScheme, className }: BlockContainerProps) => {
  return (
    <div
      className={cx(
        'py-xxl',
        'shadow-2xl',
        {
          'bg-primary text-primary': colorScheme === 'primary',
          'bg-secondary text-secondary': colorScheme === 'secondary',
          'bg-invert text-invert': colorScheme === 'invert'
        },
        headers
      )}
    >
      <div className={cx('container mx-auto', className)}>{children}</div>
    </div>
  );
};
