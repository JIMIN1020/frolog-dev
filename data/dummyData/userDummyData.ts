export interface User {
  id: string;
  username: string;
  message: string;
  temperature: number;
  achievement: string;
  character: string;
  profile_url: string;
  stat: Stat;
}

export interface Stat {
  my_review: number;
  liked_review: number;
  liked_book: number;
  liked_well: number;
}

export const userDummy: User[] = [
  {
    id: 'test-user',
    username: '테스트',
    message: '내가 책을 덮으면서 느낀 감정을 한마디로..',
    temperature: 72,
    achievement: '나는 프롤로그 테스터',
    character: '',
    profile_url:
      'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
    stat: {
      my_review: 13,
      liked_review: 2,
      liked_book: 32,
      liked_well: 12,
    },
  },
  {
    id: 'user1',
    username: '김혜나',
    message: 'message 1',
    temperature: 72,
    achievement: '느긋한 돌멩이',
    character: '',
    profile_url:
      'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
    stat: {
      my_review: 13,
      liked_review: 2,
      liked_book: 32,
      liked_well: 12,
    },
  },
  {
    id: 'user2',
    username: '류지민',
    message: 'message 2',
    temperature: 68,
    achievement: '열정적인 탐험가',
    character: '',
    profile_url:
      'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
    stat: {
      my_review: 20,
      liked_review: 5,
      liked_book: 45,
      liked_well: 18,
    },
  },
  {
    id: 'user3',
    username: '정건우',
    message: 'message 3',
    temperature: 75,
    achievement: '포근한 온수병',
    character: '',
    profile_url:
      'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
    stat: {
      my_review: 8,
      liked_review: 1,
      liked_book: 25,
      liked_well: 8,
    },
  },
  {
    id: 'user4',
    username: '최원규',
    message: 'message 4',
    temperature: 70,
    achievement: '꾸준한 독서꾼',
    character: '',
    profile_url:
      'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
    stat: {
      my_review: 15,
      liked_review: 3,
      liked_book: 38,
      liked_well: 14,
    },
  },
];
