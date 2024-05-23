'use client';

import React from 'react';
import * as S from '@styles/pages/bookDetailPage';
import BookInfoCard from '@components/bookDetailPage/BookInfoCard';
import ProsAndCons from '@components/bookDetailPage/ProsAndCons';
import { reviews } from '@data/dummyData/homeDummy';
import BookReview from '@components/home/BookReview';
import { recommendBookDummy } from '@data/dummyData/recommendDummy';
import { useRouter } from 'next/navigation';
import useStore from 'store/store';

interface Props {
  params: {
    slug: string;
  };
}

function BookDetailPage({ params: { slug } }: Props) {
  const { user, setIsOpenLoginPopUp } = useStore();
  const router = useRouter();
  const data = recommendBookDummy.find((book) => book.id === slug)!;

  const handleReviewClick = () => {
    if (user) {
      router.push(`/new-review?step=1&selectedBook=${JSON.stringify(data)}`);
    } else {
      setIsOpenLoginPopUp(true);
    }
  };

  return (
    <S.Container>
      <S.BookContainer>
        <BookInfoCard bookData={data} />
        <S.Wrapper>
          <S.ProsAndConsContainer>
            <ProsAndCons type='pros' tagData={data.pros} />
            <ProsAndCons type='cons' tagData={data.cons} />
          </S.ProsAndConsContainer>
          <S.ReviewButton type='button' onClick={handleReviewClick}>
            리뷰 작성하기
          </S.ReviewButton>
        </S.Wrapper>
        <S.BestReview>Best Review</S.BestReview>
      </S.BookContainer>
      <S.BestReviewList>
        {reviews.map((data) => {
          return <BookReview key={data.id} reviewData={data} />;
        })}
      </S.BestReviewList>
    </S.Container>
  );
}

export default BookDetailPage;
