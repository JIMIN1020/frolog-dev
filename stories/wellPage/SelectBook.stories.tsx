// 기본 세팅
import SelectBook from '@components/wellPage/SelectBook';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'WellPage/SelectBook',
  component: SelectBook,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '우물 도서 추가 페이지의 도서 컴포넌트',
  },
} satisfies Meta<typeof SelectBook>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
