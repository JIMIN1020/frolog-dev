// 기본 세팅
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

// 컴포넌트 불러오기
import AdBanner from '../components/common/AdBanner';

export default {
  title: 'Common/AdBanner',
  component: AdBanner,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '슬라이드 형태로 자동 전환되는 광고 배너',
  },
} as Meta;

// 템플릿
const Template: StoryFn = (args) => <AdBanner {...args} />;

export const Primary = Template.bind({});
