import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { ImageContent } from './ImageContent';

const images = [
  'https://media.timeout.com/images/106041640/750/562/image.jpg',
  'https://www.biblesociety.org.uk/content/resources/2024/map_mountain/mountains.jpg'
];

describe('ImageContent', () => {
  it('Renders Carousel if more than one image', () => {
    const { queryByTestId } = render(<ImageContent images={images} />);
    const singleImage = queryByTestId('single-image');
    expect(singleImage).not.toBeInTheDocument();
  });
  it('Renders Image if only one image', () => {
    const { getByTestId } = render(<ImageContent images={images.slice(0, 1)} />);
    const singleImage = getByTestId('single-image');
    expect(singleImage).toBeInTheDocument();
  });
});
