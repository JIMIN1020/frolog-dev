import React from 'react';
import * as S from '@styles/components/common/profileHeader';

function ProfileHeaderLayout({ children }: { children: React.ReactNode }) {
  return (
    <S.HeaderContainer>
      <S.LeftSection>
        <S.ProfileImage
          src='https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg'
          alt={`user's profile`}
        />
        <S.UserInfo>
          <S.UserName>김혜나</S.UserName>
          <S.UserNickname>느긋한 돌멩이</S.UserNickname>
        </S.UserInfo>
      </S.LeftSection>
      {children}
    </S.HeaderContainer>
  );
}

export default ProfileHeaderLayout;
