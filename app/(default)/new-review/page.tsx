'use client';

import React, { useEffect } from 'react';
import { userTestData } from 'mock/testData/user';
import { useMockData } from 'mock/MockData';
import * as S from '@styles/pages/newReviewPage';
import ProgressBar from '@components/frologTestPage/ProgressBar';
import { ICONS } from 'constants/icon';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import ReviewStep1Page from '../../../components/newReviewPage/ReviewStep1Page';
import ReviewStep2Page from '../../../components/newReviewPage/ReviewStep2Page';

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
  const step = parseInt(searchParams.get('step') || '1', 10);
  const { updateReview } = useMockData();

  useEffect(() => {
    sessionStorage.setItem(
      'selectedBook',
      searchParams?.get('selectedBook') as string
    );
  }, []);

  /* ----- react-hook-form을 이용한 form 생성 ----- */
  const methods = useForm<ReviewFormType>({
    mode: 'onChange',
    defaultValues: {
      rating: 3,
      oneLiner: '',
      review: '',
      pros: [],
      cons: [],
    },
  });

  /* ----- 폼 제출 처리 ----- */
  const onSubmit = () => {
    router.push('/new-review?step=3');

    const selectedBook = JSON.parse(
      sessionStorage.getItem('selectedBook')! as string
    );

    if (selectedBook === null) {
      // 실패 처리
    }

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
    sessionStorage.removeItem('selectedBook');

    // 임시
    setTimeout(() => {
      router.push('/review-finish');
    }, 1000);
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
      <ProgressBar currentStep={step} totalSteps={3} />
      {/* react-hook-form의 FormProvider */}
      <FormProvider {...methods}>
        <S.Form>
          {/* 단계별로 표시될 컴포넌트들 조건부 렌더링 */}
          {step === 1 && <ReviewStep1Page selectedBook={selectedBook} />}
          {step >= 2 && <ReviewStep2Page onSubmit={onSubmit} />}
        </S.Form>
      </FormProvider>
    </S.PageContainer>
  );
}

export default NewReviewPage;
