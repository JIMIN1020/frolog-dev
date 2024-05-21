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
import { ICONS } from 'constants/icon';
import useStore from 'store/store';

interface FormValues {
  email: string;
  password: string;
  rememberMe?: boolean;
}

// 이메일 유효성 검사를 위한 스키마
const schema = yup
  .object({
    email: yup.string().required('이메일을 입력해주세요'),
    password: yup.string().required('비밀번호를 입력해주세요'),
    rememberMe: yup.boolean(),
  })
  .required();

function LoginForm() {
  const router = useRouter();
  const { setUser } = useStore();
  const [generalError, setGeneralError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false); // 로그인 성공 여부 저장.
  const [showPassword, setShowPassword] = useState(false); // 비밀번호 표시 상태 추가
  const [isSaved, setIsSaved] = useState(false); // 로그인 정보 저장 여부
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema), mode: 'onSubmit' });

  const onSubmitHandler = async (data: FormValues) => {
    try {
      // 더미 데이터와 비교하여 로그인 처리
      const user = dummyUsers.find(
        (user) => user.email === data.email && user.password === data.password
      );

      if (!user) {
        throw new Error('이메일 또는 비밀번호를 잘못 입력했습니다');
      }

      // 로그인 정보 저장 시
      if (isSaved) {
        localStorage.setItem('email', data.email);
        localStorage.setItem('password', data.password);
      }

      // zustand store에 유저 정보 저장
      setUser({
        id: 'test-user',
        name: 'test',
        accessToken: 'access',
        refreshToken: 'refresh',
      });

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

  useEffect(() => {
    if (localStorage.getItem('email')) {
      setValue('email', localStorage.getItem('email')!);
      setValue('password', localStorage.getItem('password')!);
      setIsSaved(true);
    }
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmitHandler)}>
      <Wrapper>
        <InputContainer>
          <StyledInput
            id='email'
            type='email'
            placeholder='이메일'
            {...register('email')}
          />
          <PasswordInputContainer>
            <StyledInput
              id='password'
              type={showPassword ? 'text' : 'password'}
              placeholder='비밀번호'
              {...register('password')}
            />
            <ToggleIcon
              src={showPassword ? ICONS.singUp.seepw : ICONS.singUp.noSeePw}
              alt='Toggle password visibility'
              onClick={togglePasswordVisibility}
              width={24}
              height={21}
            />
          </PasswordInputContainer>
        </InputContainer>
        <LabelContainer>
          <StyledCheckbox
            type='checkbox'
            checked={isSaved}
            onChange={(e) => setIsSaved(e.target.checked)}
          />
          <label htmlFor='rememberMe'>로그인 상태 유지</label>
        </LabelContainer>
      </Wrapper>
      <ButtonWrapper>
        <ErrorMessage>
          {errors.email?.message || errors.password?.message || generalError}
        </ErrorMessage>
        <LoginButton type='submit'>로그인</LoginButton>
      </ButtonWrapper>
    </FormContainer>
  );
}

export default LoginForm;

const FormContainer = styled.form`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const PasswordInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const ToggleIcon = styled(Image)`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text_black};
  font-size: ${({ theme }) => theme.fontSize.base};
`;

const LoginButton = styled.button`
  width: 100%;
  height: 44px;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.key_color};
  color: ${({ theme }) => theme.colors.text_white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 600;
  cursor: pointer;
`;

const ErrorMessage = styled.span`
  height: 14px;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text_red};
  font-size: ${({ theme }) => theme.fontSize.base};
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
