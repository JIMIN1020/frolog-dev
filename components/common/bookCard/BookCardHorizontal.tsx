import React from 'react';
import * as S from '@styles/components/common/bookCardHorizontal';
import { BookDataType } from '@data/dummyData/recommendDummy';
import Rating from '../Rating';

interface BookCardHorizontalProps {
  bookData: BookDataType;
}

function BookCardHorizontal({ bookData }: BookCardHorizontalProps) {
  const { img, rating, name, author, summary } = bookData;
  return (
    <S.BookContainer>
      <S.BookImg src={img} alt='임시' width={110} height={140} />
      <S.Content>
        <Rating rating={rating} starSize={14} gap={4} fontSize={10} />
        <S.BookTitle>{name}</S.BookTitle>
        <S.Author>{author}</S.Author>
        <S.Summary>{summary}</S.Summary>
      </S.Content>
    </S.BookContainer>
  );
}

export default BookCardHorizontal;
