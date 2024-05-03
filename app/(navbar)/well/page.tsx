import WellButton from '@components/wellPage/WellButton';
import WellList from '@components/wellPage/WellList';
import React from 'react';
import * as S from '@styles/pages/wellPage';
import ProfileHeader from '@components/common/header/ProfileHeader';

function WellPage() {
  return (
    <S.Container>
      <ProfileHeader />
      <WellButton />
      <WellList />
    </S.Container>
  );
}

export default WellPage;
