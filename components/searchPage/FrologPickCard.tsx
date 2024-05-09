import React from 'react';
import * as S from '@styles/components/searchPage/frologPickCard';
import { FrologPickType } from '../../data/dummyData/frologPickDummy';

interface FrologPickCardProps {
  bookData: FrologPickType;
}

function FrologPickCard({ bookData }: FrologPickCardProps) {
  return (
    <S.BookContainer>
      <S.BookImg src={bookData.img} alt='임시' />
      <S.Content>
        <S.BookTitle>{bookData.name}</S.BookTitle>
        <S.Summary>{bookData.summary}</S.Summary>
      </S.Content>
    </S.BookContainer>
  );
}

export default FrologPickCard;
