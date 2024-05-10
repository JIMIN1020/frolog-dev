'use client';

import React from 'react';

import * as S from '@styles/pages/signup-successPage';
import frologLogo from 'public/icons/home/frologlogo.svg';
import leftq from 'public/icons/signUp/leftq.svg';
import rightq from 'public/icons/signUp/rightq.svg';
import { useRouter } from 'next/navigation';

function SignupSuccess() {
  const router = useRouter();

  const goToTest = () => {
    router.push('/frolog-test');
  };

  return (
    <S.Container>
      <S.Title>가입 완료!</S.Title>
      <S.Logo src={frologLogo} alt='Frolog Logo' />
      <S.MessageContainer>
        <S.lQuote src={leftq} alt='Left quote' />
        <S.Message>
          간단한 독서 성향 테스트를 통해
          <br />
          맞춤 독서 성향에 따른 서비스를
          <br />
          이용하실 수 있어요!
        </S.Message>
        <S.rQuote src={rightq} alt='Right quote' />
      </S.MessageContainer>
      <S.StartButton onClick={goToTest}>테스트 시작하기</S.StartButton>
    </S.Container>
  );
}

export default SignupSuccess;
