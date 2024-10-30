import type { Meta } from '@storybook/react';

// import Nav from './Nav';
import Hero, { HeroProps, HeroStory } from './Hero';
import { NavStory } from './Nav';

export default {
  title: 'FullPage',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta;

export const Default = () => {
  return (
    <div>
      <NavStory withMockSections={false} />
      <Hero {...(HeroStory.args as HeroProps)} />
    </div>
  );
};
