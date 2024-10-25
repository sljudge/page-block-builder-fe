import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './Carousel';

export default {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-[500px]">
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Carousel>;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  render: (args) => (
    <Carousel {...args}>
      {Array(5)
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            className="text-title-xl flex min-h-[400px] items-center justify-center bg-cta text-invert"
          >
            {i}
          </div>
        ))}
    </Carousel>
  ),
  args: {}
};
