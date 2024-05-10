'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, FormProvider } from 'react-hook-form';
import * as S from '@styles/pages/signUpPage';
import SignUpStep1Page from './signUpStep1Page';
import SignUpStep2Page from './signUpStep2Page';

interface SignUpFormData {
  email: string;
  password: string;
  nickname: string;
  occupation?: string;
  gender?: string;
  birthdate?: Date | null;
}

function SignUpPage() {
  const [step, setStep] = useState(1); // 회원가입 단계를 위한 상태
  const router = useRouter();

  /* ----- react-hook-form을 이용한 form 생성 ----- */
  const methods = useForm<SignUpFormData>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      nickname: '',
      occupation: '',
      gender: '',
      birthdate: null,
    },
  });

  // 폼 제출 완료 처리
  const onSubmit = () => {
    // 서버로 데이터 전송 로직 구현
    const data = methods.getValues();
    console.log(data);
    router.push('/signup-success');
  };

  return (
    <S.Container>
      <S.Title>Frolog</S.Title>
      <S.SubTitle>회원가입</S.SubTitle>
      <S.Description>회원이 되어 다양한 혜택을 경험해보세요!</S.Description>
      <FormProvider {...methods}>
        <S.Form>
          {step === 1 && <SignUpStep1Page setStep={setStep} />}
          {step === 2 && <SignUpStep2Page onSubmit={onSubmit} />}
        </S.Form>
      </FormProvider>
    </S.Container>
  );
}

export default SignUpPage;
