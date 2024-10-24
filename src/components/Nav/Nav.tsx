'use client';

import Image, { type ImageProps } from 'next/image';

import cx from '@/utils/cx';

import { NavLinksDesktop, NavLinksMobile } from './components';
import { useNavColorScheme } from './hooks';

export type NavLink = { label: string; href: string };

export type NavColorScheme = 'primary' | 'invert';

export type NavProps = {
  logo: {
    src: ImageProps['src'];
    alt: ImageProps['alt'];
  };
  header: string;
  links: NavLink[];
};

export const Nav = ({ logo, header, links }: NavProps) => {
  const colorScheme = useNavColorScheme();
  return (
    <nav
      className={cx(
        'fixed left-0 right-0 top-0 flex h-[66px] items-center justify-between px-md transition-all duration-200',
        colorScheme === 'primary' ? 'bg-secondary/95' : 'bg-invert/75'
      )}
    >
      <div className="flex items-center gap-x-md">
        <Image src={logo.src} width={40} height={40} alt={logo.alt} />
        <div
          className={cx(
            'w-max whitespace-nowrap text-title-sm sm:hidden',
            colorScheme === 'primary' ? 'text-primary' : 'text-invert'
          )}
        >
          {header}
        </div>
      </div>
      <NavLinksDesktop links={links} colorScheme={colorScheme} />
      <NavLinksMobile links={links} />
    </nav>
  );
};
