import { Default as TestimonialsStories } from '@/components/Testimonials/Testimonials.stories';
import type { Meta, StoryObj } from '@storybook/react';
import { Testimonials } from './Testimonials';

export default {
  title: 'Blocks/Testimonials',
  component: Testimonials,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof Testimonials>;

type Story = StoryObj<typeof Testimonials>;

export const Default: Story = {
  render: (args) => <Testimonials {...args} />,
  args: {
    items: TestimonialsStories.args?.items,
    num_cols: TestimonialsStories.args?.numCols
  }
};
