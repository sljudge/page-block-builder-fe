import type { Meta, StoryObj } from '@storybook/react';
import { Images } from './Images';

export default {
  title: 'Blocks/Images',
  component: Images,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof Images>;

type Story = StoryObj<typeof Images>;

export const Default: Story = {
  render: (args) => <Images {...args} />,
  args: {}
};