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
  args: {
    data: {
      id: 1,
      title: '소설 모음',
      description: '내가 책을 덮으면서 느낀 감정을 한마디로..',
    },
  },
};
