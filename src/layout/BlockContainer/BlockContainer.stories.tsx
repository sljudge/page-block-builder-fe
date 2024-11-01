import type { Meta, StoryObj } from '@storybook/react';
import { BlockContainer } from './BlockContainer';

export default {
  title: 'Components/BlockContainer',
  component: BlockContainer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    colorScheme: {
      control: 'select',
      description: 'Color scheme',
      options: ['primary', 'secondary', 'invert']
    }
  }
} satisfies Meta<typeof BlockContainer>;

type Story = StoryObj<typeof BlockContainer>;

export const Default: Story = {
  render: (args) => (
    <BlockContainer {...args}>
      Amet nulla ut anim deserunt eiusmod labore aliqua ullamco. Occaecat velit ea excepteur culpa
      cillum qui deserunt est. Commodo proident commodo do sit aute in quis ea ex cupidatat culpa
      enim eiusmod Lorem. Incididunt exercitation aliqua ut deserunt id pariatur nisi deserunt
      excepteur. Sunt duis ut mollit et veniam Lorem dolor eu. Aute sunt ea adipisicing do nisi
      mollit duis amet ut Lorem nisi.
    </BlockContainer>
  ),
  args: {}
};
