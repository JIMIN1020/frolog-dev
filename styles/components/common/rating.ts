'use client';

import styled from 'styled-components';
import Image from 'next/image';

export const RatingContainer = styled.div<{ $gap: number }>`
  display: flex;
  align-items: center;
  gap: ${({ $gap }) => $gap}px;
`;

export const RatingNumber = styled.span<{ $fontSize: number }>`
  color: ${({ theme }) => theme.colors.text_black};
  text-align: right;
  font-size: ${({ $fontSize }) => $fontSize}px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.04px;
  padding-left: 5px;
`;

export const StarIcon = styled(Image)<{ $starSize: number }>`
  width: ${({ $starSize }) => $starSize}px;
  height: ${({ $starSize }) => $starSize}px;
`;
