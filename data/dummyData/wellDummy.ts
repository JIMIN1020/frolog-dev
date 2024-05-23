export interface WellDataType {
  id: string;
  name: string; // 우물 이름
  owner: {
    id: string; // 유저 ID
    username: string; // 유저 이름 닉네임
    profile_url: string; // 프로필 이미지 URL
    achievement: string; // 유저 대표 업적
  }; // 소유자 프로필
  is_default: boolean; // 디폴트 우물 여부
  position?: number; // "내 우물 리스트"에서의 위치
  desc: string; // 설명
  review_cnt?: number; // 담겨있는 리뷰 수
  date?: number; // 생성일.
  edit?: number; // 마지막 수정일.
  stat: {
    like_cnt: number; // 좋아요 수
  };
  books: {
    id: string;
    name: string;
  }[];
}

export const wellDummy: WellDataType[] = [
  // user1에 대한 우물 데이터들
  {
    id: 'well-user1-default',
    name: '디폴트 우물',
    owner: {
      id: 'user1',
      username: '김혜나',
      profile_url:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
      achievement: '느긋한 돌멩이',
    },
    is_default: true,
    desc: '디폴트 우물 입니다',
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
  {
    id: 'well-user1-1',
    name: '김혜나의 우물 1',
    owner: {
      id: 'user1',
      username: '김혜나',
      profile_url:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
      achievement: '느긋한 돌멩이',
    },
    is_default: false,
    desc: '김혜나의 우물 1입니다.',
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
  {
    id: 'well-user1-2',
    name: '김혜나의 우물 2',
    owner: {
      id: 'user1',
      username: '김혜나',
      profile_url:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
      achievement: '느긋한 돌멩이',
    },
    is_default: false,
    desc: '김혜나의 우물 2입니다.',
    stat: {
      like_cnt: 618,
    },
    books: [
      {
        id: 'review-id-4',
        name: '노르웨이의 숲',
      },
      {
        id: 'review-id-5',
        name: '트렌드 코리아 2024',
      },
      {
        id: 'review-id-6',
        name: '방구석 미술관',
      },
    ],
  },
  {
    id: 'well-user1-3',
    name: '김혜나의 우물 3',
    owner: {
      id: 'user1',
      username: '김혜나',
      profile_url:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
      achievement: '느긋한 돌멩이',
    },
    is_default: false,
    desc: '김혜나의 우물 3입니다.',
    stat: {
      like_cnt: 145,
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
    ],
  },
  // user2에 대한 우물 데이터들 (이하 동일한 방식으로 반복)
  {
    id: 'well-user2-default',
    name: '디폴트 우물',
    owner: {
      id: 'user2',
      username: '류지민',
      profile_url:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
      achievement: '열정적인 탐험가',
    },
    is_default: true,
    desc: '디폴트 우물입니다',
    stat: {
      like_cnt: 431,
    },
    books: [
      {
        id: 'review-id-1',
        name: '노르웨이의 숲',
      },
    ],
  },
  {
    id: 'well-user2-1',
    name: '류지민의 우물 1',
    owner: {
      id: 'user2',
      username: '류지민',
      profile_url:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
      achievement: '열정적인 탐험가',
    },
    is_default: false,
    desc: '류지민의 우물 1입니다.',
    stat: {
      like_cnt: 431,
    },
    books: [
      {
        id: 'review-id-1',
        name: '노르웨이의 숲',
      },
    ],
  },
  {
    id: 'well-user2-2',
    name: '류지민의 우물 2',
    owner: {
      id: 'user2',
      username: '류지민',
      profile_url:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
      achievement: '열정적인 탐험가',
    },
    is_default: false,
    desc: '류지민의 우물 2입니다.',
    stat: {
      like_cnt: 739,
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
  {
    id: 'well-user2-3',
    name: '류지민의 우물 3',
    owner: {
      id: 'user2',
      username: '류지민',
      profile_url:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
      achievement: '열정적인 탐험가',
    },
    is_default: false,
    desc: '류지민의 우물 3입니다.',
    stat: {
      like_cnt: 582,
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
  // user3에 대한 우물 데이터들 (이하 동일한 방식으로 반복)
  {
    id: 'well-user3-default',
    name: '디폴트 우물',
    owner: {
      id: 'user3',
      username: '정건우',
      profile_url:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
      achievement: '포근한 온수병',
    },
    is_default: true,
    desc: '디폴트 우물입니다',
    stat: {
      like_cnt: 382,
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
  {
    id: 'well-user3-1',
    name: '정건우의 우물 1',
    owner: {
      id: 'user3',
      username: '정건우',
      profile_url:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
      achievement: '포근한 온수병',
    },
    is_default: false,
    desc: '정건우의 우물 1입니다.',
    stat: {
      like_cnt: 382,
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
  {
    id: 'well-user3-2',
    name: '정건우의 우물 2',
    owner: {
      id: 'user3',
      username: '정건우',
      profile_url:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
      achievement: '포근한 온수병',
    },
    is_default: false,
    desc: '정건우의 우물 2입니다.',
    stat: {
      like_cnt: 514,
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
    ],
  },
  {
    id: 'well-user3-3',
    name: '정건우의 우물 3',
    owner: {
      id: 'user3',
      username: '정건우',
      profile_url:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
      achievement: '포근한 온수병',
    },
    is_default: false,
    desc: '정건우의 우물 3입니다.',
    stat: {
      like_cnt: 789,
    },
    books: [
      {
        id: 'review-id-1',
        name: '노르웨이의 숲',
      },
    ],
  },
  // user4에 대한 우물 데이터들 (이하 동일한 방식으로 반복)
  {
    id: 'well-user4-default',
    name: '디폴트 우물',
    owner: {
      id: 'user4',
      username: '최원규',
      profile_url:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
      achievement: '꾸준한 독서꾼',
    },
    is_default: true,
    desc: '디폴트 우물입니다',
    stat: {
      like_cnt: 936,
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
  {
    id: 'well-user4-1',
    name: '최원규의 우물 1',
    owner: {
      id: 'user4',
      username: '최원규',
      profile_url:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
      achievement: '꾸준한 독서꾼',
    },
    is_default: false,
    desc: '최원규의 우물 1입니다.',
    stat: {
      like_cnt: 936,
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
  {
    id: 'well-user4-2',
    name: '최원규의 우물 2',
    owner: {
      id: 'user4',
      username: '최원규',
      profile_url:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
      achievement: '꾸준한 독서꾼',
    },
    is_default: false,
    desc: '최원규의 우물 2입니다.',
    stat: {
      like_cnt: 327,
    },
    books: [
      {
        id: 'review-id-1',
        name: '노르웨이의 숲',
      },
      {
        id: 'review-id-3',
        name: '방구석 미술관',
      },
    ],
  },
  {
    id: 'well-user4-3',
    name: '최원규의 우물 3',
    owner: {
      id: 'user4',
      username: '최원규',
      profile_url:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
      achievement: '꾸준한 독서꾼',
    },
    is_default: false,
    desc: '최원규의 우물 3입니다.',
    stat: {
      like_cnt: 612,
    },
    books: [
      {
        id: 'review-id-3',
        name: '방구석 미술관',
      },
    ],
  },
];
