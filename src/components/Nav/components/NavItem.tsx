import { OUTLINE_WIDTHS } from '@/../tailwind.config';
import { BackgroundColor } from '@/types';
import cx from '@/utils/cx';

import type { NavColorScheme, NavLink } from '../Nav';

export type NavItemProps = NavLink & { colorScheme?: NavColorScheme; onClick?: () => void };

export const NavItem = ({
  label,
  href,
  colorScheme = BackgroundColor.primary,
  onClick
}: NavItemProps) => {
  return (
    <li
      key={`page-nav-item-${href}`}
      className="group relative cursor-pointer py-sm"
      onClick={() => {
        window.location.hash = href;
        if (onClick) onClick();
      }}
    >
      <a
        href={`#${href}`}
        className={cx(
          'font-semibold transition-all group-hover:opacity-100',
          colorScheme === 'primary' ? 'text-cta' : 'text-invert'
        )}
      >
        {label}
      </a>
      <div className="absolute bottom-0 left-0 right-0">
        <div
          className={cx(
            'mt-xs w-0 transition-all duration-200 group-hover:w-full',
            colorScheme === 'primary' ? 'bg-invert/60' : 'bg-secondary/60'
          )}
          style={{ height: OUTLINE_WIDTHS.lg }}
        />
      </div>
    </li>
  );
};
