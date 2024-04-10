'use client';

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 23px;
`;

export const NextButton = styled.button<{ disabled: boolean }>`
  width: 288px;
  height: 44px;
  flex-shrink: 0;
  margin-bottom: 20px;
  border-radius: 50px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  transition: background-color 0.3s;
  color: ${({ theme }) => theme.colors.text_white};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.lg};

  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.button_gray : theme.colors.key_color};
`;

export const ValidationError = styled.div`
  color: ${({ theme }) => theme.colors.error_red};
  font-size: ${({ theme }) => theme.fontSize.base};
`;
