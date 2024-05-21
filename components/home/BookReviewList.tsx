'use client';

import React from 'react';
import useStore from 'store/store';
import * as S from '@styles/components/home/bookReviewList';
import { reviews } from '@data/dummyData/homeDummy';
import BookReview from './BookReview';
import BookRecommendation from '../searchPage/BookRecommendation';
import LoginPrompt from './LoginPrompt';

function BookReviewList() {
  const { user } = useStore();
  return (
    <S.BookReviewListContainer>
      {reviews.map((reviewData, index) => {
        if (reviewData.id === 'review4') {
          return (
            <>
              {!user && <LoginPrompt />}
              <React.Fragment key={reviewData.id}>
                <BookReview reviewData={reviewData} />
                {index === 0 && <BookRecommendation />}
              </React.Fragment>
            </>
          );
        }
        return (
          <React.Fragment key={reviewData.id}>
            <BookReview reviewData={reviewData} />
            {index === 0 && <BookRecommendation />}
          </React.Fragment>
        );
      })}
    </S.BookReviewListContainer>
  );
}

export default BookReviewList;
