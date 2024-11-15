import cx from '@/utils/cx';
import Image from 'next/image';

import { BackgroundColor, XAxisAlign, YAxisAlign } from '@/types';

import { ArrowScrollCTA } from './components';

export type HeroProps = {
  imgSrc: string;
  header: string;
  text?: string | null;
  alignX?: XAxisAlign;
  alignY?: YAxisAlign;
  colorScheme?: BackgroundColor;
};

export const Hero = ({
  header,
  imgSrc,
  text,
  alignX = XAxisAlign.right,
  alignY = YAxisAlign.center,
  colorScheme = BackgroundColor.primary
}: HeroProps) => {
  return (
    <div
      data-testid="container"
      className={cx(
        'relative z-10 flex h-[100vh] bg-secondary bg-cover bg-center bg-no-repeat py-xl',
        {
          'justify-start': alignX === 'left',
          'justify-center': alignX === 'center',
          'justify-end': alignX === 'right',
          'items-start': alignY === 'top',
          'items-center': alignY === 'center',
          'items-end': alignY === 'bottom'
        }
      )}
    >
      <Image src={imgSrc} alt="hero image" className="absolute inset-0 -z-10 object-cover" fill />
      <div
        className={cx('container block w-max min-w-[50%] py-xl lg:max-w-[1100px]', {
          'bg-primary/90 text-primary': colorScheme === 'primary',
          'bg-secondary/90 text-secondary': colorScheme === 'secondary',
          'bg-invert/90 text-invert': colorScheme === 'invert'
        })}
      >
        <h1 className="text-title-xl leading-tight md:text-title-xxl">{header}</h1>
        {text && (
          <div
            dangerouslySetInnerHTML={{ __html: text }}
            className="pt-md text-body-md leading-relaxed sm:text-body-lg md:text-title-xs"
          />
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-xl md:hidden">
        <ArrowScrollCTA />
      </div>
    </div>
  );
};
