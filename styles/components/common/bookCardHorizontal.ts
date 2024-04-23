'use client';

import Image from 'next/image';
import styled from 'styled-components';

export const BookContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const BookImg = styled(Image)`
  width: 110px;
  height: 140px;
  border: 1px;
  background-color: lightgray;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BookTitle = styled.h5`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 400;
`;

export const Author = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.text_gray};
`;

export const Summary = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: 300;
  line-height: 140%;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

export const Icon = styled.button`
  width: 20px;
  height: 20px;
  background: none;
  border: none;
`;
