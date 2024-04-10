'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as S from '@styles/layout';
import StyledComponentsRegistry from '@lib/registry';
import { GlobalStyles } from '@styles/GlobalStyles';
import { theme } from '@styles/theme';
import Header from '../common/Header';
import NavigationBar from '../common/NavigationBar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <S.Container>
          <Header />
          <S.Content>{children}</S.Content>
          <NavigationBar />
        </S.Container>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
