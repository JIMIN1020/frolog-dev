'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as S from '@styles/layout';
import StyledComponentsRegistry from '@lib/registry';
import { GlobalStyles } from '@styles/GlobalStyles';
import { theme } from '@styles/theme';
import TitleHeader from '@components/common/header/TitleHeader';

export default function TitleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <S.Container>
          <TitleHeader />
          <S.Content>{children}</S.Content>
        </S.Container>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
