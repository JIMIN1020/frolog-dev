'use client';

import React from 'react';
import * as S from '@styles/pages/bookDetailPage';
import BookInfoCard from '@components/bookDetailPage/BookInfoCard';
import ProsAndCons from '@components/bookDetailPage/ProsAndCons';
import { reviews } from '@data/dummyData/homeDummy';
import BookReview from '@components/home/BookReview';
import { recommendBookDummy } from '@data/dummyData/recommendDummy';
import useStore from 'store/store';
import { StyledLink } from '@styles/GlobalStyles';

interface Props {
  params: {
    slug: string;
  };
}

function BookDetailPage({ params: { slug } }: Props) {
  const { user, setIsOpenLoginPopUp } = useStore();
  const data = recommendBookDummy.find((book) => book.id === slug)!;

  const handleReviewClick = () => {
    if (!user) {
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
          <S.LinkWrapper onClick={handleReviewClick}>
            {user ? (
              <StyledLink
                href={`/new-review?step=1&selectedBook=${JSON.stringify(data)}`}
                passHref
              >
                <S.ReviewButton type='button'>리뷰 작성하기</S.ReviewButton>
              </StyledLink>
            ) : (
              <S.ReviewButton type='button'>리뷰 작성하기</S.ReviewButton>
            )}
          </S.LinkWrapper>
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
