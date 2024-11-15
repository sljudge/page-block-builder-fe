import type { Meta } from '@storybook/react';

import { BACKGROUND_COLORS } from '@/../tailwind.config';
import genNumInRange from '@/utils/genNumInRange';

import { Nav } from './Nav';

export default {
  title: 'Components/Nav',
  component: Nav,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof Nav>;

export const PAGE_LINKS = [
  { label: 'About us', href: 'aboutUs' },
  { label: 'What we do', href: 'whatWeDo' },
  { label: 'Testimonials', href: 'testimonials' },
  { label: 'Contact', href: 'contact' }
];

export const Default = ({ withMockSections = true }: { withMockSections?: boolean }) => {
  return (
    <>
      <Nav header="My Company Name" links={PAGE_LINKS} />
      {withMockSections && (
        <div>
          {PAGE_LINKS.map(({ label, href }, i) => (
            <div
              key={href}
              id={href}
              className="text-display-md py-xxxl text-invert"
              style={{
                height: `${genNumInRange(300, 1000)}px`,
                backgroundColor: i % 2 === 0 ? BACKGROUND_COLORS.cta : BACKGROUND_COLORS.invert
              }}
            >
              {label}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
