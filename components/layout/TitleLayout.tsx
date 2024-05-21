'use client';

import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import * as S from '@styles/layout';
import StyledComponentsRegistry from '@lib/registry';
import { GlobalStyles } from '@styles/GlobalStyles';
import { theme } from '@styles/theme';
import TitleHeader from '@components/common/header/TitleHeader';
import useStore from 'store/store';
import LoginSheet from '@components/common/LoginSheet';
import { AnimatePresence } from 'framer-motion';

export default function TitleLayout({
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
          <TitleHeader />
          <S.Content>{children}</S.Content>
          <AnimatePresence>
            {isOpenLoginPopUp && <LoginSheet />}
          </AnimatePresence>
        </S.Container>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
