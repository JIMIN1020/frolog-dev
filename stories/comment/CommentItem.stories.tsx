// 기본 세팅
import CommentItem from '@components/comment/CommentItem';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Comment/CommentItem',
  component: CommentItem,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '댓글 컴포넌트',
  },
} satisfies Meta<typeof CommentItem>;

export default meta;

type Story = StoryObj<typeof meta>;

// 인스턴스 - 큼지막한 경우의 수를 보여준다고 보면 됨, 이름은 마음대로
export const Primary: Story = {
  args: {
    data: {
      id: 1,
      name: '정건우',
      comment: '아주 재밌네요!',
      like: 11,
      min: 15,
    },
  },
};
