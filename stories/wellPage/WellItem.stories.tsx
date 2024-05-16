// 기본 세팅
import WellItem from '@components/wellPage/WellItem';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'WellPage/WellItem',
  component: WellItem,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '우물 컴포넌트',
  },
} satisfies Meta<typeof WellItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
      id: 'well-1',
      name: '소설 모음',
      owner: {
        id: 'test-user',
        username: '테스트',
        profile_url:
          'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
        achievement: '나는 프롤로그 테스터',
      },
      is_default: false,
      desc: '내가 책을 덮으면서 느낀 감정을 한마디로..',
      stat: {
        like_cnt: 279,
      },
      books: [
        {
          id: 'review-id-1',
          name: '노르웨이의 숲',
        },
        {
          id: 'review-id-2',
          name: '트렌드 코리아 2024',
        },
        {
          id: 'review-id-3',
          name: '방구석 미술관',
        },
      ],
    },
  },
};
