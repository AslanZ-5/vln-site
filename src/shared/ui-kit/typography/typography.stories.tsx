import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './typography';

const meta = {
  title: 'Example/Typography',
  component: Typography,
  decorators: [
    Story => <Story />
  ],
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Heading: Story = {
  args: {
    heading: true,
    weight: 'regular',
    size: 1,
    children: 'Волна',
  },
};

export const Lable: Story = {
  args: {
    lable: true,
    weight: 'regular',
    size: 1,
    children: 'Волна',
  },
};

export const ShortText: Story = {
  args: {
    shorttext: true,
    weight: 'regular',
    size: 1,
    children: 'Одно или два небольших предложения',
  },
};

export const Paragraph: Story = {
  args: {
    paragraph: true,
    weight: 'regular',
    size: 1,
    children: 'Три и больше длинных предложения',
  },
};
