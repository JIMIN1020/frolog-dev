'use client';

import React from 'react';
import * as S from '@styles/pages/signUpPage';
import SignUpForm from '@components/signUpPage/signUpForm';

function SignUpPage() {
  return (
    <S.Container>
      <S.Title>Frolog</S.Title>
      <S.SubTitle>회원가입</S.SubTitle>
      <S.Description>회원이 되어 다양한 혜택을 경험해보세요!</S.Description>
      <SignUpForm />
    </S.Container>
  );
}

export default SignUpPage;
