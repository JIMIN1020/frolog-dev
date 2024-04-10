export interface UserProfile {
  id: string;
  name: string;
  nickname: string;
  profilePicture: string;
}

export interface BookReviewData {
  id: string;
  user: UserProfile;
  bookImage: string;
  bookName: string;
  bookAuthor: string;
  oneLiner: string;
  review: string;
  rating: number;
  commentsCount: number;
}

export const reviews: BookReviewData[] = [
  {
    id: 'review1',
    user: {
      id: 'user1',
      name: '김혜나',
      nickname: '느긋한 돌맹이',
      profilePicture:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
    },
    bookImage:
      'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791162540640.jpg',
    bookName: '아주 작은 습관의 힘',
    bookAuthor: '제임스 클리어',
    oneLiner: '정말 인생작이네요!',
    review:
      '정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.ㅍ정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.',
    rating: 4.5,
    commentsCount: 3,
  },
  {
    id: 'review2',
    user: {
      id: 'user1',
      name: '김별나',
      nickname: '종강종강돌을던지자',
      profilePicture:
        'https://i.pinimg.com/564x/08/3d/a7/083da742e1c9e220603ba98e8a123ccf.jpg',
    },
    bookImage:
      'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791167851109.jpg',
    bookName: '어떤 개발자가 되고 싶니?',
    bookAuthor: '박동기',
    oneLiner: '돈 짱 많이 버는 개발자가 꿈입니다🧐!',
    review:
      '정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.ㅍ정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.',
    rating: 5.0,
    commentsCount: 10,
  },
  {
    id: 'review3',
    user: {
      id: 'user1',
      name: '김달나',
      nickname: '감자탕속당근의 마음을',
      profilePicture:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
    },
    bookImage:
      'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/480D160813350.jpg',
    bookName: 'Harry Potter and the Chamber of Secrets',
    bookAuthor: '조앤 K.롤링',
    oneLiner:
      '그냥 승강장 9-4랑 9-5 사이에 들이박고 싶어요..!호그와트 보내줘..🥹',
    review:
      '정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.ㅍ정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.',
    rating: 3.0,
    commentsCount: 12,
  },
  {
    id: 'review4',
    user: {
      id: 'user1',
      name: '봉구스',
      nickname: '냉장고속샤인머스켓의마음',
      profilePicture:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
    },
    bookImage:
      'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791188850303.jpg',
    bookName: '진정한 나로 살아갈 용기',
    bookAuthor: '브레네 브라운',
    oneLiner: '타인의 시선에서 벗어날 수 있는 법을 알려주는 책!! 😎',
    review:
      '정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.ㅍ정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.',
    rating: 4.5,
    commentsCount: 30,
  },
  {
    id: 'review5',
    user: {
      id: 'user1',
      name: '김혜나',
      nickname: '마루는강쥐',
      profilePicture:
        'https://i.pinimg.com/564x/f0/e0/9c/f0e09cba73d689fc2c0ef01bbbbeae1a.jpg',
    },
    bookImage:
      'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788932473901.jpg',
    bookName: '이기적 유전자',
    bookAuthor: '리처드 도킨스',
    oneLiner: '우리가 유전자의 생존 기계라는 시각이 신박하네요🙄',
    review:
      '정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.ㅍ정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.',
    rating: 2.0,
    commentsCount: 3,
  },
  {
    id: 'review6',
    user: {
      id: 'user1',
      name: '김혜나',
      nickname: '메아리가 울리는 바다~',
      profilePicture:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
    },
    bookImage:
      'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788932473376.jpg',
    bookName: '감정조절',
    bookAuthor: '권혜경',
    oneLiner: '자기자신을 지키는 게 최우선입니다.',
    review:
      '정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.ㅍ정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.',
    rating: 2.5,
    commentsCount: 3,
  },
  {
    id: 'review7',
    user: {
      id: 'user1',
      name: '김혜나',
      nickname: '메롱이다',
      profilePicture:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
    },
    bookImage:
      'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791197647673.jpg',
    bookName: '한 번쭌인 인생은 어떻게 살아야 하는가',
    bookAuthor: '박찬위',
    oneLiner: '아름답게 살아야지 뭐',
    review:
      '정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.ㅍ정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.',
    rating: 5.0,
    commentsCount: 3,
  },
  {
    id: 'review8',
    user: {
      id: 'user1',
      name: '김혜나',
      nickname: '메롱이다',
      profilePicture:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
    },
    bookImage:
      'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788932323190.jpg',
    bookName: '상대성이론의 결정적 순간들',
    bookAuthor: '김재영',
    oneLiner: '상대성 이론을 입체적으로 소개하는 책!',
    review:
      '정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.ㅍ정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.',
    rating: 5.0,
    commentsCount: 3,
  },
  {
    id: 'review9',
    user: {
      id: 'user1',
      name: '김혜나',
      nickname: '메롱이다',
      profilePicture:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
    },
    bookImage:
      'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791166891533.jpg',
    bookName: '공자가 죽어야 나라가 산다',
    bookAuthor: '김경일',
    oneLiner: '왜 우리가 나다운 모습을 잃어가는 지 알려주는 책이요 🤔',
    review:
      '정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.ㅍ정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.',
    rating: 5.0,
    commentsCount: 8,
  },
  {
    id: 'review10',
    user: {
      id: 'user1',
      name: '김혜나',
      nickname: '메롱이다',
      profilePicture:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
    },
    bookImage:
      'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791196798611.jpg',
    bookName: '어린왕자',
    bookAuthor: '앙투안 드 생텍쥐페리',
    oneLiner: '나이가 들수록 대사 하나하나가 더 공감가는 책이에요🥹',
    review:
      '정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.ㅍ정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.',
    rating: 5.0,
    commentsCount: 15,
  },
];
