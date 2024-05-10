'use client';

import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as S from '@styles/pages/signUpStep2Page';

interface Form2Inputs {
  occupation: string;
  gender: string;
  birthdate: Date;
}

function SignUpStep2({ onSubmit }: { onSubmit: () => void }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Form2Inputs>({
    mode: 'onChange',
    defaultValues: {
      occupation: '',
      gender: '',
      birthdate: new Date(),
    },
  });

  const onSubmitStep2: SubmitHandler<Form2Inputs> = (data) => {
    console.log(data);
    onSubmit();
  };

  return (
    <S.Container>
      <form onSubmit={handleSubmit(onSubmitStep2)}>
        <S.Label>
          직업<span style={{ color: 'red' }}> *</span>
          {errors.occupation && (
            <S.ErrorMessage>직업을 선택해주세요.</S.ErrorMessage>
          )}
        </S.Label>
        <S.Select {...register('occupation', { required: true })}>
          <option disabled value=''>
            선택
          </option>
          <option value='no-ocu'>무직</option>
          <option value='student'>학생</option>
          <option value='worker'>직장인</option>
        </S.Select>

        <S.Label>
          성별<span style={{ color: 'red' }}> *</span>
          {errors.gender && (
            <S.ErrorMessage>성별을 선택해주세요.</S.ErrorMessage>
          )}
        </S.Label>
        <S.Select {...register('gender', { required: true })}>
          <option disabled value=''>
            선택
          </option>
          <option value='male'>남성</option>
          <option value='female'>여성</option>
          <option value='other'>그 외</option>
        </S.Select>

        <S.Label>
          생년월일<span style={{ color: 'red' }}> *</span>
          {errors.birthdate && (
            <S.ErrorMessage>생년월일을 선택해주세요.</S.ErrorMessage>
          )}
        </S.Label>
        <Controller
          control={control}
          name='birthdate'
          rules={{ required: '생년월일을 선택해주세요.' }}
          render={({ field }) => (
            <DatePicker
              placeholderText='생년월일 선택'
              onChange={(date) => field.onChange(date)}
              selected={field.value}
            />
          )}
        />

        <S.Button type='button' onClick={onSubmit}>
          가입완료
        </S.Button>
      </form>
    </S.Container>
  );
}

export default SignUpStep2;
