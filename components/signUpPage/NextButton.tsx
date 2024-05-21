'use client';

import React from 'react';
import styled from 'styled-components';

interface NextButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit';
}

function NextButton({
  onClick,
  children,
  disabled,
  type = 'button',
}: NextButtonProps) {
  return (
    <Button type={type} onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
}

export default NextButton;

const Button = styled.button<{ disabled?: boolean }>`
  width: 100%;
  height: 45px;
  border-radius: 50px;
  background: ${({ theme, disabled }) =>
    disabled ? theme.colors.button_gray : theme.colors.key_color};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.text_white};
  font-size: ${({ theme }) => theme.fontSize.lg};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:disabled {
    background: ${({ theme }) => theme.colors.button_gray};
  }
`;
