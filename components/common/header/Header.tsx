import React from 'react';
import Link from 'next/link';
import * as S from '@styles/components/common/header';
import NotiButton from '../button/NotiButton';

function Header() {
  return (
    <S.HeaderContainer>
      <Link href='/' style={{ textDecoration: 'none' }}>
        <S.Logo>Frolog</S.Logo>
      </Link>
      <NotiButton />
      <S.BottomBar />
    </S.HeaderContainer>
  );
}

export default Header;
