// 기본 세팅
import NoticeItem from '@components/noticePage/NoticeItem';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'NoticePage/NoticeItem',
  component: NoticeItem,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '알림 아이템 컴포넌트',
  },
} satisfies Meta<typeof NoticeItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    noticeData: {
      id: 1,
      content: '정건우님 외 2명이 정건우님의 우물을 좋아합니다.',
      timeinfo: '방금 전',
    },
  },
};
