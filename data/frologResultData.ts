interface Result {
  type: number;
  title: string;
  subtitle: string;
  description: string;
  hashtag: string;
  details: string[];
}

export const results: Result[] = [
  {
    type: 1,
    title: '우리 주인공 어떡해ㅠㅠ흐엉',
    subtitle: '감정형',
    description:
      '나를 웃고 울리는 건 책, 너뿐야(●´∀｀●)\n당신의 독서 성향은 감정형입니다',
    hashtag: '#감동적인 #힐링 #읽기쉬운 #에세이',
    details: [
      '감정과 이야기를 중심으로 책을 읽어요',
      '때론 위안을 받고자 책을 읽어요',
      '시, 소설 등 문학을 즐겨 읽어요',
      '나의 감정을 따라가며 기록하는 행위가 좋아요',
      '가장 중요한 건 책을 읽으며 느끼는 감정!',
    ],
  },
  {
    type: 2,
    title: '나는 책으로 세상을 알아가😎',
    subtitle: '사고형',
    description: '책은 세상을 알아가는 통로!\n당신의 독서 성향은 사고형입니다',
    hashtag: '#전문적인 #논리적인 #스테디셀러',
    details: [
      '주로 궁금증을 해소하기 위해 책을 읽어요',
      '책의 논리와 전문성, 배경 등을 살펴요',
      '다양한 분야의 전문 서적을 좋아해요',
      '좋은 책을 찾으면 토론하고 싶어져요',
      '가장 중요한 건 책이 담고 있는 지식!',
    ],
  },
  {
    type: 3,
    title: '책 읽는 ㉡ㅐ가 좋ㄷr,,★☆',
    subtitle: '성취형',
    description:
      '내 성장을 위해 독서는 꼭 필요한 일!\n당신의 독서 성향은 성취형입니다',
    hashtag: '#베스트셀러 #실용적인 #지금뜨는',
    details: [
      '주로 문제 해결과 자기계발을 위해 책을 읽어요',
      '독서를 자랑스러운 취미로 여기고 있어요',
      '장르는 크게 가리지 않아요',
      '북클럽, 북콘서트 등에 관심이 있어요',
      '가장 중요한 건 책을 읽는 행위!',
    ],
  },
];
