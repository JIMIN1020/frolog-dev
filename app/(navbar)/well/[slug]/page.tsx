import WellButton from '@components/wellPage/WellButton';
import WellList from '@components/wellPage/WellList';
import React from 'react';
import * as S from '@styles/pages/wellPage';
import ProfileHeaderWithRank from '@components/common/header/profileHeader/ProfileHeaderWithRank';

function WellPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const { slug } = params;
  const isMyWell = slug === 'test-user';
  return (
    <S.Container>
      <ProfileHeaderWithRank userId={slug} />
      {isMyWell && <WellButton />}
      <WellList userId={slug} />
    </S.Container>
  );
}

export default WellPage;
