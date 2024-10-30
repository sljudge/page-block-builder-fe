import type { Meta, StoryObj } from '@storybook/react';

import { Default as IconTextGridStory } from '@/components/IconTextGrid/IconTextGrid.stories';
import type { ColorScheme } from '@/services/directus';

import { IconTextGrid } from './IconTextGrid';

export default {
  title: 'Blocks/IconTextGrid',
  component: IconTextGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    background_color: {
      control: 'select',
      description: 'Color scheme',
      options: ['primary', 'secondary', 'invert']
    }
  }
} satisfies Meta<typeof IconTextGrid>;

type Story = StoryObj<typeof IconTextGrid>;

export const Default: Story = {
  render: (args) => (
    <IconTextGrid
      {...args}
      background_color={{ key: args.background_color } as unknown as ColorScheme}
    />
  ),
  args: {
    ...IconTextGridStory.args
  }
};
