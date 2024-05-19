'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { useFormContext } from 'react-hook-form';
import { SignUpFormValues } from '@components/signUpPage/form/SignupFormSchema';
import NextButton from '@components/signUpPage/NextButton';
import {
  InputTitle,
  InputContainer,
  SignUpContainer,
  StepTitle,
} from '@styles/components/common/signUp';
import PasswordInput from './PasswordInput';
import PasswordValidation from './PasswordValidation';

function Step3() {
  const router = useRouter();
  const { trigger, watch } = useFormContext<SignUpFormValues>();
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);

  const password = watch('password') || '';
  const passwordCheck = watch('passwordCheck') || '';

  const onClickNext = async () => {
    const isValid = await trigger(['password', 'passwordCheck']);
    if (isValid) {
      router.push('/signup?step=4');
    }
  };

  return (
    <SignUpContainer>
      <MainContent>
        <StepTitle>
          로그인에 사용할
          <br /> 비밀번호를 입력해주세요
        </StepTitle>
        <Inputs>
          <InputContainer>
            <InputTitle>
              비밀번호 <small>*</small>
            </InputTitle>
            <PasswordValidation setIsPasswordValid={setIsPasswordValid} />
          </InputContainer>
          <InputContainer>
            <InputTitle>
              비밀번호 확인 <small>*</small>
            </InputTitle>

            <PasswordInput
              placeholder='비밀번호를 다시 입력하세요'
              name='passwordCheck'
            />
          </InputContainer>
        </Inputs>
        {password !== passwordCheck && passwordCheck.length > 0 && (
          <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
        )}
      </MainContent>

      <NextButton
        onClick={onClickNext}
        disabled={!isPasswordValid || password !== passwordCheck}
      >
        다음
      </NextButton>
    </SignUpContainer>
  );
}

export default Step3;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error_red};
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin-top: 10px;
`;

const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
