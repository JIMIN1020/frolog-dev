import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import HomeDefaultIcon from 'public/icons/navigationBar/homeDefault.svg';
import HomeClickedIcon from 'public/icons/navigationBar/homeClicked.svg';
import SearchDefaultIcon from 'public/icons/navigationBar/searchDefault.svg';
import SearchClickedIcon from 'public/icons/navigationBar/searchClicked.svg';
import AddIcon from 'public/icons/navigationBar/add.svg';
import WellDefaultIcon from 'public/icons/navigationBar/wellDefault.svg';
import WellClickedIcon from 'public/icons/navigationBar/wellClicked.svg';
import ProfileDefaultIcon from 'public/icons/navigationBar/profileDefault.svg';
import ProfileClickedIcon from 'public/icons/navigationBar/profileClicked.svg';
import Image from 'next/image';

function NavigationBar() {
  const pathname = usePathname();

  return (
    <NavigationBarContainer>
      <NavItem href='/'>
        <Icon
          src={pathname === '/' ? HomeClickedIcon : HomeDefaultIcon}
          alt='home'
          style={{ width: '24px', height: '24px' }}
        />
        <Label>홈</Label>
      </NavItem>
      <NavItem href='/search'>
        <Icon
          src={
            pathname?.startsWith('/search')
              ? SearchClickedIcon
              : SearchDefaultIcon
          }
          alt='search'
          style={{ width: '24px', height: '24px' }}
        />
        <Label>탐색</Label>
      </NavItem>
      <NavItem href='/search-for-review'>
        <Icon
          src={AddIcon}
          alt='review'
          style={{ width: '39px', height: '39px' }}
        />
      </NavItem>
      <NavItem href='/well'>
        <Icon
          src={
            pathname?.startsWith('/well') ? WellClickedIcon : WellDefaultIcon
          }
          alt='well'
          style={{ width: '20px', height: '18px' }}
        />
        <Label>우물</Label>
      </NavItem>
      <NavItem href='/myPage'>
        <Icon
          src={
            pathname?.startsWith('/myPage')
              ? ProfileClickedIcon
              : ProfileDefaultIcon
          }
          alt='myPage'
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
