'use client';

import styled from 'styled-components';

/* ----- 스크롤 컨테이너 (height 제한 없음) ----- */
export const Container = styled.div`
  width: 100vw;
  min-height: calc(var(--vh, 1vh) * 100);
  background-color: ${({ theme }) => theme.colors.bg_white};
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

/* ----- 100vh 컨테이너 (내부에서만 스크롤) ----- */
export const VhContainer = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  background-color: ${({ theme }) => theme.colors.bg_white};
  border-radius: 0px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  // 모바일 사이즈(최대 430px)에서 벗어날 경우 사이즈 고정
  @media screen and (min-width: 430px) {
    width: 450px;
    height: 100vh;
  }
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;

  // 모바일 사이즈(최대 430px)에서 벗어날 경우 사이즈 고정
  @media screen and (min-width: 430px) {
    overflow: auto;
  }
`;
