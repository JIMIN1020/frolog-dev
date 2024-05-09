'use client';

import styled from 'styled-components';

export const BookContainer = styled.div`
  width: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const BookImg = styled.img`
  width: 110px;
  height: 140px;
  border: 1px;
  background-color: lightgray;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const BookTitle = styled.h5`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 400;
`;

export const Summary = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 300;
  line-height: 140%;
  text-align: center;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;
