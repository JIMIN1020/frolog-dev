// 기본 세팅
import { Meta, StoryObj } from '@storybook/react';

// 컴포넌트 불러오기
import AdBanner from '../../components/common/AdBanner';

const meta = {
  title: 'Common/AdBanner',
  component: AdBanner,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '슬라이드 형태로 자동 전환되는 광고 배너',
  },
} satisfies Meta<typeof AdBanner>;

// story
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
