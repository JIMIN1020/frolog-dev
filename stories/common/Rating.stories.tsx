// 기본 세팅
import { Meta, StoryObj } from '@storybook/react';

// 컴포넌트 불러오기
import Rating from '../../components/common/Rating';

const meta = {
  title: 'Common/Rating', // 카테고리/컴포넌트명
  component: Rating, // 컴포넌트
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '도서 평점을 나타내는 별점 컴포넌트',
  },
} satisfies Meta<typeof Rating>;

// story
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { rating: 5, starSize: 20, gap: 4, fontSize: 12 },
};
