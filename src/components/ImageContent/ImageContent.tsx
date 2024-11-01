import Image from 'next/image';

import Carousel, { type CarouselProps } from '@components/Carousel';

export type ImageContentProps = {
  images: string[];
  width?: number;
  height?: number;
} & Pick<CarouselProps, 'withArrows'>;

export const ImageContent = ({
  images,
  width = 700,
  height = 700,
  withArrows
}: ImageContentProps) => {
  if (images.length > 1) {
    return (
      <Carousel withArrows={withArrows}>
        {images.map((imgSrc, i) => (
          <Image key={imgSrc + i} alt="" src={imgSrc} width={width} height={height} />
        ))}
      </Carousel>
    );
  } else {
    return <Image key={images[0]} alt="" src={images[0]} width={width} height={height} />;
  }
};
