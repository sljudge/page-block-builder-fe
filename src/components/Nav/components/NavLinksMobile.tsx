import cx from '@/utils/cx';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

import { NavProps } from '../Nav';
import { NavItem } from './NavItem';

export const NavLinksMobile = ({ links }: Pick<NavProps, 'links'>) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <>
      <button
        className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-cta text-invert sm:hidden"
        onClick={() => setSideBarOpen(true)}
      >
        <Bars3Icon height={24} width={24} />
      </button>
      <div
        className={cx('hidden', sideBarOpen && 'inset-0 fixed z-40 block bg-invert/50')}
        onClick={() => setSideBarOpen(false)}
      />
      <div
        className={cx(
          'right-0 top-0 bottom-0 w-0 fixed z-50 overflow-hidden bg-primary transition-[width] duration-300',
          sideBarOpen && 'w-[75vw]'
        )}
      >
        <div className="flex justify-end py-md pr-lg">
          <button
            onClick={() => setSideBarOpen(false)}
            className={cx(
              'text-highlight transition-transform duration-500',
              !sideBarOpen && '-translate-y-[100px]'
            )}
          >
            <XMarkIcon height={50} width={50} />
          </button>
        </div>
        <ul className="flex flex-col gap-y-md p-md text-display-sm">
          {links.map((section) => (
            <NavItem
              key={`nav-link-mobile-${section.href}`}
              {...section}
              onClick={() => setSideBarOpen(false)}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
