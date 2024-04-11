import React from 'react';
import * as S from '@styles/components/home/bookReview';
import { BookReviewData } from '@data/dummyData/homeDummy';
import ProfileBar from '../common/ProfileBar';
import Content from './Content';
import BottomBar from '../common/BottomBar';

interface BookReviewProps {
  reviewData: BookReviewData;
}

function BookReview({ reviewData }: BookReviewProps) {
  return (
    <S.ReviewContainer>
      <ProfileBar user={reviewData.user} popUp />
      <Content reviewData={reviewData} />
      <BottomBar commentsCount={reviewData.commentsCount} />
      <S.BottomGreenBar /> {/** 위치 수정 */}
    </S.ReviewContainer>
  );
}

export default BookReview;
