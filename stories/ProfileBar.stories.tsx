// 기본 세팅
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

// 컴포넌트 불러오기
import ProfileBar from '../components/common/ProfileBar';

export default {
  title: 'Common/ProfileBar',
  component: ProfileBar,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '프로필 헤더 바',
  },
} as Meta;

// 템플릿
const Template: StoryFn = (args) => (
  <ProfileBar
    user={{
      id: 'user1',
      name: '김혜나',
      nickname: '느긋한 돌맹이',
      profilePicture:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
    }}
    popUp
    {...args}
  />
);

export const Primary = Template.bind({});
