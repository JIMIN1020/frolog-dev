import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import BellIcon from 'public/icons/header/notification-bell.svg';
import Image from 'next/image';

function Header() {
  return (
    <HeaderContainer>
      <Link href='/' style={{ textDecoration: 'none' }}>
        <Logo>Frolog</Logo>
      </Link>

      <Link href='/notice'>
        <NotificationIcon src={BellIcon} alt='Notifications' />
      </Link>

      <BottomBar />
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.bg_white};

  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 800;
`;

const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.key_color};
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

const NotificationIcon = styled(Image)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const BottomBar = styled.div`
  width: 100%;
  height: 8px;
  flex-shrink: 0;
  background: #acd1ad;
  position: absolute;
  left: 0;
  bottom: 0;
`;
