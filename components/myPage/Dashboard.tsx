import React from 'react';
import * as S from '@styles/components/myPage/dashboard';
import myReviewIcon from 'public/icons/mypage/my-review-icon.svg';
import likeReviewIcon from 'public/icons/mypage/like-review-icon.svg';
import likeBookIcon from 'public/icons/mypage/like-book-icon.svg';
import likeWellIcon from 'public/icons/mypage/like-well-icon.svg';
import DashboardItem from './DashboardItem';

interface DashboardProps {
  data: {
    my_review: number;
    liked_review: number;
    liked_book: number;
    liked_well: number;
  };
}

export default function Dashboard({ data }: DashboardProps) {
  return (
    <S.Container>
      <DashboardItem
        iconUrl={myReviewIcon}
        title='작성한 리뷰'
        count={data.my_review}
      />
      <DashboardItem
        iconUrl={likeReviewIcon}
        title='좋아요한 리뷰'
        count={data.liked_review}
      />
      <DashboardItem
        iconUrl={likeBookIcon}
        title='좋아요한 책'
        count={data.liked_book}
      />
      <DashboardItem
        iconUrl={likeWellIcon}
        title='좋아요한 우물'
        count={data.liked_well}
      />
    </S.Container>
  );
}
