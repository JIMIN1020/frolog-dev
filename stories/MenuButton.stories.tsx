// 기본 세팅
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

// 컴포넌트 불러오기
import MenuButton from '../components/common/MenuButton';

export default {
  title: 'Common/MenuButton',
  component: MenuButton,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '팝업 메뉴를 여는 버튼',
  },
} as Meta;

// 템플릿
const Template: StoryFn = (args) => <MenuButton type='feed' {...args} />;

export const Feed = Template.bind({});
Feed.args = { type: 'feed' };

export const Well = Template.bind({});
Well.args = { type: 'well' };
