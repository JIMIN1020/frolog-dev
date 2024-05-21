'use client';

import CommonPopUp from '@components/common/popUp/CommonPopUp';
import Step1 from '@components/resetPasswordPage/Step1';
import Step2 from '@components/resetPasswordPage/Step2';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components';

export interface PasswordFormType {
  email: string;
  password: string;
  passwordCheck: string;
}

function PasswordResetPage() {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const methods = useForm<PasswordFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const step = parseInt(useSearchParams().get('step')!, 10);
  const { handleSubmit } = methods;

  const handleFinishReset = (data: PasswordFormType) => {
    // api 요청
    console.log(data);

    // 완료 팝업
    setOpen(true);
  };

  return (
    <FormProvider {...methods}>
      <Container onSubmit={handleSubmit(handleFinishReset)}>
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
      </Container>
      {open && (
        <CommonPopUp
          title='비밀번호 재설정 완료'
          text={<>비밀번호가 정상적으로 재설정되었습니다.</>}
          btnText='로그인하러 가기'
          handleClick={() => router.push('/login')}
          hasButton={false}
        />
      )}
    </FormProvider>
  );
}

export default PasswordResetPage;

const Container = styled.form`
  width: 100%;
  height: fit-content;
  min-height: calc(var(--vh, 1vh) * 100 - 82px);

  display: flex;
  flex-direction: column;
`;
