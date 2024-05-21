'use client';

import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import * as S from '@styles/layout';
import useStore from 'store/store';
import { AnimatePresence } from 'framer-motion';
import LoginSheet from '@components/common/LoginSheet';
import StyledComponentsRegistry from '@lib/registry';
import { GlobalStyles } from '@styles/GlobalStyles';
import { theme } from '@styles/theme';
import Header from '../common/header/Header';
import NavigationBar from '../common/navigation/NavigationBar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpenLoginPopUp } = useStore();
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
        <S.Container>
          <Header />
          <S.Content>{children}</S.Content>
          <NavigationBar />
          <AnimatePresence>
            {isOpenLoginPopUp && <LoginSheet />}
          </AnimatePresence>
        </S.Container>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
