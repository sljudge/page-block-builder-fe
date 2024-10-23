import Image, { type ImageProps } from 'next/image';
import { OUTLINE_WIDTHS } from '../../../tailwind.config';

export type NavLink = { label: string; href: string };

export type NavProps = {
  logo: {
    src: ImageProps['src'];
    alt: ImageProps['alt'];
  };
  links: NavLink[];
};

export const Nav = ({ logo, links }: NavProps) => {
  return (
    <nav className="flex items-center bg-secondary text-cta">
      <Image {...logo} className="ml-lg w-[40px]" />
      <ul className="container mx-auto flex justify-end gap-x-lg px-md text-display-xs font-extralight">
        {links.map((section) => (
          <NavItem {...section} />
        ))}
      </ul>
    </nav>
  );
};

const NavItem = ({ label, href }: NavLink) => {
  return (
    <li
      key={`page-nav-item-${href}`}
      className="group relative cursor-pointer py-sm"
      onClick={() => (window.location.hash = href)}
    >
      <a href={`#${href}`} className="opacity-85 transition-all group-hover:opacity-100">
        {label}
      </a>
      <div className="left-0 right-0 bottom-0 absolute">
        <div
          className="w-0 mt-xs bg-invert/60 transition-all duration-200 group-hover:w-full"
          style={{ height: OUTLINE_WIDTHS.lg }}
        />
      </div>
    </li>
  );
};
