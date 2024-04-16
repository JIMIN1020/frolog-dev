// 기본 세팅
import DashboardItem from '@components/myPage/DashboardItem';
import myReviewIcon from 'public/icons/mypage/my-review-icon.svg';
import likeReviewIcon from 'public/icons/mypage/like-review-icon.svg';
import likeBookIcon from 'public/icons/mypage/like-book-icon.svg';
import likeWellIcon from 'public/icons/mypage/like-well-icon.svg';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'MyPage/DashboardItem',
  component: DashboardItem,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '내가 쓴 리뷰, 좋아요한 우물 등을 나타내는 아이템',
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ width: '140px' }}>
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof DashboardItem>;

export default meta;

type Story = StoryObj<typeof meta>;

// 인스턴스 - 큼지막한 경우의 수를 보여준다고 보면 됨, 이름은 마음대로
export const MyReivew: Story = {
  args: { iconUrl: myReviewIcon, title: '내가 쓴 리뷰', count: 12 },
};

export const LikedReview: Story = {
  args: { iconUrl: likeReviewIcon, title: '좋아요한 리뷰', count: 5 },
};

export const LikedBook: Story = {
  args: { iconUrl: likeBookIcon, title: '좋아요한 책', count: 10 },
};
export const LikedWell: Story = {
  args: { iconUrl: likeWellIcon, title: '좋아요한 우물', count: 7 },
};
