'use client';

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 23px;
  padding-bottom: 20px;
`;

export const BookWrapper = styled.div`
  min-width: 160px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 8px;

  & h2 {
    color: ${({ theme }) => theme.colors.text_black};
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  & span {
    font-size: ${({ theme }) => theme.fontSize.base};
    color: ${({ theme }) => theme.colors.text_gray};
  }
`;

export const ValidationError = styled.div`
  height: 12px;
  color: ${({ theme }) => theme.colors.error_red};
  font-size: ${({ theme }) => theme.fontSize.base};
`;
