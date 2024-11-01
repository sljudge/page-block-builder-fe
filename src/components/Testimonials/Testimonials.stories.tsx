import type { Meta, StoryObj } from '@storybook/react';
import { Testimonials } from './Testimonials';

export default {
  title: 'Components/Testimonials',
  component: Testimonials,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [
    (Story) => (
      <div className="container mx-auto p-xl">
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Testimonials>;

type Story = StoryObj<typeof Testimonials>;

export const Default: Story = {
  render: (args) => <Testimonials {...args} />,
  args: {
    numCols: 3,
    items: [
      { text: 'Veniam mollit pariatur non laboris.', name: 'Mike Moore' },
      {
        text: 'Exercitation ut quis quis esse id commodo mollit deserunt magna.',
        name: 'Chad Collins'
      },
      {
        text: 'Consectetur mollit officia eu Lorem pariatur nostrud et nulla sunt fugiat ea elit.',
        name: 'Horatio John',
        company: 'Crown Estate'
      }
    ]
  }
};
