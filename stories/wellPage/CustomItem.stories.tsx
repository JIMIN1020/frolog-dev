// 기본 세팅
import CustomItem from '@components/myPage/CustomItem';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'WellPage/CustomItem',
  component: CustomItem,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '외형 변경 아이템 컴포넌트',
  },
} satisfies Meta<typeof CustomItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isLocked: false,
  },
};
