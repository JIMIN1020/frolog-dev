import NextButton from '@components/signUpPage/NextButton';
import PasswordInput from '@components/signUpPage/step3/PasswordInput';
import PasswordValidation from '@components/signUpPage/step3/PasswordValidation';
import {
  InputContainer,
  InputTitle,
  SignUpContainer,
  StepTitle,
  TopWrapper,
} from '@styles/components/common/signUp';
import { PasswordFormType } from 'app/(logo)/reset-password/page';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

function Step2() {
  const { watch } = useFormContext<PasswordFormType>();
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);

  const password = watch('password') || '';
  const passwordCheck = watch('passwordCheck') || '';

  return (
    <SignUpContainer>
      <TopWrapper>
        <StepTitle>
          재설정할
          <br />
          비밀번호를 입력하세요
        </StepTitle>
        <Inputs>
          <InputContainer>
            <InputTitle>
              비밀번호 <small>*</small>
            </InputTitle>
            <PasswordValidation
              setIsPasswordValid={setIsPasswordValid}
              formType='password'
            />
          </InputContainer>
          <InputContainer>
            <InputTitle>
              비밀번호 확인 <small>*</small>
            </InputTitle>

            <PasswordInput
              placeholder='비밀번호를 다시 입력하세요'
              name='passwordCheck'
              formType='password'
            />
          </InputContainer>
        </Inputs>
      </TopWrapper>
      <NextButton
        type='submit'
        disabled={!isPasswordValid || password !== passwordCheck}
      >
        완료
      </NextButton>
    </SignUpContainer>
  );
}

export default Step2;

const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
