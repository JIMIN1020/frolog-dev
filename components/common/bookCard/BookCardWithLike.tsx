'use client';

import React, { useState } from 'react';
import * as S from '@styles/components/common/bookCardWithLike';
import { BookDataType } from '@data/dummyData/recommendDummy';
import Image from 'next/image';
import likeDefault from 'public/icons/bottomSheet/LikeDefault.svg';
import likeClicked from 'public/icons/bottomSheet/LikeClicked.svg';
import Rating from '../Rating';

interface BookCardHorizontalProps {
  bookData: BookDataType;
}

function BookCardWithLike({ bookData }: BookCardHorizontalProps) {
  const { img, rating, name, author, summary } = bookData;
  const [like, setLike] = useState(false);

  return (
    <S.Card>
      <S.BookContainer>
        <S.BookImg src={img} alt='임시' width={110} height={140} />
        <S.Content>
          <Rating rating={rating} starSize={14} gap={4} fontSize={10} />
          <S.BookTitle>{name}</S.BookTitle>
          <S.Author>{author}</S.Author>
          <S.Summary>{summary}</S.Summary>
        </S.Content>
        <S.Icon onClick={() => setLike((prev) => !prev)}>
          <Image src={like ? likeClicked : likeDefault} alt='like' />
        </S.Icon>
      </S.BookContainer>
    </S.Card>
  );
}

export default BookCardWithLike;
