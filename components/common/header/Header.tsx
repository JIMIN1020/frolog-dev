import React from 'react';
import Link from 'next/link';
import * as S from '@styles/components/common/header';
import BellIcon from 'public/icons/header/notification-bell.svg';

function Header() {
  return (
    <S.HeaderContainer>
      <Link href='/' style={{ textDecoration: 'none' }}>
        <S.Logo>Frolog</S.Logo>
      </Link>

      <Link href='/notice'>
        <S.NotificationIcon src={BellIcon} alt='Notifications' />
      </Link>

      <S.BottomBar />
    </S.HeaderContainer>
  );
}

export default Header;
