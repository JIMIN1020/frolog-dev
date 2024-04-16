// 기본 세팅
import Tag from '@components/newReviewPage/Tag';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'NewReviewPage/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '장단점 태그 컴포넌트',
  },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

// 인스턴스 - 큼지막한 경우의 수를 보여준다고 보면 됨, 이름은 마음대로
export const Pro: Story = {
  args: {
    type: 'pros',
    content: '재미있음',
    isSelected: true,
    onSelect: () => {},
  },
};

export const Con: Story = {
  args: {
    type: 'cons',
    content: '재미없음',
    isSelected: true,
    onSelect: () => {},
  },
};
