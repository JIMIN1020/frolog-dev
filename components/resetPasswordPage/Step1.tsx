import NextButton from '@components/signUpPage/NextButton';
import EmailForm from '@components/signUpPage/step2/EmailForm';
import {
  SignUpContainer,
  StepTitle,
  TopWrapper,
} from '@styles/components/common/signUp';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function Step1() {
  const router = useRouter();
  const [isEmailVerified, setEmailVerified] = useState(false);

  return (
    <SignUpContainer>
      <TopWrapper>
        <StepTitle>
          비밀번호를 찾을
          <br />
          이메일을 입력하세요
        </StepTitle>
        <EmailForm
          isEmailVerified={isEmailVerified}
          setEmailVerified={setEmailVerified}
          formType='password'
        />
      </TopWrapper>
      <NextButton
        onClick={() => router.push('/reset-password?step=2')}
        disabled={!isEmailVerified}
      >
        다음
      </NextButton>
    </SignUpContainer>
  );
}

export default Step1;
