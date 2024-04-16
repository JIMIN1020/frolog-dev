// 기본 세팅
import BookRecommendation from '@components/searchPage/BookRecommendation';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'SearchPage/BookRecommendation',
  component: BookRecommendation,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '추천도서 슬라이드 컴포넌트',
  },
} satisfies Meta<typeof BookRecommendation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
