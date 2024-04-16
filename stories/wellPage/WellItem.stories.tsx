// 기본 세팅
import WellItem from '@components/wellPage/WellItem';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'WellPage/WellItem',
  component: WellItem,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '우물 컴포넌트',
  },
} satisfies Meta<typeof WellItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
