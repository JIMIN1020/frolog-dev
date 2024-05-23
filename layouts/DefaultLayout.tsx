'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as S from '@styles/layout';
import StyledComponentsRegistry from '@lib/registry';
import { GlobalStyles } from '@styles/GlobalStyles';
import { theme } from '@styles/theme';
import useStore from 'store/store';
import LoginSheet from '@components/common/LoginSheet';
import { AnimatePresence } from 'framer-motion';

function DefaultLayout({ children }: { children: React.ReactNode }) {
  const { isOpenLoginPopUp } = useStore();

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <S.Container>
          <S.Content>{children}</S.Content>
          <AnimatePresence>
            {isOpenLoginPopUp && <LoginSheet />}
          </AnimatePresence>
        </S.Container>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}

export default DefaultLayout;
