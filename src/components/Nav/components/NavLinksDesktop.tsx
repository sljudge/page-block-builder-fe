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
    <ul className="container hidden flex-1 justify-end gap-x-lg text-body-xl font-extralight lg:flex">
      {links.map((section) => (
        <NavItem key={`nav-link-desktop-${section.href}`} colorScheme={colorScheme} {...section} />
      ))}
    </ul>
  );
};
