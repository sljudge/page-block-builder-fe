import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Default as Nav, PAGE_LINKS } from './Nav.stories';

describe('Nav', () => {
  it('Renders the Nav component', () => {
    const { getByRole } = render(<Nav />);
    const nav = getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });
  it('Nav item has correct href', () => {
    const { label, href } = PAGE_LINKS[0];
    const { queryAllByRole } = render(<Nav />);
    const [desktopLink, mobileLink] = queryAllByRole('link', { name: label });
    expect(desktopLink).toHaveAttribute('href', `#${href}`);
    expect(mobileLink).toHaveAttribute('href', `#${href}`);
  });
  it('Mobile Nav opens and closes correctly', async () => {
    const { getByTestId, getAllByRole } = render(<Nav />);

    const itemsContainer = getByTestId('mobile-nav-items-container');

    const openCTA = getByTestId('mobile-nav-open-cta');

    // Nav opens on bars click
    async function open() {
      await userEvent.click(openCTA);
      expect(itemsContainer).toBeVisible();
    }
    //Nav has no width when closed
    function isClosed() {
      expect(window.getComputedStyle(itemsContainer).width).toBeFalsy();
    }

    //Nav starts closed
    isClosed();

    await open();

    //Nav closes on close cta click
    const closeCTA = getByTestId('mobile-nav-close-cta');
    await userEvent.click(closeCTA);
    isClosed();

    await open();

    //Nav closes on nav item click
    const [firstNavItem] = getAllByRole('link');
    await userEvent.click(firstNavItem);
    isClosed();

    await open();

    //Nav closes on overlay click
    const overlay = getByTestId('mobile-nav-overlay');
    await userEvent.click(overlay);
    isClosed();

    await open();
  });
});
