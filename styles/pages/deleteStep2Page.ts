'use client';

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 80px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Title = styled.h2`
  width: 100%;
  color: ${({ theme }) => theme.colors.text_red};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  line-height: 140%;
`;

export const Message = styled.p`
  color: #0038ff;
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 180%;
  letter-spacing: -0.408px;
`;
