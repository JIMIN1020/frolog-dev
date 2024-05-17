import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import Image from 'next/image';
import { ICONS } from 'constants/icon';

function NavigationBar() {
  const pathname = usePathname();

  return (
    <NavigationBarContainer>
      <NavItem href='/'>
        <Icon
          src={
            pathname === '/'
              ? ICONS.navigationBar.home.clicked
              : ICONS.navigationBar.home.default
          }
          alt='home'
          width={24}
          height={24}
          style={{ width: '24px', height: '24px' }}
        />
        <Label>홈</Label>
      </NavItem>
      <NavItem href='/search'>
        <Icon
          src={
            pathname?.startsWith('/search')
              ? ICONS.navigationBar.search.clicked
              : ICONS.navigationBar.search.default
          }
          alt='search'
          width={24}
          height={24}
          style={{ width: '24px', height: '24px' }}
        />
        <Label>탐색</Label>
      </NavItem>
      <NavItem href='/search-for-review'>
        <Icon
          src={ICONS.navigationBar.add}
          alt='review'
          width={39}
          height={39}
          style={{ width: '39px', height: '39px' }}
        />
      </NavItem>
      <NavItem href='/well/test-user'>
        <Icon
          src={
            pathname?.startsWith('/well/test-user')
              ? ICONS.navigationBar.well.clicked
              : ICONS.navigationBar.well.default
          }
          alt='well'
          width={20}
          height={18}
          style={{ width: '20px', height: '18px' }}
        />
        <Label>우물</Label>
      </NavItem>
      <NavItem href='/profile/test-user'>
        <Icon
          src={
            pathname?.startsWith('/profile/test-user')
              ? ICONS.navigationBar.profile.clicked
              : ICONS.navigationBar.profile.default
          }
          alt='profile'
          width={24}
          height={24}
          style={{ width: '24px', height: '24px' }}
        />
        <Label>내 정보</Label>
      </NavItem>
    </NavigationBarContainer>
  );
}

export default NavigationBar;

const NavigationBarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70px;
  width: 100%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.bg_white};

  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  left: 0;
  z-index: 500;
`;

const NavItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;

const Icon = styled(Image)`
  flex-shrink: 0;
`;

const Label = styled.span`
  display: flex;
  width: 26px;
  height: 9px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.04px;
  margin-top: 5px;
`;
