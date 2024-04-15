'use client';

import React from 'react';
import styled from 'styled-components';
import myReviewIcon from 'public/icons/mypage/my-review-icon.svg';
import likeReviewIcon from 'public/icons/mypage/like-review-icon.svg';
import likeBookIcon from 'public/icons/mypage/like-book-icon.svg';
import likeWellIcon from 'public/icons/mypage/like-well-icon.svg';
import DashboardItem from './DashboardItem';

export default function Dashboard() {
  return (
    <Container>
      <DashboardItem iconUrl={myReviewIcon} title='내가 쓴 리뷰' count={12} />
      <DashboardItem iconUrl={likeReviewIcon} title='좋아요한 리뷰' count={3} />
      <DashboardItem iconUrl={likeBookIcon} title='좋아요한 책' count={2} />
      <DashboardItem iconUrl={likeWellIcon} title='좋아요한 우물' count={7} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;
