// 기본 세팅
import ProfileBarWithIcon from '@components/common/profileBar/ProfileBarWithIcon';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/ProfileBarWithIcon',
  component: ProfileBarWithIcon,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle:
      '아이콘이 포함된 프로필 바 - 마이페이지, 좋아요 리스트에서 사용',
  },
} satisfies Meta<typeof ProfileBarWithIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

// 인스턴스 - 큼지막한 경우의 수를 보여준다고 보면 됨, 이름은 마음대로
export const Primary: Story = {
  args: {
    user: {
      id: 'user1',
      name: '김혜나',
      nickname: '느긋한 돌맹이',
      profilePicture:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
    },
  },
};
