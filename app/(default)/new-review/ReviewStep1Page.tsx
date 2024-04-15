'use client';

import React, { useState } from 'react';
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
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

function ReviewStep1Page({ selectedBook, setStep }: ReviewStep1PageProps) {
  const {
    watch,
    formState: { errors },
  } = useFormContext();

  const router = useRouter();
  const [validationError, setValidationError] = useState<string>('');

  /* ----- 다음 단계 이동 함수 ----- */
  const handleNext = () => {
    // 에러 있는지 체크
    if (errors.oneLiner?.message?.toString()) {
      setValidationError(errors.oneLiner?.message?.toString());
    } else if (errors.review?.message?.toString()) {
      setValidationError(errors.review?.message?.toString());
    } else {
      // 에러 없는 경우 다음 단계로
      setStep((prev: number) => prev + 1);
    }
  };

  return (
    <S.Container>
      {selectedBook && (
        <BookImage
          imageUrl={selectedBook.img}
          onChangeClick={() => router.push('/search-for-review')}
        />
      )}
      <Rating />
      <OneLiner />
      <Review />
      <S.ValidationError>{validationError}</S.ValidationError>
      <StyledButton
        type='button'
        disabled={!watch('oneLiner') && !watch('review')}
        $color='key_color'
        onClick={handleNext}
      >
        다음
      </StyledButton>
    </S.Container>
  );
}

export default ReviewStep1Page;
