'use client';

import React, { useState } from 'react';
import * as S from '@styles/pages/newReviewPage';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import closeIcon from 'public/icons/newReview/close.svg';
import ReviewStep1Page from './ReviewStep1Page';
import ReviewStep2Page from './ReviewStep2Page';

interface ReviewFormType {
  rating: number;
  oneLiner: string;
  review: string;
  pros: number[];
  cons: number[];
}

function NewReviewPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedBook = JSON.parse(searchParams?.get('selectedBook') as string);
  const [step, setStep] = useState(1); // 리뷰 작성 단계 관리를 위한 step

  /* ----- react-hook-form을 이용한 form 생성 ----- */
  const methods = useForm<ReviewFormType>({
    mode: 'onChange',
    defaultValues: {
      rating: 0,
      oneLiner: '',
      review: '',
    },
  });
  const { handleSubmit } = methods;

  /* ----- 폼 제출 시 에러 처리 ----- */
  const onError = (error: any) => {
    console.log(error);
  };

  /* ----- 폼 제출 처리 ----- */
  const onSubmit = () => {
    // 서버로 데이터 전송 로직 구현
    router.push('/review-finish');
  };

  return (
    <S.PageContainer>
      <S.Header>
        <S.CloseButton href='/'>
          <S.CloseIcon src={closeIcon} alt='close' />
        </S.CloseButton>
        <S.Title>새 리뷰</S.Title>
      </S.Header>
      {/* react-hook-form의 FormProvider */}
      <FormProvider {...methods}>
        <S.Form onSubmit={handleSubmit(onSubmit, onError)}>
          {/* 단계별로 표시될 컴포넌트들 조건부 렌더링 */}
          {step === 1 && (
            <ReviewStep1Page selectedBook={selectedBook} setStep={setStep} />
          )}
          {step === 2 && <ReviewStep2Page />}
        </S.Form>
      </FormProvider>
    </S.PageContainer>
  );
}

export default NewReviewPage;
