// 기본 세팅

import InputHeader from '@components/common/header/InputHeader';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/InputHeader',
  component: InputHeader,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Input이 있는 헤더 컴포넌트',
  },
} satisfies Meta<typeof InputHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    searchValue: '',
    setSearchValue: () => {},
  },
};
