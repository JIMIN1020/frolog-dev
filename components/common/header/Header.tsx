import React from 'react';
import Link from 'next/link';
import * as S from '@styles/components/common/header';
import { ICONS } from 'constants/icon';

function Header() {
  return (
    <S.HeaderContainer>
      <Link href='/' style={{ textDecoration: 'none' }}>
        <S.Logo>Frolog</S.Logo>
      </Link>

      <Link href='/notice'>
        <S.NotificationIcon
          src={ICONS.header.notification}
          alt='Notifications'
          width={24}
          height={24}
        />
      </Link>

      <S.BottomBar />
    </S.HeaderContainer>
  );
}

export default Header;
