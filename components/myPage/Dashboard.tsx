import React from 'react';
import { useMockData } from 'mock/MockData';
import * as S from '@styles/components/myPage/dashboard';
import myReviewIcon from 'public/icons/mypage/my-review-icon.svg';
import likeReviewIcon from 'public/icons/mypage/like-review-icon.svg';
import likeBookIcon from 'public/icons/mypage/like-book-icon.svg';
import likeWellIcon from 'public/icons/mypage/like-well-icon.svg';
import DashboardItem from './DashboardItem';

export default function Dashboard() {
  const { review } = useMockData();
  return (
    <S.Container>
      <DashboardItem
        iconUrl={myReviewIcon}
        title='내가 쓴 리뷰'
        count={review.length}
      />
      <DashboardItem iconUrl={likeReviewIcon} title='좋아요한 리뷰' count={3} />
      <DashboardItem iconUrl={likeBookIcon} title='좋아요한 책' count={2} />
      <DashboardItem iconUrl={likeWellIcon} title='좋아요한 우물' count={7} />
    </S.Container>
  );
}
