import type { Meta, StoryObj } from '@storybook/react';

import { BackgroundColor, XAxisAlign, YAxisAlign } from '@/types';

import { Hero } from './Hero';

export default {
  title: 'Components/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    header: {
      control: 'text',
      description: 'Main header for page'
    },
    text: {
      control: 'text',
      description: 'Additional text markup'
    },
    alignX: {
      control: 'select',
      description: 'Align on x-axis',
      options: ['left', 'center', 'right']
    },
    alignY: {
      control: 'select',
      description: 'Align on y-axis',
      options: ['top', 'center', 'bottom']
    },
    colorScheme: {
      control: 'select',
      description: 'Color scheme',
      options: ['primary', 'secondary', 'invert']
    }
  }
} satisfies Meta<typeof Hero>;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  render: (args) => <Hero {...args} />,
  args: {
    header: 'Header',
    text: `
      Sint eiusmod anim excepteur non laboris aute aute eiusmod commodo Lorem aliqua dolor.
      <br>
      Laboris exercitation irure dolor aute sint laborum deserunt voluptate velit.
    `,
    alignX: XAxisAlign.right,
    alignY: YAxisAlign.center,
    imgSrc: 'https://curatedevents.com/wp-content/uploads/2022/11/Corporate-awards-ceremony.jpg',
    colorScheme: BackgroundColor.secondary
  }
};
