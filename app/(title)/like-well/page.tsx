import WellItem from '@components/wellPage/WellItem';
import { wellDummy } from '@data/dummyData/wellDummy';
import React from 'react';
import * as S from '@styles/pages/like-well';

function page() {
  return (
    <S.Container>
      {wellDummy.map((data) => {
        return <WellItem key={data.id} data={data} />;
      })}
    </S.Container>
  );
}

export default page;
