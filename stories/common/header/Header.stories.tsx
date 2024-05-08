// 기본 세팅

import Header from '@components/common/header/Header';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '메인 헤더 컴포넌트',
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
