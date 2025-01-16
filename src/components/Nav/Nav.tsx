'use client';

import Image, { type ImageProps } from 'next/image';

import NextJsIcon from '@/assets/nextjs-icon.png';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { BackgroundColor } from '@/types';
import cx from '@/utils/cx';

import { NavLinksDesktop, NavLinksMobile } from './components';

export type NavLink = { label: string; href: string };

export type NavColorScheme = Extract<
  BackgroundColor,
  BackgroundColor.primary | BackgroundColor.invert
>;

export type NavProps = {
  logo?: {
    src: ImageProps['src'];
    alt: ImageProps['alt'];
  };
  links: NavLink[];
};

export const Nav = ({ logo, links }: NavProps) => {
  const scrollDirection = useScrollDirection(250);
  const colorScheme = (scrollDirection === 'down' ? 'primary' : 'invert') as NavColorScheme;
  return (
    <nav
      className={cx(
        'fixed left-0 right-0 top-0 z-50 shadow-md transition-all duration-200',
        colorScheme === 'primary' ? 'bg-secondary/95' : 'bg-invert/60'
      )}
    >
      <div className="container mx-auto flex h-[66px] items-center justify-between lg:pr-0">
        <div className="flex items-center gap-x-md">
          <Image
            src={logo?.src ?? NextJsIcon}
            width={75}
            height={75}
            alt={logo?.alt ?? 'nav icon'}
          />
        </div>
        <NavLinksDesktop links={links} colorScheme={colorScheme} />
        <NavLinksMobile links={links} />
      </div>
    </nav>
  );
};
