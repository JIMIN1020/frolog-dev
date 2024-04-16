// 기본 세팅
import FrologPick from '@components/searchPage/FrologPick';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'SearchPage/FrologPick',
  component: FrologPick,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Frolog 운영진 Pick 슬라이드',
  },
} satisfies Meta<typeof FrologPick>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
