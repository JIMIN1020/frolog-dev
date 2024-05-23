import { ProsAndConsType } from './prosAndConsDummy';

export interface BookDataType {
  id: string;
  img: string;
  name: string;
  author: string;
  rating: number;
  summary: string;
  pros: ProsAndConsType[];
  cons: ProsAndConsType[];
}

export const recommendBookDummy: BookDataType[] = [
  {
    id: 'book1',
    img: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791188331796.jpg',
    name: '돈의 속성',
    author: '김승호',
    summary:
      '정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.ㅍ정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.',
    rating: 3.5,
    pros: [
      { id: 'small_talk', content: '대화소재로 딱' },
      { id: 'fresh', content: '신선도 100%' },
      { id: 'metaphor', content: '비유가 찰떡' },
      { id: 'organized', content: '완벽한 기승전결' },
      { id: 'kids', content: '아이와 함께' },
    ],
    cons: [
      { id: 'biased', content: '민초급 호불호' },
      { id: 'no_wonder', content: '당연한 말들 뿐' },
      { id: 'cant_relate', content: '공감 불가' },
      { id: 'yawning', content: '하품이 자꾸만' },
      { id: 'hard_terms', content: '전문용어 폭탄' },
    ],
  },
  {
    id: 'book2',
    img: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791168476073.jpg',
    name: '돈을 부르는 매너',
    author: '민경남',
    summary:
      '정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.ㅍ정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.',
    rating: 4.5,
    pros: [
      { id: 'kids', content: '아이와 함께' },
      { id: 'energy', content: '에너지 가득' },
      { id: 'various', content: '해석이 무궁무진' },
      { id: 'killing_stress', content: '스트레스가 싹' },
      { id: 'killing_time', content: '시간 순삭' },
    ],
    cons: [
      { id: 'yawning', content: '하품이 자꾸만' },
      { id: 'hard_terms', content: '전문용어 폭탄' },
      { id: 'cliche', content: '진부한 전개' },
      { id: 'nothing_left', content: '남는 게 없네' },
      { id: 'shallow', content: '넓지만 얕은' },
    ],
  },
  {
    id: 'book3',
    img: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791192389561.jpg',
    name: '겸손의 힘',
    author: '대릴 반 통게렌 저자',
    summary:
      '정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.ㅍ정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.',
    rating: 4,
    pros: [
      { id: 'tears', content: '코 끝이 찡' },
      { id: 'smile', content: '잇몸미소 만개' },
      { id: 'new', content: '짜릿해 늘 새로워' },
      { id: 'warm', content: '맘이 따뜻해지는' },
      { id: 'easy', content: '완독 난이도 최하' },
    ],
    cons: [
      { id: 'mistranslated', content: '어색한 번역' },
      { id: 'disarrayed', content: '어지러운 전개' },
      { id: 'soso', content: '굳이 사지는 않을 듯' },
      { id: 'unkind', content: '불친절한 전개' },
      { id: 'downgrade', content: '다른 책이 나은듯' },
    ],
  },
  {
    id: 'book4',
    img: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791191777642.jpg',
    name: '케이크 먹고 헬스하고 영화보면 기분이 나아질 줄 알았다.',
    author: '멘탈 닥터 시도',
    summary:
      '정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.ㅍ정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.',
    rating: 2,
    pros: [
      { id: 'killing_stress', content: '스트레스가 싹' },
      { id: 'killing_time', content: '시간 순삭' },
      { id: 'motivational', content: '동기부여 뿜뿜' },
      { id: 'tears', content: '코 끝이 찡' },
      { id: 'smile', content: '잇몸미소 만개' },
    ],
    cons: [
      { id: 'cliche', content: '진부한 전개' },
      { id: 'nothing_left', content: '남는 게 없네' },
      { id: 'shallow', content: '넓지만 얕은' },
      { id: 'mistranslated', content: '어색한 번역' },
      { id: 'disarrayed', content: '어지러운 전개' },
    ],
  },
];
