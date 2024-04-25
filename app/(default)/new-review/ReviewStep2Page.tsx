'use client';

import React from 'react';
import * as S from '@styles/pages/reviewStep2Page';
import { useFormContext } from 'react-hook-form';
import { consData, prosData } from '../../../data/dummyData/prosAndConsDummy';
import TagContainer from '../../../components/newReviewPage/TagContainer';

function ReviewStep2Page() {
  const { watch } = useFormContext();
  return (
    <S.Container>
      <TagContainer tagData={prosData} type='pros' />
      <TagContainer tagData={consData} type='cons' />
      <S.ButtonContainer>
        <S.Button type='submit' disabled={!watch('pros') || !watch('cons')}>
          리뷰 저장하기
        </S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
}

export default ReviewStep2Page;
