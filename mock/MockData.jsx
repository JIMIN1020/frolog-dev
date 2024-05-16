'use client';

import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  useCallback,
} from 'react';
import { userTestData } from './testData/user';

const DataContext = createContext();

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [review, setReview] = useState(reviewData);
  const [well, setWell] = useState(wellData); // 전체 우물

  /* ----- 리뷰 핸들러 ----- */
  const updateReview = useCallback((newObject) => {
    setReview((prev) => [...prev, newObject]);
  }, []);

  /* ----- 우물 핸들러 ----- */
  const getWell = useCallback(
    (id) => {
      return well.find((w) => w.id === id);
    },
    [well]
  );

  const addWell = useCallback((newObject) => {
    setWell((prev) => [...prev, newObject]);
  }, []);

  const deleteWell = useCallback((id) => {
    setWell((prev) => prev.filter((d) => d.id !== id));
  }, []);

  const editWell = useCallback((id, newObject) => {
    const idx = well.findIndex((w) => w.id === id);

    const updatedWellData = [...well];
    updatedWellData[idx] = newObject;

    setWell(updatedWellData);
  }, []);

  const contextValue = useMemo(
    () => ({
      review,
      updateReview,
      well,
      getWell,
      addWell,
      deleteWell,
      editWell,
    }),
    [review, updateReview, well, getWell, addWell, deleteWell, editWell]
  );

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useMockData = () => useContext(DataContext);

const wellData = [
  {
    id: 'well-1',
    name: '소설 모음',
    owner: {
      id: 'test-user',
      username: '테스트',
      profile_url:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
      achievement: '나는 프롤로그 테스터',
    },
    is_default: false,
    desc: '내가 책을 덮으면서 느낀 감정을 한마디로..',
    stat: {
      like_cnt: 279,
    },
    books: [
      {
        id: 'review-id-1',
        name: '노르웨이의 숲',
      },
      {
        id: 'review-id-2',
        name: '트렌드 코리아 2024',
      },
      {
        id: 'review-id-3',
        name: '방구석 미술관',
      },
    ],
  },
  {
    id: 'well-2',
    name: '에세이 모음',
    owner: {
      id: 'test-user',
      username: '테스트',
      profile_url:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
      achievement: '나는 프롤로그 테스터',
    },
    is_default: false,
    desc: '내가 책을 덮으면서 느낀 감정을 한마디로..',
    stat: {
      like_cnt: 229,
    },
    books: [
      {
        id: 'review-id-5',
        name: '노르웨이의 숲',
      },
      {
        id: 'review-id-6',
        name: '트렌드 코리아 2024',
      },
    ],
  },
  {
    id: 'well-3',
    name: '시집 모음',
    owner: {
      id: 'test-user',
      username: '테스트',
      profile_url:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
      achievement: '나는 프롤로그 테스터',
    },
    is_default: false,
    desc: '내가 책을 덮으면서 느낀 감정을 한마디로..',
    stat: {
      like_cnt: 179,
    },
    books: [
      {
        id: 'review-id-8',
        name: '노르웨이의 숲',
      },
    ],
  },
  {
    id: 'well-4',
    name: '소설 모음',
    owner: {
      id: 'test-user',
      username: '테스트',
      profile_url:
        'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
      achievement: '나는 프롤로그 테스터',
    },
    is_default: false,
    desc: '내가 책을 덮으면서 느낀 감정을 한마디로..',
    stat: {
      like_cnt: 29,
    },
    books: [],
  },
];

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
