import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { SignUpFormValues } from '../form/SignupFormSchema';

interface ToggleButtonProps {
  name: 'job' | 'gender' | 'birthDate';
}

function ToggleButton({ name }: ToggleButtonProps) {
  const { watch, setValue } = useFormContext<SignUpFormValues>();

  return (
    <ToggleContainer>
      <ToggleText>공개</ToggleText>
      <Button
        type='checkbox'
        checked={watch(`${name}.isPublic`)}
        onChange={(e) => setValue(`${name}.isPublic`, e.target.checked)}
      />
    </ToggleContainer>
  );
}

export default ToggleButton;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ToggleText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.text_gray};
  margin-right: 3px;
`;

const Button = styled.input`
  appearance: none;
  width: 40px;
  height: 20px;
  background: ${({ theme }) => theme.colors.button_gray};
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  outline: none;
  &:checked {
    background: ${({ theme }) => theme.colors.key_color};
  }
  &:before {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    background: ${({ theme }) => theme.colors.text_white};
    border-radius: 50%;
    top: 1px;
    left: 1px;
    transition: transform 0.2s;
  }
  &:checked:before {
    transform: translateX(20px);
  }
`;
