import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { IconTextGrid, type IconTextGridProps } from './IconTextGrid';

const props: IconTextGridProps = {
  numCols: 2,
  items: [
    {
      icon: 'person',
      text: 'person text'
    },
    {
      icon: 'mood',
      text: 'mood text'
    },
    {
      icon: 'self_improvement',
      text: 'self improvement text'
    },
    {
      icon: 'groups',
      text: 'groups text'
    },
    {
      icon: 'nature',
      text: 'nature text'
    },
    {
      icon: 'signpost',
      text: 'signpost text'
    }
  ]
};

describe('IconTextGrid', () => {
  it('Renders all icons', () => {
    const { getAllByTestId } = render(<IconTextGrid {...props} />);
    const allIcons = getAllByTestId('icon');
    expect(allIcons.length === props.items.length);
  });
  it('Renders all text', () => {
    const { getAllByTestId } = render(<IconTextGrid {...props} />);
    const allText = getAllByTestId('text');
    expect(allText.length === props.items.length);
  });
});
