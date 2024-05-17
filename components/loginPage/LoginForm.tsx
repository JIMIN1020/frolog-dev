'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';
import { StyledCheckbox, StyledInput } from '@styles/GlobalStyles';
import { dummyUsers } from '@data/dummyData/dummyUsers';
import noSeepw from 'public/icons/signUp/noSeepw.svg';
import seepw from 'public/icons/signUp/seepw.svg';

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
  const [loginSuccess, setLoginSuccess] = useState(false); // 로그인 성공 여부 저장.
  const [showPassword, setShowPassword] = useState(false); // 비밀번호 표시 상태 추가
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema), mode: 'onSubmit' });

  const onSubmitHandler = async (data: FormValues) => {
    try {
      // 더미 데이터와 비교하여 로그인 처리
      const user = dummyUsers.find(
        (user) => user.email === data.email && user.password === data.password
      );

      if (!user) {
        throw new Error('이메일 또는 비밀번호를 확인해주세요!');
      }

      // 토큰 받아오기 (여기서는 더미 토큰을 사용)
      const token = 'dummy-jwt-token';

      // 로컬 스토리지에 토큰 저장
      localStorage.setItem('token', token);

      setLoginSuccess(true);
    } catch (error) {
      console.error('Error:', error);
      if (error instanceof Error) {
        setGeneralError(error.message);
      } else {
        setGeneralError('예상치 못한 오류가 발생했습니다');
      }
    }
  };

  useEffect(() => {
    if (loginSuccess) {
      router.push('/');
    }
  }, [loginSuccess, router]);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

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
        <PasswordInputContainer>
          <StyledInput
            id='password'
            type={showPassword ? 'text' : 'password'}
            placeholder='비밀번호'
            {...register('password')}
          />
          <ToggleIcon
            src={showPassword ? seepw : noSeepw}
            alt='Toggle password visibility'
            onClick={togglePasswordVisibility}
          />
        </PasswordInputContainer>
        {errors.password && (
          <ErrorMessage1>{errors.password.message}</ErrorMessage1>
        )}
      </InputContainer>
      <LabelContainer>
        <StyledCheckbox type='checkbox' />
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

const PasswordInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const ToggleIcon = styled(Image)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
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
