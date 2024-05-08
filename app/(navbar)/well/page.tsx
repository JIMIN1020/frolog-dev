import WellButton from '@components/wellPage/WellButton';
import WellList from '@components/wellPage/WellList';
import React from 'react';
import * as S from '@styles/pages/wellPage';
import ProfileHeaderWithRank from '@components/common/header/profileHeader/ProfileHeaderWithRank';

function WellPage() {
  return (
    <S.Container>
      <ProfileHeaderWithRank />
      <WellButton />
      <WellList />
    </S.Container>
  );
}

export default WellPage;
