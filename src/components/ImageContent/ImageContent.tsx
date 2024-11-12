import Image from 'next/image';

import Carousel, { type CarouselProps } from '@components/Carousel';

export type ImageContentProps = {
  images: string[];
  width?: number;
  height?: number;
} & Pick<CarouselProps, 'withArrows'>;

export const ImageContent = ({
  images,
  width = 500,
  height = 500,
  withArrows
}: ImageContentProps) => {
  if (images.length > 1) {
    return (
      <Carousel withArrows={withArrows}>
        {images.map((imgSrc, i) => (
          <div key={imgSrc + i} className="" style={{ width, height }}>
            <Image alt="" src={imgSrc} fill className="h-auto max-w-full object-cover" />
          </div>
        ))}
      </Carousel>
    );
  } else {
    return (
      <Image
        data-testid="single-image"
        key={images[0]}
        alt=""
        src={images[0]}
        width={width}
        height={height}
      />
    );
  }
};
