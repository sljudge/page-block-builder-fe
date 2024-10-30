import type { Meta, StoryObj } from '@storybook/react';
import { IconTextGrid } from './IconTextGrid';

export default {
  title: 'Components/IconTextGrid',
  component: IconTextGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [
    (Story) => (
      <div className="container mx-auto pt-xxxl">
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof IconTextGrid>;

type Story = StoryObj<typeof IconTextGrid>;

export const Default: Story = {
  render: (args) => <IconTextGrid {...args} />,
  args: {
    numCols: 2,
    items: [
      {
        icon: 'person',
        text: 'Laborum aliqua esse magna quis magna veniam officia quis elit. Eiusmod proident aliqua sint officia aliquip eu quis id est exercitation eu cillum. Consequat irure nostrud proident duis occaecat in non laboris magna minim anim do velit. Duis tempor officia ipsum pariatur ad in ex quis deserunt in id aliqua ad. Occaecat non magna adipisicing nisi nulla aliquip commodo nulla mollit anim cupidatat culpa tempor. Enim ullamco excepteur ullamco velit eiusmod. Velit do nostrud et duis pariatur nulla ad enim.'
      },
      {
        icon: 'mood',
        text: 'Exercitation magna cupidatat nostrud laborum pariatur sunt nostrud dolor amet tempor aliquip. Enim eu ea et minim. Veniam laborum sint aute consectetur elit duis laboris.'
      },
      {
        icon: 'self_improvement',
        text: 'Adipisicing dolore labore sint amet adipisicing occaecat deserunt tempor Lorem ex ex esse veniam aliqua. Culpa do commodo culpa proident nisi nisi dolore cillum est enim. Tempor exercitation ex consequat elit esse. Enim dolor pariatur nostrud sit et excepteur esse non aliqua anim eiusmod nostrud reprehenderit deserunt.'
      },
      {
        icon: 'groups',
        text: 'Nostrud ut deserunt quis eu laboris reprehenderit Lorem est commodo aliqua ut deserunt.'
      },
      {
        icon: 'nature',
        text: 'Reprehenderit aute nostrud sit in laborum.'
      },
      {
        icon: 'signpost',
        text: 'Dolor occaecat anim incididunt minim dolor laboris ea reprehenderit enim esse dolor reprehenderit pariatur.'
      }
    ]
  }
};
