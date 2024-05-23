'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as S from '@styles/layout';
import StyledComponentsRegistry from '@lib/registry';
import { GlobalStyles } from '@styles/GlobalStyles';
import MyPagePopUp from '@components/common/popUp/MyPagePopUp';
import LikeBottomSheet from '@components/wellPage/LikeBottomSheet';
import { theme } from '@styles/theme';
import LoginSheet from '@components/common/LoginSheet';
import { AnimatePresence } from 'framer-motion';
import useStore from 'store/store';
import NavigationBar from '../components/common/navigation/NavigationBar';

export default function NavBarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpenLoginPopUp, isOpenLike, isOpenMyPageEdit } = useStore();

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <S.Container>
          <S.Content>{children}</S.Content>
          <NavigationBar />
          <AnimatePresence>
            {isOpenLoginPopUp && <LoginSheet />}
          </AnimatePresence>
          <AnimatePresence>{isOpenLike && <LikeBottomSheet />}</AnimatePresence>
          <AnimatePresence>
            {isOpenMyPageEdit && <MyPagePopUp />}
          </AnimatePresence>
        </S.Container>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
