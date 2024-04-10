'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import * as S from '@styles/pages/reviewFinishPage';
import frologLogo from 'public/icons/home/frologlogo.svg';

function ReviewFinishPage() {
  const router = useRouter();

  return (
    <S.Container>
      <S.LogoAndMessageContainer>
        <S.Message>저장완료!</S.Message>
        <S.Logo src={frologLogo} alt='Frolog Logo' />
      </S.LogoAndMessageContainer>

      <S.ButtonContainer>
        <S.Button onClick={() => router.push('/')}>홈 화면 가기</S.Button>
        <S.Button onClick={() => router.push('/my-review')}>
          내 리뷰 보러 가기
        </S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
}

export default ReviewFinishPage;
