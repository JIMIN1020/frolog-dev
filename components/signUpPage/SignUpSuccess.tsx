'use client';

import React from 'react';
import * as S from '@styles/pages/signup-successPage';
import frologLogo from 'public/icons/home/frologlogo.svg';
import leftq from 'public/icons/signUp/leftq.svg';
import rightq from 'public/icons/signUp/rightq.svg';
import StartButton from '@components/signUpPage/startButton';

interface SignupSuccessProps {
  nickname: string;
}

function SignupSuccess({ nickname }: SignupSuccessProps) {
  return (
    <S.Container>
      <S.Title>가입 완료!</S.Title>
      <S.Logo src={frologLogo} alt='Frolog Logo' />
      <S.MessageContainer>
        <S.lQuote src={leftq} alt='Left quote' />
        <S.Message>
          {nickname}님 <br />
          독서 성향을 알아보기 위해,
          <br />
          간단하게 7가지만 물어볼게요.
        </S.Message>
        <S.rQuote src={rightq} alt='Right quote' />
      </S.MessageContainer>
      <StartButton />
    </S.Container>
  );
}

export default SignupSuccess;
