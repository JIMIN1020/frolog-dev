// 기본 세팅
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

// 컴포넌트 불러오기
import BottomBar from '../components/common/BottomBar';

export default {
  title: 'Common/BottomBar',
  component: BottomBar,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '좋아요, 댓글, 공유 기능이 담긴 하단 바',
  },
} as Meta;

// 템플릿
const Template: StoryFn = (args) => <BottomBar commentsCount={12} {...args} />;

export const Primary = Template.bind({});
Primary.args = { commntsCount: 12 };
