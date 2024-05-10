'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';
import * as S from '@styles/pages/signUpStep1Page';

interface SignUpStep1Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

function SignUpStep1({ setStep }: SignUpStep1Props) {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  /* ----- 다음 단계 이동 함수 ----- */
  const handleNext = () => {
    if (
      !errors.email &&
      !errors.nickname &&
      !errors.password &&
      !errors.passwordConfirm
    ) {
      setStep(2); // 다음 단계로 이동
    }
  };

  return (
    <S.Container>
      <S.Label>
        이메일<span style={{ color: 'red' }}> *</span>
        {errors.email && (
          <S.ErrorMessage>{errors.email?.message?.toString()}</S.ErrorMessage>
        )}
      </S.Label>
      <S.Input
        {...register('email', { required: '이메일은 필수입니다.' })}
        placeholder='이메일을 입력하세요'
      />

      <S.Label>
        닉네임<span style={{ color: 'red' }}> *</span>
        {errors.nickname && (
          <S.ErrorMessage>{errors.nickname.message?.toString()}</S.ErrorMessage>
        )}
      </S.Label>
      <S.Input
        {...register('nickname', { required: '닉네임은 필수입니다.' })}
        placeholder='닉네임을 입력해주세요'
      />

      <S.Label>
        비밀번호<span style={{ color: 'red' }}> *</span>
        {errors.password && (
          <S.ErrorMessage>{errors.password.message?.toString()}</S.ErrorMessage>
        )}
      </S.Label>
      <S.Input
        type='password'
        {...register('password', { required: '비밀번호는 필수입니다.' })}
        placeholder='비밀번호 입력(대소문자, 숫자, 특수문자 포함 8-20자)'
      />

      <S.Label>
        비밀번호 확인<span style={{ color: 'red' }}> *</span>
        {errors.passwordConfirm && (
          <S.ErrorMessage>
            {errors.passwordConfirm.message?.toString()}
          </S.ErrorMessage>
        )}
      </S.Label>
      <S.Input
        type='password'
        {...register('passwordConfirm', {
          required: '비밀번호 재입력은 필수입니다.',
          validate: (value) =>
            value === watch('password') || '비밀번호가 맞지 않습니다.',
        })}
        placeholder='비밀번호 재입력하세요'
      />
      <S.Button type='button' onClick={handleNext}>
        다음
      </S.Button>
    </S.Container>
  );
}

export default SignUpStep1;
