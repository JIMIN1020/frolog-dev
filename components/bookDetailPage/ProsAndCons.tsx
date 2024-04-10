import React from 'react';
import * as S from '@styles/components/bookDetailPage/prosAndCons';
import { ProsAndConsType } from '@data/dummyData/prosAndConsDummy';

interface ProsAndConsProps {
  type: string;
  tagData: ProsAndConsType[];
}

function ProsAndCons({ type, tagData }: ProsAndConsProps) {
  return (
    <S.Container>
      <S.Title $type={type}>{type === 'pros' ? '장점' : '단점'}</S.Title>
      <S.Wrapper>
        <S.TagContainer>
          {tagData.map((data) => {
            return (
              <S.Tag key={data.id} $type={type}>
                {data.content}
              </S.Tag>
            );
          })}
        </S.TagContainer>
      </S.Wrapper>
    </S.Container>
  );
}

export default ProsAndCons;
