import React from 'react';
import * as S from '@styles/components/well/wellList';
import { wellDummy } from '@data/dummyData/wellDummy';
import WellItem from './WellItem';

function WellList() {
  return (
    <S.Content>
      <S.ListTitle>내 우물 리스트</S.ListTitle>
      <S.WellWrapper>
        {wellDummy.map((data) => {
          return <WellItem key={data.id} data={data} />;
        })}
      </S.WellWrapper>
    </S.Content>
  );
}

export default WellList;
