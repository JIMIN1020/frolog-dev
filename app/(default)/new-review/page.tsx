'use client';

import React, { useState } from 'react';
import { userTestData } from 'mock/testData/user';
import { useMockData } from 'mock/MockData';
import * as S from '@styles/pages/newReviewPage';
import { ICONS } from 'constants/icon';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
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
  const { updateReview } = useMockData();
  const [step, setStep] = useState(1); // 리뷰 작성 단계 관리를 위한 step

  /* ----- react-hook-form을 이용한 form 생성 ----- */
  const methods = useForm<ReviewFormType>({
    mode: 'onChange',
    defaultValues: {
      rating: 0,
      oneLiner: '',
      review: '',
      pros: [],
      cons: [],
    },
  });

  /* ----- 폼 제출 처리 ----- */
  const onSubmit = () => {
    // 서버로 데이터 전송 로직 구현
    const data = methods.getValues();

    const newReviewData = {
      id: `my-review-${Date.now()}`,
      user: userTestData,
      bookImage: selectedBook.img,
      bookName: selectedBook.name,
      bookAuthor: selectedBook.author,
      ...data,
      commentsCount: 3,
    };

    updateReview(newReviewData);
    router.push('/review-finish');
  };

  return (
    <S.PageContainer>
      <S.Header>
        <S.CloseButton href='/'>
          <S.CloseIcon
            src={ICONS.newReview.close}
            alt='close'
            width={59}
            height={59}
          />
        </S.CloseButton>
        <S.Title>새 리뷰</S.Title>
      </S.Header>
      {/* react-hook-form의 FormProvider */}
      <FormProvider {...methods}>
        <S.Form>
          {/* 단계별로 표시될 컴포넌트들 조건부 렌더링 */}
          {step === 1 && (
            <ReviewStep1Page selectedBook={selectedBook} setStep={setStep} />
          )}
          {step === 2 && <ReviewStep2Page onSubmit={onSubmit} />}
        </S.Form>
      </FormProvider>
    </S.PageContainer>
  );
}

export default NewReviewPage;
