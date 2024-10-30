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
  render: (args) => (
    <Text
      {...args}
      value={
        '<h2>Heading 2</h2>\n' +
        '<p><strong>Bold text / <em>Bold italic / <span style="text-decoration: underline;">Bold italic underlined</span></em></strong></p>\n' +
        '<p>Nostrud fugiat occaecat esse ut in. Minim occaecat ea veniam eiusmod in. Eiusmod deserunt elit aliqua ut voluptate commodo sunt ullamco consectetur sint sint laboris ipsum dolor. Cupidatat nulla commodo aliqua ea et ullamco excepteur culpa enim veniam eu tempor. Sint sint consequat ut enim irure. Quis est sit laborum exercitation.</p>'
      }
    />
  ),
  args: {}
};
