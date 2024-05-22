export type ProsAndConsType = {
  id: string;
  content: string;
};

export const prosData: ProsAndConsType[] = [
  { id: 'small_talk', content: '대화소재로 딱' },
  { id: 'fresh', content: '신선도 100%' },
  { id: 'metaphor', content: '비유가 찰떡' },
  { id: 'organized', content: '완벽한 기승전결' },
  { id: 'kids', content: '아이와 함께' },
  { id: 'energy', content: '에너지 가득' },
  { id: 'various', content: '해석이 무궁무진' },
  { id: 'killing_stress', content: '스트레스가 싹' },
  { id: 'killing_time', content: '시간 순삭' },
  { id: 'motivational', content: '동기부여 뿜뿜' },
  { id: 'tears', content: '코 끝이 찡' },
  { id: 'smile', content: '잇몸미소 만개' },
  { id: 'new', content: '짜릿해 늘 새로워' },
  { id: 'warm', content: '맘이 따뜻해지는' },
  { id: 'easy', content: '완독 난이도 최하' },
];

export const consData: ProsAndConsType[] = [
  { id: 'biased', content: '민초급 호불호' },
  { id: 'no_wonder', content: '당연한 말들 뿐' },
  { id: 'cant_relate', content: '공감 불가' },
  { id: 'yawning', content: '하품이 자꾸만' },
  { id: 'hard_terms', content: '전문용어 폭탄' },
  { id: 'cliche', content: '진부한 전개' },
  { id: 'nothing_left', content: '남는 게 없네' },
  { id: 'shallow', content: '넓지만 얕은' },
  { id: 'mistranslated', content: '어색한 번역' },
  { id: 'disarrayed', content: '어지러운 전개' },
  { id: 'soso', content: '굳이 사지는 않을 듯' },
  { id: 'unkind', content: '불친절한 전개' },
  { id: 'downgrade', content: '다른 책이 나은듯' },
];

export const getProTagById = (id: string) => {
  const data = prosData.find((tag) => tag.id === id);
  return data;
};

export const getConTagById = (id: string) => {
  const data = consData.find((tag) => tag.id === id);
  return data;
};
