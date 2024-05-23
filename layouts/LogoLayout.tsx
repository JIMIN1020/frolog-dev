'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as S from '@styles/layout';
import StyledComponentsRegistry from '@lib/registry';
import { GlobalStyles } from '@styles/GlobalStyles';
import { theme } from '@styles/theme';
import LogoHeader from '@components/common/header/LogoHeader';

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <S.Container>
          <LogoHeader />
          <S.Content>{children}</S.Content>
        </S.Container>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}

export default DefaultLayout;
