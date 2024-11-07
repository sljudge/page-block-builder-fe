import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { Testimonials, TestimonialsProps } from './Testimonials';

const props: TestimonialsProps = {
  numCols: 4,
  items: [
    { text: 'Veniam mollit pariatur non laboris.', name: 'Mike Moore' },
    {
      text: 'Exercitation ut quis quis esse id commodo mollit deserunt magna.',
      name: 'Chad Collins'
    },
    {
      text: 'Consectetur mollit officia eu Lorem pariatur nostrud et nulla sunt fugiat ea elit.',
      name: 'Horatio John',
      company: 'Crown Estate'
    }
  ]
};

describe('Testimonials', () => {
  it('Renders container as list', () => {
    const { getByRole } = render(<Testimonials {...props} />);
    const listContainer = getByRole('list');
    expect(listContainer).toBeInTheDocument();
  });
  it('Renders items', () => {
    const { getAllByRole } = render(<Testimonials {...props} />);
    const listItems = getAllByRole('listitem');
    listItems.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });
});
