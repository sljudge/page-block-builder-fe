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
      '<p>CLIFFORD Solutions are based in the South although our work takes us the length and breadth of the country.&nbsp;</p>\n' +
      '<p>We work hard to understand the needs of an audience and will often (with the client&rsquo;s permission) speak to delegates before the conference/seminar/corporate event to ascertain what they expect, need and require from the event.</p>\n' +
      '<p>We use this information to agree suitable agendas. CLIFFORD Solutions look at every aspect of a conference from planning presentations to staging and the use of various media such as DVD, PowerPoint, live TV links and the like.</p>\n' +
      '<div>&nbsp;</div>',
    images: [
      { id: 2, directus_files_id: 'd46ad029-a8eb-4086-80f6-eb0b2a92c793' },
      { id: 1, directus_files_id: 'dc3c1ad2-5cd4-4a80-9ec9-554bffefd7e9' },
      { id: 3, directus_files_id: '5d7d9595-cae4-4376-a0d3-18bf9a201342' }
    ]
  }
};
