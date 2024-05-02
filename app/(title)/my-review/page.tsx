'use client';

import BookReview from '@components/home/BookReview';
import { GapContainer } from '@styles/GlobalStyles';
import { useMockData } from 'mock/MockData';
import React from 'react';

function MyReviewPage() {
  const { review } = useMockData();
  return (
    <GapContainer>
      {review.map((data: any) => (
        <BookReview key={data.id} reviewData={data} />
      ))}
    </GapContainer>
  );
}

export default MyReviewPage;
