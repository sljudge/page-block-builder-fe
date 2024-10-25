import type { Meta, StoryObj } from '@storybook/react';
import { ImageContent } from './ImageContent';

export default {
  title: 'Components/ImageContent',
  component: ImageContent,
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
} satisfies Meta<typeof ImageContent>;

type Story = StoryObj<typeof ImageContent>;

export const Default: Story = {
  render: (args) => <ImageContent {...args} />,
  args: {
    images: ['https://media.timeout.com/images/106041640/750/562/image.jpg']
  }
};

export const MultipleImages: Story = {
  render: (args) => <ImageContent {...args} />,
  args: {
    images: [
      'https://media.timeout.com/images/106041640/750/562/image.jpg',
      'https://www.biblesociety.org.uk/content/resources/2024/map_mountain/mountains.jpg'
    ]
  }
};
