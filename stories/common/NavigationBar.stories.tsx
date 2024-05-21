// 기본 세팅
import NavigationBar from '@components/common/navigation/NavigationBar';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/NavigationBar',
  component: NavigationBar,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '하단 네비게이션바',
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;

type Story = StoryObj<typeof meta>;

// 인스턴스 - 큼지막한 경우의 수를 보여준다고 보면 됨, 이름은 마음대로
export const Primary: Story = {
  args: {},
};
