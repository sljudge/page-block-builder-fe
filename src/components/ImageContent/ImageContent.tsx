import Image from 'next/image';

import Carousel from '@components/Carousel';

export type ImageContentProps = {
  images: string[];
  width?: number;
  height?: number;
};

export const ImageContent = ({ images, width = 1000, height = 1000 }: ImageContentProps) => {
  if (images.length > 1) {
    return (
      <Carousel>
        {images.map((imgSrc, i) => (
          <Image key={imgSrc + i} alt="" src={imgSrc} width={width} height={height} />
        ))}
      </Carousel>
    );
  } else {
    return <Image key={images[0]} alt="" src={images[0]} width={width} height={height} />;
  }
};
