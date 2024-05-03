'use client';

import React, { useState } from 'react';
import * as S from '@styles/pages/reviewStep2Page';
import { ValidationError } from '@styles/pages/reviewStep1Page';
import { useFormContext } from 'react-hook-form';
import { consData, prosData } from '../../../data/dummyData/prosAndConsDummy';
import TagContainer from '../../../components/newReviewPage/TagContainer';

function ReviewStep2Page({ onSubmit }: { onSubmit: () => void }) {
  const [validationError, setValidationError] = useState<string>('');
  const { watch } = useFormContext();

  /* ----- 태그 유효성 확인 및 폼 제출 처리 함수 ----- */
  const tagValidation = () => {
    if (watch('pros').length === 0 || watch('cons').length === 0) {
      setValidationError('태그를 최소 1개 이상 선택해주세요');
    } else {
      onSubmit();
    }
  };

  return (
    <S.Container>
      <TagContainer tagData={prosData} type='pros' />
      <TagContainer tagData={consData} type='cons' />
      <S.ButtonContainer>
        <ValidationError>{validationError}</ValidationError>
        <S.Button type='button' onClick={tagValidation}>
          리뷰 저장하기
        </S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
}

export default ReviewStep2Page;
