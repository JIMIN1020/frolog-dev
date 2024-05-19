import * as S from '@styles/components/common/signUp';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { SignUpFormValues } from '../form/SignupFormSchema';

function Nickname() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<SignUpFormValues>();

  return (
    <S.InputContainer>
      <S.InputTitle>
        닉네임 <small>*</small>
      </S.InputTitle>
      <S.FormInput
        type='text'
        placeholder='닉네임을 입력하세요(한글, 영문 대소문자, 숫자 12자이내)'
        {...register('nickname')}
      />
      <S.Message $isError={Boolean(errors.nickname)}>
        {errors.nickname
          ? errors.nickname.message
          : watch('nickname') && '사용 가능한 닉네임입니다'}
      </S.Message>
    </S.InputContainer>
  );
}

export default Nickname;
