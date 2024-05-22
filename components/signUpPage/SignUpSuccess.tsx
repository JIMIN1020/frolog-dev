'use client';

import React from 'react';
import * as S from '@styles/pages/signup-successPage';
import { SignUpContainer } from '@styles/components/common/signUp';
import { ICONS } from 'constants/icon';
import { useRouter, useSearchParams } from 'next/navigation';
import NextButton from './NextButton';

function SignupSuccess() {
  const router = useRouter();
  const name = useSearchParams().get('name')!;

  return (
    <SignUpContainer>
      <S.Blank />
      <S.Wrapper>
        <S.Title initial={{ scale: 0 }} animate={{ scale: 1 }}>
          환영합니다!
        </S.Title>
        <S.Logo
          src={ICONS.home.frologLogo}
          alt='Frolog Logo'
          width={160}
          height={200}
        />
        <S.MessageContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.3 }}
        >
          <S.lQuote
            src={ICONS.singUp.leftq}
            alt='Left quote'
            width={20}
            height={20}
          />
          <S.Message>
            {name}님 <br />
            독서 성향을 알아보기 위해,
            <br />
            간단하게 7가지만 물어볼게요.
          </S.Message>
          <S.rQuote
            src={ICONS.singUp.rightq}
            alt='Right quote'
            width={20}
            height={20}
          />
        </S.MessageContainer>
      </S.Wrapper>
      <NextButton onClick={() => router.push('/frolog-test?step=1')}>
        내 독서성향 알아보기
      </NextButton>
    </SignUpContainer>
  );
}

export default SignupSuccess;
