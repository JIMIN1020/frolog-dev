// 기본 세팅
import { Meta, StoryObj } from '@storybook/react';

// 컴포넌트 불러오기
import ProfileBar from '../../components/common/profileBar/ProfileBar';

const meta = {
  title: 'Common/ProfileBar',
  component: ProfileBar,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '프로필 헤더 바',
  },
} satisfies Meta<typeof ProfileBar>;

// story
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    user: {
      id: 'user1',
      name: '김혜나',
      nickname: '느긋한 돌맹이',
      profilePicture:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
    },
    popUp: true,
  },
};
