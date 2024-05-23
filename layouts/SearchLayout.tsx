'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import styled, { ThemeProvider } from 'styled-components';
import NavigationBar from '@components/common/navigation/NavigationBar';
import InputHeader from '@components/common/header/InputHeader';
import StyledComponentsRegistry from '@lib/registry';
import { theme } from '@styles/theme';
import { GlobalStyles } from '@styles/GlobalStyles';
import useStore from 'store/store';
import LoginSheet from '@components/common/LoginSheet';
import { AnimatePresence } from 'framer-motion';
import CommentBottomSheet from '@components/comment/CommentBottomSheet';

function SearchLayout({ children }: { children: React.ReactNode }) {
  const { isOpenLoginPopUp, isOpenComment } = useStore();
  const pathname = usePathname();

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <InputHeader />
          <Content>{children}</Content>
          {pathname !== '/search-for-review' && <NavigationBar />}
          <AnimatePresence>
            {isOpenLoginPopUp && <LoginSheet />}
          </AnimatePresence>
          <AnimatePresence>
            {isOpenComment && <CommentBottomSheet />}
          </AnimatePresence>
        </Container>
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
