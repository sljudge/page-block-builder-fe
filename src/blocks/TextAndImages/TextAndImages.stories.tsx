import type { Meta, StoryObj } from '@storybook/react';

import { TextAndImages } from './TextAndImages';

export default {
  title: 'Blocks/TextAndImages',
  component: TextAndImages,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof TextAndImages>;

type Story = StoryObj<typeof TextAndImages>;

export const Default: Story = {
  render: (args) => <TextAndImages {...args} />,
  args: {
    text:
      '<h2>About us</h2>\n' +
      '<p>Cillum reprehenderit nostrud sint aliquip laboris.</p>\n' +
      '<p>Aliqua exercitation consequat pariatur magna ex ullamco.</p>\n' +
      '<p>Eu aliqua fugiat dolor velit eu occaecat tempor laboris. Irure sit culpa exercitation aliqua minim reprehenderit cupidatat ullamco est.</p>\n' +
      '<div>&nbsp;</div>',
    images: [
      { directus_files_id: 'd46ad029-a8eb-4086-80f6-eb0b2a92c793' },
      { directus_files_id: 'dc3c1ad2-5cd4-4a80-9ec9-554bffefd7e9' },
      { directus_files_id: '5d7d9595-cae4-4376-a0d3-18bf9a201342' }
    ]
  }
};
