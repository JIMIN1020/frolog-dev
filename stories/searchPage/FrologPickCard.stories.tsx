// 기본 세팅
import FrologPickCard from '@components/searchPage/FrologPickCard';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'SearchPage/FrologPickCard',
  component: FrologPickCard,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'Frolog 운영진 Pick 컴포넌트',
  },
} satisfies Meta<typeof FrologPickCard>;

export default meta;

type Story = StoryObj<typeof meta>;

// 인스턴스 - 큼지막한 경우의 수를 보여준다고 보면 됨, 이름은 마음대로
export const Primary: Story = {
  args: {
    bookData: {
      id: 'book1',
      img: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788959897179.jpg',
      name: '트렌드 코리아 2024',
      summary:
        '정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.ㅍ정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.',
    },
  },
};
