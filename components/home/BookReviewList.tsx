import React from 'react';
import * as S from '@styles/components/home/bookReviewList';
import { reviews } from '@data/dummyData/homeDummy';
import BookReview from './BookReview';
import BookRecommendation from '../searchPage/BookRecommendation';
import LoginPrompt from './LoginPrompt';

function BookReviewList() {
  return (
    <S.BookReviewListContainer>
      <LoginPrompt />
      {reviews.map((reviewData, index) => (
        <React.Fragment key={reviewData.id}>
          <BookReview reviewData={reviewData} />
          {index === 0 && <BookRecommendation />}
        </React.Fragment>
      ))}
    </S.BookReviewListContainer>
  );
}

export default BookReviewList;
