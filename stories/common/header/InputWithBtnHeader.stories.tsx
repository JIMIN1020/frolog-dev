// 기본 세팅
import InputWithBtnHeader from '@components/common/header/InputWithBtnHeader';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Headers/InputWithBtnHeader',
  component: InputWithBtnHeader,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle:
      '우물 도서 추가 페이지에서 사용하는 input + 완료 버튼이 있는 헤더',
  },
} satisfies Meta<typeof InputWithBtnHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { handleDone: () => {} },
};
