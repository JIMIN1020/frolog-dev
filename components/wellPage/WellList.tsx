'use client';

import React from 'react';
import { useMockData } from 'mock/MockData';
import * as S from '@styles/components/well/wellList';
import WellItem from './WellItem';

function WellList() {
  const { well } = useMockData();
  return (
    <S.Content>
      <S.ListTitle>내 우물 리스트</S.ListTitle>
      <S.WellWrapper>
        {well.map((data: any) => {
          return <WellItem key={data.id} data={data} />;
        })}
      </S.WellWrapper>
    </S.Content>
  );
}

export default WellList;
