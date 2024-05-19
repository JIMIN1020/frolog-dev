import Image from 'next/image';
import { ICONS } from 'constants/icon';
import { FormInput } from '@styles/components/common/signUp';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { SignUpFormValues } from '../form/SignupFormSchema';

interface PasswordInputProps {
  placeholder: string;
  name: string;
}

function PasswordInput({ placeholder, name }: PasswordInputProps) {
  const { register } = useFormContext<SignUpFormValues>();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputWrapper>
      <FormInput
        placeholder={placeholder}
        type={showPassword ? 'text' : 'password'}
        {...register(name as keyof SignUpFormValues)}
      />
      <TogglePasswordVisibility
        onClick={() => setShowPassword((prev) => !prev)}
      >
        <Image
          src={showPassword ? ICONS.singUp.seepw : ICONS.singUp.noSeePw}
          alt='Toggle Password Visibility'
          width={20}
          height={20}
        />
      </TogglePasswordVisibility>
    </InputWrapper>
  );
}

export default PasswordInput;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

const TogglePasswordVisibility = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;
