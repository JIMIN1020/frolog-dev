// 기본 세팅
import BadgeBar from '@components/myPage/BadgeBar';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'MyPage/BadgeBar',
  component: BadgeBar,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '뱃지 목록을 나타내는 바',
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ width: '360px' }}>
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof BadgeBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
