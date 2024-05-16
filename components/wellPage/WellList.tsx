'use client';

import React from 'react';
import { useMockData } from 'mock/MockData';
import * as S from '@styles/components/well/wellList';
import { WellDataType, wellDummy } from '@data/dummyData/wellDummy';
import WellItem from './WellItem';

function WellList({ userId }: { userId: string }) {
  const { well } = useMockData();
  const wellData =
    userId === 'test-user'
      ? well
      : wellDummy.filter((well) => well.owner.id === userId);

  return (
    <S.Content>
      <S.ListTitle>우물 리스트</S.ListTitle>
      <S.WellWrapper>
        {wellData.map((data: WellDataType) => {
          return <WellItem key={data.id} data={data} />;
        })}
      </S.WellWrapper>
    </S.Content>
  );
}

export default WellList;
