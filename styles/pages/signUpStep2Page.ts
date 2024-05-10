'use client';

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 23px;
  padding-bottom: 20px;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.text_black};
  margin-bottom: 5px;
  display: flex;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 320px;
  height: 30px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.button_gray};
  border-radius: 5px;
`;

export const Select = styled.select`
  width: 97px;
  height: 30px;
  font-size: ${({ theme }) => theme.fontSize.base};
  padding: 2px;
  border: 1px solid ${({ theme }) => theme.colors.button_gray};
  border-radius: 5px;
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error_red};
  font-size: ${({ theme }) => theme.fontSize.base};
  margin-left: 10px;
`;

export const Button = styled.button`
  width: 288px;
  height: 30px;
  font-size: ${({ theme }) => theme.fontSize.lg};
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.key_color};
  color: ${({ theme }) => theme.colors.text_white};
  margin-top: 100px;
  border-radius: 50px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
