import React from 'react';
import * as S from '@styles/pages/bookDetailPage';
import BookInfoCard from '@components/bookDetailPage/BookInfoCard';
import ProsAndCons from '@components/bookDetailPage/ProsAndCons';
import { consData, prosData } from '@data/dummyData/prosAndConsDummy';
import { reviews } from '@data/dummyData/homeDummy';
import BookReview from '@components/home/BookReview';

function BookDetailPage() {
  return (
    <S.Container>
      <S.BookContainer>
        <BookInfoCard />
        <S.Wrapper>
          <S.ProsAndConsContainer>
            <ProsAndCons type='pros' tagData={prosData} />
            <ProsAndCons type='cons' tagData={consData} />
          </S.ProsAndConsContainer>
          <S.ReviewButton type='button'>리뷰 작성하기</S.ReviewButton>
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
