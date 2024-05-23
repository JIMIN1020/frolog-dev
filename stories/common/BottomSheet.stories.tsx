// 기본 세팅
import BottomSheet from '@components/common/BottomSheet';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/BottomSheet',
  component: BottomSheet,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'draggable한 바텀시트 틀',
  },
} satisfies Meta<typeof BottomSheet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: <span>내용</span>, title: '타이틀', closeSheet: () => {} },
};
