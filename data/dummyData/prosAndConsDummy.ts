export type ProsAndConsType = {
  id: number;
  content: string;
};

export const prosData: ProsAndConsType[] = [
  { id: 1, content: '재미있어요' },
  { id: 2, content: '재미있어요 굿굿' },
  { id: 3, content: '재미있어요' },
  { id: 4, content: '재미있어요 또 읽고 싶어요' },
  { id: 5, content: '흥미로움' },
  { id: 6, content: '재미있어요 또 읽고 싶어요' },
  { id: 7, content: '굿굿' },
];

export const consData: ProsAndConsType[] = [
  { id: 1, content: '재미없어요' },
  { id: 2, content: '재미없어요 너무' },
  { id: 3, content: '이게 뭐지' },
  { id: 4, content: '재미없어요 다신 읽고 싶어요' },
  { id: 5, content: '흥미롭지 않음' },
  { id: 6, content: '지루해요' },
  { id: 7, content: '흠...' },
];
