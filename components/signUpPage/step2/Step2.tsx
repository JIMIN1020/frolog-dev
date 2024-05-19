'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import NextButton from '@components/signUpPage/NextButton';
import { SignUpContainer, StepTitle } from '@styles/components/common/signUp';
import styled from 'styled-components';
import EmailForm from './EmailForm';

function Step2() {
  const router = useRouter();
  const [isEmailVerified, setEmailVerified] = useState(false);

  const onClickNext = async () => {
    if (isEmailVerified) {
      router.push('/signup?step=3');
    }
  };

  return (
    <SignUpContainer>
      <MainContent>
        <StepTitle>
          로그인에 사용할
          <br /> 이메일을 입력해주세요
        </StepTitle>
        <EmailForm
          isEmailVerified={isEmailVerified}
          setEmailVerified={setEmailVerified}
        />
      </MainContent>
      <NextButton onClick={onClickNext} disabled={!isEmailVerified}>
        다음
      </NextButton>
    </SignUpContainer>
  );
}

export default Step2;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
