// 기본 세팅
import WellButton from '@components/wellPage/WellButton';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'WellPage/WellButton',
  component: WellButton,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '우물 새로 파기 버튼',
  },
} satisfies Meta<typeof WellButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
