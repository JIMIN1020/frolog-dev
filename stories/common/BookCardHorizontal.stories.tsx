// 기본 세팅
import { Meta, StoryObj } from '@storybook/react';

// 컴포넌트 불러오기
import BookCardHorizontal from '@components/common/BookCardHorizontal';

const meta = {
  title: 'Common/BookCardHorizontal',
  component: BookCardHorizontal,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '가로 형태의 도서 컴포넌트',
  },
} satisfies Meta<typeof BookCardHorizontal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    bookData: {
      id: 'book1',
      img: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791188331796.jpg',
      name: '돈의 속성',
      author: '김승호',
      summary:
        '정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.ㅍ정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.',
      rating: 3.5,
    },
  },
};
