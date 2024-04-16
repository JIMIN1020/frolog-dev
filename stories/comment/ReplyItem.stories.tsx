// 기본 세팅
import ReplyItem from '@components/comment/ReplyItem';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Comment/ReplyItem',
  component: ReplyItem,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '답글 컴포넌트',
  },
} satisfies Meta<typeof ReplyItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
      id: 2,
      name: '정건우',
      comment: '저도 재밌게 읽었습니다.',
      like: 5,
      min: 12,
    },
  },
};
