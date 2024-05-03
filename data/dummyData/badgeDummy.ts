export interface BadgeType {
  id: string;
  name: string;
  desc: string;
}

export interface ChallengeType {
  id: number;
  name: string;
  desc: string;
  total: string;
  current: number;
}

export const badgeDummy: BadgeType[] = [
  {
    id: '1',
    name: '소설에 미친 남자',
    desc: '한 달에 소설 리뷰 2개 이상을 쓰셨습니다.',
  },
  {
    id: '2',
    name: '소설에 미친 남자',
    desc: '한 달에 소설 리뷰 2개 이상을 쓰셨습니다.',
  },
  {
    id: '3',
    name: '소설에 미친 남자',
    desc: '한 달에 소설 리뷰 2개 이상을 쓰셨습니다.',
  },
  {
    id: '4',
    name: '소설에 미친 남자',
    desc: '한 달에 소설 리뷰 2개 이상을 쓰셨습니다.',
  },
  {
    id: '5',
    name: '소설에 미친 남자',
    desc: '한 달에 소설 리뷰 2개 이상을 쓰셨습니다.',
  },
  {
    id: '6',
    name: '소설에 미친 남자',
    desc: '한 달에 소설 리뷰 2개 이상을 쓰셨습니다.',
  },
  {
    id: '7',
    name: '소설에 미친 남자',
    desc: '한 달에 소설 리뷰 2개 이상을 쓰셨습니다.',
  },
];

export const challengeDummy: ChallengeType[] = [
  {
    id: 1,
    name: '소설에 미친 남자',
    desc: '업적 달성까지 3권 남았습니다.',
    total: '5권',
    current: 2,
  },
  {
    id: 2,
    name: '소설에 미친 남자',
    desc: '업적 달성까지 2리뷰 남았습니다.',
    total: '5개',
    current: 3,
  },
  {
    id: 3,
    name: '소설에 미친 남자',
    desc: '업적 달성까지 4권 남았습니다.',
    total: '5권',
    current: 1,
  },
  {
    id: 4,
    name: '소설에 미친 남자',
    desc: '업적 달성까지 10리뷰 남았습니다.',
    total: '15개',
    current: 5,
  },
];
