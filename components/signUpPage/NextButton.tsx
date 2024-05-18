import React from 'react';
import styled from 'styled-components';

interface NextButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

function NextButton({ onClick, children, disabled }: NextButtonProps) {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
}

export default NextButton;

const Button = styled.button<{ disabled?: boolean }>`
  width: 288px;
  height: 44px;
  border-radius: 50px;
  margin-top: 120px;
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
