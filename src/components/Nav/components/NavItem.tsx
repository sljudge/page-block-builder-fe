import { OUTLINE_WIDTHS } from '@/../tailwind.config';
import cx from '@/utils/cx';

import type { NavColorScheme, NavLink } from '../Nav';

export type NavItemProps = NavLink & { colorScheme?: NavColorScheme; onClick?: () => void };

export const NavItem = ({ label, href, colorScheme = 'primary', onClick }: NavItemProps) => {
  return (
    <li
      key={`page-nav-item-${href}`}
      className="group relative cursor-pointer py-sm"
      onClick={() => {
        window.location.hash = href;
        onClick && onClick();
      }}
    >
      <a
        href={`#${href}`}
        className={cx(
          'opacity-85 transition-all group-hover:opacity-100',
          colorScheme === 'primary' ? 'text-cta' : 'text-invert'
        )}
      >
        {label}
      </a>
      <div className="left-0 right-0 bottom-0 absolute">
        <div
          className={cx(
            'w-0 mt-xs transition-all duration-200 group-hover:w-full',
            colorScheme === 'primary' ? 'bg-invert/60' : 'bg-primary/60'
          )}
          style={{ height: OUTLINE_WIDTHS.lg }}
        />
      </div>
    </li>
  );
};
