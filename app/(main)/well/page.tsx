import ProfileBar from '@components/common/profileBar/ProfileBar';
import WellButton from '@components/wellPage/WellButton';
import WellList from '@components/wellPage/WellList';
import React from 'react';
import * as S from '@styles/pages/wellPage';

function WellPage() {
  return (
    <S.Container>
      <ProfileBar
        user={{
          id: 'user1',
          name: '김혜나',
          nickname: '느긋한 돌맹이',
          profilePicture:
            'https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg',
        }}
        popUp={false}
      />
      <WellButton />
      <WellList />
    </S.Container>
  );
}

export default WellPage;
