'use client';

import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  useCallback,
} from 'react';
import { userTestData } from './testData/user';

const ReviewContext = createContext();

// eslint-disable-next-line react/prop-types
export const ReviewProvider = ({ children }) => {
  const [review, setReview] = useState(reviewData);

  const updateReview = useCallback((newObject) => {
    setReview((prev) => [...prev, newObject]);
  }, []);

  const contextValue = useMemo(
    () => ({ review, updateReview }),
    [review, updateReview]
  );

  return (
    <ReviewContext.Provider value={contextValue}>
      {children}
    </ReviewContext.Provider>
  );
};

export const useReviewData = () => useContext(ReviewContext);

const reviewData = [
  {
    id: 'my-review1',
    user: userTestData,
    bookImage:
      'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791162540640.jpg',
    bookName: '아주 작은 습관의 힘',
    bookAuthor: '제임스 클리어',
    oneLiner: '정말 인생작이네요!',
    review:
      '정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.ㅍ정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.',
    rating: 4.5,
    commentsCount: 3,
  },
  {
    id: 'my-review2',
    user: userTestData,
    bookImage:
      'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791167851109.jpg',
    bookName: '어떤 개발자가 되고 싶니?',
    bookAuthor: '박동기',
    oneLiner: '돈 짱 많이 버는 개발자가 꿈입니다🧐!',
    review:
      '정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.ㅍ정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.',
    rating: 4.5,
    commentsCount: 10,
  },
  {
    id: 'my-review3',
    user: userTestData,
    bookImage:
      'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/480D160813350.jpg',
    bookName: 'Harry Potter and the Chamber of Secrets',
    bookAuthor: '조앤 K.롤링',
    oneLiner:
      '그냥 승강장 9-4랑 9-5 사이에 들이박고 싶어요..!호그와트 보내줘..🥹',
    review:
      '정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.ㅍ정건우가 있다.정건우가 있다.정건우가 있다.정건우가 있다.',
    rating: 3.5,
    commentsCount: 12,
  },
];
