// 기본 세팅
import CommentInput from '@components/comment/CommentInput';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Comment/CommentInput',
  component: CommentInput,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '바텀시트 내 입력 input',
  },
} satisfies Meta<typeof CommentInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
