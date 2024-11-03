'use client';
import { type ReactNode } from 'react';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import cx from '@/utils/cx';

export type PageSectionProps = {
  children: ReactNode;
  id: string;
  zIndex: number;
};

export const PageSection = ({ children, id, zIndex }: PageSectionProps) => {
  const { ref, isVisible } = useIntersectionObserver(2);
  return (
    <section
      ref={ref}
      id={id}
      style={{ zIndex }}
      className={cx(
        'relative',
        'transform transition-all duration-500',
        isVisible ? 'opacity-100' : '-translate-y-md opacity-50'
      )}
    >
      {children}
    </section>
  );
};

export default PageSection;
