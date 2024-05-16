'use client';

import BookReview from '@components/home/BookReview';
import { reviews } from '@data/dummyData/homeDummy';
import { GapContainer } from '@styles/GlobalStyles';
import { useMockData } from 'mock/MockData';
import React from 'react';

function ReviewsPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { slug } = params;
  const { review } = useMockData();
  const reviewData =
    slug === 'test-user' ? review : reviews.filter((data) => data.id === slug);

  return (
    <GapContainer>
      {reviewData.map((data: any) => (
        <BookReview key={data.id} reviewData={data} />
      ))}
    </GapContainer>
  );
}

export default ReviewsPage;
