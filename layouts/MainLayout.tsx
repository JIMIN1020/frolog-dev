'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as S from '@styles/layout';
import useStore from 'store/store';
import CommentBottomSheet from '@components/comment/CommentBottomSheet';
import { AnimatePresence } from 'framer-motion';
import LoginSheet from '@components/common/LoginSheet';
import StyledComponentsRegistry from '@lib/registry';
import { GlobalStyles } from '@styles/GlobalStyles';
import { theme } from '@styles/theme';
import Header from '../components/common/header/Header';
import NavigationBar from '../components/common/navigation/NavigationBar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpenLoginPopUp, isOpenComment } = useStore();

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
          <AnimatePresence>
            {isOpenComment && <CommentBottomSheet />}
          </AnimatePresence>
        </S.Container>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
