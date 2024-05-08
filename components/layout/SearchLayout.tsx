'use client';

import React, { createContext, useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import styled, { ThemeProvider } from 'styled-components';
import NavigationBar from '@components/common/NavigationBar';
import InputHeader from '@components/common/header/InputHeader';
import StyledComponentsRegistry from '@lib/registry';
import { theme } from '@styles/theme';
import { GlobalStyles } from '@styles/GlobalStyles';

export const InputContext = createContext({
  searchValue: '',
});

function SearchLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [searchValue, setSearchValue] = useState<string>('');

  // input context
  const contextValue = useMemo(() => ({ searchValue }), [searchValue]);

  const setScreenSize = () => {
    const vh = window.innerHeight * 0.01; // 하단 bar 제외 높이 -> 100등분 (1vh 구하기 위함)
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    setScreenSize();
  }, []);

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <InputContext.Provider value={contextValue}>
          <Container>
            <InputHeader
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
            <Content>{children}</Content>
            {pathname !== '/search-for-review' && <NavigationBar />}
          </Container>
        </InputContext.Provider>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}

export default SearchLayout;

const Container = styled.div`
  width: 100vw;
  height: fit-content;
  min-height: calc(var(--vh, 1vh) * 100);
  background-color: white;
  border-radius: 0px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  // 모바일 사이즈(최대 430px)에서 벗어날 경우 사이즈 고정
  @media screen and (min-width: 430px) {
    width: 450px;
    height: 100vh;
  }
`;

const Content = styled.div`
  flex: 1;
  width: 100%;

  // 모바일 사이즈(최대 430px)에서 벗어날 경우 사이즈 고정
  @media screen and (min-width: 430px) {
    overflow: auto;
  }
`;
