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
  links: NavLink[];
};

export const Nav = ({ logo, links }: NavProps) => {
  const colorScheme = useNavColorScheme();
  return (
    <nav
      className={cx(
        'top-0 left-0 right-0 fixed flex h-[66px] items-center justify-between px-md transition-all duration-200',
        colorScheme === 'primary' ? 'bg-secondary/95' : 'bg-invert/60'
      )}
    >
      <Image {...logo} width={40} height={40} />
      <NavLinksDesktop links={links} colorScheme={colorScheme} />
      <NavLinksMobile links={links} />
    </nav>
  );
};
