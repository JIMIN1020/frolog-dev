// 기본 세팅
import ReadingTemp from '@components/myPage/ReadingTemp';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'MyPage/ReadingTemp',
  component: ReadingTemp,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '독서 온도 컴포넌트',
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ width: '360px' }}>
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof ReadingTemp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { temp: 72.8 },
};
