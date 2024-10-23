import { NavProps } from '../Nav';
import { NavItem, NavItemProps } from './NavItem';

/*******************************
 * COMPONENTS
 ******************************/
export const NavLinksDesktop = ({
  links,
  colorScheme
}: Pick<NavProps, 'links'> & Pick<NavItemProps, 'colorScheme'>) => {
  return (
    <ul className="container mx-auto hidden justify-end gap-x-lg pl-md text-display-xs font-extralight md:flex">
      {links.map((section) => (
        <NavItem key={`nav-link-desktop-${section.href}`} colorScheme={colorScheme} {...section} />
      ))}
    </ul>
  );
};
