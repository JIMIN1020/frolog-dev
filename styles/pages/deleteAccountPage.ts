'use client';

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 60px;
  gap: 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.text_red};
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: 180%;
  letter-spacing: -0.408px;
`;

export const StatContainer = styled.div`
  width: 100%;
  padding: 0 30px;
  gap: 12px;
  display: flex;
  flex-direction: column;
`;

export const Stat = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text_black};

  & span {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 400;
  }

  & h5 {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 600;
  }
`;
