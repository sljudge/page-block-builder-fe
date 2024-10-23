import type { Meta } from '@storybook/react';

import Logo from '@/app/favicon.ico';
import genNumInRange from '@/utils/genNumInRange';

import { BACKGROUND_COLORS } from '../../../tailwind.config';
import { Nav } from './Nav';

export default {
  title: 'Components/Nav',
  component: Nav,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof Nav>;

const PAGE_LINKS = [
  { label: 'About us', href: 'aboutUs' },
  { label: 'What we do', href: 'whatWeDo' },
  { label: 'Testimonials', href: 'testimonials' },
  { label: 'Contact', href: 'contact' }
];

export const Default = () => {
  return (
    <>
      <Nav logo={{ src: Logo, alt: 'Logo' }} links={PAGE_LINKS} />
      <div>
        {PAGE_LINKS.map(({ label, href }, i) => (
          <div
            id={href}
            className="py-md text-display-md text-invert"
            style={{
              height: `${genNumInRange(300, 1000)}px`,
              backgroundColor: i % 2 === 0 ? BACKGROUND_COLORS.cta : BACKGROUND_COLORS.invert
            }}
          >
            {label}
          </div>
        ))}
      </div>
    </>
  );
};
