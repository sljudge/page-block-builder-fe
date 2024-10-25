import type { Meta, StoryObj } from '@storybook/react';
import { TextContent } from './TextContent';

export default {
  title: 'Components/TextContent',
  component: TextContent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [
    (Story) => (
      <div className="mx-auto p-xl">
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof TextContent>;

type Story = StoryObj<typeof TextContent>;

const exampleText =
  '<h2>Heading 2</h2>\n' +
  '<h3>Heading 3</h3>\n' +
  '<h4>Heading 4</h4>\n' +
  '<p><strong>Bold text / <em>Bold italic / <span style="text-decoration: underline;">Bold italic underlined</span></em></strong></p>\n' +
  '<p><em>Italic text</em></p>\n' +
  '<p><span style="text-decoration: underline;">underlined</span></p>\n' +
  '<p><s>strike through</s></p>\n' +
  '<p style="text-align: left;">left aligned</p>\n' +
  '<p style="text-align: right;">right aligned</p>\n' +
  '<p style="text-align: center;">center aligned</p>\n' +
  '<p style="text-align: left; padding-left: 40px;">with indent 1</p>\n' +
  '<p style="text-align: left; padding-left: 120px;">with indent 2</p>\n' +
  '<ol>\n' +
  '<li style="text-align: left;">numbered list 1</li>\n' +
  '<li style="text-align: left;">numbered list 2</li>\n' +
  '<li style="text-align: left;">numbered list 3</li>\n' +
  '</ol>\n' +
  '<ul>\n' +
  '<li style="text-align: left;">list 1</li>\n' +
  '<li style="text-align: left;">list 2</li>\n' +
  '<li style="text-align: left;">list 3</li>\n' +
  '</ul>\n' +
  '<blockquote>\n' +
  '<p style="text-align: left;">Block quote</p>\n' +
  '<div>\n' +
  '<div>Enim nisi proident dolore laborum fugiat adipisicing pariatur proident nostrud.</div>\n' +
  '</div>\n' +
  '</blockquote>\n' +
  '<div><hr>\n' +
  '<p>A link to <a href="google.com" target="_blank" rel="noopener">google</a></p>\n' +
  '</div>';

export const Default: Story = {
  render: (args) => <TextContent {...args}>{exampleText}</TextContent>,
  args: {}
};
