export interface BookType {
  img?: string;
  id: string;
  name: string;
  author: string;
  rating: number;
  summary?: string;
}

export const bookDummy: BookType[] = [
  {
    id: 'review-id-1',
    name: '노르웨이의 숲',
    author: '무라카미 하루키',
    rating: 3,
  },
  {
    id: 'review-id-2',
    name: '트렌드 코리아 2024',
    author: '무라카미 하루키',
    rating: 4,
  },
  {
    id: 'review-id-3',
    name: '방구석 미술관',
    author: '무라카미 하루키',
    rating: 5,
  },
  {
    id: 'review-id-4',
    name: '돈의 심리학',
    author: '무라카미 하루키',
    rating: 3.5,
  },
  {
    id: 'review-id-5',
    name: '전념',
    author: '무라카미 하루키',
    rating: 4.5,
  },
  {
    id: 'review-id-6',
    name: '혼자 있는 시간의 힘',
    author: '무라카미 하루키',
    rating: 3,
  },
];
