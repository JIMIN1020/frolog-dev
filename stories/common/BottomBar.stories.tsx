// 기본 세팅
import { Meta, StoryObj } from '@storybook/react';

// 컴포넌트 불러오기
import BottomBar from '../../components/common/BottomBar';

const meta = {
  title: 'Common/BottomBar',
  component: BottomBar,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '좋아요, 댓글, 공유 기능이 담긴 하단 바',
  },
} satisfies Meta<typeof BottomBar>;

// story
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { commentsCount: 12, isLikeList: false },
};
