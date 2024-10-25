'use client';

import { useCallback, type ReactNode } from 'react';
import ReactCarousel, { DotProps, type ResponsiveType } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import cx from '@/utils/cx';

const responsive: ResponsiveType = {
  all: {
    breakpoint: { max: 999999, min: 0 },
    items: 1
  }
};

export type CarouselProps = { children: ReactNode[] };

export const Carousel = ({ children }: CarouselProps) => {
  const CustomDot = useCallback(({ active, onClick }: Required<DotProps>) => {
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
        className={cx(
          'mx-xs h-[1rem] w-[1rem] rounded-full transition-colors duration-300',
          active ? 'bg-cta' : 'border-md border-cta'
        )}
      />
    );
  }, []);
  return (
    <ReactCarousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      showDots={true}
      arrows={false}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3500}
      transitionDuration={500}
      // @ts-expect-error no props
      customDot={<CustomDot />}
      containerClass="pb-lg"
    >
      {children}
    </ReactCarousel>
  );
};
