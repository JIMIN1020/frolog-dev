import React from 'react';
import { ICONS } from 'constants/icon';
import * as S from '@styles/components/myPage/dashboard';
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
        iconUrl={ICONS.myPage.myReview}
        title='작성한 리뷰'
        count={data.my_review}
      />
      <DashboardItem
        iconUrl={ICONS.myPage.likeReview}
        title='좋아요한 리뷰'
        count={data.liked_review}
      />
      <DashboardItem
        iconUrl={ICONS.myPage.likeBook}
        title='좋아요한 책'
        count={data.liked_book}
      />
      <DashboardItem
        iconUrl={ICONS.myPage.likeWell}
        title='좋아요한 우물'
        count={data.liked_well}
      />
    </S.Container>
  );
}
