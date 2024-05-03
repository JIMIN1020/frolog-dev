'use client';

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface FormInputs {
  email: string;
  emailDomain: string;
  name: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
  birthdate: Date;
  occupation: string;
  gender: string;
}

function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm<FormInputs>();

  const router = useRouter();

  const onSubmit = (data: FormInputs) => {
    console.log(data);
    // TODO: 백엔드로 데이터를 전송하는 API 호출 로직 추가.
    router.push('/signup-success');
  };

  const handleCancel = () => {
    router.push('/');
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>
        이메일 <span style={{ color: 'red' }}> * </span>
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </Label>
      <EmailContainer>
        <EmailInput
          {...register('email', {
            required: '이메일 앞부분은 필수 입력입니다.',
          })}
          placeholder='이메일 앞부분을 입력해주세요'
        />
        @
        <Select {...register('emailDomain')} defaultValue=''>
          <option disabled value=''>
            선택
          </option>
          <option value='@gmail.com'>gmail.com</option>
          <option value='@naver.com'>naver.com</option>
          <option value='@daum.net'>daum.net</option>
          <option value='@hanmail.net'>hanmail.net</option>
          <option value='@icloud.com'>icloud.com</option>
          <option value='@kakao.com'>kakao.com</option>
        </Select>
      </EmailContainer>
      <Label>
        이름<span style={{ color: 'red' }}> *</span>
        {errors.name && <ErrorMessage>이름을 입력해주세요.</ErrorMessage>}
      </Label>
      <Input
        {...register('name', { required: true })}
        placeholder='이름을 입력해주세요'
      />
      <Label>
        닉네임<span style={{ color: 'red' }}> *</span>
        {errors.nickname && <ErrorMessage>닉네임을 입력해주세요.</ErrorMessage>}
      </Label>
      <Input
        {...register('nickname', { required: true })}
        placeholder='닉네임을 입력해주세요'
      />
      <Label>
        비밀번호<span style={{ color: 'red' }}> *</span>
        {errors.password && (
          <ErrorMessage>
            문자, 숫자, 특수문자를 포함해야 합니다. (8-20자)
          </ErrorMessage>
        )}
      </Label>
      <Input
        type='password'
        {...register('password', {
          required: true,
          minLength: 8,
          maxLength: 20,
        })}
        placeholder='비밀번호 입력(문자, 숫자, 특수문자 포함 8-20자)'
      />
      <Label>
        비밀번호 확인<span style={{ color: 'red' }}> *</span>
        {errors.passwordConfirm && (
          <ErrorMessage>{errors.passwordConfirm.message}</ErrorMessage>
        )}
      </Label>
      <Input
        type='password'
        {...register('passwordConfirm', {
          validate: (value) =>
            value === watch('password') || '비밀번호가 일치하지 않습니다.',
        })}
        placeholder='비밀번호를 재입력해주세요'
      />
      <Label>
        직업<span style={{ color: 'red' }}> *</span>
      </Label>{' '}
      {/** 수정 필요 */}
      <Select {...register('occupation')} defaultValue=''>
        <option disabled value=''>
          선택
        </option>
        <option value='business'> 경영.사무.금융. 보험직</option>
        <option value='medical'> 보건 의료직</option>
        <option value='developer'>개발자</option>
        <option value='designer'>디자이너</option>
        <option value='student'>학생</option>
        <option value='other'>기타</option>
      </Select>
      <Label>
        성별<span style={{ color: 'red' }}> *</span>
      </Label>
      <Select {...register('gender')} defaultValue=''>
        <option disabled value=''>
          선택
        </option>
        <option value='male'>남성</option>
        <option value='female'>여성</option>
        <option value='other'>그외</option>
      </Select>
      <Label>
        생년월일<span style={{ color: 'red' }}> *</span>
      </Label>
      <Controller
        control={control}
        name='birthdate'
        render={({ field }) => (
          <DatePicker
            placeholderText='생년월일을 선택해주세요'
            onChange={(date: Date | null) => field.onChange(date)}
            selected={field.value}
          />
        )}
      />
      <Button type='submit'>가입완료</Button>
      <Button type='button' onClick={handleCancel}>
        가입 취소
      </Button>
    </Form>
  );
}

export default SignUpForm;

const Form = styled.form`
  gap: 12px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 50px;
`;
const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.text_black};
  margin-bottom: 5px;
  display: flex;
  font-weight: 500;
`;

const Input = styled.input`
  width: 320px;
  height: 30px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.button_gray};
  border-radius: 5px;
`;

const EmailContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const EmailInput = styled.input`
  width: 185px;
  height: 30px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.button_gray};
  border-radius: 5px;
`;

const Select = styled.select`
  width: 97px;
  height: 30px;
  font-size: ${({ theme }) => theme.fontSize.base};
  padding: 2px;
  border: 1px solid ${({ theme }) => theme.colors.button_gray};
  border-radius: 5px;
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error_red};
  font-size: ${({ theme }) => theme.fontSize.base};
  margin-left: 10px;
`;

const Button = styled.button`
  width: 288px;
  height: 30px;
  font-size: ${({ theme }) => theme.fontSize.lg};
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.key_color};
  color: ${({ theme }) => theme.colors.text_white};
  margin-top: 40px;
  border-radius: 50px;
  &:last-child {
    background-color: ${({ theme }) => theme.colors.button_gray};
    margin: 10px 0 20px 0;
  }
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
