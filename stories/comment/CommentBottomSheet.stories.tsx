// 기본 세팅
import CommentBottomSheet from '@components/comment/CommentBottomSheet';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Comment/CommentBottomSheet',
  component: CommentBottomSheet,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'draggable한 바텀시트',
  },
} satisfies Meta<typeof CommentBottomSheet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { setOpen: () => {} },
};
