// 기본 세팅
import { Meta, StoryObj } from '@storybook/react';

// 컴포넌트 불러오기
import MenuButton from '../../components/common/MenuButton';

const meta = {
  title: 'Common/MenuButton',
  component: MenuButton,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '팝업 메뉴를 여는 버튼',
  },
} satisfies Meta<typeof MenuButton>;

// story
export default meta;

type Story = StoryObj<typeof meta>;

export const Feed: Story = {
  args: { type: 'feed' },
};

export const Well: Story = {
  args: { type: 'well' },
};
