import BookReview from '@components/home/BookReview';
import { reviews } from '@data/dummyData/homeDummy';
import { GapContainer } from '@styles/GlobalStyles';
import React from 'react';

function page() {
  return (
    <GapContainer>
      {reviews.map((data) => (
        <BookReview key={data.id} reviewData={data} />
      ))}
    </GapContainer>
  );
}

export default page;
