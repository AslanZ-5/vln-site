import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './link';

const meta = {
  title: 'Example/Link',
  component: Link,
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    light: true,
    href: '#',
    title: 'Ссылка',
    style: { width: 'fit-content' },
  },
};

export const Dark: Story = {
  args: {
    dark: true,
    href: '#',
    title: 'Ссылка',
    style: { width: 'fit-content' },
  },
};
