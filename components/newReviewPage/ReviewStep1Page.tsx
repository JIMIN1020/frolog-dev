'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import * as S from '@styles/pages/reviewStep1Page';
import BookImage from '@components/newReviewPage/BookImage';
import OneLiner from '@components/newReviewPage/OneLiner';
import Review from '@components/newReviewPage/Review';
import { BookDataType } from '@data/dummyData/recommendDummy';
import Rating from '@components/newReviewPage/Rating';
import { StyledButton } from '@styles/GlobalStyles';

interface ReviewStep1PageProps {
  selectedBook: BookDataType;
}

function ReviewStep1Page({ selectedBook }: ReviewStep1PageProps) {
  const router = useRouter();
  const {
    watch,
    formState: { errors },
  } = useFormContext();

  /* ----- 다음 단계 이동 함수 ----- */
  const handleNext = () => {
    // 에러 없는 경우 다음 단계로
    router.push('/new-review?step=2');
  };

  return (
    <S.Container>
      <S.BookWrapper>
        {selectedBook && (
          <BookImage
            imageUrl={selectedBook.img}
            onChangeClick={() => router.push('/search-for-review')}
          />
        )}
        <h2>{selectedBook.name}</h2>
        <span>{selectedBook.author}</span>
      </S.BookWrapper>
      <Rating />
      <OneLiner />
      <Review />
      <StyledButton
        type='button'
        disabled={
          errors.oneLiner !== undefined ||
          errors.review !== undefined ||
          !watch('oneLiner') ||
          !watch('review')
        }
        $color='key_color'
        onClick={handleNext}
      >
        다음
      </StyledButton>
    </S.Container>
  );
}

export default ReviewStep1Page;
