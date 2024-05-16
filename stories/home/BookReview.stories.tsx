// 기본 세팅
import BookReview from '@components/home/BookReview';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Home/BookReview',
  component: BookReview,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '도서 리뷰 피드 컴포넌트',
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ width: '400px' }}>
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof BookReview>;

export default meta;

type Story = StoryObj<typeof meta>;

// 인스턴스 - 큼지막한 경우의 수를 보여준다고 보면 됨, 이름은 마음대로
export const Primary: Story = {
  args: {
    reviewData: {
      id: 'review1',
      user: {
        id: 'user1',
        username: '김혜나',
        message: 'message 1',
        temperature: 72,
        achievement: '느긋한 돌멩이',
        character: '',
        profile_url:
          'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
        stat: {
          my_review: 13,
          liked_review: 2,
          liked_book: 32,
          liked_well: 12,
        },
      },
      bookImage:
        'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791162540640.jpg',
      bookName: '아주 작은 습관의 힘',
      bookAuthor: '제임스 클리어',
      oneLiner: '정말 인생작이네요!',
      review:
        '정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.ㅍ정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.',
      rating: 4.5,
      commentsCount: 3,
    },
  },
};
