'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFormContext, Controller } from 'react-hook-form';
import { SignUpFormValues } from '@components/signUpPage/SignupFormSchema';
import NextButton from '@components/signUpPage/NextButton';
import ProgressBar from '@components/frologTestPage/ProgressBar';
import * as S from '@styles/pages/signUp-3';
import exit from 'public/icons/signUp/exit.svg';
import noSeepw from 'public/icons/signUp/noSeepw.svg';
import seepw from 'public/icons/signUp/seepw.svg';

function Step3() {
  const router = useRouter();
  const { control, trigger, watch } = useFormContext<SignUpFormValues>();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);

  const password = watch('password') || '';
  const passwordCheck = watch('passwordCheck') || '';

  const onClickNext = async () => {
    const isValid = await trigger(['password', 'passwordCheck']);
    if (isValid) {
      router.push('/signup/step4');
    }
  };

  const isUpperCase = /[A-Z]/.test(password);
  const isLowerCase = /[a-z]/.test(password);
  const isDigit = /[0-9]/.test(password);
  const isSpecialChar = /[!@#$%^&*]/.test(password);
  const isValidLength = password.length >= 8 && password.length <= 20;

  const isPasswordValid =
    isUpperCase && isLowerCase && isDigit && isSpecialChar && isValidLength;

  return (
    <S.Container>
      <S.Header>
        <S.Title>Frolog</S.Title>
        <S.ExitImg src={exit} alt='exit' onClick={() => router.push('/')} />
      </S.Header>
      <ProgressBar currentStep={3} totalSteps={4} />
      <S.MainContent>
        <S.Label>
          로그인에 사용할
          <br /> 비밀번호를 입력해주세요
        </S.Label>
        <S.InputWrapper>
          <S.LabelWrapper>
            <S.PWLabel>비밀번호</S.PWLabel>
            <S.RequiredMark>*</S.RequiredMark>
          </S.LabelWrapper>
          <Controller
            name='password'
            control={control}
            render={({ field }) => (
              <S.PasswordInputWrapper>
                <S.PasswordInput
                  placeholder='비밀번호를 입력하세요'
                  type={showPassword ? 'text' : 'password'}
                  {...field}
                />
                <S.TogglePasswordVisibility
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <S.Icon
                    src={showPassword ? seepw : noSeepw}
                    alt='Toggle Password Visibility'
                  />
                </S.TogglePasswordVisibility>
              </S.PasswordInputWrapper>
            )}
          />
          <S.PasswordRequirements>
            <S.Requirement valid={isUpperCase && isLowerCase}>
              암호 대소문자 ✓
            </S.Requirement>
            <S.Requirement valid={isDigit}>숫자 ✓</S.Requirement>
            <S.Requirement valid={isSpecialChar}>특수문자 ✓</S.Requirement>
            <S.Requirement valid={isValidLength}>8-20자 이내 ✓</S.Requirement>
          </S.PasswordRequirements>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.LabelWrapper>
            <S.PWLabel>비밀번호 확인</S.PWLabel>
            <S.RequiredMark>*</S.RequiredMark>
          </S.LabelWrapper>
          <Controller
            name='passwordCheck'
            control={control}
            render={({ field }) => (
              <S.PasswordInputWrapper>
                <S.PasswordInput
                  placeholder='비밀번호를 다시 입력하세요'
                  type={showPasswordCheck ? 'text' : 'password'}
                  {...field}
                />
                <S.TogglePasswordVisibility
                  onClick={() => setShowPasswordCheck(!showPasswordCheck)}
                >
                  <S.Icon
                    src={showPasswordCheck ? seepw : noSeepw}
                    alt='Toggle Password Visibility'
                  />
                </S.TogglePasswordVisibility>
              </S.PasswordInputWrapper>
            )}
          />
          {password !== passwordCheck && passwordCheck.length > 0 && (
            <S.ErrorMessage>비밀번호가 일치하지 않습니다.</S.ErrorMessage>
          )}
        </S.InputWrapper>
      </S.MainContent>
      <NextButton
        onClick={onClickNext}
        disabled={!isPasswordValid || password !== passwordCheck}
      >
        다음
      </NextButton>
    </S.Container>
  );
}

export default Step3;
