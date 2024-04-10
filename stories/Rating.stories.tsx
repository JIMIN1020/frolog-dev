// 기본 세팅
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

// 컴포넌트 불러오기
import Rating, { RatingProps } from '../components/common/Rating';

export default {
  title: 'Common/Rating', // 카테고리/컴포넌트명
  component: Rating, // 컴포넌트
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '도서 평점을 나타내는 별점 컴포넌트',
  },
} as Meta;

// 템플릿
const Template: StoryFn<RatingProps> = (args) => <Rating {...args} />;

export const Primary = Template.bind({});
Primary.args = { rating: 5, starSize: 20, gap: 4, fontSize: 12 };
