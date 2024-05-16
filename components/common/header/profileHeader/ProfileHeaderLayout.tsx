import React from 'react';
import * as S from '@styles/components/common/profileHeader';

interface ProfileHeaderLayoutProps {
  children: React.ReactNode;
  userInfo: {
    userName: string;
    achievement: string;
  };
}

function ProfileHeaderLayout({ children, userInfo }: ProfileHeaderLayoutProps) {
  return (
    <S.HeaderContainer>
      <S.LeftSection>
        <S.ProfileImage
          src='https://i.pinimg.com/736x/34/95/a8/3495a8d78c2227931f35fcbc966365ec.jpg'
          alt={`user's profile`}
        />
        <S.UserInfo>
          <S.UserName>{userInfo.userName}</S.UserName>
          <S.UserNickname>{userInfo.achievement}</S.UserNickname>
        </S.UserInfo>
      </S.LeftSection>
      {children}
    </S.HeaderContainer>
  );
}

export default ProfileHeaderLayout;
