'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useFormContext } from 'react-hook-form';
import { SignUpFormValues } from '@components/signUpPage/form/SignupFormSchema';
import NextButton from '@components/signUpPage/NextButton';
import styled from 'styled-components';
import useStore from 'store/store';
import { setCookie } from 'cookies-next';
import { SignUpContainer, StepTitle } from '@styles/components/common/signUp';
import Nickname from './Nickname';
import JobSelector from './JobSelector';
import Gender from './Gender';
import BirthDate from './BirthDate';

function Step4() {
  const { setUser } = useStore();
  const { trigger, watch, getValues } = useFormContext<SignUpFormValues>();
  const router = useRouter();

  const onClickSubmit = async () => {
    const isValid = await trigger([
      'nickname',
      'job.name',
      'gender',
      'birthDate.date',
    ]);

    if (isValid) {
      const data = getValues(); // 전체 폼 데이터 가져옴
      console.log(data); // TODO: 서버로 데이터 전송

      // token cookie에 저장 - redirect 처리용
      setCookie('accessToken', 'access', { maxAge: 3600 });

      // zustand store에 유저 정보 저장
      setUser({
        id: 'test-user',
        name: 'test',
        accessToken: 'access',
        refreshToken: 'refresh',
      });

      router.push(`/signup?step=5&name=${watch('nickname')}`);
    }
  };

  return (
    <SignUpContainer>
      <MainContent>
        <StepTitle>
          맞춤 혜택을 받기 위한,
          <br />
          상세정보를 입력해주세요
        </StepTitle>
        <Inputs>
          <Nickname />
          <JobSelector />
          <Gender />
          <BirthDate />
        </Inputs>
      </MainContent>
      <NextButton onClick={onClickSubmit}>가입완료</NextButton>
    </SignUpContainer>
  );
}

export default Step4;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Inputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
