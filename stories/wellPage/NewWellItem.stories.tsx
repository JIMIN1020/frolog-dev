// 기본 세팅
import NewWellItem from '@components/wellPage/NewWellItem';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'WellPage/NewWellItem',
  component: NewWellItem,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '우물 새로 파기 혹은 우물 편집 시 사용하는 컴포넌트',
  },
} satisfies Meta<typeof NewWellItem>;

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
