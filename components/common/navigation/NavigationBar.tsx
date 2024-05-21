import React from 'react';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import { ICONS } from 'constants/icon';
import NavItem from './NavItem';

function NavigationBar() {
  const pathname = usePathname();

  return (
    <NavigationBarContainer>
      <NavItem
        href='/'
        iconUrl={
          pathname === '/'
            ? ICONS.navigationBar.home.clicked
            : ICONS.navigationBar.home.default
        }
        size={24}
        label='홈'
      />
      <NavItem
        href='/search'
        iconUrl={
          pathname === '/search'
            ? ICONS.navigationBar.search.clicked
            : ICONS.navigationBar.search.default
        }
        size={24}
        label='탐색'
      />
      <NavItem
        href='/search-for-review'
        iconUrl={ICONS.navigationBar.add}
        size={39}
      />
      <NavItem
        href='/well/test-user'
        iconUrl={
          pathname?.startsWith('/well/test-user')
            ? ICONS.navigationBar.well.clicked
            : ICONS.navigationBar.well.default
        }
        size={20}
        label='우물'
      />
      <NavItem
        href='/profile/test-user'
        iconUrl={
          pathname?.startsWith('/profile/test-user')
            ? ICONS.navigationBar.profile.clicked
            : ICONS.navigationBar.profile.default
        }
        size={24}
        label='내 정보'
      />
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
