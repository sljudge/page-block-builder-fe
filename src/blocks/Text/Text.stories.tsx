import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

export default {
  title: 'Blocks/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof Text>;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  render: (args) => <Text {...args} />,
  args: {}
};