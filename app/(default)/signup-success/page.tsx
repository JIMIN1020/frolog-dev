'use client';

import React from 'react';
import * as S from '@styles/pages/signup-successPage';
import { useRouter } from 'next/navigation';
import { ICONS } from 'constants/icon';

function SignupSuccess() {
  return (
    <S.Container>
      <S.Title>가입 완료!</S.Title>
      <S.Logo
        src={ICONS.home.frologLogo}
        alt='Frolog Logo'
        width={160}
        height={160}
      />
      <S.MessageContainer>
        <S.lQuote
          src={ICONS.singUp.leftq}
          alt='Left quote'
          width={59}
          height={59}
        />
        <S.Message>
          00님의 <br />
          독서 성향을 알아보기 위해,
          <br />
          간단하게 7가지만 물어볼게요.
        </S.Message>
        <S.rQuote
          src={ICONS.singUp.rightq}
          alt='Right quote'
          width={16}
          height={14}
        />
      </S.MessageContainer>
      <StartButton />
    </S.Container>
  );
}

export default SignupSuccess;
