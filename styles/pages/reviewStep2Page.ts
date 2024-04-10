'use client';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

export const Button = styled.button<{ type: string }>`
  width: 288px;
  height: 44px;
  border-radius: 50px;
  background: ${({ theme, type }) =>
    type === 'submit' ? theme.colors.key_color : theme.colors.button_gray};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.colors.text_white};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.lg};
`;
