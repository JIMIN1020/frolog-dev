'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useFormContext } from 'react-hook-form';
import { SignUpFormValues } from '@components/signUpPage/SignupFormSchema';
import NextButton from '@components/signUpPage/NextButton';
import ProgressBar from '@components/frologTestPage/ProgressBar';
import * as S from '@styles/pages/signUp-2';
import exit from 'public/icons/signUp/exit.svg';

function Step2() {
  const router = useRouter();
  const {
    register,
    trigger,
    formState: { errors },
  } = useFormContext<SignUpFormValues>();
  const [isEmailVerified, setEmailVerified] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [inputCode, setInputCode] = useState('');
  const [timeLeft, setTimeLeft] = useState(600);
  const [isTimerActive, setTimerActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTimerActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setTimerActive(false);
      setErrorMessage('인증시간이 지났습니다! 다시 인증해주세요!🥹');
      setSuccessMessage('');
    }
    return () => clearInterval(timer);
  }, [isTimerActive, timeLeft]);

  const sendVerificationCode = async () => {
    const isValid = await trigger('email');
    if (isValid) {
      setVerificationCode('123456'); // 예시로 '123456'을 인증 코드로 설정
      setTimerActive(true);
      setErrorMessage('');
      setSuccessMessage('사용할 수 있는 이메일입니다.');
    } else {
      setSuccessMessage('');
    }
  };

  const verifyCode = () => {
    if (verificationCode === inputCode) {
      setEmailVerified(true);
      setErrorMessage('');
      setSuccessMessage('이메일이 인증되었습니다.');
    } else if (timeLeft > 0) {
      setErrorMessage('인증번호가 올바르지 않습니다.');
      setSuccessMessage('');
    }
  };

  const onClickNext = async () => {
    const isValid = await trigger('email');
    if (isValid && isEmailVerified) {
      router.push('/signup/step3');
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>Frolog</S.Title>
        <S.ExitImg
          src={exit}
          alt='exit'
          onClick={() => router.push('/login')}
        />
      </S.Header>
      <ProgressBar currentStep={2} totalSteps={4} />
      <S.MainContent>
        <S.Label>
          로그인에 사용할
          <br /> 이메일을 입력해주세요
        </S.Label>
        <S.InputWrapper>
          <S.EmailLabelWrapper>
            <S.EmailLabel>이메일</S.EmailLabel>
            <S.RequiredMark>*</S.RequiredMark>
          </S.EmailLabelWrapper>
          <S.EmailInput
            placeholder='이메일을 입력하세요'
            {...register('email', {
              required: '이메일을 입력하세요',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: '이메일 형식이 맞지 않습니다.',
              },
            })}
          />
          {errors.email && (
            <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
          )}
          {successMessage && (
            <S.SuccessMessage>{successMessage}</S.SuccessMessage>
          )}
          <S.EmailCertifyButton onClick={sendVerificationCode}>
            인증번호 요청
          </S.EmailCertifyButton>
        </S.InputWrapper>
        {isTimerActive && (
          <S.InputWrapperRow>
            <S.CertifyInputWrapper>
              <S.CertifyInput
                placeholder='인증번호를 입력하세요'
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
              />
              <S.Timer>
                {Math.floor(timeLeft / 60)}:
                {timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
              </S.Timer>
            </S.CertifyInputWrapper>
            {timeLeft > 0 ? (
              <S.ConfirmButton onClick={verifyCode}>확인</S.ConfirmButton>
            ) : (
              <S.ConfirmButton onClick={sendVerificationCode}>
                재요청
              </S.ConfirmButton>
            )}
          </S.InputWrapperRow>
        )}
        {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
      </S.MainContent>
      <NextButton onClick={onClickNext} disabled={!isEmailVerified}>
        다음
      </NextButton>
    </S.Container>
  );
}

export default Step2;
