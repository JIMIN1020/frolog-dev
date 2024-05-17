'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';
import { StyledCheckbox, StyledInput } from '@styles/GlobalStyles';

interface FormValues {
  email: string;
  password: string;
  rememberMe?: boolean;
}

// 이메일 유효성 검사를 위한 스키마
const schema = yup
  .object({
    email: yup
      .string()
      .required('이메일을 입력해주세요')
      .email('이메일 형식이 아닙니다.'),
    password: yup.string().required('비밀번호를 입력해주세요'),
    rememberMe: yup.boolean(),
  })
  .required();

function LoginForm() {
  const router = useRouter();
  const [generalError, setGeneralError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false); // TODO: 나중에 이부분 관련해서 수정해야 함. 로그인 성공시, 실패시 화면 다르게 보이도록.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema), mode: 'onSubmit' });

  const onSubmitHandler = async (data: FormValues) => {
    try {
      // TODO: 백엔드 API 호출 구현 예정
      // 로그인 시뮬레이션: 더미 데이터로 체크함.
      if (
        data.email === 'frolog@naver.com' &&
        data.password === 'frolog1234!'
      ) {
        setLoginSuccess(true);
      } else {
        throw new Error('로그인 실패.');
      }
    } catch (error) {
      setGeneralError('이메일 또는 비밀번호를 확인해주세요');
    }
  };

  useEffect(() => {
    if (loginSuccess) {
      router.push('/');
    }
  }, [loginSuccess, router]);

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <InputContainer>
        <StyledInput
          id='email'
          type='email'
          placeholder='이메일'
          {...register('email')}
        />
        {errors.email && <ErrorMessage1>{errors.email.message}</ErrorMessage1>}
        <StyledInput
          id='password'
          type='password'
          placeholder='비밀번호'
          {...register('password')}
        />
        {errors.password && (
          <ErrorMessage1>{errors.password.message}</ErrorMessage1>
        )}
      </InputContainer>
      <LabelContainer>
        <StyledCheckbox
          type='checkbox'
          id='rememberMe'
          {...register('rememberMe')}
        />
        <label htmlFor='rememberMe'>로그인 상태 유지</label>
      </LabelContainer>
      {generalError && <ErrorMessage2>{generalError}</ErrorMessage2>}
      <LoginButton type='submit'>로그인</LoginButton>
    </form>
  );
}

export default LoginForm;

const InputContainer = styled.div`
  width: 290px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-bottom: 14px;
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text_black};
  font-size: ${({ theme }) => theme.fontSize.base};
  margin-bottom: 10px;
`;


const LoginButton = styled.button`
  width: 288px;
  height: 44px;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.key_color};
  color: ${({ theme }) => theme.colors.text_white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 53px;
`;

const ErrorMessage1 = styled.small`
  display: block;
  color: red;
  font-size: ${({ theme }) => theme.fontSize.md};
`;

const ErrorMessage2 = styled.small`
  display: flex;
  justify-content: center;
  color: red;
  margin-top: 30px;
  margin-bottom: -30px;
  font-size: ${({ theme }) => theme.fontSize.md};
`;
