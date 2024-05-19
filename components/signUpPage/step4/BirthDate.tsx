import React from 'react';
import { useFormContext } from 'react-hook-form';
import * as S from '@styles/components/common/signUp';
import ToggleButton from './ToggleButton';
import { SignUpFormValues } from '../form/SignupFormSchema';

function BirthDate() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<SignUpFormValues>();

  return (
    <S.InputContainer>
      <S.TitleWrapper>
        <S.InputTitle>생년월일</S.InputTitle>
        <ToggleButton name='birthDate' />
      </S.TitleWrapper>
      <S.FormInput
        type='date'
        disabled={!watch('birthDate.isPublic')}
        {...register('birthDate.date')}
      />
      <S.Message $isError={true}>{errors.birthDate?.date?.message}</S.Message>
    </S.InputContainer>
  );
}

export default BirthDate;
