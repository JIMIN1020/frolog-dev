// 기본 세팅
import LoginPrompt from '@components/home/LoginPrompt';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Home/LoginPrompt',
  component: LoginPrompt,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '로그인 박스 컴포넌트',
  },
} satisfies Meta<typeof LoginPrompt>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
