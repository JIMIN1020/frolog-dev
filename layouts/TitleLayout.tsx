'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as S from '@styles/layout';
import StyledComponentsRegistry from '@lib/registry';
import { GlobalStyles } from '@styles/GlobalStyles';
import { theme } from '@styles/theme';
import TitleHeader from '@components/common/header/TitleHeader';
import useStore from 'store/store';
import LoginSheet from '@components/common/LoginSheet';
import { AnimatePresence } from 'framer-motion';
import CommentBottomSheet from '@components/comment/CommentBottomSheet';

export default function TitleLayout({
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
          <TitleHeader />
          <S.Content>{children}</S.Content>
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
