import React, { useEffect } from 'react';
import Check from 'public/icons/signUp/check.svg';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';
import PasswordInput from './PasswordInput';
import { SignUpFormValues } from '../form/SignupFormSchema';

interface Props {
  setIsPasswordValid: React.Dispatch<React.SetStateAction<boolean>>;
}

function PasswordValidation({ setIsPasswordValid }: Props) {
  const { watch } = useFormContext<SignUpFormValues>();
  const password = watch('password');

  useEffect(() => {
    setIsPasswordValid(isPasswordValid);
  }, [password]);

  const isUpperCase = /[A-Z]/.test(password);
  const isLowerCase = /[a-z]/.test(password);
  const isDigit = /[0-9]/.test(password);
  const isSpecialChar = /[!@#$%^&*]/.test(password);
  const isValidLength = password.length >= 8 && password.length <= 20;

  const isPasswordValid =
    isUpperCase && isLowerCase && isDigit && isSpecialChar && isValidLength;

  return (
    <Container>
      <PasswordInput placeholder='비밀번호를 입력하세요' name='password' />
      <PasswordRequirements>
        <Requirement $valid={isUpperCase && isLowerCase}>
          암호 대소문자 <Check />
        </Requirement>
        <Requirement $valid={isDigit}>
          숫자 <Check />
        </Requirement>
        <Requirement $valid={isSpecialChar}>
          특수문자 <Check />
        </Requirement>
        <Requirement $valid={isValidLength}>
          8-20자 이내 <Check />
        </Requirement>
      </PasswordRequirements>
    </Container>
  );
}

export default PasswordValidation;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PasswordRequirements = styled.div`
  display: flex;
  width: 100%;
  margin-left: 4px;
  gap: 12px;
`;

const Requirement = styled.span<{ $valid: boolean }>`
  color: ${({ $valid, theme }) =>
    $valid ? theme.colors.key_color : theme.colors.text_gray};
  font-size: ${({ theme }) => theme.fontSize.base};

  display: flex;
  align-items: center;
  gap: 4px;

  & svg {
    fill: ${({ $valid, theme }) =>
      $valid ? theme.colors.key_color : theme.colors.text_gray};
  }
`;
