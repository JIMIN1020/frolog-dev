'use client';

import React from 'react';
import { BookDataType } from '@data/dummyData/recommendDummy';
import Image from 'next/image';
import styled from 'styled-components';
import Rating from '../Rating';

interface BookCardHorizontalProps {
  bookData: BookDataType;
}

function BookCardWithBtn({ bookData }: BookCardHorizontalProps) {
  const { img, rating, name, author, summary } = bookData;
  return (
    <BookContainer>
      <BookImg src={img} alt='임시' width={110} height={140} />
      <Content>
        <Rating rating={rating} starSize={14} gap={4} fontSize={10} />
        <BookTitle>{name}</BookTitle>
        <Author>{author}</Author>
        <Summary>{summary}</Summary>
      </Content>
    </BookContainer>
  );
}

export default BookCardWithBtn;

export const BookContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  border-radius: 8px;
  padding: 12px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.key_color_light};
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
  padding-top: 10px;
`;

export const BookTitle = styled.h5`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: 400;
`;

export const Author = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colortext_gray};
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
