import type { Meta, StoryObj } from '@storybook/react';
import BGRbutton from './BGRbutton';

const meta: Meta<typeof BGRbutton> = {
  title: 'BGR/Button',
  component: BGRbutton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

