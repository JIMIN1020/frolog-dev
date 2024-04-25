// 기본 세팅
import HeaderWithBtn from '@components/common/header/HeaderWithBtn';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Headers/HeaderWithBtn',
  component: HeaderWithBtn,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle:
      '우물 생성/편집 페이지에서 사용하는 완료 버튼이 있는 헤더',
  },
} satisfies Meta<typeof HeaderWithBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { isNew: true },
};
