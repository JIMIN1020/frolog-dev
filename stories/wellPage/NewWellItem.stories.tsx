// 기본 세팅
import NewWellItem from '@components/wellPage/NewWellItem';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'WellPage/NewWellItem',
  component: NewWellItem,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '우물 새로 파기 혹은 우물 편집 시 사용하는 컴포넌트',
  },
} satisfies Meta<typeof NewWellItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
