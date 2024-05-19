'use client';

import styled from 'styled-components';

export const SignUpContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  padding: 30px;
  padding-bottom: 60px;
  gap: 40px;
`;

export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StepTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  padding: 40px 0;
  line-height: 140%;
  margin-bottom: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.key_color};
`;

export const InputTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize.lg};

  & small {
    color: ${({ theme }) => theme.colors.error_red};
    margin-left: 4px;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Message = styled.span<{ $isError: boolean }>`
  height: 14px;
  color: ${({ theme, $isError }) =>
    $isError ? theme.colors.error_red : theme.colors.key_color_deep};
  font-size: ${({ theme }) => theme.fontSize.base};
`;

export const FormInput = styled.input<{ disabled?: boolean }>`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  padding: 16px 10px;
  border: 1px solid ${({ theme }) => theme.colors.button_gray};
  border-radius: 12px;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-family: 'Noto Sans KR';
  background-color: ${({ theme }) => theme.colors.bg_white};
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.text_lightgray : theme.colors.text_black};
`;
