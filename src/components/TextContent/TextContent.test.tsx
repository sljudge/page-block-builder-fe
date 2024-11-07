import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { TextContent } from '../TextContent/TextContent';

describe('TextContent', () => {
  it('Renders', () => {
    const { getByTestId } = render(
      <TextContent testId="test">
        Ex Lorem dolor labore tempor sit. Id sint laboris sit enim laboris. Enim sint qui consequat
        reprehenderit exercitation id deserunt eu incididunt pariatur fugiat in qui. Aute aliquip
        excepteur fugiat exercitation consequat ea aliquip et aliquip occaecat incididunt nostrud.
        Laboris Lorem elit excepteur elit id veniam. Voluptate laborum velit amet irure ad
        exercitation magna laborum est officia non eu officia ea.
      </TextContent>
    );
    const elem = getByTestId('test');
    expect(elem).toBeInTheDocument();
  });
});
