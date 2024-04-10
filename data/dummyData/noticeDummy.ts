export interface NoticeDummyType {
  id: number;
  content: string;
  timeinfo: string;
}

export const noticeDummy: NoticeDummyType[] = [
  {
    id: 1,
    content: '정건우님 외 2명이 정건우님의 우물을 좋아합니다.',
    timeinfo: '방금 전',
  },
  {
    id: 2,
    content: '당신의 Frolog는? 지금 바로 프롤로그 하세요!',
    timeinfo: '1일 전',
  },
  {
    id: 3,
    content:
      '작가와의 만남 with 황보름 작가 D-5\n선착순 2명 지금 바로 신청하세요!',
    timeinfo: '1개월 전',
  },
  {
    id: 4,
    content: '리딩 챌린지에 참여해보세요!',
    timeinfo: '2개월 전',
  },
];
