'use client';

import Rating from '@components/common/Rating';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { BookDataType } from '@data/dummyData/recommendDummy';

interface SelectBookProps {
  bookData: BookDataType;
}

function BookResult({ bookData }: SelectBookProps) {
  return (
    <Container>
      <BookImg src={bookData.img} alt='' width={160} height={230} />
      <Content>
        <TitleAndAuthor>
          {bookData.name} / {bookData.author}
        </TitleAndAuthor>
        <Rating rating={bookData.rating} starSize={12} gap={4} fontSize={10} />
      </Content>
    </Container>
  );
}

export default BookResult;

const Container = styled.div`
  width: 160px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const BookImg = styled(Image)`
  width: 100%;
  height: 230px;
  border: 1px solid ${({ theme }) => theme.colors.input_gray};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const TitleAndAuthor = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text_gray};
  line-height: 140%;
`;
