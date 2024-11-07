import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import useDisableBodyScroll from '../useDisableBodyScroll';

const TestComponent = ({ enabled }: { enabled: boolean }) => {
  useDisableBodyScroll(enabled);
  return <></>;
};

describe('useDisableBodyScroll', () => {
  it('Disables scroll when active', () => {
    render(<TestComponent enabled={true} />);
    const documentBodyOverflow = window.getComputedStyle(document.body).overflow;
    expect(documentBodyOverflow).toEqual('hidden');
  });
  it('Enables scroll when NOT active', () => {
    render(<TestComponent enabled={false} />);
    const documentBodyOverflow = window.getComputedStyle(document.body).overflow;
    expect(documentBodyOverflow).toEqual('unset');
  });
});
