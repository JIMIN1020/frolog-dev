'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

interface LoginFormProps {
  onSubmit: (data: {
    username: string;
    password: string;
    rememberMe: boolean;
  }) => void;
  onError: (error: string) => void;
}

interface FormValues {
  username: string;
  password: string;
  rememberMe: boolean;
}
function LoginForm({ onSubmit, onError }: LoginFormProps) {
  const router = useRouter();
  const [generalError, setGeneralError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false); // 나중에 변경해야 할 것임. 로그인 성공 상태 관리해서 페이지 이동해보기.
  const { register, handleSubmit } = useForm<FormValues>({ mode: 'onSubmit' });

  const onSubmitHandler = async (data: FormValues) => {
    try {
      // TODO: API 로그인 호출
      await onSubmit(data);
      setLoginSuccess(true);
    } catch (error) {
      setGeneralError('아이디/비밀번호를 확인해주세요');
      onError('아이디/비밀번호를 확인해주세요');
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
        <StyledInput id='username' type='text' placeholder='아이디' />
        <StyledInput id='password' type='password' placeholder='비밀번호' />
      </InputContainer>
      <LabelContainer>
        <label htmlFor='rememberMe'>
          <input type='checkbox' id='rememberMe' {...register('rememberMe')} />
          자동 로그인
        </label>
      </LabelContainer>

      {generalError && <ErrorMessage>{generalError}</ErrorMessage>}
      <LoginButton type='submit'>로그인</LoginButton>
    </form>
  );
}

export default LoginForm;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-bottom: 14px;
`;

const LabelContainer = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.text_black};
  font-size: ${({ theme }) => theme.fontSize.base};
`;
const StyledInput = styled.input`
  width: 288px;
  height: 44px;
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.text_lightgray};
  padding: 0 20px;
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

const ErrorMessage = styled.small`
  display: block;
  color: red;
  margin-top: -10px;
  margin-bottom: 10px;
`;
